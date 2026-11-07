// IT Assistant, Level 2 Support - Tele-Health Nerve Centre Quetta (5 posts, Rs. 70,000)
// Content in three languages: every text is [English, Urdu, Roman Urdu].
// Technical terms (Active Directory, DHCP, ipconfig...) stay in English, as in a real interview.
document.addEventListener('DOMContentLoaded', function() {
    const K = ITViz.kit;
    const flow = (steps, cap) => () => K.flow(steps, cap);

    // ---------- custom visual: Active Directory tree ----------
    const adTree = () => K.wrap(`
        <div class="v-tree">
            <div class="v-tnode root" style="--i:0">🏢 Domain<small>tele-health.local</small></div>
            <div class="v-tbranch">
                ${[['👩‍⚕️ OU: Doctors', ['Dr. Sara', 'Dr. Ali', 'Laptop-D1']], ['🎧 OU: Call Agents', ['Agent-01', 'Agent-02', 'PC-C14']], ['🛠️ OU: IT Support', ['IT-Admin', 'Helpdesk', 'PC-IT1']]].map((o, i) => `
                    <div class="v-tcol" style="--i:${i + 1}">
                        <div class="v-tnode ou">${o[0]}</div>
                        ${o[1].map(c => `<div class="v-tleaf">${c}</div>`).join('')}
                    </div>`).join('')}
            </div>
            <div class="v-tgpo" style="--i:4">📜 Group Policy (GPO): password rules, screen lock, allowed software</div>
        </div>`, '', ['One directory manages every user, computer and rule', 'ایک ڈائریکٹری ہر صارف، کمپیوٹر اور اصول سنبھالتی ہے', 'Aik directory har user, computer aur usool sambhalti hai']);

    ITViz.register({
        'l2:1.1': () => K.hub(['🏥', ['Nerve Centre', 'نروو سینٹر', 'Nerve Centre']], [
            ['👩‍⚕️', ['Doctors', 'ڈاکٹرز', 'Doctors']], ['🧑', ['Patients', 'مریض', 'Mareez']], ['🎧', ['Call agents', 'کال ایجنٹس', 'Call agents']],
            ['🌐', ['Network', 'نیٹ ورک', 'Network']], ['💻', ['Devices', 'ڈیوائسز', 'Devices']], ['🗄️', ['Servers & apps', 'سرورز اور ایپس', 'Servers aur apps']]
        ], ['IT keeps every link in this chain working', 'آئی ٹی اس زنجیر کی ہر کڑی چلتی رکھتی ہے', 'IT is zanjeer ki har kari chalti rakhti hai']),
        'l2:1.2': () => K.stats([
            { n: 5, l: ['Posts available', 'آسامیاں', 'Asamiyan'] },
            { v: 'Rs. 70,000', l: ['Monthly pay', 'ماہانہ تنخواہ', 'Mahana tankhwah'] },
            { v: 'Level 2', l: ['Support tier', 'سپورٹ سطح', 'Support satah'] },
            { v: "Bachelor's", l: ['IT / CS or equivalent', 'IT / CS یا مساوی', 'IT / CS ya musawi'] },
            { v: 'Quetta', l: ['Location', 'مقام', 'Maqam'] },
            { v: '♀ ✔', l: ['Women encouraged', 'خواتین کی حوصلہ افزائی', 'Khawateen ki hausla afzai'] }
        ]),
        'l2:1.3': flow([
            ['🙋', ['L1: first-line desk (password resets, simple how-to)', 'L1: پہلی لائن (پاس ورڈ ری سیٹ، سادہ رہنمائی)', 'L1: pehli line (password reset, saada rehnumai)']],
            ['🛠️', ['L2: deeper fixes, installs, accounts, network, remote (YOU)', 'L2: گہرے حل، انسٹالیشن، اکاؤنٹس، نیٹ ورک، ریموٹ (آپ)', 'L2: gehray hal, installation, accounts, network, remote (AAP)']],
            ['🧑‍🔧', ['L3: specialists, servers, vendors', 'L3: ماہرین، سرورز، وینڈرز', 'L3: mahireen, servers, vendors']]
        ]),
        'l2:1.4': flow([
            ['📨', ['Ticket or call arrives', 'ٹکٹ یا کال آتی ہے', 'Ticket ya call aati hai']],
            ['🏷️', ['Triage and priority', 'درجہ بندی اور ترجیح', 'Darja bandi aur tarjeeh']],
            ['🔎', ['Diagnose (remote or on-site)', 'تشخیص (ریموٹ یا موقع پر)', 'Tashkhees (remote ya moqay par)']],
            ['🔧', ['Fix or escalate', 'حل کریں یا اوپر بھیجیں', 'Hal karein ya oopar bhejein']],
            ['🤝', ['Confirm with the user', 'صارف سے تصدیق', 'User se tasdeeq']],
            ['📝', ['Document and close', 'ریکارڈ کریں اور بند کریں', 'Record karein aur band karein']]
        ]),
        'l2:2.1': flow([
            ['🎓', ['Education and IT basics', 'تعلیم اور آئی ٹی بنیادیں', 'Taleem aur IT bunyadein']],
            ['🛠️', ['Hands-on support skills', 'عملی سپورٹ مہارتیں', 'Amli support maharatein']],
            ['🧑‍💻', ['Experience / lab projects', 'تجربہ / لیب پراجیکٹس', 'Tajurba / lab projects']],
            ['🏥', ['Why this role', 'یہ کردار کیوں', 'Yeh kirdar kyun']]
        ]),
        'l2:2.3': flow([
            ['👂', ['Listen fully', 'پوری بات سنیں', 'Poori baat sunein']],
            ['💙', ['Empathize', 'ہمدردی دکھائیں', 'Hamdardi dikhayen']],
            ['❓', ['Clarify the problem', 'مسئلہ واضح کریں', 'Masla wazeh karein']],
            ['🔧', ['Fix and explain simply', 'حل کریں اور آسان بتائیں', 'Hal karein aur aasaan batayen']],
            ['📞', ['Follow up', 'دوبارہ رابطہ', 'Dobara rabta']]
        ]),
        'l2:2.5': () => K.checklist([
            ['What systems and software do doctors and agents use daily?', 'ڈاکٹرز اور ایجنٹس روزانہ کون سے سسٹمز اور سافٹ ویئر استعمال کرتے ہیں؟', 'Doctors aur agents rozana kaun se systems aur software istemal kartay hain?'],
            ['What are the support hours and shift pattern?', 'سپورٹ کے اوقات اور شفٹ کا نظام کیا ہے؟', 'Support ke auqaat aur shift ka nizam kya hai?'],
            ['Which ticketing / remote tools does the team use?', 'ٹیم کون سا ٹکٹنگ / ریموٹ ٹول استعمال کرتی ہے؟', 'Team kaun sa ticketing / remote tool istemal karti hai?'],
            ['What does success look like in the first 3 months?', 'پہلے 3 مہینوں میں کامیابی کیسی ہو گی؟', 'Pehlay 3 mahinon mein kamyabi kesi hogi?']
        ]),
        'l2:3.1': flow([
            ['🔍', ['Identify the problem', 'مسئلے کی شناخت', 'Masle ki shanakht']],
            ['💡', ['Guess the probable cause', 'ممکنہ وجہ سوچیں', 'Mumkina wajah sochein']],
            ['🧪', ['Test the theory', 'نظریہ آزمائیں', 'Nazariya aazmayen']],
            ['🔧', ['Fix (plan, then act)', 'حل کریں (منصوبہ پھر عمل)', 'Hal karein (mansooba phir amal)']],
            ['✅', ['Verify with the user', 'صارف کے ساتھ تصدیق', 'User ke sath tasdeeq']],
            ['📝', ['Document it', 'ریکارڈ کریں', 'Record karein']]
        ]),
        'l2:3.2': () => K.cards([
            ['🔴', ['P1 Critical', 'P1 انتہائی اہم', 'P1 Intihai ahem'], ['Live consultation down. Act now (e.g. 15 min)', 'براہِ راست مشاورت بند۔ فوراً (مثلاً 15 منٹ)', 'Live mashwara band. Foran (masalan 15 minute)']],
            ['🟠', ['P2 High', 'P2 زیادہ', 'P2 Zyada'], ['A team or department is stuck (e.g. 1 hour)', 'پوری ٹیم یا شعبہ رکا ہوا (مثلاً 1 گھنٹہ)', 'Poori team ya shobah ruka hua (masalan 1 ghanta)']],
            ['🟡', ['P3 Medium', 'P3 درمیانہ', 'P3 Darmiyana'], ['One user affected, workaround exists (e.g. 4 hours)', 'ایک صارف متاثر، متبادل موجود (مثلاً 4 گھنٹے)', 'Aik user mutasir, mutabadil mojood (masalan 4 ghantay)']],
            ['🟢', ['P4 Low', 'P4 کم', 'P4 Kam'], ['Request or improvement (e.g. 1 to 2 days)', 'درخواست یا بہتری (مثلاً 1 تا 2 دن)', 'Darkhwast ya behtari (masalan 1 ta 2 din)']]
        ], ['Example targets: the real SLA times come from the organization', 'مثالی اہداف: اصل SLA وقت ادارہ طے کرتا ہے', 'Misaali ahdaaf: asal SLA waqt idara tay karta hai']),
        'l2:3.3': flow([
            ['📋', ['Gather all details', 'تمام تفصیل جمع کریں', 'Tamam tafseel jama karein']],
            ['🧾', ['Write what you already tried', 'جو آزمایا وہ لکھیں', 'Jo aazmaya woh likhein']],
            ['⬆️', ['Escalate with clear notes', 'واضح نوٹس کے ساتھ اوپر بھیجیں', 'Wazeh notes ke sath oopar bhejein']],
            ['📣', ['Keep the user informed', 'صارف کو آگاہ رکھیں', 'User ko agah rakhein']]
        ]),
        'l2:3.4': () => K.checklist([
            ['Ask permission before taking control', 'کنٹرول لینے سے پہلے اجازت لیں', 'Control lene se pehlay ijazat lein'],
            ['Tell the user what you are doing', 'صارف کو بتائیں آپ کیا کر رہے ہیں', 'User ko batayen aap kya kar rahay hain'],
            ['Never open personal or patient files', 'ذاتی یا مریض کی فائلیں نہ کھولیں', 'Zaati ya mareez ki files na kholein'],
            ['Log the fix in the ticket', 'حل ٹکٹ میں درج کریں', 'Hal ticket mein darj karein'],
            ['Add it to the knowledge base', 'نالج بیس میں شامل کریں', 'Knowledge base mein shamil karein']
        ]),
        'l2:4.1': flow([
            ['💾', ['Back up user data', 'صارف کا ڈیٹا بیک اپ', 'User ka data backup']],
            ['🔌', ['Bootable USB', 'بوٹ ایبل USB', 'Bootable USB']],
            ['⚙️', ['Boot from USB (BIOS/UEFI)', 'USB سے بوٹ (BIOS/UEFI)', 'USB se boot (BIOS/UEFI)']],
            ['💿', ['Partition and install', 'پارٹیشن اور انسٹال', 'Partition aur install']],
            ['🧩', ['Drivers and updates', 'ڈرائیورز اور اپ ڈیٹس', 'Drivers aur updates']],
            ['🏢', ['Apps, join domain, restore data', 'ایپس، ڈومین جوائن، ڈیٹا بحال', 'Apps, domain join, data bahal']]
        ]),
        'l2:4.2': () => K.cards([
            ['📈', ['Task Manager', 'Task Manager'], ['See what is using CPU, RAM, disk', 'دیکھیں CPU، RAM، ڈسک کون استعمال کر رہا ہے', 'Dekhein CPU, RAM, disk kaun istemal kar raha hai']],
            ['📜', ['Event Viewer', 'Event Viewer'], ['Read error and warning logs', 'ایرر اور وارننگ لاگز پڑھیں', 'Error aur warning logs parhein']],
            ['🔌', ['Device Manager', 'Device Manager'], ['Fix drivers and hardware', 'ڈرائیورز اور ہارڈ ویئر درست کریں', 'Drivers aur hardware durust karein']],
            ['⚙️', ['Services / Computer Mgmt', 'Services / Computer Mgmt'], ['Restart services, manage disks and users', 'سروسز ری اسٹارٹ، ڈسک اور یوزرز', 'Services restart, disk aur users']]
        ]),
        'l2:4.3': flow([
            ['🔋', ['Power and POST check', 'بجلی اور POST چیک', 'Bijli aur POST check']],
            ['💽', ['Boot device and cables', 'بوٹ ڈیوائس اور تاریں', 'Boot device aur taarein']],
            ['🛡️', ['Try Safe Mode', 'Safe Mode آزمائیں', 'Safe Mode aazmayen']],
            ['♻️', ['Startup Repair / System Restore', 'Startup Repair / System Restore', 'Startup Repair / System Restore']],
            ['💿', ['Reinstall as a last resort', 'آخری حل: دوبارہ انسٹال', 'Aakhri hal: dobara install']]
        ]),
        'l2:4.4': () => K.cards([
            ['🧠', ['CPU', 'CPU'], ['The processor: thinks and calculates', 'پروسیسر: سوچتا اور حساب کرتا ہے', 'Processor: sochta aur hisab karta hai']],
            ['🧮', ['RAM', 'RAM'], ['Short-term memory: more RAM = smoother multitasking', 'مختصر یادداشت: زیادہ RAM بہتر ملٹی ٹاسکنگ', 'Mukhtasar yaaddasht: zyada RAM behtar multitasking']],
            ['💾', ['SSD / HDD', 'SSD / HDD'], ['Storage: SSD is much faster than HDD', 'اسٹوریج: SSD، HDD سے بہت تیز', 'Storage: SSD, HDD se bohat tez']],
            ['🔋', ['PSU', 'PSU'], ['Power supply: failure = no power or random shutdowns', 'پاور سپلائی: خرابی سے بجلی بند یا اچانک شٹ ڈاؤن', 'Power supply: kharabi se bijli band ya achanak shutdown']]
        ]),
        'l2:4.5': flow([
            ['✅', ['Approved, licensed software only', 'صرف منظور شدہ، لائسنس یافتہ سافٹ ویئر', 'Sirf manzoor shuda, licence yafta software']],
            ['🧰', ['Standard image / deployment tool', 'معیاری امیج / ڈیپلائمنٹ ٹول', 'Miyari image / deployment tool']],
            ['🧪', ['Test patches on a few PCs', 'پیچز چند پی سیز پر آزمائیں', 'Patches chand PCs par aazmayen']],
            ['🚀', ['Roll out to everyone', 'سب پر لگائیں', 'Sab par lagayen']],
            ['🗂️', ['Track licences', 'لائسنس کا ریکارڈ', 'Licence ka record']]
        ]),
        'l2:5.4': () => K.cards([
            ['🧾', ['ipconfig', 'ipconfig'], ['IP settings; /release /renew /flushdns', 'IP سیٹنگز؛ /release /renew /flushdns', 'IP settings; /release /renew /flushdns']],
            ['📡', ['ping', 'ping'], ['Is the other side reachable?', 'کیا دوسری طرف پہنچ ہے؟', 'Kya doosri taraf pohanch hai?']],
            ['🧭', ['tracert', 'tracert'], ['Where along the path does it stop?', 'راستے میں کہاں رکتا ہے؟', 'Raastay mein kahan rukta hai?']],
            ['📖', ['nslookup', 'nslookup'], ['Does DNS answer correctly?', 'کیا DNS درست جواب دیتا ہے؟', 'Kya DNS durust jawab deta hai?']]
        ]),
        'l2:5.1': () => K.topology(),
        'l2:5.2': () => ITViz.build('6.3'),
        'l2:5.3': flow([
            ['📶', ['Check signal strength', 'سگنل کی طاقت دیکھیں', 'Signal ki taqat dekhein']],
            ['🔑', ['Correct network and password', 'درست نیٹ ورک اور پاس ورڈ', 'Durust network aur password']],
            ['🔢', ['Got an IP from DHCP?', 'DHCP سے IP ملا؟', 'DHCP se IP mila?']],
            ['📻', ['Interference or too many users', 'مداخلت یا بہت زیادہ صارفین', 'Mudakhilat ya bohat zyada users']],
            ['🔄', ['Restart access point / router', 'ایکسس پوائنٹ / راؤٹر ری اسٹارٹ', 'Access point / router restart']]
        ]),
        'l2:6.1': flow([
            ['🆕', ['Joiner: account, groups, mailbox, MFA, device', 'نیا ملازم: اکاؤنٹ، گروپس، میل باکس، MFA، ڈیوائس', 'Naya mulazim: account, groups, mailbox, MFA, device']],
            ['🔁', ['Mover: change groups and access', 'تبادلہ: گروپس اور رسائی بدلیں', 'Tabadla: groups aur rasai badlein']],
            ['🚪', ['Leaver: disable account, collect device, keep data', 'رخصت: اکاؤنٹ بند، ڈیوائس واپس، ڈیٹا محفوظ', 'Rukhsat: account band, device wapas, data mehfooz']]
        ]),
        'l2:6.2': adTree,
        'l2:6.3': () => K.cards([
            ['📧', ['Mailboxes', 'میل باکس', 'Mailboxes'], ['Create, share, recover', 'بنائیں، شیئر کریں، بحال کریں', 'Banayen, share karein, bahal karein']],
            ['🎫', ['Licences', 'لائسنس', 'Licences'], ['Assign and reclaim', 'دیں اور واپس لیں', 'Dein aur wapas lein']],
            ['🛡️', ['MFA and security', 'MFA اور سیکیورٹی', 'MFA aur security'], ['Enforce 2-step sign-in', '2 مرحلہ لاگ اِن لازمی', '2 marhala login lazmi']],
            ['📁', ['Drive / OneDrive sharing', 'Drive / OneDrive شیئرنگ', 'Drive / OneDrive sharing'], ['Share with the right people only', 'صرف درست لوگوں سے شیئر', 'Sirf durust logon se share']]
        ]),
        'l2:6.4': flow([
            ['🪪', ['Verify identity first', 'پہلے شناخت کی تصدیق', 'Pehlay shanakht ki tasdeeq']],
            ['🔓', ['Reset or unlock', 'ری سیٹ یا ان لاک', 'Reset ya unlock']],
            ['🔁', ['Force a new password', 'نیا پاس ورڈ لازمی', 'Naya password lazmi']],
            ['📝', ['Log it in the ticket', 'ٹکٹ میں درج کریں', 'Ticket mein darj karein']]
        ]),
        'l2:7.1': flow([
            ['🔌', ['Power, paper, toner, cables', 'بجلی، کاغذ، ٹونر، تاریں', 'Bijli, kaghaz, toner, taarein']],
            ['📚', ['Clear the print queue, restart Spooler', 'قطار صاف کریں، Spooler ری اسٹارٹ', 'Qatar saaf karein, Spooler restart']],
            ['🧩', ['Driver, port and IP address', 'ڈرائیور، پورٹ اور IP', 'Driver, port aur IP']],
            ['🖨️', ['Print a test page', 'ٹیسٹ پیج پرنٹ کریں', 'Test page print karein']],
            ['🛒', ['Replace part or escalate', 'پرزہ بدلیں یا اوپر بھیجیں', 'Purza badlein ya oopar bhejein']]
        ]),
        'l2:7.2': flow([
            ['🙏', ['Ask for consent', 'اجازت لیں', 'Ijazat lein']],
            ['🔗', ['Connect with an approved tool', 'منظور شدہ ٹول سے جڑیں', 'Manzoor shuda tool se jurein']],
            ['🔧', ['Fix while the user watches', 'صارف کے سامنے حل کریں', 'User ke samnay hal karein']],
            ['🔌', ['Disconnect completely', 'مکمل طور پر منقطع کریں', 'Mukammal tor par munqata karein']],
            ['📝', ['Log the session', 'سیشن ریکارڈ کریں', 'Session record karein']]
        ]),
        'l2:7.3': flow([
            ['🛒', ['Procure', 'خریداری', 'Kharidari']],
            ['🏷️', ['Tag and register', 'ٹیگ اور اندراج', 'Tag aur indraaj']],
            ['🚚', ['Deploy to the user', 'صارف کو دیں', 'User ko dein']],
            ['🔧', ['Maintain and update', 'دیکھ بھال اور اپ ڈیٹ', 'Dekh bhaal aur update']],
            ['♻️', ['Retire and wipe securely', 'ریٹائر اور محفوظ صفائی', 'Retire aur mehfooz safai']]
        ]),
        'l2:7.4': () => K.cards([
            ['🔐', ['Access control + MFA', 'رسائی کنٹرول + MFA', 'Rasai control + MFA'], ['Only the right staff see records', 'صرف درست عملہ ریکارڈ دیکھے', 'Sirf durust amla record dekhay']],
            ['🔒', ['Encryption', 'انکرپشن', 'Encryption'], ['Protect laptops and data in transit', 'لیپ ٹاپس اور ڈیٹا کا تحفظ', 'Laptops aur data ka tahaffuz']],
            ['💾', ['Backups', 'بیک اپ', 'Backups'], ['Tested and off-site', 'جانچے ہوئے اور باہر محفوظ', 'Janchay huay aur bahar mehfooz']],
            ['🧾', ['Audit logs', 'آڈٹ لاگز', 'Audit logs'], ['Know who opened what', 'معلوم ہو کس نے کیا کھولا', 'Maloom ho kis ne kya khola']]
        ]),
        'l2:8.1': flow([
            ['❓', ['Ask: which error, which device?', 'پوچھیں: کون سی خرابی، کون سی ڈیوائس؟', 'Poochein: kaun si kharabi, kaun si device?']],
            ['⚡', ['Check internet, camera, mic, app', 'انٹرنیٹ، کیمرہ، مائیک، ایپ چیک', 'Internet, camera, mic, app check']],
            ['🖥️', ['Remote in or switch to a backup device', 'ریموٹ کنیکٹ یا متبادل ڈیوائس', 'Remote connect ya mutabadil device']],
            ['📞', ['Fallback: join by phone', 'متبادل: فون سے شامل ہوں', 'Mutabadil: phone se shamil hon']],
            ['📝', ['Follow up and fix the root cause', 'پیروی اور اصل وجہ کا حل', 'Pairwi aur asal wajah ka hal']]
        ]),
        'l2:8.2': flow([
            ['👥', ['Scope: one printer or all?', 'دائرہ: ایک پرنٹر یا سب؟', 'Daira: aik printer ya sab?']],
            ['🖨️', ['Check the print server / Spooler', 'پرنٹ سرور / Spooler چیک', 'Print server / Spooler check']],
            ['🛠️', ['Restart service, clear the queue', 'سروس ری اسٹارٹ، قطار صاف', 'Service restart, qatar saaf']],
            ['🔁', ['Give a temporary printer', 'عارضی پرنٹر دیں', 'Arzi printer dein']],
            ['📣', ['Tell the department the ETA', 'شعبے کو متوقع وقت بتائیں', 'Shobay ko mutawaqqa waqt batayen']]
        ]),
        'l2:8.3': flow([
            ['🔌', ['Disconnect the device', 'ڈیوائس منقطع کریں', 'Device munqata karein']],
            ['🚨', ['Report to security / L3', 'سیکیورٹی / L3 کو رپورٹ', 'Security / L3 ko report']],
            ['🔑', ['Reset the password and sessions', 'پاس ورڈ اور سیشنز ری سیٹ', 'Password aur sessions reset']],
            ['🛡️', ['Scan for malware', 'میلویئر اسکین', 'Malware scan']],
            ['🎓', ['Awareness for everyone', 'سب کی آگاہی', 'Sab ki agahi']]
        ]),
        'l2:8.4': flow([
            ['📣', ['Report immediately', 'فوراً رپورٹ کریں', 'Foran report karein']],
            ['🔒', ['Remote lock or wipe', 'ریموٹ لاک یا وائپ', 'Remote lock ya wipe']],
            ['🚫', ['Disable the user accounts', 'یوزر اکاؤنٹس بند کریں', 'User accounts band karein']],
            ['🔍', ['Find out what data was on it', 'معلوم کریں اس میں کیا ڈیٹا تھا', 'Maloom karein is mein kya data tha']],
            ['📝', ['Write the incident report', 'واقعے کی رپورٹ لکھیں', 'Waqiye ki report likhein']]
        ])
    });

    // ---------- sections ----------
    const sections = [
        {
            n: 1, icon: '🏥',
            t: ['Section 1: Know the Post and the Tele-Health Nerve Centre', 'حصہ 1: آسامی اور ٹیلی ہیلتھ نروو سینٹر کو جانیں', 'Hissa 1: Asami aur Tele-Health Nerve Centre ko Jaanein'],
            d: ['Understand the job before you walk in. Public details about this centre were not found, so where the advertisement is silent say "my understanding is..." and never claim inside knowledge.',
                'انٹرویو سے پہلے کردار کو سمجھیں۔ اس مرکز کی عوامی تفصیلات نہیں ملیں، اس لیے جہاں اشتہار خاموش ہو وہاں کہیں "میری سمجھ کے مطابق..." اور اندرونی معلومات کا دعویٰ نہ کریں۔',
                'Interview se pehlay kirdar ko samjhein. Is markaz ki awami tafseelat nahi milin, is liye jahan ishtihar khamosh ho wahan kahein "meri samajh ke mutabiq..." aur andaruni maloomat ka dawa na karein.'],
            items: [
                {
                    q: ["What is a Tele-Health Nerve Centre, and what does 'Level 2 support' mean?", 'ٹیلی ہیلتھ نروو سینٹر کیا ہے اور "Level 2 سپورٹ" کا کیا مطلب ہے؟', "Tele-Health Nerve Centre kya hai aur 'Level 2 support' ka kya matlab hai?"],
                    a: [`<p><strong>Tele-health</strong> lets patients and doctors consult remotely by video, phone or app. A <strong>nerve centre</strong> is the control hub that connects doctors, call agents, patients and the technology behind them.</p>
                        <ul><li><strong>What depends on IT:</strong> video-call software, call-centre computers and headsets, patient records, internet links, user accounts, printers</li>
                        <li><strong>Level 2 support:</strong> the technician who solves what the first-line desk cannot: deeper troubleshooting, installations, accounts, network and remote fixes</li></ul>
                        <div class="highlight-box"><p>I found no public details about this specific centre. Say "my understanding is..." and ask the panel to describe their setup.</p></div>`,
                        `<p><strong>ٹیلی ہیلتھ</strong> میں مریض اور ڈاکٹر ویڈیو، فون یا ایپ کے ذریعے دور سے مشاورت کرتے ہیں۔ <strong>نروو سینٹر</strong> وہ کنٹرول مرکز ہے جو ڈاکٹرز، کال ایجنٹس، مریضوں اور پیچھے کی ٹیکنالوجی کو جوڑتا ہے۔</p>
                        <ul><li><strong>آئی ٹی پر انحصار:</strong> ویڈیو کال سافٹ ویئر، کال سینٹر کمپیوٹرز اور ہیڈ سیٹ، مریضوں کا ریکارڈ، انٹرنیٹ، یوزر اکاؤنٹس، پرنٹرز</li>
                        <li><strong>Level 2 سپورٹ:</strong> وہ ٹیکنیشن جو وہ مسائل حل کرے جو پہلی لائن نہ کر سکے: گہری ٹربل شوٹنگ، انسٹالیشن، اکاؤنٹس، نیٹ ورک اور ریموٹ حل</li></ul>
                        <div class="highlight-box"><p>اس مخصوص مرکز کی عوامی معلومات نہیں ملیں۔ کہیں "میری سمجھ کے مطابق..." اور پینل سے ان کا نظام پوچھیں۔</p></div>`,
                        `<p><strong>Tele-health</strong> mein mareez aur doctor video, phone ya app ke zariye door se mashwara kartay hain. <strong>Nerve centre</strong> woh control markaz hai jo doctors, call agents, mareezon aur peechay ki technology ko jorta hai.</p>
                        <ul><li><strong>IT par inhisaar:</strong> video call software, call centre computers aur headset, mareezon ka record, internet, user accounts, printers</li>
                        <li><strong>Level 2 support:</strong> woh technician jo woh masail hal karay jo pehli line na kar sakay: gehri troubleshooting, installation, accounts, network aur remote hal</li></ul>
                        <div class="highlight-box"><p>Is makhsoos markaz ki awami maloomat nahi milin. Kahein "meri samajh ke mutabiq..." aur panel se un ka nizam poochein.</p></div>`]
                },
                {
                    q: ['What are the facts of the advertisement I must know?', 'اشتہار کے وہ حقائق جو مجھے معلوم ہونے چاہییں؟', 'Ishtihar ke woh haqaiq jo mujhe maloom honay chahiyen?'],
                    a: [`<ul><li><strong>Post:</strong> IT Assistant, Level 2 Support, Tele-Health Nerve Centre Quetta</li><li><strong>Vacancies / pay:</strong> 5 posts, Rs. 70,000</li><li><strong>Education:</strong> bachelor's in IT, CS or equivalent</li>
                        <li><strong>Required skills:</strong> Level 2 troubleshooting, hardware and software installation, Windows, LAN/WAN, user account management, printers, IT asset management</li>
                        <li><strong>Helpful extras:</strong> Active Directory, Microsoft 365 or Google Workspace, remote desktop support</li><li><strong>Note:</strong> female candidates are especially encouraged to apply</li></ul>
                        <div class="highlight-box"><p>Map every required skill to one real example from your studies, lab or past job. The sections below follow this list exactly.</p></div>`,
                        `<ul><li><strong>آسامی:</strong> آئی ٹی اسسٹنٹ، Level 2 سپورٹ، ٹیلی ہیلتھ نروو سینٹر کوئٹہ</li><li><strong>نشستیں / تنخواہ:</strong> 5 آسامیاں، 70,000 روپے</li><li><strong>تعلیم:</strong> IT، CS یا مساوی میں بیچلر</li>
                        <li><strong>مطلوبہ مہارتیں:</strong> Level 2 ٹربل شوٹنگ، ہارڈ ویئر اور سافٹ ویئر انسٹالیشن، Windows، LAN/WAN، یوزر اکاؤنٹ مینجمنٹ، پرنٹرز، آئی ٹی اثاثہ جات کا انتظام</li>
                        <li><strong>اضافی فائدہ مند:</strong> Active Directory، Microsoft 365 یا Google Workspace، ریموٹ ڈیسک ٹاپ سپورٹ</li><li><strong>نوٹ:</strong> خواتین امیدواروں کی خاص حوصلہ افزائی کی جاتی ہے</li></ul>
                        <div class="highlight-box"><p>ہر مطلوبہ مہارت کے لیے اپنی تعلیم، لیب یا پچھلی نوکری سے ایک حقیقی مثال تیار رکھیں۔ نیچے کے حصے اسی فہرست کے مطابق ہیں۔</p></div>`,
                        `<ul><li><strong>Asami:</strong> IT Assistant, Level 2 Support, Tele-Health Nerve Centre Quetta</li><li><strong>Nishastein / tankhwah:</strong> 5 asamiyan, Rs. 70,000</li><li><strong>Taleem:</strong> IT, CS ya musawi mein bachelor</li>
                        <li><strong>Matlooba maharatein:</strong> Level 2 troubleshooting, hardware aur software installation, Windows, LAN/WAN, user account management, printers, IT asasa jaat ka intizam</li>
                        <li><strong>Izafi faida mand:</strong> Active Directory, Microsoft 365 ya Google Workspace, remote desktop support</li><li><strong>Note:</strong> khawateen umeedwaron ki khaas hausla afzai ki jati hai</li></ul>
                        <div class="highlight-box"><p>Har matlooba maharat ke liye apni taleem, lab ya pichli naukri se aik haqeeqi misaal tayyar rakhein. Neechay ke hissay isi fehrist ke mutabiq hain.</p></div>`]
                },
                {
                    q: ['L1 vs L2 vs L3 support: where do you fit?', 'L1، L2 اور L3 سپورٹ: آپ کہاں فٹ ہوتے ہیں؟', 'L1, L2 aur L3 support: aap kahan fit hotay hain?'],
                    a: [`<ul><li><strong>L1:</strong> first contact: logs the ticket, resets passwords, solves simple how-to problems</li><li><strong>L2 (this job):</strong> takes what L1 cannot fix: deeper troubleshooting, installs, account and network issues, remote sessions</li><li><strong>L3:</strong> specialists: server engineers, developers, vendors</li></ul>
                        <p>Your value: fix most problems yourself, and escalate the rest with clear notes.</p>`,
                        `<ul><li><strong>L1:</strong> پہلا رابطہ: ٹکٹ بناتا ہے، پاس ورڈ ری سیٹ، سادہ رہنمائی</li><li><strong>L2 (یہ نوکری):</strong> جو L1 حل نہ کر سکے: گہری ٹربل شوٹنگ، انسٹالیشن، اکاؤنٹ اور نیٹ ورک مسائل، ریموٹ سیشن</li><li><strong>L3:</strong> ماہرین: سرور انجینئرز، ڈویلپرز، وینڈرز</li></ul>
                        <p>آپ کی قدر: زیادہ تر مسائل خود حل کریں اور باقی واضح نوٹس کے ساتھ اوپر بھیجیں۔</p>`,
                        `<ul><li><strong>L1:</strong> pehla rabta: ticket banata hai, password reset, saada rehnumai</li><li><strong>L2 (yeh naukri):</strong> jo L1 hal na kar sakay: gehri troubleshooting, installation, account aur network masail, remote session</li><li><strong>L3:</strong> mahireen: server engineers, developers, vendors</li></ul>
                        <p>Aap ki qadar: zyada tar masail khud hal karein aur baqi wazeh notes ke sath oopar bhejein.</p>`]
                },
                {
                    q: ['Describe the journey of a support ticket.', 'سپورٹ ٹکٹ کا سفر بیان کریں۔', 'Support ticket ka safar bayan karein.'],
                    a: [`<ol><li>Ticket or call arrives; you note the user, device, error and impact</li><li>Triage: set the priority (is a live consultation affected?)</li><li>Diagnose, remotely first, on-site if needed</li><li>Fix it, or escalate to L3 with notes</li><li>Confirm with the user that it works</li><li>Document the cause and the fix, then close</li></ol>`,
                        `<ol><li>ٹکٹ یا کال آتی ہے؛ صارف، ڈیوائس، ایرر اور اثر نوٹ کریں</li><li>درجہ بندی: ترجیح طے کریں (کیا براہِ راست مشاورت متاثر ہے؟)</li><li>تشخیص: پہلے ریموٹ، ضرورت پر موقع پر</li><li>حل کریں یا نوٹس کے ساتھ L3 کو بھیجیں</li><li>صارف سے تصدیق کہ کام چل رہا ہے</li><li>وجہ اور حل لکھ کر ٹکٹ بند کریں</li></ol>`,
                        `<ol><li>Ticket ya call aati hai; user, device, error aur asar note karein</li><li>Darja bandi: tarjeeh tay karein (kya live mashwara mutasir hai?)</li><li>Tashkhees: pehlay remote, zaroorat par moqay par</li><li>Hal karein ya notes ke sath L3 ko bhejein</li><li>User se tasdeeq ke kaam chal raha hai</li><li>Wajah aur hal likh kar ticket band karein</li></ol>`]
                }
            ]
        },
        {
            n: 2, icon: '🧭',
            t: ['Section 2: HR and Behavioural Questions', 'حصہ 2: ایچ آر اور رویے کے سوالات', 'Hissa 2: HR aur Rawayyay ke Sawalat'],
            d: ['Support work is people work. Panels check patience, communication, honesty and reliability as much as technical skill.',
                'سپورٹ کا کام لوگوں کا کام ہے۔ پینل صبر، رابطہ، ایمانداری اور اعتماد کو تکنیکی مہارت جتنا ہی دیکھتا ہے۔',
                'Support ka kaam logon ka kaam hai. Panel sabr, rabta, imandari aur aitmaad ko takneeki maharat jitna hi dekhta hai.'],
            items: [
                {
                    q: ['Tell me about yourself. (Almost always the first question)', 'اپنے بارے میں بتائیں۔ (تقریباً ہمیشہ پہلا سوال)', 'Apne baray mein bataiye. (Taqriban hamesha pehla sawal)'],
                    a: [`<p><strong>Use 4 parts, 60 to 90 seconds:</strong> education, hands-on support skills, a real example, why this role.</p>
                        <div class="example-box"><h4>Model Answer</h4><p>"Assalam-o-Alaikum. I am ____, with a bachelor's in ____ from ____. I am comfortable with Windows installation, troubleshooting, networking basics, user accounts and printers, and I have practised these in ____ (lab / internship / job). For example, I once ____ (fixed a network or printer problem for N users). I am applying because a tele-health centre depends on technology working every minute, and I enjoy solving problems calmly and helping non-technical people."</p></div><p>Replace the blanks with real facts.</p>`,
                        `<p><strong>4 حصے، 60 تا 90 سیکنڈ:</strong> تعلیم، عملی سپورٹ مہارتیں، ایک حقیقی مثال، یہ کردار کیوں۔</p>
                        <div class="example-box"><h4>نمونہ جواب</h4><p>"السلام علیکم۔ میں ____ ہوں، میں نے ____ سے ____ میں بیچلر کیا ہے۔ مجھے Windows انسٹالیشن، ٹربل شوٹنگ، بنیادی نیٹ ورکنگ، یوزر اکاؤنٹس اور پرنٹرز پر عبور ہے اور میں نے ____ (لیب / انٹرن شپ / نوکری) میں ان کی مشق کی ہے۔ مثلاً میں نے ایک بار ____ (N صارفین کا نیٹ ورک یا پرنٹر مسئلہ حل کیا)۔ میں اس لیے درخواست دے رہا/رہی ہوں کہ ٹیلی ہیلتھ مرکز کا انحصار ہر لمحہ ٹیکنالوجی کے چلتے رہنے پر ہے، اور مجھے پرسکون رہ کر مسائل حل کرنا اور غیر تکنیکی لوگوں کی مدد کرنا پسند ہے۔"</p></div><p>خالی جگہیں اپنی حقیقی معلومات سے بھریں۔</p>`,
                        `<p><strong>4 hissay, 60 ta 90 second:</strong> taleem, amli support maharatein, aik haqeeqi misaal, yeh kirdar kyun.</p>
                        <div class="example-box"><h4>Namoona Jawab</h4><p>"Assalam-o-Alaikum. Main ____ hoon, maine ____ se ____ mein bachelor kiya hai. Mujhe Windows installation, troubleshooting, bunyadi networking, user accounts aur printers par uboor hai aur maine ____ (lab / internship / naukri) mein in ki mashq ki hai. Masalan maine aik baar ____ (N users ka network ya printer masla hal kiya). Main is liye darkhwast de raha/rahi hoon ke tele-health markaz ka inhisaar har lamha technology ke chaltay rehnay par hai, aur mujhe pursukoon reh kar masail hal karna aur ghair takneeki logon ki madad karna pasand hai."</p></div><p>Khali jagahein apni haqeeqi maloomat se bharein.</p>`]
                },
                {
                    q: ['Why do you want to work in tele-health, and in this role?', 'آپ ٹیلی ہیلتھ میں اور اس کردار میں کیوں کام کرنا چاہتے ہیں؟', 'Aap tele-health mein aur is kirdar mein kyun kaam karna chahtay hain?'],
                    a: [`<ul><li>Healthcare IT has real impact: when systems work, a patient reaches a doctor</li><li>Tele-health reaches people who live far from hospitals, which matters in Balochistan</li><li>The role uses exactly the skills I have built: troubleshooting, networks, accounts, support</li><li>I want to grow into a systems or network specialist from this base</li></ul>
                        <div class="highlight-box"><p>Avoid "I just need a job". Connect your skills to patient care and reliability.</p></div>`,
                        `<ul><li>ہیلتھ کیئر آئی ٹی کا حقیقی اثر ہے: سسٹم چلے تو مریض ڈاکٹر تک پہنچتا ہے</li><li>ٹیلی ہیلتھ ہسپتالوں سے دور لوگوں تک پہنچتی ہے، جو بلوچستان میں بہت اہم ہے</li><li>یہ کردار انہی مہارتوں کا استعمال ہے جو میں نے بنائی ہیں</li><li>میں یہاں سے سسٹمز یا نیٹ ورک ماہر بننا چاہتا/چاہتی ہوں</li></ul>
                        <div class="highlight-box"><p>"مجھے بس نوکری چاہیے" سے پرہیز کریں۔ اپنی مہارت کو مریضوں کی دیکھ بھال اور اعتماد سے جوڑیں۔</p></div>`,
                        `<ul><li>Healthcare IT ka haqeeqi asar hai: system chalay to mareez doctor tak pohanchta hai</li><li>Tele-health aspatalon se door logon tak pohanchti hai, jo Balochistan mein bohat ahem hai</li><li>Yeh kirdar inhi maharaton ka istemal hai jo maine banayi hain</li><li>Main yahan se systems ya network mahir banna chahta/chahti hoon</li></ul>
                        <div class="highlight-box"><p>"Mujhe bas naukri chahiye" se parhez karein. Apni maharat ko mareezon ki dekh bhaal aur aitmaad se jorein.</p></div>`]
                },
                {
                    q: ['How do you handle an angry or non-technical user?', 'آپ غصے میں یا غیر تکنیکی صارف کو کیسے سنبھالتے ہیں؟', 'Aap ghusay mein ya ghair takneeki user ko kaise sambhalte hain?'],
                    a: [`<ol><li><strong>Listen</strong> without interrupting</li><li><strong>Empathize:</strong> "I understand this is urgent, let me fix it."</li><li><strong>Clarify</strong> with simple questions (what do you see on the screen?)</li><li><strong>Fix and explain</strong> in plain words, no jargon</li><li><strong>Follow up</strong> to make sure it stays fixed</li></ol><p>Never blame the user. Doctors and agents are under time pressure.</p>`,
                        `<ol><li>بغیر ٹوکے <strong>سنیں</strong></li><li><strong>ہمدردی:</strong> "میں سمجھتا/سمجھتی ہوں یہ فوری ہے، میں حل کرتا/کرتی ہوں۔"</li><li>سادہ سوالات سے <strong>واضح کریں</strong> (اسکرین پر کیا نظر آ رہا ہے؟)</li><li><strong>حل کریں اور سمجھائیں</strong> آسان الفاظ میں، تکنیکی اصطلاحات کے بغیر</li><li><strong>پیروی کریں</strong> تاکہ مسئلہ دوبارہ نہ آئے</li></ol><p>صارف کو کبھی قصوروار نہ ٹھہرائیں۔ ڈاکٹرز اور ایجنٹس وقت کے دباؤ میں ہوتے ہیں۔</p>`,
                        `<ol><li>Baghair tokay <strong>sunein</strong></li><li><strong>Hamdardi:</strong> "Main samajhta/samajhti hoon yeh fori hai, main hal karta/karti hoon."</li><li>Saada sawalat se <strong>wazeh karein</strong> (screen par kya nazar aa raha hai?)</li><li><strong>Hal karein aur samjhayen</strong> aasaan alfaz mein, takneeki istilahat ke baghair</li><li><strong>Pairwi karein</strong> taake masla dobara na aaye</li></ol><p>User ko kabhi qusoorwar na thehrayen. Doctors aur agents waqt ke dabao mein hotay hain.</p>`]
                },
                {
                    q: ['Are you comfortable with shifts, on-call duty and extra hours?', 'کیا آپ شفٹوں، آن کال ڈیوٹی اور اضافی وقت کے لیے تیار ہیں؟', 'Kya aap shiftein, on-call duty aur izafi waqt ke liye tayyar hain?'],
                    a: [`<p>A tele-health service may run long hours. A safe, honest answer:</p><div class="example-box"><p>"Yes. I understand that support has to match the service hours. I would like to know the shift pattern in advance, and I am ready to be flexible when a critical issue needs attention."</p></div><p>Do not promise what you cannot keep, but show reliability and flexibility.</p>`,
                        `<p>ٹیلی ہیلتھ سروس لمبے اوقات چل سکتی ہے۔ محفوظ اور ایماندار جواب:</p><div class="example-box"><p>"جی ہاں۔ میں سمجھتا/سمجھتی ہوں کہ سپورٹ کو سروس کے اوقات کے مطابق ہونا چاہیے۔ میں شفٹ کا نظام پہلے سے جاننا چاہوں گا/گی، اور اہم مسئلے پر لچک دکھانے کے لیے تیار ہوں۔"</p></div><p>وہ وعدہ نہ کریں جو پورا نہ کر سکیں، مگر اعتماد اور لچک دکھائیں۔</p>`,
                        `<p>Tele-health service lambay auqaat chal sakti hai. Mehfooz aur imandar jawab:</p><div class="example-box"><p>"Ji haan. Main samajhta/samajhti hoon ke support ko service ke auqaat ke mutabiq hona chahiye. Main shift ka nizam pehlay se jaanna chahoon ga/gi, aur ahem masle par lachak dikhanay ke liye tayyar hoon."</p></div><p>Woh wada na karein jo poora na kar sakein, magar aitmaad aur lachak dikhayen.</p>`]
                },
                {
                    q: ['Do you have questions for us? (Always ask 2)', 'کیا آپ کے پاس ہمارے لیے سوالات ہیں؟ (ہمیشہ 2 پوچھیں)', 'Kya aap ke paas hamaray liye sawalat hain? (Hamesha 2 poochein)'],
                    a: [`<p>Good questions show you think like a support professional. Ask about their systems, shifts, tools and what success looks like.</p><p><strong>Do not ask about salary or leave in the first interview.</strong></p>`,
                        `<p>اچھے سوالات ظاہر کرتے ہیں کہ آپ سپورٹ پروفیشنل کی طرح سوچتے ہیں۔ ان کے سسٹمز، شفٹوں، ٹولز اور کامیابی کے معیار کے بارے میں پوچھیں۔</p><p><strong>پہلے انٹرویو میں تنخواہ یا چھٹیوں کے بارے میں نہ پوچھیں۔</strong></p>`,
                        `<p>Achay sawalat zahir kartay hain ke aap support professional ki tarah sochtay hain. Un ke systems, shiftein, tools aur kamyabi ke miyaar ke baray mein poochein.</p><p><strong>Pehlay interview mein tankhwah ya chhuttiyon ke baray mein na poochein.</strong></p>`]
                }
            ]
        },
        {
            n: 3, icon: '🎫',
            t: ['Section 3: Support Process: Troubleshooting, Tickets and SLA', 'حصہ 3: سپورٹ کا عمل: ٹربل شوٹنگ، ٹکٹس اور SLA', 'Hissa 3: Support ka Amal: Troubleshooting, Tickets aur SLA'],
            d: ['A calm, repeatable method beats guessing. Show the panel you work step by step.',
                'پرسکون اور دہرایا جانے والا طریقہ اندازے سے بہتر ہے۔ پینل کو دکھائیں کہ آپ قدم بہ قدم کام کرتے ہیں۔',
                'Pursukoon aur dohraya janay wala tareeqa andaazay se behtar hai. Panel ko dikhayen ke aap qadam ba qadam kaam kartay hain.'],
            items: [
                {
                    q: ['What is your troubleshooting method?', 'آپ کا ٹربل شوٹنگ کا طریقہ کیا ہے؟', 'Aap ka troubleshooting ka tareeqa kya hai?'],
                    a: [`<ol><li><strong>Identify</strong> the problem: ask questions, check what changed, reproduce it</li><li><strong>Probable cause:</strong> start with the simplest (cable, power, restart)</li><li><strong>Test</strong> the theory; if wrong, try the next</li><li><strong>Fix:</strong> make a plan, think of side effects, then act</li><li><strong>Verify</strong> with the user</li><li><strong>Document</strong> the findings</li></ol><p>Say it aloud in the interview: panels reward clear thinking.</p>`,
                        `<ol><li>مسئلے کی <strong>شناخت</strong>: سوالات پوچھیں، دیکھیں کیا بدلا، دوبارہ پیدا کریں</li><li><strong>ممکنہ وجہ:</strong> سب سے آسان سے شروع کریں (تار، بجلی، ری اسٹارٹ)</li><li>نظریے کو <strong>آزمائیں</strong>؛ غلط ہو تو اگلا</li><li><strong>حل:</strong> منصوبہ بنائیں، ضمنی اثرات سوچیں، پھر عمل کریں</li><li>صارف کے ساتھ <strong>تصدیق</strong></li><li>نتائج <strong>ریکارڈ</strong> کریں</li></ol><p>انٹرویو میں بلند آواز میں بتائیں: پینل واضح سوچ کی قدر کرتا ہے۔</p>`,
                        `<ol><li>Masle ki <strong>shanakht</strong>: sawalat poochein, dekhein kya badla, dobara paida karein</li><li><strong>Mumkina wajah:</strong> sab se aasaan se shuru karein (taar, bijli, restart)</li><li>Nazariye ko <strong>aazmayen</strong>; ghalat ho to agla</li><li><strong>Hal:</strong> mansooba banayen, zimni asraat sochein, phir amal karein</li><li>User ke sath <strong>tasdeeq</strong></li><li>Nataij <strong>record</strong> karein</li></ol><p>Interview mein buland awaz mein batayen: panel wazeh soch ki qadar karta hai.</p>`]
                },
                {
                    q: ['What are a ticketing system, priority and SLA?', 'ٹکٹنگ سسٹم، ترجیح اور SLA کیا ہیں؟', 'Ticketing system, tarjeeh aur SLA kya hain?'],
                    a: [`<ul><li><strong>Ticketing system:</strong> software (e.g. Jira Service Desk, Freshdesk, GLPI) that records every request with owner, status and history</li><li><strong>Priority:</strong> urgency x impact. A live consultation down is P1; a request for a new mouse is P4</li><li><strong>SLA (Service Level Agreement):</strong> the promised response and fix times for each priority</li></ul><p>Benefit: nothing is forgotten, and managers can see trends.</p>`,
                        `<ul><li><strong>ٹکٹنگ سسٹم:</strong> سافٹ ویئر (مثلاً Jira Service Desk، Freshdesk، GLPI) جو ہر درخواست کو مالک، حالت اور تاریخ کے ساتھ ریکارڈ کرتا ہے</li><li><strong>ترجیح:</strong> فوری ضرورت x اثر۔ براہِ راست مشاورت بند ہونا P1؛ نئے ماؤس کی درخواست P4</li><li><strong>SLA (Service Level Agreement):</strong> ہر ترجیح کے لیے وعدہ کردہ جواب اور حل کا وقت</li></ul><p>فائدہ: کچھ نہیں بھولتا، اور مینیجرز رجحانات دیکھ سکتے ہیں۔</p>`,
                        `<ul><li><strong>Ticketing system:</strong> software (masalan Jira Service Desk, Freshdesk, GLPI) jo har darkhwast ko malik, halat aur tareekh ke sath record karta hai</li><li><strong>Tarjeeh:</strong> fori zaroorat x asar. Live mashwara band hona P1; naye mouse ki darkhwast P4</li><li><strong>SLA (Service Level Agreement):</strong> har tarjeeh ke liye wada kardah jawab aur hal ka waqt</li></ul><p>Faida: kuch nahi bhoolta, aur managers rujhanaat dekh saktay hain.</p>`]
                },
                {
                    q: ['When and how do you escalate to Level 3?', 'آپ L3 کو کب اور کیسے اوپر بھیجتے ہیں؟', 'Aap L3 ko kab aur kaise oopar bhejte hain?'],
                    a: [`<ul><li><strong>When:</strong> the fix needs access, skills or authority beyond L2 (server, firewall, vendor), or the SLA is at risk</li><li><strong>How:</strong> write the symptoms, the steps already tried, logs/screenshots, the priority and the user impact</li><li><strong>Afterwards:</strong> keep the user updated and learn from the fix</li></ul><p>Escalating with clear notes is a strength, not a weakness.</p>`,
                        `<ul><li><strong>کب:</strong> جب حل کے لیے L2 سے زیادہ رسائی، مہارت یا اختیار چاہیے (سرور، فائر وال، وینڈر) یا SLA خطرے میں ہو</li><li><strong>کیسے:</strong> علامات، آزمائے گئے اقدامات، لاگز/اسکرین شاٹس، ترجیح اور صارف پر اثر لکھیں</li><li><strong>بعد میں:</strong> صارف کو آگاہ رکھیں اور حل سے سیکھیں</li></ul><p>واضح نوٹس کے ساتھ اوپر بھیجنا کمزوری نہیں، خوبی ہے۔</p>`,
                        `<ul><li><strong>Kab:</strong> jab hal ke liye L2 se zyada rasai, maharat ya ikhtiyar chahiye (server, firewall, vendor) ya SLA khatre mein ho</li><li><strong>Kaise:</strong> alamaat, aazmaye gaye iqdamaat, logs/screenshots, tarjeeh aur user par asar likhein</li><li><strong>Baad mein:</strong> user ko agah rakhein aur hal se seekhein</li></ul><p>Wazeh notes ke sath oopar bhejna kamzori nahi, khoobi hai.</p>`]
                },
                {
                    q: ['What are your remote-support habits and documentation practices?', 'آپ کی ریموٹ سپورٹ کی عادات اور دستاویز بندی کیا ہیں؟', 'Aap ki remote support ki aadaat aur dastawez bandi kya hain?'],
                    a: [`<ul><li>Always ask permission and explain what you will do</li><li>Never open personal or patient files; touch only what the fix needs</li><li>Write every fix in the ticket; add repeat problems to the <strong>knowledge base</strong> so L1 can solve them next time</li></ul><p>Good documentation reduces repeat tickets and makes the whole team faster.</p>`,
                        `<ul><li>ہمیشہ اجازت لیں اور بتائیں آپ کیا کریں گے</li><li>ذاتی یا مریض کی فائلیں کبھی نہ کھولیں؛ صرف وہی چھوئیں جو حل کے لیے ضروری ہو</li><li>ہر حل ٹکٹ میں لکھیں؛ بار بار آنے والے مسائل <strong>نالج بیس</strong> میں ڈالیں تاکہ L1 اگلی بار خود حل کر سکے</li></ul><p>اچھی دستاویز بندی دہرائے جانے والے ٹکٹ کم کرتی ہے اور پوری ٹیم کو تیز بناتی ہے۔</p>`,
                        `<ul><li>Hamesha ijazat lein aur batayen aap kya karein gay</li><li>Zaati ya mareez ki files kabhi na kholein; sirf wohi chhuyen jo hal ke liye zaroori ho</li><li>Har hal ticket mein likhein; baar baar aanay walay masail <strong>knowledge base</strong> mein daalein taake L1 agli baar khud hal kar sakay</li></ul><p>Achi dastawez bandi dohraye janay walay tickets kam karti hai aur poori team ko tez banati hai.</p>`]
                }
            ]
        },
        {
            n: 4, icon: '💻',
            t: ['Section 4: Windows, Hardware and Software', 'حصہ 4: Windows، ہارڈ ویئر اور سافٹ ویئر', 'Hissa 4: Windows, Hardware aur Software'],
            d: ['Expect practical questions: "How do you install Windows?" "A PC will not boot, what do you do?" Practise these in a virtual machine before the interview.',
                'عملی سوالات متوقع ہیں: "Windows کیسے انسٹال کرتے ہیں؟" "پی سی آن نہیں ہوتا تو کیا کریں؟" انٹرویو سے پہلے ورچوئل مشین میں ان کی مشق کریں۔',
                'Amli sawalat mutawaqqa hain: "Windows kaise install kartay hain?" "PC on nahi hota to kya karein?" Interview se pehlay virtual machine mein in ki mashq karein.'],
            items: [
                {
                    q: ['How do you perform a clean installation of Windows?', 'آپ Windows کی صاف انسٹالیشن کیسے کرتے ہیں؟', 'Aap Windows ki saaf installation kaise kartay hain?'],
                    a: [`<ol><li><strong>Back up</strong> the user's data first</li><li>Create a <strong>bootable USB</strong> (Windows Media Creation Tool or Rufus)</li><li>Open the boot menu or <strong>BIOS/UEFI</strong> and boot from the USB</li><li><strong>Partition</strong> the disk and install</li><li>Install <strong>drivers</strong> and run Windows Update</li><li>Install standard apps, <strong>join the domain</strong>, restore data</li></ol><p>Also mention a valid licence and activation.</p>`,
                        `<ol><li>پہلے صارف کا ڈیٹا <strong>بیک اپ</strong> کریں</li><li><strong>بوٹ ایبل USB</strong> بنائیں (Windows Media Creation Tool یا Rufus)</li><li>بوٹ مینو یا <strong>BIOS/UEFI</strong> کھول کر USB سے بوٹ کریں</li><li>ڈسک کی <strong>پارٹیشن</strong> کر کے انسٹال کریں</li><li><strong>ڈرائیورز</strong> انسٹال کریں اور Windows Update چلائیں</li><li>معیاری ایپس انسٹال کریں، <strong>ڈومین جوائن</strong> کریں، ڈیٹا بحال کریں</li></ol><p>درست لائسنس اور ایکٹیویشن کا ذکر بھی کریں۔</p>`,
                        `<ol><li>Pehlay user ka data <strong>backup</strong> karein</li><li><strong>Bootable USB</strong> banayen (Windows Media Creation Tool ya Rufus)</li><li>Boot menu ya <strong>BIOS/UEFI</strong> khol kar USB se boot karein</li><li>Disk ki <strong>partition</strong> karke install karein</li><li><strong>Drivers</strong> install karein aur Windows Update chalayen</li><li>Miyari apps install karein, <strong>domain join</strong> karein, data bahal karein</li></ol><p>Durust licence aur activation ka zikr bhi karein.</p>`]
                },
                {
                    q: ['Which Windows tools must a Level 2 technician know?', 'Level 2 ٹیکنیشن کو Windows کے کون سے ٹولز آنے چاہییں؟', 'Level 2 technician ko Windows ke kaun se tools aanay chahiyen?'],
                    a: [`<ul><li><strong>Task Manager:</strong> what is using CPU, RAM, disk; end a frozen app</li><li><strong>Event Viewer:</strong> error and warning logs that explain crashes</li><li><strong>Device Manager:</strong> drivers and hardware status</li><li><strong>Services (services.msc) and Computer Management:</strong> restart services, disks, local users</li><li><strong>msconfig / Safe Mode / System Restore:</strong> startup and recovery</li></ul>`,
                        `<ul><li><strong>Task Manager:</strong> CPU، RAM، ڈسک کون استعمال کر رہا ہے؛ جمی ہوئی ایپ بند کریں</li><li><strong>Event Viewer:</strong> ایرر اور وارننگ لاگز جو کریش کی وجہ بتاتے ہیں</li><li><strong>Device Manager:</strong> ڈرائیورز اور ہارڈ ویئر کی حالت</li><li><strong>Services (services.msc) اور Computer Management:</strong> سروسز ری اسٹارٹ، ڈسکس، لوکل یوزرز</li><li><strong>msconfig / Safe Mode / System Restore:</strong> اسٹارٹ اپ اور ریکوری</li></ul>`,
                        `<ul><li><strong>Task Manager:</strong> CPU, RAM, disk kaun istemal kar raha hai; jami hui app band karein</li><li><strong>Event Viewer:</strong> error aur warning logs jo crash ki wajah batatay hain</li><li><strong>Device Manager:</strong> drivers aur hardware ki halat</li><li><strong>Services (services.msc) aur Computer Management:</strong> services restart, disks, local users</li><li><strong>msconfig / Safe Mode / System Restore:</strong> startup aur recovery</li></ul>`]
                },
                {
                    q: ['A PC is slow, will not boot, or shows a blue screen. What do you do?', 'پی سی سست ہے، آن نہیں ہوتا یا بلیو اسکرین آتی ہے۔ آپ کیا کریں گے؟', 'PC sust hai, on nahi hota ya blue screen aati hai. Aap kya karein gay?'],
                    a: [`<ul><li><strong>No power / no display:</strong> check power cable and socket, monitor cable, listen for POST beeps</li><li><strong>Will not boot:</strong> check the boot device order, try Safe Mode, Startup Repair or System Restore; reinstall only after backing up data</li><li><strong>Blue screen (BSOD):</strong> note the stop code, boot Safe Mode, roll back the last driver or update, test RAM and disk</li><li><strong>Slow:</strong> Task Manager, remove startup apps, scan for malware, check free disk space, consider RAM or SSD upgrade</li></ul>`,
                        `<ul><li><strong>بجلی / ڈسپلے نہیں:</strong> پاور کیبل اور ساکٹ، مانیٹر کیبل چیک کریں، POST بیپ سنیں</li><li><strong>بوٹ نہیں ہوتا:</strong> بوٹ ڈیوائس ترتیب، Safe Mode، Startup Repair یا System Restore؛ ڈیٹا بیک اپ کے بعد ہی دوبارہ انسٹال کریں</li><li><strong>بلیو اسکرین (BSOD):</strong> اسٹاپ کوڈ نوٹ کریں، Safe Mode میں بوٹ، آخری ڈرائیور یا اپ ڈیٹ واپس کریں، RAM اور ڈسک ٹیسٹ کریں</li><li><strong>سست:</strong> Task Manager، اسٹارٹ اپ ایپس ہٹائیں، میلویئر اسکین، ڈسک کی خالی جگہ، ضرورت پر RAM یا SSD اپ گریڈ</li></ul>`,
                        `<ul><li><strong>Bijli / display nahi:</strong> power cable aur socket, monitor cable check karein, POST beep sunein</li><li><strong>Boot nahi hota:</strong> boot device tarteeb, Safe Mode, Startup Repair ya System Restore; data backup ke baad hi dobara install karein</li><li><strong>Blue screen (BSOD):</strong> stop code note karein, Safe Mode mein boot, aakhri driver ya update wapas karein, RAM aur disk test karein</li><li><strong>Sust:</strong> Task Manager, startup apps hatayen, malware scan, disk ki khali jagah, zaroorat par RAM ya SSD upgrade</li></ul>`]
                },
                {
                    q: ['Explain the main hardware parts and what fails first.', 'ہارڈ ویئر کے اہم حصے اور پہلے کیا خراب ہوتا ہے بتائیں۔', 'Hardware ke ahem hissay aur pehlay kya kharab hota hai batayen.'],
                    a: [`<ul><li><strong>CPU:</strong> processor; overheating causes slowdown or shutdown</li><li><strong>RAM:</strong> short-term memory; bad RAM causes freezes and blue screens</li><li><strong>SSD / HDD:</strong> storage; HDDs fail mechanically, SSDs are faster; watch SMART warnings</li><li><strong>PSU:</strong> power supply; failure means no power or random restarts</li><li><strong>Motherboard:</strong> connects everything; swelling capacitors or no POST are warning signs</li></ul>`,
                        `<ul><li><strong>CPU:</strong> پروسیسر؛ زیادہ گرم ہونے سے سستی یا شٹ ڈاؤن</li><li><strong>RAM:</strong> مختصر یادداشت؛ خراب RAM سے جمنا اور بلیو اسکرین</li><li><strong>SSD / HDD:</strong> اسٹوریج؛ HDD میکانیکی طور پر خراب ہوتی ہے، SSD تیز ہے؛ SMART وارننگ دیکھیں</li><li><strong>PSU:</strong> پاور سپلائی؛ خرابی سے بجلی بند یا اچانک ری اسٹارٹ</li><li><strong>مدر بورڈ:</strong> سب کو جوڑتا ہے؛ پھولے کپیسٹر یا POST نہ ہونا خطرے کی علامت</li></ul>`,
                        `<ul><li><strong>CPU:</strong> processor; zyada garam honay se sustu ya shutdown</li><li><strong>RAM:</strong> mukhtasar yaaddasht; kharab RAM se jamna aur blue screen</li><li><strong>SSD / HDD:</strong> storage; HDD mechanical tor par kharab hoti hai, SSD tez hai; SMART warning dekhein</li><li><strong>PSU:</strong> power supply; kharabi se bijli band ya achanak restart</li><li><strong>Motherboard:</strong> sab ko jorta hai; phoolay capacitor ya POST na hona khatray ki alamat</li></ul>`]
                },
                {
                    q: ['How do you manage software installation, licences and updates?', 'آپ سافٹ ویئر انسٹالیشن، لائسنس اور اپ ڈیٹس کیسے سنبھالتے ہیں؟', 'Aap software installation, licence aur updates kaise sambhalte hain?'],
                    a: [`<ul><li>Install only <strong>approved, licensed</strong> software; no cracked or unknown downloads</li><li>Standardize with an image or a deployment tool so every PC is set up the same</li><li><strong>Patch management:</strong> test Windows and app updates on a few PCs first, then roll out</li><li>Track licence counts in the asset register and remove software that is no longer needed</li></ul>`,
                        `<ul><li>صرف <strong>منظور شدہ، لائسنس یافتہ</strong> سافٹ ویئر؛ کریک یا نامعلوم ڈاؤن لوڈ نہیں</li><li>امیج یا ڈیپلائمنٹ ٹول سے معیاری بنائیں تاکہ ہر پی سی ایک جیسا ہو</li><li><strong>پیچ مینجمنٹ:</strong> Windows اور ایپ اپ ڈیٹس پہلے چند پی سیز پر آزمائیں، پھر سب پر لگائیں</li><li>لائسنس کی تعداد اثاثہ رجسٹر میں رکھیں اور غیر ضروری سافٹ ویئر ہٹائیں</li></ul>`,
                        `<ul><li>Sirf <strong>manzoor shuda, licence yafta</strong> software; crack ya namaloom download nahi</li><li>Image ya deployment tool se miyari banayen taake har PC aik jesa ho</li><li><strong>Patch management:</strong> Windows aur app updates pehlay chand PCs par aazmayen, phir sab par lagayen</li><li>Licence ki tadaad asasa register mein rakhein aur ghair zaroori software hatayen</li></ul>`]
                }
            ]
        },
        {
            n: 5, icon: '🖧',
            t: ['Section 5: LAN/WAN Networking', 'حصہ 5: LAN/WAN نیٹ ورکنگ', 'Hissa 5: LAN/WAN Networking'],
            d: ['A tele-health centre lives on network connections. Be ready to explain the basics and to troubleshoot step by step.',
                'ٹیلی ہیلتھ مرکز نیٹ ورک کنکشنز پر چلتا ہے۔ بنیادی باتیں سمجھانے اور قدم بہ قدم ٹربل شوٹنگ کے لیے تیار رہیں۔',
                'Tele-health markaz network connections par chalta hai. Bunyadi baatein samjhanay aur qadam ba qadam troubleshooting ke liye tayyar rahein.'],
            items: [
                {
                    q: ['Explain LAN, WAN, IP, subnet, DHCP and DNS.', 'LAN، WAN، IP، subnet، DHCP اور DNS سمجھائیں۔', 'LAN, WAN, IP, subnet, DHCP aur DNS samjhayen.'],
                    a: [`<ul><li><strong>LAN:</strong> network inside one building; <strong>WAN:</strong> links sites and the Internet</li><li><strong>IP address:</strong> a device's logical address, e.g. 192.168.1.10</li><li><strong>Subnet (mask):</strong> divides an address into network and device parts</li><li><strong>DHCP:</strong> hands out IP addresses automatically</li><li><strong>DNS:</strong> turns names into IP addresses</li><li><strong>Gateway:</strong> the router address used to leave the LAN</li></ul>`,
                        `<ul><li><strong>LAN:</strong> ایک عمارت کے اندر نیٹ ورک؛ <strong>WAN:</strong> مختلف مقامات اور انٹرنیٹ کو جوڑتا ہے</li><li><strong>IP address:</strong> ڈیوائس کا منطقی پتہ، مثلاً 192.168.1.10</li><li><strong>Subnet (mask):</strong> ایڈریس کو نیٹ ورک اور ڈیوائس کے حصوں میں بانٹتا ہے</li><li><strong>DHCP:</strong> IP ایڈریس خودکار طور پر دیتا ہے</li><li><strong>DNS:</strong> ناموں کو IP میں بدلتا ہے</li><li><strong>Gateway:</strong> راؤٹر کا پتہ جس سے LAN سے باہر جاتے ہیں</li></ul>`,
                        `<ul><li><strong>LAN:</strong> aik imarat ke andar network; <strong>WAN:</strong> mukhtalif maqamaat aur internet ko jorta hai</li><li><strong>IP address:</strong> device ka mantiqi pata, masalan 192.168.1.10</li><li><strong>Subnet (mask):</strong> address ko network aur device ke hisson mein bantta hai</li><li><strong>DHCP:</strong> IP address khudkar tor par deta hai</li><li><strong>DNS:</strong> naamon ko IP mein badalta hai</li><li><strong>Gateway:</strong> router ka pata jis se LAN se bahar jatay hain</li></ul>`]
                },
                {
                    q: ['A user says "I have no internet". Walk me through it.', 'صارف کہتا ہے "انٹرنیٹ نہیں ہے"۔ مجھے مرحلہ وار بتائیں۔', 'User kehta hai "internet nahi hai". Mujhe marhala war batayen.'],
                    a: [`<ol><li>Is it one device or everyone? (scope)</li><li>Check cable or Wi-Fi connection; restart the device</li><li><code>ipconfig</code>: did it get an IP? (169.254.x.x means DHCP failed)</li><li><code>ping 8.8.8.8</code> tests the Internet; <code>ping google.com</code> tests DNS</li><li>Restart router/modem; call the ISP if the problem is outside the office</li></ol>`,
                        `<ol><li>ایک ڈیوائس کا مسئلہ ہے یا سب کا؟ (دائرہ)</li><li>کیبل یا Wi-Fi کنکشن چیک کریں؛ ڈیوائس ری اسٹارٹ کریں</li><li><code>ipconfig</code>: کیا IP ملا؟ (169.254.x.x کا مطلب DHCP ناکام)</li><li><code>ping 8.8.8.8</code> انٹرنیٹ جانچتا ہے؛ <code>ping google.com</code> DNS جانچتا ہے</li><li>راؤٹر/موڈیم ری اسٹارٹ؛ مسئلہ دفتر سے باہر ہو تو ISP کو کال</li></ol>`,
                        `<ol><li>Aik device ka masla hai ya sab ka? (daira)</li><li>Cable ya Wi-Fi connection check karein; device restart karein</li><li><code>ipconfig</code>: kya IP mila? (169.254.x.x ka matlab DHCP nakaam)</li><li><code>ping 8.8.8.8</code> internet jaanchta hai; <code>ping google.com</code> DNS jaanchta hai</li><li>Router/modem restart; masla daftar se bahar ho to ISP ko call</li></ol>`]
                },
                {
                    q: ['How do you fix Wi-Fi problems, and what is a VPN?', 'Wi-Fi کے مسائل کیسے حل کرتے ہیں اور VPN کیا ہے؟', 'Wi-Fi ke masail kaise hal kartay hain aur VPN kya hai?'],
                    a: [`<ul><li>Check signal strength, correct network and password</li><li>Confirm the device gets an IP from DHCP</li><li>Look for interference, too many users, or the wrong channel</li><li>Restart the access point; update the Wi-Fi driver</li><li><strong>VPN:</strong> an encrypted tunnel that lets staff reach internal systems securely from outside the office</li></ul>`,
                        `<ul><li>سگنل کی طاقت، درست نیٹ ورک اور پاس ورڈ چیک کریں</li><li>تصدیق کریں کہ ڈیوائس کو DHCP سے IP ملتا ہے</li><li>مداخلت، بہت زیادہ صارفین یا غلط چینل دیکھیں</li><li>ایکسس پوائنٹ ری اسٹارٹ؛ Wi-Fi ڈرائیور اپ ڈیٹ</li><li><strong>VPN:</strong> انکرپٹڈ سرنگ جس سے عملہ دفتر سے باہر سے اندرونی سسٹمز تک محفوظ رسائی لیتا ہے</li></ul>`,
                        `<ul><li>Signal ki taqat, durust network aur password check karein</li><li>Tasdeeq karein ke device ko DHCP se IP milta hai</li><li>Mudakhilat, bohat zyada users ya ghalat channel dekhein</li><li>Access point restart; Wi-Fi driver update</li><li><strong>VPN:</strong> encrypted surang jis se amla daftar se bahar se andaruni systems tak mehfooz rasai leta hai</li></ul>`]
                },
                {
                    q: ['Which command-line tools do you use for network problems?', 'نیٹ ورک مسائل کے لیے آپ کون سے کمانڈ لائن ٹولز استعمال کرتے ہیں؟', 'Network masail ke liye aap kaun se command line tools istemal kartay hain?'],
                    a: [`<div class="formula-box"><p><code>ipconfig /all</code> full IP configuration</p><p><code>ipconfig /release</code> then <code>/renew</code> get a new IP from DHCP</p><p><code>ipconfig /flushdns</code> clear the DNS cache</p><p><code>ping</code> test reachability; <code>tracert</code> show the path</p><p><code>nslookup</code> test DNS; <code>netstat -an</code> open connections; <code>arp -a</code> IP to MAC table</p></div>`,
                        `<div class="formula-box"><p><code>ipconfig /all</code> مکمل IP کنفیگریشن</p><p><code>ipconfig /release</code> پھر <code>/renew</code>: DHCP سے نیا IP</p><p><code>ipconfig /flushdns</code> DNS کیش صاف</p><p><code>ping</code> رسائی جانچیں؛ <code>tracert</code> راستہ دکھائیں</p><p><code>nslookup</code> DNS جانچیں؛ <code>netstat -an</code> کھلے کنکشنز؛ <code>arp -a</code> IP سے MAC ٹیبل</p></div>`,
                        `<div class="formula-box"><p><code>ipconfig /all</code> mukammal IP configuration</p><p><code>ipconfig /release</code> phir <code>/renew</code>: DHCP se naya IP</p><p><code>ipconfig /flushdns</code> DNS cache saaf</p><p><code>ping</code> rasai jaanchein; <code>tracert</code> raasta dikhayen</p><p><code>nslookup</code> DNS jaanchein; <code>netstat -an</code> khulay connections; <code>arp -a</code> IP se MAC table</p></div>`]
                }
            ]
        },
        {
            n: 6, icon: '👥',
            t: ['Section 6: Users, Active Directory and Cloud Suites', 'حصہ 6: یوزرز، Active Directory اور کلاؤڈ سوئٹس', 'Hissa 6: Users, Active Directory aur Cloud Suites'],
            d: ['User account management is a core duty. Active Directory and Microsoft 365 / Google Workspace are listed as helpful: be honest about your level and say how you practised.',
                'یوزر اکاؤنٹ مینجمنٹ بنیادی ذمہ داری ہے۔ Active Directory اور Microsoft 365 / Google Workspace فائدہ مند ہیں: اپنی سطح کے بارے میں ایماندار رہیں اور بتائیں کہ مشق کیسے کی۔',
                'User account management bunyadi zimmadari hai. Active Directory aur Microsoft 365 / Google Workspace faida mand hain: apni satah ke baray mein imandar rahein aur batayen ke mashq kaise ki.'],
            items: [
                {
                    q: ['How do you manage user accounts through joiner, mover and leaver?', 'آپ نئے ملازم، تبادلے اور رخصتی میں یوزر اکاؤنٹس کیسے سنبھالتے ہیں؟', 'Aap naye mulazim, tabadlay aur rukhsati mein user accounts kaise sambhalte hain?'],
                    a: [`<ul><li><strong>Joiner:</strong> create the account, add to the right groups, mailbox and licence, enable MFA, prepare the device</li><li><strong>Mover:</strong> change groups and permissions to the new role; remove old access</li><li><strong>Leaver:</strong> disable (do not delete first) the account, remove access, collect the device, keep or transfer data as policy says</li></ul><p>Follow least privilege and record every change.</p>`,
                        `<ul><li><strong>نیا ملازم:</strong> اکاؤنٹ بنائیں، درست گروپس میں ڈالیں، میل باکس اور لائسنس، MFA فعال، ڈیوائس تیار</li><li><strong>تبادلہ:</strong> نئے کردار کے مطابق گروپس اور اجازتیں بدلیں؛ پرانی رسائی ہٹائیں</li><li><strong>رخصتی:</strong> اکاؤنٹ بند کریں (پہلے حذف نہیں)، رسائی ختم، ڈیوائس واپس، ڈیٹا پالیسی کے مطابق رکھیں یا منتقل کریں</li></ul><p>Least privilege پر چلیں اور ہر تبدیلی ریکارڈ کریں۔</p>`,
                        `<ul><li><strong>Naya mulazim:</strong> account banayen, durust groups mein daalein, mailbox aur licence, MFA faal, device tayyar</li><li><strong>Tabadla:</strong> naye kirdar ke mutabiq groups aur ijazatein badlein; purani rasai hatayen</li><li><strong>Rukhsati:</strong> account band karein (pehlay hazf nahi), rasai khatam, device wapas, data policy ke mutabiq rakhein ya muntaqil karein</li></ul><p>Least privilege par chalein aur har tabdeeli record karein.</p>`]
                },
                {
                    q: ['What is Active Directory and why do organizations use it?', 'Active Directory کیا ہے اور ادارے اسے کیوں استعمال کرتے ہیں؟', 'Active Directory kya hai aur idaray isay kyun istemal kartay hain?'],
                    a: [`<ul><li><strong>Active Directory (AD):</strong> Microsoft's directory service: one central place for users, computers, groups and rules</li><li><strong>Domain Controller (DC):</strong> the server that checks logins</li><li><strong>OU (Organizational Unit):</strong> a folder to organize users and computers</li><li><strong>Group Policy (GPO):</strong> rules pushed to many PCs at once (password rules, screen lock, allowed software)</li></ul><p>Benefit: one login, central control, consistent security. Common tasks: create/unlock users, reset passwords, add to groups, join a PC to the domain.</p>`,
                        `<ul><li><strong>Active Directory (AD):</strong> مائیکروسافٹ کی ڈائریکٹری سروس: یوزرز، کمپیوٹرز، گروپس اور اصولوں کی ایک مرکزی جگہ</li><li><strong>Domain Controller (DC):</strong> وہ سرور جو لاگ اِن چیک کرتا ہے</li><li><strong>OU (Organizational Unit):</strong> یوزرز اور کمپیوٹرز کو ترتیب دینے کا فولڈر</li><li><strong>Group Policy (GPO):</strong> بہت سے پی سیز پر ایک ساتھ اصول (پاس ورڈ، اسکرین لاک، اجازت یافتہ سافٹ ویئر)</li></ul><p>فائدہ: ایک لاگ اِن، مرکزی کنٹرول، یکساں سیکیورٹی۔ عام کام: یوزر بنانا/ان لاک، پاس ورڈ ری سیٹ، گروپ میں شامل کرنا، پی سی کو ڈومین میں جوڑنا۔</p>`,
                        `<ul><li><strong>Active Directory (AD):</strong> Microsoft ki directory service: users, computers, groups aur usoolon ki aik markazi jagah</li><li><strong>Domain Controller (DC):</strong> woh server jo login check karta hai</li><li><strong>OU (Organizational Unit):</strong> users aur computers ko tarteeb denay ka folder</li><li><strong>Group Policy (GPO):</strong> bohat se PCs par aik sath usool (password, screen lock, ijazat yafta software)</li></ul><p>Faida: aik login, markazi control, yaksan security. Aam kaam: user banana/unlock, password reset, group mein shamil karna, PC ko domain mein jorna.</p>`]
                },
                {
                    q: 'XX',
                    a: 'XX'
                },
                {
                    q: ['How do you handle password resets and MFA securely?', 'آپ پاس ورڈ ری سیٹ اور MFA محفوظ طریقے سے کیسے کرتے ہیں؟', 'Aap password reset aur MFA mehfooz tareeqay se kaise kartay hain?'],
                    a: [`<ol><li><strong>Verify identity first</strong> (employee ID, callback to a known number, manager approval): social engineering often starts with a "forgot password" call</li><li>Reset or unlock; give a temporary password through a safe channel</li><li>Force the user to set a new password at next login</li><li>Re-register MFA if the phone changed</li><li>Log it in the ticket</li></ol>`,
                        `<ol><li><strong>پہلے شناخت کی تصدیق</strong> (ملازم ID، معروف نمبر پر کال بیک، مینیجر کی منظوری): سوشل انجینئرنگ اکثر "پاس ورڈ بھول گیا" کال سے شروع ہوتی ہے</li><li>ری سیٹ یا ان لاک؛ عارضی پاس ورڈ محفوظ ذریعے سے دیں</li><li>اگلے لاگ اِن پر صارف سے نیا پاس ورڈ لازمی بنوائیں</li><li>فون بدلا ہو تو MFA دوبارہ رجسٹر کریں</li><li>ٹکٹ میں درج کریں</li></ol>`,
                        `<ol><li><strong>Pehlay shanakht ki tasdeeq</strong> (employee ID, maroof number par call back, manager ki manzoori): social engineering aksar "password bhool gaya" call se shuru hoti hai</li><li>Reset ya unlock; arzi password mehfooz zariye se dein</li><li>Agle login par user se naya password lazmi banwayen</li><li>Phone badla ho to MFA dobara register karein</li><li>Ticket mein darj karein</li></ol>`]
                }
            ]
        }
    ];

    // Replace the placeholder item of section 6 (index 2) with the real M365 / Workspace Q&A
    sections[5].items[2] = {
        q: ['What admin tasks do you do in Microsoft 365 or Google Workspace?', 'Microsoft 365 یا Google Workspace میں آپ کون سے ایڈمن کام کرتے ہیں؟', 'Microsoft 365 ya Google Workspace mein aap kaun se admin kaam kartay hain?'],
        a: [`<ul><li><strong>Users and licences:</strong> create users, assign and reclaim licences</li><li><strong>Mailboxes and groups:</strong> shared mailboxes, distribution lists, aliases, mail recovery</li><li><strong>Security:</strong> enforce MFA, reset sessions, review sign-in alerts</li><li><strong>Sharing:</strong> OneDrive / Google Drive permissions, shared drives for teams</li><li><strong>Devices and apps:</strong> install Teams / Meet, check admin console health</li></ul><div class="highlight-box"><p>Say honestly which one you used and how (trial tenant, lab, previous job).</p></div>`,
            `<ul><li><strong>یوزرز اور لائسنس:</strong> یوزر بنانا، لائسنس دینا اور واپس لینا</li><li><strong>میل باکس اور گروپس:</strong> شیئرڈ میل باکس، ڈسٹری بیوشن لسٹ، ایلیاس، میل بحالی</li><li><strong>سیکیورٹی:</strong> MFA لازمی، سیشنز ری سیٹ، سائن اِن الرٹس دیکھنا</li><li><strong>شیئرنگ:</strong> OneDrive / Google Drive کی اجازتیں، ٹیموں کے لیے شیئرڈ ڈرائیوز</li><li><strong>ڈیوائسز اور ایپس:</strong> Teams / Meet انسٹال، ایڈمن کنسول کی صحت چیک</li></ul><div class="highlight-box"><p>ایمانداری سے بتائیں کون سا اور کیسے استعمال کیا (ٹرائل ٹیننٹ، لیب، پچھلی نوکری)۔</p></div>`,
            `<ul><li><strong>Users aur licence:</strong> user banana, licence dena aur wapas lena</li><li><strong>Mailbox aur groups:</strong> shared mailbox, distribution list, alias, mail bahali</li><li><strong>Security:</strong> MFA lazmi, sessions reset, sign-in alerts dekhna</li><li><strong>Sharing:</strong> OneDrive / Google Drive ki ijazatein, teamon ke liye shared drives</li><li><strong>Devices aur apps:</strong> Teams / Meet install, admin console ki sehat check</li></ul><div class="highlight-box"><p>Imandari se batayen kaun sa aur kaise istemal kiya (trial tenant, lab, pichli naukri).</p></div>`]
    };
    sections.push(
        {
            n: 7, icon: '🖨️',
            t: ['Section 7: Printers, Remote Support and IT Assets', 'حصہ 7: پرنٹرز، ریموٹ سپورٹ اور آئی ٹی اثاثے', 'Hissa 7: Printers, Remote Support aur IT Asasay'],
            d: ['Printers, remote tools and asset tracking are named in the advertisement. Each one is a likely practical question.',
                'پرنٹرز، ریموٹ ٹولز اور اثاثوں کا ریکارڈ اشتہار میں درج ہیں۔ ہر ایک عملی سوال کا امکان رکھتا ہے۔',
                'Printers, remote tools aur asason ka record ishtihar mein darj hain. Har aik amli sawal ka imkan rakhta hai.'],
            items: [
                {
                    q: ['A printer is not printing. How do you troubleshoot?', 'پرنٹر پرنٹ نہیں کر رہا۔ آپ کیسے ٹربل شوٹ کریں گے؟', 'Printer print nahi kar raha. Aap kaise troubleshoot karein gay?'],
                    a: [`<ol><li>Power, paper, toner, jams, cables or Wi-Fi/network link</li><li>Open the print queue: clear stuck jobs; restart the <strong>Print Spooler</strong> service</li><li>Check the driver, port and the printer's IP address (a network printer may have a new IP)</li><li>Print a test page; try another PC to see if the problem is the printer or the PC</li><li>Replace the part or escalate to the vendor</li></ol>`,
                        `<ol><li>بجلی، کاغذ، ٹونر، پھنسا کاغذ، تاریں یا Wi-Fi/نیٹ ورک لنک</li><li>پرنٹ قطار کھولیں: رکی ہوئی جابز صاف کریں؛ <strong>Print Spooler</strong> سروس ری اسٹارٹ کریں</li><li>ڈرائیور، پورٹ اور پرنٹر کا IP ایڈریس چیک کریں (نیٹ ورک پرنٹر کا IP بدل سکتا ہے)</li><li>ٹیسٹ پیج پرنٹ کریں؛ دوسرے پی سی سے آزمائیں کہ مسئلہ پرنٹر کا ہے یا پی سی کا</li><li>پرزہ بدلیں یا وینڈر کو بھیجیں</li></ol>`,
                        `<ol><li>Bijli, kaghaz, toner, phansa kaghaz, taarein ya Wi-Fi/network link</li><li>Print qatar kholein: ruki hui jobs saaf karein; <strong>Print Spooler</strong> service restart karein</li><li>Driver, port aur printer ka IP address check karein (network printer ka IP badal sakta hai)</li><li>Test page print karein; doosray PC se aazmayen ke masla printer ka hai ya PC ka</li><li>Purza badlein ya vendor ko bhejein</li></ol>`]
                },
                {
                    q: ['Which remote desktop tools do you know, and how do you use them safely?', 'آپ کون سے ریموٹ ڈیسک ٹاپ ٹولز جانتے ہیں اور انہیں محفوظ طریقے سے کیسے استعمال کرتے ہیں؟', 'Aap kaun se remote desktop tools jaantay hain aur unhein mehfooz tareeqay se kaise istemal kartay hain?'],
                    a: [`<ul><li><strong>Tools:</strong> Windows Remote Desktop (RDP), Quick Assist, Microsoft Teams control, AnyDesk, TeamViewer</li><li><strong>Safe use:</strong> only approved tools, user consent, strong credentials with MFA, RDP behind a VPN (never open to the Internet), disconnect fully afterwards, log the session</li></ul><p>Remote support is faster for the user and cheaper for the organization, but it must be controlled.</p>`,
                        `<ul><li><strong>ٹولز:</strong> Windows Remote Desktop (RDP)، Quick Assist، Microsoft Teams کنٹرول، AnyDesk، TeamViewer</li><li><strong>محفوظ استعمال:</strong> صرف منظور شدہ ٹولز، صارف کی اجازت، MFA کے ساتھ مضبوط اسناد، RDP صرف VPN کے پیچھے (کبھی براہِ راست انٹرنیٹ پر نہیں)، بعد میں مکمل منقطع، سیشن ریکارڈ</li></ul><p>ریموٹ سپورٹ صارف کے لیے تیز اور ادارے کے لیے سستی ہے، مگر کنٹرول میں ہونی چاہیے۔</p>`,
                        `<ul><li><strong>Tools:</strong> Windows Remote Desktop (RDP), Quick Assist, Microsoft Teams control, AnyDesk, TeamViewer</li><li><strong>Mehfooz istemal:</strong> sirf manzoor shuda tools, user ki ijazat, MFA ke sath mazboot asnaad, RDP sirf VPN ke peechay (kabhi barah-e-raast internet par nahi), baad mein mukammal munqata, session record</li></ul><p>Remote support user ke liye tez aur idaray ke liye sasti hai, magar control mein honi chahiye.</p>`]
                },
                {
                    q: ['What is IT asset management and how would you do it?', 'آئی ٹی اثاثہ جات کا انتظام کیا ہے اور آپ کیسے کریں گے؟', 'IT asasa jaat ka intizam kya hai aur aap kaise karein gay?'],
                    a: [`<ul><li><strong>Goal:</strong> know what equipment and licences exist, who has them, and their condition</li><li><strong>Lifecycle:</strong> procure, tag and register (asset ID, serial, owner), deploy, maintain, retire and wipe data securely</li><li><strong>Tools:</strong> a spreadsheet to start; GLPI, Snipe-IT or the ticketing tool's asset module as it grows</li><li><strong>Practice:</strong> regular audits, warranty tracking, handover forms when equipment changes hands</li></ul>`,
                        `<ul><li><strong>مقصد:</strong> معلوم ہو کون سا سامان اور لائسنس ہے، کس کے پاس ہے اور کس حالت میں</li><li><strong>لائف سائیکل:</strong> خریداری، ٹیگ اور اندراج (اثاثہ ID، سیریل، مالک)، تعیناتی، دیکھ بھال، ریٹائر اور ڈیٹا کی محفوظ صفائی</li><li><strong>ٹولز:</strong> شروع میں اسپریڈ شیٹ؛ بڑھنے پر GLPI، Snipe-IT یا ٹکٹنگ ٹول کا اثاثہ ماڈیول</li><li><strong>عمل:</strong> باقاعدہ آڈٹ، وارنٹی کا ریکارڈ، سامان بدلنے پر حوالگی فارم</li></ul>`,
                        `<ul><li><strong>Maqsad:</strong> maloom ho kaun sa saman aur licence hai, kis ke paas hai aur kis halat mein</li><li><strong>Life cycle:</strong> kharidari, tag aur indraaj (asasa ID, serial, malik), tainaati, dekh bhaal, retire aur data ki mehfooz safai</li><li><strong>Tools:</strong> shuru mein spreadsheet; barhnay par GLPI, Snipe-IT ya ticketing tool ka asasa module</li><li><strong>Amal:</strong> baqaida audit, warranty ka record, saman badalnay par hawalgi form</li></ul>`]
                },
                {
                    q: ['How do you help protect patient data in a health setting?', 'ہیلتھ ماحول میں آپ مریضوں کے ڈیٹا کی حفاظت میں کیسے مدد کرتے ہیں؟', 'Health mahol mein aap mareezon ke data ki hifazat mein kaise madad kartay hain?'],
                    a: [`<ul><li><strong>Access control + MFA:</strong> only the right staff see records</li><li><strong>Encryption:</strong> laptops (BitLocker) and data in transit (HTTPS/VPN)</li><li><strong>Backups:</strong> tested, off-site</li><li><strong>Audit logs:</strong> know who opened what</li><li><strong>Habits:</strong> lock screens, no patient data on personal phones or public AI tools, report incidents at once</li></ul>`,
                        `<ul><li><strong>رسائی کنٹرول + MFA:</strong> صرف درست عملہ ریکارڈ دیکھے</li><li><strong>انکرپشن:</strong> لیپ ٹاپس (BitLocker) اور منتقل ہوتا ڈیٹا (HTTPS/VPN)</li><li><strong>بیک اپ:</strong> جانچے ہوئے، باہر محفوظ</li><li><strong>آڈٹ لاگز:</strong> معلوم ہو کس نے کیا کھولا</li><li><strong>عادات:</strong> اسکرین لاک، مریضوں کا ڈیٹا ذاتی فون یا عوامی AI ٹولز میں نہیں، واقعہ فوراً رپورٹ</li></ul>`,
                        `<ul><li><strong>Rasai control + MFA:</strong> sirf durust amla record dekhay</li><li><strong>Encryption:</strong> laptops (BitLocker) aur muntaqil hota data (HTTPS/VPN)</li><li><strong>Backup:</strong> janchay huay, bahar mehfooz</li><li><strong>Audit logs:</strong> maloom ho kis ne kya khola</li><li><strong>Aadaat:</strong> screen lock, mareezon ka data zaati phone ya awami AI tools mein nahi, waqia foran report</li></ul>`]
                }
            ]
        },
        {
            n: 8, icon: '🎯',
            t: ['Section 8: Scenario Questions with Model Answers', 'حصہ 8: صورتحال کے سوالات اور نمونہ جوابات', 'Hissa 8: Soorat-e-Haal ke Sawalat aur Namoona Jawabat'],
            d: ['Scenarios test judgment under pressure. Structure: understand, act, communicate, prevent.',
                'صورتحال کے سوالات دباؤ میں فیصلہ پرکھتے ہیں۔ ترتیب: سمجھیں، عمل کریں، اطلاع دیں، آئندہ روکیں۔',
                'Soorat-e-haal ke sawalat dabao mein faisla parakhtay hain. Tarteeb: samjhein, amal karein, itlaa dein, aainda rokein.'],
            items: [
                {
                    q: ['S1. A doctor cannot join a video consultation that starts in 5 minutes. What do you do?', 'صورتحال 1: ایک ڈاکٹر 5 منٹ بعد شروع ہونے والی ویڈیو مشاورت میں شامل نہیں ہو پا رہے۔ آپ کیا کریں گے؟', 'Soorat-e-haal 1: Aik doctor 5 minute baad shuru honay wali video mashwaray mein shamil nahi ho paa rahay. Aap kya karein gay?'],
                    a: [`<p>This is P1: a patient is waiting.</p><ol><li>Stay calm, ask: which error, which device, which app?</li><li>Check basics fast: internet, camera and mic permissions, app version, headset</li><li>Remote in, or move the doctor to a backup laptop or phone</li><li>Fallback: join the consultation by phone so the patient is not left waiting</li><li>Afterwards find the root cause, document it, and tell the team</li></ol>`,
                        `<p>یہ P1 ہے: مریض انتظار میں ہے۔</p><ol><li>پرسکون رہیں، پوچھیں: کون سی خرابی، کون سی ڈیوائس، کون سی ایپ؟</li><li>بنیادی چیزیں جلدی چیک کریں: انٹرنیٹ، کیمرہ اور مائیک کی اجازتیں، ایپ ورژن، ہیڈ سیٹ</li><li>ریموٹ سے جڑیں یا ڈاکٹر کو متبادل لیپ ٹاپ یا فون پر منتقل کریں</li><li>متبادل: فون سے مشاورت میں شامل کریں تاکہ مریض انتظار میں نہ رہے</li><li>بعد میں اصل وجہ ڈھونڈیں، ریکارڈ کریں اور ٹیم کو بتائیں</li></ol>`,
                        `<p>Yeh P1 hai: mareez intizar mein hai.</p><ol><li>Pursukoon rahein, poochein: kaun si kharabi, kaun si device, kaun si app?</li><li>Bunyadi cheezein jaldi check karein: internet, camera aur mic ki ijazatein, app version, headset</li><li>Remote se jurein ya doctor ko mutabadil laptop ya phone par muntaqil karein</li><li>Mutabadil: phone se mashwaray mein shamil karein taake mareez intizar mein na rahay</li><li>Baad mein asal wajah dhoondein, record karein aur team ko batayen</li></ol>`]
                },
                {
                    q: ['S2. The printer for a whole department stops working. What do you do?', 'صورتحال 2: پورے شعبے کا پرنٹر کام کرنا بند کر دیتا ہے۔ آپ کیا کریں گے؟', 'Soorat-e-haal 2: Poray shobay ka printer kaam karna band kar deta hai. Aap kya karein gay?'],
                    a: [`<ol><li>Scope: one PC or everyone? If everyone, the printer or print server is the cause</li><li>Check the printer (power, paper, network) and the print server / Spooler service</li><li>Restart the service, clear stuck jobs, print a test page</li><li>Give a temporary printer so work continues</li><li>Tell the department the expected time, then prevent repeats (monitoring, spare toner)</li></ol>`,
                        `<ol><li>دائرہ: ایک پی سی یا سب؟ اگر سب تو وجہ پرنٹر یا پرنٹ سرور ہے</li><li>پرنٹر (بجلی، کاغذ، نیٹ ورک) اور پرنٹ سرور / Spooler سروس چیک کریں</li><li>سروس ری اسٹارٹ، رکی جابز صاف، ٹیسٹ پیج</li><li>عارضی پرنٹر دیں تاکہ کام چلتا رہے</li><li>شعبے کو متوقع وقت بتائیں، پھر دوبارہ سے بچاؤ (مانیٹرنگ، اضافی ٹونر)</li></ol>`,
                        `<ol><li>Daira: aik PC ya sab? Agar sab to wajah printer ya print server hai</li><li>Printer (bijli, kaghaz, network) aur print server / Spooler service check karein</li><li>Service restart, ruki jobs saaf, test page</li><li>Arzi printer dein taake kaam chalta rahay</li><li>Shobay ko mutawaqqa waqt batayen, phir dobara se bachao (monitoring, izafi toner)</li></ol>`]
                },
                {
                    q: ['S3. A user clicked a suspicious link in an email. What do you do?', 'صورتحال 3: ایک صارف نے ای میل کے مشکوک لنک پر کلک کر دیا۔ آپ کیا کریں گے؟', 'Soorat-e-haal 3: Aik user ne email ke mushkook link par click kar diya. Aap kya karein gay?'],
                    a: [`<ol><li>Disconnect the device from the network (cable out, Wi-Fi off) but do not power it down</li><li>Report to the security contact / L3 at once and note the time and the email</li><li>Reset the user's password and sign out all sessions; check MFA</li><li>Scan for malware; look for a forwarding rule or odd sign-ins</li><li>Warn others about the email and run a short awareness reminder</li></ol><p>Be supportive, not blaming: people report faster when they are not afraid.</p>`,
                        `<ol><li>ڈیوائس کو نیٹ ورک سے منقطع کریں (کیبل نکالیں، Wi-Fi بند) مگر بند نہ کریں</li><li>فوراً سیکیورٹی رابطہ / L3 کو رپورٹ کریں اور وقت اور ای میل نوٹ کریں</li><li>صارف کا پاس ورڈ ری سیٹ، تمام سیشنز سائن آؤٹ؛ MFA چیک کریں</li><li>میلویئر اسکین؛ فارورڈنگ رول یا عجیب سائن اِن دیکھیں</li><li>دوسروں کو اس ای میل سے خبردار کریں اور مختصر آگاہی یاد دہانی کریں</li></ol><p>مددگار رہیں، الزام نہ دیں: لوگ ڈر نہ ہو تو جلد رپورٹ کرتے ہیں۔</p>`,
                        `<ol><li>Device ko network se munqata karein (cable nikalein, Wi-Fi band) magar band na karein</li><li>Foran security rabta / L3 ko report karein aur waqt aur email note karein</li><li>User ka password reset, tamam sessions sign out; MFA check karein</li><li>Malware scan; forwarding rule ya ajeeb sign-in dekhein</li><li>Doosron ko is email se khabardar karein aur mukhtasar agahi yaad dehani karein</li></ol><p>Madadgar rahein, ilzam na dein: log dar na ho to jald report kartay hain.</p>`]
                },
                {
                    q: ['S4. A laptop with patient data is lost or stolen. What do you do?', 'صورتحال 4: مریضوں کے ڈیٹا والا لیپ ٹاپ گم یا چوری ہو جاتا ہے۔ آپ کیا کریں گے؟', 'Soorat-e-haal 4: Mareezon ke data wala laptop gum ya chori ho jata hai. Aap kya karein gay?'],
                    a: [`<ol><li>Report immediately to the supervisor and security; this is a data incident</li><li>Remote lock or wipe the device if management is enabled</li><li>Disable the user's accounts and sessions; reset passwords</li><li>Find out what data was on it and whether the disk was encrypted</li><li>Write the incident report; update the asset register; review encryption policy</li></ol>`,
                        `<ol><li>فوراً سپروائزر اور سیکیورٹی کو رپورٹ کریں؛ یہ ڈیٹا کا واقعہ ہے</li><li>اگر مینجمنٹ فعال ہو تو ڈیوائس ریموٹ لاک یا وائپ کریں</li><li>صارف کے اکاؤنٹس اور سیشنز بند کریں؛ پاس ورڈ ری سیٹ</li><li>معلوم کریں اس میں کیا ڈیٹا تھا اور ڈسک انکرپٹڈ تھی یا نہیں</li><li>واقعے کی رپورٹ لکھیں؛ اثاثہ رجسٹر اپ ڈیٹ؛ انکرپشن پالیسی کا جائزہ</li></ol>`,
                        `<ol><li>Foran supervisor aur security ko report karein; yeh data ka waqia hai</li><li>Agar management faal ho to device remote lock ya wipe karein</li><li>User ke accounts aur sessions band karein; password reset</li><li>Maloom karein is mein kya data tha aur disk encrypted thi ya nahi</li><li>Waqiye ki report likhein; asasa register update; encryption policy ka jaiza</li></ol>`]
                }
            ]
        }
    );

    sections.forEach(s => s.items.forEach(it => { if (it.q === 'XX') console.warn('placeholder left in section', s.n); }));

    const mcq = (q, o, c) => ({ q, o, c });
    const mcqs = [
        mcq(['Level 2 support is best described as:', 'Level 2 سپورٹ کی بہترین وضاحت:', 'Level 2 support ki behtareen wazahat:'], ['Only password resets', 'Deeper troubleshooting, installs, accounts and network fixes', 'Writing software code', 'Buying equipment'], 1),
        mcq(['What is the first step of troubleshooting?', 'ٹربل شوٹنگ کا پہلا قدم کیا ہے؟', 'Troubleshooting ka pehla qadam kya hai?'], ['Reinstall Windows', 'Identify the problem', 'Replace hardware', 'Escalate immediately'], 1),
        mcq(['Which Windows command shows IP configuration?', 'Windows کی کون سی کمانڈ IP کنفیگریشن دکھاتی ہے؟', 'Windows ki kaun si command IP configuration dikhati hai?'], ['ipconfig', 'ping', 'nslookup', 'tracert'], 0),
        mcq(['What does DHCP do?', 'DHCP کیا کرتا ہے؟', 'DHCP kya karta hai?'], ['Translates names to IPs', 'Assigns IP addresses automatically', 'Encrypts traffic', 'Connects two networks'], 1),
        mcq(['ping 8.8.8.8 works but ping google.com fails. Likely cause?', 'ping 8.8.8.8 چلتا ہے مگر ping google.com نہیں۔ ممکنہ وجہ؟', 'ping 8.8.8.8 chalta hai magar ping google.com nahi. Mumkina wajah?'], ['Cut cable', 'DNS problem', 'Router is off', 'Dead battery'], 1),
        mcq(['Group Policy objects in Active Directory are called:', 'Active Directory میں گروپ پالیسی آبجیکٹس کہلاتے ہیں:', 'Active Directory mein group policy objects kehlatay hain:'], ['GPO', 'DNS', 'VLAN', 'VPN'], 0),
        mcq(['In Active Directory, which container organizes users and computers?', 'Active Directory میں یوزرز اور کمپیوٹرز کو کون سا کنٹینر ترتیب دیتا ہے؟', 'Active Directory mein users aur computers ko kaun sa container tarteeb deta hai?'], ['OU (Organizational Unit)', 'VLAN', 'Subnet', 'Port'], 0),
        mcq(['What does "least privilege" mean?', '"Least privilege" کا کیا مطلب ہے؟', '"Least privilege" ka kya matlab hai?'], ['Everyone is admin', 'Users get only the access they need', 'Share one admin password', 'No passwords at all'], 1),
        mcq(['Before resetting a password you must:', 'پاس ورڈ ری سیٹ کرنے سے پہلے ضروری ہے:', 'Password reset karnay se pehlay zaroori hai:'], ['Verify the user\'s identity', 'Email the password to anyone', 'Skip the ticket', 'Ask for the old password in chat'], 0),
        mcq(['Which Windows tool shows error and warning logs?', 'Windows کا کون سا ٹول ایرر اور وارننگ لاگز دکھاتا ہے؟', 'Windows ka kaun sa tool error aur warning logs dikhata hai?'], ['Event Viewer', 'Notepad', 'Paint', 'Calculator'], 0),
        mcq(['Which mode loads minimal drivers to fix boot problems?', 'بوٹ مسائل حل کرنے کے لیے کون سا موڈ کم سے کم ڈرائیورز لوڈ کرتا ہے؟', 'Boot masail hal karnay ke liye kaun sa mode kam se kam drivers load karta hai?'], ['Safe Mode', 'Sleep mode', 'Airplane mode', 'Tablet mode'], 0),
        mcq(['Print jobs are stuck in the queue. Which service do you restart?', 'پرنٹ جابز قطار میں پھنسی ہیں۔ کون سی سروس ری اسٹارٹ کریں گے؟', 'Print jobs qatar mein phansi hain. Kaun si service restart karein gay?'], ['Print Spooler', 'DHCP Client', 'Windows Search', 'Bluetooth'], 0),
        mcq(['Before taking remote control of a user\'s PC you must:', 'صارف کے پی سی کا ریموٹ کنٹرول لینے سے پہلے ضروری ہے:', 'User ke PC ka remote control lene se pehlay zaroori hai:'], ['Get the user\'s consent', 'Change their password', 'Install games', 'Copy their files'], 0),
        mcq(['IT asset management means:', 'آئی ٹی اثاثہ جات کے انتظام کا مطلب:', 'IT asasa jaat ke intizam ka matlab:'], ['Tracking devices and licences through their lifecycle', 'Only buying computers', 'Cleaning the office', 'Writing policies only'], 0),
        mcq(['The 3-2-1 backup rule means:', '3-2-1 بیک اپ اصول کا مطلب:', '3-2-1 backup usool ka matlab:'], ['3 copies, 2 media types, 1 off-site', '3 servers, 2 routers, 1 switch', '3 passwords, 2 admins, 1 user', '3 backups per hour'], 0),
        mcq(['A doctor cannot join a call in 5 minutes. Best response?', 'ڈاکٹر 5 منٹ میں کال میں شامل نہیں ہو سکتے۔ بہترین ردعمل؟', 'Doctor 5 minute mein call mein shamil nahi ho saktay. Behtareen radd-e-amal?'], ['Ask them to wait until tomorrow', 'Check basics fast and offer a backup device or phone', 'Reinstall Windows', 'Wait for the queue'], 1),
        mcq(['SLA stands for:', 'SLA کا مطلب:', 'SLA ka matlab:'], ['Service Level Agreement', 'System Login Access', 'Secure LAN Adapter', 'Software Licence Authority'], 0),
        mcq(['When do you escalate to Level 3?', 'آپ L3 کو کب اوپر بھیجتے ہیں؟', 'Aap L3 ko kab oopar bhejtay hain?'], ['When it needs access or skills beyond L2, with clear notes', 'Immediately for every ticket', 'Never', 'Only on Fridays'], 0),
        mcq(['A user clicked a phishing link. First action?', 'صارف نے فشنگ لنک پر کلک کر دیا۔ پہلا قدم؟', 'User ne phishing link par click kar diya. Pehla qadam?'], ['Disconnect the device from the network and report it', 'Delete all files', 'Forward the email to friends', 'Ignore it'], 0),
        mcq(['Which best protects patient data on a laptop?', 'لیپ ٹاپ پر مریض کے ڈیٹا کی بہترین حفاظت کون سی ہے؟', 'Laptop par mareez ke data ki behtareen hifazat kaun si hai?'], ['Disk encryption and MFA', 'One shared password', 'Disabling updates', 'Public Wi-Fi'], 0)
    ];

    const plan = {
        title: ['7-Day Preparation Plan', '7 دن کا تیاری منصوبہ', '7 Din ka Tayari Mansooba'],
        days: [
            [['Day 1', 'دن 1', 'Din 1'], ['The post and HR', 'آسامی اور ایچ آر', 'Asami aur HR'], ['Sections 1 and 2. Write and rehearse "Tell me about yourself" aloud.', 'حصے 1 اور 2۔ "اپنے بارے میں بتائیں" لکھ کر بلند آواز میں مشق کریں۔', 'Hissay 1 aur 2. "Apne baray mein bataiye" likh kar buland awaz mein mashq karein.']],
            [['Day 2', 'دن 2', 'Din 2'], ['Support process', 'سپورٹ کا عمل', 'Support ka amal'], ['Section 3. Learn the 6-step method and practise saying it aloud on a sample problem.', 'حصہ 3۔ 6 قدمی طریقہ سیکھیں اور نمونہ مسئلے پر بلند آواز میں بیان کریں۔', 'Hissa 3. 6 qadmi tareeqa seekhein aur namoona masle par buland awaz mein bayan karein.']],
            [['Day 3', 'دن 3', 'Din 3'], ['Windows and hardware', 'Windows اور ہارڈ ویئر', 'Windows aur hardware'], ['Section 4. Install Windows in a free virtual machine (VirtualBox) and explore Event Viewer.', 'حصہ 4۔ مفت ورچوئل مشین (VirtualBox) میں Windows انسٹال کریں اور Event Viewer دیکھیں۔', 'Hissa 4. Muft virtual machine (VirtualBox) mein Windows install karein aur Event Viewer dekhein.']],
            [['Day 4', 'دن 4', 'Din 4'], ['Networking', 'نیٹ ورکنگ', 'Networking'], ['Section 5. Run ipconfig, ping, tracert and nslookup on your own PC and read the output.', 'حصہ 5۔ اپنے پی سی پر ipconfig، ping، tracert اور nslookup چلا کر نتیجہ پڑھیں۔', 'Hissa 5. Apne PC par ipconfig, ping, tracert aur nslookup chala kar nateeja parhein.']],
            [['Day 5', 'دن 5', 'Din 5'], ['AD and cloud suites', 'AD اور کلاؤڈ سوئٹس', 'AD aur cloud suites'], ['Section 6. Build a small lab (Windows Server evaluation) or explore a Microsoft 365 / Google Workspace trial admin console.', 'حصہ 6۔ چھوٹی لیب (Windows Server ایویلیوایشن) بنائیں یا Microsoft 365 / Google Workspace ٹرائل ایڈمن کنسول دیکھیں۔', 'Hissa 6. Chhoti lab (Windows Server evaluation) banayen ya Microsoft 365 / Google Workspace trial admin console dekhein.']],
            [['Day 6', 'دن 6', 'Din 6'], ['Printers, assets, scenarios', 'پرنٹرز، اثاثے، صورتحال', 'Printers, asasay, soorat-e-haal'], ['Sections 7 and 8. Take the practice test below.', 'حصے 7 اور 8۔ نیچے دیا گیا پریکٹس ٹیسٹ دیں۔', 'Hissay 7 aur 8. Neechay diya gaya practice test dein.']],
            [['Day 7', 'دن 7', 'Din 7'], ['Mock interview', 'مشقی انٹرویو', 'Mashqi interview'], ['Mock interview with a friend plus a practical drill (reset a password, map a printer, fix a network). Arrange documents, sleep early.', 'دوست کے ساتھ مشقی انٹرویو اور عملی مشق (پاس ورڈ ری سیٹ، پرنٹر میپ، نیٹ ورک حل)۔ دستاویزات تیار، جلدی سوئیں۔', 'Dost ke sath mashqi interview aur amli mashq (password reset, printer map, network hal). Dastawezat tayyar, jaldi soyen.']]
        ]
    };

    const tips = {
        title: ['Top Recommendations', 'اہم سفارشات', 'Aham Sifarishat'],
        items: [
            [`<strong>Expect a practical test:</strong> install Windows, reset a password, fix a network or printer. Practise in a virtual machine.`, `<strong>عملی ٹیسٹ متوقع ہے:</strong> Windows انسٹال، پاس ورڈ ری سیٹ، نیٹ ورک یا پرنٹر حل۔ ورچوئل مشین میں مشق کریں۔`, `<strong>Amli test mutawaqqa hai:</strong> Windows install, password reset, network ya printer hal. Virtual machine mein mashq karein.`],
            [`<strong>Think aloud:</strong> say your troubleshooting steps. Panels reward a calm, structured method.`, `<strong>بلند آواز میں سوچیں:</strong> اپنے ٹربل شوٹنگ کے قدم بیان کریں۔ پینل پرسکون اور منظم طریقے کی قدر کرتا ہے۔`, `<strong>Buland awaz mein sochein:</strong> apne troubleshooting ke qadam bayan karein. Panel pursukoon aur munazzam tareeqay ki qadar karta hai.`],
            [`<strong>Show empathy:</strong> your users are doctors and call agents under time pressure; a patient is waiting.`, `<strong>ہمدردی دکھائیں:</strong> آپ کے صارفین وقت کے دباؤ میں ڈاکٹرز اور کال ایجنٹس ہیں؛ مریض انتظار میں ہے۔`, `<strong>Hamdardi dikhayen:</strong> aap ke users waqt ke dabao mein doctors aur call agents hain; mareez intizar mein hai.`],
            [`<strong>Be honest about Active Directory and M365:</strong> they are "helpful", not required. Say how you practised in a lab.`, `<strong>Active Directory اور M365 کے بارے میں ایماندار رہیں:</strong> یہ "فائدہ مند" ہیں، لازمی نہیں۔ بتائیں لیب میں کیسے مشق کی۔`, `<strong>Active Directory aur M365 ke baray mein imandar rahein:</strong> yeh "faida mand" hain, lazmi nahi. Batayen lab mein kaise mashq ki.`],
            [`<strong>Talk about documentation:</strong> tickets, knowledge base and handover notes show professionalism.`, `<strong>دستاویز بندی کا ذکر کریں:</strong> ٹکٹس، نالج بیس اور حوالگی نوٹس پیشہ ورانہ انداز دکھاتے ہیں۔`, `<strong>Dastawez bandi ka zikr karein:</strong> tickets, knowledge base aur hawalgi notes pesha warana andaz dikhatay hain.`],
            [`<strong>Check documents the night before:</strong> CNIC, degrees, domicile and experience letters, plus any certificates (CompTIA, CCNA, Microsoft, Google).`, `<strong>دستاویزات رات کو چیک کریں:</strong> CNIC، ڈگریاں، ڈومیسائل اور تجربے کے خطوط، اور کوئی بھی سرٹیفکیٹ (CompTIA، CCNA، Microsoft، Google)۔`, `<strong>Dastawezat raat ko check karein:</strong> CNIC, degrees, domicile aur tajurbay ke khutoot, aur koi bhi certificate (CompTIA, CCNA, Microsoft, Google).`]
        ]
    };

    InterviewEngine.mount({
        id: 'l2',
        rootId: 'l2-interview',
        contentId: 'l2-interview-content',
        store: 'bpscL2',
        mcqSubject: 'l2Interview',
        sections, plan, tips, mcqs,
        testTitle: ['Practice Test - Check Your Preparation!', 'پریکٹس ٹیسٹ: اپنی تیاری جانچیں!', 'Practice Test: Apni Tayari Jaanchein!']
    });
});
