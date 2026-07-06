document.addEventListener('DOMContentLoaded', () => {
  const d = rejoindreData;

  document.getElementById('hero-titre').textContent = d.intro.titre;
  document.getElementById('hero-subtitle').textContent = d.intro.sousTitre;
  document.getElementById('hero-desc').textContent = d.intro.texte;

  document.getElementById('pourquoi-titre').textContent = d.pourquoi.titre;
  const pourquoiEl = document.getElementById('pourquoi-grid');
  d.pourquoi.raisons.forEach(r => {
    pourquoiEl.innerHTML += `
      <div class="card fade-up">
        <div class="card-icon">${r.icone}</div>
        <div class="card-body">
          <h3>${r.titre}</h3>
          <p>${r.texte}</p>
        </div>
      </div>`;
  });

  const missionsEl = document.getElementById('missions-grid');
  const checksEl = document.getElementById('missions-checks');
  d.missions.forEach(m => {
    const tags = m.competences.map(c => `<span class="mission-tag">${c}</span>`).join('');
    missionsEl.innerHTML += `
      <div class="mission-card fade-up">
        <div class="mission-header">
          <div class="mission-icone">${m.icone}</div>
          <h3>${m.titre}</h3>
        </div>
        <p>${m.description}</p>
        <div class="mission-dispo">🕐 ${m.disponibilite}</div>
        <div class="mission-meta">${tags}</div>
      </div>`;
    checksEl.innerHTML += `
      <label class="form-check">
        <input type="checkbox" name="missions" value="${m.titre}">
        ${m.icone} ${m.titre}
      </label>`;
  });

  const temoEl = document.getElementById('temoignages-grid');
  d.temoignages.forEach(t => {
    temoEl.innerHTML += `
      <div class="temoignage-card fade-up">
        <p class="temoignage-texte">${t.citation}</p>
        <div class="temoignage-auteur">
          <div class="temo-avatar">${t.icone}</div>
          <div>
            <div class="temo-prenom">${t.prenom}</div>
            <div class="temo-role">${t.role}</div>
          </div>
        </div>
      </div>`;
  });

  const faqEl = document.getElementById('faq-list');
  d.faq.forEach(f => {
    const item = document.createElement('div');
    item.className = 'faq-item fade-up';
    item.innerHTML = `
      <button class="faq-question" aria-expanded="false">
        ${f.question}
        <span class="faq-arrow">▼</span>
      </button>
      <div class="faq-reponse">${f.reponse}</div>`;
    item.querySelector('.faq-question').addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(el => el.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    });
    faqEl.appendChild(item);
  });

  document.getElementById('form-titre').textContent = d.formulaire.titre;
  document.getElementById('form-subtitle').textContent = d.formulaire.sousTitre;

  document.getElementById('benevole-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const form = e.target;
    const prenom = form.prenom.value.trim();
    const nom = form.nom.value.trim();
    const email = form.email.value.trim();
    const tel = form.tel.value.trim();
    const age = form.age.value;
    const dispo = form.dispo.value;
    const message = form.message.value.trim();
    const missions = [...form.querySelectorAll('input[name="missions"]:checked')].map(cb => cb.value).join(', ') || 'Non précisé';

    if (!prenom || !nom || !email) {
      alert('Merci de remplir les champs obligatoires (prénom, nom, email).');
      return;
    }

    const subject = encodeURIComponent(`Candidature bénévole — ${prenom} ${nom}`);
    const body = encodeURIComponent(
      `Bonjour,\n\nJe souhaite devenir bénévole à la Ferme du Petit Bois Joli.\n\n` +
      `Prénom : ${prenom}\nNom : ${nom}\nEmail : ${email}\nTéléphone : ${tel || 'Non renseigné'}\n` +
      `Tranche d'âge : ${age || 'Non précisée'}\nDisponibilités : ${dispo || 'Non précisées'}\n` +
      `Missions souhaitées : ${missions}\n\nMessage :\n${message || 'Aucun message.'}\n\nCordialement,\n${prenom} ${nom}`
    );

    window.location.href = `mailto:${d.formulaire.email}?subject=${subject}&body=${body}`;

    form.style.display = 'none';
    document.getElementById('form-success').style.display = 'block';
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