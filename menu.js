/* ==========================================================================
   SITE MENU: the single place that controls navigation, the home page cards
   and the empty panel each preparation is rendered into.

   HOW TO ADD A NEW PREPARATION (for example another job interview)
   1. Add one object to the "items" list of the right group below
      (a new job goes into the "interviews" group, a new subject into "patwari").
      Set isNew: true so it shows a NEW badge until you remove the flag.
   2. Create its content script. It must fill the element  #<id>-content
      (for a job: copy l2-interview-data.js and change the content).
   3. Add a <script src="your-file.js"></script> line in index.html,
      after menu.js and interview-engine.js.
   That is all: the dropdown, the home card, the search and the
   address (#/<id>) are generated from this list.

   HOW TO ADD A NEW GROUP
   Add another object to SITE_MENU with its own id, label and icon.
   ========================================================================== */
window.SITE_MENU = [
    {
        id: 'patwari',
        label: 'Patwari Exam',
        icon: 'fa-graduation-cap',
        blurb: 'Matriculation-level (9th and 10th) study material with questions, answers and a practice test for every subject.',
        items: [
            {
                id: 'english', label: 'English', icon: 'fa-language', sub: 'Grammar, composition and translation',
                title: 'English (9th & 10th Classes)',
                info: ['Grammar Composition and Translation for Secondary Classes', 'Publisher: New College Publication Quetta for BBISE', 'Authors: Mr. Kaleem Ullah, Mrs. Fouzia Durani'],
                tags: ['Q&A', 'Practice test']
            },
            {
                id: 'pakistan-studies', label: 'Pakistan Studies', icon: 'fa-flag', sub: 'History, geography and constitution',
                title: 'Pakistan Studies (9th & 10th Classes)',
                info: ['Publisher: New College Publication, Quetta for BBISE', 'Authors: Prof. Dr. Ahmad Saeed Khattak, Prof. Dr. Muhammad Nawaz, Prof. Muhammad Naseer Khan'],
                tags: ['Q&A', 'Practice test']
            },
            {
                id: 'mathematics', label: 'Mathematics', icon: 'fa-square-root-variable', sub: 'Formulas, examples and practice',
                title: 'Mathematics (9th & 10th Classes)',
                info: ['Publisher: New College Publication Quetta for BBISE', 'Authors: Mr. Abdul Khaliq Bughlani, Mr. Muhammad Asif, Ms. Shaista Panezai'],
                tags: ['Q&A', 'Practice test']
            },
            {
                id: 'islamiat', label: 'Islamiat', icon: 'fa-mosque', sub: 'Quran, Seerah and Islamic teachings',
                title: 'Islamiat (9th & 10th Classes)',
                info: ['Publisher: New College Publication, Quetta for BBISE', 'Authors: Ms. Sabeen Akbar, Mawlana Muhammad Hashim Kakar Panezai, Mr. Zeeshan Hashmi'],
                tags: ['Q&A', 'Practice test']
            },
            {
                id: 'general-science', label: 'General Science', icon: 'fa-flask', sub: 'Physics, chemistry and biology basics',
                title: 'General Science (9th & 10th Classes)',
                info: ['Publisher: Fahad Publishing Company, Quetta for BBISE', 'Author: M S Rajput CS'],
                tags: ['Q&A', 'Practice test']
            }
        ]
    },
    {
        id: 'interviews',
        label: 'Job Interviews',
        icon: 'fa-briefcase',
        accent: true,
        blurb: 'Interview and test preparation for specific posts, in English, Urdu and Roman Urdu, with visual explainers and a practice test.',
        items: [
            {
                id: 'it-interview', label: 'Assistant IT Developer', icon: 'fa-laptop-code', sub: 'BSDI / PIU, Government of Balochistan',
                badge: 'BPS-06', career: true, interview: true,
                title: 'Job Interview Preparation: Assistant IT Developer (BPS-06)',
                infoIcons: [
                    ['fa-building-columns', 'Balochistan Special Development Initiative (BSDI) | Program Implementation Unit (PIU)'],
                    ['fa-location-dot', 'Planning & Development Department, Government of Balochistan, Quetta'],
                    ['fa-file-contract', 'Contract, initial 1 year | Ad Ref: AB No. 3852 / 1-10-2026'],
                    ['fa-language', 'Available in English, اردو and Roman Urdu: use the language switch below']
                ],
                tags: ['3 languages', 'Visual explainers', 'Practice test']
            },
            {
                id: 'l2-interview', label: 'IT Assistant, Level 2 Support', icon: 'fa-headset', sub: 'Tele-Health Nerve Centre, Quetta',
                badge: 'Rs. 70,000', career: true, interview: true, isNew: true,
                title: 'Job Interview Preparation: IT Assistant, Level 2 Support',
                infoIcons: [
                    ['fa-hospital', 'Tele-Health Nerve Centre, Quetta | 5 posts | Rs. 70,000'],
                    ['fa-graduation-cap', "Bachelor's in IT / CS or equivalent | Women candidates especially encouraged"],
                    ['fa-language', 'Available in English, اردو and Roman Urdu: use the language switch below']
                ],
                tags: ['3 languages', 'Visual explainers', 'Practice test']
            }
        ]
    }
];

