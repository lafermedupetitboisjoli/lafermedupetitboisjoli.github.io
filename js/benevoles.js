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
});