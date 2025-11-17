#!/usr/bin/env python3
"""
Parse SquareSpace WordPress export XML and extract articles into markdown files
"""

import xml.etree.ElementTree as ET
import re
import html
from pathlib import Path
from datetime import datetime

def clean_html(raw_html):
    """Remove HTML tags and clean up text"""
    if not raw_html:
        return ''
    
    # Remove CDATA wrappers
    text = re.sub(r'<!\[CDATA\[(.*?)\]\]>', r'\1', raw_html, flags=re.DOTALL)
    
    # Convert common HTML entities
    text = html.unescape(text)
    
    # Remove image blocks and figure tags (we'll handle images separately)
    text = re.sub(r'<figure.*?</figure>', '', text, flags=re.DOTALL)
    text = re.sub(r'<div[^>]*image-block.*?</div>', '', text, flags=re.DOTALL)
    
    # Extract content from div.sqs-html-content
    content_match = re.search(r'<div class="sqs-html-content">(.*?)</div>', text, re.DOTALL)
    if content_match:
        text = content_match.group(1)
    
    # Convert <p> tags to double newlines
    text = re.sub(r'<p[^>]*>', '\n\n', text)
    text = re.sub(r'</p>', '', text)
    
    # Convert <br> tags
    text = re.sub(r'<br\s*/?>', '\n', text)
    
    # Convert links
    text = re.sub(r'<a[^>]*href="([^"]*)"[^>]*>(.*?)</a>', r'[\2](\1)', text)
    
    # Convert strong/em tags
    text = re.sub(r'<strong>(.*?)</strong>', r'**\1**', text)
    text = re.sub(r'<em>(.*?)</em>', r'*\1*', text)
    
    # Convert lists
    text = re.sub(r'<ul[^>]*>', '\n', text)
    text = re.sub(r'</ul>', '\n', text)
    text = re.sub(r'<li[^>]*>', '- ', text)
    text = re.sub(r'</li>', '\n', text)
    
    # Remove any remaining HTML tags
    text = re.sub(r'<[^>]+>', '', text)
    
    # Clean up whitespace
    text = re.sub(r'\n\s*\n\s*\n+', '\n\n', text)
    text = text.strip()
    
    return text

def parse_wordpress_xml(xml_file):
    """Parse WordPress export XML and extract articles"""
    
    tree = ET.parse(xml_file)
    root = tree.getroot()
    
    # Define namespaces
    namespaces = {
        'content': 'http://purl.org/rss/1.0/modules/content/',
        'excerpt': 'http://wordpress.org/export/1.2/excerpt/',
        'wp': 'http://wordpress.org/export/1.2/',
        'dc': 'http://purl.org/dc/elements/1.1/'
    }
    
    articles = []
    
    # Find all items
    for item in root.findall('.//item'):
        # Extract fields
        title = item.find('title')
        title = title.text if title is not None else 'Untitled'
        
        link = item.find('link')
        link = link.text if link is not None else ''
        
        pub_date = item.find('pubDate')
        pub_date_str = pub_date.text if pub_date is not None else ''
        
        content = item.find('content:encoded', namespaces)
        content_html = content.text if content is not None else ''
        
        excerpt = item.find('excerpt:encoded', namespaces)
        excerpt_html = excerpt.text if excerpt is not None else ''
        
        creator = item.find('dc:creator', namespaces)
        author = creator.text if creator is not None else 'Unknown'
        
        # Get categories/tags
        categories = []
        for cat in item.findall('category'):
            if cat.text:
                categories.append(cat.text)
        
        # Parse date
        date_obj = None
        if pub_date_str:
            try:
                date_obj = datetime.strptime(pub_date_str, '%a, %d %b %Y %H:%M:%S %z')
            except:
                pass
        
        # Clean content
        content_clean = clean_html(content_html)
        excerpt_clean = clean_html(excerpt_html) if excerpt_html else ''
        
        article = {
            'title': title,
            'link': link,
            'date': date_obj,
            'date_str': pub_date_str,
            'author': author,
            'categories': categories,
            'excerpt': excerpt_clean,
            'content': content_clean,
            'raw_html': content_html
        }
        
        articles.append(article)
    
    return articles

def save_articles_to_markdown(articles, output_dir):
    """Save articles as individual markdown files"""
    
    output_path = Path(output_dir)
    output_path.mkdir(parents=True, exist_ok=True)
    
    for i, article in enumerate(articles):
        # Create filename from date and title
        if article['date']:
            date_prefix = article['date'].strftime('%Y-%m-%d')
        else:
            date_prefix = f'undated-{i:03d}'
        
        # Slugify title
        slug = re.sub(r'[^\w\s-]', '', article['title'].lower())
        slug = re.sub(r'[-\s]+', '-', slug)
        slug = slug[:50]  # Limit length
        
        filename = f"{date_prefix}-{slug}.md"
        filepath = output_path / filename
        
        # Create frontmatter
        frontmatter = f"""---
title: "{article['title']}"
date: {article['date'].strftime('%Y-%m-%d') if article['date'] else 'unknown'}
author: {article['author']}
categories: {', '.join(article['categories'][:5])}
link: {article['link']}
---

"""
        
        # Add excerpt if exists
        if article['excerpt']:
            frontmatter += f"*{article['excerpt']}*\n\n---\n\n"
        
        # Write file
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(frontmatter)
            f.write(article['content'])
        
    print(f"✓ Saved {len(articles)} articles to {output_dir}")

def generate_index(articles, output_file):
    """Generate an index/catalog of all articles"""
    
    # Sort by date (newest first)
    sorted_articles = sorted(
        [a for a in articles if a['date']], 
        key=lambda x: x['date'], 
        reverse=True
    )
    
    # Group by year
    by_year = {}
    for article in sorted_articles:
        year = article['date'].year
        if year not in by_year:
            by_year[year] = []
        by_year[year].append(article)
    
    # Write index
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write("# Writing Archive Index\n\n")
        f.write(f"**Total Articles:** {len(sorted_articles)}\n\n")
        
        for year in sorted(by_year.keys(), reverse=True):
            f.write(f"\n## {year} ({len(by_year[year])} articles)\n\n")
            
            for article in by_year[year]:
                date_str = article['date'].strftime('%B %d, %Y')
                f.write(f"- **{date_str}** - [{article['title']}]({article['link']})\n")
                if article['excerpt']:
                    excerpt_short = article['excerpt'][:150] + '...' if len(article['excerpt']) > 150 else article['excerpt']
                    f.write(f"  _{excerpt_short}_\n")
                f.write("\n")
    
    print(f"✓ Generated index at {output_file}")

if __name__ == '__main__':
    xml_file = 'data/SquareSpace_Articles_2023/Squarespace-Wordpress-Export-07-16-2023.xml'
    output_dir = 'data/articles/markdown'
    index_file = 'data/articles/INDEX.md'
    
    print(f"Parsing {xml_file}...")
    articles = parse_wordpress_xml(xml_file)
    
    print(f"Found {len(articles)} articles")
    
    # Filter for published articles only
    published = [a for a in articles if a['content'].strip()]
    print(f"Found {len(published)} published articles with content")
    
    # Save to markdown
    save_articles_to_markdown(published, output_dir)
    
    # Generate index
    generate_index(published, index_file)
    
    print("\n✓ Done!")
