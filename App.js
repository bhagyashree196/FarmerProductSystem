// ============================================================
//  app.js  —  Farmers Hub  |  All UI Logic & Event Handling
//  NOTE: This file depends on db.js being loaded first.
//        crops, marketData, buyers, questions come from db.js
// ============================================================


// ===================================================================
//  MODAL OPEN / CLOSE
// ===================================================================
function openModal(id) {
  document.getElementById(id).classList.add('active');
  document.body.style.overflow = 'hidden';
  if (id === 'crop-modal')   renderCropGrid();
  if (id === 'market-modal') renderMarket('all');
  if (id === 'consult-modal') renderQuestions();
}

function closeModal(id) {
  document.getElementById(id).classList.remove('active');
  document.body.style.overflow = '';
}

// Close modal when clicking the dark backdrop
document.querySelectorAll('.modal-overlay').forEach(m => {
  m.addEventListener('click', e => {
    if (e.target === m) closeModal(m.id);
  });
});

// Close modal on Escape key
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    document.querySelectorAll('.modal-overlay.active').forEach(m => closeModal(m.id));
  }
});


// ===================================================================
//  CROP GUIDE — LIST VIEW
// ===================================================================
let activeFilter = 'all';

function renderCropGrid(searchVal = '') {
  const grid  = document.getElementById('crop-grid');
  const noMsg = document.getElementById('no-crops');

  const filtered = crops.filter(c => {
    const matchSearch = c.name.toLowerCase().includes(searchVal.toLowerCase());
    const matchFilter = activeFilter === 'all' || c.category === activeFilter;
    return matchSearch && matchFilter;
  });

  grid.innerHTML = filtered.map(c => `
    <div class="crop-card" onclick="showCropDetail(${c.id})">
      <div class="crop-emoji">${c.emoji}</div>
      <div class="crop-name">${c.name}</div>
      <div class="crop-season">${c.season.split('(')[0].trim()}</div>
      <div class="crop-badge badge-${c.category}">
        ${c.category.charAt(0).toUpperCase() + c.category.slice(1)}
      </div>
    </div>
  `).join('');

  noMsg.style.display = filtered.length === 0 ? 'block' : 'none';
}

function filterCrops() {
  renderCropGrid(document.getElementById('crop-search').value);
}

function setFilter(f) {
  activeFilter = f;

  // Update active tab highlight
  document.querySelectorAll('.filter-tab').forEach(t => {
    t.classList.remove('active');
    if (
      (f === 'all' && t.textContent.includes('All')) ||
      t.textContent.toLowerCase().includes(f)
    ) {
      t.classList.add('active');
    }
  });

  renderCropGrid(document.getElementById('crop-search')?.value || '');
}


// ===================================================================
//  CROP GUIDE — DETAIL VIEW
// ===================================================================
function showCropDetail(id) {
  const crop = crops.find(c => c.id === id);
  if (!crop) return;

  document.getElementById('crop-list-view').classList.add('hidden');
  document.getElementById('crop-detail-view').classList.add('active');

  document.getElementById('crop-detail-content').innerHTML = `
    <div class="crop-detail-header">
      <div class="crop-detail-emoji">${crop.emoji}</div>
      <div class="crop-detail-info">
        <h2>${crop.name}</h2>
        <p>${crop.tagline}</p>
        <div class="crop-meta-pills">
          <span class="meta-pill">📅 ${crop.season}</span>
          <span class="meta-pill">⏱ ${crop.duration}</span>
          <span class="meta-pill">📦 Yield: ${crop.yield}</span>
          <span class="meta-pill">💰 MSP: ${crop.msp}</span>
        </div>
      </div>
    </div>

    <div class="detail-sections">
      <div class="detail-box">
        <h4>🌍 Soil & Climate</h4>
        <p><b>Soil:</b> ${crop.soil}</p>
        <p style="margin-top:8px"><b>Climate:</b> ${crop.climate}</p>
      </div>
      <div class="detail-box gold-border">
        <h4>💧 Water Requirements</h4>
        <p>${crop.water}</p>
      </div>
      <div class="detail-box blue-border">
        <h4>🧪 Fertilizer Schedule</h4>
        <ul>${crop.fertilizers.map(f => `<li>${f}</li>`).join('')}</ul>
      </div>
      <div class="detail-box red-border">
        <h4>🐛 Pest & Disease Control</h4>
        <ul>${crop.pesticides.map(p => `<li>${p}</li>`).join('')}</ul>
      </div>
    </div>

    <div class="detail-box" style="margin-top:20px; border-left-color: var(--green-light);">
      <h4>📋 Step-by-Step Procedure</h4>
      <ol class="steps-list">
        ${crop.steps.map((s, i) => `
          <li>
            <div class="step-num">${i + 1}</div>
            <span>${s}</span>
          </li>
        `).join('')}
      </ol>
    </div>

    <div class="detail-box" style="margin-top:20px; border-left-color: var(--gold);">
      <h4>👥 Who Benefits From Growing ${crop.name}?</h4>
      <div class="beneficiary-chips">
        ${crop.beneficiaries.map(b => `<span class="chip">${b}</span>`).join('')}
      </div>
    </div>
  `;
}

