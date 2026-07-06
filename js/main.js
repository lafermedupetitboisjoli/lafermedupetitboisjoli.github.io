/* ============================================
   Shared JS — Navigation & Scroll animations
   ============================================ */

// Mobile nav toggle
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const nav    = document.querySelector('nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => nav.classList.toggle('open'));
    document.addEventListener('click', (e) => {
      if (!nav.contains(e.target) && !toggle.contains(e.target)) {
        nav.classList.remove('open');
      }
    });
  }

  // Mark active nav link
  const links = document.querySelectorAll('nav a');
  const current = location.pathname.split('/').pop() || 'index.html';
  links.forEach(link => {
    const href = link.getAttribute('href');
    if (href === current || (current === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  // Scroll-triggered fade-up
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
});

/* ── Shared header/footer builder ── */
function buildHeader() {
  return `
  <header>
    <div class="header-inner">
      <a href="index.html" class="logo-link">
        <img src="assets/logo/logo.jpg" alt="Logo La Ferme du Petit Bois Joli">
        <div class="site-name">
          La Ferme du<br>Petit Bois Joli
          <span>Association · Vendée</span>
        </div>
      </a>
      <button class="nav-toggle" aria-label="Menu">☰</button>
      <nav>
        <a href="index.html">🏡 Accueil</a>

        <div class="nav-dropdown">
          <button class="nav-drop-btn">🌿 La Ferme <span class="drop-arrow">▾</span></button>
          <div class="nav-drop-menu">
            <a href="historique.html">📜 Notre histoire</a>
            <a href="activites.html">🎯 Nos activités</a>
            <a href="phototeque.html">📷 Photothèque</a>
          </div>
        </div>
        <a href="actualite.html">📰 Actualités</a>
        <a href="animaux.html">🐾 Nos animaux</a>
        <div class="nav-dropdown">
          <button class="nav-drop-btn">🤝 Communauté <span class="drop-arrow">▾</span></button>
          <div class="nav-drop-menu">
            <a href="benevoles.html">👥 Les bénévoles</a>
            <a href="rejoindre.html">🌻 Nous rejoindre</a>
          </div>
        </div>
        <a href="dons.html" class="nav-cta">💚 Faire un don</a>
      </nav>
    </div>
  </header>`;
}

function buildFooter() {
  return `
  <footer>
    <div class="footer-inner">
      <div class="footer-col">
        <h4>La Ferme du Petit Bois Joli</h4>
        <p>Une ferme pédagogique en Vendée, lieu de partage, d'apprentissage et de connexion avec la nature.</p>
      </div>
      <div class="footer-col">
        <h4>📍 Nous trouver</h4>
        <p>2 La Brouardière</p>
        <p>85170 Beaufou</p>
        <p>Vendée, France</p>
      </div>
      <div class="footer-col">
        <h4>📱 Réseaux sociaux</h4>
        <a href="https://www.facebook.com/p/La-Ferme-du-Petit-Bois-Joli-61573866923563/" target="_blank" rel="noopener" style="display:flex;align-items:center;gap:0.5rem;">
          <img src="https://cdn.simpleicons.org/facebook/B8926A" width="15" height="15" alt=""> Facebook
        </a>
        <a href="https://www.instagram.com/lafermedupetitboisjoli/" target="_blank" rel="noopener" style="display:flex;align-items:center;gap:0.5rem;">
          <img src="https://cdn.simpleicons.org/instagram/B8926A" width="15" height="15" alt=""> Instagram
        </a>
        <a href="https://www.tiktok.com/@lafermedupetitboi" target="_blank" rel="noopener" style="display:flex;align-items:center;gap:0.5rem;">
          <img src="https://cdn.simpleicons.org/tiktok/B8926A" width="15" height="15" alt=""> TikTok
        </a>
      </div>
      <div class="footer-col">
        <h4>✉️ Contact</h4>
        <p>contact@fermedupetitboisjoli.fr</p>
      </div>
    </div>
    <div class="footer-bottom">
      <p>© 2025 La Ferme du Petit Bois Joli — Association loi 1901 <span class="footer-hearts">♥ ♥ ♥</span></p>
      <p style="margin-top:0.4rem;font-size:0.78rem;">Fait avec amour pour les animaux et les humains</p>
    </div>
  </footer>`;
}

/* ── inject header & footer ── */
document.addEventListener('DOMContentLoaded', () => {
  const headerEl = document.getElementById('site-header');
  const footerEl = document.getElementById('site-footer');
  if (headerEl) headerEl.outerHTML = buildHeader();
  if (footerEl) footerEl.outerHTML = buildFooter();

  // Re-run active link detection after injection
  setTimeout(() => {
    const links = document.querySelectorAll('nav a');
    const current = location.pathname.split('/').pop() || 'index.html';
    links.forEach(link => {
      const href = link.getAttribute('href');
      if (href === current || (current === '' && href === 'index.html')) {
        link.classList.add('active');
      }
    });
    const toggle = document.querySelector('.nav-toggle');
    const nav    = document.querySelector('nav');
    if (toggle && nav) {
      toggle.addEventListener('click', () => nav.classList.toggle('open'));
      document.addEventListener('click', (e) => {
        if (!nav.contains(e.target) && !toggle.contains(e.target)) {
          nav.classList.remove('open');
        }
      });
    }

    // ── Dropdowns ──
    const dropdowns = document.querySelectorAll('.nav-dropdown');
    dropdowns.forEach(dd => {
      const btn  = dd.querySelector('.nav-drop-btn');
      const menu = dd.querySelector('.nav-drop-menu');
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const isOpen = dd.classList.contains('open');
        // close all
        dropdowns.forEach(d => d.classList.remove('open'));
        if (!isOpen) dd.classList.add('open');
      });
    });

    // Close dropdowns on outside click
    document.addEventListener('click', () => {
      dropdowns.forEach(d => d.classList.remove('open'));
    });

    // Mark parent dropdown active if a child link is current
    dropdowns.forEach(dd => {
      const childLinks = dd.querySelectorAll('a');
      childLinks.forEach(link => {
        if (link.getAttribute('href') === current) {
          dd.querySelector('.nav-drop-btn').classList.add('active');
        }
      });
    });

  }, 0);
});
