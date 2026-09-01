'use strict';

/* =========================================================
   YEAR
   ========================================================= */
document.getElementById('year').textContent = new Date().getFullYear();

/* =========================================================
   ROTATING QUOTES
   ========================================================= */
(function rotatingQuotes() {
  const quotes = [
    { text: "Torture the data and it will confess to anything.", author: "— Ronald Coase" },
    { text: "In God we trust. All others must bring data.", author: "— W. Edwards Deming" },
    { text: "The goal is to turn data into information, and information into insight.", author: "— Carly Fiorina" },
    { text: "Without data, you're just another person with an opinion.", author: "— W. Edwards Deming" },
    { text: "AI is not magic. It is mathematics, data, and engineering.", author: "— Anonymous" },
    { text: "The best model is the simplest one that explains the data.", author: "— George Box" },
    { text: "All models are wrong, but some are useful.", author: "— George Box" },
    { text: "Data is the new oil. AI is the new electricity.", author: "— Andrew Ng" },
    { text: "Machine learning is the last invention that humanity will ever need to make.", author: "— Nick Bostrom" },
  ];

  const textEl   = document.getElementById('quoteText');
  const authorEl = document.getElementById('quoteAuthor');
  const figure   = textEl && textEl.closest('.hero__quote');
  if (!textEl || !authorEl || !figure) return;

  let idx = 0;

  function showQuote(i) {
    figure.classList.add('fade-out');
    setTimeout(() => {
      textEl.textContent   = quotes[i].text;
      authorEl.textContent = quotes[i].author;
      figure.classList.remove('fade-out');
    }, 500);
  }

  // show first immediately
  showQuote(0);

  setInterval(() => {
    idx = (idx + 1) % quotes.length;
    showQuote(idx);
  }, 5000);
})();

/* =========================================================
   THEME TOGGLE (light / dark)
   ========================================================= */
(function themeToggle() {
  const root = document.documentElement;
  const btn  = document.getElementById('themeToggle');

  // Persist preference
  const saved = localStorage.getItem('theme');
  if (saved) root.setAttribute('data-theme', saved);

  btn.addEventListener('click', () => {
    const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  });
})();

/* =========================================================
   TYPEWRITER
   ========================================================= */
(function typewriter() {
  const el = document.getElementById('typewriter');
  const phrases = [
    'whoami — AI & Data Science Engineer',
    'building intelligence into every system',
  ];
  let phraseIdx = 0, charIdx = 0, deleting = false;
  const SPEED_TYPE = 52, SPEED_DEL = 26, PAUSE_END = 2400, PAUSE_START = 500;

  function tick() {
    const phrase = phrases[phraseIdx];
    if (!deleting) {
      charIdx++;
      el.textContent = phrase.slice(0, charIdx);
      if (charIdx === phrase.length) { deleting = true; setTimeout(tick, PAUSE_END); return; }
      setTimeout(tick, SPEED_TYPE);
    } else {
      charIdx--;
      el.textContent = phrase.slice(0, charIdx);
      if (charIdx === 0) {
        deleting = false;
        phraseIdx = (phraseIdx + 1) % phrases.length;
        setTimeout(tick, PAUSE_START); return;
      }
      setTimeout(tick, SPEED_DEL);
    }
  }
  setTimeout(tick, 900);
})();

/* =========================================================
   NAV — scroll + active section
   ========================================================= */
(function navBehavior() {
  const nav      = document.getElementById('nav');
  const sections = Array.from(document.querySelectorAll('section[id]'));

  function updateNav() {
    nav.classList.toggle('scrolled', window.scrollY > 20);

    // Find the last section whose top is at or above the viewport midpoint.
    // This correctly handles short final sections (like contact) that never
    // fully fill the viewport.
    const trigger = window.scrollY + window.innerHeight * 0.35;
    let current = sections[0];
    sections.forEach(sec => {
      if (sec.offsetTop <= trigger) current = sec;
    });

    document.querySelectorAll('.nav__link').forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === `#${current.id}`);
    });
  }

  window.addEventListener('scroll', updateNav, { passive: true });
  updateNav();
})();

/* =========================================================
   MOBILE MENU
   ========================================================= */
