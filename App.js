// ============================================================
//  app.js  —  Farmers Hub  |  All UI Logic
//  Depends on db.js being loaded first.
// ============================================================

// ── OVERLAY OPEN / CLOSE ─────────────────────────────────────
function openOverlay(id) {
  document.getElementById(id).classList.add('open');
  document.body.style.overflow = 'hidden';
  if (id === 'crop-overlay')    renderCropGrid();
  if (id === 'market-overlay')  renderMarket('all');
  if (id === 'consult-overlay') renderQuestions();
}

function closeOverlay(id) {
  document.getElementById(id).classList.remove('open');
  document.body.style.overflow = '';
}

// Close on backdrop click
document.querySelectorAll('.overlay').forEach(o => {
  o.addEventListener('click', e => { if (e.target === o) closeOverlay(o.id); });
});

// Close on Escape
document.addEventListener('keydown', e => {
  if (e.key === 'Escape')
    document.querySelectorAll('.overlay.open').forEach(o => closeOverlay(o.id));
});

// ── CROP GRID ─────────────────────────────────────────────────
let activeFilter = 'all';

function renderCropGrid(searchVal = '') {
  const grid = document.getElementById('crop-grid');
  const none = document.getElementById('no-results');

  const list = crops.filter(c => {
    const matchText   = c.name.toLowerCase().includes(searchVal.toLowerCase());
    const matchFilter = activeFilter === 'all' || c.category === activeFilter;
    return matchText && matchFilter;
  });

  grid.innerHTML = list.map(c => `
    <div class="crop-tile" onclick="showCropDetail(${c.id})">
      <div class="tile-emoji">${c.emoji}</div>
      <div class="tile-name">${c.name}</div>
      <div class="tile-cat c-${c.category}">${c.category.charAt(0).toUpperCase() + c.category.slice(1)}</div>
    </div>
  `).join('');

  none.style.display = list.length === 0 ? 'block' : 'none';
}

function filterCrops() {
  renderCropGrid(document.getElementById('crop-search').value);
}

function setFilter(f, btn) {
  activeFilter = f;
  document.querySelectorAll('.ftab').forEach(t => t.classList.remove('on'));
  if (btn) btn.classList.add('on');
  renderCropGrid(document.getElementById('crop-search')?.value || '');
}

// ── CROP DETAIL ───────────────────────────────────────────────
function showCropDetail(id) {
  const c = crops.find(x => x.id === id);
  if (!c) return;

  document.getElementById('crop-list').classList.add('hide');
  document.getElementById('crop-detail').classList.add('show');

  document.getElementById('crop-detail-body').innerHTML = `
    <div class="detail-top">
      <div class="detail-emoji">${c.emoji}</div>
      <div class="detail-meta">
        <h2>${c.name}</h2>
        <p>${c.tagline}</p>
        <div class="pills">
          <span class="pill">📅 ${c.season}</span>
          <span class="pill">⏱ ${c.duration}</span>
          <span class="pill">📦 ${c.yield}</span>
          <span class="pill">💰 ${c.msp}</span>
        </div>
      </div>
    </div>

    <div class="info-grid">
      <div class="info-box">
        <h4>🌍 Soil &amp; Climate</h4>
        <p><strong>Soil:</strong> ${c.soil}</p>
        <p style="margin-top:6px"><strong>Climate:</strong> ${c.climate}</p>
      </div>
      <div class="info-box">
        <h4>💧 Water</h4>
        <p>${c.water}</p>
      </div>
      <div class="info-box">
        <h4>🧪 Fertilizer Schedule</h4>
        <ul>${c.fertilizers.map(f => `<li>${f}</li>`).join('')}</ul>
      </div>
      <div class="info-box">
        <h4>🐛 Pest &amp; Disease Control</h4>
        <ul>${c.pesticides.map(p => `<li>${p}</li>`).join('')}</ul>
      </div>
      <div class="info-box full">
        <h4>📋 Step-by-Step Procedure</h4>
        <ol class="steps-list">
          ${c.steps.map((s, i) => `
            <li><div class="step-n">${i + 1}</div><span>${s}</span></li>
          `).join('')}
        </ol>
      </div>
      <div class="info-box full">
        <h4>👥 Who Benefits?</h4>
        <div class="chips">
          ${c.beneficiaries.map(b => `<span class="chip">${b}</span>`).join('')}
        </div>
      </div>
    </div>
  `;
}

