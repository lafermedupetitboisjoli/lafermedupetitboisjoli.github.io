(async () => {
  const folder = phototequeData?.folder || 'assets/phototeque/';
  const grid = document.getElementById('photo-grid');
  const countEl = document.getElementById('gallery-count');

  const photos = (phototequeData?.photos || []).map(name => `${folder}${name}`);

  grid.innerHTML = '';

  if (photos.length === 0) {
    grid.innerHTML = `
      <div class="gallery-state">
        <div class="state-icon">📷</div>
        <h3>Aucune photo trouvée</h3>
      </div>`;
    return;
  }

  countEl.textContent = `${photos.length} photo${photos.length > 1 ? 's' : ''}`;

  photos.forEach((src, idx) => {
    const thumb = document.createElement('div');
    thumb.className = 'photo-thumb';
    thumb.innerHTML = `<img src="${src}" alt="Photo ${idx + 1}" loading="lazy"><div class="zoom-icon">🔍</div>`;
    const img = thumb.querySelector('img');
    img.addEventListener('load', () => img.classList.add('loaded'));
    thumb.addEventListener('click', () => openLb(idx));
    grid.appendChild(thumb);
  });

  const lb = document.getElementById('lb');
  const lbImg = document.getElementById('lb-img');
  const lbCount = document.getElementById('lb-counter');
  const lbThumbs = document.getElementById('lb-thumbs');
  const lbPrev = document.getElementById('lb-prev');
  const lbNext = document.getElementById('lb-next');
  const lbClose = document.getElementById('lb-close');
  let cur = 0;

  photos.forEach((src, i) => {
    const t = document.createElement('img');
    t.src = src;
    t.className = 'lb-thumb';
    t.alt = '';
    t.addEventListener('click', () => goTo(i));
    lbThumbs.appendChild(t);
  });

  const goTo = (n) => {
    cur = (n + photos.length) % photos.length;
    lbImg.classList.add('fading');
    setTimeout(() => {
      lbImg.src = photos[cur];
      lbImg.classList.remove('fading');
    }, 130);
    lbCount.textContent = `${cur + 1} / ${photos.length}`;
    lbThumbs.querySelectorAll('.lb-thumb').forEach((t, i) => {
      t.classList.toggle('active', i === cur);
    });
    const activeMini = lbThumbs.children[cur];
    if (activeMini) activeMini.scrollIntoView({ inline: 'center', block: 'nearest', behavior: 'smooth' });
  };

  const openLb = (idx) => {
    lb.classList.add('open');
    document.body.style.overflow = 'hidden';
    lbImg.src = '';
    goTo(idx);
  };

  const closeLb = () => {
    lb.classList.remove('open');
    document.body.style.overflow = '';
    lbImg.src = '';
  };

  lbClose.addEventListener('click', closeLb);
  lb.addEventListener('click', (e) => { if (e.target === lb) closeLb(); });
  lbPrev.addEventListener('click', () => goTo(cur - 1));
  lbNext.addEventListener('click', () => goTo(cur + 1));

  document.addEventListener('keydown', (e) => {
    if (!lb.classList.contains('open')) return;
    if (e.key === 'Escape') closeLb();
    if (e.key === 'ArrowLeft') goTo(cur - 1);
    if (e.key === 'ArrowRight') goTo(cur + 1);
  });

  let tx = 0;
  lb.addEventListener('touchstart', e => { tx = e.touches[0].clientX; }, { passive: true });
  lb.addEventListener('touchend', e => {
    const dx = e.changedTouches[0].clientX - tx;
    if (Math.abs(dx) > 45) goTo(dx < 0 ? cur + 1 : cur - 1);
  });
})();