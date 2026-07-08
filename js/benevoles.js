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
  const actionPhotos = (p.parrains.actionsParrains || []).flatMap((action, actionIndex) => {
    const label = action.label || 'Photo de parrainage';
    const files = Array.isArray(action.files)
      ? action.files
      : Array.isArray(action.images)
        ? action.images
        : action.file
          ? [action.file]
          : action.image
            ? [action.image]
            : [];

    return files.map((file, fileIndex) => ({
      src: `${parrainageFolder}${file}`,
      label,
      key: `${actionIndex}-${fileIndex}-${file}`,
    }));
  });
  
  const parrainesEl = document.getElementById('parraines-list');
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

  const thumbnailsActionsHtml = (p.parrains.actionsParrains || [])
    .map((action) => {
      const label = action.label || 'Photo de parrainage';
      const files = Array.isArray(action.files)
        ? action.files
        : Array.isArray(action.images)
          ? action.images
          : action.file
            ? [action.file]
            : action.image
              ? [action.image]
              : [];

      return files.map((file) => {
        const src = `${parrainageFolder}${file}`;
        const index = actionPhotos.findIndex((photo) => photo.src === src && photo.label === label);
        return `
        <button type="button" class="benevole-parrain-action-thumb" data-src="${src}" data-label="${label}" data-index="${index}">
          <img src="${src}" alt="${label}" loading="lazy">
          <div class="benevole-parrain-action-zoom">🔍</div>
          <div class="benevole-parrain-thumb-label">${label}</div>
        </button>
          `;
      }).join('');
    })
    .join('');

  const parrainesActionsEl = document.getElementById('parraines-actions');
  if (parrainesActionsEl) {
    parrainesActionsEl.innerHTML = thumbnailsActionsHtml;
    parrainesActionsEl.querySelectorAll('img').forEach((img) => {
      img.addEventListener('load', () => img.classList.add('loaded'));
    });
  }

  const attenteEl = document.getElementById('animaux-attente');
  p.animaux_attente.forEach(animal => {
    attenteEl.innerHTML += `<div class="benevole-attente-item">${animal}</div>`;
  });

  const lightbox = document.getElementById('benevole-lightbox');
  const lightboxImg = document.getElementById('benevole-lightbox-img');
  const lightboxLabel = document.getElementById('benevole-lightbox-label');
  const lightboxClose = document.getElementById('benevole-lightbox-close');
  const lightboxPrev = document.getElementById('benevole-lightbox-prev');
  const lightboxNext = document.getElementById('benevole-lightbox-next');
  const lightboxCounter = document.getElementById('benevole-lightbox-counter');
  const lightboxThumbs = document.getElementById('benevole-lightbox-thumbs');
  const parrainageThumbSelector = '.benevole-parrain-thumb, .benevole-parrain-action-thumb';
  const carouselPhotos = actionPhotos.length > 0
    ? actionPhotos
    : Array.from(parrainesEl.querySelectorAll('.benevole-parrain-thumb')).map((thumb) => ({
      src: thumb.dataset.src,
      label: thumb.dataset.label || 'Photo de parrainage',
    }));
  let currentPhotoIndex = 0;

  const renderLightboxThumbs = () => {
    if (!lightboxThumbs) {
      return;
    }

    lightboxThumbs.innerHTML = carouselPhotos.map((photo, index) => `
      <img
        src="${photo.src}"
        alt="${photo.label}"
        class="benevole-lightbox-thumb${index === currentPhotoIndex ? ' active' : ''}"
        data-index="${index}"
      >
    `).join('');

    lightboxThumbs.querySelectorAll('.benevole-lightbox-thumb').forEach((thumb) => {
      thumb.addEventListener('click', () => goToPhoto(Number(thumb.dataset.index)));
    });
  };

  const goToPhoto = (index) => {
    if (carouselPhotos.length === 0) {
      return;
    }

    currentPhotoIndex = (index + carouselPhotos.length) % carouselPhotos.length;
    const currentPhoto = carouselPhotos[currentPhotoIndex];

    lightboxImg.classList.add('fading');
    setTimeout(() => {
      lightboxImg.src = currentPhoto.src;
      lightboxImg.alt = currentPhoto.label;
      lightboxLabel.textContent = currentPhoto.label;
      lightboxCounter.textContent = `${currentPhotoIndex + 1} / ${carouselPhotos.length}`;
      lightboxImg.classList.remove('fading');
      renderLightboxThumbs();
    }, 120);
  };

  const closeParrainageLightbox = () => {
    lightbox.hidden = true;
    lightboxImg.src = '';
    lightboxImg.alt = '';
    lightboxLabel.textContent = '';
    lightboxCounter.textContent = '';
    if (lightboxThumbs) {
      lightboxThumbs.innerHTML = '';
    }
    document.body.style.overflow = '';
  };

  const openParrainageLightbox = (photoIndex) => {
    if (carouselPhotos.length === 0) {
      return;
    }

    goToPhoto(photoIndex);
    lightbox.hidden = false;
    document.body.style.overflow = 'hidden';
  };

  const handleParrainageThumbClick = (event) => {
    const thumb = event.target.closest(parrainageThumbSelector);
    if (!thumb) {
      return;
    }

    const index = Number(thumb.dataset.index);
    if (!Number.isNaN(index) && thumb.classList.contains('benevole-parrain-action-thumb')) {
      openParrainageLightbox(index);
      return;
    }

    const fallbackIndex = carouselPhotos.findIndex((photo) => photo.src === thumb.dataset.src);
    openParrainageLightbox(fallbackIndex >= 0 ? fallbackIndex : 0);
  };

  const handleParrainageThumbKeydown = (event) => {
    const thumb = event.target.closest(parrainageThumbSelector);
    if (!thumb) {
      return;
    }

    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      const index = Number(thumb.dataset.index);
      if (!Number.isNaN(index) && thumb.classList.contains('benevole-parrain-action-thumb')) {
        openParrainageLightbox(index);
        return;
      }

      const fallbackIndex = carouselPhotos.findIndex((photo) => photo.src === thumb.dataset.src);
      openParrainageLightbox(fallbackIndex >= 0 ? fallbackIndex : 0);
    }
  };

  parrainesEl.addEventListener('click', handleParrainageThumbClick);
  if (parrainesActionsEl) {
    parrainesActionsEl.addEventListener('click', handleParrainageThumbClick);
    parrainesActionsEl.addEventListener('keydown', handleParrainageThumbKeydown);
  }

  if (lightboxPrev) {
    lightboxPrev.addEventListener('click', () => goToPhoto(currentPhotoIndex - 1));
  }

  if (lightboxNext) {
    lightboxNext.addEventListener('click', () => goToPhoto(currentPhotoIndex + 1));
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

    if (lightbox.hidden) {
      return;
    }

    if (event.key === 'ArrowLeft') {
      goToPhoto(currentPhotoIndex - 1);
    }

    if (event.key === 'ArrowRight') {
      goToPhoto(currentPhotoIndex + 1);
    }
  });
});