function backToList() {
  document.getElementById('crop-list').classList.remove('hide');
  document.getElementById('crop-detail').classList.remove('show');
}

// ── MARKET ────────────────────────────────────────────────────
function renderMarket(filter) {
  const rows = filter === 'all' ? marketData : marketData.filter(r => r.filter === filter);

  document.getElementById('mkt-body').innerHTML = rows.map(r => `
    <tr>
      <td><strong>${r.crop}</strong></td>
      <td>${r.mandi}</td>
      <td>₹${r.min.toLocaleString()}</td>
      <td>₹${r.max.toLocaleString()}</td>
      <td class="${r.trend === 'up' ? 'up' : r.trend === 'down' ? 'down' : 'stable'}">
        ₹${r.modal.toLocaleString()}
      </td>
      <td>${r.trend === 'up' ? '📈 Rising' : r.trend === 'down' ? '📉 Falling' : '➡️ Stable'}</td>
    </tr>
  `).join('');

  document.getElementById('buyers-grid').innerHTML = buyers.map(b => `
    <div class="buyer-card">
      <div class="buyer-name">${b.name}</div>
      <div class="buyer-crop">${b.crop}</div>
      <div class="buyer-price">${b.price}</div>
      <div class="buyer-loc">📍 ${b.location}</div>
      <button class="contact-sm"
        onclick="alert('Contact request sent to ${b.name}! They will reach you within 24 hours.')">
        Contact Buyer
      </button>
    </div>
  `).join('');
}

// ── CONSULTATION ──────────────────────────────────────────────
function renderQuestions() {
  document.getElementById('qa-list').innerHTML = questions.map(q => `
    <div class="qa-card">
      <div class="qa-meta">👤 ${q.name} &nbsp;·&nbsp; 🌾 ${q.crop} &nbsp;·&nbsp; 📍 ${q.district}</div>
      <div class="qa-q">${q.text}</div>
      ${q.answer ? `<div class="qa-ans"><strong>💡 Expert:</strong> ${q.answer}</div>` : ''}
      <span class="qa-status ${
        q.status === 'answered' ? 's-answered'
        : q.status === 'pending' ? 's-pending' : 's-new'
      }">${q.status}</span>
    </div>
  `).join('');
}

function submitQuestion() {
  const name     = document.getElementById('q-name').value.trim();
  const crop     = document.getElementById('q-crop').value;
  const text     = document.getElementById('q-text').value.trim();
  const district = document.getElementById('q-district').value;

  if (!name || !crop || !text) { alert('Please fill in all required fields.'); return; }

  questions.unshift({ name, crop, district: district || 'Unknown', text, answer: null, status: 'new' });
  renderQuestions();

  document.getElementById('q-name').value     = '';
  document.getElementById('q-text').value     = '';
  document.getElementById('q-crop').value     = '';
  document.getElementById('q-district').value = '';

  showToast('q-toast');
}

// ── TOAST ─────────────────────────────────────────────────────
function showToast(id) {
  const el = document.getElementById(id);
  el.classList.add('show');
  setTimeout(() => el.classList.remove('show'), 4000);
}

// ── HEADER SHADOW ON SCROLL ────────────────────────────────────
window.addEventListener('scroll', () => {
  document.querySelector('header').style.boxShadow =
    window.scrollY > 10 ? '0 1px 6px rgba(0,0,0,0.08)' : 'none';
});