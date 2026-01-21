// Mathematics Subject Content - Complete Preparation Material
document.addEventListener('DOMContentLoaded', function() {
    const mathematicsContent = document.getElementById('mathematics-content');
    
    const content = `
        ${createTopicSection('🔢', 'Real and Complex Numbers',
            'Understanding different types of numbers is fundamental to mathematics.',
            `
            ${createQAItem('Q1. What are Real Numbers?', `
                <p><strong>Real Numbers include all rational and irrational numbers.</strong></p>
                <div class="example-box">
                    <h4>Classification of Real Numbers:</h4>
                    <ol>
                        <li><strong>Natural Numbers (N):</strong> 1, 2, 3, 4, 5...
                            <ul><li>Counting numbers</li></ul>
                        </li>
                        <li><strong>Whole Numbers (W):</strong> 0, 1, 2, 3, 4...
                            <ul><li>Natural numbers + zero</li></ul>
                        </li>
                        <li><strong>Integers (Z):</strong> ...-3, -2, -1, 0, 1, 2, 3...
                            <ul><li>Whole numbers + negative numbers</li></ul>
                        </li>
                        <li><strong>Rational Numbers (Q):</strong> Numbers that can be written as p/q where q ≠ 0
                            <ul><li>Examples: 1/2, 3/4, 5, -7, 0.5, 0.333...</li></ul>
                        </li>
                        <li><strong>Irrational Numbers:</strong> Cannot be written as fractions
                            <ul><li>Examples: √2, √3, π, e</li></ul>
                        </li>
                    </ol>
                </div>
                <div class="highlight-box">
                    <p><strong>Properties of Real Numbers:</strong></p>
                    <ul>
                        <li><strong>Closure:</strong> a + b and a × b are real if a, b are real</li>
                        <li><strong>Commutative:</strong> a + b = b + a, a × b = b × a</li>
                        <li><strong>Associative:</strong> (a + b) + c = a + (b + c)</li>
                        <li><strong>Distributive:</strong> a(b + c) = ab + ac</li>
                        <li><strong>Identity:</strong> a + 0 = a, a × 1 = a</li>
                    </ul>
                </div>
            `)}

            ${createQAItem('Q2. What are Complex Numbers?', `
                <p><strong>Complex Numbers are numbers of the form a + bi, where i = √(-1)</strong></p>
                <ul>
                    <li><strong>a</strong> = real part</li>
                    <li><strong>b</strong> = imaginary part</li>
                    <li><strong>i</strong> = imaginary unit, where i² = -1</li>
                </ul>
                <div class="formula-box">
                    <p><strong>Powers of i:</strong></p>
                    <p>i¹ = i</p>
                    <p>i² = -1</p>
                    <p>i³ = -i</p>
                    <p>i⁴ = 1</p>
                    <p>Pattern repeats every 4 powers</p>
                </div>
                <div class="example-box">
                    <h4>Examples:</h4>
                    <ul>
                        <li>3 + 4i (real part = 3, imaginary part = 4)</li>
                        <li>5 - 2i</li>
                        <li>0 + 7i = 7i (purely imaginary)</li>
                        <li>6 + 0i = 6 (purely real)</li>
                    </ul>
                    <h4>Operations:</h4>
                    <p><strong>Addition:</strong> (3 + 4i) + (2 + 5i) = 5 + 9i</p>
                    <p><strong>Multiplication:</strong> (2 + 3i)(1 + 2i) = 2 + 4i + 3i + 6i² = 2 + 7i - 6 = -4 + 7i</p>
                </div>
            `)}

            ${createQAItem('Q3. What is the absolute value and how to use number line?', `
                <p><strong>Absolute Value (|a|) is the distance from zero on the number line.</strong></p>
                <div class="formula-box">
                    <p>|a| = a if a ≥ 0</p>
                    <p>|a| = -a if a < 0</p>
                </div>
                <div class="example-box">
                    <h4>Examples:</h4>
                    <ul>
                        <li>|5| = 5</li>
                        <li>|-7| = 7</li>
                        <li>|0| = 0</li>
                        <li>|3 - 8| = |-5| = 5</li>
                    </ul>
                </div>
            `)}
        `)}

        ${createTopicSection('✂️', 'Factorization',
            'Factorization is the process of breaking down an expression into simpler multiplicative components.',
            `
            ${createQAItem('Q1. What are the main factorization methods?', `
                <p><strong>Common Factorization Techniques:</strong></p>
                <ol>
                    <li><strong>Common Factor Method:</strong>
                        <div class="formula-box">
                            <p>ab + ac = a(b + c)</p>
                        </div>
                        <div class="example-box">
                            <p>6x + 9 = 3(2x + 3)</p>
                            <p>10x² + 15x = 5x(2x + 3)</p>
                        </div>
                    </li>
                    <li><strong>Difference of Two Squares:</strong>
                        <div class="formula-box">
                            <p>a² - b² = (a + b)(a - b)</p>
                        </div>
                        <div class="example-box">
                            <p>x² - 9 = x² - 3² = (x + 3)(x - 3)</p>
                            <p>25x² - 16 = (5x)² - 4² = (5x + 4)(5x - 4)</p>
                        </div>
                    </li>
                    <li><strong>Perfect Square Trinomials:</strong>
                        <div class="formula-box">
                            <p>a² + 2ab + b² = (a + b)²</p>
                            <p>a² - 2ab + b² = (a - b)²</p>
                        </div>
                        <div class="example-box">
                            <p>x² + 6x + 9 = x² + 2(3)x + 3² = (x + 3)²</p>
                            <p>x² - 10x + 25 = x² - 2(5)x + 5² = (x - 5)²</p>
                        </div>
                    </li>
                    <li><strong>Quadratic Trinomials (ax² + bx + c):</strong>
                        <div class="example-box">
                            <p>x² + 5x + 6 = (x + 2)(x + 3)</p>
                            <p>x² - 7x + 12 = (x - 3)(x - 4)</p>
                            <p>2x² + 7x + 3 = (2x + 1)(x + 3)</p>
                        </div>
                    </li>
                </ol>
            `)}

            ${createQAItem('Q2. What are sum and difference of cubes?', `
                <p><strong>Cube Factorization Formulas:</strong></p>
                <div class="formula-box">
                    <p>a³ + b³ = (a + b)(a² - ab + b²)</p>
                    <p>a³ - b³ = (a - b)(a² + ab + b²)</p>
                </div>
                <div class="example-box">
                    <h4>Examples:</h4>
                    <p><strong>Sum of Cubes:</strong></p>
                    <p>x³ + 8 = x³ + 2³ = (x + 2)(x² - 2x + 4)</p>
                    <p><strong>Difference of Cubes:</strong></p>
                    <p>x³ - 27 = x³ - 3³ = (x - 3)(x² + 3x + 9)</p>
                </div>
            `)}

            ${createQAItem('Q3. How to factor by grouping?', `
                <p><strong>Grouping Method:</strong> Used for expressions with 4 terms</p>
                <div class="example-box">
                    <h4>Example:</h4>
                    <p>Factor: x³ + 3x² + 2x + 6</p>
                    <p><strong>Step 1:</strong> Group: (x³ + 3x²) + (2x + 6)</p>
                    <p><strong>Step 2:</strong> Factor each group: x²(x + 3) + 2(x + 3)</p>
                    <p><strong>Step 3:</strong> Factor out common binomial: (x + 3)(x² + 2)</p>
                </div>
            `)}
        `)}

        ${createTopicSection('📐', 'Algebraic Expressions and Formulas',
            'Algebraic formulas are essential tools for simplifying and solving mathematical problems.',
            `
            ${createQAItem('Q1. What are important algebraic identities?', `
                <p><strong>Essential Algebraic Formulas:</strong></p>
                <div class="formula-box">
                    <p><strong>1. (a + b)² = a² + 2ab + b²</strong></p>
                    <p><strong>2. (a - b)² = a² - 2ab + b²</strong></p>
                    <p><strong>3. (a + b)(a - b) = a² - b²</strong></p>
                    <p><strong>4. (a + b)³ = a³ + 3a²b + 3ab² + b³</strong></p>
                    <p><strong>5. (a - b)³ = a³ - 3a²b + 3ab² - b³</strong></p>
                    <p><strong>6. a³ + b³ = (a + b)(a² - ab + b²)</strong></p>
                    <p><strong>7. a³ - b³ = (a - b)(a² + ab + b²)</strong></p>
                    <p><strong>8. (a + b + c)² = a² + b² + c² + 2ab + 2bc + 2ca</strong></p>
                </div>
            `)}

            ${createQAItem('Q2. How to expand and simplify algebraic expressions?', `
                <p><strong>Examples of Expansion and Simplification:</strong></p>
                <div class="example-box">
                    <h4>Example 1: Expand (x + 5)²</h4>
                    <p>Using formula: (a + b)² = a² + 2ab + b²</p>
                    <p>(x + 5)² = x² + 2(x)(5) + 5²</p>
                    <p>= x² + 10x + 25</p>
                    
                    <h4>Example 2: Expand (2x - 3)²</h4>
                    <p>Using formula: (a - b)² = a² - 2ab + b²</p>
                    <p>(2x - 3)² = (2x)² - 2(2x)(3) + 3²</p>
                    <p>= 4x² - 12x + 9</p>
                    
                    <h4>Example 3: Simplify (x + 4)(x - 4)</h4>
                    <p>Using formula: (a + b)(a - b) = a² - b²</p>
                    <p>(x + 4)(x - 4) = x² - 16</p>
                </div>
            `)}
        `)}

        ${createTopicSection('📊', 'Basic Statistics',
            'Statistics helps us analyze and interpret data.',
            `
            ${createQAItem('Q1. What are measures of central tendency?', `
                <p><strong>Three Main Measures:</strong></p>
                <ol>
                    <li><strong>Mean (Average):</strong>
                        <div class="formula-box">
                            <p>Mean = Sum of all values / Number of values</p>
                            <p>Mean = Σx / n</p>
                        </div>
                        <div class="example-box">
                            <p>Find mean of: 5, 8, 12, 15, 20</p>
                            <p>Mean = (5 + 8 + 12 + 15 + 20) / 5 = 60 / 5 = 12</p>
                        </div>
                    </li>
                    <li><strong>Median (Middle Value):</strong>
                        <ul>
                            <li>Arrange data in order</li>
                            <li>If odd number of values: middle value</li>
                            <li>If even number of values: average of two middle values</li>
                        </ul>
                        <div class="example-box">
                            <p>Find median of: 3, 7, 9, 12, 15</p>
                            <p>Already in order, middle value = 9</p>
                            <p>Median = 9</p>
                        </div>
                    </li>
                    <li><strong>Mode (Most Frequent Value):</strong>
                        <div class="example-box">
                            <p>Find mode of: 2, 5, 5, 7, 9, 5, 11</p>
                            <p>5 appears 3 times (most frequent)</p>
                            <p>Mode = 5</p>
                        </div>
                    </li>
                </ol>
            `)}

            ${createQAItem('Q2. What is range and how to find it?', `
                <p><strong>Range measures the spread of data.</strong></p>
                <div class="formula-box">
                    <p>Range = Largest Value - Smallest Value</p>
                </div>
                <div class="example-box">
                    <p>Find range of: 10, 15, 8, 22, 18, 5</p>
                    <p>Largest = 22, Smallest = 5</p>
                    <p>Range = 22 - 5 = 17</p>
                </div>
            `)}

            ${createQAItem('Q3. How to make frequency tables?', `
                <p><strong>Frequency Table shows how often each value occurs.</strong></p>
                <div class="example-box">
                    <h4>Example: Marks of 10 students</h4>
                    <p>Data: 5, 7, 5, 8, 7, 5, 9, 7, 8, 5</p>
                    <table class="comparison-table">
                        <tr>
                            <th>Marks (x)</th>
                            <th>Frequency (f)</th>
                        </tr>
                        <tr><td>5</td><td>4</td></tr>
                        <tr><td>7</td><td>3</td></tr>
                        <tr><td>8</td><td>2</td></tr>
                        <tr><td>9</td><td>1</td></tr>
                        <tr><td><strong>Total</strong></td><td><strong>10</strong></td></tr>
                    </table>
                </div>
            `)}
        `)}

        ${createTopicSection('📏', 'Linear Equations and Inequalities',
            'Linear equations are fundamental algebraic equations.',
            `
            ${createQAItem('Q1. How to solve linear equations?', `
                <p><strong>Linear Equation in one variable: ax + b = c</strong></p>
                <div class="example-box">
                    <h4>Example 1: Solve 2x + 5 = 13</h4>
                    <p><strong>Step 1:</strong> Subtract 5 from both sides</p>
                    <p>2x + 5 - 5 = 13 - 5</p>
                    <p>2x = 8</p>
                    <p><strong>Step 2:</strong> Divide both sides by 2</p>
                    <p>x = 4</p>
                    
                    <h4>Example 2: Solve 3x - 7 = 11</h4>
                    <p>3x = 11 + 7</p>
                    <p>3x = 18</p>
                    <p>x = 6</p>
                </div>
            `)}

            ${createQAItem('Q2. How to solve simultaneous equations?', `
                <p><strong>Two methods: Substitution and Elimination</strong></p>
                <div class="example-box">
                    <h4>Example: Solve x + y = 10 and x - y = 2</h4>
                    <p><strong>Method 1: Elimination</strong></p>
                    <p>x + y = 10 ... (1)</p>
                    <p>x - y = 2 ... (2)</p>
                    <p>Add equations: 2x = 12</p>
                    <p>x = 6</p>
                    <p>Substitute in (1): 6 + y = 10</p>
                    <p>y = 4</p>
                    <p><strong>Solution: x = 6, y = 4</strong></p>
                </div>
            `)}

            ${createQAItem('Q3. How to solve linear inequalities?', `
                <p><strong>Inequalities use <, >, ≤, ≥ instead of =</strong></p>
                <div class="highlight-box">
                    <p><strong>Important Rule:</strong> When multiplying or dividing by a negative number, flip the inequality sign!</p>
                </div>
                <div class="example-box">
                    <h4>Example 1: Solve 2x + 3 < 11</h4>
                    <p>2x < 11 - 3</p>
                    <p>2x < 8</p>
                    <p>x < 4</p>
                    
                    <h4>Example 2: Solve -3x ≥ 9</h4>
                    <p>Divide by -3 (flip sign!):</p>
                    <p>x ≤ -3</p>
                </div>
            `)}
        `)}

        ${createTopicSection('🔷', 'Quadratic Equations',
            'Quadratic equations are second-degree polynomial equations.',
            `
            ${createQAItem('Q1. What is a quadratic equation and how to solve it?', `
                <p><strong>Standard Form: ax² + bx + c = 0 (where a ≠ 0)</strong></p>
                <p><strong>Methods to Solve:</strong></p>
                <ol>
                    <li><strong>Factorization Method:</strong>
                        <div class="example-box">
                            <p>Solve: x² + 5x + 6 = 0</p>
                            <p>Factor: (x + 2)(x + 3) = 0</p>
                            <p>Either x + 2 = 0 or x + 3 = 0</p>
                            <p>x = -2 or x = -3</p>
                        </div>
                    </li>
                    <li><strong>Quadratic Formula:</strong>
                        <div class="formula-box">
                            <p>x = [-b ± √(b² - 4ac)] / 2a</p>
                        </div>
                        <div class="example-box">
                            <p>Solve: x² - 5x + 6 = 0</p>
                            <p>Here: a = 1, b = -5, c = 6</p>
                            <p>x = [5 ± √(25 - 24)] / 2</p>
                            <p>x = [5 ± 1] / 2</p>
                            <p>x = 3 or x = 2</p>
                        </div>
                    </li>
                    <li><strong>Completing the Square:</strong>
                        <div class="example-box">
                            <p>Solve: x² + 6x + 5 = 0</p>
                            <p>x² + 6x = -5</p>
                            <p>x² + 6x + 9 = -5 + 9</p>
                            <p>(x + 3)² = 4</p>
                            <p>x + 3 = ±2</p>
                            <p>x = -1 or x = -5</p>
                        </div>
                    </li>
                </ol>
            `)}

            ${createQAItem('Q2. What is the discriminant?', `
                <p><strong>Discriminant (Δ or D) = b² - 4ac</strong></p>
                <p>It tells us about the nature of roots:</p>
                <table class="comparison-table">
                    <tr>
                        <th>Discriminant Value</th>
                        <th>Nature of Roots</th>
                    </tr>
                    <tr>
                        <td>D > 0</td>
                        <td>Two distinct real roots</td>
                    </tr>
                    <tr>
                        <td>D = 0</td>
                        <td>Two equal real roots (one repeated root)</td>
                    </tr>
                    <tr>
                        <td>D < 0</td>
                        <td>No real roots (two complex roots)</td>
                    </tr>
                </table>
            `)}
        `)}

        ${createTopicSection('🔀', 'Variations',
            'Variation describes how one quantity changes in relation to another.',
            `
            ${createQAItem('Q1. What is direct variation?', `
                <p><strong>Direct Variation: y ∝ x or y = kx (k is constant)</strong></p>
                <p>When x increases, y increases proportionally</p>
                <div class="example-box">
                    <h4>Example:</h4>
                    <p>If y varies directly as x, and y = 12 when x = 3, find y when x = 7.</p>
                    <p><strong>Solution:</strong></p>
                    <p>y = kx</p>
                    <p>12 = k(3)</p>
                    <p>k = 4</p>
                    <p>When x = 7: y = 4(7) = 28</p>
                </div>
            `)}

            ${createQAItem('Q2. What is inverse variation?', `
                <p><strong>Inverse Variation: y ∝ 1/x or y = k/x</strong></p>
                <p>When x increases, y decreases proportionally</p>
                <div class="example-box">
                    <h4>Example:</h4>
                    <p>If y varies inversely as x, and y = 6 when x = 4, find y when x = 8.</p>
                    <p><strong>Solution:</strong></p>
                    <p>y = k/x</p>
                    <p>6 = k/4</p>
                    <p>k = 24</p>
                    <p>When x = 8: y = 24/8 = 3</p>
                </div>
            `)}

            ${createQAItem('Q3. What is joint variation?', `
                <p><strong>Joint Variation: z varies jointly as x and y means z = kxy</strong></p>
                <div class="example-box">
                    <p>If z varies jointly as x and y, and z = 24 when x = 2 and y = 3, find z when x = 4 and y = 5.</p>
                    <p><strong>Solution:</strong></p>
                    <p>z = kxy</p>
                    <p>24 = k(2)(3)</p>
                    <p>k = 4</p>
                    <p>When x = 4, y = 5: z = 4(4)(5) = 80</p>
                </div>
            `)}
        `)}

        ${createTopicSection('📐', 'Geometry - Triangles and Circles',
            'Understanding properties of geometric shapes is essential.',
            `
            ${createQAItem('Q1. What is the Pythagoras Theorem?', `
                <p><strong>In a right triangle: a² + b² = c²</strong></p>
                <p>where c is the hypotenuse (longest side)</p>
                <div class="example-box">
                    <h4>Example:</h4>
                    <p>In a right triangle, if two sides are 3 cm and 4 cm, find the hypotenuse.</p>
                    <p>a² + b² = c²</p>
                    <p>3² + 4² = c²</p>
                    <p>9 + 16 = c²</p>
                    <p>c² = 25</p>
                    <p>c = 5 cm</p>
                </div>
            `)}

            ${createQAItem('Q2. What are important triangle properties?', `
                <p><strong>Triangle Properties:</strong></p>
                <ul>
                    <li><strong>Sum of angles:</strong> 180°</li>
                    <li><strong>Area of triangle:</strong> (1/2) × base × height</li>
                    <li><strong>Perimeter:</strong> sum of all three sides</li>
                    <li><strong>Types:</strong>
                        <ul>
                            <li>Equilateral: all sides equal</li>
                            <li>Isosceles: two sides equal</li>
                            <li>Scalene: all sides different</li>
                            <li>Right: one angle = 90°</li>
                        </ul>
                    </li>
                </ul>
            `)}

            ${createQAItem('Q3. What are important circle properties?', `
                <p><strong>Circle Formulas:</strong></p>
                <div class="formula-box">
                    <p><strong>Circumference = 2πr</strong></p>
                    <p><strong>Area = πr²</strong></p>
                    <p>where r = radius, π ≈ 3.14 or 22/7</p>
                </div>
                <div class="example-box">
                    <h4>Example:</h4>
                    <p>Find area and circumference of circle with radius 7 cm.</p>
                    <p><strong>Area:</strong> πr² = (22/7) × 7² = 22 × 7 = 154 cm²</p>
                    <p><strong>Circumference:</strong> 2πr = 2 × (22/7) × 7 = 44 cm</p>
                </div>
                <p><strong>Circle Properties:</strong></p>
                <ul>
                    <li>Diameter = 2 × radius</li>
                    <li>All radii of a circle are equal</li>
                    <li>Angle in semicircle = 90°</li>
                    <li>Tangent perpendicular to radius at point of contact</li>
                </ul>
            `)}
        `)}

        ${createTopicSection('📐', 'Ratio and Proportion',
            'Ratios compare quantities, and proportions show equality of ratios.',
            `
            ${createQAItem('Q1. What are ratios and how to simplify them?', `
                <p><strong>Ratio compares two quantities of the same kind.</strong></p>
                <p>Written as a:b or a/b</p>
                <div class="example-box">
                    <h4>Examples:</h4>
                    <p><strong>Simplify ratio 12:18</strong></p>
                    <p>Divide both by GCD (6): 12÷6 : 18÷6 = 2:3</p>
                    
                    <p><strong>If ratio of boys to girls is 3:2 and there are 15 boys, find girls.</strong></p>
                    <p>3:2 = 15:x</p>
                    <p>3x = 30</p>
                    <p>x = 10 girls</p>
                </div>
            `)}

            ${createQAItem('Q2. What is proportion?', `
                <p><strong>Proportion: Equality of two ratios a:b = c:d or a/b = c/d</strong></p>
                <p><strong>Cross Multiplication:</strong> ad = bc</p>
                <div class="example-box">
                    <h4>Example:</h4>
                    <p>If 2:3 = x:12, find x.</p>
                    <p>2/3 = x/12</p>
                    <p>2 × 12 = 3x</p>
                    <p>24 = 3x</p>
                    <p>x = 8</p>
                </div>
            `)}
        `)}

        ${createTopicSection('📐', 'Introduction to Trigonometry',
            'Trigonometry deals with relationships between sides and angles in triangles.',
            `
            ${createQAItem('Q1. What are trigonometric ratios?', `
                <p><strong>Six Trigonometric Ratios (for right triangle):</strong></p>
                <div class="formula-box">
                    <p><strong>sin θ = Opposite / Hypotenuse</strong></p>
                    <p><strong>cos θ = Adjacent / Hypotenuse</strong></p>
                    <p><strong>tan θ = Opposite / Adjacent</strong></p>
                    <p><strong>cosec θ = 1/sin θ = Hypotenuse / Opposite</strong></p>
                    <p><strong>sec θ = 1/cos θ = Hypotenuse / Adjacent</strong></p>
                    <p><strong>cot θ = 1/tan θ = Adjacent / Opposite</strong></p>
                </div>
                <div class="highlight-box">
                    <p><strong>Memory Aid: SOHCAHTOA</strong></p>
                    <ul>
                        <li><strong>S</strong>ine = <strong>O</strong>pposite / <strong>H</strong>ypotenuse</li>
                        <li><strong>C</strong>osine = <strong>A</strong>djacent / <strong>H</strong>ypotenuse</li>
                        <li><strong>T</strong>angent = <strong>O</strong>pposite / <strong>A</strong>djacent</li>
                    </ul>
                </div>
            `)}

            ${createQAItem('Q2. What are values of trigonometric ratios for special angles?', `
                <p><strong>Standard Angles:</strong></p>
                <table class="comparison-table">
                    <tr>
                        <th>Angle</th>
                        <th>0°</th>
                        <th>30°</th>
                        <th>45°</th>
                        <th>60°</th>
                        <th>90°</th>
                    </tr>
                    <tr>
                        <td><strong>sin θ</strong></td>
                        <td>0</td>
                        <td>1/2</td>
                        <td>1/√2</td>
                        <td>√3/2</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td><strong>cos θ</strong></td>
                        <td>1</td>
                        <td>√3/2</td>
                        <td>1/√2</td>
                        <td>1/2</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <td><strong>tan θ</strong></td>
                        <td>0</td>
                        <td>1/√3</td>
                        <td>1</td>
                        <td>√3</td>
                        <td>∞</td>
                    </tr>
                </table>
            `)}

            ${createQAItem('Q3. What are important trigonometric identities?', `
                <p><strong>Fundamental Identities:</strong></p>
                <div class="formula-box">
                    <p><strong>sin²θ + cos²θ = 1</strong></p>
                    <p><strong>1 + tan²θ = sec²θ</strong></p>
                    <p><strong>1 + cot²θ = cosec²θ</strong></p>
                </div>
                <div class="example-box">
                    <h4>Example:</h4>
                    <p>If sin θ = 3/5, find cos θ.</p>
                    <p>Using sin²θ + cos²θ = 1</p>
                    <p>(3/5)² + cos²θ = 1</p>
                    <p>9/25 + cos²θ = 1</p>
                    <p>cos²θ = 16/25</p>
                    <p>cos θ = 4/5</p>
                </div>
            `)}
        `)}

        <div class="resources">
            <h4>📚 Study Resources</h4>
            <ul>
                <li>Practice all formulas daily - write them 5 times each</li>
                <li>Solve 20 MCQs daily from each topic</li>
                <li>Make formula sheets and keep them visible</li>
                <li>Practice Pythagoras theorem with different values</li>
                <li>Memorize trigonometric ratio table for special angles</li>
                <li>Solve at least 5 quadratic equations daily using different methods</li>
                <li>Practice factorization problems regularly</li>
                <li>Learn to recognize patterns in algebraic expressions</li>
                <li>Work on speed calculations for basic operations</li>
                <li>Revise the prescribed textbook: New College Publication</li>
            </ul>
        </div>
    `;
    
    // Add MCQ Test
    const mathematicsMCQs = [
        {
            question: "What is 15% of 200?",
            options: ["25", "30", "35", "40"],
            correct: 1
        },
        {
            question: "If x + 5 = 12, what is the value of x?",
            options: ["5", "6", "7", "8"],
            correct: 2
        },
        {
            question: "What is the area of a rectangle with length 8 cm and width 5 cm?",
            options: ["13 cm²", "26 cm²", "40 cm²", "48 cm²"],
            correct: 2
        },
        {
            question: "What is the square root of 144?",
            options: ["10", "11", "12", "13"],
            correct: 2
        },
        {
            question: "What is 3/4 + 1/4?",
            options: ["1/2", "4/8", "1", "2"],
            correct: 2
        },
        {
            question: "What is the value of π (pi) approximately?",
            options: ["2.14", "3.14", "4.14", "5.14"],
            correct: 1
        },
        {
            question: "If a triangle has angles 60°, 60°, and 60°, what type of triangle is it?",
            options: ["Scalene", "Isosceles", "Equilateral", "Right-angled"],
            correct: 2
        },
        {
            question: "What is 2³ (2 to the power of 3)?",
            options: ["6", "8", "9", "12"],
            correct: 1
        },
        {
            question: "What is the perimeter of a square with side 6 cm?",
            options: ["12 cm", "18 cm", "24 cm", "36 cm"],
            correct: 2
        },
        {
            question: "What is 0.5 as a fraction?",
            options: ["1/3", "1/2", "1/4", "2/3"],
            correct: 1
        }
    ];
    
    window.mathematicsMCQs = mathematicsMCQs;
    
    mathematicsContent.innerHTML = content + createMCQTest('mathematics', mathematicsMCQs);
    reloadQA();
});
