// General Science Subject Content - Complete Preparation Material
document.addEventListener('DOMContentLoaded', function() {
    const generalScienceContent = document.getElementById('general-science-content');
    
    const content = `
        ${createTopicSection('⚡', 'Energy and its Procurement',
            'Energy is the capacity to do work and is essential for all life processes and human activities.',
            `
            ${createQAItem('Q1. What is Energy and what are its types?', `
                <p><strong>Energy:</strong> The ability to do work</p>
                <p><strong>Main Types of Energy:</strong></p>
                <ol>
                    <li><strong>Kinetic Energy:</strong> Energy of motion
                        <ul><li>Example: Moving car, flowing water, wind</li></ul>
                    </li>
                    <li><strong>Potential Energy:</strong> Stored energy
                        <ul><li>Example: Water in dam, stretched spring, food</li></ul>
                    </li>
                    <li><strong>Heat/Thermal Energy:</strong> Energy from temperature
                        <ul><li>Example: Hot water, fire, sun</li></ul>
                    </li>
                    <li><strong>Light Energy:</strong> Energy from light
                        <ul><li>Example: Sunlight, bulb, laser</li></ul>
                    </li>
                    <li><strong>Electrical Energy:</strong> Energy from electricity
                        <ul><li>Example: Battery, power plant</li></ul>
                    </li>
                    <li><strong>Chemical Energy:</strong> Stored in chemical bonds
                        <ul><li>Example: Food, fuel, battery</li></ul>
                    </li>
                    <li><strong>Nuclear Energy:</strong> From atomic nucleus
                        <ul><li>Example: Nuclear power plant, sun</li></ul>
                    </li>
                </ol>
                <div class="highlight-box">
                    <p><strong>Law of Conservation of Energy:</strong> Energy cannot be created or destroyed, only transformed from one form to another.</p>
                </div>
            `)}

            ${createQAItem('Q2. What are energy sources?', `
                <p><strong>Energy Sources Classification:</strong></p>
                <table class="comparison-table">
                    <tr>
                        <th>Type</th>
                        <th>Examples</th>
                        <th>Characteristics</th>
                    </tr>
                    <tr>
                        <td><strong>Non-Renewable</strong></td>
                        <td>Coal, Oil, Natural Gas, Nuclear</td>
                        <td>Limited supply, will exhaust, cause pollution</td>
                    </tr>
                    <tr>
                        <td><strong>Renewable</strong></td>
                        <td>Solar, Wind, Hydro, Biomass</td>
                        <td>Unlimited supply, clean, environment-friendly</td>
                    </tr>
                </table>
                <p><strong>Fossil Fuels (Non-Renewable):</strong></p>
                <ul>
                    <li><strong>Coal:</strong> Formed from ancient plants; used for electricity</li>
                    <li><strong>Petroleum/Oil:</strong> Formed from marine organisms; used for transport</li>
                    <li><strong>Natural Gas:</strong> Found with petroleum; used for cooking and electricity</li>
                </ul>
                <div class="highlight-box">
                    <p><strong>Problem with Fossil Fuels:</strong> Cause air pollution, global warming, acid rain, and will run out in future.</p>
                </div>
            `)}

            ${createQAItem('Q3. How is electricity produced?', `
                <p><strong>Methods of Electricity Generation:</strong></p>
                <ol>
                    <li><strong>Thermal Power Plants:</strong>
                        <ul>
                            <li>Burn coal/oil/gas to heat water</li>
                            <li>Steam turns turbine</li>
                            <li>Generator produces electricity</li>
                        </ul>
                    </li>
                    <li><strong>Hydroelectric Power:</strong>
                        <ul>
                            <li>Water from dam falls on turbine</li>
                            <li>Turbine rotates generator</li>
                            <li>Clean and renewable</li>
                        </ul>
                    </li>
                    <li><strong>Nuclear Power:</strong>
                        <ul>
                            <li>Nuclear fission heats water</li>
                            <li>Very efficient but dangerous</li>
                        </ul>
                    </li>
                    <li><strong>Solar Power:</strong>
                        <ul>
                            <li>Solar panels convert sunlight to electricity</li>
                            <li>Clean and unlimited</li>
                        </ul>
                    </li>
                    <li><strong>Wind Power:</strong>
                        <ul>
                            <li>Wind turns turbine blades</li>
                            <li>Clean and renewable</li>
                        </ul>
                    </li>
                </ol>
            `)}
        `)}

        ${createTopicSection('⚛️', 'Structure of Atom and Radioactivity',
            'Atoms are the basic building blocks of matter, and some atoms are radioactive.',
            `
            ${createQAItem('Q1. What is the structure of an atom?', `
                <p><strong>Atom:</strong> Smallest unit of matter that cannot be divided by chemical means</p>
                <p><strong>Parts of an Atom:</strong></p>
                <ol>
                    <li><strong>Nucleus (Center):</strong>
                        <ul>
                            <li><strong>Protons:</strong> Positive charge (+), mass = 1 amu</li>
                            <li><strong>Neutrons:</strong> No charge (neutral), mass = 1 amu</li>
                        </ul>
                    </li>
                    <li><strong>Electron Cloud (Around Nucleus):</strong>
                        <ul>
                            <li><strong>Electrons:</strong> Negative charge (-), very small mass (~1/1840 amu)</li>
                            <li>Move in orbits/shells around nucleus</li>
                        </ul>
                    </li>
                </ol>
                <div class="formula-box">
                    <p><strong>Atomic Number (Z) = Number of Protons</strong></p>
                    <p><strong>Mass Number (A) = Protons + Neutrons</strong></p>
                    <p><strong>In neutral atom: Protons = Electrons</strong></p>
                </div>
                <div class="example-box">
                    <h4>Example: Carbon Atom</h4>
                    <ul>
                        <li>Protons = 6</li>
                        <li>Neutrons = 6</li>
                        <li>Electrons = 6</li>
                        <li>Atomic Number = 6</li>
                        <li>Mass Number = 12</li>
                    </ul>
                </div>
            `)}

            ${createQAItem('Q2. What is radioactivity?', `
                <p><strong>Radioactivity:</strong> Spontaneous emission of radiation from unstable atomic nuclei</p>
                <p><strong>Types of Radioactive Radiation:</strong></p>
                <table class="comparison-table">
                    <tr>
                        <th>Type</th>
                        <th>Symbol</th>
                        <th>Nature</th>
                        <th>Penetration</th>
                    </tr>
                    <tr>
                        <td>Alpha (α)</td>
                        <td>α or He²⁺</td>
                        <td>Helium nucleus (2 protons + 2 neutrons)</td>
                        <td>Least penetrating; stopped by paper</td>
                    </tr>
                    <tr>
                        <td>Beta (β)</td>
                        <td>β or e⁻</td>
                        <td>High-speed electrons</td>
                        <td>Medium; stopped by aluminum sheet</td>
                    </tr>
                    <tr>
                        <td>Gamma (γ)</td>
                        <td>γ</td>
                        <td>High-energy electromagnetic waves</td>
                        <td>Most penetrating; needs thick lead</td>
                    </tr>
                </table>
                <p><strong>Uses of Radioactivity:</strong></p>
                <ul>
                    <li><strong>Medicine:</strong> Cancer treatment (radiotherapy), X-rays, sterilization</li>
                    <li><strong>Agriculture:</strong> Pest control, food preservation</li>
                    <li><strong>Industry:</strong> Thickness measurement, detecting leaks</li>
                    <li><strong>Energy:</strong> Nuclear power plants</li>
                    <li><strong>Research:</strong> Carbon dating (determining age of fossils)</li>
                </ul>
                <div class="highlight-box">
                    <p><strong>Dangers:</strong> Harmful to living cells, causes cancer, mutations, radiation sickness. Must be handled carefully with proper shielding.</p>
                </div>
            `)}

            ${createQAItem('Q3. What is half-life?', `
                <p><strong>Half-Life:</strong> Time taken for half of a radioactive sample to decay</p>
                <div class="example-box">
                    <h4>Example:</h4>
                    <p>If a radioactive element has half-life of 10 years:</p>
                    <ul>
                        <li>Start: 100 grams</li>
                        <li>After 10 years: 50 grams left</li>
                        <li>After 20 years: 25 grams left</li>
                        <li>After 30 years: 12.5 grams left</li>
                    </ul>
                </div>
                <p><strong>Important Points:</strong></p>
                <ul>
                    <li>Different elements have different half-lives</li>
                    <li>Some have seconds, some have millions of years</li>
                    <li>Used in carbon dating and medical applications</li>
                </ul>
            `)}
        `)}

        ${createTopicSection('🔬', 'Elements Created in Laboratories',
            'Scientists can create new elements in laboratories through nuclear reactions.',
            `
            ${createQAItem('Q1. What are synthetic/artificial elements?', `
                <p><strong>Synthetic Elements:</strong> Elements that do not occur naturally and are created in laboratories</p>
                <ul>
                    <li>Also called artificial or man-made elements</li>
                    <li>Created by bombarding heavy elements with particles</li>
                    <li>Most are highly radioactive with short half-lives</li>
                    <li>Atomic number greater than 92 (Uranium)</li>
                </ul>
                <p><strong>Examples of Synthetic Elements:</strong></p>
                <table class="comparison-table">
                    <tr>
                        <th>Element</th>
                        <th>Symbol</th>
                        <th>Atomic Number</th>
                        <th>Named After</th>
                    </tr>
                    <tr>
                        <td>Neptunium</td>
                        <td>Np</td>
                        <td>93</td>
                        <td>Planet Neptune</td>
                    </tr>
                    <tr>
                        <td>Plutonium</td>
                        <td>Pu</td>
                        <td>94</td>
                        <td>Planet Pluto</td>
                    </tr>
                    <tr>
                        <td>Americium</td>
                        <td>Am</td>
                        <td>95</td>
                        <td>America</td>
                    </tr>
                    <tr>
                        <td>Curium</td>
                        <td>Cm</td>
                        <td>96</td>
                        <td>Marie Curie</td>
                    </tr>
                    <tr>
                        <td>Einsteinium</td>
                        <td>Es</td>
                        <td>99</td>
                        <td>Albert Einstein</td>
                    </tr>
                </table>
            `)}

            ${createQAItem('Q2. How are synthetic elements created?', `
                <p><strong>Process of Creating Synthetic Elements:</strong></p>
                <ol>
                    <li><strong>Nuclear Bombardment:</strong>
                        <ul>
                            <li>Heavy atoms bombarded with neutrons, protons, or other nuclei</li>
                            <li>High-speed particles used in particle accelerators</li>
                        </ul>
                    </li>
                    <li><strong>Fusion:</strong>
                        <ul>
                            <li>Two lighter nuclei combine to form heavier element</li>
                            <li>Requires very high energy</li>
                        </ul>
                    </li>
                </ol>
                <p><strong>Uses:</strong></p>
                <ul>
                    <li><strong>Plutonium:</strong> Nuclear weapons and power plants</li>
                    <li><strong>Americium:</strong> Smoke detectors</li>
                    <li><strong>Research:</strong> Study atomic structure and nuclear reactions</li>
                </ul>
            `)}
        `)}

        ${createTopicSection('💻', 'Major Components of Computer and Modern Era',
            'Computers have revolutionized the modern world and are essential tools in every field.',
            `
            ${createQAItem('Q1. What are the main components of a computer?', `
                <p><strong>Hardware Components:</strong></p>
                <ol>
                    <li><strong>Input Devices:</strong> Enter data into computer
                        <ul>
                            <li>Keyboard, Mouse, Scanner, Microphone, Webcam</li>
                        </ul>
                    </li>
                    <li><strong>Processing Unit:</strong>
                        <ul>
                            <li><strong>CPU (Central Processing Unit):</strong> "Brain" of computer
                                <ul>
                                    <li>ALU (Arithmetic Logic Unit): Performs calculations</li>
                                    <li>Control Unit: Controls operations</li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li><strong>Memory:</strong>
                        <ul>
                            <li><strong>RAM (Random Access Memory):</strong> Temporary, fast memory</li>
                            <li><strong>ROM (Read Only Memory):</strong> Permanent, stores BIOS</li>
                            <li><strong>Hard Disk/SSD:</strong> Permanent storage for data</li>
                        </ul>
                    </li>
                    <li><strong>Output Devices:</strong> Display results
                        <ul>
                            <li>Monitor, Printer, Speakers, Projector</li>
                        </ul>
                    </li>
                    <li><strong>Motherboard:</strong> Main circuit board connecting all parts</li>
                    <li><strong>Power Supply:</strong> Provides electricity</li>
                </ol>
            `)}

            ${createQAItem('Q2. What are the generations of computers?', `
                <p><strong>Five Generations:</strong></p>
                <table class="comparison-table">
                    <tr>
                        <th>Generation</th>
                        <th>Period</th>
                        <th>Technology</th>
                        <th>Example</th>
                    </tr>
                    <tr>
                        <td>First</td>
                        <td>1940-1956</td>
                        <td>Vacuum Tubes</td>
                        <td>ENIAC, UNIVAC</td>
                    </tr>
                    <tr>
                        <td>Second</td>
                        <td>1956-1963</td>
                        <td>Transistors</td>
                        <td>IBM 1401</td>
                    </tr>
                    <tr>
                        <td>Third</td>
                        <td>1964-1971</td>
                        <td>Integrated Circuits (IC)</td>
                        <td>IBM 360</td>
                    </tr>
                    <tr>
                        <td>Fourth</td>
                        <td>1971-Present</td>
                        <td>Microprocessors</td>
                        <td>PCs, Laptops</td>
                    </tr>
                    <tr>
                        <td>Fifth</td>
                        <td>Present-Future</td>
                        <td>AI, Machine Learning</td>
                        <td>Smart systems</td>
                    </tr>
                </table>
            `)}

            ${createQAItem('Q3. What is the importance of computers in modern era?', `
                <p><strong>Applications of Computers:</strong></p>
                <ul>
                    <li><strong>Education:</strong> E-learning, research, online classes</li>
                    <li><strong>Medicine:</strong> Diagnosis, surgery, patient records</li>
                    <li><strong>Business:</strong> Accounting, management, e-commerce</li>
                    <li><strong>Communication:</strong> Internet, email, social media</li>
                    <li><strong>Entertainment:</strong> Games, movies, music</li>
                    <li><strong>Science:</strong> Research, simulations, data analysis</li>
                    <li><strong>Banking:</strong> ATMs, online banking</li>
                    <li><strong>Transport:</strong> Traffic control, booking systems</li>
                    <li><strong>Defense:</strong> Weapons control, security</li>
                </ul>
                <div class="highlight-box">
                    <p><strong>Impact:</strong> Computers have made work faster, easier, and more accurate. They connect the world through internet.</p>
                </div>
            `)}
        `)}

        ${createTopicSection('🔴', 'Types of Laser and Uses',
            'LASER stands for Light Amplification by Stimulated Emission of Radiation.',
            `
            ${createQAItem('Q1. What is LASER?', `
                <p><strong>LASER:</strong> A device that produces a highly concentrated, coherent beam of light</p>
                <p><strong>Properties of Laser Light:</strong></p>
                <ul>
                    <li><strong>Monochromatic:</strong> Single color/wavelength</li>
                    <li><strong>Coherent:</strong> Waves in phase (synchronized)</li>
                    <li><strong>Highly Directional:</strong> Travels in straight line without spreading</li>
                    <li><strong>High Intensity:</strong> Very powerful and concentrated</li>
                </ul>
            `)}

            ${createQAItem('Q2. What are types of lasers?', `
                <p><strong>Main Types of Lasers:</strong></p>
                <ol>
                    <li><strong>Solid State Lasers:</strong>
                        <ul>
                            <li>Ruby laser, Nd:YAG laser</li>
                            <li>Used in industry and medicine</li>
                        </ul>
                    </li>
                    <li><strong>Gas Lasers:</strong>
                        <ul>
                            <li>Helium-Neon (He-Ne), CO₂ laser</li>
                            <li>Used in surgery, cutting</li>
                        </ul>
                    </li>
                    <li><strong>Semiconductor Lasers:</strong>
                        <ul>
                            <li>LED lasers</li>
                            <li>Used in CD/DVD players, fiber optics</li>
                        </ul>
                    </li>
                    <li><strong>Liquid Lasers:</strong>
                        <ul>
                            <li>Dye lasers</li>
                            <li>Used in research</li>
                        </ul>
                    </li>
                </ol>
            `)}

            ${createQAItem('Q3. What are the uses of laser beams?', `
                <p><strong>Applications of Lasers:</strong></p>
                <ul>
                    <li><strong>Medicine:</strong>
                        <ul>
                            <li>Eye surgery (LASIK)</li>
                            <li>Removing tumors</li>
                            <li>Dental procedures</li>
                            <li>Skin treatment</li>
                        </ul>
                    </li>
                    <li><strong>Industry:</strong>
                        <ul>
                            <li>Cutting and welding metals</li>
                            <li>Drilling precise holes</li>
                            <li>Quality control</li>
                        </ul>
                    </li>
                    <li><strong>Communication:</strong>
                        <ul>
                            <li>Fiber optic cables</li>
                            <li>High-speed internet</li>
                        </ul>
                    </li>
                    <li><strong>Military:</strong>
                        <ul>
                            <li>Targeting systems</li>
                            <li>Laser weapons</li>
                        </ul>
                    </li>
                    <li><strong>Entertainment:</strong>
                        <ul>
                            <li>CD/DVD/Blu-ray players</li>
                            <li>Laser shows</li>
                        </ul>
                    </li>
                    <li><strong>Science:</strong>
                        <ul>
                            <li>Measuring distances</li>
                            <li>Barcode scanners</li>
                            <li>Research experiments</li>
                        </ul>
                    </li>
                </ul>
            `)}
        `)}

        ${createTopicSection('🧬', 'Human Health, Physical Development & Cell Biology',
            'Understanding human biology helps maintain good health and development.',
            `
            ${createQAItem('Q1. What is a cell and its structure?', `
                <p><strong>Cell:</strong> Basic unit of life; smallest living unit</p>
                <p><strong>Types of Cells:</strong></p>
                <ul>
                    <li><strong>Prokaryotic:</strong> No nucleus (bacteria)</li>
                    <li><strong>Eukaryotic:</strong> Has nucleus (animals, plants)</li>
                </ul>
                <p><strong>Parts of Animal Cell:</strong></p>
                <ol>
                    <li><strong>Cell Membrane:</strong> Outer boundary, controls entry/exit</li>
                    <li><strong>Cytoplasm:</strong> Jelly-like fluid inside cell</li>
                    <li><strong>Nucleus:</strong> Control center, contains DNA</li>
                    <li><strong>Mitochondria:</strong> Powerhouse, produces energy (ATP)</li>
                    <li><strong>Ribosomes:</strong> Make proteins</li>
                    <li><strong>Endoplasmic Reticulum:</strong> Transport system</li>
                    <li><strong>Golgi Body:</strong> Packaging and secretion</li>
                </ol>
                <div class="highlight-box">
                    <p><strong>Plant Cell vs Animal Cell:</strong></p>
                    <p>Plant cells have: Cell wall, Chloroplasts (for photosynthesis), Large vacuole</p>
                </div>
            `)}

            ${createQAItem('Q2. What are important body systems?', `
                <p><strong>Major Body Systems:</strong></p>
                <ol>
                    <li><strong>Digestive System:</strong>
                        <ul>
                            <li>Breaks down food for energy</li>
                            <li>Organs: Mouth, esophagus, stomach, intestines</li>
                        </ul>
                    </li>
                    <li><strong>Respiratory System:</strong>
                        <ul>
                            <li>Breathing; exchange of O₂ and CO₂</li>
                            <li>Organs: Nose, trachea, lungs</li>
                        </ul>
                    </li>
                    <li><strong>Circulatory System:</strong>
                        <ul>
                            <li>Transports blood, oxygen, nutrients</li>
                            <li>Organs: Heart, blood vessels</li>
                        </ul>
                    </li>
                    <li><strong>Nervous System:</strong>
                        <ul>
                            <li>Controls and coordinates body</li>
                            <li>Organs: Brain, spinal cord, nerves</li>
                        </ul>
                    </li>
                    <li><strong>Skeletal System:</strong>
                        <ul>
                            <li>Support and protection</li>
                            <li>206 bones in adult human</li>
                        </ul>
                    </li>
                </ol>
            `)}

            ${createQAItem('Q3. What are nutrients and their importance?', `
                <p><strong>Six Essential Nutrients:</strong></p>
                <table class="comparison-table">
                    <tr>
                        <th>Nutrient</th>
                        <th>Function</th>
                        <th>Sources</th>
                    </tr>
                    <tr>
                        <td>Carbohydrates</td>
                        <td>Energy</td>
                        <td>Rice, wheat, bread, sugar</td>
                    </tr>
                    <tr>
                        <td>Proteins</td>
                        <td>Growth and repair</td>
                        <td>Meat, eggs, beans, milk</td>
                    </tr>
                    <tr>
                        <td>Fats</td>
                        <td>Energy storage, insulation</td>
                        <td>Oil, butter, nuts</td>
                    </tr>
                    <tr>
                        <td>Vitamins</td>
                        <td>Regulate body functions</td>
                        <td>Fruits, vegetables</td>
                    </tr>
                    <tr>
                        <td>Minerals</td>
                        <td>Bone health, blood</td>
                        <td>Milk, meat, vegetables</td>
                    </tr>
                    <tr>
                        <td>Water</td>
                        <td>All body processes</td>
                        <td>Drinking water, fruits</td>
                    </tr>
                </table>
            `)}

            ${createQAItem('Q4. How to maintain good health?', `
                <p><strong>Healthy Lifestyle Habits:</strong></p>
                <ul>
                    <li><strong>Balanced Diet:</strong> Eat all nutrients in right amounts</li>
                    <li><strong>Exercise:</strong> 30 minutes daily physical activity</li>
                    <li><strong>Sleep:</strong> 7-8 hours daily</li>
                    <li><strong>Hygiene:</strong> Wash hands, brush teeth, bathe regularly</li>
                    <li><strong>Avoid:</strong> Smoking, drugs, excess junk food</li>
                    <li><strong>Mental Health:</strong> Manage stress, stay positive</li>
                    <li><strong>Regular Checkups:</strong> Visit doctor for prevention</li>
                </ul>
            `)}
        `)}

        ${createTopicSection('♻️', 'Renewable Energy and Sources',
            'Renewable energy is clean, unlimited, and the future of power generation.',
            `
            ${createQAItem('Q1. What is renewable energy?', `
                <p><strong>Renewable Energy:</strong> Energy from sources that naturally replenish and never run out</p>
                <p><strong>Advantages:</strong></p>
                <ul>
                    <li>Unlimited and sustainable</li>
                    <li>Environment-friendly (no pollution)</li>
                    <li>No greenhouse gases</li>
                    <li>Free after initial setup</li>
                    <li>Available locally</li>
                </ul>
                <p><strong>Disadvantages:</strong></p>
                <ul>
                    <li>High initial cost</li>
                    <li>Depends on weather/location</li>
                    <li>Not available 24/7 (solar only during day)</li>
                    <li>Requires large space</li>
                </ul>
            `)}

            ${createQAItem('Q2. What are main renewable energy sources?', `
                <p><strong>Types of Renewable Energy:</strong></p>
                <ol>
                    <li><strong>Solar Energy:</strong>
                        <ul>
                            <li>From the sun</li>
                            <li>Solar panels (photovoltaic cells) convert sunlight to electricity</li>
                            <li>Uses: Electricity, water heating, cooking</li>
                            <li>Abundant in Pakistan (sunny climate)</li>
                        </ul>
                    </li>
                    <li><strong>Wind Energy:</strong>
                        <ul>
                            <li>From moving air</li>
                            <li>Wind turbines convert kinetic energy to electricity</li>
                            <li>Good wind potential in Balochistan and Sindh coastal areas</li>
                        </ul>
                    </li>
                    <li><strong>Hydroelectric Energy:</strong>
                        <ul>
                            <li>From flowing water</li>
                            <li>Dams store water and generate electricity</li>
                            <li>Major source in Pakistan (Tarbela, Mangla)</li>
                        </ul>
                    </li>
                    <li><strong>Biomass Energy:</strong>
                        <ul>
                            <li>From organic matter (plants, animal waste)</li>
                            <li>Biogas from cow dung</li>
                            <li>Used for cooking and heating in rural areas</li>
                        </ul>
                    </li>
                    <li><strong>Geothermal Energy:</strong>
                        <ul>
                            <li>From Earth's internal heat</li>
                            <li>Hot springs, steam from underground</li>
                            <li>Used for heating and electricity</li>
                        </ul>
                    </li>
                    <li><strong>Tidal Energy:</strong>
                        <ul>
                            <li>From ocean tides</li>
                            <li>Rising and falling tides turn turbines</li>
                        </ul>
                    </li>
                </ol>
            `)}

            ${createQAItem('Q3. What is renewable energy potential in Pakistan?', `
                <p><strong>Pakistan\'s Renewable Energy Resources:</strong></p>
                <ul>
                    <li><strong>Solar:</strong> Excellent potential; sunny 300+ days/year; Quetta has highest solar potential in country</li>
                    <li><strong>Wind:</strong> Coastal areas (Gharo, Jhimpir in Sindh); 50,000 MW potential</li>
                    <li><strong>Hydro:</strong> Already major source; more small dams possible in northern areas</li>
                    <li><strong>Biomass:</strong> Agricultural waste, animal dung; biogas plants in rural areas</li>
                </ul>
                <div class="highlight-box">
                    <p><strong>Importance:</strong> Can solve Pakistan's energy crisis, reduce pollution, save foreign exchange on oil imports.</p>
                </div>
            `)}
        `)}

        ${createTopicSection('⛽', 'Natural Gas and Pakistan\'s Reserves',
            'Natural gas is an important fossil fuel and energy source for Pakistan.',
            `
            ${createQAItem('Q1. What is natural gas?', `
                <p><strong>Natural Gas:</strong> A fossil fuel formed from decomposed organic matter over millions of years</p>
                <p><strong>Composition:</strong></p>
                <ul>
                    <li>Mainly Methane (CH₄) - 70-90%</li>
                    <li>Ethane, Propane, Butane</li>
                    <li>Colorless, odorless (odor added for safety)</li>
                </ul>
                <p><strong>Properties:</strong></p>
                <ul>
                    <li>Clean fuel (less pollution than coal/oil)</li>
                    <li>Highly flammable</li>
                    <li>Lighter than air</li>
                    <li>Found with petroleum deposits</li>
                </ul>
            `)}

            ${createQAItem('Q2. What are uses of natural gas?', `
                <p><strong>Applications:</strong></p>
                <ul>
                    <li><strong>Domestic:</strong> Cooking, heating</li>
                    <li><strong>Power Generation:</strong> Electricity in power plants</li>
                    <li><strong>Industry:</strong> Fertilizers, chemicals, steel</li>
                    <li><strong>Transport:</strong> CNG (Compressed Natural Gas) for vehicles</li>
                </ul>
                <div class="highlight-box">
                    <p><strong>Advantages:</strong> Cleaner than coal/oil, efficient, abundant, convenient</p>
                    <p><strong>Disadvantages:</strong> Non-renewable, causes pollution, dangerous if leaked</p>
                </div>
            `)}

            ${createQAItem('Q3. What are Pakistan\'s natural gas reserves?', `
                <p><strong>Gas Fields in Pakistan:</strong></p>
                <ul>
                    <li><strong>Sui (Balochistan):</strong> First and largest gas field; discovered 1952</li>
                    <li><strong>Mari (Sindh):</strong> Second largest</li>
                    <li><strong>Uch (Balochistan)</strong></li>
                    <li><strong>Qadirpur (Punjab)</strong></li>
                    <li><strong>Kandhkot (Sindh)</strong></li>
                </ul>
                <p><strong>Current Situation:</strong></p>
                <ul>
                    <li>Pakistan has limited reserves</li>
                    <li>Production declining</li>
                    <li>Demand exceeding supply</li>
                    <li>Need to explore new fields and import gas (LNG)</li>
                </ul>
            `)}
        `)}

        ${createTopicSection('🏭', 'Energy Consuming Sectors & Water Resources',
            'Understanding energy consumption and water management is crucial for Pakistan.',
            `
            ${createQAItem('Q1. Which sectors consume most energy in Pakistan?', `
                <p><strong>Energy Consumption by Sector:</strong></p>
                <ol>
                    <li><strong>Industry (~35%):</strong>
                        <ul>
                            <li>Textile, cement, steel, chemical industries</li>
                            <li>Largest consumer</li>
                        </ul>
                    </li>
                    <li><strong>Transport (~30%):</strong>
                        <ul>
                            <li>Vehicles, trains, buses</li>
                            <li>Uses petroleum products</li>
                        </ul>
                    </li>
                    <li><strong>Domestic/Household (~25%):</strong>
                        <ul>
                            <li>Lighting, cooking, heating, appliances</li>
                        </ul>
                    </li>
                    <li><strong>Agriculture (~5%):</strong>
                        <ul>
                            <li>Tube wells, tractors</li>
                        </ul>
                    </li>
                    <li><strong>Commercial (~5%):</strong>
                        <ul>
                            <li>Shops, offices, markets</li>
                        </ul>
                    </li>
                </ol>
            `)}

            ${createQAItem('Q2. What are Pakistan\'s water resources?', `
                <p><strong>Major Water Sources:</strong></p>
                <ul>
                    <li><strong>Rivers:</strong> Indus and tributaries (main source)</li>
                    <li><strong>Glaciers:</strong> 7000+ glaciers in north</li>
                    <li><strong>Rainfall:</strong> Monsoon and western disturbances</li>
                    <li><strong>Groundwater:</strong> Tube wells</li>
                </ul>
                <p><strong>Water Crisis in Pakistan:</strong></p>
                <ul>
                    <li>Pakistan becoming water-scarce</li>
                    <li>Low storage capacity (30 days vs world average 120 days)</li>
                    <li>Wastage in agriculture</li>
                    <li>Population growth increasing demand</li>
                    <li>Climate change affecting glaciers</li>
                </ul>
                <p><strong>Solutions:</strong></p>
                <ul>
                    <li>Build more dams</li>
                    <li>Rainwater harvesting</li>
                    <li>Drip irrigation</li>
                    <li>Awareness about water conservation</li>
                    <li>Fix leaking pipes</li>
                </ul>
            `)}
        `)}

        ${createTopicSection('🌊', 'Tidal Force & Astronomical Sciences',
            'Understanding tides and astronomy helps us comprehend natural phenomena.',
            `
            ${createQAItem('Q1. What are tides and what causes them?', `
                <p><strong>Tides:</strong> Regular rise and fall of ocean water levels</p>
                <p><strong>Causes:</strong></p>
                <ul>
                    <li><strong>Gravitational Pull of Moon:</strong> Main cause (moon closer to Earth)</li>
                    <li><strong>Gravitational Pull of Sun:</strong> Lesser effect (sun farther away)</li>
                </ul>
                <p><strong>Types of Tides:</strong></p>
                <ol>
                    <li><strong>High Tide:</strong>
                        <ul>
                            <li>Water level rises</li>
                            <li>Occurs twice daily</li>
                            <li>On the side facing moon and opposite side</li>
                        </ul>
                    </li>
                    <li><strong>Low Tide:</strong>
                        <ul>
                            <li>Water level falls</li>
                            <li>Occurs between two high tides</li>
                        </ul>
                    </li>
                    <li><strong>Spring Tides:</strong>
                        <ul>
                            <li>Very high tides</li>
                            <li>Occur during full moon and new moon</li>
                            <li>Sun, Earth, Moon in line</li>
                        </ul>
                    </li>
                    <li><strong>Neap Tides:</strong>
                        <ul>
                            <li>Weak tides</li>
                            <li>Occur during first and third quarter moon</li>
                            <li>Sun and Moon at right angles</li>
                        </ul>
                    </li>
                </ol>
                <p><strong>Importance of Tides:</strong></p>
                <ul>
                    <li>Help in navigation</li>
                    <li>Clean coastal areas</li>
                    <li>Tidal energy can generate electricity</li>
                    <li>Affect marine life</li>
                </ul>
            `)}

            ${createQAItem('Q2. What are basic astronomical concepts?', `
                <p><strong>Key Concepts:</strong></p>
                <ul>
                    <li><strong>Solar System:</strong>
                        <ul>
                            <li>Sun and all objects revolving around it</li>
                            <li>8 planets: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune</li>
                        </ul>
                    </li>
                    <li><strong>Stars:</strong>
                        <ul>
                            <li>Huge balls of burning gas</li>
                            <li>Sun is a star</li>
                            <li>Produce own light</li>
                        </ul>
                    </li>
                    <li><strong>Planets:</strong>
                        <ul>
                            <li>Revolve around stars</li>
                            <li>Don't produce own light</li>
                            <li>Reflect sunlight</li>
                        </ul>
                    </li>
                    <li><strong>Moon:</strong>
                        <ul>
                            <li>Earth's natural satellite</li>
                            <li>Revolves around Earth (27.3 days)</li>
                            <li>No atmosphere, no water</li>
                        </ul>
                    </li>
                    <li><strong>Galaxy:</strong>
                        <ul>
                            <li>Huge collection of stars</li>
                            <li>Our galaxy: Milky Way</li>
                        </ul>
                    </li>
                </ul>
            `)}
        `)}

        ${createTopicSection('💡', 'Photoelectric Effect & Quantum Theory',
            'These concepts revolutionized our understanding of light and matter.',
            `
            ${createQAItem('Q1. What is the photoelectric effect?', `
                <p><strong>Photoelectric Effect:</strong> Emission of electrons from a metal surface when light shines on it</p>
                <p><strong>Discovery:</strong> Heinrich Hertz (1887); Explained by Einstein (1905)</p>
                <p><strong>Key Points:</strong></p>
                <ul>
                    <li>Light must have minimum frequency (threshold frequency)</li>
                    <li>Higher frequency = more energetic electrons</li>
                    <li>Number of electrons depends on light intensity</li>
                    <li>Proves light has particle nature (photons)</li>
                </ul>
                <p><strong>Applications:</strong></p>
                <ul>
                    <li>Solar cells (convert light to electricity)</li>
                    <li>Automatic doors (light sensors)</li>
                    <li>Digital cameras</li>
                    <li>Light meters</li>
                </ul>
            `)}

            ${createQAItem('Q2. What is quantum theory?', `
                <p><strong>Quantum Theory:</strong> Modern theory explaining behavior of matter and energy at atomic scale</p>
                <p><strong>Key Concepts:</strong></p>
                <ul>
                    <li><strong>Quantization:</strong> Energy comes in discrete packets (quanta)</li>
                    <li><strong>Wave-Particle Duality:</strong> Light and matter have both wave and particle properties</li>
                    <li><strong>Photon:</strong> Quantum (packet) of light energy</li>
                    <li><strong>Energy Formula:</strong> E = hf (where h = Planck's constant, f = frequency)</li>
                </ul>
                <div class="highlight-box">
                    <p><strong>Importance:</strong> Led to development of modern electronics, lasers, computers, and nuclear technology.</p>
                </div>
            `)}
        `)}

        <div class="resources">
            <h4>📚 Study Resources</h4>
            <ul>
                <li>Read prescribed General Science textbook daily (Fahad Publishing Company)</li>
                <li>Make notes for each topic with diagrams</li>
                <li>Learn scientific names and formulas</li>
                <li>Understand concepts, don't just memorize</li>
                <li>Practice MCQs from past papers</li>
                <li>Make flashcards for important terms and definitions</li>
                <li>Watch educational videos to visualize concepts</li>
                <li>Create comparison tables for similar topics</li>
                <li>Revise regularly - science requires understanding, not rote learning</li>
            </ul>
        </div>
    `;
    
    generalScienceContent.innerHTML = content;
    reloadQA();
});
