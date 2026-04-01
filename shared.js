/* shared.js — injects nav + footer into every Sol Seekers page */
(function(){
  const NAV_LOGO = `
    <a class="nav-logo" href="index.html">
      <svg width="30" height="30" viewBox="0 0 60 60" fill="none">
        <circle cx="30" cy="30" r="14" fill="#f5c542"/>
        <g stroke="#f5c542" stroke-width="3" stroke-linecap="round">
          <line x1="30" y1="4" x2="30" y2="12"/>
          <line x1="30" y1="48" x2="30" y2="56"/>
          <line x1="4"  y1="30" x2="12" y2="30"/>
          <line x1="48" y1="30" x2="56" y2="30"/>
          <line x1="11" y1="11" x2="17" y2="17"/>
          <line x1="43" y1="43" x2="49" y2="49"/>
          <line x1="49" y1="11" x2="43" y2="17"/>
          <line x1="17" y1="43" x2="11" y2="49"/>
        </g>
      </svg>
      <span class="nav-logo-text">Sol Seekers</span>
    </a>`;

  function buildNav(activePage) {
    const pages = [
      { href:'index.html',        label:'Home' },
      { href:'cozumel.html',      label:'Destinations', matchClass:'dest' },
      { href:'index.html#tours',  label:'Tours' },
      { href:'about.html',        label:'About' },
    ];
    const links = [
      { href:'index.html',   label:'Home',         key:'home' },
      { href:'#destinations',label:'Destinations', key:'dest' },
      { href:'#tours',       label:'Tours',        key:'tours' },
      { href:'about.html',   label:'About',        key:'about' },
    ];
    const el = document.getElementById('site-nav');
    if (!el) return;
    el.innerHTML = `
      ${NAV_LOGO}
      <ul class="nav-links">
        <li><a href="index.html" ${activePage==='home'?'class="active"':''}>Home</a></li>
        <li><a href="cozumel.html" ${activePage==='dest'?'class="active"':''}>Destinations</a></li>
        <li><a href="index.html#tours" ${activePage==='tours'?'class="active"':''}>Tours</a></li>
        <li><a href="about.html" ${activePage==='about'?'class="active"':''}>About</a></li>
      </ul>
      <button class="nav-cta" onclick="document.getElementById('site-footer').scrollIntoView({behavior:'smooth'})">Book Now</button>
    `;
  }

  function buildFooter(activeLink) {
    const el = document.getElementById('site-footer');
    if (!el) return;
    el.innerHTML = `
      <div class="footer-grid">
        <div>
          <div class="footer-logo">
            <svg width="26" height="26" viewBox="0 0 60 60" fill="none">
              <circle cx="30" cy="30" r="14" fill="#f5c542"/>
              <g stroke="#f5c542" stroke-width="3" stroke-linecap="round">
                <line x1="30" y1="4" x2="30" y2="12"/>
                <line x1="30" y1="48" x2="30" y2="56"/>
                <line x1="4"  y1="30" x2="12" y2="30"/>
                <line x1="48" y1="30" x2="56" y2="30"/>
                <line x1="11" y1="11" x2="17" y2="17"/>
                <line x1="43" y1="43" x2="49" y2="49"/>
                <line x1="49" y1="11" x2="43" y2="17"/>
                <line x1="17" y1="43" x2="11" y2="49"/>
              </g>
            </svg>
            <span>Sol Seekers Adventures LLC</span>
          </div>
          <p class="footer-brand">A couple-run adventure discovery platform. We travel, test, and curate the best of Mexico so you don't have to guess.</p>
        </div>
        <div class="footer-col">
          <h4>Destinations</h4>
          <ul>
            <li><a href="cozumel.html" ${activeLink==='cozumel'?'class="active-link"':''}>Cozumel</a></li>
            <li><a href="cabo.html" ${activeLink==='cabo'?'class="active-link"':''}>Cabo San Lucas</a></li>
            <li><a href="puerto-vallarta.html" ${activeLink==='vallarta'?'class="active-link"':''}>Puerto Vallarta</a></li>
            <li><a href="cancun.html" ${activeLink==='cancun'?'class="active-link"':''}>Cancún</a></li>
            <li><a href="playa-del-carmen.html" ${activeLink==='playa'?'class="active-link"':''}>Playa del Carmen</a></li>
            <li><a href="tulum.html" ${activeLink==='tulum'?'class="active-link"':''}>Tulum</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Company</h4>
          <ul>
            <li><a href="about.html" ${activeLink==='about'?'class="active-link"':''}>About Us</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Work With Us</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Support</h4>
          <ul>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Booking Policy</a></li>
            <li><a href="#">Affiliate Disclosure</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© 2026 Sol Seekers Adventures LLC. All rights reserved.</span>
        <span>Made with ☀️ for the adventurous spirit</span>
      </div>
    `;
  }

  window.SS = { buildNav, buildFooter };
})();
