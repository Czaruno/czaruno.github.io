---
layout: default
title: Larry Velez - Technology Entrepreneur & Motoring Enthusiast
featured_articles:
  - post: 2019-09-16-are-we-teaching-ai-to-be-racist
  - post: 2020-10-29-indigenous-peoples-deserve-on-going-recognition-an
  - post: 2012-05-26-trust-the-expert-in-you
---

<style>
  /* Precision Brutalism Typography */
  @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=IBM+Plex+Mono:wght@400;600&display=swap');
  
  :root {
    --font-display: 'Space Grotesk', -apple-system, sans-serif;
    --font-mono: 'IBM Plex Mono', monospace;
    --accent: #DC2626;
  }
  
  body {
    font-family: var(--font-display);
  }
  
  .mono {
    font-family: var(--font-mono);
  }
  
  /* Grid System */
  .brutalist-grid {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: 2rem;
  }
  
  /* Geometric Accent Blocks */
  .accent-block {
    position: absolute;
    background: var(--accent);
    z-index: -1;
  }
  
  /* Sharp Edges */
  .sharp-corner {
    clip-path: polygon(0 0, 100% 0, 100% calc(100% - 2rem), calc(100% - 2rem) 100%, 0 100%);
  }
  
  /* Hero name table - equal width cells for perfect alignment */
  .hero-name-table {
    border-collapse: collapse;
    table-layout: fixed;
    /* Reduce width to bring letters closer together */
    width: auto;
  }
  .hero-name-table td {
    text-align: center;
    padding: 0 0.05em; /* Tighter horizontal padding */
    width: 20%; /* 5 columns = 20% each */
  }

  .focus-card {
    border: 2px solid #000;
    background: #fff;
    padding: 2rem;
    transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
  }

  .focus-card:hover {
    transform: translateY(-6px);
    border-color: var(--accent);
    box-shadow: 10px 10px 0 rgba(0, 0, 0, 0.08);
  }

  .focus-card.entronic {
    background: #1a1a1a;
    border-color: #38b1ba;
    color: #ffffff;
  }

  .focus-card.entronic:hover {
    border-color: #38b1ba;
    box-shadow: 10px 10px 0 rgba(56, 177, 186, 0.2);
  }

  .focus-card.entronic .card-title {
    color: #ffffff;
  }

  .focus-card.entronic .card-copy {
    color: rgba(255, 255, 255, 0.78);
  }

  .focus-card.entronic .card-cta {
    color: #f3f2a5;
  }

  .focus-card.brookwill {
    background: #eaeaee;
    border-color: #0a3f8e;
    color: #0a0a0a;
  }

  .focus-card.brookwill:hover {
    border-color: #0a3f8e;
    box-shadow: 10px 10px 0 rgba(10, 63, 142, 0.2);
  }

  .focus-card.brookwill .card-title {
    color: #0a3f8e;
  }

  .focus-card.brookwill .card-copy {
    color: #1a1a1a;
  }

  .focus-card.brookwill .card-cta {
    color: #0a3f8e;
  }

  .focus-link {
    color: inherit;
    text-decoration: none;
    display: block;
    height: 100%;
  }

  .focus-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1.75rem;
  }

  @media (max-width: 900px) {
    .focus-grid {
      grid-template-columns: 1fr;
    }
  }

  .focus-divider {
    border-top: 1px solid #e5e7eb;
    margin: 2.5rem 0;
  }

  .section-kicker {
    font-family: var(--font-mono);
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.18em;
    color: #6b7280;
    margin-bottom: 0.75rem;
  }

  .focus-callout {
    border-left: 4px solid #000;
    padding-left: 1.5rem;
  }

  .split-panel {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    gap: 2rem;
  }

  @media (max-width: 1024px) {
    .split-panel {
      grid-template-columns: 1fr;
    }
  }
</style>

