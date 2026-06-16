// Nav scroll
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
});

// Scroll reveal
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('visible'); }
  });
}, { threshold: 0.12 });
reveals.forEach(el => observer.observe(el));

// Featured Work — random 3 projects per page load
(function () {
  const GD = id => `https://lh3.googleusercontent.com/d/${id}`;
  const projects = [
    { cover: '1mr2WyglRHkvHkQP4CD38jduW9vyJCAD6', type: 'Single Family',   addr: 'Cape Coral, FL',       sub: '9 SW 14th Ave',         photos: 30, services: ['HDR','Drone'] },
    { cover: '15SoJ2gi4McQAFCw7Nt84OnZb-UyjVxVf', type: 'Single Family',   addr: 'Cape Coral, FL',       sub: '2206 NE 35th Ln',       photos: 24, services: ['HDR'] },
    { cover: '1FeEIL0hARDkBh9xJ38mzaU1DHWiMxkVR', type: 'Single Family',   addr: 'Cape Coral, FL',       sub: '2729 SE 5th Ter',       photos: 30, services: ['HDR'] },
    { cover: '1fuNWBT3_-TMlypLlBFNwBanlCNcVCkZc', type: 'Single Family',   addr: 'Cape Coral, FL',       sub: '2931 SW 30th St',       photos: 36, services: ['HDR','Drone'] },
    { cover: '1TErBrv9-4QObcq0Tpj6TLIW25xOSEdYh', type: 'Single Family',  addr: 'Cape Coral, FL',       sub: '5405 SW 25th Ct',       photos: 24, services: ['HDR'] },
    { cover: '1NMDn6SKBafyizdcqJqjYWakbINF_t4yS', type: 'Condominium',     addr: 'Doral, FL',            sub: 'Landmark at Doral',     photos: 9,  services: ['HDR','Drone'] },
    { cover: '1kWpinoS6TLy1RVKHA3Oc8oMDY_ioaM9S', type: 'Condominium',    addr: 'Doral, FL',            sub: 'Landmark at Doral',     photos: 30, services: ['HDR','Drone'] },
    { cover: '1ZdTpjw-eYbPCeI0m0dxcbC5FtPwJSuUd', type: 'Commercial',     addr: 'Doral, FL',            sub: 'Doral Commerce',        photos: 10, services: ['HDR'] },
    { cover: '1ulfN0_spdjxiKHI21hEe65_qIuKaLQfA', type: 'Duplex',          addr: 'Miami, FL',            sub: 'Miami Duplex',          photos: 4,  services: ['HDR'] },
    { cover: '1tlyjE3b1op9YXX1u_xLCf-r4-qirRfU_', type: 'Condominium',    addr: 'Miami, FL',            sub: '10411 SW 108th Ave',    photos: 12, services: ['HDR'] },
    { cover: '1bLsXA1geKTdGSy6My60ZqCIr8pNgHyW-', type: 'Single Family',  addr: 'Poinciana, FL',        sub: '3554 Mayfair St',       photos: 13, services: ['HDR'] },
    { cover: '1GyM6h6nBihqaT9_Oj9ZVHbfL5xV4lJkm', type: 'Commercial',     addr: 'Weston, FL',           sub: 'Weston Commerce',       photos: 12, services: ['HDR','Drone'] },
    { cover: '1I9-EZRNowavyxLY6qEjJnyf0ovFO31Ju', type: 'Luxury Home',    addr: 'South Florida',        sub: 'Sienna Community',      photos: 25, services: ['HDR'] },
    { cover: '19qW7VEVVWSTY2fUwo2UK2UGIc5UJ_B_P', type: 'Single Family',  addr: 'Homestead, FL',        sub: 'Homestead',             photos: 19, services: ['HDR','Drone'] },
    { cover: '1bkbFTnCYHW_RI5KNG4jztSW2eiWhonRX', type: 'Apartment',       addr: 'North Miami, FL',      sub: 'North Miami',           photos: 11, services: ['HDR'] },
  ];

  function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function tagHtml(s) {
    const cls = s === 'Drone' ? 'fs-drone' : s === 'HDR' ? 'fs-hdr' : 'fs-video';
    return `<span class="fs-tag ${cls}">${s}</span>`;
  }

  function cardHtml(p, tall) {
    return `<a href="portfolio.html" class="featured-card${tall ? ' tall' : ''}">
      <img src="${GD(p.cover)}" alt="${p.type} – ${p.addr}" loading="lazy">
      <div class="featured-card-overlay"></div>
      <div class="featured-card-body">
        <span class="featured-card-type">${p.type}</span>
        <div class="featured-card-addr">${p.addr}</div>
        <div class="featured-card-sub">${p.sub} · ${p.photos} photos</div>
        <div class="featured-services">${p.services.map(tagHtml).join('')}</div>
      </div>
    </a>`;
  }

  const picks = shuffle(projects).slice(0, 3);
  const grid = document.getElementById('featuredGrid');
  if (grid) grid.innerHTML = cardHtml(picks[0], true) + cardHtml(picks[1], false) + cardHtml(picks[2], false);
})();

// Hero photo rotator
(function () {
  const GD = id => `https://lh3.googleusercontent.com/d/${id}`;
  const pool = [
    '1ehT64Px17P-h6157OeMuhQV3AUismTQN',
    '1AsPQ3Rwh_-Dd-QKvIN_zIJSj8EFqnObU',
    '1qf0UwcLsrSCkaM1ku_FPIKze7e7-AV9I',
    '1p0gV1Qz1dUwXYxy7G9qMEhBE5_fa0Omj',
    '1o4wxl9TAwYv9JRwuSJEmXaCvpyLJ4AvJ',
    '1ooVICfknnVUEs_L0JmiCGPW1THLMM82F',
    '1BZyJi2BORMey0a6wHi95G4eT9e288uf3',
    '1RHBgPBrH2JtwF_jOK3zOxOkfGhoz8pJ7',
    '1VCtiZL9MU-wdxq55iSAjjT5Je65C6h5w',
    '1YZIAv5G-dTYVOHqkthR82aNciHNbdbql',
    '1qnqnnB4mBD72soVKdKgs41FTSfoPf82p',
    '1cwKu5sjaLo35NbDmfwa5jTlL8Z2Q1OWK',
    '1sEAZ-7kaZ272H3dqG5W1m5iOOUXRp7i8',
    '1IFGLbzdVfBkqqcRIhn3z08ZsbEgSC-io',
    '1JQsoj85EbZHyfu_SzLn5v8ubO0ttQaci',
    '1arFAJ8-PyY8PTZ_OqKso0QDuqG463tiW',
    '1iM_Oi7ZwhLObBwRvVm1KtInsDz3raogs',
  ];

  function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function rotateCell(img, intervalMs, delayMs) {
    const photos = shuffle(pool);
    let idx = 0;
    setTimeout(() => {
      setInterval(() => {
        idx = (idx + 1) % photos.length;
        const next = new Image();
        next.src = GD(photos[idx]);
        next.onload = () => {
          img.style.opacity = '0';
          setTimeout(() => { img.src = next.src; img.style.opacity = '1'; }, 1000);
        };
      }, intervalMs);
    }, delayMs);
  }

  const cells = document.querySelectorAll('.photo-cell img');
  if (cells.length >= 2) {
    rotateCell(cells[0], 7000, 1000);
    rotateCell(cells[1], 9000, 4000);
  }
})();

// Formspree AJAX
window.formspree = window.formspree || function () { (formspree.q = formspree.q || []).push(arguments); };
formspree('initForm', { formElement: '#contactForm', formId: 'xwvzzqyy' });
