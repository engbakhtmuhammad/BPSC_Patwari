// Animated and interactive visual explainers for the interview Q&As.
// Each entry in V is keyed like the Q&A ("section.question") and returns the HTML shown at the top of the answer.
// Animations are CSS-driven and start when the answer opens (.qa-answer.active); see visuals.css.
(function() {
    // Trilingual text: [english, urdu, roman urdu]. CSS shows the active language.
    const T = (en, ur, rm) => `<span class="l-en">${en}</span><span class="l-ur" lang="ur" dir="rtl">${ur || en}</span><span class="l-rm">${rm || en}</span>`;
    const t3 = a => T(a[0], a[1], a[2]);
    let uid = 0;

    const wrap = (inner, cls, cap) => `
        <div class="viz ${cls || ''}">
            <div class="viz-head">
                <span class="viz-badge"><i class="fas fa-wand-magic-sparkles"></i> ${T('Visual explainer', 'بصری وضاحت', 'Visual wazahat')}</span>
                <button class="viz-replay" onclick="ITViz.replay(this)" title="Replay"><i class="fas fa-rotate-right"></i></button>
            </div>
            ${inner}
            ${cap ? `<p class="viz-cap">${t3(cap)}</p>` : ''}
        </div>`;

    const TRY = ['Try it: press the buttons', 'آزمائیں: بٹن دبائیں', 'Aazmayen: button dabayen'];

    // ---------- generic building blocks ----------
    function flow(steps, cap) {
        const n = steps.length;
        const html = steps.map((s, i) => `
            <div class="v-step" style="--i:${i}">
                <span class="v-num">${i + 1}</span>
                <div class="v-ico">${s[0]}</div>
                <div class="v-lbl">${t3(s[1])}</div>
            </div>${i < n - 1 ? `<div class="v-arrow" style="--i:${i}"><span></span></div>` : ''}`).join('');
        return wrap(`<div class="v-flow" style="--n:${n}">${html}</div>`, '', cap);
    }

    function hub(core, spokes, cap) {
        const n = spokes.length;
        const html = spokes.map((s, i) => {
            const a = -90 + (i * 360) / n;
            return `<div class="v-line" style="--a:${a}deg;--i:${i}"></div>
                <div class="v-spoke" style="--a:${a}deg;--i:${i}"><span class="v-spoke-ico">${s[0]}</span><span class="v-spoke-lbl">${t3(s[1])}</span></div>`;
        }).join('');
        return wrap(`<div class="v-hub"><div class="v-orbit"></div>${html}<div class="v-core"><div class="v-core-ico">${core[0]}</div><b>${t3(core[1])}</b></div></div>`, '', cap);
    }

    function stats(items, cap) {
        return wrap(`<div class="v-stats">${items.map((it, i) => `
            <div class="v-stat" style="--i:${i}">
                <div class="v-stat-v">${it.n != null ? `<span class="v-count" data-n="${it.n}" data-pad="${it.pad || 0}">0</span>` : it.v}</div>
                <div class="v-stat-l">${t3(it.l)}</div>
            </div>`).join('')}</div>`, '', cap);
    }

    function cards(items, cap) {
        return wrap(`<div class="v-cards" style="--c:${items.length}">${items.map((it, i) => `
            <div class="v-card" style="--i:${i}">
                <div class="v-card-ico">${it[0]}</div>
                <h6>${t3(it[1])}</h6>
                ${it[2] ? `<p>${t3(it[2])}</p>` : ''}
            </div>`).join('')}</div>`, '', cap);
    }

    function checklist(items, cap) {
        return wrap(`<ul class="v-check">${items.map((it, i) => `
            <li style="--i:${i}"><span class="v-tick"><i class="fas fa-check"></i></span><span>${t3(it)}</span></li>`).join('')}</ul>`, '', cap);
    }

    // ---------- concept visuals ----------
    function compileVsInterpret() {
        return wrap(`
            <div class="v-lanes">
                <div class="v-lane">
                    <h5>${T('Compiled (C, C++, Java)', 'کمپائلڈ (C, C++, Java)', 'Compiled (C, C++, Java)')}</h5>
                    <div class="v-mini-flow">
                        <span class="v-chip" style="--i:0">📄 Source</span><i class="v-mini-arrow" style="--i:0"></i>
                        <span class="v-chip" style="--i:1">⚙️ Compiler</span><i class="v-mini-arrow" style="--i:1"></i>
                        <span class="v-chip" style="--i:2">📦 .exe</span><i class="v-mini-arrow" style="--i:2"></i>
                        <span class="v-chip" style="--i:3">⚡ Run fast</span>
                    </div>
                    <p class="v-lane-note">${T('Translated once, before running', 'چلنے سے پہلے ایک بار ترجمہ', 'Chalnay se pehlay aik baar tarjuma')}</p>
                </div>
                <div class="v-lane">
                    <h5>${T('Interpreted (JavaScript, Python, PHP)', 'انٹرپریٹڈ (JavaScript, Python, PHP)', 'Interpreted (JavaScript, Python, PHP)')}</h5>
                    <div class="v-code">
                        <div style="--i:0">1&nbsp; let total = 0;</div>
                        <div style="--i:1">2&nbsp; total = a + b;</div>
                        <div style="--i:2">3&nbsp; show(total);</div>
                        <div style="--i:3">4&nbsp; // next line...</div>
                    </div>
                    <p class="v-lane-note">${T('Executed line by line while running', 'چلتے وقت لائن بہ لائن', 'Chalte waqt line ba line')}</p>
                </div>
            </div>`);
    }

    function binarySearch() {
        const arr = [3, 8, 14, 21, 29, 37, 45, 58, 66, 72, 81, 90];
        return wrap(`
            <div class="v-bs" data-lo="0" data-hi="${arr.length - 1}" data-steps="0" data-done="0">
                <div class="v-bs-target">${T('Find', 'تلاش کریں', 'Talash karein')} <b>58</b> ${T('in a sorted list', 'ترتیب شدہ فہرست میں', 'tarteeb shuda fehrist mein')}</div>
                <div class="v-bs-cells">${arr.map((n, i) => `<div class="v-bs-cell" data-i="${i}" data-v="${n}">${n}</div>`).join('')}</div>
                <div class="v-bs-status">${T('Press "Next step"', '"اگلا قدم" دبائیں', '"Agla qadam" dabayen')}</div>
                <div class="v-btns">
                    <button onclick="ITViz.bs(this,'step')">${T('Next step', 'اگلا قدم', 'Agla qadam')}</button>
                    <button class="ghost" onclick="ITViz.bs(this,'reset')">${T('Reset', 'ری سیٹ', 'Reset')}</button>
                </div>
                <div class="v-bars">
                    <div class="v-bar-row"><span>O(1)</span><div><i style="--w:3%"></i></div><em>1</em></div>
                    <div class="v-bar-row"><span>O(log n)</span><div><i style="--w:11%"></i></div><em>10</em></div>
                    <div class="v-bar-row"><span>O(n)</span><div><i style="--w:52%"></i></div><em>1,000</em></div>
                    <div class="v-bar-row"><span>O(n²)</span><div><i style="--w:100%"></i></div><em>1,000,000</em></div>
                </div>
                <p class="v-lane-note">${T('Steps needed when n = 1,000 (Big-O growth)', 'n = 1,000 ہو تو درکار قدم (Big-O کی رفتار)', 'n = 1,000 ho to darkar qadam (Big-O ki raftar)')}</p>
            </div>`, '', TRY);
    }

    function stackQueue() {
        const blk = n => `<div class="v-blk">${n}</div>`;
        return wrap(`
            <div class="v-sq">
                <div class="v-panel" data-kind="stack" data-next="3">
                    <h5>Stack <small>LIFO</small></h5>
                    <div class="v-stack v-slot">${blk(1)}${blk(2)}</div>
                    <div class="v-btns"><button onclick="ITViz.sq(this,'in')">Push</button><button class="ghost" onclick="ITViz.sq(this,'out')">Pop</button></div>
                    <p class="v-note">${T('Last in, first out (Undo button)', 'آخر میں آنے والا پہلے نکلے (Undo)', 'Aakhir mein aanay wala pehlay niklay (Undo)')}</p>
                </div>
                <div class="v-panel" data-kind="queue" data-next="3">
                    <h5>Queue <small>FIFO</small></h5>
                    <div class="v-queue v-slot">${blk(1)}${blk(2)}</div>
                    <div class="v-btns"><button onclick="ITViz.sq(this,'in')">Enqueue</button><button class="ghost" onclick="ITViz.sq(this,'out')">Dequeue</button></div>
                    <p class="v-note">${T('First in, first out (print queue)', 'پہلے آنے والا پہلے نکلے (پرنٹ قطار)', 'Pehlay aanay wala pehlay niklay (print qatar)')}</p>
                </div>
            </div>`, '', TRY);
    }

    function waterAgile() {
        const ph = ['Requirements', 'Design', 'Build', 'Test', 'Deploy', 'Maintain'];
        return wrap(`
            <div class="v-lanes">
                <div class="v-lane">
                    <h5>Waterfall</h5>
                    <div class="v-water">${ph.map((p, i) => `<div class="v-water-step" style="--i:${i}">${p}</div>`).join('')}</div>
                    <p class="v-lane-note">${T('One phase after another', 'ایک کے بعد ایک مرحلہ', 'Aik ke baad aik marhala')}</p>
                </div>
                <div class="v-lane">
                    <h5>Agile</h5>
                    <div class="v-sprints">${[1, 2, 3].map(n => `<div class="v-sprint" style="--i:${n - 1}"><div class="v-spin"></div><b>Sprint ${n}</b><small>plan · build · test · feedback</small></div>`).join('')}</div>
                    <p class="v-lane-note">${T('Small cycles with constant feedback', 'چھوٹے چکر اور مسلسل فیڈ بیک', 'Chhotay chakar aur musalsal feedback')}</p>
                </div>
            </div>`);
    }

    function gitGraph() {
        return wrap(`
            <svg class="v-git" viewBox="0 0 640 190" role="img" aria-label="Git branches">
                <path class="g-line g-main" d="M30 50 H610"/>
                <path class="g-line g-feat" d="M170 50 C200 50 200 140 240 140 H400 C440 140 440 50 470 50"/>
                ${[[30, 50, 'c1'], [170, 50, 'c2'], [330, 50, 'c3'], [470, 50, 'merge'], [610, 50, 'c5']].map((c, i) => `<g class="g-commit" style="--i:${i}"><circle cx="${c[0]}" cy="${c[1]}" r="11"/><text x="${c[0]}" y="${c[1] - 20}">${c[2]}</text></g>`).join('')}
                ${[[270, 140, 'f1'], [370, 140, 'f2']].map((c, i) => `<g class="g-commit g-fc" style="--i:${i + 5}"><circle cx="${c[0]}" cy="${c[1]}" r="11"/><text x="${c[0]}" y="${c[1] + 32}">${c[2]}</text></g>`).join('')}
                <text class="g-tag" x="30" y="90">main</text>
                <text class="g-tag g-tag2" x="322" y="112">feature branch</text>
            </svg>
            <div class="v-chips-row"><span>git branch</span><span>git commit</span><span>git merge</span><span>git push</span></div>`);
    }

    function erDiagram() {
        const tbl = (x, y, w, title, rows) => {
            const h = 30 + rows.length * 26;
            return `<g class="er-t"><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="10"/><rect class="er-h" x="${x}" y="${y}" width="${w}" height="30" rx="10"/><rect class="er-h2" x="${x}" y="${y + 18}" width="${w}" height="12"/><text class="er-title" x="${x + 12}" y="${y + 20}">${title}</text>
                ${rows.map((r, i) => `<g><rect class="er-b er-${r[0].toLowerCase()}" x="${x + 10}" y="${y + 37 + i * 26}" width="26" height="16" rx="4"/><text class="er-bt" x="${x + 23}" y="${y + 49 + i * 26}">${r[0]}</text><text class="er-f" x="${x + 44}" y="${y + 50 + i * 26}">${r[1]}</text></g>`).join('')}</g>`;
        };
        const link = (d, i) => `<path class="er-link" style="--i:${i}" d="${d}"/>`;
        return wrap(`
            <svg class="v-er" viewBox="0 0 800 340" role="img" aria-label="Database relations">
                ${link('M190 90 C250 90 255 92 315 92', 0)}${link('M620 90 C560 90 560 118 505 118', 1)}${link('M410 180 V230', 2)}
                <text class="er-card" x="200" y="82">1</text><text class="er-card" x="296" y="84">N</text>
                <text class="er-card" x="596" y="82">1</text><text class="er-card" x="512" y="112">N</text>
                <text class="er-card" x="418" y="198">1</text><text class="er-card" x="418" y="222">N</text>
                ${tbl(20, 40, 170, 'Districts', [['PK', 'id'], ['', 'name'], ['', 'population']])}
                ${tbl(315, 20, 190, 'Projects', [['PK', 'id'], ['FK', 'district_id'], ['FK', 'contractor_id'], ['', 'name'], ['', 'budget']])}
                ${tbl(620, 40, 170, 'Contractors', [['PK', 'id'], ['', 'name'], ['', 'phone']])}
                ${tbl(315, 230, 190, 'Payments', [['PK', 'id'], ['FK', 'project_id'], ['', 'amount'], ['', 'date']])}
            </svg>
            <div class="v-legend"><span><i class="lg-pk"></i> ${T('Primary key: unique ID', 'Primary key: یکتا شناخت', 'Primary key: yakta pehchan')}</span><span><i class="lg-fk"></i> ${T('Foreign key: points to another table', 'Foreign key: دوسرے ٹیبل کی طرف اشارہ', 'Foreign key: doosray table ki taraf ishara')}</span></div>`);
    }

    function joins() {
        const id = 'vj' + (uid++);
        return wrap(`
            <div class="v-join" data-mode="inner">
                <div class="v-btns v-tabs">
                    <button class="on" onclick="ITViz.join(this,'inner')">INNER JOIN</button>
                    <button onclick="ITViz.join(this,'left')">LEFT JOIN</button>
                    <button onclick="ITViz.join(this,'full')">FULL JOIN</button>
                </div>
                <svg viewBox="0 0 420 200" class="venn">
                    <defs><clipPath id="${id}"><circle cx="150" cy="100" r="72"/></clipPath></defs>
                    <circle class="va" cx="150" cy="100" r="72"/>
                    <circle class="vb" cx="270" cy="100" r="72"/>
                    <circle class="vx" cx="270" cy="100" r="72" clip-path="url(#${id})"/>
                    <text x="105" y="104">Projects</text><text x="312" y="104">Contractors</text>
                </svg>
                <div class="v-join-desc">
                    <span data-for="inner">${T('Only rows that match in both tables', 'صرف وہ صفیں جو دونوں ٹیبلز میں ملیں', 'Sirf woh safein jo dono tables mein milein')}</span>
                    <span data-for="left">${T('All Projects, plus matching Contractors (NULL if none)', 'تمام Projects اور ملنے والے Contractors (نہ ملے تو NULL)', 'Tamam Projects aur milnay walay Contractors (na milay to NULL)')}</span>
                    <span data-for="full">${T('Everything from both tables', 'دونوں ٹیبلز کا سب کچھ', 'Dono tables ka sab kuch')}</span>
                </div>
                <code class="v-sql">SELECT * FROM Projects p <b>INNER JOIN</b> Contractors c ON p.contractor_id = c.id;</code>
            </div>`, '', TRY);
    }

    const SQL_ROWS = [
        { id: 1, name: 'Girls School', district: 'Quetta', budget: 42 },
        { id: 2, name: 'Basic Health Unit', district: 'Gwadar', budget: 18 },
        { id: 3, name: 'Water Scheme', district: 'Turbat', budget: 27 },
        { id: 4, name: 'Link Road', district: 'Quetta', budget: 65 },
        { id: 5, name: 'Primary School', district: 'Zhob', budget: 12 },
        { id: 6, name: 'Dispensary', district: 'Quetta', budget: 22 }
    ];

    function sqlTable(rows, cls) {
        return `<table class="v-table ${cls || ''}"><thead><tr><th>id</th><th>name</th><th>district</th><th>budget (M)</th></tr></thead><tbody>${rows.map((r, i) => `<tr class="${r.dim ? 'dim' : ''}" style="--i:${i}"><td>${r.id}</td><td>${r.name}</td><td>${r.district}</td><td>${r.budget}</td></tr>`).join('')}</tbody></table>`;
    }

    function sqlPlayground() {
        return wrap(`
            <div class="v-sql-play">
                <div class="v-btns v-tabs">
                    <button onclick="ITViz.sql(this,'where')">WHERE</button>
                    <button onclick="ITViz.sql(this,'order')">ORDER BY + LIMIT</button>
                    <button onclick="ITViz.sql(this,'group')">GROUP BY</button>
                    <button class="ghost" onclick="ITViz.sql(this,'reset')">${T('Reset', 'ری سیٹ', 'Reset')}</button>
                </div>
                <code class="v-sql">SELECT * FROM Projects;</code>
                <div class="v-sql-out">${sqlTable(SQL_ROWS)}</div>
            </div>`, '', TRY);
    }

    function dropDemo() {
        return wrap(`
            <div class="v-dt" data-state="">
                <div class="v-btns v-tabs">
                    <button onclick="ITViz.dt(this,'delete')">DELETE WHERE id = 2</button>
                    <button onclick="ITViz.dt(this,'truncate')">TRUNCATE</button>
                    <button onclick="ITViz.dt(this,'drop')">DROP</button>
                    <button class="ghost" onclick="ITViz.dt(this,'')">${T('Reset', 'ری سیٹ', 'Reset')}</button>
                </div>
                <div class="v-dt-stage">
                    <table class="v-table"><thead><tr><th>id</th><th>name</th><th>district</th></tr></thead>
                    <tbody><tr class="r1"><td>1</td><td>Girls School</td><td>Quetta</td></tr><tr class="r2"><td>2</td><td>Health Unit</td><td>Gwadar</td></tr><tr class="r3"><td>3</td><td>Water Scheme</td><td>Turbat</td></tr><tr class="r4"><td>4</td><td>Link Road</td><td>Quetta</td></tr></tbody></table>
                    <div class="v-dt-msg m-drop">💥 ${T('Table is gone: structure and data', 'ٹیبل ختم: ڈھانچہ اور ڈیٹا دونوں', 'Table khatam: dhancha aur data dono')}</div>
                    <div class="v-dt-msg m-trunc">🧹 ${T('Rows removed, empty table remains', 'صفیں ختم، خالی ٹیبل باقی', 'Safein khatam, khali table baqi')}</div>
                    <div class="v-dt-msg m-del">✂️ ${T('Only the selected row is removed', 'صرف منتخب صف ہٹی', 'Sirf muntakhib saf hati')}</div>
                </div>
            </div>`, '', TRY);
    }

    function backup321() {
        return wrap(`
            <div class="v-backup">
                <div class="v-bk" style="--i:0"><div class="v-bk-ico">💻</div><b>${T('Copy 1', 'نقل 1', 'Naqal 1')}</b><small>${T('Original data', 'اصل ڈیٹا', 'Asal data')}</small></div>
                <div class="v-arrow" style="--i:0"><span></span></div>
                <div class="v-bk" style="--i:1"><div class="v-bk-ico">💾</div><b>${T('Copy 2', 'نقل 2', 'Naqal 2')}</b><small>${T('Different media (external disk)', 'مختلف ذریعہ (ایکسٹرنل ڈسک)', 'Mukhtalif zariya (external disk)')}</small></div>
                <div class="v-arrow" style="--i:1"><span></span></div>
                <div class="v-bk v-bk-off" style="--i:2"><div class="v-bk-ico">☁️</div><b>${T('Copy 3', 'نقل 3', 'Naqal 3')}</b><small>${T('Off-site (cloud / another office)', 'باہر (کلاؤڈ / دوسرا دفتر)', 'Bahar (cloud / doosra daftar)')}</small></div>
            </div>
            <div class="v-chips-row v-big"><span>3 ${T('copies', 'نقول', 'naqalein')}</span><span>2 ${T('media', 'ذرائع', 'zaraye')}</span><span>1 ${T('off-site', 'باہر', 'bahar')}</span></div>`);
    }

    function htmlCssJs() {
        const mini = k => `<div class="v-page v-page-${k}"><div class="v-p-head"></div><div class="v-p-row"><div class="v-p-box"></div><div class="v-p-box"></div><div class="v-p-box"></div></div><div class="v-p-btn">${k === 'js' ? '<span class="v-p-count">+1</span>' : ''}</div></div>`;
        return wrap(`
            <div class="v-trio">
                <div class="v-tcard" style="--i:0">${mini('html')}<h6>HTML</h6><p>${T('Skeleton: structure', 'ڈھانچہ', 'Dhancha')}</p></div>
                <div class="v-plus">+</div>
                <div class="v-tcard" style="--i:1">${mini('css')}<h6>CSS</h6><p>${T('Clothes: style', 'لباس: انداز', 'Libas: andaz')}</p></div>
                <div class="v-plus">+</div>
                <div class="v-tcard" style="--i:2">${mini('js')}<h6>JavaScript</h6><p>${T('Movement: behaviour', 'حرکت: رویہ', 'Harkat: rawayya')}</p></div>
            </div>`);
    }

    function responsive() {
        return wrap(`
            <div class="v-resp">
                <div class="v-frame">
                    <div class="v-f-bar"><span></span><span></span><span></span></div>
                    <div class="v-f-body"><div class="v-f-hero"></div><div class="v-f-grid"><i></i><i></i><i></i><i></i></div></div>
                </div>
                <div class="v-resp-labels"><span class="d">🖥️ Desktop</span><span class="t">📱 Tablet</span><span class="p">📱 Phone</span></div>
            </div>`, '', ['Same page, layout adapts to the screen', 'ایک ہی پیج، اسکرین کے مطابق لے آؤٹ', 'Aik hi page, screen ke mutabiq layout']);
    }

    function requestFlow() {
        return wrap(`
            <div class="v-req">
                <div class="v-node"><div>💻</div><b>Browser</b><small>Client</small></div>
                <div class="v-track"><i class="dot r d0"></i><i class="dot l d3"></i><span>1 Request</span></div>
                <div class="v-node"><div>🖥️</div><b>Server</b><small>PHP / Node / Python</small></div>
                <div class="v-track"><i class="dot r d1"></i><i class="dot l d2"></i><span>2 Query</span></div>
                <div class="v-node"><div>🗄️</div><b>Database</b><small>SQL</small></div>
            </div>
            <div class="v-chips-row"><span>${T('3 Response: HTML page or JSON', '3 جواب: HTML پیج یا JSON', '3 Jawab: HTML page ya JSON')}</span></div>`);
    }

    function getPost() {
        return wrap(`
            <div class="v-lanes">
                <div class="v-lane">
                    <h5>GET</h5>
                    <div class="v-url">https://site.org/login<b class="expose">?user=ali&amp;pass=1234</b></div>
                    <p class="v-lane-note bad">⚠️ ${T('Data is visible in the URL', 'ڈیٹا URL میں نظر آتا ہے', 'Data URL mein nazar aata hai')}</p>
                </div>
                <div class="v-lane">
                    <h5>POST</h5>
                    <div class="v-url">https://site.org/login</div>
                    <div class="v-env">✉️ <span>user=ali &amp; pass=••••</span> 🔒</div>
                    <p class="v-lane-note good">✅ ${T('Data travels in the request body', 'ڈیٹا request body میں جاتا ہے', 'Data request body mein jata hai')}</p>
                </div>
            </div>`);
    }

    function topology() {
        const dev = (x, y, ico, lab, i) => `<g class="n-dev" style="--i:${i}"><circle cx="${x}" cy="${y}" r="26"/><text class="n-ico" x="${x}" y="${y + 8}">${ico}</text><text class="n-lab" x="${x}" y="${y + 46}">${lab}</text></g>`;
        const line = (x1, y1, x2, y2) => `<line class="n-line" x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}"/>`;
        return wrap(`
            <svg class="v-net" viewBox="0 0 720 300" role="img" aria-label="Office network">
                ${line(90, 60, 270, 150)}${line(90, 150, 270, 150)}${line(90, 240, 270, 150)}${line(270, 150, 450, 150)}${line(450, 150, 630, 150)}
                ${dev(90, 60, '💻', 'PC  192.168.1.10', 0)}${dev(90, 150, '🖨️', 'Printer  .20', 1)}${dev(90, 240, '📱', 'Wi-Fi phone  .30', 2)}
                ${dev(270, 150, '🔀', 'Switch (LAN)', 3)}${dev(450, 150, '📡', 'Router', 4)}${dev(630, 150, '🌐', 'Internet (WAN)', 5)}
            </svg>
            <div class="v-chips-row"><span>LAN = ${T('inside the office', 'دفتر کے اندر', 'daftar ke andar')}</span><span>Switch = ${T('connects devices', 'ڈیوائسز جوڑتا ہے', 'devices jorta hai')}</span><span>Router = ${T('connects networks', 'نیٹ ورکس جوڑتا ہے', 'networks jorta hai')}</span></div>`);
    }

    function layers() {
        const L = [
            ['👥', 'Staff awareness', 'عملے کی آگاہی', 'Staff ki agahi'],
            ['🔥', 'Firewall + HTTPS', 'فائر وال + HTTPS', 'Firewall + HTTPS'],
            ['🔑', 'Strong passwords + 2FA', 'مضبوط پاس ورڈ + 2FA', 'Mazboot password + 2FA'],
            ['🔄', 'Updates', 'اپ ڈیٹس', 'Updates'],
            ['💾', 'Backups', 'بیک اپ', 'Backup']
        ];
        return wrap(`
            <div class="v-layers">
                <div class="v-rings">${L.map((l, i) => `<div class="v-ring" style="--i:${i};--s:${100 - i * 17}%"></div>`).join('')}<div class="v-ring-core">🗄️<small>Data</small></div></div>
                <ul class="v-layer-list">${L.map((l, i) => `<li style="--i:${i}"><span>${l[0]}</span>${T(l[1], l[2], l[3])}</li>`).join('')}</ul>
            </div>`, '', ['Defence in depth: every layer protects the next', 'گہرائی میں دفاع: ہر پرت اگلی کو بچاتی ہے', 'Gehrai mein difa: har parat agli ko bachati hai']);
    }

    function dashboard() {
        const bars = [['Quetta', 82], ['Turbat', 64], ['Gwadar', 48], ['Zhob', 71], ['Khuzdar', 56]];
        const circ = 2 * Math.PI * 38;
        return wrap(`
            <div class="v-dash">
                <div class="v-dash-top">
                    <div class="v-kpi" style="--i:0"><small>Projects</small><b><span class="v-count" data-n="949">0</span></b></div>
                    <div class="v-kpi" style="--i:1"><small>Completed</small><b><span class="v-count" data-n="612">0</span></b></div>
                    <div class="v-kpi warn" style="--i:2"><small>Delayed</small><b><span class="v-count" data-n="87">0</span></b></div>
                </div>
                <div class="v-dash-main">
                    <div class="v-dash-bars">${bars.map((b, i) => `<div class="v-dbar" style="--i:${i}"><span>${b[0]}</span><div><i style="--w:${b[1]}%"></i></div><em>${b[1]}%</em></div>`).join('')}</div>
                    <div class="v-donut"><svg viewBox="0 0 100 100"><circle class="d-bg" cx="50" cy="50" r="38"/><circle class="d-fg" cx="50" cy="50" r="38" style="stroke-dasharray:${circ};--off:${circ * 0.35}"/></svg><b>65%</b><small>Budget used</small></div>
                </div>
            </div>`, '', ['Illustrative numbers: shows what a good dashboard looks like', 'فرضی اعداد: اچھے ڈیش بورڈ کا انداز', 'Farzi adaad: achhay dashboard ka andaz']);
    }

    function pinsMap() {
        const pins = [[250, 120, 'e'], [330, 200, 'h'], [160, 220, 'w'], [400, 120, 'r'], [300, 280, 'e'], [210, 310, 'h'], [120, 140, 'w'], [440, 230, 'r'], [350, 70, 'h']];
        return wrap(`
            <svg class="v-map" viewBox="0 0 560 380" role="img" aria-label="Project map">
                <path class="m-shape" d="M60 90 L190 40 L330 50 L470 70 L520 150 L470 230 L430 300 L330 340 L210 350 L110 300 L70 210 Z"/>
                ${pins.map((p, i) => `<g class="m-pin m-${p[2]}" style="--i:${i}" transform="translate(${p[0]} ${p[1]})"><circle class="m-pulse" r="6"/><path d="M0 0 C-10 -14 -12 -28 0 -34 C12 -28 10 -14 0 0 Z"/><circle class="m-dot" cy="-24" r="4"/></g>`).join('')}
            </svg>
            <div class="v-legend"><span><i class="lg-e"></i>${T('Education', 'تعلیم', 'Taleem')}</span><span><i class="lg-h"></i>${T('Health', 'صحت', 'Sehat')}</span><span><i class="lg-w"></i>${T('Water', 'پانی', 'Pani')}</span><span><i class="lg-r"></i>${T('Roads', 'سڑکیں', 'Sarkein')}</span></div>`, '',
            ['Illustrative map: GIS puts projects on a map for planning and monitoring', 'مثالی نقشہ: GIS منصوبوں کو نقشے پر دکھاتا ہے', 'Misaali naqsha: GIS mansoobon ko naqshay par dikhata hai']);
    }

    // ---------- registry ----------
    const V = {
        '1.1': () => hub(['🏛️', ['BSDI / PIU', 'BSDI / PIU', 'BSDI / PIU']], [
            ['🏫', ['Education', 'تعلیم', 'Taleem']], ['🏥', ['Healthcare', 'صحت', 'Sehat']], ['💧', ['Clean water', 'صاف پانی', 'Saaf pani']],
            ['🛣️', ['Roads & buildings', 'سڑکیں اور عمارتیں', 'Sarkein aur imaratein']], ['🤝', ['Community', 'کمیونٹی', 'Community']], ['📈', ['Monitoring', 'نگرانی', 'Nigrani']]
        ]),
        '1.2': () => stats([
            { n: 2, pad: 2, l: ['Vacancies for this post', 'اس آسامی کی نشستیں', 'Is asami ki nishastein'] },
            { v: 'BPS-06', l: ['Pay scale', 'پے اسکیل', 'Pay scale'] },
            { n: 1, l: ['Year contract (extendable)', 'سال کا کنٹریکٹ (قابلِ توسیع)', 'Saal ka contract (qabil-e-tawseeh)'] },
            { v: '23 – 37', l: ['Age range', 'عمر کی حد', 'Umar ki had'] },
            { v: 'Quetta', l: ['Duty station', 'مقامِ تعیناتی', 'Maqam-e-tainaati'] },
            { v: 'Domicile', l: ['Balochistan only', 'صرف بلوچستان', 'Sirf Balochistan'] }
        ]),
        '1.3': () => hub(['💻', ['IT Developer', 'آئی ٹی ڈویلپر', 'IT Developer']], [
            ['🌐', ['Website', 'ویب سائٹ', 'Website']], ['📊', ['MIS', 'MIS', 'MIS']], ['🗄️', ['Data', 'ڈیٹا', 'Data']], ['📈', ['Dashboards', 'ڈیش بورڈ', 'Dashboards']],
            ['🖨️', ['IT support', 'آئی ٹی سپورٹ', 'IT support']], ['🔐', ['Security', 'سیکیورٹی', 'Security']], ['🎓', ['Training', 'تربیت', 'Tarbiyat']]
        ]),
        '1.4': () => checklist([
            ['Venue: ad says 19A, website says 13-C. Confirm!', 'مقام: اشتہار میں 19A، ویب سائٹ پر 13-C۔ تصدیق کریں!', 'Maqam: ishtihar mein 19A, website par 13-C. Tasdeeq karein!'],
            ['Email: use the one on your call letter', 'ای میل: کال لیٹر والی استعمال کریں', 'Email: call letter wali istemal karein'],
            ['Originals + attested copies in one file', 'اصل اور تصدیق شدہ نقول ایک فائل میں', 'Asal aur tasdeeq shuda naqalein aik file mein'],
            ['2 passport photos, CNIC, domicile, degrees', '2 تصاویر، CNIC، ڈومیسائل، ڈگریاں', '2 tasaweer, CNIC, domicile, degrees'],
            ['No TA/DA: plan transport, arrive 30 min early', 'TA/DA نہیں: ٹرانسپورٹ طے کریں، 30 منٹ پہلے پہنچیں', 'TA/DA nahi: transport tay karein, 30 minute pehlay pohanchein']
        ]),
        '2.1': () => flow([
            ['🎓', ['Present: who you are', 'حال: آپ کون ہیں', 'Haal: aap kaun hain']],
            ['🛠️', ['Past: skills & projects', 'ماضی: مہارت اور پراجیکٹس', 'Maazi: maharat aur projects']],
            ['🚀', ['Future: why BSDI', 'مستقبل: BSDI کیوں', 'Mustaqbil: BSDI kyun']]
        ], ['Keep it to 60 to 90 seconds', '60 تا 90 سیکنڈ رکھیں', '60 ta 90 second rakhein']),
        '2.3': () => flow([
            ['🧩', ['Skills match the role', 'مہارت کردار کے مطابق', 'Maharat kirdar ke mutabiq']],
            ['📍', ['Local knowledge', 'مقامی سمجھ', 'Maqami samajh']],
            ['🤝', ['Reliable and always learning', 'قابلِ اعتماد اور سیکھنے والا', 'Qabil-e-aitmaad aur seekhnay wala']]
        ]),
        '2.6': () => flow([
            ['📋', ['Prioritize', 'ترجیح طے کریں', 'Tarjeeh tay karein']],
            ['🧱', ['Break into steps', 'مراحل میں بانٹیں', 'Marahil mein bantein']],
            ['💬', ['Communicate early', 'جلد اطلاع دیں', 'Jald itlaa dein']],
            ['🧘', ['Stay calm, solve', 'پرسکون رہ کر حل کریں', 'Pursukoon reh kar hal karein']]
        ]),
        '2.9': () => checklist([
            ['Clean formal dress', 'صاف رسمی لباس', 'Saaf rasmi libas'],
            ['Greet with Assalam-o-Alaikum, sit when invited', 'سلام کریں، کہنے پر بیٹھیں', 'Salam karein, kehnay par baithein'],
            ['Eye contact with the whole panel', 'پورے پینل سے نظر ملائیں', 'Poray panel se nazar milayen'],
            ['Listen fully, pause, then answer', 'پورا سنیں، وقفہ، پھر جواب', 'Poora sunein, waqfa, phir jawab'],
            ['Be honest: never bluff', 'ایماندار رہیں: بناوٹ نہیں', 'Imandar rahein: banawat nahi'],
            ['Phone silent, documents ready', 'موبائل خاموش، دستاویزات تیار', 'Mobile khamosh, dastawezat tayyar'],
            ['Thank the panel', 'پینل کا شکریہ', 'Panel ka shukriya']
        ]),
        '3.1': compileVsInterpret,
        '3.2': () => cards([
            ['🔒', ['Encapsulation'], ['Hide data, expose methods', 'ڈیٹا چھپائیں، میتھڈز دیں', 'Data chhupayen, methods dein']],
            ['🎭', ['Abstraction'], ['Show only what is needed', 'صرف ضروری دکھائیں', 'Sirf zaroori dikhayen']],
            ['🧬', ['Inheritance'], ['Child reuses parent', 'چائلڈ، پیرنٹ سے لے', 'Child, parent se leta hai']],
            ['🔀', ['Polymorphism'], ['One name, many forms', 'ایک نام، کئی روپ', 'Aik naam, kai roop']]
        ]),
        '3.3': binarySearch,
        '3.4': stackQueue,
        '3.5': waterAgile,
        '3.6': gitGraph,
        '3.7': () => flow([
            ['🐞', ['Reproduce the bug', 'خرابی دوبارہ پیدا کریں', 'Kharabi dobara paida karein']],
            ['📖', ['Read the error', 'error پڑھیں', 'Error parhein']],
            ['🔎', ['Isolate the cause', 'وجہ الگ کریں', 'Wajah alag karein']],
            ['🔧', ['Fix it', 'درست کریں', 'Durust karein']],
            ['✅', ['Test again', 'دوبارہ ٹیسٹ کریں', 'Dobara test karein']]
        ]),
        '4.1': () => flow([
            ['👤', ['App / User', 'ایپ / صارف', 'App / User']],
            ['🧠', ['DBMS (the manager)', 'DBMS (منتظم)', 'DBMS (muntazim)']],
            ['🗄️', ['Database (tables)', 'ڈیٹا بیس (ٹیبلز)', 'Database (tables)']]
        ]),
        '4.2': erDiagram,
        '4.3': sqlPlayground,
        '4.4': joins,
        '4.5': dropDemo,
        '4.6': backup321,
        '5.1': htmlCssJs,
        '5.2': responsive,
        '5.3': requestFlow,
        '5.4': getPost,
        '5.6': () => flow([
            ['💻', ['You type piu-bsdi.org', 'آپ ڈومین لکھتے ہیں', 'Aap domain likhtay hain']],
            ['📖', ['DNS finds the IP', 'DNS IP ڈھونڈتا ہے', 'DNS IP dhoondta hai']],
            ['🔢', ['IP address returned', 'IP address ملتا ہے', 'IP address milta hai']],
            ['🖥️', ['Server sends the page', 'سرور پیج بھیجتا ہے', 'Server page bhejta hai']],
            ['🔒', ['HTTPS keeps it private', 'HTTPS اسے محفوظ رکھتا ہے', 'HTTPS isay mehfooz rakhta hai']]
        ]),
        '6.1': topology,
        '6.2': topology,
        '6.3': () => flow([
            ['👥', ['One device or all?', 'ایک ڈیوائس یا سب؟', 'Aik device ya sab?']],
            ['🔌', ['Check cable / Wi-Fi', 'کیبل / Wi-Fi دیکھیں', 'Cable / Wi-Fi dekhein']],
            ['⌨️', ['ipconfig: got an IP?', 'ipconfig: IP ملا؟', 'ipconfig: IP mila?']],
            ['📡', ['ping 8.8.8.8, then google.com', 'ping 8.8.8.8 پھر google.com', 'ping 8.8.8.8 phir google.com']],
            ['☎️', ['Restart router / call ISP', 'راؤٹر ری اسٹارٹ / ISP', 'Router restart / ISP']]
        ]),
        '7.1': () => cards([
            ['🎣', ['Phishing'], ['Fake emails steal passwords', 'جعلی ای میل پاس ورڈ چراتی ہے', 'Jaali email password churati hai']],
            ['🦠', ['Malware'], ['Harmful software / ransomware', 'نقصان دہ سافٹ ویئر', 'Nuqsan deh software']],
            ['💉', ['SQL Injection'], ['Malicious SQL in input fields', 'ان پٹ میں نقصان دہ SQL', 'Input mein nuqsan deh SQL']],
            ['📜', ['XSS'], ['Malicious script in a page', 'پیج میں نقصان دہ اسکرپٹ', 'Page mein nuqsan deh script']]
        ]),
        '7.2': layers,
        '7.3': () => cards([
            ['🔐', ['Confidentiality', 'رازداری', 'Razdari'], ['Only authorized people see data', 'صرف مجاز لوگ ڈیٹا دیکھیں', 'Sirf mujaz log data dekhein']],
            ['✍️', ['Integrity', 'درستی', 'Durusti'], ['Data stays correct and unaltered', 'ڈیٹا درست اور غیر تبدیل شدہ', 'Data durust aur ghair tabdeel shuda']],
            ['⚡', ['Availability', 'دستیابی', 'Dastiyabi'], ['Systems work when needed', 'ضرورت پر سسٹم چلتا رہے', 'Zaroorat par system chalta rahay']]
        ]),
        '7.4': () => cards([
            ['🪪', ['NADRA'], ['CNIC and national database', 'شناختی کارڈ اور قومی ڈیٹا بیس', 'Shanakhti card aur qaumi database']],
            ['📑', ['PPRA / EPADS'], ['Transparent procurement', 'شفاف سرکاری خریداری', 'Shaffaf sarkari kharidari']],
            ['📱', ['Citizen Portal'], ['Citizen complaints', 'شہریوں کی شکایات', 'Shehriyon ki shikayaat']],
            ['📡', ['PTA / NITB'], ['Telecom and federal IT', 'ٹیلی کام اور وفاقی آئی ٹی', 'Telecom aur wafaqi IT']]
        ]),
        '8.1': () => flow([
            ['📝', ['Field data entry', 'فیلڈ ڈیٹا اندراج', 'Field data indraaj']],
            ['🗄️', ['Central database', 'مرکزی ڈیٹا بیس', 'Markazi database']],
            ['📊', ['Dashboard and reports', 'ڈیش بورڈ اور رپورٹس', 'Dashboard aur reports']],
            ['🎯', ['Decisions and monitoring', 'فیصلے اور نگرانی', 'Faislay aur nigrani']]
        ]),
        '8.3': pinsMap,
        '8.4': dashboard,
        '9.1': () => flow([
            ['🔍', ['Confirm the problem', 'مسئلے کی تصدیق', 'Masle ki tasdeeq']],
            ['🕵️', ['Find the cause', 'وجہ ڈھونڈیں', 'Wajah dhoondein']],
            ['♻️', ['Restore from backup', 'بیک اپ سے بحال کریں', 'Backup se bahal karein']],
            ['📣', ['Inform the Coordinator', 'کوآرڈینیٹر کو بتائیں', 'Coordinator ko batayen']],
            ['🛡️', ['Prevent next time', 'آئندہ سے بچاؤ', 'Aainda se bachao']]
        ])
    };

    const UACP = () => flow([
        ['🧠', ['Understand', 'سمجھیں', 'Samjhein']],
        ['⚡', ['Act', 'عمل کریں', 'Amal karein']],
        ['💬', ['Communicate', 'اطلاع دیں', 'Itlaa dein']],
        ['🛡️', ['Prevent', 'آئندہ روکیں', 'Aainda rokein']]
    ], ['The 4-step pattern for every scenario answer', 'ہر صورتحال کے جواب کا 4 قدمی نمونہ', 'Har soorat-e-haal ke jawab ka 4 qadmi namoona']);
    V['9.2'] = V['9.4'] = V['9.5'] = V['9.6'] = UACP;
    V['9.3'] = () => flow([
        ['🚫', ['Decline politely', 'شائستگی سے انکار', 'Shaistagi se inkar']],
        ['📜', ['Explain the policy', 'پالیسی بتائیں', 'Policy batayen']],
        ['🔑', ['Ask for an approved limited account', 'منظور شدہ محدود اکاؤنٹ مانگیں', 'Manzoor shuda mehdood account mangein']]
    ]);

    // ---------- interactions ----------
    function runCounters(root) {
        root.querySelectorAll('.v-count').forEach(el => {
            const target = Number(el.dataset.n), pad = Number(el.dataset.pad || 0);
            const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            const show = v => { el.textContent = String(v).padStart(pad, '0'); };
            if (reduce) { show(target); return; }
            const start = performance.now() + 250, dur = 1200;
            show(0);
            const tick = now => {
                const p = Math.min(Math.max((now - start) / dur, 0), 1);
                show(Math.round(target * (1 - Math.pow(1 - p, 3))));
                if (p < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
        });
    }

    window.ITViz = {
        has: key => !!V[key],
        build: key => (V[key] ? V[key]() : ''),

        // called when a question is opened
        onOpen(item) {
            const viz = item.querySelector('.viz');
            if (viz) runCounters(viz);
        },

        // restart all animations of one visual by swapping in a fresh clone
        replay(btn) {
            const viz = btn.closest('.viz');
            const fresh = viz.cloneNode(true);
            viz.parentNode.replaceChild(fresh, viz);
            runCounters(fresh);
        },

        sq(btn, op) {
            const panel = btn.closest('.v-panel');
            const slot = panel.querySelector('.v-slot');
            const kind = panel.dataset.kind;
            const items = slot.querySelectorAll('.v-blk:not(.out)');
            if (op === 'in') {
                if (items.length >= 6) return;
                const n = Number(panel.dataset.next);
                panel.dataset.next = n + 1;
                const b = document.createElement('div');
                b.className = 'v-blk drop';
                b.textContent = n;
                slot.appendChild(b);
            } else if (items.length) {
                const target = kind === 'stack' ? items[items.length - 1] : items[0];
                target.classList.add('out');
                setTimeout(() => target.remove(), 380);
            }
        },

        bs(btn, op) {
            const box = btn.closest('.v-bs');
            const cells = [...box.querySelectorAll('.v-bs-cell')];
            const status = box.querySelector('.v-bs-status');
            const target = 58;
            if (op === 'reset') {
                box.dataset.lo = 0; box.dataset.hi = cells.length - 1; box.dataset.steps = 0; box.dataset.done = 0;
                cells.forEach(c => c.className = 'v-bs-cell');
                status.textContent = 'Press "Next step"';
                return;
            }
            if (box.dataset.done === '1') return;
            let lo = Number(box.dataset.lo), hi = Number(box.dataset.hi);
            const mid = Math.floor((lo + hi) / 2);
            const steps = Number(box.dataset.steps) + 1;
            cells.forEach((c, i) => {
                c.className = 'v-bs-cell' + (i < lo || i > hi ? ' dim' : '') + (i === mid ? ' mid' : '');
            });
            const v = cells[mid].dataset.v;
            if (Number(v) === target) {
                cells[mid].classList.add('found');
                status.textContent = `Step ${steps}: mid = ${v}. Found ${target}! (a linear search would need 8 steps)`;
                box.dataset.done = 1;
            } else if (Number(v) < target) {
                status.textContent = `Step ${steps}: mid = ${v} is smaller than ${target}, so search the right half`;
                lo = mid + 1;
            } else {
                status.textContent = `Step ${steps}: mid = ${v} is bigger than ${target}, so search the left half`;
                hi = mid - 1;
            }
            box.dataset.lo = lo; box.dataset.hi = hi; box.dataset.steps = steps;
        },

        join(btn, mode) {
            const box = btn.closest('.v-join');
            box.dataset.mode = mode;
            box.querySelectorAll('.v-tabs button').forEach(b => b.classList.toggle('on', b === btn));
            box.querySelector('.v-sql b').textContent = mode.toUpperCase() + ' JOIN';
        },

        sql(btn, op) {
            const box = btn.closest('.v-sql-play');
            const out = box.querySelector('.v-sql-out');
            const code = box.querySelector('.v-sql');
            let rows = SQL_ROWS.map(r => Object.assign({}, r));
            if (op === 'where') {
                rows.forEach(r => { r.dim = r.district !== 'Quetta'; });
                code.textContent = "SELECT * FROM Projects WHERE district = 'Quetta';";
                out.innerHTML = sqlTable(rows);
            } else if (op === 'order') {
                rows = rows.sort((a, b) => b.budget - a.budget).slice(0, 3);
                code.textContent = 'SELECT * FROM Projects ORDER BY budget DESC LIMIT 3;';
                out.innerHTML = sqlTable(rows, 'fresh');
            } else if (op === 'group') {
                const g = {};
                rows.forEach(r => { g[r.district] = (g[r.district] || 0) + 1; });
                code.textContent = 'SELECT district, COUNT(*) AS total FROM Projects GROUP BY district;';
                out.innerHTML = `<table class="v-table fresh"><thead><tr><th>district</th><th>total</th><th></th></tr></thead><tbody>${Object.keys(g).map((k, i) => `<tr style="--i:${i}"><td>${k}</td><td>${g[k]}</td><td><div class="v-gbar"><i style="--w:${g[k] * 30}%"></i></div></td></tr>`).join('')}</tbody></table>`;
            } else {
                code.textContent = 'SELECT * FROM Projects;';
                out.innerHTML = sqlTable(rows);
            }
        },

        dt(btn, state) {
            const box = btn.closest('.v-dt');
            box.dataset.state = state;
        }
    };
})();
