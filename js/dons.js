document.addEventListener('DOMContentLoaded', () => {
  const d = donsData;

  document.getElementById('hero-titre').textContent = d.intro.titre;
  document.getElementById('hero-subtitle').textContent = d.intro.sousTitre;
  document.getElementById('hero-desc').textContent = d.intro.texte;

  document.getElementById('pourquoi-titre').textContent = d.pourquoi.titre;
  const pourquoiEl = document.getElementById('pourquoi-grid');
  d.pourquoi.points.forEach(p => {
    pourquoiEl.innerHTML += `
      <div class="card fade-up">
        <div class="card-icon">${p.icone}</div>
        <div class="card-body">
          <h3>${p.titre}</h3>
          <p>${p.texte}</p>
        </div>
      </div>`;
  });

  const montantsEl = document.getElementById('montants-grid');
  d.montants.forEach(m => {
    montantsEl.innerHTML += `
      <div class="montant-card fade-up">
        <div class="montant-icone">${m.icone}</div>
        <div class="montant-valeur">${m.montant}</div>
        <div class="montant-impact">${m.impact}</div>
      </div>`;
  });

  const methodesEl = document.getElementById('methodes-grid');
  d.methodes.forEach(m => {
    const badgeHtml = m.principal ? '<div class="methode-badge">⭐ Recommandé</div>' : '';
    const principalCls = m.principal ? 'principal' : '';
    const btnHtml = m.cta
      ? m.principal
        ? `<button id="openHaOverlay" type="button" class="btn-helloasso">${m.icone} ${m.cta}</button>`
        : `<a href="${m.href}" class="btn btn-outline">${m.icone} ${m.cta}</a>`
      : '';
    const placeholderHtml = m.principal
      ? `<div class="helloasso-placeholder">
          <p>👆 Cliquez ci-dessus pour accéder au formulaire de don sécurisé HelloAsso.</p>
        </div>`
      : '';
    methodesEl.innerHTML += `
      <div class="methode-card ${principalCls} fade-up">
        ${badgeHtml}
        <div style="display:flex;align-items:center;gap:1rem;">
          <div class="methode-icone" style="background:${m.couleur}22;">${m.icone}</div>
          <h3>${m.titre}</h3>
        </div>
        <p>${m.description}</p>
        ${btnHtml}
        ${placeholderHtml}
      </div>`;
  });

  const openBtn = document.getElementById('openHaOverlay');
  const modal = document.getElementById('haWidgetModal');
  const closeBtn = document.getElementById('closeHaWidgetBtn');
  const body = document.body;

  if (openBtn && modal && closeBtn) {
    openBtn.addEventListener('click', () => {
      modal.style.display = 'flex';
      body.style.overflow = 'hidden';
      body.style.overscrollBehaviorY = 'none';
    });

    closeBtn.addEventListener('click', () => {
      modal.style.display = 'none';
      body.style.overflow = '';
      body.style.overscrollBehaviorY = '';
    });

    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.style.display = 'none';
        body.style.overflow = '';
        body.style.overscrollBehaviorY = '';
      }
    });

    closeBtn.addEventListener('mouseenter', () => {
      closeBtn.style.background = '#E0E0E8';
    });

    closeBtn.addEventListener('mouseleave', () => {
      closeBtn.style.background = '#EFEFF4';
    });
  }

  document.getElementById('fiscalite-titre').textContent = d.fiscalite.titre;
  document.getElementById('fiscalite-texte').textContent = d.fiscalite.texte;
  document.getElementById('fiscalite-exemple').textContent = d.fiscalite.exemple;

  document.getElementById('adhesion-titre').textContent = d.adhesion.titre;
  document.getElementById('adhesion-texte').textContent = d.adhesion.texte;
  const tarifsEl = document.getElementById('adhesion-tarifs');
  d.adhesion.tarifs.forEach(t => {
    tarifsEl.innerHTML += `
      <div class="tarif-row">
        <span style="font-weight:600;color:var(--text-medium);">${t.label}</span>
        <span class="tarif-prix">${t.prix}</span>
      </div>`;
  });

  document.getElementById('besoins-titre').textContent = d.besoins.titre;
  document.getElementById('besoins-subtitle').textContent = d.besoins.sousTitre;
  const besoinsEl = document.getElementById('besoins-grid');
  d.besoins.categories.forEach(cat => {
    const items = cat.items.map(i => `<li style="padding:0.25rem 0;display:flex;gap:0.5rem;font-size:0.92rem;color:var(--text-medium);"><span style="color:var(--green-dark);">✓</span>${i}</li>`).join('');
    besoinsEl.innerHTML += `
      <div class="card fade-up">
        <div class="card-icon">${cat.icone}</div>
        <div class="card-body">
          <h3>${cat.titre}</h3>
          <ul style="list-style:none;margin-top:0.5rem;">${items}</ul>
        </div>
      </div>`;
  });

  const p = d.parrainage;
  document.getElementById('parrainage-titre').textContent = p.titre;
  document.getElementById('parrainage-intro').textContent = p.intro;
  document.getElementById('parrainage-merci').textContent = p.merci;
  document.getElementById('parrainage-attente').textContent = p.attente;
  document.getElementById('parrainage-conclusion').textContent = p.conclusion;
  document.getElementById('parrainage-cta').textContent = p.cta;

  const parrainesEl = document.getElementById('parraines-list');
  p.parraines.forEach(parr => {
    parrainesEl.innerHTML += `
      <div style="background:white;border-radius:12px;padding:1rem;text-align:center;box-shadow:0 2px 10px var(--shadow);">
        <div style="font-size:2.5rem;margin-bottom:0.5rem;">${parr.icone}</div>
        <div style="font-family:'Caveat',cursive;font-size:1.2rem;font-weight:700;color:var(--brown-dark);">${parr.nom}</div>
        <div style="font-size:0.85rem;color:var(--text-light);margin-top:0.25rem;">parrainé par<br><strong>${parr.parrain}</strong></div>
      </div>`;
  });

  const attenteEl = document.getElementById('animaux-attente');
  p.animaux_attente.forEach(animal => {
    attenteEl.innerHTML += `<div style="background:white;padding:0.6rem;border-radius:8px;font-size:0.9rem;font-weight:600;color:var(--text-medium);">${animal}</div>`;
  });

  document.getElementById('merci-titre').textContent = d.merci.titre;
  document.getElementById('merci-texte').textContent = d.merci.texte;

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