<!-- Hero: Precision Brutalism -->
<section id="home" class="relative bg-black text-white overflow-hidden">
  <!-- Geometric Accent -->
  <div class="accent-block w-64 h-64 top-20 right-0 opacity-10"></div>
  
  <div class="container mx-auto px-8 py-6 md:py-8 relative z-10">
    <!-- Name/Title Block -->
    <div class="max-w-5xl">
      <div class="mono text-xs uppercase tracking-widest text-gray-400 mb-6">
        Technology Entrepreneur • Motoring Enthusiast
      </div>

      <h1 class="text-5xl md:text-7xl font-bold leading-none mb-4">
        <table class="hero-name-table">
          <tr>
            <td>L</td>
            <td>A</td>
            <td>R</td>
            <td>R</td>
            <td>Y</td>
          </tr>
          <tr>
            <td>V</td>
            <td>E</td>
            <td>L</td>
            <td>E</td>
            <td>Z</td>
          </tr>
        </table>
      </h1>
      
      <div class="w-24 h-1 bg-red-600 mb-6"></div>

      <p class="text-lg md:text-xl font-light max-w-3xl leading-relaxed text-gray-300 mb-6">
        People matter. Objects don't. I founded <a href="https://kogi.ai" target="_blank" class="font-bold text-white hover:text-red-600 transition-colors">Kogi AI</a> to turn mechanical knowledge into clear, usable guidance.
        I have built teams across payments, streaming video, and IT services, and I founded Sinu, which was acquired by Electric.ai.
      </p>

      <div class="flex gap-6 mt-8">
        <a href="/working-on" class="bg-white text-black px-6 py-3 font-bold uppercase text-xs tracking-wider hover:bg-red-600 hover:text-white transition-colors">
          What I'm Working On →
        </a>
        <a href="/writing" class="border-2 border-white px-6 py-3 font-bold uppercase text-xs tracking-wider hover:bg-white hover:text-black transition-colors">
          My Writing
        </a>
      </div>
    </div>
  </div>
  
  <!-- Bottom anchor removed to reduce fold height -->
</section>

<!-- Current Focus + Working On -->
<section id="current-work" class="bg-white text-black py-20">
  <div class="container mx-auto px-8">
    <div class="max-w-6xl mx-auto">
      <div class="split-panel mb-12">
        <div>
          <div class="mono text-xs uppercase tracking-widest text-gray-500 mb-4">Current Focus</div>
          <h2 class="text-5xl font-bold leading-tight mb-4">Kogi AI</h2>
          <p class="text-xl text-gray-700 leading-relaxed">
            Mechanical machines are crucial to our lives. To reach Mars and beyond, we need reliable vehicles. Kogi uses
            advanced AI to create continually updated, interactive 3D animations accessible on any device.
          </p>
        </div>
        <div class="focus-callout text-gray-700">
          <div class="mono text-xs uppercase tracking-widest text-gray-500 mb-3">What this unlocks</div>
          <p class="leading-relaxed">
            Faster repairs, consistent training, and fewer critical failures. The real shift is giving technicians a living
            map of how systems behave instead of static PDFs.
          </p>
          <div class="mt-6">
            <a href="https://kogi.ai" target="_blank" rel="noopener" class="font-bold inline-flex items-center gap-2 hover:text-red-600 transition-colors">
              Visit kogi.ai <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>

      <div class="focus-divider"></div>

      <div class="focus-grid">
        <div>
          <div class="section-kicker">AI Consulting</div>
          <div class="focus-card entronic">
            <a class="focus-link" href="https://entronic.com" target="_blank" rel="noopener">
              <div class="text-2xl font-bold mb-3 card-title">AI consulting for resilient teams</div>
              <p class="leading-relaxed card-copy">
                I partner with organizations to design agentic workflows, decision support tooling, and human-in-the-loop
                operations that keep teams accountable and calm under pressure.
              </p>
              <div class="mt-4 font-bold inline-flex items-center gap-2 card-cta">
                Visit entronic.com <span aria-hidden="true">→</span>
              </div>
            </a>
          </div>
        </div>
        <div>
          <div class="section-kicker">Advisory</div>
          <div class="focus-card brookwill">
            <a class="focus-link" href="https://brookwill.com" target="_blank" rel="noopener">
              <div class="text-2xl font-bold mb-3 card-title">IT teams you can scale with</div>
              <p class="leading-relaxed card-copy">
                Building durable, high-trust teams for critical technology operations. Brookwill focuses on long-term
                reliability, not short-term outsourcing.
              </p>
              <div class="mt-4 font-bold inline-flex items-center gap-2 card-cta">
                Visit brookwill.com <span aria-hidden="true">→</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Functional Excellence Teaser -->
