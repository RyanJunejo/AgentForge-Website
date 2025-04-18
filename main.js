/* ===== Typewriter Effect ===== */
document.addEventListener('DOMContentLoaded', () => {
    const target = document.getElementById('typewriter');
    if (!target) return;
    const text = target.textContent.trim();
    target.textContent = '';
    let i = 0;
    const speed = 90;
    (function type() {
      if (i < text.length) {
        target.textContent += text.charAt(i);
        i++;
        setTimeout(type, speed);
      }
    })();
  });
  
  /* ===== Scroll‑Reveal ===== */
  const revealObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  
  document
    .querySelectorAll('.feature-card, .step, .member')
    .forEach(el => revealObserver.observe(el));
  