(function mobileMenu() {
  const btn   = document.getElementById('hamburger');
  const menu  = document.getElementById('mobile-menu');
  const links = menu.querySelectorAll('.nav__mobile-link');

  function toggle(open) {
    btn.classList.toggle('open', open);
    btn.setAttribute('aria-expanded', String(open));
    open ? menu.removeAttribute('hidden') : menu.setAttribute('hidden', '');
  }
  btn.addEventListener('click', () => toggle(btn.getAttribute('aria-expanded') !== 'true'));
  links.forEach(l => l.addEventListener('click', () => toggle(false)));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') toggle(false); });
})();

/* =========================================================
   SMOOTH SCROLL
   ========================================================= */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const t = document.querySelector(a.getAttribute('href'));
    if (t) { e.preventDefault(); t.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
  });
});

/* =========================================================
   REVEAL ON SCROLL
   ========================================================= */
(function reveal() {
  const items = document.querySelectorAll('[data-reveal]');
  if (!('IntersectionObserver' in window)) {
    items.forEach(el => el.classList.add('visible')); return;
  }
  const obs = new IntersectionObserver(
    entries => entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        entry.target.style.transitionDelay = `${i * 70}ms`;
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    }),
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );
  items.forEach(el => obs.observe(el));
})();

/* =========================================================
   MCP SVG CONNECTOR LINES
   ========================================================= */
(function mcpLines() {
  const svg    = document.getElementById('mcpSvg');
  const canvas = document.getElementById('mcpCanvas');
  if (!svg || !canvas) return;

  const ns = 'http://www.w3.org/2000/svg';
  const CX = 180, CY = 180; // centre of 360x360 viewBox

  // Matches --nx / --ny percentages in HTML
  const nodePositions = [
    { nx: 85, ny: 44 },  // Deep Learning
    { nx: 58, ny: 86 },  // Generative AI
    { nx: 10, ny: 72 },  // Computer Vision
    { nx: 6,  ny: 32 },  // NLP
    { nx: 48, ny: 5  },  // MLOps
  ];

  const nodeColors = [
    'rgba(34,211,238,0.8)',   // Deep Learning — teal
    'rgba(244,114,182,0.8)',  // Generative AI — pink
    'rgba(52,211,153,0.8)',   // Computer Vision — green
    'rgba(167,139,250,0.8)',  // NLP — purple
    'rgba(251,191,36,0.8)',   // MLOps — amber
  ];

  // Draw a dashed gradient line from centre to each node
  nodePositions.forEach((pos, i) => {
    const x = pos.nx / 100 * 360;
    const y = pos.ny / 100 * 360;

    const gradId = `lineGrad${i}`;
    const defs   = svg.querySelector('defs') || (() => {
      const d = document.createElementNS(ns, 'defs');
      svg.prepend(d); return d;
    })();

    const grad = document.createElementNS(ns, 'linearGradient');
    grad.setAttribute('id', gradId);
    grad.setAttribute('gradientUnits', 'userSpaceOnUse');
    grad.setAttribute('x1', CX); grad.setAttribute('y1', CY);
    grad.setAttribute('x2', x);  grad.setAttribute('y2', y);

    const s1 = document.createElementNS(ns, 'stop');
    s1.setAttribute('offset', '0%');   s1.setAttribute('stop-color', 'rgba(108,99,255,0.9)');
    const s2 = document.createElementNS(ns, 'stop');
    s2.setAttribute('offset', '100%'); s2.setAttribute('stop-color', nodeColors[i]);
    grad.append(s1, s2);
    defs.appendChild(grad);

    const line = document.createElementNS(ns, 'line');
    line.setAttribute('x1', CX); line.setAttribute('y1', CY);
    line.setAttribute('x2', x);  line.setAttribute('y2', y);
    line.setAttribute('stroke', `url(#${gradId})`);
    line.setAttribute('stroke-width', '1');
    line.setAttribute('stroke-dasharray', '5 4');

    // Animated dash offset for "data flowing" effect
    const anim = document.createElementNS(ns, 'animate');
    anim.setAttribute('attributeName', 'stroke-dashoffset');
    anim.setAttribute('from', '0');
    anim.setAttribute('to', '-90');
    anim.setAttribute('dur', `${2 + i * 0.4}s`);
    anim.setAttribute('repeatCount', 'indefinite');
    line.appendChild(anim);

    svg.appendChild(line);
  });
})();

