document.addEventListener('DOMContentLoaded', () => {
  const d = actualiteData;
  document.getElementById('subtitle-page').textContent = d.intro.sousTitre;

  const buildDay = (label, cls, items) => {
    const rows = items.map(i => `
      <div class="prog-item">
        <span style="font-size:1.2rem;flex-shrink:0;">${i.icone}</span>
        <span class="prog-heure">${i.heure}</span>
        <span class="prog-activite">${i.activite}</span>
      </div>
    `).join('');
    return `
      <div class="prog-day fade-up">
        <div class="prog-day-header ${cls}">${label}</div>
        ${rows}
      </div>`;
  };

  const events = d.evenementALaUne;
  const eventUneEl = document.getElementById('event-une');

  events.forEach((ev) => {
    const hasProgram = !!ev.programme;
    const programmeHtml = hasProgram
      ? `<h3 style="font-size:1.3rem;color:var(--brown-dark);margin:2rem 0 1rem;border-top:2px solid var(--bg-section);padding-top:1.5rem;">Programme detaille</h3><div class="programme-grid">${buildDay('Samedi', 'sam', ev.programme.samedi) + buildDay('Dimanche', 'dim', ev.programme.dimanche)}</div>`
      : '';

    const highlightsHtml = ev.highlights.map(h => `
      <div class="card" style="text-align:center;max-width:${hasProgram ? '200px' : '120px'};">
        <div class="card-icon" style="font-size:2.2rem;padding:1.25rem;">${h.icone}</div>
        <div class="card-body" style="padding:1rem;">
          <h3 style="font-size:1.1rem;">${h.titre}</h3>
          <p style="font-size:0.85rem;">${h.texte}</p>
        </div>
      </div>
    `).join('');

    eventUneEl.innerHTML += `
      <div class="event-highlight fade-up" ${hasProgram ? 'style="grid-column: 1 / -1;"' : ''}>
        <div style="display:flex;align-items:center;gap:1rem;margin-bottom:1.25rem;">
          <span class="wood-panel">Entree: ${ev.entree}</span>
        </div>
        <h2 style="font-size:1.8rem;margin-bottom:0.5rem;color:var(--brown-dark);">${ev.titre}</h2>
        <div class="event-meta">
          <div class="event-meta-item">Date: ${ev.date}</div>
          <div class="event-meta-item">Heure: ${ev.heures}</div>
          <div class="event-meta-item">Lieu: ${ev.lieu}</div>
        </div>
        <p style="font-size:1.05rem;line-height:1.8;margin:1.5rem 0;">${ev.description}</p>
        <div style="display:flex;gap:1rem;margin-bottom:1.5rem;overflow-x:auto;padding-bottom:0.5rem;">
          ${highlightsHtml}
        </div>
        ${programmeHtml}
        <a href="${ev.contact.lien}" target="_blank" class="btn btn-primary" style="display:inline-block;margin-top:${hasProgram ? '2' : '1'}rem;">${ev.contact.texte}</a>
      </div>`;
  });

  const articlesEl = document.getElementById('articles-grid');
  d.articles.forEach(a => {
    articlesEl.innerHTML += `
      <div class="card fade-up">
        <div class="card-icon">${a.icone}</div>
        <div class="card-body">
          <div class="news-date">${a.date}</div>
          <h3>${a.titre}</h3>
          <p>${a.texte}</p>
          <span class="card-tag">${a.tag}</span>
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