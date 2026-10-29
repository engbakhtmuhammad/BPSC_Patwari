// Job Interview Preparation - Assistant IT Developer (BPS-06), BSDI / PIU, Government of Balochistan
document.addEventListener('DOMContentLoaded', function() {
    const itContent = document.getElementById('it-interview-content');
    const I = window.IT_I18N;
    const STORE_DONE = 'bpscItDone';
    const STORE_LANG = 'bpscItLang';
    const counts = {};

    // One piece of text in three languages; CSS shows the one matching #it-interview[data-lang]
    const tri = (en, ur, rm, tag) => {
        tag = tag || 'span';
        return `<${tag} class="l-en">${en}</${tag}><${tag} class="l-ur" lang="ur" dir="rtl">${ur || en}</${tag}><${tag} class="l-rm">${rm || en}</${tag}>`;
    };
    const stripPrefix = (t, re) => t.replace(re, '');

    function qa(key, q, a) {
        const u = I.ur[key] || {}, r = I.rm[key] || {};
        const n = key.split('.')[0];
        counts[n] = (counts[n] || 0) + 1;
        return `
            <div class="qa-item" data-key="${key}">
                <div class="qa-question">${tri(q, u.q, r.q)}</div>
                <div class="qa-answer">${window.ITViz ? ITViz.build(key) : ''}${tri(a, u.a, r.a, 'div')}</div>
            </div>
        `;
    }

    function sec(n, icon, title, desc, items) {
        const u = I.ur['sec' + n] || {}, r = I.rm['sec' + n] || {};
        return `
            <div class="topic-section" id="it-sec-${n}">
                <h3><span class="topic-icon">${icon}</span><span class="topic-title">${tri(title, u.t, r.t)}</span></h3>
                <div class="topic-description">${tri(desc, u.d, r.d)}</div>
                ${items}
            </div>
        `;
    }

    const sectionsHtml = `
        ${sec(1, '🏛️', 'Section 1: Know the Organization and the Post',
            'Interviewers love candidates who have done their homework. Memorize this section first.',
            `
            ${qa('1.1', 'Q1. What is BSDI and what does the PIU do?', `
                <p><strong>BSDI = Balochistan Special Development Initiative.</strong> A development programme of the Government of Balochistan, run by the <strong>Program Implementation Unit (PIU)</strong> under the Planning & Development Department.</p>
                <ul>
                    <li><strong>Focus areas:</strong> education (schools), healthcare (facilities), clean water supply, roads/bridges/public buildings, community development</li>
                    <li><strong>PIU role:</strong> the executing arm. Project planning and resource allocation, contractor selection and management, quality assurance and monitoring, financial management and reporting, stakeholder coordination</li>
                    <li><strong>Reach:</strong> all districts of Balochistan (the website says 35) and 949 projects initiated, according to the website</li>
                    <li><strong>Values:</strong> transparent governance, community engagement, quality assurance, sustainable development</li>
                    <li><strong>Office:</strong> Chaman Housing Scheme, Quetta</li>
                </ul>
                <div class="highlight-box">
                    <p><strong>💡 How to use it:</strong> Link your IT skills to their mission, e.g. "A programme with 949 projects across many districts needs a reliable system to track progress, contractors and payments. That is where I can add value."</p>
                </div>
            `)}

            ${qa('1.2', 'Q2. What are the facts of the job advertisement I must know?', `
                <table class="comparison-table">
                    <tr><th>Item</th><th>Detail</th></tr>
                    <tr><td>Post</td><td>Assistant IT Developer</td></tr>
                    <tr><td>Pay scale</td><td>BPS-06</td></tr>
                    <tr><td>Vacancies</td><td>02 for this post (09 in total across 6 posts)</td></tr>
                    <tr><td>Type</td><td>Contract, initial 1 year, extendable on performance and programme policy</td></tr>
                    <tr><td>Location</td><td>Quetta</td></tr>
                    <tr><td>Eligibility</td><td>Balochistan local/domicile holders only</td></tr>
                    <tr><td>Age range</td><td>23 to 37 years (professional posts)</td></tr>
                    <tr><td>Reference</td><td>AB No. 3852 / 1-10-2026</td></tr>
                    <tr><td>Interview</td><td>Shortlisted candidates only, no TA/DA</td></tr>
                </table>
            `)}

            ${qa('1.3', 'Q3. What will an Assistant IT Developer realistically do in a PIU?', `
                <p><strong>Note:</strong> the advertisement does not list duties. The list below is an informed expectation based on what a project implementation unit needs. Say "I understand the role would involve..." rather than claiming certainty.</p>
                <ol>
                    <li><strong>Maintain and update the BSDI website</strong> (news, jobs, gallery, project pages, tenders)</li>
                    <li><strong>Build or maintain a project monitoring system</strong> (MIS): project status, progress %, budget released/spent, district-wise reports, photos</li>
                    <li><strong>Data management:</strong> databases, Excel/CSV reports, data cleaning, backups</li>
                    <li><strong>Dashboards and reports</strong> for the Program Coordinator and the P&D Department</li>
                    <li><strong>Office IT support:</strong> computers, printers, LAN/Wi-Fi, email, user accounts, antivirus</li>
                    <li><strong>Security:</strong> passwords, backups, access control, protecting sensitive project/financial data</li>
                    <li><strong>Digital communication:</strong> official email, social media support, online application/complaint forms</li>
                    <li><strong>Documentation:</strong> user manuals, system documentation, training of office staff</li>
                </ol>
            `)}

            ${qa('1.4', 'Q4. Heads-up: things to double-check before the interview', `
                <ul>
                    <li><strong>Address mismatch:</strong> the advertisement gives Bungalow # 19A, Chaman Housing Scheme, while the website footer gives Bungalow # 13-C, 31 Survey, Chaman Housing Scheme. Confirm the interview venue from your call letter or by phoning 081-4245963.</li>
                    <li><strong>Email mismatch:</strong> the advertisement uses piubsdi@gmail.com; the website shows support@piu-bsdi.org. Use the one on your call letter.</li>
                    <li><strong>Documents:</strong> originals plus attested copies of CNIC, domicile, degrees, experience certificates, and 2 passport photos. Keep them in one file in this order.</li>
                    <li><strong>Reach early:</strong> no TA/DA, so plan transport. Arrive 30 minutes before time.</li>
                </ul>
            `)}
            `)}

        ${sec(2, '🧭', 'Section 2: Interview Strategy and HR Questions',
            'In government contract interviews, panels check four things: relevant skills, honesty, attitude, and local suitability. HR answers matter as much as technical ones.',
            `
            ${qa('2.1', 'Q1. Tell me about yourself. (Almost always the first question)', `
                <p><strong>Use the Present, Past, Future formula, 60 to 90 seconds:</strong></p>
                <div class="example-box">
                    <h4>Model Answer</h4>
                    <p>"Assalam-o-Alaikum. My name is ____. I hold a ____ in Computer Science/IT from ____ and I am from district ____, Balochistan. I have skills in web development, databases and basic networking, and I have built projects such as ____ (name one, say what it did). I also have ____ months of experience/internship at ____. I am applying because BSDI works on education, health and water projects across Balochistan, and I want to use my IT skills to make that work more transparent and better tracked. I am a quick learner, punctual, and comfortable working in a team."</p>
                </div>
                <p><strong>Tip:</strong> Replace the blanks with real facts. Do not memorize word for word; memorize the structure.</p>
            `)}

            ${qa('2.2', 'Q2. Why do you want to join BSDI / PIU?', `
                <ul>
                    <li>I want to serve my own province, and BSDI's work is directly visible in schools, clinics and water schemes.</li>
                    <li>A development programme with hundreds of projects needs strong digital tracking. That fits my skills.</li>
                    <li>A government project gives me real experience with large-scale data and reporting.</li>
                    <li>I want to grow here and contribute, not just pass through.</li>
                </ul>
                <div class="highlight-box"><p><strong>Avoid:</strong> "I need a job" or "salary is good". Be honest but mission-focused.</p></div>
            `)}

            ${qa('2.3', 'Q3. Why should we hire you and not another candidate?', `
                <p>"I match the requirement in three ways: first, technical skills that fit this role (web, database, support); second, I am a local candidate who understands the province's needs and conditions; third, I am dependable: I meet deadlines and keep learning. I can start contributing quickly, and I am ready to be trained on your existing systems."</p>
            `)}

            ${qa('2.4', 'Q4. What are your strengths and weaknesses?', `
                <p><strong>Strengths:</strong> problem solving, quick learning, discipline, teamwork. Give one real example for each.</p>
                <p><strong>Weakness (choose a real but fixable one):</strong></p>
                <div class="example-box">
                    <p>"Earlier I used to spend too long perfecting a small detail. I now set time limits for each task and ask for feedback early, and it has improved my delivery speed."</p>
                </div>
                <p><strong>Never say:</strong> "I have no weakness" or something that disqualifies you for IT work.</p>
            `)}

            ${qa('2.5', 'Q5. You are on a one-year contract. What if it is not renewed?', `
                <p>"I understand the contract terms and I am comfortable with them. My aim is to deliver strong work so that renewal is based on performance. In any case the experience will help my career."</p>
                <p>This shows maturity and that you read the advertisement.</p>
            `)}

            ${qa('2.6', 'Q6. How do you handle pressure and tight deadlines?', `
                <ol>
                    <li>Prioritize tasks by urgency and impact</li>
                    <li>Break the work into small steps</li>
                    <li>Communicate early if something may be delayed</li>
                    <li>Stay calm and focus on solutions</li>
                </ol>
                <p>Add a short real example, such as a final-year project or an urgent office task.</p>
            `)}

            ${qa('2.7', 'Q7. Are you willing to work extra hours, travel to districts, or do non-IT tasks?', `
                <p>In a PIU the honest and best answer is: "Yes. A programme unit works to deadlines and I am ready to support the team wherever required, including field visits when needed."</p>
                <p>Do not promise things you cannot do, but show flexibility.</p>
            `)}

            ${qa('2.8', 'Q8. Do you have questions for us? (Always ask 2)', `
                <ul>
                    <li>"What systems are currently used for project monitoring and reporting, and what would you like improved first?"</li>
                    <li>"What would success look like for this role in the first six months?"</li>
                    <li>"Will there be training on your existing platforms?"</li>
                </ul>
                <p><strong>Do not ask about salary, leave or perks in the first interview.</strong></p>
            `)}

            ${qa('2.9', 'Q9. Interview day etiquette', `
                <ul>
                    <li>Formal clean dress (shalwar kameez or shirt and trousers), tidy appearance</li>
                    <li>Greet with <em>Assalam-o-Alaikum</em>, sit when invited, keep a calm posture</li>
                    <li>Eye contact with the whole panel, not only the chairperson</li>
                    <li>Listen to the full question and take a short pause before answering</li>
                    <li>If you do not know: "I am not sure, but my understanding is... and I would verify and learn it." Never bluff.</li>
                    <li>Answer in the language the panel uses. Simple English or Urdu is fine; clarity beats fancy words.</li>
                    <li>Phone on silent, carry a pen, copies of your CV and documents</li>
                    <li>Thank the panel at the end</li>
                </ul>
            `)}
            `)}

        ${sec(3, '💻', 'Section 3: Programming and Software Fundamentals',
            'The panel will most likely ask basics, with real examples from your own projects. Understand the concept, then give a one-line example.',
            `
            ${qa('3.1', 'Q1. What is the difference between a programming language and a scripting language?', `
                <ul>
                    <li><strong>Compiled languages</strong> (C, C++, Java via bytecode) are translated before running, usually faster.</li>
                    <li><strong>Scripting/interpreted languages</strong> (JavaScript, Python, PHP) are executed line by line at run time, quicker to develop.</li>
                </ul>
                <p>In practice the line is blurry; both are used for real applications.</p>
            `)}

            ${qa('3.2', 'Q2. Explain OOP and its four pillars.', `
                <p><strong>Object-Oriented Programming</strong> organizes code around objects (data plus behaviour).</p>
                <table class="comparison-table">
                    <tr><th>Pillar</th><th>Meaning</th><th>Example</th></tr>
                    <tr><td>Encapsulation</td><td>Hide data, expose through methods</td><td>Private balance field with deposit() method</td></tr>
                    <tr><td>Abstraction</td><td>Show only what is necessary</td><td>You use a car's steering without knowing the engine</td></tr>
                    <tr><td>Inheritance</td><td>Child class reuses parent class</td><td>Student and Teacher inherit from Person</td></tr>
                    <tr><td>Polymorphism</td><td>Same method name, different behaviour</td><td>area() for Circle vs Rectangle</td></tr>
                </table>
            `)}

            ${qa('3.3', 'Q3. What is an algorithm and a flowchart? What is Big-O in simple words?', `
                <ul>
                    <li><strong>Algorithm:</strong> a step-by-step procedure to solve a problem</li>
                    <li><strong>Flowchart:</strong> a diagram of an algorithm using symbols</li>
                    <li><strong>Big-O:</strong> a way to describe how running time grows as input grows. Searching a list one by one is O(n); binary search on a sorted list is O(log n).</li>
                </ul>
            `)}

            ${qa('3.4', 'Q4. Array vs Linked List, Stack vs Queue?', `
                <ul>
                    <li><strong>Array:</strong> fixed size, fast access by index, slow insertion in the middle</li>
                    <li><strong>Linked list:</strong> flexible size, fast insertion/deletion, slow random access</li>
                    <li><strong>Stack:</strong> LIFO (Last In, First Out), e.g. undo button</li>
                    <li><strong>Queue:</strong> FIFO (First In, First Out), e.g. print queue</li>
                </ul>
            `)}

            ${qa('3.5', 'Q5. What are SDLC and its common models?', `
                <p><strong>Software Development Life Cycle:</strong> Requirement analysis, Design, Development, Testing, Deployment, Maintenance.</p>
                <ul>
                    <li><strong>Waterfall:</strong> phases in sequence; good when requirements are fixed</li>
                    <li><strong>Agile:</strong> small iterations with frequent feedback; good when requirements change</li>
                    <li><strong>Prototype:</strong> build a quick sample first for user feedback</li>
                </ul>
                <div class="highlight-box"><p>For a government unit with fixed rules and changing reports, a simple Agile approach (small, frequent deliveries) is a sensible answer.</p></div>
            `)}

            ${qa('3.6', 'Q6. What is Git and why use it?', `
                <p><strong>Git</strong> is a version control system: it records the history of code changes, supports teamwork, and lets you roll back mistakes.</p>
                <ul>
                    <li><code>git init</code>, <code>git add</code>, <code>git commit</code>: start tracking and save changes</li>
                    <li><code>git branch</code>, <code>git merge</code>: work on features separately</li>
                    <li><code>git push</code>, <code>git pull</code>: sync with a remote such as GitHub</li>
                </ul>
            `)}

            ${qa('3.7', 'Q7. How do you test and debug software?', `
                <ul>
                    <li><strong>Reproduce</strong> the bug, then read the error message carefully</li>
                    <li>Use the browser console, logs, or a debugger; check the recent change</li>
                    <li>Isolate: find the smallest case that fails</li>
                    <li><strong>Testing types:</strong> unit, integration, system, and user acceptance testing (UAT)</li>
                    <li>Test with invalid inputs too, not just the normal path</li>
                </ul>
            `)}
            `)}

        ${sec(4, '🗄️', 'Section 4: Databases and SQL',
            'Since the PIU manages project, contractor and finance data, database questions are very likely.',
            `
            ${qa('4.1', 'Q1. What is a database, DBMS and RDBMS?', `
                <ul>
                    <li><strong>Database:</strong> organized collection of data</li>
                    <li><strong>DBMS:</strong> software to create and manage databases</li>
                    <li><strong>RDBMS:</strong> stores data in related tables (rows and columns). Examples: MySQL, PostgreSQL, SQL Server, Oracle.</li>
                </ul>
            `)}

            ${qa('4.2', 'Q2. Explain Primary Key, Foreign Key and Normalization.', `
                <ul>
                    <li><strong>Primary key:</strong> uniquely identifies each row (e.g. ProjectID). Cannot be NULL or duplicate.</li>
                    <li><strong>Foreign key:</strong> a column that refers to the primary key of another table (e.g. ContractorID in the Projects table)</li>
                    <li><strong>Normalization:</strong> organizing tables to reduce duplicate data and anomalies (1NF, 2NF, 3NF)</li>
                </ul>
                <div class="example-box">
                    <h4>BSDI-style example</h4>
                    <p>Tables: <code>Districts</code>, <code>Projects</code>, <code>Contractors</code>, <code>Payments</code>. A project belongs to one district and one contractor; a project can have many payments.</p>
                </div>
            `)}

            ${qa('4.3', 'Q3. Write basic SQL queries (very likely practical question).', `
                <div class="formula-box">
                    <p><code>SELECT * FROM Projects WHERE District = 'Quetta';</code></p>
                    <p><code>SELECT District, COUNT(*) AS Total FROM Projects GROUP BY District;</code></p>
                    <p><code>SELECT p.Name, c.Name FROM Projects p JOIN Contractors c ON p.ContractorID = c.ID;</code></p>
                    <p><code>INSERT INTO Contractors (Name, Phone) VALUES ('ABC', '0300...');</code></p>
                    <p><code>UPDATE Projects SET Status = 'Completed' WHERE ID = 15;</code></p>
                    <p><code>DELETE FROM Projects WHERE ID = 15;</code></p>
                    <p><code>SELECT * FROM Projects ORDER BY Budget DESC LIMIT 5;</code></p>
                </div>
                <p><strong>Always remember the WHERE clause on UPDATE and DELETE.</strong> Without it, every row changes.</p>
            `)}

            ${qa('4.4', 'Q4. Types of SQL joins and SQL command groups?', `
                <ul>
                    <li><strong>INNER JOIN:</strong> only matching rows from both tables</li>
                    <li><strong>LEFT JOIN:</strong> all rows from the left table plus matches from the right</li>
                    <li><strong>RIGHT JOIN / FULL JOIN:</strong> mirror and combined versions</li>
                </ul>
                <p><strong>Command groups:</strong> DDL (CREATE, ALTER, DROP), DML (INSERT, UPDATE, DELETE), DQL (SELECT), DCL (GRANT, REVOKE), TCL (COMMIT, ROLLBACK).</p>
            `)}

            ${qa('4.5', 'Q5. DELETE vs TRUNCATE vs DROP?', `
                <ul>
                    <li><strong>DELETE:</strong> removes selected rows; can use WHERE; can be rolled back in a transaction</li>
                    <li><strong>TRUNCATE:</strong> removes all rows quickly; keeps table structure</li>
                    <li><strong>DROP:</strong> removes the whole table (structure and data)</li>
                </ul>
            `)}

            ${qa('4.6', 'Q6. Why do we take backups, and what is a good backup practice?', `
                <ul>
                    <li>Protects against hardware failure, accidental deletion, ransomware and disasters</li>
                    <li><strong>3-2-1 rule:</strong> 3 copies, on 2 different media, 1 stored off-site</li>
                    <li>Automate backups, and <strong>test restoring</strong> regularly: an untested backup is not a backup</li>
                </ul>
            `)}
            `)}

        ${sec(5, '🌐', 'Section 5: Web Development',
            'The BSDI website itself (Home, About, Team, News, Gallery, Jobs, Contact) is the kind of system you may maintain. Browse it before the interview and think about what you would improve.',
            `
            ${qa('5.1', 'Q1. What are HTML, CSS and JavaScript?', `
                <ul>
                    <li><strong>HTML:</strong> structure of a web page (headings, paragraphs, forms, tables)</li>
                    <li><strong>CSS:</strong> styling and layout (colours, spacing, responsive design)</li>
                    <li><strong>JavaScript:</strong> behaviour and interactivity (validation, dynamic content)</li>
                </ul>
                <p>Analogy: HTML is the skeleton, CSS is the clothes, JavaScript is the movement.</p>
            `)}

            ${qa('5.2', 'Q2. What is responsive design? Why does it matter for this website?', `
                <p>A layout that adapts to any screen size (phone, tablet, desktop), using flexible grids and CSS media queries plus the viewport meta tag.</p>
                <p>Most citizens in Balochistan use mobile phones, so a mobile-friendly site is essential for a public programme.</p>
            `)}

            ${qa('5.3', 'Q3. Frontend vs Backend vs Full-stack? Client vs Server?', `
                <ul>
                    <li><strong>Frontend:</strong> what the user sees in the browser (HTML, CSS, JavaScript, React etc.)</li>
                    <li><strong>Backend:</strong> server logic and database (PHP, Node.js, Python, Java, .NET)</li>
                    <li><strong>Full-stack:</strong> both</li>
                </ul>
                <p>Flow: Browser sends a request, server processes it and talks to the database, and the response comes back as a page or data (JSON).</p>
            `)}

            ${qa('5.4', 'Q4. GET vs POST? What is a REST API?', `
                <ul>
                    <li><strong>GET:</strong> request data, parameters appear in the URL, not for sensitive data</li>
                    <li><strong>POST:</strong> send data in the request body, used for forms and logins</li>
                    <li><strong>REST API:</strong> a way for systems to exchange data over HTTP using URLs and methods (GET, POST, PUT, DELETE), usually returning JSON</li>
                </ul>
            `)}

            ${qa('5.5', 'Q5. What is a CMS? Have you used WordPress?', `
                <p>A <strong>Content Management System</strong> (WordPress, Joomla, Drupal) lets non-technical staff publish news, jobs and photos without coding.</p>
                <p>For an office that posts news, jobs and gallery updates regularly, a CMS is practical. Keep it updated, use strong admin passwords, limit plugins, and take backups.</p>
                <div class="highlight-box"><p>If you do not know the site's technology, say so, and say you would study it first.</p></div>
            `)}

            ${qa('5.6', 'Q6. Domain, hosting, DNS, SSL/HTTPS?', `
                <ul>
                    <li><strong>Domain:</strong> the website's name (e.g. piu-bsdi.org)</li>
                    <li><strong>Hosting:</strong> the server where the website files live</li>
                    <li><strong>DNS:</strong> translates a domain name to an IP address</li>
                    <li><strong>SSL/TLS (HTTPS):</strong> encrypts traffic between browser and server, shown by the padlock; important for trust and for forms</li>
                </ul>
            `)}

            ${qa('5.7', 'Q7. How do you improve website speed and accessibility?', `
                <ul>
                    <li>Compress and resize images (important for galleries), use lazy loading</li>
                    <li>Minify CSS/JS, enable caching, use a CDN where suitable</li>
                    <li>Accessibility: alt text on images, readable contrast, keyboard navigation, clear headings</li>
                </ul>
            `)}
            `)}

        ${sec(6, '🖧', 'Section 6: Networking and IT Support',
            'An Assistant IT Developer in a small government unit is often also the go-to person for office IT problems.',
            `
            ${qa('6.1', 'Q1. What is a network? LAN vs WAN? What is the Internet?', `
                <ul>
                    <li><strong>LAN:</strong> network in a small area such as an office</li>
                    <li><strong>WAN:</strong> network across large areas (cities, countries)</li>
                    <li><strong>Internet:</strong> a global network of networks</li>
                </ul>
            `)}

            ${qa('6.2', 'Q2. IP address, MAC address, DNS, DHCP, router, switch?', `
                <ul>
                    <li><strong>IP address:</strong> logical address of a device on a network</li>
                    <li><strong>MAC address:</strong> physical hardware address of the network card</li>
                    <li><strong>DNS:</strong> converts names to IPs</li>
                    <li><strong>DHCP:</strong> automatically assigns IP addresses</li>
                    <li><strong>Router:</strong> connects different networks (e.g. office to Internet)</li>
                    <li><strong>Switch:</strong> connects devices inside the same network</li>
                </ul>
            `)}

            ${qa('6.3', 'Q3. A user says "the internet is not working". What do you do?', `
                <ol>
                    <li>Check whether only one device or all devices are affected</li>
                    <li>Check cables / Wi-Fi connection; restart the device</li>
                    <li>Run <code>ipconfig</code> to see if an IP address is assigned</li>
                    <li><code>ping 8.8.8.8</code> tests the Internet; <code>ping google.com</code> tests DNS</li>
                    <li>Restart the router/modem; check with the ISP if the problem is outside the office</li>
                </ol>
                <p>This step-by-step approach is what panels want to hear.</p>
            `)}

            ${qa('6.4', 'Q4. A computer is slow or will not start. How do you troubleshoot?', `
                <ul>
                    <li><strong>Slow:</strong> check Task Manager for CPU/RAM/disk use, remove unwanted startup programs, scan for malware, check free disk space, consider RAM/SSD upgrade</li>
                    <li><strong>Not starting:</strong> check power and cables, listen for beeps, check RAM/hard disk connection, try safe mode, reinstall OS only after backing up data</li>
                </ul>
            `)}

            ${qa('6.5', 'Q5. Commonly used commands', `
                <div class="formula-box">
                    <p><code>ipconfig</code> shows IP configuration (Windows); <code>ifconfig</code> / <code>ip a</code> on Linux</p>
                    <p><code>ping</code> tests connectivity; <code>tracert</code> shows the path to a destination</p>
                    <p><code>nslookup</code> checks DNS; <code>netstat</code> shows connections</p>
                </div>
            `)}
            `)}

            ${sec(7, '🔐', 'Section 7: Cyber Security and Government IT Awareness',
            'Government data (finance, contractors, personal data) is a target. Showing security awareness sets you apart.',
            `
            ${qa('7.1', 'Q1. What is cyber security? Name common threats.', `
                <ul>
                    <li><strong>Phishing:</strong> fake emails/messages to steal passwords</li>
                    <li><strong>Malware / Ransomware:</strong> harmful software; ransomware locks files for money</li>
                    <li><strong>SQL Injection:</strong> attacker inserts SQL through input fields. Prevent with prepared statements and validation.</li>
                    <li><strong>XSS:</strong> malicious script injected into web pages. Prevent by escaping output.</li>
                    <li><strong>Weak passwords / insider mistakes</strong></li>
                </ul>
            `)}

            ${qa('7.2', 'Q2. How would you protect an office network and website?', `
                <ul>
                    <li>Strong unique passwords plus two-factor authentication (2FA) for admin accounts</li>
                    <li>Keep OS, antivirus, CMS and plugins updated</li>
                    <li>Role-based access: give each person only the access they need (least privilege)</li>
                    <li>Regular backups, firewall, HTTPS</li>
                    <li>Staff awareness: do not click unknown links or share passwords</li>
                </ul>
            `)}

            ${qa('7.3', 'Q3. Why is confidentiality important in a government job?', `
                <p>Project tenders, payments and personal data must not be leaked. Never share office data on personal accounts or WhatsApp groups without approval, never share passwords, and report any incident immediately. <strong>CIA triad:</strong> Confidentiality, Integrity, Availability.</p>
            `)}

            ${qa('7.4', 'Q4. What is e-governance? Which Pakistani digital services should I know?', `
                <p><strong>E-governance</strong> uses IT to deliver government services more transparently and efficiently.</p>
                <ul>
                    <li><strong>NADRA</strong> (CNIC and national database)</li>
                    <li><strong>PPRA / e-Pak Acquisition & Disposal System (EPADS)</strong> for transparent public procurement</li>
                    <li><strong>Pakistan Citizen Portal</strong> for citizen complaints</li>
                    <li><strong>PTA</strong> regulates telecom; <strong>NITB</strong> works on federal government IT</li>
                </ul>
                <p>Connect it: tender publication, payment tracking and monitoring dashboards support BSDI's stated goal of transparent governance.</p>
            `)}
            `)}

            ${sec(8, '📊', 'Section 8: Project Monitoring, MIS and Office Tools',
            'This is where you stand out: show you understand what a PIU needs, not just coding.',
            `
            ${qa('8.1', 'Q1. What is an MIS and how would you design one for BSDI projects?', `
                <p><strong>Management Information System:</strong> collects data and turns it into reports for decisions.</p>
                <div class="example-box">
                    <h4>Possible design</h4>
                    <ul>
                        <li><strong>Data to capture:</strong> project name, district, sector (education/health/water/roads), budget, contractor, start/end date, % progress, payments, photos</li>
                        <li><strong>Users and roles:</strong> data entry (field/district), reviewer, Program Coordinator (view all), admin</li>
                        <li><strong>Outputs:</strong> dashboard of project count by district and sector, delayed projects, budget vs spent, downloadable PDF/Excel reports</li>
                        <li><strong>Extras:</strong> monthly progress reports, alerts for delayed projects, audit log of who changed what</li>
                    </ul>
                </div>
            `)}

            ${qa('8.2', 'Q2. How do you use Excel for reporting?', `
                <ul>
                    <li><code>SUM</code>, <code>AVERAGE</code>, <code>COUNTIF</code>, <code>SUMIF</code>, <code>VLOOKUP</code> / <code>XLOOKUP</code>, <code>IF</code></li>
                    <li><strong>Pivot tables</strong> to summarize by district or sector; charts for visual reports</li>
                    <li>Data validation, filters, conditional formatting, protecting sheets</li>
                </ul>
                <p>Practice a pivot table on a dummy project list before the interview.</p>
            `)}

            ${qa('8.3', 'Q3. What is GIS and why could it matter for BSDI?', `
                <p><strong>Geographic Information System:</strong> maps data to locations. For a programme with projects across many districts, marking schools, clinics and water schemes on a map helps planning and monitoring. Tools: QGIS (free), ArcGIS, Google Earth/Maps. Even basic knowledge is a plus.</p>
            `)}

            ${qa('8.4', 'Q4. What is a dashboard and what makes a good one?', `
                <ul>
                    <li>Shows key numbers at a glance: totals, progress, budget, delays</li>
                    <li>Few and clear charts, consistent colours, filters by district and date</li>
                    <li>Built for the viewer: the Program Coordinator wants summaries, field staff want detail</li>
                    <li>Tools: Excel, Power BI, Google Looker Studio, or a custom web page</li>
                </ul>
            `)}

            ${qa('8.5', 'Q5. What are cloud computing and AI tools, and how would you use them responsibly?', `
                <ul>
                    <li><strong>Cloud:</strong> using servers and storage over the Internet (Google Drive, Microsoft 365, AWS). Benefits: access anywhere, easy backup. Risks: data location and access control.</li>
                    <li><strong>AI tools:</strong> useful for drafting, coding help and summarizing, but never paste confidential or personal government data into public AI tools without approval, and always verify the output.</li>
                </ul>
            `)}
            `)}

            ${sec(9, '🎯', 'Section 9: Scenario Questions with Model Answers',
            'Scenario questions test judgment. Structure: Understand, Act, Communicate, Prevent.',
            `
            ${qa('9.1', 'S1. The website is down on the day a job advertisement is to be published. What do you do?', `
                <ol>
                    <li>Confirm the problem (check from another network or device)</li>
                    <li>Find the cause: hosting status, domain expiry, recent change, server error logs</li>
                    <li>Restore: roll back the last change or restore from backup; contact the hosting provider if needed</li>
                    <li>Inform the Program Coordinator immediately with an estimated time</li>
                    <li>Prevent: monitoring, regular backups, a documented recovery procedure</li>
                </ol>
            `)}

            ${qa('9.2', 'S2. Your senior asks for a report in two hours, but your work is also urgent. What do you do?', `
                <p>"I would clarify priorities with my senior and explain what I am currently working on. If the report is the higher priority, I would do it first and inform whoever is waiting for the other task. Clear communication prevents surprises."</p>
            `)}

            ${qa('9.3', 'S3. A colleague asks you to share the admin password so he can quickly update the website. What do you do?', `
                <p>"I would not share my personal credentials. I would politely tell him it is against security policy and ask the Program Coordinator to approve a separate account with limited access if he needs one." This shows integrity, a quality government employers value.</p>
            `)}

            ${qa('9.4', 'S4. You find an error in data that has already been sent to the department. What do you do?', `
                <p>Report it honestly and promptly to the supervisor, explain what went wrong and the correct figure, fix the data, and add a check so it does not happen again. Hiding mistakes is worse than the mistake itself.</p>
            `)}

            ${qa('9.5', 'S5. Users find the system hard to use. What do you do?', `
                <p>Ask users where they get stuck, simplify the screens, add short instructions or a user guide, offer a short training session, and collect feedback again. "Good software is software that people actually use."</p>
            `)}

            ${qa('9.6', 'S6. You do not know the technology the office uses. How will you cope?', `
                <p>"I have learned new tools before (give an example). I would study the documentation, ask the team for a walkthrough, practice on a test copy, and become productive quickly. I am honest about what I do not know and quick to learn."</p>
            `)}
            `)}

    `;

    // ---- 7-day timeline ----
    const planHtml = `
        <div class="timeline-wrap">
            <h4 class="tl-title"><i class="fas fa-route"></i> ${tri(I.titles.plan.en, I.titles.plan.ur, I.titles.plan.rm)}</h4>
            <div class="timeline">
                ${I.plan.en.map((d, i) => `
                    <div class="tl-item">
                        <div class="tl-dot">${i + 1}</div>
                        <div class="tl-card">
                            <span class="tl-day">${tri(d[0], I.plan.ur[i][0], I.plan.rm[i][0])}</span>
                            <h5>${tri(d[1], I.plan.ur[i][1], I.plan.rm[i][1])}</h5>
                            <p>${tri(d[2], I.plan.ur[i][2], I.plan.rm[i][2])}</p>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;

    // ---- Recommendations ----
    const tipHtml = (lang, t) => `<strong>${t[0]}</strong> ${t[1]}`;
    const tipsHtml = `
        <div class="resources">
            <h4><i class="fas fa-star"></i> ${tri(I.titles.tips.en, I.titles.tips.ur, I.titles.tips.rm)}</h4>
            <ul>
                ${I.tips.en.map((t, i) => `<li>${tri(tipHtml('en', t), tipHtml('ur', I.tips.ur[i]), tipHtml('rm', I.tips.rm[i]), 'div')}</li>`).join('')}
            </ul>
        </div>
    `;

    // ---- Toolbar, progress and section navigator ----
    const total = Object.values(counts).reduce((a, b) => a + b, 0);
    const secTitles = [1, 2, 3, 4, 5, 6, 7, 8, 9].map(n => {
        const m = sectionsHtml.match(new RegExp("id=\"it-sec-" + n + "\"[\\s\\S]*?topic-icon\">([^<]*)<"));
        return { n, icon: m ? m[1] : '' };
    });
    const enTitles = {};
    (sectionsHtml.match(/class="l-en">Section \d+: [^<]*/g) || []).forEach(t => {
        const mm = t.match(/Section (\d+): (.*)/);
        if (mm) enTitles[mm[1]] = mm[2];
    });

    const toolbarHtml = `
        <div class="it-toolbar">
            <div class="lang-switch" role="tablist" aria-label="Language">
                <span class="lang-label"><i class="fas fa-language"></i></span>
                <button class="lang-btn" data-lang="en" onclick="setInterviewLang('en')">English</button>
                <button class="lang-btn lang-btn-ur" data-lang="ur" onclick="setInterviewLang('ur')">اردو</button>
                <button class="lang-btn" data-lang="rm" onclick="setInterviewLang('rm')">Roman Urdu</button>
            </div>
            <div class="mini-progress" title="Progress">
                <div class="mini-progress-bar"><span id="it-mini-fill"></span></div>
                <b id="it-mini-text">0/${total}</b>
            </div>
        </div>
        <div class="it-overview">
            <div class="progress-card">
                <div class="ring">
                    <svg viewBox="0 0 120 120">
                        <circle class="ring-bg" cx="60" cy="60" r="52"></circle>
                        <circle class="ring-fg" id="it-ring" cx="60" cy="60" r="52"></circle>
                    </svg>
                    <div class="ring-text"><b id="it-ring-pct">0%</b></div>
                </div>
                <div class="progress-info">
                    <h4>${tri('Your Preparation Progress', I.ui.ur.progress, I.ui.rm.progress)}</h4>
                    <p>${tri(`<b class="it-done-count">0</b> / ${total} questions studied`, `<b class="it-done-count">0</b> / ${total} سوالات پڑھ لیے`, `<b class="it-done-count">0</b> / ${total} sawalat parh liye`)}</p>
                    <p class="progress-hint">${tri('Open a question to mark it as studied. Progress is saved in your browser.', 'سوال کھولنے پر وہ پڑھا ہوا شمار ہوتا ہے۔ پیش رفت آپ کے براؤزر میں محفوظ رہتی ہے۔', 'Sawal kholnay par woh parha hua shumar hota hai. Paish raft aap ke browser mein mehfooz rehti hai.')}</p>
                    <button class="reset-btn" onclick="resetInterviewProgress()"><i class="fas fa-rotate-left"></i> ${tri('Reset', I.ui.ur.reset, I.ui.rm.reset)}</button>
                </div>
            </div>
            <div class="nav-cards">
                ${secTitles.map(t => {
                    const u = (I.ur['sec' + t.n] || {}).t, r = (I.rm['sec' + t.n] || {}).t;
                    return `
                    <a class="nav-card" href="#it-sec-${t.n}" onclick="jumpToSection(event, ${t.n})">
                        <span class="nav-card-icon">${t.icon}</span>
                        <span class="nav-card-title">${tri(enTitles[t.n] || '', stripPrefix(u || '', /^حصہ \d+: /), stripPrefix(r || '', /^Hissa \d+: /))}</span>
                        <span class="nav-card-count" data-sec="${t.n}" data-total="${counts[t.n]}">0/${counts[t.n]}</span>
                    </a>`;
                }).join('')}
            </div>
        </div>
    `;

    const itInterviewMCQs = [
        {
            question: "What does BSDI stand for?",
            options: ["Balochistan Social Development Institute", "Balochistan Special Development Initiative", "Balochistan State Development Index", "Balochistan Special Digital Initiative"],
            correct: 1
        },
        {
            question: "The BSDI advertisement offers the Assistant IT Developer post in which pay scale?",
            options: ["BPS-01", "BPS-06", "BPS-11", "BPS-14"],
            correct: 1
        },
        {
            question: "Which of the following best describes the PIU's role?",
            options: ["Judicial body", "Executing arm that plans, coordinates and monitors projects", "Election commission", "Audit court"],
            correct: 1
        },
        {
            question: "Which OOP concept means hiding data and exposing it only through methods?",
            options: ["Inheritance", "Polymorphism", "Encapsulation", "Recursion"],
            correct: 2
        },
        {
            question: "A stack follows which principle?",
            options: ["FIFO", "LIFO", "Random access", "Priority only"],
            correct: 1
        },
        {
            question: "Binary search on a sorted list has time complexity of:",
            options: ["O(n)", "O(n squared)", "O(log n)", "O(1) always"],
            correct: 2
        },
        {
            question: "Which SQL command is used to retrieve data?",
            options: ["INSERT", "SELECT", "UPDATE", "ALTER"],
            correct: 1
        },
        {
            question: "A column that uniquely identifies each row in a table is called:",
            options: ["Foreign key", "Index", "Primary key", "View"],
            correct: 2
        },
        {
            question: "Which statement removes the entire table, including its structure?",
            options: ["DELETE", "TRUNCATE", "DROP", "REMOVE ROWS"],
            correct: 2
        },
        {
            question: "Which JOIN returns only rows with matches in both tables?",
            options: ["LEFT JOIN", "INNER JOIN", "FULL JOIN", "CROSS JOIN"],
            correct: 1
        },
        {
            question: "Which language is mainly used to style a web page?",
            options: ["HTML", "SQL", "CSS", "Python"],
            correct: 2
        },
        {
            question: "Which HTTP method is generally used to send form data such as a login securely in the body?",
            options: ["GET", "POST", "HEAD", "TRACE"],
            correct: 1
        },
        {
            question: "What does HTTPS provide over HTTP?",
            options: ["Faster images", "Encryption of data in transit", "Free hosting", "Automatic backups"],
            correct: 1
        },
        {
            question: "Which service translates a domain name into an IP address?",
            options: ["DHCP", "DNS", "FTP", "SMTP"],
            correct: 1
        },
        {
            question: "Which device connects different networks, such as an office LAN to the Internet?",
            options: ["Switch", "Hub", "Router", "Repeater"],
            correct: 2
        },
        {
            question: "Which command shows the IP configuration of a Windows computer?",
            options: ["ping", "ipconfig", "tracert", "dir"],
            correct: 1
        },
        {
            question: "Which attack inserts malicious SQL through an input field?",
            options: ["Phishing", "SQL injection", "Ransomware", "Spoofing"],
            correct: 1
        },
        {
            question: "In the 3-2-1 backup rule, what does the '1' stand for?",
            options: ["One password", "One off-site copy", "One administrator", "One daily backup"],
            correct: 1
        },
        {
            question: "What do the letters C, I, A stand for in the security CIA triad?",
            options: ["Control, Identity, Access", "Confidentiality, Integrity, Availability", "Cloud, Internet, Application", "Cyber, Intelligence, Authority"],
            correct: 1
        },
        {
            question: "What does the principle of least privilege mean?",
            options: ["Everyone gets admin rights", "Users get only the access they need", "Only the IT person has a password", "No one may log in"],
            correct: 1
        },
        {
            question: "A system that collects data and converts it into reports for managers is called:",
            options: ["MIS", "BIOS", "DNS", "CPU"],
            correct: 0
        },
        {
            question: "Which Excel feature is best for summarizing project data by district?",
            options: ["Pivot table", "Word art", "Spell check", "Page break"],
            correct: 0
        },
        {
            question: "Which SDLC model works in small iterations with frequent feedback?",
            options: ["Waterfall", "Agile", "Big bang", "Spiral only"],
            correct: 1
        },
        {
            question: "Your colleague asks for your admin password to update the website quickly. What is the best response?",
            options: ["Share it this once", "Refuse politely and request a separate approved account", "Write it on a sticky note", "Change it to 123456"],
            correct: 1
        },
        {
            question: "An interviewer asks about a tool you have never used. What is the best answer?",
            options: ["Claim you are an expert", "Say you do not know and stop", "Honestly say you have not used it but explain how you would learn it", "Change the subject"],
            correct: 2
        }
    ];

    itInterviewMCQs.forEach((q, i) => {
        q.question = tri(q.question, I.mcq.ur[i], I.mcq.rm[i]);
    });

    window.itInterviewMCQs = itInterviewMCQs;

    itContent.innerHTML = toolbarHtml + sectionsHtml + planHtml + tipsHtml + createMCQTest('itInterview', itInterviewMCQs);

    // Translate the practice-test heading and info line
    const testHeading = itContent.querySelector('.mcq-test-section h3');
    testHeading.innerHTML = '<i class="fas fa-bullseye"></i> ' + tri(I.titles.testTitle.en, I.titles.testTitle.ur, I.titles.testTitle.rm);
    const testInfo = itContent.querySelector('.test-info p');
    testInfo.innerHTML = tri(`Total Questions: ${itInterviewMCQs.length} | ${I.titles.testInfo.en}`, `کل سوالات: ${itInterviewMCQs.length} | ${I.titles.testInfo.ur}`, `Kul sawalat: ${itInterviewMCQs.length} | ${I.titles.testInfo.rm}`);

    // ---- Language switch ----
    const root = document.getElementById('it-interview');
    window.setInterviewLang = function(lang) {
        root.dataset.lang = lang;
        root.querySelectorAll('.lang-btn').forEach(b => b.classList.toggle('active', b.dataset.lang === lang));
        try { localStorage.setItem(STORE_LANG, lang); } catch (e) {}
    };
    let savedLang = 'en';
    try { savedLang = localStorage.getItem(STORE_LANG) || 'en'; } catch (e) {}
    window.setInterviewLang(savedLang);

    // ---- Study progress (an opened question counts as studied) ----
    let done = new Set();
    try { done = new Set(JSON.parse(localStorage.getItem(STORE_DONE) || '[]')); } catch (e) {}

    function renderProgress() {
        itContent.querySelectorAll('.qa-item').forEach(item => item.classList.toggle('studied', done.has(item.dataset.key)));
        const pct = Math.round((done.size / total) * 100);
        const circ = 2 * Math.PI * 52;
        const ring = document.getElementById('it-ring');
        ring.style.strokeDasharray = circ;
        ring.style.strokeDashoffset = circ * (1 - done.size / total);
        document.getElementById('it-ring-pct').textContent = pct + '%';
        itContent.querySelectorAll('.it-done-count').forEach(el => { el.textContent = done.size; });
        document.getElementById('it-mini-fill').style.width = pct + '%';
        document.getElementById('it-mini-text').textContent = done.size + '/' + total;
        itContent.querySelectorAll('.nav-card-count').forEach(c => {
            const n = c.dataset.sec;
            const d = [...done].filter(k => k.split('.')[0] === n).length;
            c.textContent = d + '/' + c.dataset.total;
            c.closest('.nav-card').classList.toggle('complete', d === Number(c.dataset.total));
        });
    }

    itContent.addEventListener('click', function(e) {
        const q = e.target.closest('.qa-question');
        if (!q) return;
        const item = q.closest('.qa-item');
        if (item && window.ITViz && item.querySelector('.qa-answer.active')) ITViz.onOpen(item);
        if (item && item.dataset.key && !done.has(item.dataset.key)) {
            done.add(item.dataset.key);
            try { localStorage.setItem(STORE_DONE, JSON.stringify([...done])); } catch (err) {}
            renderProgress();
        }
    });

    window.resetInterviewProgress = function() {
        done = new Set();
        try { localStorage.removeItem(STORE_DONE); } catch (e) {}
        renderProgress();
    };

    window.jumpToSection = function(e, n) {
        e.preventDefault();
        const el = document.getElementById('it-sec-' + n);
        const offset = document.querySelector('.header').offsetHeight + document.querySelector('.it-toolbar').offsetHeight + 16;
        window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - offset, behavior: 'smooth' });
    };

    renderProgress();
    reloadQA();
});
