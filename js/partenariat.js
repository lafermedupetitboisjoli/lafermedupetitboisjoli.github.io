document.addEventListener('DOMContentLoaded', () => {
  const d = partenariatData;

  document.getElementById('subtitle-page').textContent = d.hero.sousTitre;
  document.getElementById('intro-texte').textContent = d.intro;

  const majeurs = d.partenaires.filter(p => p.isMajeur);
  const nonMajeurs = d.partenaires.filter(p => !p.isMajeur);

  const majeursContainer = document.getElementById('majeurs-container');
  majeurs.forEach((p) => {
    const images = Array.isArray(p.images) ? p.images : [];
    const galleryHtml = images.length
      ? `<div class="part-gallery">${images.map((src, idx) => `
          <figure class="part-photo fade-up">
            <img src="${src}" alt="${p.nom} ${idx + 1}" loading="lazy" class="part-clickable" data-full-src="${src}">
          </figure>`).join('')}
        </div>`
      : '';

    majeursContainer.innerHTML += `
      <article class="part-major-block fade-up">
        <div class="section-title part-major-title">
          <div class="section-divider">
            <div class="line"></div>
            <span class="icon">${p.icone || '🤝'}</span>
            <div class="line"></div>
          </div>
          <h3>${p.nom}</h3>
          <p>${p.texte || ''}</p>
        </div>
        ${galleryHtml}
      </article>`;
  });

  const cards = document.getElementById('partenaires-grid');
  nonMajeurs.forEach(p => {
    const ctaHtml = p.lien
      ? `<a href="${p.lien}" target="_blank" rel="noopener" class="btn btn-outline">${p.cta}</a>`
      : '';

    cards.innerHTML += `
      <article class="part-card fade-up">
        <div class="part-logo-wrap">
          <img src="${p.logo}" alt="Logo ${p.nom}" class="part-logo part-clickable" loading="lazy" data-full-src="${p.logo}">
        </div>
        <div class="part-body">
          <h3>${p.nom}</h3>
          <p>${p.texte}</p>
          ${ctaHtml}
        </div>
      </article>`;
  });

  const lightbox = document.getElementById('part-lightbox');
  const lightboxImg = document.getElementById('part-lightbox-img');
  const closeBtn = document.getElementById('part-lightbox-close');

  const openLightbox = (src, alt) => {
    lightboxImg.src = src;
    lightboxImg.alt = alt || 'Image agrandie';
    lightbox.hidden = false;
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    lightbox.hidden = true;
    lightboxImg.src = '';
    lightboxImg.alt = '';
    document.body.style.overflow = '';
  };

  document.querySelectorAll('.part-clickable').forEach(img => {
    img.addEventListener('click', () => {
      openLightbox(img.dataset.fullSrc || img.src, img.alt);
    });
  });

  closeBtn.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !lightbox.hidden) {
      closeLightbox();
    }
  });

  setTimeout(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          observer.unobserve(e.target);
        }
      });
    }, { threshold: 0.1 });
    document.querySelectorAll('.fade-up:not(.visible)').forEach(el => observer.observe(el));
  }, 100);
});
