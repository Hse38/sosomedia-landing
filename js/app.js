/**
 * DEFERRED DOM + scroll reveal. Loaded with defer = no parse blocking.
 * Services, Features, AI, Contact, Footer injected when placeholder nears viewport.
 */

// PERF: pause orb animation when tab hidden — saves CPU, no visual change when visible
function initOrbPause() {
  function update() {
    document.body.classList.toggle('orb-paused', document.hidden);
  }
  if (typeof document.hidden !== 'undefined') {
    document.addEventListener('visibilitychange', update);
    update();
  }
}
initOrbPause();

function setYear() {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
}

// PERF: inject queue — one section per frame to avoid DOM burst on fast scroll
const injectQueue = [];
let injectScheduled = false;
function processInjectQueue() {
  injectScheduled = false;
  if (injectQueue.length === 0) return;
  const { placeholder, name } = injectQueue.shift();
  const tpl = document.getElementById('tpl-' + name);
  if (!tpl || !tpl.content) {
    if (injectQueue.length) requestAnimationFrame(processInjectQueue);
    return;
  }
  const clone = tpl.content.cloneNode(true);
  const root = clone.firstElementChild;
  placeholder.replaceWith(clone);
  if (root) root.querySelectorAll('.fade-up').forEach(el => revealObserver.observe(el));
  if (name === 'footer') setYear();
  if (injectQueue.length > 0) requestAnimationFrame(processInjectQueue);
}

const injectObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const placeholder = entry.target;
    const name = placeholder.getAttribute('data-inject');
    if (!name) return;
    injectObserver.unobserve(placeholder);
    injectQueue.push({ placeholder, name });
    if (!injectScheduled) {
      injectScheduled = true;
      requestAnimationFrame(processInjectQueue);
    }
  });
}, { rootMargin: '200px 0px', threshold: 0 });

// PERF: batch all .show + listeners in one rAF so multiple fade-ups don't cause multiple frames
const revealObserver = new IntersectionObserver((entries) => {
  const toShow = [];
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const el = entry.target;
    revealObserver.unobserve(el);
    toShow.push(el);
  });
  if (toShow.length === 0) return;
  requestAnimationFrame(() => {
    toShow.forEach(el => {
      el.classList.add('show');
      const onDone = () => {
        el.style.willChange = 'auto';
        el.removeEventListener('transitionend', onDone);
      };
      el.addEventListener('transitionend', onDone);
    });
  });
}, { threshold: 0.2 });

document.querySelectorAll('[data-inject]').forEach(el => injectObserver.observe(el));

const fadeUps = document.querySelectorAll('.fade-up');
if (typeof requestIdleCallback !== 'undefined') {
  requestIdleCallback(() => { fadeUps.forEach(el => revealObserver.observe(el)); }, { timeout: 100 });
} else {
  fadeUps.forEach(el => revealObserver.observe(el));
}
