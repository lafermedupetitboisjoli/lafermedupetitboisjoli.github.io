document.addEventListener('DOMContentLoaded', () => {
  const d = animauxData;
  document.getElementById('subtitle-page').textContent = d.intro.sousTitre;
  document.getElementById('intro-texte').textContent = d.intro.texte;

  const speciesFiltersEl = document.getElementById('species-filters');
  const selectedSpecies = new Set(d.animaux.map(a => a.espece));
  const normalizeSpecies = (value) => value.trim().toLowerCase();
  const speciesList = [...new Map(d.animaux.map(a => [normalizeSpecies(a.espece), a.espece])).values()];

  const renderSpeciesFilters = () => {
    speciesFiltersEl.innerHTML = speciesList.map(species => {
      const key = normalizeSpecies(species);
      const active = selectedSpecies.has(species);
      return `
        <button type="button" class="species-toggle ${active ? 'active' : ''}" data-species="${key}" aria-pressed="${active}">
          ${species}
        </button>`;
    }).join('');
  };

  const actionGrid = document.getElementById('action-grid');
  d.actions.forEach(a => {
    actionGrid.innerHTML += `
        <section>
          <div class="secti on-inner">
            <div class="section-title fade-up">
              <div class="section-divider">
                <div class="line"></div>
                <span class="icon">🌿</span>
                <div class="line"></div>
              </div>
              <h2 id="parrainage-titre">${a.titre}</h2>
            </div>
            <div class="location-card fade-up" style="max-width:800px;margin:0 auto;">
              <div style="font-size:4rem;text-align:center;flex-shrink:0;">${a.icone}</div>
              <div class="location-info">
                <p id="parrainage-texte" style="font-size:1.05rem;line-height:1.8;">${a.texte}</p>
                <div style="margin-top:1.5rem;">
                  <a href="${a.boutton.lien}" class="btn btn-secondary">${a.boutton.label}</a>
                </div>
              </div>
            </div>
          </div>
        </section>`;
  });

  const grid = document.getElementById('animaux-grid');
  d.animaux.forEach((a, idx) => {
    const hasPhotos = a.photos && a.photos.length > 0;

    let galleryHtml;
    if (hasPhotos) {
      const slides = a.photos.map(p =>
        `<div class="gallery-slide">
           <img src="assets/photos/${p}" alt="Photo de ${a.nom}" loading="lazy">
         </div>`
      ).join('');
      const dots = a.photos.length > 1
        ? `<div class="gallery-dots">
            ${a.photos.map((_, i) =>
              `<button class="gallery-dot ${i === 0 ? 'active' : ''}" data-i="${i}"></button>`
            ).join('')}
           </div>`
        : '';
      const arrows = a.photos.length > 1
        ? `<button class="gallery-btn prev" aria-label="Précédent">◀</button>
           <button class="gallery-btn next" aria-label="Suivant">▶</button>`
        : '';
      galleryHtml = `
        <div class="animal-gallery">
          <div class="gallery-track">${slides}</div>
          ${arrows}
          ${dots}
        </div>`;
    } else {
      galleryHtml = `
        <div class="animal-gallery">
          <div class="gallery-track">
            <div class="gallery-slide emoji-slide">${a.icone}</div>
          </div>
        </div>`;
    }

    const cardId = `animal-card-${idx}`;
    grid.innerHTML += `
      <div class="animal-card fade-up" id="${cardId}" data-espece="${normalizeSpecies(a.espece)}">
        <div class="animal-top-badges"> 
          <span class="animal-tag">${a.tag}</span>
          ${a.nouveaute ? '<span class="new-badge">✨ Nouveau</span>' : ''}
          ${a.pension ? '<span class="pension-badge">🤗 Pension</span>' : ''}
        </div>
        ${galleryHtml}
        <div class="animal-body">
          <h3>${a.nom}</h3>
          <div class="animal-espece">${a.espece}</div>
          <div class="animal-caractere">💛 ${a.caractere}</div>
          <p>${a.description}</p>
          <div class="animal-facts">
            <div class="animal-fact-row">
              <span class="animal-fact-label">🌿 Alimentation</span>
              <span>${a.alimentation}</span>
            </div>
            <div class="animal-fact-row">
              <span class="animal-fact-label">⭐ Le saviez-vous ?</span>
              <span>${a.particularite}</span>
            </div>
          </div>
        </div>
      </div>`;
  });

  const applySpeciesFilter = () => {
    document.querySelectorAll('.animal-card').forEach(card => {
      const espece = card.dataset.espece;
      card.style.display = selectedSpecies.has(d.animaux[+card.id.replace('animal-card-', '')].espece) ? '' : 'none';
    });
    renderSpeciesFilters();
  };

  speciesFiltersEl.addEventListener('click', (e) => {
    const btn = e.target.closest('.species-toggle');
    if (!btn) return;
    const speciesLabel = d.animaux.find(a => normalizeSpecies(a.espece) === btn.dataset.species)?.espece;
    if (!speciesLabel) return;

    if (selectedSpecies.has(speciesLabel)) {
      selectedSpecies.delete(speciesLabel);
    } else {
      selectedSpecies.add(speciesLabel);
    }

    applySpeciesFilter();
  });

  renderSpeciesFilters();
  applySpeciesFilter();

  document.querySelectorAll('.animal-card').forEach(card => {
    const track = card.querySelector('.gallery-track');
    const dots = card.querySelectorAll('.gallery-dot');
    const prev = card.querySelector('.gallery-btn.prev');
    const next = card.querySelector('.gallery-btn.next');
    if (!track || !prev) return;

    let current = 0;
    const total = track.children.length;

    const goTo = (n) => {
      current = (n + total) % total;
      track.style.transform = `translateX(-${current * 100}%)`;
      dots.forEach((d, i) => d.classList.toggle('active', i === current));
    };

    prev.addEventListener('click', () => goTo(current - 1));
    next.addEventListener('click', () => goTo(current + 1));
    dots.forEach(d => d.addEventListener('click', () => goTo(+d.dataset.i)));
    goTo(0);
  });

  const lb = document.getElementById('lightbox');
  const lbImg = document.getElementById('lb-img');
  const lbCaption = document.getElementById('lb-caption');
  const lbDotsEl = document.getElementById('lb-dots');
  const lbPrev = document.getElementById('lb-prev');
  const lbNext = document.getElementById('lb-next');
  const lbClose = document.getElementById('lb-close');

  let lbPhotos = [], lbAnimalName = '', lbIndex = 0;

  const lbGoTo = (n) => {
    lbIndex = (n + lbPhotos.length) % lbPhotos.length;
    lbImg.classList.add('fading');
    setTimeout(() => {
      lbImg.src = 'assets/photos/' + lbPhotos[lbIndex];
      lbImg.alt = lbAnimalName + ' — photo ' + (lbIndex + 1);
      lbImg.classList.remove('fading');
    }, 160);
    lbCaption.textContent = lbAnimalName + (lbPhotos.length > 1 ? ` (${lbIndex + 1} / ${lbPhotos.length})` : '');
    lbDotsEl.querySelectorAll('.lb-dot').forEach((d, i) => d.classList.toggle('active', i === lbIndex));
  };

  const openLightbox = (photos, name, startIndex) => {
    lbPhotos = photos;
    lbAnimalName = name;

    lbDotsEl.innerHTML = photos.length > 1
      ? photos.map((_, i) => `<button class="lb-dot" data-i="${i}"></button>`).join('')
      : '';
    lbDotsEl.querySelectorAll('.lb-dot').forEach(d =>
      d.addEventListener('click', () => lbGoTo(+d.dataset.i))
    );

    lbPrev.classList.toggle('hidden', photos.length <= 1);
    lbNext.classList.toggle('hidden', photos.length <= 1);
    lbImg.src = '';
    lb.classList.add('open');
    document.body.style.overflow = 'hidden';
    lbGoTo(startIndex);
  };

  const closeLightbox = () => {
    lb.classList.remove('open');
    document.body.style.overflow = '';
    lbImg.src = '';
  };

  document.getElementById('animaux-grid').addEventListener('click', (e) => {
    const imgEl = e.target.closest('.gallery-slide img');
    if (!imgEl) return;
    const card = imgEl.closest('.animal-card');
    const cardIdx = +card.id.replace('animal-card-', '');
    const a = d.animaux[cardIdx];
    if (!a.photos || !a.photos.length) return;
    const track = card.querySelector('.gallery-track');
    const currentSlide = Math.round(Math.abs(parseFloat(track.style.transform.replace(/[^0-9.-]/g, '') || '0')) / 100);
    openLightbox(a.photos, a.nom, isNaN(currentSlide) ? 0 : currentSlide);
  });

  lbClose.addEventListener('click', closeLightbox);
  lb.addEventListener('click', (e) => { if (e.target === lb) closeLightbox(); });
  lbPrev.addEventListener('click', () => lbGoTo(lbIndex - 1));
  lbNext.addEventListener('click', () => lbGoTo(lbIndex + 1));

  document.addEventListener('keydown', (e) => {
    if (!lb.classList.contains('open')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') lbGoTo(lbIndex - 1);
    if (e.key === 'ArrowRight') lbGoTo(lbIndex + 1);
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