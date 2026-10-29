// Page motion: scroll reveal, hero count-up, scroll progress, back-to-top, header state.
// Loaded last so every subject has already rendered its content.
document.addEventListener('DOMContentLoaded', function() {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const header = document.querySelector('.header');

    // Keep sticky toolbars below the header, whatever its height on this screen
    function setHeaderHeight() {
        document.documentElement.style.setProperty('--header-h', header.offsetHeight + 'px');
    }
    setHeaderHeight();
    window.addEventListener('resize', setHeaderHeight);

    // ---- Scroll progress, header shadow, back-to-top ----
    const bar = document.getElementById('scroll-progress');
    const toTop = document.getElementById('to-top');
    let ticking = false;

    function onScroll() {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        bar.style.width = (max > 0 ? (window.scrollY / max) * 100 : 0) + '%';
        header.classList.toggle('scrolled', window.scrollY > 10);
        toTop.classList.toggle('show', window.scrollY > 600);
        ticking = false;
    }

    window.addEventListener('scroll', function() {
        if (!ticking) {
            requestAnimationFrame(onScroll);
            ticking = true;
        }
    }, { passive: true });

    toTop.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    onScroll();

    // ---- Hero number count-up ----
    document.querySelectorAll('[data-count]').forEach(el => {
        const target = Number(el.dataset.count);
        const suffix = el.dataset.suffix || '';
        if (reduce) {
            el.textContent = target + suffix;
            return;
        }
        const start = performance.now() + 500;
        const duration = 1400;
        const tick = now => {
            const t = Math.min(Math.max((now - start) / duration, 0), 1);
            el.textContent = Math.round(target * (1 - Math.pow(1 - t, 3))) + (t === 1 ? suffix : '');
            if (t < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
    });

    // ---- Scroll reveal ----
    if (reduce || !('IntersectionObserver' in window)) return;

    const selector = '.topic-section, .qa-item, .mcq-question-item, .resources, .timeline-wrap, .tl-item, .nav-card, .progress-card, .mcq-test-section, .subject-header';
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.06, rootMargin: '0px 0px -30px 0px' });

    document.querySelectorAll(selector).forEach(el => {
        const siblings = el.parentElement ? Array.from(el.parentElement.children).filter(c => c.matches(selector)) : [];
        const index = siblings.indexOf(el);
        el.style.transitionDelay = Math.min(Math.max(index, 0), 6) * 0.06 + 's';
        el.classList.add('reveal');
        observer.observe(el);
    });
});