/* =========================================================
   NEURAL NETWORK BACKGROUND (Canvas 2D)
   Animated particle nodes + weighted edges — AI theme
   ========================================================= */
(function neuralBackground() {
  const canvas = document.getElementById('neuralCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let W, H, nodes, animId;
  const NODE_COUNT    = 60;
  const CONNECT_DIST  = 160;
  const SPEED         = 0.35;

  function resize() {
    W = canvas.width  = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
  }

  function randomNode() {
    return {
      x:  Math.random() * W,
      y:  Math.random() * H,
      vx: (Math.random() - 0.5) * SPEED,
      vy: (Math.random() - 0.5) * SPEED,
      r:  Math.random() * 2 + 1,
      pulse: Math.random() * Math.PI * 2,
    };
  }

  function init() {
    resize();
    nodes = Array.from({ length: NODE_COUNT }, randomNode);
  }

  function getColors() {
    const dark = document.documentElement.getAttribute('data-theme') !== 'light';
    return {
      node:   dark ? 'rgba(108,99,255,0.8)'  : 'rgba(91,82,240,0.6)',
      edge:   dark ? 'rgba(108,99,255,'       : 'rgba(91,82,240,',
      pulse:  dark ? 'rgba(34,211,238,0.9)'   : 'rgba(8,145,178,0.7)',
    };
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);
    const c = getColors();

    // update positions
    nodes.forEach(n => {
      n.x += n.vx; n.y += n.vy; n.pulse += 0.025;
      if (n.x < 0 || n.x > W) n.vx *= -1;
      if (n.y < 0 || n.y > H) n.vy *= -1;
    });

    // draw edges
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const a = nodes[i], b = nodes[j];
        const dx = a.x - b.x, dy = a.y - b.y;
        const dist = Math.sqrt(dx*dx + dy*dy);
        if (dist < CONNECT_DIST) {
          const alpha = (1 - dist / CONNECT_DIST) * 0.35;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = c.edge + alpha + ')';
          ctx.lineWidth = 0.7;
          ctx.stroke();
        }
      }
    }

    // draw nodes
    nodes.forEach(n => {
      const pulsed = n.r + Math.sin(n.pulse) * 0.5;
      ctx.beginPath();
      ctx.arc(n.x, n.y, pulsed, 0, Math.PI * 2);
      ctx.fillStyle = Math.sin(n.pulse) > 0.7 ? c.pulse : c.node;
      ctx.fill();
    });

    animId = requestAnimationFrame(draw);
  }

  function start() {
    cancelAnimationFrame(animId);
    init();
    draw();
  }

  window.addEventListener('resize', () => {
    resize();
    nodes = Array.from({ length: NODE_COUNT }, randomNode);
  });

  // re-render on theme change (colour shift)
  new MutationObserver(() => {}).observe(document.documentElement, {
    attributes: true, attributeFilter: ['data-theme']
  });

  start();
})();

/* =========================================================
   3D CARD TILT — timeline cards only (skill cards now flip)
   ========================================================= */
(function cardTilt() {
  const cards = document.querySelectorAll('.timeline__card');

  cards.forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const dx   = (e.clientX - rect.left  - rect.width  / 2) / (rect.width  / 2);
      const dy   = (e.clientY - rect.top   - rect.height / 2) / (rect.height / 2);
      card.style.transform = `translateY(-4px) rotateX(${-dy * 5}deg) rotateY(${dx * 5}deg)`;
      card.style.setProperty('--mx', `${((e.clientX - rect.left) / rect.width)  * 100}%`);
      card.style.setProperty('--my', `${((e.clientY - rect.top)  / rect.height) * 100}%`);
    });
    card.addEventListener('mouseleave', () => { card.style.transform = ''; });
  });
})();

/* =========================================================
   FLIP CARDS — touch toggle for mobile
   ========================================================= */
(function flipCards() {
  document.querySelectorAll('.flip-card').forEach(card => {
    card.addEventListener('click', () => card.classList.toggle('flipped'));
  });
})();
