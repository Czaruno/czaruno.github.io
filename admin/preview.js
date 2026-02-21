(function () {
  if (!window.CMS) return;

  const h = window.h;
  const CMS = window.CMS;

  CMS.registerPreviewStyle('/assets/css/style.css');
  CMS.registerPreviewStyle(
    "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=IBM+Plex+Mono:wght@400;600&display=swap"
  );
  if (CMS.registerPreviewScript) {
    CMS.registerPreviewScript('https://cdn.tailwindcss.com');
  }
  CMS.registerPreviewStyle(
    `
    body {
      font-family: 'Space Grotesk', -apple-system, sans-serif;
      background: #ffffff;
    }
    .preview-shell {
      padding: 2.5rem;
      max-width: 1100px;
      margin: 0 auto;
    }
    .preview-kicker {
      font-family: 'IBM Plex Mono', monospace;
      font-size: 0.7rem;
      text-transform: uppercase;
      letter-spacing: 0.2em;
      color: #6b7280;
      margin-bottom: 0.75rem;
    }
    .preview-title {
      font-size: 2.5rem;
      font-weight: 700;
      margin-bottom: 1.5rem;
    }
    .preview-card {
      border: 2px solid #000;
      padding: 1.5rem;
      margin-bottom: 1.5rem;
    }
    .preview-meta {
      font-family: 'IBM Plex Mono', monospace;
      font-size: 0.7rem;
      text-transform: uppercase;
      letter-spacing: 0.15em;
      color: #6b7280;
    }
    .preview-list {
      margin: 0;
      padding-left: 1.25rem;
    }
    .preview-list li {
      margin-bottom: 0.5rem;
    }
    .preview-shell img {
      max-width: 100%;
      height: auto;
      display: block;
    }
    .preview-card img {
      max-height: 360px;
      object-fit: cover;
    }
  `,
    { raw: true }
  );

  const fallback = (value, fallbackText) => value || fallbackText;

  const BlogPreview = ({ entry, widgetFor }) => {
    const title = entry.getIn(['data', 'title']);
    const date = entry.getIn(['data', 'date']);
    const excerpt = entry.getIn(['data', 'excerpt']);

    return h('div', { className: 'preview-shell' }, [
      h('div', { className: 'preview-kicker' }, 'Writing (writing.html)'),
      h('div', { className: 'preview-title' }, fallback(title, 'Untitled Post')),
      h('div', { className: 'preview-meta' }, date ? new Date(date).toDateString() : ''),
      excerpt ? h('p', null, excerpt) : null,
      h('div', { className: 'preview-card' }, widgetFor('body')),
    ]);
  };

  const FeedPreview = ({ entry }) => {
    const sortMode = entry.getIn(['data', 'sort_mode']) || 'chronological';
    const items = entry.getIn(['data', 'items']) || [];

    return h('div', { className: 'preview-shell' }, [
      h('div', { className: 'preview-kicker' }, 'Dynamic Writing Feed'),
      h('div', { className: 'preview-title' }, `Feed (${sortMode})`),
      h(
        'div',
        null,
        items.map((item, index) => {
          const type = item.get('type');
          const caption = item.get('caption');
          const url = item.get('x_url') || item.get('url');
          const title = item.get('title') || item.get('post') || 'Untitled';
          const date = item.get('date');

          return h('div', { className: 'preview-card', key: `feed-${index}` }, [
            h('div', { className: 'preview-meta' }, type ? type.toUpperCase() : 'ITEM'),
            h('div', { className: 'preview-title', style: { fontSize: '1.25rem' } }, title),
            date ? h('div', { className: 'preview-meta' }, new Date(date).toDateString()) : null,
            caption ? h('p', null, caption) : null,
            url ? h('a', { href: url }, url) : null,
          ]);
        })
      ),
    ]);
  };

  CMS.registerPreviewTemplate('blog', BlogPreview);
  CMS.registerPreviewTemplate('feed', FeedPreview);
  CMS.registerPreviewTemplate('homepage_feed', FeedPreview);
})();
