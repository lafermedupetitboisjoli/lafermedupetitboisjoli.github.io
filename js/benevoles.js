document.addEventListener('DOMContentLoaded', () => {
  const d = benevolesData;

  const avatar = (b) => b.photo
    ? `<div class="benevole-avatar" style="padding:0;overflow:hidden;"><img src="assets/photos/${b.photo}" alt="${b.prenom}" style="width:100%;height:100%;object-fit:cover;border-radius:50%;"></div>`
    : `<div class="benevole-avatar">${b.icone}</div>`;
  const gridResp = document.getElementById('grid-responsables');
  const gridMini = document.getElementById('grid-benevoles');
  const miniTitle = document.getElementById('mini-title');

  let hasMini = false;

  d.benevoles.forEach(b => {
    if (b.isResponsable) {
      const comps = (b.competences || []).map(c => `<span class="competence-tag">${c}</span>`).join('');
      const rejoindreClass = b.rejoindre ? 'rejoindre' : '';
      const btnHtml = b.rejoindre
        ? `<div style="margin-top:1rem;"><a href="rejoindre.html" class="btn btn-primary" style="font-size:0.85rem;padding:0.5rem 1.2rem;">🌻 Rejoindre l'équipe</a></div>`
        : '';
      gridResp.innerHTML += `
        <div class="benevole-card ${rejoindreClass} fade-up">
          ${avatar(b)}
          <div class="benevole-prenom">${b.prenom}</div>
          ${b.role ? `<div class="benevole-role">${b.role}</div>` : ''}
          ${b.description ? `<p class="benevole-desc">${b.description}</p>` : ''}
          ${comps ? `<div class="competences">${comps}</div>` : ''}
          ${btnHtml}
        </div>`;
    } else {
      hasMini = true;
      gridMini.innerHTML += `
        <div class="benevole-mini fade-up">
          ${avatar(b)}
          <div class="benevole-prenom">${b.prenom}</div>
        </div>`;
    }
  });

  if (hasMini) miniTitle.style.display = 'block';

  document.getElementById('subtitle-page').textContent = d.intro.sousTitre;
  document.getElementById('intro-texte').textContent = d.intro.texte;

  const p = d.parrainage;
  document.getElementById('parrainage-titre').textContent = p.titre;
  document.getElementById('parrainage-intro').textContent = p.intro;
  document.getElementById('parrainage-merci').textContent = p.merci;
  document.getElementById('parrainage-attente').textContent = p.attente;
  document.getElementById('parrainage-conclusion').textContent = p.conclusion;
  document.getElementById('parrainage-cta').textContent = p.cta;

  const parrainageFolder = p.parrains.imageFolder || 'assets/parrainage/';
  const parrainageLabels = new Map(
    (p.parrains.actionsParrains || []).map((item) => [item.file, item.label])
  );
  
  const parrainesEl = document.getElementById('parraines-list');
  const parrainesActionsEl = document.getElementById('parraines-actions');
  p.parrains.parrains.forEach(parr => {
    const thumbnailsHtml = (parr.images || []).map((imageFile, imageIndex) => {
      const label = parrainageLabels.get(imageFile) || `${parr.nom} avec ${parr.parrains.join(', ')}`;
      const src = `${parrainageFolder}${imageFile}`;
      return `
        <button type="button" class="benevole-parrain-thumb" data-src="${src}" data-label="${label}">
          <img src="${src}" alt="${label}" loading="lazy">
        </button>`;
    }).join('');

    parrainesEl.innerHTML += `
      <div class="benevole-parrain-card">
        <div class="benevole-parrain-icon">${parr.icone}</div>
        <div class="benevole-parrain-name">${parr.nom}</div>
        <div class="benevole-parrain-by">parrainé par<br><strong>${parr.parrains.join('<br>')}</strong></div>
        ${thumbnailsHtml ? `<div class="benevole-parrain-thumbs">${thumbnailsHtml}</div>` : ''}
      </div>`;

  });

  const thumbnailsActionsHtml = p.parrains.actionsParrains.map((action) => {
      const label = action.label;
      const src = `${parrainageFolder}${action.file}`;
      return `
        <button type="button" class="benevole-parrain-thumb" data-src="${src}" data-label="${label}">
          <img src="${src}" alt="${label}" loading="lazy">
        </button>`;
    });
    parrainesActionsEl.innerHTML += thumbnailsActionsHtml.join('');

  const attenteEl = document.getElementById('animaux-attente');
  p.animaux_attente.forEach(animal => {
    attenteEl.innerHTML += `<div class="benevole-attente-item">${animal}</div>`;
  });

  const lightbox = document.getElementById('benevole-lightbox');
  const lightboxImg = document.getElementById('benevole-lightbox-img');
  const lightboxLabel = document.getElementById('benevole-lightbox-label');
  const lightboxClose = document.getElementById('benevole-lightbox-close');

  const closeParrainageLightbox = () => {
    lightbox.hidden = true;
    lightboxImg.src = '';
    lightboxImg.alt = '';
    lightboxLabel.textContent = '';
    document.body.style.overflow = '';
  };

  const openParrainageLightbox = (src, label) => {
    lightboxImg.src = src;
    lightboxImg.alt = label;
    lightboxLabel.textContent = label;
    lightbox.hidden = false;
    document.body.style.overflow = 'hidden';
  };

  const handleParrainageThumbClick = (event) => {
    const thumb = event.target.closest('.benevole-parrain-thumb');
    if (!thumb) {
      return;
    }

    openParrainageLightbox(thumb.dataset.src, thumb.dataset.label || 'Photo de parrainage');
  };

  parrainesEl.addEventListener('click', handleParrainageThumbClick);
  if (parrainesActionsEl) {
    parrainesActionsEl.addEventListener('click', handleParrainageThumbClick);
  }

  lightboxClose.addEventListener('click', closeParrainageLightbox);
  lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox) {
      closeParrainageLightbox();
    }
  });

  document.getElementById('rejoindre-titre').textContent = d.rejoindre.titre;
  document.getElementById('rejoindre-texte').textContent = d.rejoindre.texte;

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

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !lightbox.hidden) {
      closeParrainageLightbox();
    }
  });
});