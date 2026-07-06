document.addEventListener('DOMContentLoaded', () => {
  const d = accueilData;

  document.getElementById('hero-title').textContent = d.hero.titre;
  document.getElementById('hero-subtitle').textContent = d.hero.sousTitre;
  document.getElementById('hero-desc').textContent = d.hero.description;
  document.getElementById('hero-btn1').href = d.hero.btnPrimary.href;
  document.getElementById('hero-btn1').innerHTML = '🌿 ' + d.hero.btnPrimary.label;
  document.getElementById('hero-btn2').href = d.hero.btnSecondary.href;
  document.getElementById('hero-btn2').innerHTML = '🎯 ' + d.hero.btnSecondary.label;

  const badgesEl = document.getElementById('hero-badges');
  d.hero.badges.forEach(b => {
    badgesEl.innerHTML += `<span class="badge">${b.icon} ${b.label}</span>`;
  });

  const chiffresEl = document.getElementById('chiffres-grid');
  d.chiffres.forEach(c => {
    chiffresEl.innerHTML += `
      <div class="card fade-up" style="text-align:center;padding:2rem 1rem;">
        <div style="font-size:2.5rem;margin-bottom:0.5rem;">${c.icone}</div>
        <div style="font-family:'Caveat',cursive;font-size:2.2rem;font-weight:700;color:var(--green-dark);">${c.valeur}</div>
        <div style="font-size:0.9rem;font-weight:600;color:var(--text-light);margin-top:0.25rem;">${c.label}</div>
      </div>`;
  });

  document.getElementById('mission-titre').textContent = d.mission.titre;
  document.getElementById('mission-texte').textContent = d.mission.texte;

  const adresse = (typeof contactData !== 'undefined' && contactData)
    ? contactData
    : {
      rue: '2 La Brouardiere',
      codePostal: '85170',
      ville: 'Beaufou',
      region: 'Vendee',
      pays: 'France',
      email: 'lafermedupetitboisjoli@gmail.com',
      facebook: 'https://www.facebook.com/p/La-Ferme-du-Petit-Bois-Joli-61573866923563/',
      instagram: 'https://www.instagram.com/lafermedupetitboisjoli/',
      tiktok: 'https://www.tiktok.com/@lafermedupetitboi'
    };
  document.getElementById('adresse-rue').textContent = adresse.rue;
  document.getElementById('adresse-line2').textContent = `${adresse.codePostal} ${adresse.ville}, ${adresse.region}, ${adresse.pays}`;
  document.getElementById('adresse-email').innerHTML = `<a href="mailto:${adresse.email}">${adresse.email}</a>`;
  const facebookLink = document.getElementById('adresse-facebook');
  const instagramLink = document.getElementById('adresse-instagram');
  const tiktokLink = document.getElementById('adresse-tiktok');
  if (facebookLink) facebookLink.href = adresse.facebook;
  if (instagramLink) instagramLink.href = adresse.instagram;
  if (tiktokLink) tiktokLink.href = adresse.tiktok;

  const servicesEl = document.getElementById('services-grid');
  d.cartes.forEach(c => {
    const tagClass = c.tagCouleur || '';
    servicesEl.innerHTML += `
      <div class="card fade-up">
        <div class="card-icon">${c.icone}</div>
        <div class="card-body">
          <h3>${c.titre}</h3>
          <p>${c.texte}</p>
          <span class="card-tag ${tagClass}">${c.tag}</span>
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