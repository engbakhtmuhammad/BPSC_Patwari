// Islamiat Subject Content - Complete Preparation Material
document.addEventListener('DOMContentLoaded', function() {
    const islamiatContent = document.getElementById('islamiat-content');
    
    const content = `
        ${createTopicSection('📖', 'The Holy Quran: Introduction and Virtues',
            'The Quran is the final divine book revealed to Prophet Muhammad (PBUH), the ultimate guide for humanity.',
            `
            ${createQAItem('Q1. What is the Holy Quran?', `
                <p><strong>The Holy Quran is the last divine book revealed by Allah to Prophet Muhammad (PBUH).</strong></p>
                <ul>
                    <li><strong>Language:</strong> Arabic</li>
                    <li><strong>Revelation Period:</strong> 23 years (610-632 CE)</li>
                    <li><strong>Revelation Places:</strong> Makkah and Madinah</li>
                    <li><strong>First Revelation:</strong> Cave Hira (first five verses of Surah Al-Alaq)</li>
                    <li><strong>Last Revelation:</strong> Verse of Surah Al-Ma'idah</li>
                    <li><strong>Chapters (Surahs):</strong> 114</li>
                    <li><strong>Verses (Ayat):</strong> Approximately 6,236</li>
                    <li><strong>Parts (Paras/Juz):</strong> 30</li>
                </ul>
                <div class="highlight-box">
                    <p><strong>Special Features:</strong></p>
                    <ul>
                        <li>Unchanged since revelation - protected by Allah</li>
                        <li>Miracle of Prophet Muhammad (PBUH)</li>
                        <li>Complete guidance for all aspects of life</li>
                        <li>Memorized by millions (Huffaz)</li>
                    </ul>
                </div>
            `)}

            ${createQAItem('Q2. What are the virtues and importance of the Quran?', `
                <p><strong>Virtues of the Holy Quran:</strong></p>
                <ol>
                    <li><strong>Source of Guidance:</strong>
                        <ul><li>"This is the Book about which there is no doubt, a guidance for those conscious of Allah." (2:2)</li></ul>
                    </li>
                    <li><strong>Complete Code of Life:</strong>
                        <ul><li>Contains guidance for all aspects: worship, social, economic, political</li></ul>
                    </li>
                    <li><strong>Reward for Recitation:</strong>
                        <ul>
                            <li>Each letter brings 10 rewards (Hasanat)</li>
                            <li>"Whoever recites a letter from the Book of Allah, he will have a reward." (Hadith)</li>
                        </ul>
                    </li>
                    <li><strong>Intercession on Day of Judgment:</strong>
                        <ul><li>Quran will intercede for those who recited and acted upon it</li></ul>
                    </li>
                    <li><strong>Healing and Mercy:</strong>
                        <ul><li>"And We send down of the Quran that which is healing and mercy." (17:82)</li></ul>
                    </li>
                    <li><strong>Protection from Evil:</strong>
                        <ul><li>Ayat al-Kursi provides protection</li></ul>
                    </li>
                </ol>
            `)}

            ${createQAItem('Q3. What are important Surahs and their themes?', `
                <p><strong>Key Surahs and Their Significance:</strong></p>
                <table class="comparison-table">
                    <tr>
                        <th>Surah Name</th>
                        <th>Meaning</th>
                        <th>Main Theme</th>
                    </tr>
                    <tr>
                        <td>Al-Fatihah</td>
                        <td>The Opening</td>
                        <td>Essential prayer, recited in every Salah</td>
                    </tr>
                    <tr>
                        <td>Al-Baqarah</td>
                        <td>The Cow</td>
                        <td>Longest Surah, comprehensive guidance</td>
                    </tr>
                    <tr>
                        <td>Al-Ikhlas</td>
                        <td>The Purity</td>
                        <td>Tawheed (Oneness of Allah)</td>
                    </tr>
                    <tr>
                        <td>Al-Falaq</td>
                        <td>The Daybreak</td>
                        <td>Seeking protection from evil</td>
                    </tr>
                    <tr>
                        <td>An-Nas</td>
                        <td>Mankind</td>
                        <td>Protection from whispers of Satan</td>
                    </tr>
                    <tr>
                        <td>Yasin</td>
                        <td>Yasin</td>
                        <td>Heart of Quran, Day of Judgment</td>
                    </tr>
                    <tr>
                        <td>Al-Mulk</td>
                        <td>The Sovereignty</td>
                        <td>Protection in grave</td>
                    </tr>
                </table>
            `)}

            ${createQAItem('Q4. What are our duties towards the Quran?', `
                <p><strong>Responsibilities of Muslims:</strong></p>
                <ul>
                    <li><strong>Recitation (Tilawat):</strong> Read regularly with proper pronunciation (Tajweed)</li>
                    <li><strong>Understanding:</strong> Learn the meanings and translation</li>
                    <li><strong>Memorization:</strong> Memorize as much as possible, especially daily Surahs</li>
                    <li><strong>Acting Upon It:</strong> Implement Quranic teachings in daily life</li>
                    <li><strong>Teaching:</strong> Spread the message to others</li>
                    <li><strong>Respect:</strong> Handle with cleanliness and respect</li>
                    <li><strong>Listening Attentively:</strong> When Quran is being recited</li>
                </ul>
            `)}
        `)}

        ${createTopicSection('🕌', 'Beliefs and Worship',
            'The Five Pillars of Islam and Six Articles of Faith form the foundation of Islamic belief and practice.',
            `
            ${createQAItem('Q1. What are the Six Articles of Faith (Iman-e-Mufassal)?', `
                <p><strong>Six Pillars of Iman:</strong></p>
                <ol>
                    <li><strong>Belief in Allah (Tawheed):</strong>
                        <ul>
                            <li>Allah is One, Creator, Sustainer</li>
                            <li>No partner, no equal</li>
                            <li>99 Beautiful Names (Asma-ul-Husna)</li>
                        </ul>
                    </li>
                    <li><strong>Belief in Angels (Malaika):</strong>
                        <ul>
                            <li>Created from light (Noor)</li>
                            <li>Always obey Allah</li>
                            <li>Important Angels: Jibreel (revelation), Mikael (provision), Israfeel (trumpet), Azrael (death)</li>
                        </ul>
                    </li>
                    <li><strong>Belief in Divine Books:</strong>
                        <ul>
                            <li>Torah (to Musa AS)</li>
                            <li>Zabur (to Dawud AS)</li>
                            <li>Injeel (to Isa AS)</li>
                            <li>Quran (to Muhammad PBUH) - Final and preserved</li>
                        </ul>
                    </li>
                    <li><strong>Belief in Prophets (Ambiya):</strong>
                        <ul>
                            <li>124,000 Prophets sent</li>
                            <li>25 mentioned in Quran</li>
                            <li>First: Adam AS, Last: Muhammad PBUH (Seal of Prophets)</li>
                            <li>Ulul Azm (5 greatest): Nuh, Ibrahim, Musa, Isa, Muhammad (Peace be upon them all)</li>
                        </ul>
                    </li>
                    <li><strong>Belief in Day of Judgment (Qiyamah):</strong>
                        <ul>
                            <li>Life after death</li>
                            <li>Resurrection and accountability</li>
                            <li>Heaven (Jannah) for believers</li>
                            <li>Hell (Jahannam) for disbelievers</li>
                        </ul>
                    </li>
                    <li><strong>Belief in Divine Decree (Taqdeer):</strong>
                        <ul>
                            <li>Good and bad from Allah</li>
                            <li>Allah has complete knowledge</li>
                            <li>Humans have free will but within Allah's plan</li>
                        </ul>
                    </li>
                </ol>
            `)}

            ${createQAItem('Q2. What are the Five Pillars of Islam?', `
                <p><strong>Five Pillars (Arkan-e-Islam):</strong></p>
                <ol>
                    <li><strong>Shahadah (Declaration of Faith):</strong>
                        <div class="formula-box">
                            <p>"La ilaha illallah, Muhammadur Rasulullah"</p>
                            <p>"There is no god but Allah, Muhammad is the Messenger of Allah"</p>
                        </div>
                        <ul>
                            <li>First and most important pillar</li>
                            <li>Must be said with belief and understanding</li>
                        </ul>
                    </li>
                    <li><strong>Salah (Prayer):</strong>
                        <ul>
                            <li>Five daily prayers: Fajr, Zuhr, Asr, Maghrib, Isha</li>
                            <li>Obligatory on every adult Muslim</li>
                            <li>Direct communication with Allah</li>
                            <li>Conditions: Purity, facing Qibla, proper time</li>
                        </ul>
                    </li>
                    <li><strong>Zakah (Almsgiving):</strong>
                        <ul>
                            <li>2.5% of saved wealth given to poor</li>
                            <li>Purifies wealth</li>
                            <li>Only for those who have Nisab (minimum wealth)</li>
                            <li>8 categories of recipients in Quran</li>
                        </ul>
                    </li>
                    <li><strong>Sawm (Fasting):</strong>
                        <ul>
                            <li>Fasting during Ramadan (9th Islamic month)</li>
                            <li>From dawn (Fajr) to sunset (Maghrib)</li>
                            <li>Abstain from food, drink, and desires</li>
                            <li>Develops self-control and taqwa</li>
                        </ul>
                    </li>
                    <li><strong>Hajj (Pilgrimage):</strong>
                        <ul>
                            <li>Pilgrimage to Makkah once in lifetime</li>
                            <li>Only for those physically and financially able</li>
                            <li>Performed in Dhul Hijjah (12th Islamic month)</li>
                            <li>Unity of Muslims from all over world</li>
                        </ul>
                    </li>
                </ol>
            `)}

            ${createQAItem('Q3. What is Salah and its importance?', `
                <p><strong>Salah (Prayer) - Pillar of Religion:</strong></p>
                <div class="highlight-box">
                    <p><strong>"Salah is the pillar of religion. Whoever establishes it, establishes religion; and whoever abandons it, destroys religion." (Hadith)</strong></p>
                </div>
                <p><strong>Five Daily Prayers:</strong></p>
                <table class="comparison-table">
                    <tr>
                        <th>Prayer</th>
                        <th>Time</th>
                        <th>Fard Rakats</th>
                    </tr>
                    <tr>
                        <td>Fajr</td>
                        <td>Dawn to sunrise</td>
                        <td>2</td>
                    </tr>
                    <tr>
                        <td>Zuhr</td>
                        <td>After noon</td>
                        <td>4</td>
                    </tr>
                    <tr>
                        <td>Asr</td>
                        <td>Afternoon</td>
                        <td>4</td>
                    </tr>
                    <tr>
                        <td>Maghrib</td>
                        <td>After sunset</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <td>Isha</td>
                        <td>Night</td>
                        <td>4</td>
                    </tr>
                </table>
                <p><strong>Benefits of Salah:</strong></p>
                <ul>
                    <li>Strengthens connection with Allah</li>
                    <li>Prevents from sins and wrongdoing</li>
                    <li>Brings peace to heart</li>
                    <li>Physical exercise and discipline</li>
                    <li>Erases minor sins</li>
                </ul>
            `)}

            ${createQAItem('Q4. What is Zakah and its purpose?', `
                <p><strong>Zakah - Purification of Wealth:</strong></p>
                <ul>
                    <li><strong>Rate:</strong> 2.5% of savings held for one lunar year</li>
                    <li><strong>Nisab:</strong> Minimum wealth = value of 87.48 grams of gold or 612.36 grams of silver</li>
                </ul>
                <p><strong>Who Receives Zakah (8 Categories):</strong></p>
                <ol>
                    <li>Fuqara (Poor who have nothing)</li>
                    <li>Masakeen (Needy who have little)</li>
                    <li>Amileen (Those who collect Zakah)</li>
                    <li>Muallaf (New Muslims to strengthen faith)</li>
                    <li>Riqab (Slaves to be freed)</li>
                    <li>Gharimeen (Those in debt)</li>
                    <li>Fi Sabilillah (In the path of Allah)</li>
                    <li>Ibn-us-Sabeel (Travelers in need)</li>
                </ol>
                <p><strong>Benefits:</strong></p>
                <ul>
                    <li>Purifies wealth and soul</li>
                    <li>Helps poor and reduces poverty</li>
                    <li>Creates balance in society</li>
                    <li>Removes greed and selfishness</li>
                    <li>Brings blessings (Barakah) in wealth</li>
                </ul>
            `)}
        `)}

        ${createTopicSection('🌙', 'Seerat-e-Tayyaba (Life of Prophet Muhammad PBUH)',
            'The Prophet\'s life is the perfect example for humanity to follow.',
            `
            ${createQAItem('Q1. What is the early life of Prophet Muhammad (PBUH)?', `
                <p><strong>Birth and Early Years:</strong></p>
                <ul>
                    <li><strong>Birth:</strong> 12 Rabi-ul-Awwal, 571 CE, in Makkah (Year of Elephant)</li>
                    <li><strong>Father:</strong> Abdullah (died before Prophet's birth)</li>
                    <li><strong>Mother:</strong> Aminah (died when he was 6 years old)</li>
                    <li><strong>Grandfather:</strong> Abdul Muttalib (raised him till age 8)</li>
                    <li><strong>Uncle:</strong> Abu Talib (raised him after grandfather's death)</li>
                    <li><strong>Foster Mother:</strong> Halima Sa'dia (nursed him in desert)</li>
                </ul>
                <div class="highlight-box">
                    <p><strong>Titles Before Prophethood:</strong></p>
                    <ul>
                        <li><strong>Al-Ameen:</strong> The Trustworthy</li>
                        <li><strong>As-Sadiq:</strong> The Truthful</li>
                    </ul>
                </div>
                <p><strong>Youth and Marriage:</strong></p>
                <ul>
                    <li>Worked as shepherd in youth</li>
                    <li>Later managed trade business of Khadijah (RA)</li>
                    <li>Married Khadijah (RA) at age 25 (she was 40)</li>
                    <li>Known for honesty and good character</li>
                </ul>
            `)}

            ${createQAItem('Q2. How did Prophet Muhammad (PBUH) receive Prophethood?', `
                <p><strong>Beginning of Prophethood:</strong></p>
                <ul>
                    <li><strong>Age:</strong> 40 years</li>
                    <li><strong>Place:</strong> Cave Hira (Mountain Jabal-un-Noor near Makkah)</li>
                    <li><strong>Month:</strong> Ramadan</li>
                    <li><strong>First Revelation:</strong> First five verses of Surah Al-Alaq</li>
                    <li><strong>Angel:</strong> Jibreel (AS) brought the revelation</li>
                </ul>
                <div class="example-box">
                    <h4>First Revealed Verses:</h4>
                    <p>"Read! In the Name of your Lord Who created, created man from a clot. Read! And your Lord is the Most Generous, Who taught by the pen, taught man what he knew not." (96:1-5)</p>
                </div>
                <p><strong>First Believers:</strong></p>
                <ul>
                    <li><strong>First Woman:</strong> Khadijah (RA) - his wife</li>
                    <li><strong>First Man:</strong> Abu Bakr (RA) - his close friend</li>
                    <li><strong>First Child:</strong> Ali (RA) - his cousin</li>
                    <li><strong>First Slave:</strong> Zaid bin Harith (RA)</li>
                </ul>
            `)}

            ${createQAItem('Q3. What hardships did Prophet (PBUH) face in Makkah?', `
                <p><strong>Opposition and Persecution in Makkah:</strong></p>
                <ol>
                    <li><strong>Personal Attacks:</strong>
                        <ul>
                            <li>Mocked and insulted</li>
                            <li>Called magician, poet, madman</li>
                            <li>Physical abuse (stones thrown, thorns in path)</li>
                        </ul>
                    </li>
                    <li><strong>Persecution of Early Muslims:</strong>
                        <ul>
                            <li>Bilal (RA) tortured in hot desert</li>
                            <li>Yasir and Sumayya (RA) martyred</li>
                            <li>Economic and social boycott (3 years in Shi'b Abi Talib)</li>
                        </ul>
                    </li>
                    <li><strong>Year of Sorrow (10th year of Prophethood):</strong>
                        <ul>
                            <li>Death of Khadijah (RA) - beloved wife and supporter</li>
                            <li>Death of Abu Talib - protective uncle</li>
                        </ul>
                    </li>
                    <li><strong>Journey to Taif:</strong>
                        <ul>
                            <li>Went to Taif seeking support</li>
                            <li>Rejected and pelted with stones</li>
                            <li>Bled heavily but forgave them</li>
                            <li>Angel offered to destroy them, but Prophet refused</li>
                        </ul>
                    </li>
                </ol>
                <div class="highlight-box">
                    <p><strong>Prophet's Patience:</strong> Despite all hardships, he never gave up and continued preaching with patience and wisdom.</p>
                </div>
            `)}

            ${createQAItem('Q4. What is Isra and Miraj?', `
                <p><strong>The Night Journey and Ascension:</strong></p>
                <p><strong>Isra (Night Journey):</strong></p>
                <ul>
                    <li>Journey from Masjid al-Haram (Makkah) to Masjid al-Aqsa (Jerusalem)</li>
                    <li>On Buraq (a heavenly creature)</li>
                    <li>Led prayer of all Prophets in Jerusalem</li>
                </ul>
                <p><strong>Miraj (Ascension to Heaven):</strong></p>
                <ul>
                    <li>Ascended through seven heavens</li>
                    <li>Met previous Prophets in each heaven</li>
                    <li>Reached Sidrat-ul-Muntaha</li>
                    <li>Received gift of five daily prayers (originally 50, reduced to 5)</li>
                    <li>Saw Paradise and Hell</li>
                </ul>
                <div class="highlight-box">
                    <p><strong>Significance:</strong> This miracle demonstrated Prophet's high status and gave him spiritual strength after the Year of Sorrow.</p>
                </div>
            `)}
        `)}

        ${createTopicSection('📚', 'Hadith and Sunnah',
            'Hadith are the sayings and actions of Prophet Muhammad (PBUH), the second source of Islamic law after the Quran.',
            `
            ${createQAItem('Q1. What are Hadith and Sunnah?', `
                <p><strong>Definitions:</strong></p>
                <ul>
                    <li><strong>Hadith:</strong> Sayings, actions, and approvals of Prophet Muhammad (PBUH)
                        <ul>
                            <li>Includes what he said, did, and approved</li>
                        </ul>
                    </li>
                    <li><strong>Sunnah:</strong> The way and practice of the Prophet (PBUH)
                        <ul>
                            <li>Practical demonstration of Quranic teachings</li>
                        </ul>
                    </li>
                </ul>
                <div class="highlight-box">
                    <p><strong>Importance:</strong></p>
                    <ul>
                        <li>Second source of Islamic law after Quran</li>
                        <li>Explains and elaborates Quranic verses</li>
                        <li>Provides practical guidance for daily life</li>
                        <li>"I have left among you two things; you will never go astray as long as you hold fast to them: the Book of Allah and my Sunnah." (Hadith)</li>
                    </ul>
                </div>
            `)}

            ${createQAItem('Q2. What are the famous collections of Hadith?', `
                <p><strong>Six Authentic Books (Sihah Sitta):</strong></p>
                <ol>
                    <li><strong>Sahih Bukhari:</strong>
                        <ul>
                            <li>Compiled by Imam Bukhari</li>
                            <li>Most authentic book after Quran</li>
                            <li>Contains about 7,275 Hadiths</li>
                        </ul>
                    </li>
                    <li><strong>Sahih Muslim:</strong>
                        <ul>
                            <li>Compiled by Imam Muslim</li>
                            <li>Second most authentic</li>
                            <li>Contains about 12,000 Hadiths</li>
                        </ul>
                    </li>
                    <li><strong>Sunan Abu Dawud:</strong> Compiled by Imam Abu Dawud</li>
                    <li><strong>Jami' Tirmidhi:</strong> Compiled by Imam Tirmidhi</li>
                    <li><strong>Sunan An-Nasa'i:</strong> Compiled by Imam An-Nasa'i</li>
                    <li><strong>Sunan Ibn Majah:</strong> Compiled by Imam Ibn Majah</li>
                </ol>
            `)}

            ${createQAItem('Q3. What are some important Hadiths to know?', `
                <p><strong>Essential Hadiths for Daily Life:</strong></p>
                <div class="example-box">
                    <h4>1. On Faith:</h4>
                    <p>"The deeds are considered by intentions." (Bukhari)</p>
                    
                    <h4>2. On Good Character:</h4>
                    <p>"The best among you are those who have the best manners and character." (Bukhari)</p>
                    
                    <h4>3. On Knowledge:</h4>
                    <p>"Seeking knowledge is obligatory upon every Muslim." (Ibn Majah)</p>
                    
                    <h4>4. On Kindness:</h4>
                    <p>"He who does not show mercy to others, will not be shown mercy." (Bukhari)</p>
                    
                    <h4>5. On Parents:</h4>
                    <p>"Paradise lies under the feet of your mother." (Ahmad)</p>
                    
                    <h4>6. On Cleanliness:</h4>
                    <p>"Cleanliness is half of faith." (Muslim)</p>
                    
                    <h4>7. On Brotherhood:</h4>
                    <p>"None of you believes until he loves for his brother what he loves for himself." (Bukhari)</p>
                </div>
            `)}
        `)}

        ${createTopicSection('🕋', 'Migration to Madinah and Ghazwat',
            'Hijrah marked the beginning of Islamic calendar and establishment of Islamic state.',
            `
            ${createQAItem('Q1. What was the Migration (Hijrah) to Madinah?', `
                <p><strong>Hijrah - A Turning Point:</strong></p>
                <ul>
                    <li><strong>Date:</strong> 622 CE (1st Hijri)</li>
                    <li><strong>Reason:</strong> Persecution in Makkah became unbearable</li>
                    <li><strong>Invitation:</strong> People of Yathrib (Madinah) invited the Prophet</li>
                    <li><strong>Pledges:</strong> First and Second Pledge of Aqabah</li>
                </ul>
                <p><strong>Journey to Madinah:</strong></p>
                <ul>
                    <li>Quraish plotted to kill the Prophet</li>
                    <li>Ali (RA) slept in Prophet's bed as decoy</li>
                    <li>Prophet and Abu Bakr (RA) hid in Cave Thawr for 3 days</li>
                    <li>Spider web and bird's nest at cave entrance (miracle)</li>
                    <li>Safely reached Madinah and received warm welcome</li>
                </ul>
                <div class="highlight-box">
                    <p><strong>Significance:</strong> Hijrah marks the beginning of Islamic calendar (Hijri calendar). It shows that migration for faith is a great sacrifice.</p>
                </div>
            `)}

            ${createQAItem('Q2. What did Prophet (PBUH) do after reaching Madinah?', `
                <p><strong>Establishing Islamic Society in Madinah:</strong></p>
                <ol>
                    <li><strong>Built Masjid-e-Nabawi:</strong> First mosque in Madinah</li>
                    <li><strong>Brotherhood (Mu'akhaat):</strong>
                        <ul>
                            <li>Paired Muhajireen (Migrants) with Ansar (Helpers)</li>
                            <li>Created unity and cooperation</li>
                        </ul>
                    </li>
                    <li><strong>Constitution of Madinah:</strong>
                        <ul>
                            <li>First written constitution</li>
                            <li>Defined rights and duties of all groups</li>
                            <li>Established rule of law</li>
                        </ul>
                    </li>
                    <li><strong>Market System:</strong> Established honest trade practices</li>
                    <li><strong>Education:</strong> Promoted learning and teaching</li>
                </ol>
            `)}

            ${createQAItem('Q3. What are the major Ghazwat (Battles)?', `
                <p><strong>Important Battles of Prophet Muhammad (PBUH):</strong></p>
                <table class="comparison-table">
                    <tr>
                        <th>Battle</th>
                        <th>Year</th>
                        <th>Key Points</th>
                    </tr>
                    <tr>
                        <td>Badr</td>
                        <td>2 AH (624 CE)</td>
                        <td>First major battle; 313 Muslims vs 1000 Quraish; Muslim victory with Allah's help</td>
                    </tr>
                    <tr>
                        <td>Uhud</td>
                        <td>3 AH (625 CE)</td>
                        <td>Muslims initially winning but archers left positions; lesson in obedience</td>
                    </tr>
                    <tr>
                        <td>Khandaq (Trench)</td>
                        <td>5 AH (627 CE)</td>
                        <td>Dug trench around Madinah; enemies couldn't enter; psychological victory</td>
                    </tr>
                    <tr>
                        <td>Khaybar</td>
                        <td>7 AH (628 CE)</td>
                        <td>Against Jews of Khaybar; Ali (RA) opened the fort gate</td>
                    </tr>
                    <tr>
                        <td>Conquest of Makkah</td>
                        <td>8 AH (630 CE)</td>
                        <td>Peaceful conquest; Prophet forgave enemies; cleansed Kaaba of idols</td>
                    </tr>
                    <tr>
                        <td>Hunayn</td>
                        <td>8 AH (630 CE)</td>
                        <td>Against Hawazin tribe; Muslims learned not to be proud of numbers</td>
                    </tr>
                    <tr>
                        <td>Tabuk</td>
                        <td>9 AH (630 CE)</td>
                        <td>Last military expedition; against Romans; showed Muslim strength</td>
                    </tr>
                </table>
            `)}

            ${createQAItem('Q4. What was the Conquest of Makkah?', `
                <p><strong>Fath Makkah (Victory of Makkah):</strong></p>
                <ul>
                    <li><strong>Date:</strong> 8 AH (630 CE)</li>
                    <li><strong>Reason:</strong> Quraish broke Treaty of Hudaybiyyah</li>
                    <li><strong>Army:</strong> 10,000 Muslims marched to Makkah</li>
                    <li><strong>Conquest:</strong> Mostly peaceful, minimal bloodshed</li>
                </ul>
                <p><strong>After Conquest:</strong></p>
                <ul>
                    <li>Cleansed Kaaba of 360 idols</li>
                    <li>General amnesty announced</li>
                    <li>Famous words: "Go, you are free!" (to former enemies)</li>
                    <li>Example of forgiveness and mercy</li>
                    <li>Many enemies accepted Islam seeing Prophet's character</li>
                </ul>
                <div class="highlight-box">
                    <p><strong>Lesson:</strong> Victory with humility and forgiveness - the Prophet showed no revenge despite years of persecution.</p>
                </div>
            `)}
        `)}

        ${createTopicSection('💎', 'Ethics and Etiquette in Islam',
            'Islam emphasizes good character and ethical behavior in all aspects of life.',
            `
            ${createQAItem('Q1. What are the main Islamic ethical principles?', `
                <p><strong>Core Islamic Ethics:</strong></p>
                <ol>
                    <li><strong>Truthfulness (Sidq):</strong>
                        <ul>
                            <li>Always speak the truth</li>
                            <li>"Truthfulness leads to righteousness, and righteousness leads to Paradise." (Hadith)</li>
                        </ul>
                    </li>
                    <li><strong>Honesty (Amanah):</strong>
                        <ul>
                            <li>Be trustworthy in all dealings</li>
                            <li>Return trusts to their owners</li>
                        </ul>
                    </li>
                    <li><strong>Justice (Adl):</strong>
                        <ul>
                            <li>Be fair even with enemies</li>
                            <li>"O you who believe! Stand out firmly for justice." (Quran 4:135)</li>
                        </ul>
                    </li>
                    <li><strong>Kindness (Ihsan):</strong>
                        <ul>
                            <li>Be kind to all creation</li>
                            <li>Excellence in worship and dealings</li>
                        </ul>
                    </li>
                    <li><strong>Patience (Sabr):</strong>
                        <ul>
                            <li>Remain patient in difficulties</li>
                            <li>"Indeed, Allah is with the patient." (Quran 2:153)</li>
                        </ul>
                    </li>
                    <li><strong>Gratitude (Shukr):</strong>
                        <ul>
                            <li>Be thankful to Allah</li>
                            <li>"If you are grateful, I will surely increase you [in favor]." (Quran 14:7)</li>
                        </ul>
                    </li>
                </ol>
            `)}

            ${createQAItem('Q2. What are Islamic social etiquettes?', `
                <p><strong>Social Manners in Islam:</strong></p>
                <ul>
                    <li><strong>Greeting:</strong>
                        <ul>
                            <li>Say "Assalamu Alaikum" (Peace be upon you)</li>
                            <li>Reply "Wa Alaikum Assalam" (And peace be upon you too)</li>
                        </ul>
                    </li>
                    <li><strong>Smiling:</strong>
                        <ul>
                            <li>"Smiling in your brother's face is charity." (Hadith)</li>
                        </ul>
                    </li>
                    <li><strong>Speaking:</strong>
                        <ul>
                            <li>Speak gently and politely</li>
                            <li>Avoid harsh and foul language</li>
                            <li>"Speak good or remain silent." (Hadith)</li>
                        </ul>
                    </li>
                    <li><strong>Meeting People:</strong>
                        <ul>
                            <li>Shake hands</li>
                            <li>Inquire about well-being</li>
                            <li>Show respect to elders</li>
                        </ul>
                    </li>
                    <li><strong>Visiting:</strong>
                        <ul>
                            <li>Seek permission before entering</li>
                            <li>Don't overstay</li>
                            <li>Make dua for the host</li>
                        </ul>
                    </li>
                </ul>
            `)}

            ${createQAItem('Q3. What are rights of others in Islam?', `
                <p><strong>Rights and Responsibilities:</strong></p>
                <ol>
                    <li><strong>Rights of Parents:</strong>
                        <ul>
                            <li>Respect and obey them</li>
                            <li>Speak to them gently</li>
                            <li>Take care of them in old age</li>
                            <li>"And your Lord has decreed that you worship none but Him, and that you be dutiful to your parents." (Quran 17:23)</li>
                        </ul>
                    </li>
                    <li><strong>Rights of Neighbors:</strong>
                        <ul>
                            <li>Be kind and helpful</li>
                            <li>Don't cause harm or disturbance</li>
                            <li>Share food and gifts</li>
                        </ul>
                    </li>
                    <li><strong>Rights of Relatives:</strong>
                        <ul>
                            <li>Maintain family ties (Silah Rahmi)</li>
                            <li>Visit and help them</li>
                        </ul>
                    </li>
                    <li><strong>Rights of Friends:</strong>
                        <ul>
                            <li>Choose good company</li>
                            <li>Be loyal and supportive</li>
                            <li>"A person is upon the religion of his friend." (Hadith)</li>
                        </ul>
                    </li>
                    <li><strong>Rights of Teachers:</strong>
                        <ul>
                            <li>Respect and honor them</li>
                            <li>Listen and learn attentively</li>
                        </ul>
                    </li>
                </ol>
            `)}
        `)}

        ${createTopicSection('🌸', 'Chastity, Modesty, and Respect for Humanity',
            'Islam emphasizes moral purity, modest behavior, and respect for all human beings.',
            `
            ${createQAItem('Q1. What is the importance of modesty in Islam?', `
                <p><strong>Haya (Modesty) - A Branch of Faith:</strong></p>
                <ul>
                    <li>"Modesty (Haya) is part of faith (Iman)." (Hadith)</li>
                    <li><strong>Modesty means:</strong>
                        <ul>
                            <li>Being modest in dress and behavior</li>
                            <li>Lowering gaze (not staring at opposite gender)</li>
                            <li>Avoiding shameful acts</li>
                            <li>Speaking and acting decently</li>
                        </ul>
                    </li>
                </ul>
                <p><strong>Dress Code in Islam:</strong></p>
                <ul>
                    <li><strong>For Men:</strong> Cover from navel to knees (minimum); wear decent clothes</li>
                    <li><strong>For Women:</strong> Cover whole body except face and hands; wear loose and non-transparent clothes</li>
                    <li>Purpose: Protection, dignity, and prevention of evil</li>
                </ul>
            `)}

            ${createQAItem('Q2. What is Islam\'s teaching on respect for humanity?', `
                <p><strong>Human Dignity in Islam:</strong></p>
                <ul>
                    <li>"We have honored the children of Adam." (Quran 17:70)</li>
                    <li>All humans are created by Allah and deserve respect</li>
                    <li>No discrimination based on color, race, or nationality</li>
                </ul>
                <p><strong>Equality and Brotherhood:</strong></p>
                <ul>
                    <li>"O mankind! We created you from a male and female, and made you into nations and tribes, that you may know one another. The most honored of you in the sight of Allah is the most righteous." (Quran 49:13)</li>
                    <li>"All mankind is from Adam and Eve. An Arab has no superiority over a non-Arab, nor does a non-Arab have superiority over an Arab; a white has no superiority over a black, nor does a black have superiority over a white - except by piety and good action." (Last Sermon)</li>
                </ul>
                <p><strong>Rights of All People:</strong></p>
                <ul>
                    <li>Right to life</li>
                    <li>Right to justice</li>
                    <li>Right to property</li>
                    <li>Right to freedom (within limits of Shariah)</li>
                    <li>Right to be treated with dignity</li>
                </ul>
            `)}

            ${createQAItem('Q3. What are Islamic teachings on relationships?', `
                <p><strong>Pure Relationships in Islam:</strong></p>
                <ul>
                    <li><strong>Between Men and Women:</strong>
                        <ul>
                            <li>Maintain respectful distance (non-mahram)</li>
                            <li>Lower gaze</li>
                            <li>Avoid free mixing</li>
                            <li>Speak with necessity and modesty</li>
                        </ul>
                    </li>
                    <li><strong>Marriage:</strong>
                        <ul>
                            <li>Halal way to fulfill needs</li>
                            <li>Based on mutual respect, love, and understanding</li>
                            <li>Both spouses have rights and responsibilities</li>
                        </ul>
                    </li>
                    <li><strong>Family Values:</strong>
                        <ul>
                            <li>Family is the foundation of society</li>
                            <li>Love, mercy, and cooperation</li>
                            <li>"And among His signs is that He created for you mates from among yourselves, that you may dwell in tranquility with them." (Quran 30:21)</li>
                        </ul>
                    </li>
                </ul>
            `)}
        `)}

        <div class="resources">
            <h4>📚 Study Resources</h4>
            <ul>
                <li>Read prescribed Islamiat textbook daily (New College Publication, Quetta)</li>
                <li>Memorize names of important events with their Islamic year</li>
                <li>Learn names of all Prophets mentioned in Quran</li>
                <li>Memorize important Hadiths in Arabic and Urdu</li>
                <li>Understand the sequence of events in Prophet's life</li>
                <li>Make timeline charts for Seerah and battles</li>
                <li>Practice MCQs on all topics daily</li>
                <li>Revise Iman-e-Mufassal and Arkan-e-Islam thoroughly</li>
                <li>Understand concepts rather than just memorizing</li>
            </ul>
        </div>
    `;
    
    // Add MCQ Test
    const islamiatMCQs = [
        {
            question: "How many pillars (Arkan) are there in Islam?",
            options: ["3", "4", "5", "6"],
            correct: 2
        },
        {
            question: "What is the first pillar of Islam?",
            options: ["Salah", "Sawm", "Kalimah (Shahada)", "Zakat"],
            correct: 2
        },
        {
            question: "How many times must Muslims pray (Salah) daily?",
            options: ["3", "4", "5", "6"],
            correct: 2
        },
        {
            question: "In which month do Muslims fast (Sawm)?",
            options: ["Muharram", "Ramadan", "Shawwal", "Rajab"],
            correct: 1
        },
        {
            question: "What is Zakat?",
            options: ["Prayer", "Fasting", "Charity/Alms", "Pilgrimage"],
            correct: 2
        },
        {
            question: "What is the pilgrimage to Makkah called?",
            options: ["Umrah", "Hajj", "Ziyarat", "Tawaf"],
            correct: 1
        },
        {
            question: "How many prophets are mentioned in the Quran approximately?",
            options: ["15", "20", "25", "30"],
            correct: 2
        },
        {
            question: "Who was the last Prophet of Islam?",
            options: ["Hazrat Isa (AS)", "Hazrat Musa (AS)", "Hazrat Muhammad (PBUH)", "Hazrat Ibrahim (AS)"],
            correct: 2
        },
        {
            question: "What is the holy book of Muslims?",
            options: ["Torah", "Bible", "Quran", "Zabur"],
            correct: 2
        },
        {
            question: "How many articles of faith (Iman) are there?",
            options: ["4", "5", "6", "7"],
            correct: 2
        }
    ];
    
    window.islamiatMCQs = islamiatMCQs;
    
    islamiatContent.innerHTML = content + createMCQTest('islamiat', islamiatMCQs);
    reloadQA();
});
