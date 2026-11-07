// Reusable trilingual (English / Urdu / Roman Urdu) interview-prep section.
// Renders: language switch, progress ring, section navigator, Q&A with visual explainers,
// 7-day timeline, tips and a practice test. Used by the Level 2 Support section.
(function() {
    const apps = {};

    const tri = (a, tag) => {
        tag = tag || 'span';
        return `<${tag} class="l-en">${a[0]}</${tag}><${tag} class="l-ur" lang="ur" dir="rtl">${a[1] || a[0]}</${tag}><${tag} class="l-rm">${a[2] || a[0]}</${tag}>`;
    };

    function mount(cfg) {
        const root = document.getElementById(cfg.rootId);
        const host = document.getElementById(cfg.contentId);
        const STORE_DONE = cfg.store + 'Done';
        const STORE_LANG = cfg.store + 'Lang';
        const API = `InterviewEngine.apps['${cfg.id}']`;
        const counts = {};
        let total = 0;

        function qa(n, m, item) {
            const key = `${n}.${m}`;
            counts[n] = (counts[n] || 0) + 1;
            total++;
            const viz = window.ITViz ? ITViz.build(`${cfg.id}:${key}`) : '';
            return `
                <div class="qa-item" data-key="${key}">
                    <div class="qa-question">${tri(item.q)}</div>
                    <div class="qa-answer">${viz}${tri(item.a, 'div')}</div>
                </div>`;
        }

        const sectionsHtml = cfg.sections.map(sec => `
            <div class="topic-section" id="${cfg.id}-sec-${sec.n}">
                <h3><span class="topic-icon">${sec.icon}</span><span class="topic-title">${tri(sec.t)}</span></h3>
                <div class="topic-description">${tri(sec.d)}</div>
                ${sec.items.map((it, i) => qa(sec.n, i + 1, it)).join('')}
            </div>`).join('');

        const planHtml = `
            <div class="timeline-wrap">
                <h4 class="tl-title"><i class="fas fa-route"></i> ${tri(cfg.plan.title)}</h4>
                <div class="timeline">
                    ${cfg.plan.days.map((d, i) => `
                        <div class="tl-item">
                            <div class="tl-dot">${i + 1}</div>
                            <div class="tl-card">
                                <span class="tl-day">${tri(d[0])}</span>
                                <h5>${tri(d[1])}</h5>
                                <p>${tri(d[2])}</p>
                            </div>
                        </div>`).join('')}
                </div>
            </div>`;

        const tipsHtml = `
            <div class="resources">
                <h4><i class="fas fa-star"></i> ${tri(cfg.tips.title)}</h4>
                <ul>${cfg.tips.items.map(t => `<li>${tri(t, 'div')}</li>`).join('')}</ul>
            </div>`;

        const stripRe = [/^Section \d+: /, /^حصہ \d+: /, /^Hissa \d+: /];
        const toolbarHtml = `
            <div class="it-toolbar">
                <div class="lang-switch" role="tablist" aria-label="Language">
                    <span class="lang-label"><i class="fas fa-language"></i></span>
                    <button class="lang-btn" data-lang="en" onclick="${API}.setLang('en')">English</button>
                    <button class="lang-btn lang-btn-ur" data-lang="ur" onclick="${API}.setLang('ur')">اردو</button>
                    <button class="lang-btn" data-lang="rm" onclick="${API}.setLang('rm')">Roman Urdu</button>
                </div>
                <div class="mini-progress">
                    <div class="mini-progress-bar"><span class="mini-fill"></span></div>
                    <b class="mini-text">0/${total}</b>
                </div>
            </div>
            <div class="it-overview">
                <div class="progress-card">
                    <div class="ring">
                        <svg viewBox="0 0 120 120"><circle class="ring-bg" cx="60" cy="60" r="52"></circle><circle class="ring-fg it-ring" cx="60" cy="60" r="52"></circle></svg>
                        <div class="ring-text"><b class="ring-pct">0%</b></div>
                    </div>
                    <div class="progress-info">
                        <h4>${tri(['Your Preparation Progress', 'آپ کی تیاری', 'Aap ki Tayari'])}</h4>
                        <p>${tri([`<b class="done-count">0</b> / ${total} questions studied`, `<b class="done-count">0</b> / ${total} سوالات پڑھ لیے`, `<b class="done-count">0</b> / ${total} sawalat parh liye`])}</p>
                        <p class="progress-hint">${tri(['Open a question to mark it as studied. Progress is saved in your browser.', 'سوال کھولنے پر وہ پڑھا ہوا شمار ہوتا ہے۔ پیش رفت آپ کے براؤزر میں محفوظ رہتی ہے۔', 'Sawal kholnay par woh parha hua shumar hota hai. Paish raft aap ke browser mein mehfooz rehti hai.'])}</p>
                        <button class="reset-btn" onclick="${API}.reset()"><i class="fas fa-rotate-left"></i> ${tri(['Reset', 'ری سیٹ', 'Reset'])}</button>
                    </div>
                </div>
                <div class="nav-cards">
                    ${cfg.sections.map(sec => `
                        <a class="nav-card" href="#${cfg.id}-sec-${sec.n}" onclick="${API}.jump(event, ${sec.n})">
                            <span class="nav-card-icon">${sec.icon}</span>
                            <span class="nav-card-title">${tri([sec.t[0].replace(stripRe[0], ''), (sec.t[1] || '').replace(stripRe[1], ''), (sec.t[2] || '').replace(stripRe[2], '')])}</span>
                            <span class="nav-card-count" data-sec="${sec.n}" data-total="${counts[sec.n]}">0/${counts[sec.n]}</span>
                        </a>`).join('')}
                </div>
            </div>`;

        // practice test (options stay in English: they are technical terms)
        const mcqs = cfg.mcqs.map(m => ({ question: tri(m.q), options: m.o, correct: m.c }));
        window[cfg.mcqSubject + 'MCQs'] = mcqs;

        host.innerHTML = toolbarHtml + sectionsHtml + planHtml + tipsHtml + createMCQTest(cfg.mcqSubject, mcqs);

        host.querySelector('.mcq-test-section h3').innerHTML = '<i class="fas fa-bullseye"></i> ' + tri(cfg.testTitle);
        host.querySelector('.test-info p').innerHTML = tri([
            `Total Questions: ${mcqs.length} | Answer all questions to get your score (options are in English, as in a real interview)`,
            `کل سوالات: ${mcqs.length} | اسکور کے لیے تمام سوالات حل کریں (آپشنز انگریزی میں ہیں)`,
            `Kul sawalat: ${mcqs.length} | Score ke liye tamam sawalat hal karein (options English mein hain)`
        ]);

        // ---- language ----
        const api = {
            setLang(lang) {
                root.dataset.lang = lang;
                root.querySelectorAll('.lang-btn').forEach(b => b.classList.toggle('active', b.dataset.lang === lang));
                try { localStorage.setItem(STORE_LANG, lang); } catch (e) {}
            },
            jump(e, n) {
                e.preventDefault();
                const el = document.getElementById(`${cfg.id}-sec-${n}`);
                const offset = document.querySelector('.header').offsetHeight + root.querySelector('.it-toolbar').offsetHeight + 16;
                window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - offset, behavior: 'smooth' });
            }
        };

        let saved = 'en';
        try { saved = localStorage.getItem(STORE_LANG) || 'en'; } catch (e) {}
        api.setLang(saved);

        // ---- progress ----
        let done = new Set();
        try { done = new Set(JSON.parse(localStorage.getItem(STORE_DONE) || '[]')); } catch (e) {}

        function render() {
            host.querySelectorAll('.qa-item').forEach(it => it.classList.toggle('studied', done.has(it.dataset.key)));
            const pct = Math.round((done.size / total) * 100);
            const circ = 2 * Math.PI * 52;
            const ring = host.querySelector('.it-ring');
            ring.style.strokeDasharray = circ;
            ring.style.strokeDashoffset = circ * (1 - done.size / total);
            host.querySelector('.ring-pct').textContent = pct + '%';
            host.querySelectorAll('.done-count').forEach(el => { el.textContent = done.size; });
            host.querySelector('.mini-fill').style.width = pct + '%';
            host.querySelector('.mini-text').textContent = done.size + '/' + total;
            host.querySelectorAll('.nav-card-count').forEach(c => {
                const d = [...done].filter(k => k.split('.')[0] === c.dataset.sec).length;
                c.textContent = d + '/' + c.dataset.total;
                c.closest('.nav-card').classList.toggle('complete', d === Number(c.dataset.total));
            });
        }

        host.addEventListener('click', e => {
            const q = e.target.closest('.qa-question');
            if (!q) return;
            const item = q.closest('.qa-item');
            if (item && window.ITViz && item.querySelector('.qa-answer.active')) ITViz.onOpen(item);
            if (item && !done.has(item.dataset.key)) {
                done.add(item.dataset.key);
                try { localStorage.setItem(STORE_DONE, JSON.stringify([...done])); } catch (err) {}
                render();
            }
        });

        api.reset = function() {
            done = new Set();
            try { localStorage.removeItem(STORE_DONE); } catch (e) {}
            render();
        };

        render();
        reloadQA();
        apps[cfg.id] = api;
    }

    window.InterviewEngine = { mount, apps };
})();