function showCropList() {
  document.getElementById('crop-list-view').classList.remove('hidden');
  document.getElementById('crop-detail-view').classList.remove('active');
}


// ===================================================================
//  MARKET ACCESS — TABLE & BUYERS
// ===================================================================
function renderMarket(filter) {
  const data = filter === 'all'
    ? marketData
    : marketData.filter(r => r.filter === filter);

  document.getElementById('market-tbody').innerHTML = data.map(r => `
    <tr>
      <td><b>${r.crop}</b></td>
      <td>${r.mandi}</td>
      <td>₹${r.min.toLocaleString()}</td>
      <td>₹${r.max.toLocaleString()}</td>
      <td class="${r.trend === 'up' ? 'price-up' : r.trend === 'down' ? 'price-down' : 'price-stable'}">
        ₹${r.modal.toLocaleString()}
      </td>
      <td>${r.trend === 'up' ? '📈 Rising' : r.trend === 'down' ? '📉 Falling' : '➡️ Stable'}</td>
    </tr>
  `).join('');

  document.getElementById('buyer-cards').innerHTML = buyers.map(b => `
    <div class="buyer-card">
      <div class="buyer-name">${b.name}</div>
      <div class="buyer-crop">${b.crop}</div>
      <div class="buyer-price">${b.price}</div>
      <div class="buyer-location">📍 ${b.location}</div>
      <button class="contact-btn-sm"
        onclick="alert('Contact request sent to ${b.name}! They will reach you within 24 hours.')">
        Contact Buyer
      </button>
    </div>
  `).join('');
}

function filterMarket(val) {
  renderMarket(val);
}


// ===================================================================
//  CONSULTATION — Q&A
// ===================================================================
function renderQuestions() {
  document.getElementById('question-list').innerHTML = questions.map(q => `
    <div class="q-card ${q.status}">
      <div class="q-meta">👤 ${q.name} · 🌾 ${q.crop} · 📍 ${q.district}</div>
      <div class="q-text">${q.text}</div>
      ${q.answer
        ? `<div class="q-answer">💡 <b>Expert Answer:</b> ${q.answer}</div>`
        : ''}
      <span class="q-status ${
        q.status === 'answered' ? 'status-answered'
        : q.status === 'pending' ? 'status-pending'
        : 'status-new'
      }">${q.status.toUpperCase()}</span>
    </div>
  `).join('');
}

function submitQuestion() {
  const name     = document.getElementById('q-name').value.trim();
  const crop     = document.getElementById('q-crop').value;
  const text     = document.getElementById('q-text').value.trim();
  const district = document.getElementById('q-district').value;

  if (!name || !crop || !text) {
    alert('Please fill in all required fields.');
    return;
  }

  // Add new question to the top of the list (simulating DB insert)
  questions.unshift({
    name,
    crop,
    district: district || 'Unknown',
    text,
    answer: null,
    status: 'new'
  });

  renderQuestions();

  // Clear the form
  document.getElementById('q-name').value     = '';
  document.getElementById('q-text').value     = '';
  document.getElementById('q-crop').value     = '';
  document.getElementById('q-district').value = '';

  showToast('q-toast');
}


// ===================================================================
//  CONTACT FORM TOAST
// ===================================================================
function showToast(id) {
  const t = document.getElementById(id);
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 4000);
}


// ===================================================================
//  SCROLL REVEAL ANIMATION
// ===================================================================
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('visible');
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));


// ===================================================================
//  HEADER SHADOW ON SCROLL
// ===================================================================
window.addEventListener('scroll', () => {
  const h = document.getElementById('header');
  h.style.boxShadow = window.scrollY > 50
    ? '0 4px 20px rgba(0,0,0,0.3)'
    : 'none';
});