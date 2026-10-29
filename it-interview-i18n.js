// Urdu (ur) and Roman Urdu (rm) translations for the Assistant IT Developer interview section.
// Keys: "<section>.<question>" for Q&A, "sec<N>" for section title/description.
// Technical terms (SQL, OOP, DNS, Git...) deliberately stay in English, as they are used in real interviews.
window.IT_I18N = {
    ui: {
        ur: {
            progress: 'آپ کی تیاری', studied: 'مطالعہ شدہ', of: 'میں سے', sections: 'حصے', open: 'کھولیں',
            langLabel: 'زبان', done: 'مکمل', reset: 'ری سیٹ'
        },
        rm: {
            progress: 'Aap ki Tayari', studied: 'Parh liye', of: 'mein se', sections: 'Hissay', open: 'Kholein',
            langLabel: 'Zubaan', done: 'Mukammal', reset: 'Reset'
        }
    },

    ur: {
        sec1: { t: 'حصہ 1: ادارے اور آسامی کو جانیں', d: 'انٹرویو لینے والے ان امیدواروں کو پسند کرتے ہیں جو پہلے سے تیاری کر کے آئیں۔ اس حصے کو سب سے پہلے یاد کریں۔' },
        sec2: { t: 'حصہ 2: انٹرویو کی حکمتِ عملی اور ایچ آر سوالات', d: 'سرکاری کنٹریکٹ انٹرویو میں پینل چار چیزیں دیکھتا ہے: متعلقہ مہارت، ایمانداری، رویہ اور مقامی موزونیت۔ ایچ آر کے جوابات بھی تکنیکی جوابات جتنے ہی اہم ہیں۔' },
        sec3: { t: 'حصہ 3: پروگرامنگ اور سافٹ ویئر کی بنیادیں', d: 'پینل زیادہ تر بنیادی سوالات پوچھے گا اور آپ کے اپنے پراجیکٹس کی مثالیں مانگے گا۔ تصور سمجھیں، پھر ایک لائن کی مثال دیں۔' },
        sec4: { t: 'حصہ 4: ڈیٹا بیس اور ایس کیو ایل', d: 'چونکہ PIU پراجیکٹ، ٹھیکیدار اور مالیاتی ڈیٹا سنبھالتا ہے، اس لیے ڈیٹا بیس کے سوالات کا امکان بہت زیادہ ہے۔' },
        sec5: { t: 'حصہ 5: ویب ڈویلپمنٹ', d: 'BSDI کی اپنی ویب سائٹ (ہوم، ہمارے بارے میں، ٹیم، خبریں، گیلری، نوکریاں، رابطہ) ویسا ہی نظام ہے جسے آپ سنبھالیں گے۔ انٹرویو سے پہلے اسے دیکھیں اور سوچیں کہ آپ کیا بہتر کریں گے۔' },
        sec6: { t: 'حصہ 6: نیٹ ورکنگ اور آئی ٹی سپورٹ', d: 'ایک چھوٹے سرکاری یونٹ میں اسسٹنٹ آئی ٹی ڈویلپر اکثر دفتر کے آئی ٹی مسائل کا بھی پہلا رابطہ ہوتا ہے۔' },
        sec7: { t: 'حصہ 7: سائبر سیکیورٹی اور سرکاری آئی ٹی آگاہی', d: 'سرکاری ڈیٹا (مالیات، ٹھیکیدار، ذاتی معلومات) حملہ آوروں کا ہدف ہوتا ہے۔ سیکیورٹی کی سمجھ آپ کو دوسروں سے نمایاں کرتی ہے۔' },
        sec8: { t: 'حصہ 8: پراجیکٹ مانیٹرنگ، ایم آئی ایس اور آفس ٹولز', d: 'یہاں آپ نمایاں ہو سکتے ہیں: دکھائیں کہ آپ سمجھتے ہیں PIU کو کیا چاہیے، صرف کوڈنگ نہیں۔' },
        sec9: { t: 'حصہ 9: صورتحال پر مبنی سوالات اور نمونہ جوابات', d: 'صورتحال کے سوالات آپ کی فیصلہ سازی پرکھتے ہیں۔ ترتیب: سمجھیں، عمل کریں، اطلاع دیں، آئندہ روکیں۔' },

        '1.1': { q: 'سوال 1: BSDI کیا ہے اور PIU کیا کام کرتا ہے؟', a: `
            <p><strong>BSDI = بلوچستان اسپیشل ڈیولپمنٹ انیشی ایٹو۔</strong> حکومتِ بلوچستان کا ترقیاتی پروگرام جسے محکمہ منصوبہ بندی و ترقیات کے تحت <strong>پروگرام امپلیمنٹیشن یونٹ (PIU)</strong> چلاتا ہے۔</p>
            <ul>
                <li><strong>شعبے:</strong> تعلیم (اسکول)، صحت، صاف پانی، سڑکیں/پل/سرکاری عمارتیں، کمیونٹی ڈیولپمنٹ</li>
                <li><strong>PIU کا کردار:</strong> عملدرآمد کرنے والا بازو: منصوبہ بندی، ٹھیکیداروں کا انتخاب، معیار کی نگرانی، مالی انتظام اور رپورٹنگ، متعلقہ اداروں سے رابطہ</li>
                <li><strong>دائرہ:</strong> ویب سائٹ کے مطابق تمام اضلاع (35) اور 949 منصوبے</li>
                <li><strong>اقدار:</strong> شفاف حکمرانی، کمیونٹی کی شمولیت، معیار، پائیدار ترقی</li>
            </ul>
            <div class="highlight-box"><p><strong>💡 استعمال:</strong> اپنی آئی ٹی مہارت کو ادارے کے مشن سے جوڑیں: "949 منصوبوں کو ٹریک کرنے کے لیے قابلِ اعتماد نظام چاہیے، یہاں میں مدد کر سکتا ہوں۔"</p></div>` },
        '1.2': { q: 'سوال 2: اشتہار کے وہ حقائق جو مجھے معلوم ہونے چاہییں؟', a: `
            <ul>
                <li><strong>آسامی:</strong> اسسٹنٹ آئی ٹی ڈویلپر، BPS-06، کل 02 آسامیاں (مجموعی 09)</li>
                <li><strong>نوعیت:</strong> کنٹریکٹ، ابتدائی 1 سال، کارکردگی اور پالیسی پر توسیع</li>
                <li><strong>مقام:</strong> کوئٹہ</li>
                <li><strong>اہلیت:</strong> صرف بلوچستان کا ڈومیسائل رکھنے والے</li>
                <li><strong>عمر:</strong> 23 تا 37 سال</li>
                <li><strong>حوالہ:</strong> AB No. 3852 / 1-10-2026</li>
                <li><strong>انٹرویو:</strong> صرف شارٹ لسٹ امیدوار، TA/DA نہیں</li>
            </ul>` },
        '1.3': { q: 'سوال 3: PIU میں اسسٹنٹ آئی ٹی ڈویلپر حقیقت میں کیا کرے گا؟', a: `
            <p><strong>نوٹ:</strong> اشتہار میں ذمہ داریاں درج نہیں؛ یہ فہرست اندازے پر مبنی ہے۔ کہیں: "میری سمجھ کے مطابق کردار میں شامل ہو گا..."</p>
            <ol>
                <li>BSDI ویب سائٹ کی دیکھ بھال (خبریں، نوکریاں، گیلری، ٹینڈر)</li>
                <li>پراجیکٹ مانیٹرنگ سسٹم (MIS): پراجیکٹ کی حالت، پیش رفت، بجٹ، ضلع وار رپورٹس</li>
                <li>ڈیٹا مینجمنٹ: ڈیٹا بیس، Excel رپورٹس، بیک اپ</li>
                <li>پروگرام کوآرڈینیٹر کے لیے ڈیش بورڈ اور رپورٹس</li>
                <li>دفتر کی آئی ٹی سپورٹ: کمپیوٹر، پرنٹر، نیٹ ورک، ای میل</li>
                <li>سیکیورٹی: پاس ورڈ، بیک اپ، رسائی کا کنٹرول</li>
                <li>دستاویزات اور عملے کی تربیت</li>
            </ol>` },
        '1.4': { q: 'سوال 4: انٹرویو سے پہلے ان باتوں کی دوبارہ تصدیق کریں', a: `
            <ul>
                <li><strong>پتے میں فرق:</strong> اشتہار میں بنگلہ نمبر 19A اور ویب سائٹ پر 13-C ہے۔ کال لیٹر دیکھیں یا 081-4245963 پر فون کر کے مقام کی تصدیق کریں۔</li>
                <li><strong>ای میل میں فرق:</strong> اشتہار میں piubsdi@gmail.com اور ویب سائٹ پر support@piu-bsdi.org۔ جو کال لیٹر پر ہو وہی استعمال کریں۔</li>
                <li><strong>دستاویزات:</strong> CNIC، ڈومیسائل، ڈگریاں، تجربے کے سرٹیفکیٹ اور 2 تصاویر کی اصل اور تصدیق شدہ نقول ایک فائل میں ترتیب سے رکھیں۔</li>
                <li><strong>وقت:</strong> TA/DA نہیں ملے گا، ٹرانسپورٹ کی منصوبہ بندی کریں اور 30 منٹ پہلے پہنچیں۔</li>
            </ul>` },

        '2.1': { q: 'سوال 1: اپنے بارے میں بتائیں۔ (تقریباً ہمیشہ پہلا سوال)', a: `
            <p><strong>"حال، ماضی، مستقبل" فارمولا استعمال کریں، 60 تا 90 سیکنڈ:</strong></p>
            <div class="example-box"><h4>نمونہ جواب</h4>
            <p>"السلام علیکم۔ میرا نام ____ ہے۔ میں نے ____ سے کمپیوٹر سائنس/آئی ٹی میں ____ کیا ہے اور میرا تعلق ضلع ____ سے ہے۔ مجھے ویب ڈویلپمنٹ، ڈیٹا بیس اور بنیادی نیٹ ورکنگ آتی ہے، اور میں نے ____ جیسا پراجیکٹ بنایا ہے۔ میں BSDI میں اس لیے آنا چاہتا ہوں کہ یہ بلوچستان بھر میں تعلیم، صحت اور پانی کے منصوبوں پر کام کرتا ہے اور میں اپنی آئی ٹی مہارت سے اسے مزید شفاف بنانا چاہتا ہوں۔ میں جلد سیکھنے والا، وقت کا پابند اور ٹیم میں کام کرنے والا ہوں۔"</p></div>
            <p><strong>مشورہ:</strong> خالی جگہیں اپنی اصل معلومات سے بھریں۔ لفظ بہ لفظ رٹنے کے بجائے ڈھانچہ یاد کریں۔</p>` },
        '2.2': { q: 'سوال 2: آپ BSDI / PIU میں کیوں آنا چاہتے ہیں؟', a: `
            <ul>
                <li>میں اپنے صوبے کی خدمت کرنا چاہتا ہوں؛ BSDI کا کام اسکولوں، کلینکس اور پانی کی اسکیموں میں نظر آتا ہے۔</li>
                <li>سینکڑوں منصوبوں والے پروگرام کو مضبوط ڈیجیٹل ٹریکنگ چاہیے، جو میری مہارت سے میل کھاتی ہے۔</li>
                <li>بڑے پیمانے کے ڈیٹا اور رپورٹنگ کا حقیقی تجربہ ملے گا۔</li>
                <li>میں یہاں ترقی کر کے حصہ ڈالنا چاہتا ہوں، صرف گزرنا نہیں۔</li>
            </ul>
            <div class="highlight-box"><p><strong>پرہیز:</strong> "مجھے نوکری چاہیے" یا "تنخواہ اچھی ہے" مت کہیں۔ ایماندار رہیں مگر مشن پر توجہ دیں۔</p></div>` },
        '2.3': { q: 'سوال 3: ہم آپ ہی کو کیوں رکھیں، کسی اور کو کیوں نہیں؟', a: `
            <p>"میں تین طرح سے ضرورت پر پورا اترتا ہوں: پہلا، اس کردار کے مطابق تکنیکی مہارت (ویب، ڈیٹا بیس، سپورٹ)؛ دوسرا، میں مقامی امیدوار ہوں اور صوبے کے حالات سمجھتا ہوں؛ تیسرا، میں قابلِ اعتماد ہوں، ڈیڈ لائن پوری کرتا ہوں اور مسلسل سیکھتا ہوں۔ میں جلد کام شروع کر سکتا ہوں اور آپ کے موجودہ سسٹمز پر تربیت کے لیے تیار ہوں۔"</p>` },
        '2.4': { q: 'سوال 4: آپ کی خوبیاں اور خامیاں کیا ہیں؟', a: `
            <p><strong>خوبیاں:</strong> مسئلہ حل کرنا، جلد سیکھنا، نظم و ضبط، ٹیم ورک۔ ہر ایک کی ایک حقیقی مثال دیں۔</p>
            <div class="example-box"><h4>خامی (حقیقی مگر قابلِ اصلاح)</h4><p>"پہلے میں چھوٹی تفصیل کو مکمل کرنے میں بہت وقت لگاتا تھا۔ اب میں ہر کام کی وقت کی حد مقرر کرتا ہوں اور جلد فیڈ بیک لیتا ہوں، جس سے رفتار بہتر ہوئی ہے۔"</p></div>
            <p><strong>کبھی نہ کہیں:</strong> "مجھ میں کوئی خامی نہیں" یا ایسی بات جو آئی ٹی کے کام کے لیے نااہل کر دے۔</p>` },
        '2.5': { q: 'سوال 5: آپ کا ایک سال کا کنٹریکٹ ہے۔ اگر توسیع نہ ہوئی تو؟', a: `
            <p>"میں کنٹریکٹ کی شرائط سمجھتا ہوں اور ان سے مطمئن ہوں۔ میرا مقصد بہترین کام کرنا ہے تاکہ توسیع کارکردگی کی بنیاد پر ہو۔ بہرحال یہ تجربہ میرے کیریئر میں مدد دے گا۔"</p>
            <p>اس سے آپ کی پختگی ظاہر ہوتی ہے اور یہ کہ آپ نے اشتہار پڑھا ہے۔</p>` },
        '2.6': { q: 'سوال 6: آپ دباؤ اور سخت ڈیڈ لائن کو کیسے سنبھالتے ہیں؟', a: `
            <ol>
                <li>کاموں کو اہمیت اور فوری ضرورت کے مطابق ترتیب دیں</li>
                <li>کام کو چھوٹے مراحل میں بانٹیں</li>
                <li>اگر تاخیر کا خدشہ ہو تو پہلے سے اطلاع دیں</li>
                <li>پرسکون رہ کر حل پر توجہ دیں</li>
            </ol>
            <p>فائنل ایئر پراجیکٹ یا دفتر کے کسی ہنگامی کام کی مختصر مثال ضرور دیں۔</p>` },
        '2.7': { q: 'سوال 7: کیا آپ اضافی وقت، اضلاع کے دورے یا غیر آئی ٹی کام کے لیے تیار ہیں؟', a: `
            <p>PIU میں ایماندارانہ اور بہترین جواب: "جی ہاں۔ پروگرام یونٹ ڈیڈ لائن پر چلتا ہے اور میں ٹیم کی ہر ضرورت میں مدد کے لیے تیار ہوں، ضرورت پڑنے پر فیلڈ وزٹ سمیت۔"</p>
            <p>وہ وعدہ نہ کریں جو آپ پورا نہیں کر سکتے، مگر لچک ضرور دکھائیں۔</p>` },
        '2.8': { q: 'سوال 8: کیا آپ کے پاس ہمارے لیے کوئی سوال ہے؟ (ہمیشہ 2 پوچھیں)', a: `
            <ul>
                <li>"پراجیکٹ مانیٹرنگ اور رپورٹنگ کے لیے اس وقت کون سے سسٹمز استعمال ہو رہے ہیں اور سب سے پہلے کیا بہتر کرنا چاہتے ہیں؟"</li>
                <li>"پہلے چھ مہینوں میں اس کردار کی کامیابی کیسی ہو گی؟"</li>
                <li>"کیا موجودہ پلیٹ فارمز پر تربیت دی جائے گی؟"</li>
            </ul>
            <p><strong>پہلے انٹرویو میں تنخواہ، چھٹیاں یا مراعات کے بارے میں نہ پوچھیں۔</strong></p>` },
        '2.9': { q: 'سوال 9: انٹرویو کے دن کے آداب', a: `
            <ul>
                <li>صاف، رسمی لباس (شلوار قمیض یا شرٹ پتلون)، سلیقہ مند حلیہ</li>
                <li>"السلام علیکم" کہیں، بیٹھنے کا کہا جائے تب بیٹھیں، پرسکون رہیں</li>
                <li>صرف چیئرمین سے نہیں، پورے پینل سے نظر ملائیں</li>
                <li>پورا سوال سنیں، مختصر وقفے کے بعد جواب دیں</li>
                <li>اگر معلوم نہ ہو: "مجھے یقین نہیں، مگر میری سمجھ یہ ہے... اور میں اسے سیکھ لوں گا۔" بناوٹ ہرگز نہیں</li>
                <li>موبائل خاموش، قلم، سی وی اور دستاویزات کی نقول ساتھ رکھیں</li>
                <li>آخر میں پینل کا شکریہ ادا کریں</li>
            </ul>` },

        '3.1': { q: 'سوال 1: پروگرامنگ لینگویج اور اسکرپٹنگ لینگویج میں کیا فرق ہے؟', a: `
            <ul>
                <li><strong>کمپائلڈ زبانیں</strong> (C، C++، Java) چلنے سے پہلے ترجمہ ہوتی ہیں، عموماً تیز۔</li>
                <li><strong>اسکرپٹنگ/انٹرپریٹڈ زبانیں</strong> (JavaScript، Python، PHP) چلتے وقت لائن بہ لائن چلتی ہیں، ڈویلپمنٹ جلد ہوتی ہے۔</li>
            </ul>
            <p>عملاً فرق دھندلا ہے؛ دونوں حقیقی ایپلی کیشنز کے لیے استعمال ہوتی ہیں۔</p>` },
        '3.2': { q: 'سوال 2: OOP اور اس کے چار ستون سمجھائیں۔', a: `
            <p><strong>Object-Oriented Programming</strong> کوڈ کو آبجیکٹس (ڈیٹا اور رویہ) کے گرد ترتیب دیتی ہے۔</p>
            <ul>
                <li><strong>Encapsulation:</strong> ڈیٹا چھپائیں، میتھڈز کے ذریعے دیں (مثلاً private balance اور deposit())</li>
                <li><strong>Abstraction:</strong> صرف ضروری دکھائیں (کار کا اسٹیئرنگ، انجن کی تفصیل نہیں)</li>
                <li><strong>Inheritance:</strong> چائلڈ کلاس پیرنٹ کلاس سے استفادہ کرے (Student اور Teacher، Person سے)</li>
                <li><strong>Polymorphism:</strong> ایک نام، مختلف رویہ (Circle اور Rectangle کا area())</li>
            </ul>` },
        '3.3': { q: 'سوال 3: الگورتھم، فلو چارٹ اور Big-O آسان الفاظ میں؟', a: `
            <ul>
                <li><strong>الگورتھم:</strong> مسئلہ حل کرنے کا قدم بہ قدم طریقہ</li>
                <li><strong>فلو چارٹ:</strong> الگورتھم کا علامتوں سے بنا خاکہ</li>
                <li><strong>Big-O:</strong> ان پٹ بڑھنے پر رفتار کیسے بدلتی ہے۔ فہرست میں ایک ایک کر کے تلاش O(n)، ترتیب شدہ فہرست پر binary search O(log n)۔</li>
            </ul>` },
        '3.4': { q: 'سوال 4: Array بمقابلہ Linked List، Stack بمقابلہ Queue؟', a: `
            <ul>
                <li><strong>Array:</strong> مقررہ سائز، index سے تیز رسائی، درمیان میں شامل کرنا سست</li>
                <li><strong>Linked list:</strong> لچکدار سائز، شامل/حذف تیز، random رسائی سست</li>
                <li><strong>Stack:</strong> LIFO (آخر میں آنے والا پہلے نکلے)، مثلاً Undo بٹن</li>
                <li><strong>Queue:</strong> FIFO (پہلے آنے والا پہلے نکلے)، مثلاً پرنٹ قطار</li>
            </ul>` },
        '3.5': { q: 'سوال 5: SDLC اور اس کے عام ماڈلز کیا ہیں؟', a: `
            <p><strong>Software Development Life Cycle:</strong> ضروریات، ڈیزائن، ڈویلپمنٹ، ٹیسٹنگ، ڈیپلائمنٹ، مینٹیننس۔</p>
            <ul>
                <li><strong>Waterfall:</strong> مراحل ترتیب وار؛ جب ضروریات طے ہوں</li>
                <li><strong>Agile:</strong> چھوٹے مرحلے اور مسلسل فیڈ بیک؛ جب ضروریات بدلتی ہوں</li>
                <li><strong>Prototype:</strong> پہلے نمونہ بنا کر صارف کی رائے لیں</li>
            </ul>
            <div class="highlight-box"><p>مقررہ قواعد مگر بدلتی رپورٹس والے سرکاری یونٹ کے لیے سادہ Agile (چھوٹی، بار بار فراہمی) اچھا جواب ہے۔</p></div>` },
        '3.6': { q: 'سوال 6: Git کیا ہے اور کیوں استعمال کریں؟', a: `
            <p><strong>Git</strong> ورژن کنٹرول سسٹم ہے: کوڈ کی تبدیلیوں کی تاریخ رکھتا ہے، ٹیم ورک ممکن بناتا ہے اور غلطی پر پچھلی حالت میں واپس جانے دیتا ہے۔</p>
            <ul>
                <li><code>git init</code>، <code>git add</code>، <code>git commit</code>: ٹریکنگ شروع کریں اور تبدیلیاں محفوظ کریں</li>
                <li><code>git branch</code>، <code>git merge</code>: الگ فیچرز پر کام</li>
                <li><code>git push</code>، <code>git pull</code>: GitHub جیسے ریموٹ سے ہم آہنگی</li>
            </ul>` },
        '3.7': { q: 'سوال 7: آپ سافٹ ویئر کی جانچ اور ڈیبگنگ کیسے کرتے ہیں؟', a: `
            <ul>
                <li>پہلے خرابی <strong>دوبارہ پیدا کریں</strong>، پھر error message غور سے پڑھیں</li>
                <li>براؤزر کنسول، logs یا debugger استعمال کریں؛ حالیہ تبدیلی دیکھیں</li>
                <li>الگ کریں: سب سے چھوٹی ناکام صورت تلاش کریں</li>
                <li><strong>ٹیسٹنگ کی اقسام:</strong> unit، integration، system، UAT</li>
                <li>غلط ان پٹ سے بھی ٹیسٹ کریں، صرف عام راستے سے نہیں</li>
            </ul>` },

        '4.1': { q: 'سوال 1: ڈیٹا بیس، DBMS اور RDBMS کیا ہیں؟', a: `
            <ul>
                <li><strong>Database:</strong> منظم ڈیٹا کا مجموعہ</li>
                <li><strong>DBMS:</strong> ڈیٹا بیس بنانے اور سنبھالنے کا سافٹ ویئر</li>
                <li><strong>RDBMS:</strong> ڈیٹا کو باہم جڑے ٹیبلز (صفوں اور کالمز) میں رکھتا ہے۔ مثالیں: MySQL، PostgreSQL، SQL Server، Oracle</li>
            </ul>` },
        '4.2': { q: 'سوال 2: Primary Key، Foreign Key اور Normalization سمجھائیں۔', a: `
            <ul>
                <li><strong>Primary key:</strong> ہر صف کو یکتا پہچان دیتی ہے (مثلاً ProjectID)۔ NULL یا دہرائی نہیں ہو سکتی۔</li>
                <li><strong>Foreign key:</strong> وہ کالم جو دوسرے ٹیبل کی primary key کی طرف اشارہ کرے (مثلاً Projects میں ContractorID)</li>
                <li><strong>Normalization:</strong> ٹیبلز کو منظم کر کے ڈیٹا کی تکرار اور خرابیاں کم کرنا (1NF، 2NF، 3NF)</li>
            </ul>
            <div class="example-box"><h4>BSDI طرز کی مثال</h4><p>ٹیبلز: <code>Districts</code>، <code>Projects</code>، <code>Contractors</code>، <code>Payments</code>۔ ایک پراجیکٹ ایک ضلع اور ایک ٹھیکیدار کا ہوتا ہے؛ ایک پراجیکٹ کی کئی ادائیگیاں ہو سکتی ہیں۔</p></div>` },
        '4.3': { q: 'سوال 3: بنیادی SQL کوئریز لکھیں (عملی سوال کا قوی امکان)۔', a: `
            <div class="formula-box" dir="ltr">
                <p><code>SELECT * FROM Projects WHERE District = 'Quetta';</code></p>
                <p><code>SELECT District, COUNT(*) AS Total FROM Projects GROUP BY District;</code></p>
                <p><code>SELECT p.Name, c.Name FROM Projects p JOIN Contractors c ON p.ContractorID = c.ID;</code></p>
                <p><code>UPDATE Projects SET Status = 'Completed' WHERE ID = 15;</code></p>
                <p><code>SELECT * FROM Projects ORDER BY Budget DESC LIMIT 5;</code></p>
            </div>
            <p><strong>UPDATE اور DELETE میں WHERE ہمیشہ یاد رکھیں۔</strong> ورنہ ہر صف بدل جائے گی۔</p>` },
        '4.4': { q: 'سوال 4: SQL joins کی اقسام اور کمانڈ گروپس؟', a: `
            <ul>
                <li><strong>INNER JOIN:</strong> صرف دونوں ٹیبلز میں ملنے والی صفیں</li>
                <li><strong>LEFT JOIN:</strong> بائیں ٹیبل کی تمام صفیں اور دائیں سے ملنے والی</li>
                <li><strong>RIGHT / FULL JOIN:</strong> الٹ اور مشترکہ صورتیں</li>
            </ul>
            <p><strong>کمانڈ گروپس:</strong> DDL (CREATE, ALTER, DROP)، DML (INSERT, UPDATE, DELETE)، DQL (SELECT)، DCL (GRANT, REVOKE)، TCL (COMMIT, ROLLBACK)۔</p>` },
        '4.5': { q: 'سوال 5: DELETE، TRUNCATE اور DROP میں فرق؟', a: `
            <ul>
                <li><strong>DELETE:</strong> منتخب صفیں ہٹاتا ہے؛ WHERE چلتا ہے؛ ٹرانزیکشن میں rollback ممکن</li>
                <li><strong>TRUNCATE:</strong> تمام صفیں تیزی سے ہٹاتا ہے؛ ٹیبل کا ڈھانچہ رہتا ہے</li>
                <li><strong>DROP:</strong> پورا ٹیبل (ڈھانچہ اور ڈیٹا) ختم</li>
            </ul>` },
        '4.6': { q: 'سوال 6: بیک اپ کیوں لیتے ہیں اور اچھا طریقہ کیا ہے؟', a: `
            <ul>
                <li>ہارڈ ویئر خرابی، غلطی سے حذف، ransomware اور آفات سے بچاتا ہے</li>
                <li><strong>3-2-1 اصول:</strong> 3 نقول، 2 مختلف ذرائع پر، 1 باہر کسی دوسری جگہ</li>
                <li>بیک اپ خودکار بنائیں اور باقاعدگی سے <strong>restore کر کے دیکھیں</strong>: جانچا نہ گیا بیک اپ، بیک اپ نہیں</li>
            </ul>` },

        '5.1': { q: 'سوال 1: HTML، CSS اور JavaScript کیا ہیں؟', a: `
            <ul>
                <li><strong>HTML:</strong> ویب پیج کا ڈھانچہ (عنوانات، پیراگراف، فارم، ٹیبل)</li>
                <li><strong>CSS:</strong> انداز اور ترتیب (رنگ، فاصلے، responsive design)</li>
                <li><strong>JavaScript:</strong> رویہ اور تعامل (validation، متحرک مواد)</li>
            </ul>
            <p>مثال: HTML ڈھانچہ ہے، CSS لباس ہے، JavaScript حرکت ہے۔</p>` },
        '5.2': { q: 'سوال 2: Responsive design کیا ہے اور اس ویب سائٹ کے لیے کیوں اہم ہے؟', a: `
            <p>ایسا لے آؤٹ جو ہر اسکرین (فون، ٹیبلٹ، ڈیسک ٹاپ) کے مطابق ڈھل جائے، flexible grids، CSS media queries اور viewport meta tag سے۔</p>
            <p>بلوچستان میں زیادہ تر شہری موبائل استعمال کرتے ہیں، اس لیے عوامی پروگرام کی ویب سائٹ کا موبائل فرینڈلی ہونا لازمی ہے۔</p>` },
        '5.3': { q: 'سوال 3: Frontend، Backend اور Full-stack؟ Client اور Server؟', a: `
            <ul>
                <li><strong>Frontend:</strong> جو صارف براؤزر میں دیکھتا ہے (HTML، CSS، JavaScript، React)</li>
                <li><strong>Backend:</strong> سرور کی منطق اور ڈیٹا بیس (PHP، Node.js، Python، Java، .NET)</li>
                <li><strong>Full-stack:</strong> دونوں</li>
            </ul>
            <p>بہاؤ: براؤزر درخواست بھیجتا ہے، سرور ڈیٹا بیس سے بات کر کے جواب (پیج یا JSON) واپس دیتا ہے۔</p>` },
        '5.4': { q: 'سوال 4: GET بمقابلہ POST؟ REST API کیا ہے؟', a: `
            <ul>
                <li><strong>GET:</strong> ڈیٹا مانگنا؛ پیرامیٹر URL میں نظر آتے ہیں؛ حساس ڈیٹا کے لیے نہیں</li>
                <li><strong>POST:</strong> ڈیٹا request body میں بھیجنا؛ فارم اور لاگ اِن کے لیے</li>
                <li><strong>REST API:</strong> HTTP پر URLs اور میتھڈز (GET, POST, PUT, DELETE) کے ذریعے سسٹمز کے درمیان ڈیٹا کا تبادلہ، عموماً JSON میں</li>
            </ul>` },
        '5.5': { q: 'سوال 5: CMS کیا ہے؟ کیا آپ نے WordPress استعمال کیا ہے؟', a: `
            <p><strong>Content Management System</strong> (WordPress، Joomla، Drupal) غیر تکنیکی عملے کو کوڈنگ کے بغیر خبریں، نوکریاں اور تصاویر شائع کرنے دیتا ہے۔</p>
            <p>اسے اپ ڈیٹ رکھیں، ایڈمن کے مضبوط پاس ورڈ رکھیں، پلگ اِنز محدود رکھیں اور بیک اپ لیں۔</p>
            <div class="highlight-box"><p>اگر آپ کو سائٹ کی ٹیکنالوجی معلوم نہیں تو صاف کہیں کہ پہلے اس کا مطالعہ کریں گے۔</p></div>` },
        '5.6': { q: 'سوال 6: Domain، Hosting، DNS، SSL/HTTPS؟', a: `
            <ul>
                <li><strong>Domain:</strong> ویب سائٹ کا نام (مثلاً piu-bsdi.org)</li>
                <li><strong>Hosting:</strong> وہ سرور جہاں ویب سائٹ کی فائلیں رکھی ہوں</li>
                <li><strong>DNS:</strong> ڈومین نام کو IP address میں بدلتا ہے</li>
                <li><strong>SSL/TLS (HTTPS):</strong> براؤزر اور سرور کے درمیان ٹریفک کو انکرپٹ کرتا ہے؛ تالے کا نشان؛ اعتماد اور فارمز کے لیے اہم</li>
            </ul>` },
        '5.7': { q: 'سوال 7: ویب سائٹ کی رفتار اور رسائی (accessibility) کیسے بہتر کریں؟', a: `
            <ul>
                <li>تصاویر کمپریس اور ری سائز کریں (گیلری کے لیے اہم)، lazy loading استعمال کریں</li>
                <li>CSS/JS minify کریں، caching فعال کریں، مناسب ہو تو CDN</li>
                <li>رسائی: تصاویر کا alt text، واضح contrast، کی بورڈ نیویگیشن، واضح عنوانات</li>
            </ul>` },

        '6.1': { q: 'سوال 1: نیٹ ورک کیا ہے؟ LAN اور WAN؟ انٹرنیٹ؟', a: `
            <ul>
                <li><strong>LAN:</strong> چھوٹے علاقے کا نیٹ ورک، مثلاً دفتر</li>
                <li><strong>WAN:</strong> بڑے علاقوں (شہروں، ممالک) میں پھیلا نیٹ ورک</li>
                <li><strong>انٹرنیٹ:</strong> نیٹ ورکس کا عالمی نیٹ ورک</li>
            </ul>` },
        '6.2': { q: 'سوال 2: IP address، MAC address، DNS، DHCP، router، switch؟', a: `
            <ul>
                <li><strong>IP address:</strong> نیٹ ورک پر ڈیوائس کا منطقی پتہ</li>
                <li><strong>MAC address:</strong> نیٹ ورک کارڈ کا فزیکل پتہ</li>
                <li><strong>DNS:</strong> ناموں کو IP میں بدلتا ہے</li>
                <li><strong>DHCP:</strong> خودکار طور پر IP دیتا ہے</li>
                <li><strong>Router:</strong> مختلف نیٹ ورکس کو جوڑتا ہے (دفتر اور انٹرنیٹ)</li>
                <li><strong>Switch:</strong> ایک ہی نیٹ ورک کے اندر ڈیوائسز جوڑتا ہے</li>
            </ul>` },
        '6.3': { q: 'سوال 3: صارف کہتا ہے "انٹرنیٹ نہیں چل رہا"۔ آپ کیا کریں گے؟', a: `
            <ol>
                <li>دیکھیں کہ ایک ڈیوائس متاثر ہے یا سب</li>
                <li>کیبل / Wi-Fi کنکشن چیک کریں؛ ڈیوائس ری اسٹارٹ کریں</li>
                <li><code>ipconfig</code> چلا کر دیکھیں کہ IP ملا ہے یا نہیں</li>
                <li><code>ping 8.8.8.8</code> انٹرنیٹ جانچتا ہے؛ <code>ping google.com</code> DNS جانچتا ہے</li>
                <li>راؤٹر/موڈیم ری اسٹارٹ کریں؛ مسئلہ باہر ہو تو ISP سے رابطہ کریں</li>
            </ol>
            <p>پینل یہی قدم بہ قدم طریقہ سننا چاہتا ہے۔</p>` },
        '6.4': { q: 'سوال 4: کمپیوٹر سست ہے یا آن نہیں ہوتا۔ مسئلہ کیسے ڈھونڈیں؟', a: `
            <ul>
                <li><strong>سست:</strong> Task Manager میں CPU/RAM/ڈسک دیکھیں، غیر ضروری startup پروگرام ہٹائیں، میلویئر اسکین کریں، خالی جگہ دیکھیں، ضرورت پر RAM/SSD اپ گریڈ</li>
                <li><strong>آن نہیں ہوتا:</strong> بجلی اور تاریں دیکھیں، بیپ سنیں، RAM/ہارڈ ڈسک کنکشن دیکھیں، safe mode آزمائیں، ڈیٹا کا بیک اپ لے کر ہی OS دوبارہ انسٹال کریں</li>
            </ul>` },
        '6.5': { q: 'سوال 5: عام استعمال ہونے والی کمانڈز', a: `
            <div class="formula-box" dir="ltr">
                <p><code>ipconfig</code> IP configuration (Windows); Linux پر <code>ip a</code></p>
                <p><code>ping</code> کنکشن جانچتا ہے؛ <code>tracert</code> منزل تک راستہ دکھاتا ہے</p>
                <p><code>nslookup</code> DNS جانچتا ہے؛ <code>netstat</code> کنکشنز دکھاتا ہے</p>
            </div>` },

        '7.1': { q: 'سوال 1: سائبر سیکیورٹی کیا ہے؟ عام خطرات بتائیں۔', a: `
            <ul>
                <li><strong>Phishing:</strong> پاس ورڈ چرانے کے لیے جعلی ای میل/پیغامات</li>
                <li><strong>Malware / Ransomware:</strong> نقصان دہ سافٹ ویئر؛ ransomware فائلیں لاک کر کے رقم مانگتا ہے</li>
                <li><strong>SQL Injection:</strong> ان پٹ فیلڈ کے ذریعے SQL داخل کرنا۔ بچاؤ: prepared statements اور validation</li>
                <li><strong>XSS:</strong> ویب پیج میں نقصان دہ اسکرپٹ ڈالنا۔ بچاؤ: آؤٹ پٹ escape کرنا</li>
                <li><strong>کمزور پاس ورڈ / اندرونی غلطیاں</strong></li>
            </ul>` },
        '7.2': { q: 'سوال 2: آپ دفتری نیٹ ورک اور ویب سائٹ کو کیسے محفوظ کریں گے؟', a: `
            <ul>
                <li>ایڈمن اکاؤنٹس پر مضبوط اور منفرد پاس ورڈ اور 2FA</li>
                <li>OS، اینٹی وائرس، CMS اور پلگ اِنز اپ ڈیٹ رکھیں</li>
                <li>رول پر مبنی رسائی: ہر شخص کو صرف ضرورت کی رسائی (least privilege)</li>
                <li>باقاعدہ بیک اپ، فائر وال، HTTPS</li>
                <li>عملے کی آگاہی: نامعلوم لنک پر کلک نہ کریں، پاس ورڈ شیئر نہ کریں</li>
            </ul>` },
        '7.3': { q: 'سوال 3: سرکاری ملازمت میں رازداری کیوں اہم ہے؟', a: `
            <p>ٹینڈرز، ادائیگیوں اور ذاتی ڈیٹا کا افشا نہیں ہونا چاہیے۔ منظوری کے بغیر دفتری ڈیٹا ذاتی اکاؤنٹس یا WhatsApp گروپس میں شیئر نہ کریں، پاس ورڈ کبھی شیئر نہ کریں، اور کسی بھی واقعے کی فوراً اطلاع دیں۔ <strong>CIA triad:</strong> Confidentiality (رازداری)، Integrity (درستی)، Availability (دستیابی)۔</p>` },
        '7.4': { q: 'سوال 4: ای گورننس کیا ہے؟ پاکستان کی کون سی ڈیجیٹل سروسز معلوم ہونی چاہییں؟', a: `
            <p><strong>ای گورننس</strong> میں آئی ٹی کے ذریعے سرکاری خدمات زیادہ شفاف اور مؤثر طریقے سے دی جاتی ہیں۔</p>
            <ul>
                <li><strong>NADRA</strong> (شناختی کارڈ اور قومی ڈیٹا بیس)</li>
                <li><strong>PPRA / EPADS</strong> شفاف سرکاری خریداری کے لیے</li>
                <li><strong>پاکستان سٹیزن پورٹل</strong> شہریوں کی شکایات کے لیے</li>
                <li><strong>PTA</strong> ٹیلی کام کی نگرانی؛ <strong>NITB</strong> وفاقی آئی ٹی</li>
            </ul>
            <p>جوڑیں: ٹینڈر کی اشاعت، ادائیگیوں کا ٹریک اور مانیٹرنگ ڈیش بورڈ BSDI کے شفاف حکمرانی کے ہدف کی تائید کرتے ہیں۔</p>` },

        '8.1': { q: 'سوال 1: MIS کیا ہے اور BSDI پراجیکٹس کے لیے آپ اسے کیسے ڈیزائن کریں گے؟', a: `
            <p><strong>Management Information System:</strong> ڈیٹا جمع کر کے فیصلوں کے لیے رپورٹس بناتا ہے۔</p>
            <div class="example-box"><h4>ممکنہ ڈیزائن</h4>
            <ul>
                <li><strong>ڈیٹا:</strong> پراجیکٹ کا نام، ضلع، شعبہ، بجٹ، ٹھیکیدار، تاریخیں، پیش رفت %، ادائیگیاں، تصاویر</li>
                <li><strong>صارفین:</strong> ڈیٹا انٹری (ضلع/فیلڈ)، ریویور، پروگرام کوآرڈینیٹر (سب دیکھے)، ایڈمن</li>
                <li><strong>آؤٹ پٹ:</strong> ضلع اور شعبہ وار ڈیش بورڈ، تاخیر والے منصوبے، بجٹ بمقابلہ خرچ، PDF/Excel رپورٹس</li>
                <li><strong>اضافی:</strong> ماہانہ رپورٹس، تاخیر کے الرٹس، تبدیلیوں کا آڈٹ لاگ</li>
            </ul></div>` },
        '8.2': { q: 'سوال 2: رپورٹنگ کے لیے Excel کیسے استعمال کرتے ہیں؟', a: `
            <ul>
                <li><code>SUM</code>، <code>AVERAGE</code>، <code>COUNTIF</code>، <code>SUMIF</code>، <code>VLOOKUP</code> / <code>XLOOKUP</code>، <code>IF</code></li>
                <li>ضلع یا شعبہ وار خلاصے کے لیے <strong>Pivot tables</strong>؛ بصری رپورٹ کے لیے چارٹس</li>
                <li>Data validation، filters، conditional formatting، شیٹ پروٹیکشن</li>
            </ul>
            <p>انٹرویو سے پہلے فرضی پراجیکٹ فہرست پر pivot table کی مشق کریں۔</p>` },
        '8.3': { q: 'سوال 3: GIS کیا ہے اور BSDI کے لیے کیوں اہم ہو سکتا ہے؟', a: `
            <p><strong>Geographic Information System:</strong> ڈیٹا کو مقامات سے جوڑ کر نقشے پر دکھاتا ہے۔ کئی اضلاع میں پھیلے منصوبوں کے لیے اسکول، کلینک اور پانی کی اسکیموں کو نقشے پر دکھانا منصوبہ بندی اور نگرانی میں مدد دیتا ہے۔ ٹولز: QGIS (مفت)، ArcGIS، Google Earth/Maps۔ بنیادی معلومات بھی فائدہ مند ہیں۔</p>` },
        '8.4': { q: 'سوال 4: ڈیش بورڈ کیا ہے اور اچھا ڈیش بورڈ کیسا ہوتا ہے؟', a: `
            <ul>
                <li>ایک نظر میں اہم اعداد: کل تعداد، پیش رفت، بجٹ، تاخیر</li>
                <li>کم اور واضح چارٹس، یکساں رنگ، ضلع اور تاریخ کے فلٹرز</li>
                <li>دیکھنے والے کے لیے بنائیں: کوآرڈینیٹر کو خلاصہ چاہیے، فیلڈ عملے کو تفصیل</li>
                <li>ٹولز: Excel، Power BI، Google Looker Studio یا کسٹم ویب پیج</li>
            </ul>` },
        '8.5': { q: 'سوال 5: Cloud اور AI ٹولز کیا ہیں اور ذمہ داری سے کیسے استعمال کریں؟', a: `
            <ul>
                <li><strong>Cloud:</strong> انٹرنیٹ پر سرور اور اسٹوریج (Google Drive، Microsoft 365، AWS)۔ فائدہ: کہیں سے رسائی، آسان بیک اپ۔ خطرہ: ڈیٹا کا مقام اور رسائی کا کنٹرول۔</li>
                <li><strong>AI ٹولز:</strong> مسودے، کوڈنگ مدد اور خلاصے کے لیے مفید، مگر منظوری کے بغیر خفیہ یا ذاتی سرکاری ڈیٹا عوامی AI ٹولز میں نہ ڈالیں، اور آؤٹ پٹ کی تصدیق ضرور کریں۔</li>
            </ul>` },

        '9.1': { q: 'صورتحال 1: جس دن نوکری کا اشتہار شائع ہونا ہے ویب سائٹ بند ہو جائے۔ آپ کیا کریں گے؟', a: `
            <ol>
                <li>مسئلے کی تصدیق کریں (دوسرے نیٹ ورک یا ڈیوائس سے دیکھیں)</li>
                <li>وجہ ڈھونڈیں: ہوسٹنگ کی حالت، ڈومین کی میعاد، حالیہ تبدیلی، سرور error logs</li>
                <li>بحال کریں: آخری تبدیلی واپس لیں یا بیک اپ restore کریں؛ ضرورت ہو تو ہوسٹنگ فراہم کنندہ سے رابطہ</li>
                <li>پروگرام کوآرڈینیٹر کو فوراً متوقع وقت کے ساتھ آگاہ کریں</li>
                <li>آئندہ کے لیے: مانیٹرنگ، باقاعدہ بیک اپ، دستاویزی بحالی کا طریقہ</li>
            </ol>` },
        '9.2': { q: 'صورتحال 2: سینئر دو گھنٹے میں رپورٹ مانگتا ہے مگر آپ کا کام بھی فوری ہے۔ کیا کریں گے؟', a: `
            <p>"میں سینئر سے ترجیحات واضح کروں گا اور بتاؤں گا کہ میں اس وقت کیا کر رہا ہوں۔ اگر رپورٹ زیادہ ضروری ہے تو پہلے وہ کروں گا اور دوسرے کام کے منتظر کو اطلاع دوں گا۔ واضح رابطہ حیرانی سے بچاتا ہے۔"</p>` },
        '9.3': { q: 'صورتحال 3: ایک ساتھی کہتا ہے کہ ویب سائٹ جلدی اپ ڈیٹ کرنے کے لیے ایڈمن پاس ورڈ دے دیں۔ کیا کریں گے؟', a: `
            <p>"میں اپنا ذاتی پاس ورڈ شیئر نہیں کروں گا۔ شائستگی سے بتاؤں گا کہ یہ سیکیورٹی پالیسی کے خلاف ہے اور پروگرام کوآرڈینیٹر سے کہوں گا کہ ضرورت ہو تو محدود رسائی والا الگ اکاؤنٹ منظور کریں۔" یہ دیانت داری ظاہر کرتا ہے، جو سرکاری ادارے بہت اہم سمجھتے ہیں۔</p>` },
        '9.4': { q: 'صورتحال 4: محکمے کو بھیجے گئے ڈیٹا میں آپ کو غلطی ملتی ہے۔ کیا کریں گے؟', a: `
            <p>فوراً اور ایمانداری سے سپروائزر کو بتائیں کہ کیا غلط ہوا اور درست اعداد کیا ہیں، ڈیٹا درست کریں، اور ایسا چیک شامل کریں کہ دوبارہ نہ ہو۔ غلطی چھپانا خود غلطی سے زیادہ برا ہے۔</p>` },
        '9.5': { q: 'صورتحال 5: صارفین کو سسٹم استعمال کرنا مشکل لگتا ہے۔ کیا کریں گے؟', a: `
            <p>صارفین سے پوچھیں کہ کہاں مشکل ہے، اسکرینیں آسان کریں، مختصر ہدایات یا یوزر گائیڈ شامل کریں، مختصر تربیتی نشست رکھیں اور دوبارہ فیڈ بیک لیں۔ "اچھا سافٹ ویئر وہ ہے جسے لوگ واقعی استعمال کریں۔"</p>` },
        '9.6': { q: 'صورتحال 6: دفتر جو ٹیکنالوجی استعمال کرتا ہے وہ آپ کو نہیں آتی۔ کیسے نبھائیں گے؟', a: `
            <p>"میں پہلے بھی نئے ٹولز سیکھ چکا ہوں (مثال دیں)۔ میں دستاویزات پڑھوں گا، ٹیم سے رہنمائی لوں گا، ٹیسٹ کاپی پر مشق کروں گا اور جلد مفید ثابت ہوں گا۔ میں اپنی کمی کے بارے میں ایماندار اور سیکھنے میں تیز ہوں۔"</p>` }
    },

    rm: {
        sec1: { t: 'Hissa 1: Idaray aur Asami ko Jaanein', d: 'Interview lenay walay un umeedwaron ko pasand kartay hain jo pehlay se tayari karke aayen. Is hissay ko sab se pehlay yaad karein.' },
        sec2: { t: 'Hissa 2: Interview ki Hikmat-e-Amli aur HR Sawalat', d: 'Sarkari contract interview mein panel chaar cheezein dekhta hai: mutaliqa maharat, imandari, rawayya aur maqami mouzoonyat. HR ke jawabat bhi takneeki jawabat jitnay hi ahem hain.' },
        sec3: { t: 'Hissa 3: Programming aur Software ki Bunyadein', d: 'Panel zyada tar bunyadi sawal poochay ga aur aap ke apne projects ki misaalein maangay ga. Concept samjhein, phir aik line ki misaal dein.' },
        sec4: { t: 'Hissa 4: Database aur SQL', d: 'Kyunke PIU project, thekaydar aur maali data sambhalta hai, is liye database ke sawalat ka imkan bohat zyada hai.' },
        sec5: { t: 'Hissa 5: Web Development', d: 'BSDI ki apni website (Home, About, Team, News, Gallery, Jobs, Contact) wesa hi nizam hai jo aap sambhalein gay. Interview se pehlay isay dekhein aur sochein ke aap kya behtar karein gay.' },
        sec6: { t: 'Hissa 6: Networking aur IT Support', d: 'Aik chhotay sarkari unit mein Assistant IT Developer aksar daftar ke IT masail ka pehla rabta bhi hota hai.' },
        sec7: { t: 'Hissa 7: Cyber Security aur Sarkari IT Agahi', d: 'Sarkari data (maaliyat, thekaydar, zaati maloomat) hamla awaron ka hadaf hota hai. Security ki samajh aap ko doosron se numayan karti hai.' },
        sec8: { t: 'Hissa 8: Project Monitoring, MIS aur Office Tools', d: 'Yahan aap numayan ho saktay hain: dikhayen ke aap samajhtay hain PIU ko kya chahiye, sirf coding nahi.' },
        sec9: { t: 'Hissa 9: Soorat-e-Haal par Mabni Sawalat aur Namoona Jawabat', d: 'Soorat-e-haal ke sawal aap ki faisla sazi parakhtay hain. Tarteeb: Samjhein, Amal karein, Itlaa dein, Aainda rokein.' },

        '1.1': { q: 'Sawal 1: BSDI kya hai aur PIU kya kaam karta hai?', a: `
            <p><strong>BSDI = Balochistan Special Development Initiative.</strong> Hukumat-e-Balochistan ka taraqiyati program jisay Planning & Development Department ke tehat <strong>Program Implementation Unit (PIU)</strong> chalata hai.</p>
            <ul>
                <li><strong>Shobay:</strong> taleem (schools), sehat, saaf pani, sarkein/pul/sarkari imaratein, community development</li>
                <li><strong>PIU ka kirdar:</strong> amal darar-amad karnay wala bazu: mansooba bandi, thekaydaron ka intikhab, miyaar ki nigrani, maali intizam aur reporting, mutaliqa idaron se rabta</li>
                <li><strong>Daira:</strong> website ke mutabiq tamam azla (35) aur 949 mansoobay</li>
                <li><strong>Iqdaar:</strong> shaffaf hukmrani, community ki shamooliyat, miyaar, paidar taraqqi</li>
            </ul>
            <div class="highlight-box"><p><strong>💡 Istemal:</strong> Apni IT maharat ko idaray ke mission se jorein: "949 mansoobon ko track karnay ke liye qabil-e-aitmaad nizam chahiye, yahan main madad kar sakta hoon."</p></div>` },
        '1.2': { q: 'Sawal 2: Ishtihar ke woh haqaiq jo mujhe maloom honay chahiyen?', a: `
            <ul>
                <li><strong>Asami:</strong> Assistant IT Developer, BPS-06, kul 02 asamiyan (majmoi 09)</li>
                <li><strong>Nauiyat:</strong> Contract, ibtidai 1 saal, karkardagi aur policy par tawseeh</li>
                <li><strong>Maqam:</strong> Quetta</li>
                <li><strong>Ehliyat:</strong> sirf Balochistan ka domicile rakhnay walay</li>
                <li><strong>Umar:</strong> 23 ta 37 saal</li>
                <li><strong>Hawala:</strong> AB No. 3852 / 1-10-2026</li>
                <li><strong>Interview:</strong> sirf short-list umeedwar, TA/DA nahi</li>
            </ul>` },
        '1.3': { q: 'Sawal 3: PIU mein Assistant IT Developer haqeeqat mein kya karega?', a: `
            <p><strong>Note:</strong> Ishtihar mein zimmadariyan darj nahi; yeh fehrist andaaze par mabni hai. Kahein: "Meri samajh ke mutabiq kirdar mein shamil hoga..."</p>
            <ol>
                <li>BSDI website ki dekh bhaal (news, jobs, gallery, tender)</li>
                <li>Project monitoring system (MIS): project ki halat, paish raft, budget, zila war reports</li>
                <li>Data management: database, Excel reports, backup</li>
                <li>Program Coordinator ke liye dashboard aur reports</li>
                <li>Daftar ki IT support: computer, printer, network, email</li>
                <li>Security: password, backup, access control</li>
                <li>Dastawezat aur staff ki tarbiyat</li>
            </ol>` },
        '1.4': { q: 'Sawal 4: Interview se pehlay in baaton ki dobara tasdeeq karein', a: `
            <ul>
                <li><strong>Patay mein farq:</strong> Ishtihar mein Bungalow 19A aur website par 13-C hai. Call letter dekhein ya 081-4245963 par phone karke maqam ki tasdeeq karein.</li>
                <li><strong>Email mein farq:</strong> Ishtihar mein piubsdi@gmail.com aur website par support@piu-bsdi.org. Jo call letter par ho wohi istemal karein.</li>
                <li><strong>Dastawezat:</strong> CNIC, domicile, degrees, tajurbay ke certificates aur 2 tasaweer ki asal aur tasdeeq shuda naqalein aik file mein tarteeb se rakhein.</li>
                <li><strong>Waqt:</strong> TA/DA nahi milega, transport ki mansooba bandi karein aur 30 minute pehlay pohanchein.</li>
            </ul>` },

        '2.1': { q: 'Sawal 1: Apne baray mein bataiye. (Taqriban hamesha pehla sawal)', a: `
            <p><strong>"Haal, Maazi, Mustaqbil" formula istemal karein, 60 ta 90 second:</strong></p>
            <div class="example-box"><h4>Namoona Jawab</h4>
            <p>"Assalam-o-Alaikum. Mera naam ____ hai. Maine ____ se Computer Science/IT mein ____ kiya hai aur mera taluq zila ____ se hai. Mujhe web development, database aur bunyadi networking aati hai, aur maine ____ jaisa project banaya hai. Main BSDI mein is liye aana chahta hoon ke yeh Balochistan bhar mein taleem, sehat aur pani ke mansoobon par kaam karta hai aur main apni IT maharat se isay mazeed shaffaf banana chahta hoon. Main jald seekhnay wala, waqt ka pabandi aur team mein kaam karnay wala hoon."</p></div>
            <p><strong>Mashwara:</strong> Khali jagahein apni asal maloomat se bharein. Lafz ba lafz ratnay ke bajaye dhancha yaad karein.</p>` },
        '2.2': { q: 'Sawal 2: Aap BSDI / PIU mein kyun aana chahtay hain?', a: `
            <ul>
                <li>Main apne soobay ki khidmat karna chahta hoon; BSDI ka kaam schools, clinics aur pani ki schemes mein nazar aata hai.</li>
                <li>Saikron mansooba wale program ko mazboot digital tracking chahiye, jo meri maharat se mail khati hai.</li>
                <li>Baray paimanay ke data aur reporting ka haqeeqi tajurba milega.</li>
                <li>Main yahan taraqqi karke hissa daalna chahta hoon, sirf guzarna nahi.</li>
            </ul>
            <div class="highlight-box"><p><strong>Parhez:</strong> "Mujhe naukri chahiye" ya "tankhwah achi hai" mat kahein. Imandar rahein magar mission par tawajjoh dein.</p></div>` },
        '2.3': { q: 'Sawal 3: Hum aap hi ko kyun rakhein, kisi aur ko kyun nahi?', a: `
            <p>"Main teen tarah se zaroorat par poora utarta hoon: pehla, is kirdar ke mutabiq takneeki maharat (web, database, support); doosra, main maqami umeedwar hoon aur soobay ke halaat samajhta hoon; teesra, main qabil-e-aitmaad hoon, deadline poori karta hoon aur musalsal seekhta hoon. Main jald kaam shuru kar sakta hoon aur aap ke mojooda systems par tarbiyat ke liye tayyar hoon."</p>` },
        '2.4': { q: 'Sawal 4: Aap ki khubiyan aur khamiyan kya hain?', a: `
            <p><strong>Khubiyan:</strong> masla hal karna, jald seekhna, nazm-o-zabt, team work. Har aik ki aik haqeeqi misaal dein.</p>
            <div class="example-box"><h4>Khami (haqeeqi magar qabil-e-islah)</h4><p>"Pehlay main chhoti tafseel ko mukammal karnay mein bohat waqt lagata tha. Ab main har kaam ki waqt ki had muqarrar karta hoon aur jald feedback leta hoon, jis se raftar behtar hui hai."</p></div>
            <p><strong>Kabhi na kahein:</strong> "Mujh mein koi khami nahi" ya aisi baat jo IT ke kaam ke liye nehal kar de.</p>` },
        '2.5': { q: 'Sawal 5: Aap ka aik saal ka contract hai. Agar tawseeh na hui to?', a: `
            <p>"Main contract ki sharait samajhta hoon aur un se mutmain hoon. Mera maqsad behtareen kaam karna hai taake tawseeh karkardagi ki bunyad par ho. Bahar haal yeh tajurba mere career mein madad dega."</p>
            <p>Is se aap ki pukhtagi zahir hoti hai aur yeh ke aap ne ishtihar parha hai.</p>` },
        '2.6': { q: 'Sawal 6: Aap dabao aur sakht deadline ko kaise sambhalte hain?', a: `
            <ol>
                <li>Kaamon ko ahmiyat aur fori zaroorat ke mutabiq tarteeb dein</li>
                <li>Kaam ko chhotay marahil mein bantein</li>
                <li>Agar takheer ka khadsha ho to pehlay se itlaa dein</li>
                <li>Pursukoon reh kar hal par tawajjoh dein</li>
            </ol>
            <p>Final year project ya daftar ke kisi hangami kaam ki mukhtasar misaal zaroor dein.</p>` },
        '2.7': { q: 'Sawal 7: Kya aap izafi waqt, azla ke daurey ya ghair IT kaam ke liye tayyar hain?', a: `
            <p>PIU mein imandarana aur behtareen jawab: "Ji haan. Program unit deadline par chalta hai aur main team ki har zaroorat mein madad ke liye tayyar hoon, zaroorat parnay par field visit samet."</p>
            <p>Woh wada na karein jo aap poora nahi kar saktay, magar lachak zaroor dikhayen.</p>` },
        '2.8': { q: 'Sawal 8: Kya aap ke paas hamaray liye koi sawal hai? (Hamesha 2 poochein)', a: `
            <ul>
                <li>"Project monitoring aur reporting ke liye is waqt kaun se systems istemal ho rahay hain aur sab se pehlay kya behtar karna chahtay hain?"</li>
                <li>"Pehlay chhe mahinon mein is kirdar ki kamyabi kesi hogi?"</li>
                <li>"Kya mojooda platforms par tarbiyat di jaye gi?"</li>
            </ul>
            <p><strong>Pehlay interview mein tankhwah, chhuttiyan ya muraaat ke baray mein na poochein.</strong></p>` },
        '2.9': { q: 'Sawal 9: Interview ke din ke aadaab', a: `
            <ul>
                <li>Saaf, rasmi libas (shalwar qameez ya shirt pant), saleeqa mand hulya</li>
                <li>"Assalam-o-Alaikum" kahein, baithnay ka kaha jaye tab baithein, pursukoon rahein</li>
                <li>Sirf chairman se nahi, poore panel se nazar milayen</li>
                <li>Poora sawal sunein, mukhtasar waqfay ke baad jawab dein</li>
                <li>Agar maloom na ho: "Mujhe yaqeen nahi, magar meri samajh yeh hai... aur main isay seekh loon ga." Banawat hargiz nahi</li>
                <li>Mobile khamosh, qalam, CV aur dastawezat ki naqalein sath rakhein</li>
                <li>Aakhir mein panel ka shukriya ada karein</li>
            </ul>` },

        '3.1': { q: 'Sawal 1: Programming language aur Scripting language mein kya farq hai?', a: `
            <ul>
                <li><strong>Compiled zubaanein</strong> (C, C++, Java) chalnay se pehlay tarjuma hoti hain, aam tor par tez.</li>
                <li><strong>Scripting/interpreted zubaanein</strong> (JavaScript, Python, PHP) chalte waqt line ba line chalti hain, development jald hoti hai.</li>
            </ul>
            <p>Amli tor par farq dhundla hai; dono haqeeqi applications ke liye istemal hoti hain.</p>` },
        '3.2': { q: 'Sawal 2: OOP aur is ke chaar sutoon samjhayen.', a: `
            <p><strong>Object-Oriented Programming</strong> code ko objects (data aur rawayya) ke gird tarteeb deti hai.</p>
            <ul>
                <li><strong>Encapsulation:</strong> data chhupayen, methods ke zariye dein (masalan private balance aur deposit())</li>
                <li><strong>Abstraction:</strong> sirf zaroori dikhayen (car ka steering, engine ki tafseel nahi)</li>
                <li><strong>Inheritance:</strong> child class parent class se istefada karay (Student aur Teacher, Person se)</li>
                <li><strong>Polymorphism:</strong> aik naam, mukhtalif rawayya (Circle aur Rectangle ka area())</li>
            </ul>` },
        '3.3': { q: 'Sawal 3: Algorithm, flowchart aur Big-O aasaan alfaz mein?', a: `
            <ul>
                <li><strong>Algorithm:</strong> masla hal karnay ka qadam ba qadam tareeqa</li>
                <li><strong>Flowchart:</strong> algorithm ka alamaton se bana khaka</li>
                <li><strong>Big-O:</strong> input barhnay par raftar kaise badalti hai. Fehrist mein aik aik karke talash O(n), tarteeb shuda fehrist par binary search O(log n).</li>
            </ul>` },
        '3.4': { q: 'Sawal 4: Array bamuqabla Linked List, Stack bamuqabla Queue?', a: `
            <ul>
                <li><strong>Array:</strong> muqarrar size, index se tez rasai, darmiyan mein shamil karna sust</li>
                <li><strong>Linked list:</strong> lachakdar size, shamil/hazf tez, random rasai sust</li>
                <li><strong>Stack:</strong> LIFO (aakhir mein aanay wala pehlay niklay), masalan Undo button</li>
                <li><strong>Queue:</strong> FIFO (pehlay aanay wala pehlay niklay), masalan print qatar</li>
            </ul>` },
        '3.5': { q: 'Sawal 5: SDLC aur is ke aam models kya hain?', a: `
            <p><strong>Software Development Life Cycle:</strong> zarooriyat, design, development, testing, deployment, maintenance.</p>
            <ul>
                <li><strong>Waterfall:</strong> marahil tarteeb war; jab zarooriyat tay hon</li>
                <li><strong>Agile:</strong> chhotay marahil aur musalsal feedback; jab zarooriyat badalti hon</li>
                <li><strong>Prototype:</strong> pehlay namoona bana kar user ki raye lein</li>
            </ul>
            <div class="highlight-box"><p>Muqarrara qawaid magar badalti reports walay sarkari unit ke liye saada Agile (chhoti, baar baar faraahmi) achha jawab hai.</p></div>` },
        '3.6': { q: 'Sawal 6: Git kya hai aur kyun istemal karein?', a: `
            <p><strong>Git</strong> version control system hai: code ki tabdeeliyon ki tareekh rakhta hai, team work mumkin banata hai aur ghalti par pichli halat mein wapas jaanay deta hai.</p>
            <ul>
                <li><code>git init</code>, <code>git add</code>, <code>git commit</code>: tracking shuru karein aur tabdeeliyan mehfooz karein</li>
                <li><code>git branch</code>, <code>git merge</code>: alag features par kaam</li>
                <li><code>git push</code>, <code>git pull</code>: GitHub jaise remote se hum ahangi</li>
            </ul>` },
        '3.7': { q: 'Sawal 7: Aap software ki jaanch aur debugging kaise karte hain?', a: `
            <ul>
                <li>Pehlay kharabi <strong>dobara paida karein</strong>, phir error message ghaur se parhein</li>
                <li>Browser console, logs ya debugger istemal karein; haliya tabdeeli dekhein</li>
                <li>Alag karein: sab se chhoti nakaam soorat talash karein</li>
                <li><strong>Testing ki aqsam:</strong> unit, integration, system, UAT</li>
                <li>Ghalat input se bhi test karein, sirf aam raastay se nahi</li>
            </ul>` },

        '4.1': { q: 'Sawal 1: Database, DBMS aur RDBMS kya hain?', a: `
            <ul>
                <li><strong>Database:</strong> munazzam data ka majmooa</li>
                <li><strong>DBMS:</strong> database banany aur sambhalnay ka software</li>
                <li><strong>RDBMS:</strong> data ko baham jaray tables (saf aur column) mein rakhta hai. Misalein: MySQL, PostgreSQL, SQL Server, Oracle</li>
            </ul>` },
        '4.2': { q: 'Sawal 2: Primary Key, Foreign Key aur Normalization samjhayen.', a: `
            <ul>
                <li><strong>Primary key:</strong> har saf ko yakta pehchan deti hai (masalan ProjectID). NULL ya dohrai nahi ho sakti.</li>
                <li><strong>Foreign key:</strong> woh column jo doosray table ki primary key ki taraf ishara karay (masalan Projects mein ContractorID)</li>
                <li><strong>Normalization:</strong> tables ko munazzam karke data ki takrar aur kharabiyan kam karna (1NF, 2NF, 3NF)</li>
            </ul>
            <div class="example-box"><h4>BSDI tarz ki misaal</h4><p>Tables: <code>Districts</code>, <code>Projects</code>, <code>Contractors</code>, <code>Payments</code>. Aik project aik zila aur aik thekaydar ka hota hai; aik project ki kai adaigiyan ho sakti hain.</p></div>` },
        '4.3': { q: 'Sawal 3: Bunyadi SQL queries likhein (amli sawal ka qawi imkan).', a: `
            <div class="formula-box" dir="ltr">
                <p><code>SELECT * FROM Projects WHERE District = 'Quetta';</code></p>
                <p><code>SELECT District, COUNT(*) AS Total FROM Projects GROUP BY District;</code></p>
                <p><code>SELECT p.Name, c.Name FROM Projects p JOIN Contractors c ON p.ContractorID = c.ID;</code></p>
                <p><code>UPDATE Projects SET Status = 'Completed' WHERE ID = 15;</code></p>
                <p><code>SELECT * FROM Projects ORDER BY Budget DESC LIMIT 5;</code></p>
            </div>
            <p><strong>UPDATE aur DELETE mein WHERE hamesha yaad rakhein.</strong> Warna har saf badal jaye gi.</p>` },
        '4.4': { q: 'Sawal 4: SQL joins ki aqsam aur command groups?', a: `
            <ul>
                <li><strong>INNER JOIN:</strong> sirf dono tables mein milnay wali safein</li>
                <li><strong>LEFT JOIN:</strong> baen table ki tamam safein aur dayen se milnay wali</li>
                <li><strong>RIGHT / FULL JOIN:</strong> ulat aur mushtarka soortein</li>
            </ul>
            <p><strong>Command groups:</strong> DDL (CREATE, ALTER, DROP), DML (INSERT, UPDATE, DELETE), DQL (SELECT), DCL (GRANT, REVOKE), TCL (COMMIT, ROLLBACK).</p>` },
        '4.5': { q: 'Sawal 5: DELETE, TRUNCATE aur DROP mein farq?', a: `
            <ul>
                <li><strong>DELETE:</strong> muntakhib safein hatata hai; WHERE chalta hai; transaction mein rollback mumkin</li>
                <li><strong>TRUNCATE:</strong> tamam safein tezi se hatata hai; table ka dhancha rehta hai</li>
                <li><strong>DROP:</strong> poora table (dhancha aur data) khatam</li>
            </ul>` },
        '4.6': { q: 'Sawal 6: Backup kyun letay hain aur achha tareeqa kya hai?', a: `
            <ul>
                <li>Hardware kharabi, ghalti se hazf, ransomware aur aafaat se bachata hai</li>
                <li><strong>3-2-1 usool:</strong> 3 naqalein, 2 mukhtalif zarai par, 1 bahar kisi doosri jagah</li>
                <li>Backup khudkar banayen aur baqaidagi se <strong>restore karke dekhein</strong>: jancha na gaya backup, backup nahi</li>
            </ul>` },

        '5.1': { q: 'Sawal 1: HTML, CSS aur JavaScript kya hain?', a: `
            <ul>
                <li><strong>HTML:</strong> web page ka dhancha (unwanat, paragraph, form, table)</li>
                <li><strong>CSS:</strong> andaz aur tarteeb (rang, faslay, responsive design)</li>
                <li><strong>JavaScript:</strong> rawayya aur taaamul (validation, mutaharrik mawad)</li>
            </ul>
            <p>Misaal: HTML dhancha hai, CSS libas hai, JavaScript harkat hai.</p>` },
        '5.2': { q: 'Sawal 2: Responsive design kya hai aur is website ke liye kyun ahem hai?', a: `
            <p>Aisa layout jo har screen (phone, tablet, desktop) ke mutabiq dhal jaye, flexible grids, CSS media queries aur viewport meta tag se.</p>
            <p>Balochistan mein zyada tar shehri mobile istemal kartay hain, is liye awami program ki website ka mobile friendly hona lazmi hai.</p>` },
        '5.3': { q: 'Sawal 3: Frontend, Backend aur Full-stack? Client aur Server?', a: `
            <ul>
                <li><strong>Frontend:</strong> jo user browser mein dekhta hai (HTML, CSS, JavaScript, React)</li>
                <li><strong>Backend:</strong> server ki mantiq aur database (PHP, Node.js, Python, Java, .NET)</li>
                <li><strong>Full-stack:</strong> dono</li>
            </ul>
            <p>Bahao: browser request bhejta hai, server database se baat karke jawab (page ya JSON) wapas deta hai.</p>` },
        '5.4': { q: 'Sawal 4: GET bamuqabla POST? REST API kya hai?', a: `
            <ul>
                <li><strong>GET:</strong> data mangna; parameters URL mein nazar aatay hain; hassas data ke liye nahi</li>
                <li><strong>POST:</strong> data request body mein bhejna; form aur login ke liye</li>
                <li><strong>REST API:</strong> HTTP par URLs aur methods (GET, POST, PUT, DELETE) ke zariye systems ke darmiyan data ka tabadla, aam tor par JSON mein</li>
            </ul>` },
        '5.5': { q: 'Sawal 5: CMS kya hai? Kya aap ne WordPress istemal kiya hai?', a: `
            <p><strong>Content Management System</strong> (WordPress, Joomla, Drupal) ghair takneeki staff ko coding ke baghair news, jobs aur tasaweer shaya karnay deta hai.</p>
            <p>Isay update rakhein, admin ke mazboot password rakhein, plugins mehdood rakhein aur backup lein.</p>
            <div class="highlight-box"><p>Agar aap ko site ki technology maloom nahi to saaf kahein ke pehlay is ka mutalia karein gay.</p></div>` },
        '5.6': { q: 'Sawal 6: Domain, Hosting, DNS, SSL/HTTPS?', a: `
            <ul>
                <li><strong>Domain:</strong> website ka naam (masalan piu-bsdi.org)</li>
                <li><strong>Hosting:</strong> woh server jahan website ki files rakhi hon</li>
                <li><strong>DNS:</strong> domain naam ko IP address mein badalta hai</li>
                <li><strong>SSL/TLS (HTTPS):</strong> browser aur server ke darmiyan traffic ko encrypt karta hai; talay ka nishan; aitmaad aur forms ke liye ahem</li>
            </ul>` },
        '5.7': { q: 'Sawal 7: Website ki raftar aur rasai (accessibility) kaise behtar karein?', a: `
            <ul>
                <li>Tasaweer compress aur resize karein (gallery ke liye ahem), lazy loading istemal karein</li>
                <li>CSS/JS minify karein, caching faal karein, munasib ho to CDN</li>
                <li>Rasai: tasaweer ka alt text, wazeh contrast, keyboard navigation, wazeh unwanat</li>
            </ul>` },

        '6.1': { q: 'Sawal 1: Network kya hai? LAN aur WAN? Internet?', a: `
            <ul>
                <li><strong>LAN:</strong> chhotay ilaqay ka network, masalan daftar</li>
                <li><strong>WAN:</strong> baray ilaqon (shehron, mulkon) mein phaila network</li>
                <li><strong>Internet:</strong> networks ka aalmi network</li>
            </ul>` },
        '6.2': { q: 'Sawal 2: IP address, MAC address, DNS, DHCP, router, switch?', a: `
            <ul>
                <li><strong>IP address:</strong> network par device ka mantiqi pata</li>
                <li><strong>MAC address:</strong> network card ka physical pata</li>
                <li><strong>DNS:</strong> naamon ko IP mein badalta hai</li>
                <li><strong>DHCP:</strong> khudkar tor par IP deta hai</li>
                <li><strong>Router:</strong> mukhtalif networks ko jorta hai (daftar aur internet)</li>
                <li><strong>Switch:</strong> aik hi network ke andar devices jorta hai</li>
            </ul>` },
        '6.3': { q: 'Sawal 3: User kehta hai "internet nahi chal raha". Aap kya karein gay?', a: `
            <ol>
                <li>Dekhein ke aik device mutasir hai ya sab</li>
                <li>Cable / Wi-Fi connection check karein; device restart karein</li>
                <li><code>ipconfig</code> chala kar dekhein ke IP mila hai ya nahi</li>
                <li><code>ping 8.8.8.8</code> internet jaanchta hai; <code>ping google.com</code> DNS jaanchta hai</li>
                <li>Router/modem restart karein; masla bahar ho to ISP se rabta karein</li>
            </ol>
            <p>Panel yehi qadam ba qadam tareeqa sunna chahta hai.</p>` },
        '6.4': { q: 'Sawal 4: Computer sust hai ya on nahi hota. Masla kaise dhoondein?', a: `
            <ul>
                <li><strong>Sust:</strong> Task Manager mein CPU/RAM/disk dekhein, ghair zaroori startup programs hatayen, malware scan karein, khali jagah dekhein, zaroorat par RAM/SSD upgrade</li>
                <li><strong>On nahi hota:</strong> bijli aur taarein dekhein, beep sunein, RAM/hard disk connection dekhein, safe mode aazmayen, data ka backup lekar hi OS dobara install karein</li>
            </ul>` },
        '6.5': { q: 'Sawal 5: Aam istemal honay wali commands', a: `
            <div class="formula-box" dir="ltr">
                <p><code>ipconfig</code> IP configuration (Windows); Linux par <code>ip a</code></p>
                <p><code>ping</code> connection jaanchta hai; <code>tracert</code> manzil tak raasta dikhata hai</p>
                <p><code>nslookup</code> DNS jaanchta hai; <code>netstat</code> connections dikhata hai</p>
            </div>` },

        '7.1': { q: 'Sawal 1: Cyber security kya hai? Aam khatrat bataiye.', a: `
            <ul>
                <li><strong>Phishing:</strong> password churanay ke liye jaali email/paighamat</li>
                <li><strong>Malware / Ransomware:</strong> nuqsan deh software; ransomware files lock karke raqam mangta hai</li>
                <li><strong>SQL Injection:</strong> input field ke zariye SQL dakhil karna. Bachao: prepared statements aur validation</li>
                <li><strong>XSS:</strong> web page mein nuqsan deh script daalna. Bachao: output escape karna</li>
                <li><strong>Kamzor password / andaruni ghaltiyan</strong></li>
            </ul>` },
        '7.2': { q: 'Sawal 2: Aap daftari network aur website ko kaise mehfooz karein gay?', a: `
            <ul>
                <li>Admin accounts par mazboot aur munfarid password aur 2FA</li>
                <li>OS, antivirus, CMS aur plugins update rakhein</li>
                <li>Role par mabni rasai: har shakhs ko sirf zaroorat ki rasai (least privilege)</li>
                <li>Baqaida backup, firewall, HTTPS</li>
                <li>Staff ki agahi: namaloom link par click na karein, password share na karein</li>
            </ul>` },
        '7.3': { q: 'Sawal 3: Sarkari mulazmat mein razdari kyun ahem hai?', a: `
            <p>Tenders, adaigiyon aur zaati data ka ifsha nahi hona chahiye. Manzoori ke baghair daftari data zaati accounts ya WhatsApp groups mein share na karein, password kabhi share na karein, aur kisi bhi waqiye ki foran itlaa dein. <strong>CIA triad:</strong> Confidentiality (razdari), Integrity (durusti), Availability (dastiyabi).</p>` },
        '7.4': { q: 'Sawal 4: E-governance kya hai? Pakistan ki kaun si digital services maloom honi chahiyen?', a: `
            <p><strong>E-governance</strong> mein IT ke zariye sarkari khidmat zyada shaffaf aur moassar tareeqay se di jati hain.</p>
            <ul>
                <li><strong>NADRA</strong> (shanakhti card aur qaumi database)</li>
                <li><strong>PPRA / EPADS</strong> shaffaf sarkari kharidari ke liye</li>
                <li><strong>Pakistan Citizen Portal</strong> shehriyon ki shikayaat ke liye</li>
                <li><strong>PTA</strong> telecom ki nigrani; <strong>NITB</strong> wafaqi IT</li>
            </ul>
            <p>Jorein: tender ki ishaat, adaigiyon ka track aur monitoring dashboard BSDI ke shaffaf hukmrani ke hadaf ki taeed kartay hain.</p>` },

        '8.1': { q: 'Sawal 1: MIS kya hai aur BSDI projects ke liye aap isay kaise design karein gay?', a: `
            <p><strong>Management Information System:</strong> data jama karke faislon ke liye reports banata hai.</p>
            <div class="example-box"><h4>Mumkina design</h4>
            <ul>
                <li><strong>Data:</strong> project ka naam, zila, shobah, budget, thekaydar, tareekhein, paish raft %, adaigiyan, tasaweer</li>
                <li><strong>Users:</strong> data entry (zila/field), reviewer, Program Coordinator (sab dekhay), admin</li>
                <li><strong>Output:</strong> zila aur shobah war dashboard, takheer walay mansoobay, budget bamuqabla kharch, PDF/Excel reports</li>
                <li><strong>Izafi:</strong> mahana reports, takheer ke alerts, tabdeeliyon ka audit log</li>
            </ul></div>` },
        '8.2': { q: 'Sawal 2: Reporting ke liye Excel kaise istemal kartay hain?', a: `
            <ul>
                <li><code>SUM</code>, <code>AVERAGE</code>, <code>COUNTIF</code>, <code>SUMIF</code>, <code>VLOOKUP</code> / <code>XLOOKUP</code>, <code>IF</code></li>
                <li>Zila ya shobah war khulasay ke liye <strong>Pivot tables</strong>; basri report ke liye charts</li>
                <li>Data validation, filters, conditional formatting, sheet protection</li>
            </ul>
            <p>Interview se pehlay farzi project fehrist par pivot table ki mashq karein.</p>` },
        '8.3': { q: 'Sawal 3: GIS kya hai aur BSDI ke liye kyun ahem ho sakta hai?', a: `
            <p><strong>Geographic Information System:</strong> data ko maqamaat se jor kar naqshay par dikhata hai. Kai azla mein phailay mansoobon ke liye school, clinic aur pani ki schemes ko naqshay par dikhana mansooba bandi aur nigrani mein madad deta hai. Tools: QGIS (muft), ArcGIS, Google Earth/Maps. Bunyadi maloomat bhi faida mand hain.</p>` },
        '8.4': { q: 'Sawal 4: Dashboard kya hai aur achha dashboard kesa hota hai?', a: `
            <ul>
                <li>Aik nazar mein ahem adaad: kul tadaad, paish raft, budget, takheer</li>
                <li>Kam aur wazeh charts, yaksan rang, zila aur tareekh ke filters</li>
                <li>Dekhnay walay ke liye banayen: coordinator ko khulasa chahiye, field staff ko tafseel</li>
                <li>Tools: Excel, Power BI, Google Looker Studio ya custom web page</li>
            </ul>` },
        '8.5': { q: 'Sawal 5: Cloud aur AI tools kya hain aur zimmadari se kaise istemal karein?', a: `
            <ul>
                <li><strong>Cloud:</strong> internet par server aur storage (Google Drive, Microsoft 365, AWS). Faida: kahin se rasai, aasaan backup. Khatra: data ka maqam aur rasai ka control.</li>
                <li><strong>AI tools:</strong> masaudon, coding madad aur khulasay ke liye mufeed, magar manzoori ke baghair khufia ya zaati sarkari data awami AI tools mein na daalein, aur output ki tasdeeq zaroor karein.</li>
            </ul>` },

        '9.1': { q: 'Soorat-e-haal 1: Jis din naukri ka ishtihar shaya hona hai website band ho jaye. Aap kya karein gay?', a: `
            <ol>
                <li>Masle ki tasdeeq karein (doosray network ya device se dekhein)</li>
                <li>Wajah dhoondein: hosting ki halat, domain ki miyaad, haliya tabdeeli, server error logs</li>
                <li>Bahal karein: aakhri tabdeeli wapas lein ya backup restore karein; zaroorat ho to hosting provider se rabta</li>
                <li>Program Coordinator ko foran mutawaqqa waqt ke sath agah karein</li>
                <li>Aainda ke liye: monitoring, baqaida backup, dastawezi bahali ka tareeqa</li>
            </ol>` },
        '9.2': { q: 'Soorat-e-haal 2: Senior do ghantay mein report mangta hai magar aap ka kaam bhi fori hai. Kya karein gay?', a: `
            <p>"Main senior se tarjeehat wazeh karoon ga aur bataoon ga ke main is waqt kya kar raha hoon. Agar report zyada zaroori hai to pehlay woh karoon ga aur doosray kaam ke muntazir ko itlaa doon ga. Wazeh rabta hairani se bachata hai."</p>` },
        '9.3': { q: 'Soorat-e-haal 3: Aik sathi kehta hai ke website jaldi update karnay ke liye admin password day dein. Kya karein gay?', a: `
            <p>"Main apna zaati password share nahi karoon ga. Shaistagi se bataoon ga ke yeh security policy ke khilaf hai aur Program Coordinator se kahoon ga ke zaroorat ho to mehdood rasai wala alag account manzoor karein." Yeh diyanat daari zahir karta hai, jo sarkari idaaray bohat ahem samajhtay hain.</p>` },
        '9.4': { q: 'Soorat-e-haal 4: Mehkamay ko bheje gaye data mein aap ko ghalti milti hai. Kya karein gay?', a: `
            <p>Foran aur imandari se supervisor ko batayen ke kya ghalat hua aur durust adaad kya hain, data durust karein, aur aisa check shamil karein ke dobara na ho. Ghalti chhupana khud ghalti se zyada bura hai.</p>` },
        '9.5': { q: 'Soorat-e-haal 5: Users ko system istemal karna mushkil lagta hai. Kya karein gay?', a: `
            <p>Users se poochein ke kahan mushkil hai, screens aasaan karein, mukhtasar hidayaat ya user guide shamil karein, mukhtasar tarbiyati nishist rakhein aur dobara feedback lein. "Achha software woh hai jisay log waqai istemal karein."</p>` },
        '9.6': { q: 'Soorat-e-haal 6: Daftar jo technology istemal karta hai woh aap ko nahi aati. Kaise nibhayen gay?', a: `
            <p>"Main pehlay bhi naye tools seekh chuka hoon (misaal dein). Main dastawezat parhoon ga, team se rehnumai loon ga, test copy par mashq karoon ga aur jald mufeed sabit hoon ga. Main apni kami ke baray mein imandar aur seekhnay mein tez hoon."</p>` }
    },

    // Practice-test question texts (options stay in English: they are technical terms)
    mcq: {
        ur: [
            'BSDI کا مطلب کیا ہے؟',
            'BSDI کے اشتہار میں اسسٹنٹ آئی ٹی ڈویلپر کی آسامی کس پے اسکیل میں ہے؟',
            'درج ذیل میں سے PIU کے کردار کی بہترین وضاحت کون سی ہے؟',
            'کون سا OOP تصور ڈیٹا چھپانے اور صرف میتھڈز کے ذریعے دینے کو کہتے ہیں؟',
            'Stack کس اصول پر چلتا ہے؟',
            'ترتیب شدہ فہرست پر binary search کی time complexity کیا ہے؟',
            'ڈیٹا حاصل کرنے کے لیے کون سی SQL کمانڈ استعمال ہوتی ہے؟',
            'ٹیبل کا وہ کالم جو ہر صف کو یکتا پہچان دے کیا کہلاتا ہے؟',
            'کون سا اسٹیٹمنٹ پورا ٹیبل، ڈھانچے سمیت، ختم کر دیتا ہے؟',
            'کون سا JOIN صرف وہ صفیں دیتا ہے جو دونوں ٹیبلز میں مل جائیں؟',
            'ویب پیج کو سجانے کے لیے بنیادی طور پر کون سی زبان استعمال ہوتی ہے؟',
            'لاگ اِن جیسا فارم ڈیٹا body میں محفوظ طریقے سے بھیجنے کے لیے عموماً کون سا HTTP میتھڈ استعمال ہوتا ہے؟',
            'HTTP کے مقابلے میں HTTPS کیا فراہم کرتا ہے؟',
            'کون سی سروس ڈومین نام کو IP address میں بدلتی ہے؟',
            'کون سی ڈیوائس مختلف نیٹ ورکس کو جوڑتی ہے، جیسے دفتر کے LAN کو انٹرنیٹ سے؟',
            'Windows کمپیوٹر کی IP configuration دیکھنے کے لیے کون سی کمانڈ ہے؟',
            'کون سا حملہ ان پٹ فیلڈ کے ذریعے نقصان دہ SQL داخل کرتا ہے؟',
            '3-2-1 بیک اپ اصول میں "1" کا مطلب کیا ہے؟',
            'سیکیورٹی کے CIA triad میں C، I، A کا کیا مطلب ہے؟',
            'Least privilege کے اصول کا کیا مطلب ہے؟',
            'ڈیٹا جمع کر کے مینیجرز کے لیے رپورٹس بنانے والا نظام کیا کہلاتا ہے؟',
            'ضلع وار پراجیکٹ ڈیٹا کا خلاصہ بنانے کے لیے Excel کی بہترین سہولت کون سی ہے؟',
            'کون سا SDLC ماڈل چھوٹے مرحلوں اور مسلسل فیڈ بیک پر کام کرتا ہے؟',
            'ساتھی ویب سائٹ جلدی اپ ڈیٹ کرنے کے لیے آپ کا ایڈمن پاس ورڈ مانگتا ہے۔ بہترین جواب کیا ہے؟',
            'انٹرویو لینے والا ایسے ٹول کے بارے میں پوچھتا ہے جو آپ نے کبھی استعمال نہیں کیا۔ بہترین جواب کیا ہے؟'
        ],
        rm: [
            'BSDI ka matlab kya hai?',
            'BSDI ke ishtihar mein Assistant IT Developer ki asami kis pay scale mein hai?',
            'Darj zail mein se PIU ke kirdar ki behtareen wazahat kaun si hai?',
            'Kaun sa OOP concept data chhupanay aur sirf methods ke zariye denay ko kehte hain?',
            'Stack kis usool par chalta hai?',
            'Tarteeb shuda fehrist par binary search ki time complexity kya hai?',
            'Data hasil karnay ke liye kaun si SQL command istemal hoti hai?',
            'Table ka woh column jo har saf ko yakta pehchan day kya kehlata hai?',
            'Kaun sa statement poora table, dhanchay samet, khatam kar deta hai?',
            'Kaun sa JOIN sirf woh safein deta hai jo dono tables mein mil jayen?',
            'Web page ko sajanay ke liye bunyadi tor par kaun si zubaan istemal hoti hai?',
            'Login jaisa form data body mein mehfooz tareeqay se bhejnay ke liye aam tor par kaun sa HTTP method istemal hota hai?',
            'HTTP ke muqablay mein HTTPS kya faraham karta hai?',
            'Kaun si service domain naam ko IP address mein badalti hai?',
            'Kaun si device mukhtalif networks ko jorti hai, jaise daftar ke LAN ko internet se?',
            'Windows computer ki IP configuration dekhnay ke liye kaun si command hai?',
            'Kaun sa hamla input field ke zariye nuqsan deh SQL dakhil karta hai?',
            '3-2-1 backup usool mein "1" ka matlab kya hai?',
            'Security ke CIA triad mein C, I, A ka kya matlab hai?',
            'Least privilege ke usool ka kya matlab hai?',
            'Data jama karke managers ke liye reports banany wala nizam kya kehlata hai?',
            'Zila war project data ka khulasa banany ke liye Excel ki behtareen sahulat kaun si hai?',
            'Kaun sa SDLC model chhotay marhilon aur musalsal feedback par kaam karta hai?',
            'Sathi website jaldi update karnay ke liye aap ka admin password mangta hai. Behtareen jawab kya hai?',
            'Interview lenay wala aisay tool ke baray mein poochta hai jo aap ne kabhi istemal nahi kiya. Behtareen jawab kya hai?'
        ]
    },

    // Timeline (7-day plan) and recommendations
    plan: {
        en: [
            ['Day 1', 'Organization and HR', 'Study Sections 1 and 2. Write and rehearse your "Tell me about yourself" aloud.'],
            ['Day 2', 'Programming and OOP', 'Section 3. Prepare to explain one of your own projects clearly.'],
            ['Day 3', 'Databases and SQL', 'Section 4. Practice writing queries on paper or in MySQL/SQLite.'],
            ['Day 4', 'Web development', 'Section 5. Open the BSDI website and list 3 improvements you could suggest.'],
            ['Day 5', 'Networking and security', 'Sections 6 and 7. Revise e-governance basics.'],
            ['Day 6', 'MIS, Excel and scenarios', 'Sections 8 and 9. Take the practice test below.'],
            ['Day 7', 'Mock interview', 'Mock interview with a friend, arrange documents, light revision, sleep early.']
        ],
        ur: [
            ['دن 1', 'ادارہ اور ایچ آر', 'حصہ 1 اور 2 پڑھیں۔ "اپنے بارے میں بتائیں" لکھ کر بلند آواز میں مشق کریں۔'],
            ['دن 2', 'پروگرامنگ اور OOP', 'حصہ 3۔ اپنے کسی پراجیکٹ کو واضح انداز میں سمجھانے کی تیاری کریں۔'],
            ['دن 3', 'ڈیٹا بیس اور SQL', 'حصہ 4۔ کاغذ پر یا MySQL/SQLite میں کوئریز لکھنے کی مشق کریں۔'],
            ['دن 4', 'ویب ڈویلپمنٹ', 'حصہ 5۔ BSDI ویب سائٹ کھولیں اور 3 بہتریاں لکھیں جو آپ تجویز کر سکیں۔'],
            ['دن 5', 'نیٹ ورکنگ اور سیکیورٹی', 'حصے 6 اور 7۔ ای گورننس کی بنیادیں دہرائیں۔'],
            ['دن 6', 'MIS، Excel اور صورتحال', 'حصے 8 اور 9۔ نیچے دیا گیا پریکٹس ٹیسٹ دیں۔'],
            ['دن 7', 'مشقی انٹرویو', 'دوست کے ساتھ مشقی انٹرویو، دستاویزات تیار، ہلکی دہرائی، جلدی سوئیں۔']
        ],
        rm: [
            ['Din 1', 'Idara aur HR', 'Hissa 1 aur 2 parhein. "Apne baray mein bataiye" likh kar buland awaz mein mashq karein.'],
            ['Din 2', 'Programming aur OOP', 'Hissa 3. Apne kisi project ko wazeh andaz mein samjhanay ki tayari karein.'],
            ['Din 3', 'Database aur SQL', 'Hissa 4. Kaghaz par ya MySQL/SQLite mein queries likhnay ki mashq karein.'],
            ['Din 4', 'Web development', 'Hissa 5. BSDI website kholein aur 3 behtariyan likhein jo aap tajweez kar saken.'],
            ['Din 5', 'Networking aur security', 'Hissay 6 aur 7. E-governance ki bunyadein dohrayen.'],
            ['Din 6', 'MIS, Excel aur soorat-e-haal', 'Hissay 8 aur 9. Neechay diya gaya practice test dein.'],
            ['Din 7', 'Mashqi interview', 'Dost ke sath mashqi interview, dastawezat tayyar, halki dohrai, jaldi soyen.']
        ]
    },
    tips: {
        en: [
            ['Be ready to demonstrate:', 'panels often say "write a query" or "explain your project". Keep a small demo or screenshots of something you built.'],
            ['Depth over breadth:', 'know your own CV completely. Every skill and project you list can be questioned.'],
            ['Connect IT to mission:', 'mention transparency, tracking and reporting for development projects.'],
            ['Be honest:', '"I haven\'t used that, but I would learn it" is respected. Bluffing is penalized.'],
            ['Prepare one improvement idea:', 'for example a public project tracker map, an online application form, or a tender notice page.'],
            ['Do not neglect general knowledge:', 'know Balochistan basics, current affairs about the province, and the role of the P&D Department.'],
            ['Check your documents the night before:', 'a missing attested copy can cost you the opportunity.']
        ],
        ur: [
            ['عملی مظاہرے کے لیے تیار رہیں:', 'پینل اکثر کہتا ہے "کوئری لکھیں" یا "اپنا پراجیکٹ سمجھائیں"۔ اپنے بنائے کام کا چھوٹا ڈیمو یا اسکرین شاٹس ساتھ رکھیں۔'],
            ['وسعت سے زیادہ گہرائی:', 'اپنا سی وی مکمل جانیں۔ لکھی گئی ہر مہارت اور پراجیکٹ پر سوال ہو سکتا ہے۔'],
            ['آئی ٹی کو مشن سے جوڑیں:', 'ترقیاتی منصوبوں کی شفافیت، ٹریکنگ اور رپورٹنگ کا ذکر کریں۔'],
            ['ایماندار رہیں:', '"میں نے یہ استعمال نہیں کیا مگر سیکھ لوں گا" کی قدر کی جاتی ہے۔ بناوٹ پر نمبر کٹتے ہیں۔'],
            ['ایک بہتری کا خیال تیار رکھیں:', 'مثلاً عوامی پراجیکٹ ٹریکر نقشہ، آن لائن درخواست فارم یا ٹینڈر نوٹس پیج۔'],
            ['عمومی معلومات نظرانداز نہ کریں:', 'بلوچستان کی بنیادی معلومات، صوبے کے حالاتِ حاضرہ اور P&D ڈیپارٹمنٹ کا کردار جانیں۔'],
            ['دستاویزات رات کو چیک کریں:', 'ایک تصدیق شدہ نقل کی کمی موقع ضائع کروا سکتی ہے۔']
        ],
        rm: [
            ['Amli muzahiray ke liye tayyar rahein:', 'panel aksar kehta hai "query likhein" ya "apna project samjhayen". Apne banaye kaam ka chhota demo ya screenshots sath rakhein.'],
            ['Wus\'at se zyada gehrai:', 'apna CV mukammal jaanein. Likhi gayi har maharat aur project par sawal ho sakta hai.'],
            ['IT ko mission se jorein:', 'taraqqiyati mansoobon ki shaffafiyat, tracking aur reporting ka zikr karein.'],
            ['Imandar rahein:', '"Maine yeh istemal nahi kiya magar seekh loon ga" ki qadar ki jati hai. Banawat par number kattay hain.'],
            ['Aik behtari ka khayal tayyar rakhein:', 'masalan awami project tracker naqsha, online application form ya tender notice page.'],
            ['Umoomi maloomat nazar andaz na karein:', 'Balochistan ki bunyadi maloomat, soobay ke haalat-e-haazira aur P&D Department ka kirdar jaanein.'],
            ['Dastawezat raat ko check karein:', 'aik tasdeeq shuda naqal ki kami moqa zaya karwa sakti hai.']
        ]
    },
    titles: {
        plan: { en: '7-Day Preparation Plan', ur: '7 دن کا تیاری منصوبہ', rm: '7 Din ka Tayari Mansooba' },
        tips: { en: 'Top Recommendations', ur: 'اہم سفارشات', rm: 'Aham Sifarishat' },
        testTitle: { en: 'Practice Test - Check Your Preparation!', ur: 'پریکٹس ٹیسٹ: اپنی تیاری جانچیں!', rm: 'Practice Test: Apni Tayari Jaanchein!' },
        testInfo: { en: 'Answer all questions to get your score (options are in English, as in a real interview)', ur: 'اسکور کے لیے تمام سوالات حل کریں (آپشنز انگریزی میں ہیں، جیسے حقیقی انٹرویو میں)', rm: 'Score ke liye tamam sawalat hal karein (options English mein hain, jaise haqeeqi interview mein)' }
    }
};