<section id="functional-excellence" class="bg-white text-black py-32">
  <div class="container mx-auto px-8">
    <div class="max-w-6xl mx-auto">
      <div class="mono text-xs uppercase tracking-widest text-gray-500 mb-4">
        Philosophy
      </div>
      <h2 class="text-5xl font-bold leading-tight mb-12">
        Functional<br/>
        Excellence
      </h2>
      
      <div class="grid md:grid-cols-2 gap-16">
        <!-- Left: Concept -->
        <div>
          <p class="text-xl text-gray-700 leading-relaxed mb-8">
            When something has the same level of quality from every angle you experience it.
          </p>
          
          <div class="space-y-6">
            <div>
              <h3 class="font-bold text-lg mb-2">Influences</h3>
              <p class="text-gray-600">Naval Ravikant • Matt Moreman • Elon Musk • Gary Vaynerchuk</p>
            </div>
            
            <div>
              <h3 class="font-bold text-lg mb-2">Formative Books</h3>
              <p class="text-gray-600">Guns, Germs, and Steel • The Innovator's Dilemma • Seven Powers</p>
            </div>
            
            <div>
              <h3 class="font-bold text-lg mb-2">Interests</h3>
              <p class="text-gray-600">Cars • Garage Design • Modern Prefab Architecture • Indigenous Cultures</p>
            </div>
          </div>
          
        </div>
        
        <!-- Right: Visual -->
        <div class="relative">
          <div class="sharp-corner overflow-hidden">
            <img src="{{ '/assets/images/functional-excellence/garage-frame.jpg' | relative_url }}"
              alt="Precision garage workspace" class="w-full h-96 object-cover">
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Footer -->
<footer class="bg-black text-white border-t border-gray-800 py-16">
  <div class="container mx-auto px-8">
    <div class="max-w-7xl mx-auto">
      <div class="grid md:grid-cols-3 gap-12">
        <div>
          <div class="text-3xl font-bold mb-4">LV</div>
          <p class="text-gray-400 text-sm">
            Technology entrepreneur,<br/>
            motoring enthusiast.
          </p>
        </div>
        
        <div>
          <div class="mono text-xs uppercase tracking-widest text-gray-600 mb-4">Connect</div>
          <div class="space-y-2">
            <div><a href="https://www.linkedin.com/in/larryvelez/" target="_blank" class="hover:text-red-600 transition-colors">LinkedIn</a></div>
            <div><a href="https://x.com/LarryVelez" target="_blank" class="hover:text-red-600 transition-colors">Twitter</a></div>
          </div>
        </div>
        
        <div>
          <div class="mono text-xs uppercase tracking-widest text-gray-600 mb-4">Navigate</div>
          <div class="space-y-2">
            <div><a href="/working-on" class="hover:text-red-600 transition-colors">What I'm Working On</a></div>
            <div><a href="/writing" class="hover:text-red-600 transition-colors">Writing Archive</a></div>
            <div><a href="/work" class="hover:text-red-600 transition-colors">Work History</a></div>
            <div><a href="/functional-excellence" class="hover:text-red-600 transition-colors">Functional Excellence</a></div>
          </div>
        </div>
      </div>
      
      <div class="border-t border-gray-800 mt-12 pt-8 flex justify-between items-center">
        <div class="mono text-xs text-gray-600">
          © 2025 Larry Velez
        </div>
        <div class="mono text-xs text-gray-600">
          Precision is the Goal
        </div>
      </div>
    </div>
  </div>
</footer>
