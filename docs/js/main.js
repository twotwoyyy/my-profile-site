(function () {
  'use strict';

  /* ── 다크모드 ── */
  function initDarkMode() {
    const btn = document.getElementById('theme-toggle');
    if (!btn) return;

    function updateIcon(isDark) {
      btn.innerHTML = isDark
        ? /* 해 아이콘 */ `<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M17.657 17.657l-.707-.707M6.343 6.343l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z"/></svg>`
        : /* 달 아이콘 */ `<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/></svg>`;
    }

    updateIcon(document.documentElement.classList.contains('dark'));

    btn.addEventListener('click', function () {
      const isDark = document.documentElement.classList.toggle('dark');
      localStorage.theme = isDark ? 'dark' : 'light';
      updateIcon(isDark);
    });
  }

  /* ── 모바일 메뉴 ── */
  function initMobileMenu() {
    const btn = document.getElementById('menu-btn');
    const menu = document.getElementById('mobile-menu');
    if (!btn || !menu) return;

    btn.addEventListener('click', function () {
      const isOpen = !menu.classList.contains('hidden');
      menu.classList.toggle('hidden', isOpen);
      btn.setAttribute('aria-expanded', String(!isOpen));
    });

    // 메뉴 항목 클릭 시 닫기
    menu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        menu.classList.add('hidden');
        btn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ── 타이핑 효과 ── */
  function initTypingEffect() {
    const el = document.getElementById('typed-text');
    if (!el) return;

    const titles = ['풀스택 개발자', 'Frontend Developer', 'Backend Developer', 'React Developer'];
    let titleIdx = 0;
    let charIdx = 0;
    let isDeleting = false;
    let timer;

    function type() {
      const current = titles[titleIdx];

      if (isDeleting) {
        el.textContent = current.slice(0, --charIdx);
      } else {
        el.textContent = current.slice(0, ++charIdx);
      }

      let delay = isDeleting ? 60 : 100;

      if (!isDeleting && charIdx === current.length) {
        delay = 1800;
        isDeleting = true;
      } else if (isDeleting && charIdx === 0) {
        isDeleting = false;
        titleIdx = (titleIdx + 1) % titles.length;
        delay = 400;
      }

      timer = setTimeout(type, delay);
    }

    type();
  }

  /* ── 스크롤 스파이 (nav active) ── */
  function initScrollSpy() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    if (!sections.length || !navLinks.length) return;

    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            navLinks.forEach(function (link) {
              link.classList.toggle(
                'active',
                link.getAttribute('href') === '#' + entry.target.id
              );
            });
          }
        });
      },
      { threshold: 0.5, rootMargin: '-80px 0px 0px 0px' }
    );

    sections.forEach(function (s) { observer.observe(s); });
  }

  /* ── 스크롤 fade-in ── */
  function initFadeIn() {
    const els = document.querySelectorAll('.fade-in-section');
    if (!els.length) return;

    const observer = new IntersectionObserver(
      function (entries, obs) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    els.forEach(function (el) { observer.observe(el); });
  }

  /* ── 스크롤 탑 버튼 ── */
  function initScrollTop() {
    const btn = document.getElementById('scroll-top');
    if (!btn) return;

    window.addEventListener('scroll', function () {
      const show = window.scrollY > 400;
      btn.classList.toggle('opacity-0', !show);
      btn.classList.toggle('pointer-events-none', !show);
    });

    btn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ── 이메일 복사 ── */
  function initCopyEmail() {
    const btn = document.getElementById('copy-email');
    const toast = document.getElementById('toast');
    if (!btn || !toast) return;

    btn.addEventListener('click', function () {
      const email = btn.dataset.email;
      navigator.clipboard.writeText(email).then(function () {
        toast.classList.remove('opacity-0');
        setTimeout(function () {
          toast.classList.add('opacity-0');
        }, 2000);
      });
    });
  }

  /* ── 초기화 ── */
  document.addEventListener('DOMContentLoaded', function () {
    initDarkMode();
    initMobileMenu();
    initTypingEffect();
    initScrollSpy();
    initFadeIn();
    initScrollTop();
    initCopyEmail();
  });
})();
