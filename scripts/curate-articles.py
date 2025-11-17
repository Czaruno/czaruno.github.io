#!/usr/bin/env python3
"""
Interactive article curation tool
Helps select which articles to publish on the new site
"""

import os
import shutil
import re
from pathlib import Path

# Topics to de-emphasize (you can edit this list)
DEEMPHASIZE_TOPICS = [
    'blacklivesmatter',
    '#blacklivesmatter',
    'black lives matter',
    'covid-19',  # Unless it's about long-term tech trends
    'pandemic',  # Unless it's about lasting changes
]

# Keywords for articles you want to emphasize
EMPHASIS_TOPICS = [
    'ai',
    'artificial intelligence',
    'machine learning',
    'indigenous',
    'sinu',
    'kogi',
    'technology trends',
    'tech foresight',
    'cloud',
    'architecture',
    'equity',
    'bias',
    'algorithm',
    'future',
]

def parse_frontmatter(filepath):
    """Simple frontmatter parser"""
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Extract frontmatter
    match = re.match(r'^---\s*\n(.*?)\n---\s*\n(.*)$', content, re.DOTALL)
    if not match:
        return {}, content
    
    fm_text, body = match.groups()
    
    # Parse frontmatter fields
    fm = {}
    for line in fm_text.split('\n'):
        if ':' in line:
            key, value = line.split(':', 1)
            fm[key.strip()] = value.strip().strip('"')
    
    return fm, body

def analyze_article(filepath):
    """Analyze an article and score its relevance"""
    fm, content = parse_frontmatter(filepath)
    
    title = fm.get('title', '').lower()
    categories = fm.get('categories', '').lower()
    content_lower = content.lower()
    
    full_text = f"{title} {content_lower} {categories}"
    
    # Check for de-emphasized topics
    deemph_score = sum(1 for topic in DEEMPHASIZE_TOPICS if topic in full_text)
    
    # Check for emphasized topics
    emph_score = sum(1 for topic in EMPHASIS_TOPICS if topic in full_text)
    
    # Calculate relevance score
    relevance = emph_score - deemph_score
    
    # Check if it's written by Larry
    author = fm.get('author', '').lower()
    by_larry = 'larry' in author or 'sinu' in author
    
    # Get excerpt from content
    excerpt = content[:200] if content else ''
    
    return {
        'title': fm.get('title', 'Untitled'),
        'date': fm.get('date', ''),
        'author': fm.get('author', 'Unknown'),
        'categories': fm.get('categories', '').split(',') if fm.get('categories') else [],
        'relevance': relevance,
        'by_larry': by_larry,
        'deemph_count': deemph_score,
        'emph_count': emph_score,
        'excerpt': excerpt,
        'filepath': filepath
    }

def curate_articles(source_dir, output_dir, min_relevance=-1, only_larry=False):
    """Curate articles based on criteria"""
    
    source_path = Path(source_dir)
    output_path = Path(output_dir)
    output_path.mkdir(parents=True, exist_ok=True)
    
    articles = []
    
    print("Analyzing articles...")
    for filepath in source_path.glob('*.md'):
        try:
            analysis = analyze_article(filepath)
            articles.append(analysis)
        except Exception as e:
            print(f"Error analyzing {filepath.name}: {e}")
    
    # Filter articles
    filtered = [
        a for a in articles 
        if a['relevance'] >= min_relevance 
        and (not only_larry or a['by_larry'])
    ]
    
    # Sort by date (newest first)
    filtered.sort(key=lambda x: x['date'] if x['date'] else '', reverse=True)
    
    print(f"\n{'='*80}")
    print(f"CURATION RESULTS")
    print(f"{'='*80}")
    print(f"Total articles analyzed: {len(articles)}")
    print(f"Articles meeting criteria: {len(filtered)}")
    print(f"\nCriteria:")
    print(f"  - Min relevance score: {min_relevance}")
    print(f"  - Only Larry-authored: {only_larry}")
    print(f"\n{'='*80}\n")
    
    # Show sample of top articles
    print("TOP 20 ARTICLES TO CONSIDER:\n")
    for i, article in enumerate(filtered[:20], 1):
        print(f"{i}. [{article['relevance']:+2d}] {article['date']} - {article['title']}")
        print(f"   Author: {article['author']}")
        if article['categories']:
            print(f"   Categories: {', '.join(article['categories'][:3])}")
        print()
    
    # Offer to copy articles
    print(f"\n{'='*80}")
    response = input(f"\nCopy {len(filtered)} articles to {output_dir}? (yes/no): ")
    
    if response.lower() in ['yes', 'y']:
        for article in filtered:
            src = Path(article['filepath'])
            dst = output_path / src.name
            shutil.copy2(src, dst)
        print(f"✓ Copied {len(filtered)} articles to {output_dir}")
    else:
        print("Skipped copying. You can adjust criteria and run again.")
    
    return filtered

def interactive_mode():
    """Interactive article curation"""
    print("\n" + "="*80)
    print("LARRY VELEZ ARTICLE CURATION TOOL")
    print("="*80)
    
    source_dir = 'data/articles/markdown'
    output_dir = '_posts'
    
    print("\nThis tool helps you select which articles to publish.")
    print("\nCriteria options:")
    print("  1. All articles by Larry (high-quality, on-brand)")
    print("  2. High-relevance articles (relevance score >= 2)")
    print("  3. Medium-relevance articles (relevance score >= 0)")
    print("  4. Custom criteria")
    
    choice = input("\nSelect option (1-4): ")
    
    if choice == '1':
        articles = curate_articles(source_dir, output_dir, min_relevance=-1, only_larry=True)
    elif choice == '2':
        articles = curate_articles(source_dir, output_dir, min_relevance=2, only_larry=False)
    elif choice == '3':
        articles = curate_articles(source_dir, output_dir, min_relevance=0, only_larry=False)
    elif choice == '4':
        min_rel = int(input("Minimum relevance score (-10 to 10): "))
        only_larry = input("Only Larry-authored? (yes/no): ").lower() in ['yes', 'y']
        articles = curate_articles(source_dir, output_dir, min_relevance=min_rel, only_larry=only_larry)
    else:
        print("Invalid choice")
        return
    
    print("\n✓ Done!")

if __name__ == '__main__':
    interactive_mode()
