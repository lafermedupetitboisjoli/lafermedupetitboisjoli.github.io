document.addEventListener('DOMContentLoaded', () => {
  const d = activitesData;
  document.getElementById('subtitle-page').textContent = d.intro.sousTitre;
  document.getElementById('intro-texte').textContent = d.intro.texte;

  const tagColorMap = { green: '', orange: 'orange', pink: 'pink', brown: 'brown' };

  const grid = document.getElementById('activites-majeures');
  d.activites.filter(e => e.isMajeur === false || e.isMajeur === undefined).forEach(a => {
    const detailsHtml = a.details.map(detail => `<li>${detail}</li>`).join('');
    const tagClass = tagColorMap[a.categorieColor] || '';
    grid.innerHTML += `
      <div class="activite-card fade-up">
        <div class="activite-header" style="border-left:5px solid ${a.couleur};">
          <div class="activite-emoji">${a.icone}</div>
          <div>
            <h3>${a.titre}</h3>
            <span class="card-tag ${tagClass}">${a.categorie || ''}</span>
          </div>
        </div>
        <div class="activite-body">
          <p>${a.description}</p>
          <ul class="activite-details">${detailsHtml}</ul>
        </div>
      </div>`;
  });

  const gridMajeur = document.getElementById('activites-secondaires');
  d.activites.filter(e => e.isMajeur).forEach(a => {
    const detailsHtml = a.details.map(detail => `<li>${detail}</li>`).join('');
    gridMajeur.innerHTML += `
     <section>
  <div class="section-inner">
    <div class="section-title fade-up">
      <div class="section-divider">
        <div class="line"></div>
        <span class="icon">${a.icone}</span>
        <div class="line"></div>
      </div>
      <h2>${a.titre}</h2>
    </div>
    <div class="location-card fade-up" style="max-width:850px;margin:0 auto;">
      <div style="font-size:4rem;text-align:center;flex-shrink:0;">${a.icone}</div>
      <div class="location-info">
        <p style="font-size:1.05rem;line-height:1.8;margin-bottom:1rem;">${a.description}</p>
        <ul style="list-style:none;margin-bottom:1rem;">${detailsHtml}</ul>
        <p style="font-weight:600;color:var(--green-dark);">${a.contact}</p>
        <div style="margin-top:1.25rem;direction: rtl;">
          <a href="mailto:${a.contact}" class="btn btn-primary">✉️ Réserver une sortie</a>
        </div>
      </div>
    </div>
  </div>
</section>`;
  });


//   const sc = d.groupesScolaires;
//   document.getElementById('scolaires-titre').textContent = sc.titre;
//   document.getElementById('scolaires-texte').textContent = sc.texte;
//   document.getElementById('scolaires-contact').textContent = sc.contact;
//   const pointsEl = document.getElementById('scolaires-points');
  

//   const cn = d.clubNature;
//   document.getElementById('club-nature-titre').textContent = cn.titre;
//   document.getElementById('club-nature-texte').textContent = cn.texte;
//   document.getElementById('club-nature-contact').textContent = cn.contact;
//   document.getElementById('club-nature-image').src = cn.image;
//   document.getElementById('club-nature-image').alt = cn.titre;
//   const clubPointsEl = document.getElementById('club-nature-points');
//   cn.details.forEach(point => {
//     clubPointsEl.innerHTML += `<li style="padding:0.3rem 0;display:flex;gap:0.5rem;color:var(--text-medium);font-size:0.95rem;"><span style="color:var(--green-dark);font-weight:700;">✓</span>${point}</li>`;
//   });

  document.getElementById('tarifs-titre').textContent = d.tarifs.titre;
  const tableEl = document.getElementById('tarifs-table');
  d.tarifs.items.forEach(tarif => {
    tableEl.innerHTML += `<tr><td>${tarif.label}</td><td>${tarif.prix}</td></tr>`;
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