(function() {
    const MENU = window.SITE_MENU;
    const nav = document.getElementById('site-nav');
    const main = document.getElementById('main');
    const byId = {};
    MENU.forEach(g => g.items.forEach(it => { byId[it.id] = { item: it, group: g }; }));

    const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;');
    const newPill = it => (it.isNew ? '<span class="new-pill">NEW</span>' : '');

    // ---------- navigation ----------
    function buildNav() {
        nav.innerHTML = `
            <button class="tab-button nav-home" data-go="home"><i class="fas fa-house"></i> <span>All preparations</span></button>
            ${MENU.map(g => `
                <div class="nav-group" data-group="${g.id}">
                    <button class="tab-button nav-group-btn${g.accent ? ' tab-career' : ''}" aria-haspopup="true" aria-expanded="false">
                        <i class="fas ${g.icon}"></i> <span>${esc(g.label)}</span>
                        ${g.items.some(i => i.isNew) ? '<span class="new-dot" title="New"></span>' : ''}
                        <i class="fas fa-chevron-down caret"></i>
                    </button>
                    <div class="nav-menu" role="menu">
                        <div class="nav-menu-head">${esc(g.label)} <small>${g.items.length}</small></div>
                        ${g.items.map(it => `
                            <button class="nav-menu-item" role="menuitem" data-go="${it.id}">
                                <span class="nm-ico"><i class="fas ${it.icon}"></i></span>
                                <span class="nm-text"><b>${esc(it.label)} ${newPill(it)}</b><small>${esc(it.sub || '')}</small></span>
                                ${it.badge ? `<span class="nm-badge">${esc(it.badge)}</span>` : ''}
                            </button>`).join('')}
                    </div>
                </div>`).join('')}`;

        nav.addEventListener('click', e => {
            const go = e.target.closest('[data-go]');
            if (go) { closeMenus(); location.hash = '#/' + go.dataset.go; return; }
            const btn = e.target.closest('.nav-group-btn');
            if (btn) {
                const grp = btn.closest('.nav-group');
                const open = !grp.classList.contains('open');
                closeMenus();
                grp.classList.toggle('open', open);
                btn.setAttribute('aria-expanded', open);
            }
        });
        document.addEventListener('click', e => { if (!e.target.closest('.nav-group')) closeMenus(); });
        document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenus(); });
    }

    function closeMenus() {
        nav.querySelectorAll('.nav-group.open').forEach(g => {
            g.classList.remove('open');
            g.querySelector('.nav-group-btn').setAttribute('aria-expanded', 'false');
        });
    }

    // ---------- panels ----------
    function crumb(group, it) {
        return `<div class="breadcrumb">
            <a href="#/home"><i class="fas fa-house"></i> All preparations</a>
            <i class="fas fa-chevron-right"></i><span>${esc(group.label)}</span>
            <i class="fas fa-chevron-right"></i><b>${esc(it.label)}</b>
        </div>`;
    }

    function panelHtml(group, it) {
        const lines = it.infoIcons
            ? it.infoIcons.map(l => `<i class="fas ${l[0]}"></i> ${esc(l[1])}`).join('<br>')
            : (it.info || []).map(esc).join('<br>');
        return `
            <div id="${it.id}" class="subject-content${it.interview ? ' interview-root' : ''}">
                ${crumb(group, it)}
                <div class="subject-header${it.career ? ' career-header' : ''}">
                    <h2>${esc(it.title || it.label)}</h2>
                    <p class="book-info">${lines}</p>
                </div>
                <div id="${it.id}-content"></div>
            </div>`;
    }

    function homeHtml() {
        return `
            <div id="home" class="subject-content">
                <div class="subject-header">
                    <h2>All preparations</h2>
                    <p class="book-info">Choose what you want to prepare. Everything is listed here, and new material is marked <span class="new-pill">NEW</span>.</p>
                </div>
                <div class="lib-search"><i class="fas fa-magnifying-glass"></i>
                    <input id="lib-q" type="search" placeholder="Search subjects and jobs (for example: IT, support, English)" autocomplete="off">
                </div>
                ${MENU.map(g => `
                    <section class="lib-group" data-group="${g.id}">
                        <div class="lib-group-head">
                            <span class="lib-group-ico"><i class="fas ${g.icon}"></i></span>
                            <div><h3>${esc(g.label)}</h3><p>${esc(g.blurb || '')}</p></div>
                        </div>
                        <div class="lib-grid">
                            ${g.items.map(it => `
                                <a class="lib-card${g.accent ? ' accent' : ''}" href="#/${it.id}" data-search="${esc((it.label + ' ' + (it.sub || '') + ' ' + (it.title || '') + ' ' + (it.badge || '') + ' ' + (it.tags || []).join(' ') + ' ' + g.label).toLowerCase())}">
                                    ${newPill(it)}
                                    <span class="lib-ico"><i class="fas ${it.icon}"></i></span>
                                    <h4>${esc(it.label)}</h4>
                                    <p>${esc(it.sub || '')}</p>
                                    <div class="lib-meta">${it.badge ? `<span class="lib-badge">${esc(it.badge)}</span>` : ''}${(it.tags || []).map(t => `<span>${esc(t)}</span>`).join('')}</div>
                                    <span class="lib-open">Open <i class="fas fa-arrow-right"></i></span>
                                </a>`).join('')}
                        </div>
                    </section>`).join('')}
                <p class="lib-empty">No match. Try a different word.</p>
            </div>`;
    }

    function buildPanels() {
        main.innerHTML = homeHtml() + MENU.map(g => g.items.map(it => panelHtml(g, it)).join('')).join('');
        const q = document.getElementById('lib-q');
        q.addEventListener('input', () => {
            const term = q.value.trim().toLowerCase();
            let shown = 0;
            main.querySelectorAll('.lib-card').forEach(c => {
                const hit = !term || c.dataset.search.includes(term);
                c.style.display = hit ? '' : 'none';
                if (hit) shown++;
            });
            main.querySelectorAll('.lib-group').forEach(s => {
                s.style.display = [...s.querySelectorAll('.lib-card')].some(c => c.style.display !== 'none') ? '' : 'none';
            });
            main.querySelector('.lib-empty').style.display = shown ? 'none' : 'block';
        });
    }

    // ---------- showing a panel ----------
    window.SiteMenu = {
        ids: () => Object.keys(byId),
        setActive(id) {
            const info = byId[id];
            nav.querySelectorAll('.tab-button, .nav-menu-item').forEach(b => b.classList.remove('active'));
            if (id === 'home') nav.querySelector('.nav-home').classList.add('active');
            if (info) {
                nav.querySelector(`.nav-group[data-group="${info.group.id}"] .nav-group-btn`).classList.add('active');
                nav.querySelector(`.nav-menu-item[data-go="${id}"]`).classList.add('active');
            }
        }
    };

    function route(scroll) {
        const m = location.hash.match(/^#\/([\w-]+)/);
        let id = m ? m[1] : 'home';
        if (id !== 'home' && !byId[id]) id = 'home';
        showSubject(id, scroll);
    }

    buildNav();
    buildPanels();
    window.addEventListener('hashchange', () => route(true));
    document.addEventListener('DOMContentLoaded', () => route(false));
})();
