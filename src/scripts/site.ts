// Shared behavior for every page: mobile menu, 3D tilt, scroll reveal.
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

// Mobile menu
const menuBtn = document.querySelector<HTMLButtonElement>('.menu-toggle');
const nav = document.getElementById('site-nav');
menuBtn?.addEventListener('click', () => {
  const open = nav?.classList.toggle('open') ?? false;
  menuBtn.setAttribute('aria-expanded', String(open));
});

// Tilt: elements with data-tilt lean toward the cursor. data-tilt="12" sets max degrees.
if (finePointer && !reduceMotion) {
  document.querySelectorAll<HTMLElement>('[data-tilt]').forEach((el) => {
    const max = Number(el.dataset.tilt) || 6;
    el.addEventListener('pointermove', (e) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      el.classList.add('tilting');
      el.style.setProperty('--rx', `${(-y * max).toFixed(2)}deg`);
      el.style.setProperty('--ry', `${(x * max).toFixed(2)}deg`);
    });
    el.addEventListener('pointerleave', () => {
      el.classList.remove('tilting');
      el.style.removeProperty('--rx');
      el.style.removeProperty('--ry');
    });
  });
}

// Reveal on scroll
const revealEls = document.querySelectorAll<HTMLElement>('.reveal');
if (reduceMotion || !('IntersectionObserver' in window)) {
  revealEls.forEach((el) => el.classList.add('in'));
} else {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    },
    { rootMargin: '0px 0px -8% 0px' },
  );
  revealEls.forEach((el) => io.observe(el));
}

export {};
