document.addEventListener('DOMContentLoaded', () => {
  const d = historiqueData;

  document.getElementById('subtitle-page').textContent = d.intro.sousTitre;
  document.getElementById('intro-texte').textContent = d.intro.texte;

  const timelineEl = document.getElementById('timeline');
  d.timeline.forEach(item => {
    timelineEl.innerHTML += `
      <div class="timeline-item fade-up">
        <div class="timeline-dot">${item.icone}</div>
        <div class="timeline-year">${item.annee}</div>
        <div class="timeline-content">
          <h3>${item.titre}</h3>
          <p>${item.texte}</p>
        </div>
      </div>`;
  });

  const valeursEl = document.getElementById('valeurs-grid');
  d.valeurs.forEach(v => {
    valeursEl.innerHTML += `
      <div class="card fade-up" style="text-align:center;">
        <div class="card-icon">${v.icone}</div>
        <div class="card-body">
          <h3>${v.titre}</h3>
          <p>${v.texte}</p>
        </div>
      </div>`;
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