const gradePoints = {
    "O": 10,
    "A+": 9,
    "A": 8,
    "B+": 7,
    "B": 6,
    "C": 5,
    "U": 0,
    "SA": 0,
    "W": 0
};

// Department data structure
const departmentData = {
    "CSE (AI & ML)": {
        "2023-2027": {
            "Semester I": [
                { "name": "Induction Programme", "credit": 0, "code": "R21UGM131" },
                { "name": "Matrix and Calculus", "credit": 4, "code": "R21UMA102" },
                { "name": "Physics for Information Science", "credit": 3, "code": "R21UPH103" },
                { "name": "Problem Solving and C programming", "credit": 3, "code": "R21UCS107" },
                { "name": "Principles of Electrical Engineering", "credit": 3, "code": "R21UEE125" },
                { "name": "English for Technical Communication", "credit": 2, "code": "R21UEN101" },
                { "name": "Problem Solving And C programming Laboratory", "credit": 1, "code": "R21UCS111" },
                { "name": "Electrical Engineering Laboratory", "credit": 1, "code": "R21UEE128" },
                { "name": "Physics Laboratory", "credit": 1, "code": "R21UPH113" },
                { "name": "Heritage of Tamils", "credit": 1, "code": "R21UGT140" }
            ],
            "Semester II": [
                { "name": "Biology for Engineers", "credit": 0, "code": "R21UAC231" },
                { "name": "Applied Chemistry for Engineers", "credit": 3, "code": "R21UCY205" },
                { "name": "Fourier Series, Partial Differential Equation and Complex Analysis", "credit": 4, "code": "R21UMA211" },
                { "name": "Programming Fundamentals using Python", "credit": 3, "code": "R21UIT206" },
                { "name": "Communication Skills for Professionals (Integrated Course)", "credit": 1.5, "code": "R21UEN201" },
                { "name": "Applied Chemistry Laboratory", "credit": 1, "code": "R21UCY213" },
                { "name": "Programming Fundamentals using Python Laboratory", "credit": 1.5, "code": "R21UIT207" },
                { "name": "Tamils and Technology", "credit": 1, "code": "R21UGT241" },
                { "name": "Digital Logic and Design", "credit": 3, "code": "R21UAD205" }
            ],
            "Semester III": [
                { "name": "Computational Statistics and Numerical Methods", "credit": 4, "code": "R21UMA329" },
                { "name": "Database system Design Laboratory", "credit": 1, "code": "R21UCD308" },
                { "name": "Object Oriented Programming using C++ Laboratory", "credit": 1, "code": "R21UCS309" },
                { "name": "Data Structures Laboratory", "credit": 1, "code": "R21UIT307" },
                { "name": "Environmental Science", "credit": 0, "code": "R21UGM331" },
                { "name": "Database system Design", "credit": 3, "code": "R21UCD306" },
                { "name": "Object Oriented Programming using C++", "credit": 3, "code": "R21UCS303" },
                { "name": "Computer Organization", "credit": 3, "code": "R21UCS305" },
                { "name": "Data Structures", "credit": 3, "code": "R21UIT302" },
                { "name": "Principles of Operating System", "credit": 3, "code": "R21UIT304" }
            ],
            "Semester IV": [
                { "name": "Transforms and Discrete Mathematics", "credit": 4, "code": "R21UMA421" },
                { "name": "Introduction to Mobile Application Development", "credit": 1, "code": "R21UAM861" },
                { "name": "Artificial Intelligence Laboratory", "credit": 1, "code": "R21UAD408" },
                { "name": "Machine Learning Laboratory", "credit": 1, "code": "R21UAM407" },
                { "name": "Java Programming Laboratory", "credit": 1, "code": "R21UIT408" },
                { "name": "Gender Equality", "credit": 0, "code": "R21UGM431" },
                { "name": "Artificial Intelligence", "credit": 3, "code": "R21UAD402" },
                { "name": "Principles of Machine Learning", "credit": 3, "code": "R21UAM405" },
                { "name": "Computer Communication Networks", "credit": 3, "code": "R21UAM406" },
                { "name": "Algorithm Analysis", "credit": 3, "code": "R21UCS403" },
                { "name": "Java Programming", "credit": 3, "code": "R21UIT404" }
            ]
        },
        "2024-2028": {
            "Semester I": [
                { "name": "Induction Programme", "credit": 0, "code": "R21UGM131" },
                { "name": "Matrix and Calculus", "credit": 4, "code": "R21UMA102" },
                { "name": "Physics for Information Science", "credit": 3, "code": "R21UPH103" },
                { "name": "Problem Solving and C programming", "credit": 3, "code": "R21UCS107" },
                { "name": "Principles of Electrical Engineering", "credit": 3, "code": "R21UEE125" },
                { "name": "English for Technical Communication", "credit": 2, "code": "R21UEN101" },
                { "name": "Problem Solving And C programming Laboratory", "credit": 1, "code": "R21UCS111" },
                { "name": "Electrical Engineering Laboratory", "credit": 1, "code": "R21UEE128" },
                { "name": "Physics Laboratory", "credit": 1, "code": "R21UPH113" },
                { "name": "Heritage of Tamils", "credit": 1, "code": "R21UGT140" }
            ],
            "Semester II": [
                { "name": "Biology for Engineers", "credit": 0, "code": "R21UAC231" },
                { "name": "Applied Chemistry for Engineers", "credit": 3, "code": "R21UCY205" },
                { "name": "Fourier Series, Partial Differential Equation and Complex Analysis", "credit": 4, "code": "R21UMA211" },
                { "name": "Programming Fundamentals using Python", "credit": 3, "code": "R21UIT206" },
                { "name": "Communication Skills for Professionals (Integrated Course)", "credit": 1.5, "code": "R21UEN201" },
                { "name": "Applied Chemistry Laboratory", "credit": 1, "code": "R21UCY213" },
                { "name": "Programming Fundamentals using Python Laboratory", "credit": 1.5, "code": "R21UIT207" },
                { "name": "Tamils and Technology", "credit": 1, "code": "R21UGT241" },
                { "name": "Digital Logic and Design", "credit": 3, "code": "R21UAD205" }
            ]
        },
        "2022-2026": {
            "Semester I": [
                { "name": "English for Technical Communication", "credit": 2, "code": "21UEN101" },
                { "name": "Matrix and Calculus", "credit": 4, "code": "21UMA102" },
                { "name": "Engineering Physics", "credit": 3, "code": "21UPH103" },
                { "name": "Basic Sciences Laboratory – I", "credit": 1, "code": "21UGS113" },
                { "name": "Induction Programme", "credit": 0, "code": "21UGM131" },
                { "name": "Applied Chemistry", "credit": 3, "code": "21UCY105" },
                { "name": "Principles of Electrical Engineering", "credit": 3, "code": "21UEE125" },
                { "name": "Electrical Engineering Laboratory", "credit": 1, "code": "21UEE128" },
                { "name": "Problem Solving and C Programming", "credit": 3, "code": "21UCS107" },
                { "name": "Problem Solving and C Programming Laboratory", "credit": 1, "code": "21UCS111" }
            ],
            "Semester II": [
                { "name": "Communication Skills for Professionals(Integrated Course)", "credit": 1.5, "code": "21UEN201" },
                { "name": "Physics for Information Science", "credit": 3, "code": "21UPH205" },
                { "name": "Basic Sciences Laboratory – II", "credit": 1, "code": "21UGS210" },
                { "name": "Digital Logic and Design", "credit": 3, "code": "21UAD205" },
                { "name": "Biology for Engineers", "credit": 0, "code": "21UGM331" },
                { "name": "Programming Fundamentals using Python", "credit": 3, "code": "21UIT206" },
                { "name": "Heritage of Tamil", "credit": 1, "code": "21UGT140" },
                { "name": "Fourier Series, Differential Equation and Complex Analysis", "credit": 4, "code": "21UMA211" },
                { "name": "Programming Fundamentals using Python Laboratory", "credit": 1.5, "code": "21UIT207" }
            ],
            "Semester III": [
                { "name": "Environmental Science", "credit": 0, "code": "21UGM231" },
                { "name": "Data Structures", "credit": 3, "code": "21UIT302" },
                { "name": "Principles of Operating System", "credit": 3, "code": "21UIT304" },
                { "name": "Object Oriented Programming using C++(Integrated Course)", "credit": 4, "code": "21UCS303" },
                { "name": "Computer Organization", "credit": 3, "code": "21UCS305" },
                { "name": "Database System Design", "credit": 3, "code": "21UCD306" },
                { "name": "Data Structures Laboratory", "credit": 1, "code": "21UIT307" },
                { "name": "Database System Design Laboratory", "credit": 1, "code": "21UCD308" },
                { "name": "Computational Statistics and Numerical methods", "credit": 4, "code": "21UMA329" },
                { "name": "Tamils and Technology", "credit": 1, "code": "21UGT241" }
            ],
            "Semester IV": [
                { "name": "Gender Equality", "credit": 0, "code": "21UGM431" },
                { "name": "Artificial Intelligence", "credit": 3, "code": "21UAD402" },
                { "name": "Algorithm Analysis", "credit": 3, "code": "21UCS403" },
                { "name": "Artificial Intelligence Laboratory", "credit": 1, "code": "21UAD408" },
                { "name": "Transforms and Discrete Mathematics", "credit": 4, "code": "21UMA421" },
                { "name": "Java Programming(Integrated Course)", "credit": 4, "code": "21UIT404" },
                { "name": "Principles of Machine Learning", "credit": 3, "code": "21UAM405" },
                { "name": "Computer Communication Networks", "credit": 3, "code": "21UAM406" },
                { "name": "Machine Learning Laboratory", "credit": 1, "code": "21UAM407" },
                { "name": "Introduction to Mobile Application Development", "credit": 1, "code": "21UAM861" }
            ],
            "Semester V": [
                { "name": "Soft skills Laboratory", "credit": 1, "code": "21UGS532" },
                { "name": "Reasoning and Aptitude", "credit": 1, "code": "21UGS531" },
                { "name": "Digital Marketing", "credit": 3, "code": "21CSV505" },
                { "name": "Theory of Computation", "credit": 4, "code": "21UCS503" },
                { "name": "Intelligent Robots", "credit": 3, "code": "21UAM501" },
                { "name": "Introduction to Cryptography and Cyber Security", "credit": 3, "code": "21UAM502" },
                { "name": "Building Internet of Things", "credit": 3, "code": "21UAM504" },
                { "name": "AI for Game Programming", "credit": 1, "code": "21UAM862" },
                { "name": "Creative Thinking and Innovation", "credit": 1, "code": "21UAM507" },
                { "name": "Building Internet of Things Laboratory", "credit": 1, "code": "21UAM508" },
                { "name": "Intelligent Robots Laboratory", "credit": 1, "code": "21UAM509" },
                { "name": "Open Elective", "credit": 3, "code": "-" }
            ],
            "Semester VI": [
                { "name": "Digital and Mobile Forensics", "credit": 3, "code": "21ITV402" },
                { "name": "Interpersonal Skills Development Laboratory", "credit": 1.5, "code": "21UGS633" },
                { "name": "Indian Constitution", "credit": 0, "code": "21UGM631" },
                { "name": "Comprehensive Engineering Aptitude", "credit": 3, "code": "21UGT651" },
                { "name": "Crypto currency and Block Chain Technologies", "credit": 3, "code": "21ITV406" },
                { "name": "Intelligent Machine Vision", "credit": 3, "code": "21UAM601" },
                { "name": "Data and Visual Analytics in AI", "credit": 3, "code": "21UAM602" },
                { "name": "Drone Technology and its Applications", "credit": 3, "code": "21UAM603" },
                { "name": "Product Development Project", "credit": 4, "code": "21UAM607" },
                { "name": "Drone Technology Laboratory", "credit": 1, "code": "21UAM608" },
                { "name": "GPU Programming", "credit": 1, "code": "21UAM863" },
                { "name": "Open elective", "credit": 3, "code": "-" }
            ]
        }
    }
};

// Function to populate semester dropdown based on selected batch
function populateSemesters() {
    const batchSelect = document.getElementById("batchSelect");
    const semesterSelect = document.getElementById("semesterSelect");
    const subjectsContainer = document.getElementById("subjectsContainer");
    
    // Clear previous options
    semesterSelect.innerHTML = '<option value="">Select Semester</option>';
    subjectsContainer.innerHTML = '';
    
    const selectedBatch = batchSelect.value;
    if (selectedBatch && departmentData["CSE (AI & ML)"][selectedBatch]) {
        const semesters = Object.keys(departmentData["CSE (AI & ML)"][selectedBatch]);
        semesters.forEach(semester => {
            const option = document.createElement("option");
            option.value = semester;
            option.textContent = semester;
            semesterSelect.appendChild(option);
        });
    }
}

// Function to populate subjects based on selected semester
function populateSubjects() {
    const batchSelect = document.getElementById("batchSelect");
    const semesterSelect = document.getElementById("semesterSelect");
    const subjectsContainer = document.getElementById("subjectsContainer");
    
    subjectsContainer.innerHTML = '';
    
    const selectedBatch = batchSelect.value;
    const selectedSemester = semesterSelect.value;
    
    if (selectedBatch && selectedSemester && departmentData["CSE (AI & ML)"][selectedBatch][selectedSemester]) {
        const subjects = departmentData["CSE (AI & ML)"][selectedBatch][selectedSemester];
        subjects.forEach(subject => {
            if (subject.credit > 0) { // Only add subjects with credits > 0
                addSubjectRow(subject.name, subject.credit, subject.code);
            }
        });
    }
}

// Function to add a subject row with predefined data
function addSubjectRow(subjectName, credit, code) {
    const container = document.getElementById("subjectsContainer");
    const subjectDiv = document.createElement("div");
    subjectDiv.className = "subject-row";
    subjectDiv.innerHTML = `
        <div class="subject-code">${code}</div>
        <div class="subject-name">${subjectName}</div>
        <div class="subject-credit">${credit}</div>
        <select class="subject-grade" required>
            <option value="">Grade</option>
            <option value="O">O</option>
            <option value="A+">A+</option>
            <option value="A">A</option>
            <option value="B+">B+</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="U">U</option>
            <option value="SA">SA</option>
            <option value="W">W</option>
        </select>
    `;
    container.appendChild(subjectDiv);
}

// Function to add arrear subject
function addArrearSubject() {
    const container = document.getElementById("arrearsContainer");
    const arrearDiv = document.createElement("div");
    arrearDiv.className = "subject-row arrear-row";
    
    // Get available semesters for the selected batch
    const batchSelect = document.getElementById("batchSelect");
    const semesterSelect = document.getElementById("semesterSelect");
    const selectedBatch = batchSelect.value;
    const currentSemester = semesterSelect.value;
    let semesterOptions = '<option value="">Select Semester</option>';
    
    if (selectedBatch && departmentData["CSE (AI & ML)"][selectedBatch]) {
        const allSemesters = Object.keys(departmentData["CSE (AI & ML)"][selectedBatch]);
        const semesterOrder = ["Semester I", "Semester II", "Semester III", "Semester IV", "Semester V", "Semester VI", "Semester VII", "Semester VIII"];
        
        // Find the index of current semester
        const currentSemesterIndex = semesterOrder.indexOf(currentSemester);
        
        // Only show semesters that come before the current semester
        allSemesters.forEach(semester => {
            const semesterIndex = semesterOrder.indexOf(semester);
            if (semesterIndex < currentSemesterIndex) {
                semesterOptions += `<option value="${semester}">${semester}</option>`;
            }
        });
    }
    
    arrearDiv.innerHTML = `
        <div class="arrear-semester-container">
            <label>Semester:</label>
            <select class="arrear-semester" required onchange="populateArrearSubjects(this)">
                ${semesterOptions}
            </select>
        </div>
        <div class="arrear-subject-container">
            <label>Subject:</label>
            <select class="arrear-subject" required>
                <option value="">Select Subject</option>
            </select>
        </div>
        <div class="arrear-credit-container">
            <label>Credit:</label>
            <input type="number" class="arrear-credit" placeholder="Credit" required min="1">
        </div>
        <div class="arrear-grade-container">
            <label>Grade:</label>
            <select class="arrear-grade" required>
                <option value="">Grade</option>
                <option value="O">O</option>
                <option value="A+">A+</option>
                <option value="A">A</option>
                <option value="B+">B+</option>
                <option value="B">B</option>
                <option value="C">C</option>
                <option value="U">U</option>
                <option value="SA">SA</option>
                <option value="W">W</option>
            </select>
        </div>
        <button type="button" onclick="removeArrear(this)" class="remove-btn">
            <i class="fa fa-trash"></i>
        </button>
    `;
    container.appendChild(arrearDiv);
}

// Function to populate arrear subjects based on selected semester
function populateArrearSubjects(semesterSelect) {
    const arrearRow = semesterSelect.closest('.arrear-row');
    const subjectSelect = arrearRow.querySelector('.arrear-subject');
    const creditInput = arrearRow.querySelector('.arrear-credit');
    
    const batchSelect = document.getElementById("batchSelect");
    const selectedBatch = batchSelect.value;
    const selectedSemester = semesterSelect.value;
    
    // Clear previous options
    subjectSelect.innerHTML = '<option value="">Select Subject</option>';
    creditInput.value = '';
    
    if (selectedBatch && selectedSemester && departmentData["CSE (AI & ML)"][selectedBatch][selectedSemester]) {
        const subjects = departmentData["CSE (AI & ML)"][selectedBatch][selectedSemester];
        subjects.forEach(subject => {
            if (subject.credit > 0) { // Only add subjects with credits > 0
                const option = document.createElement("option");
                option.value = subject.code;
                option.textContent = `${subject.name} (${subject.code})`;
                option.dataset.credit = subject.credit;
                subjectSelect.appendChild(option);
            }
        });
    }
    
    // Add event listener to auto-fill credit when subject is selected
    subjectSelect.addEventListener('change', function() {
        const selectedOption = this.options[this.selectedIndex];
        if (selectedOption.dataset.credit) {
            creditInput.value = selectedOption.dataset.credit;
        }
    });
}

// Function to remove arrear subject
function removeArrear(button) {
    button.parentElement.remove();
}

// Legacy function for manual subject addition (kept for compatibility)
function addSubject() {
    const container = document.getElementById("subjectsContainer");
    const subjectDiv = document.createElement("div");
    subjectDiv.className = "subject-row";
    subjectDiv.innerHTML = `
        <input type="text" placeholder="Subject" required>
        <input type="number" placeholder="Credit" required min="1">
        <select required>
            <option value="">Grade</option>
            <option value="O">O</option>
            <option value="A+">A+</option>
            <option value="A">A</option>
            <option value="B+">B+</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="U">U</option>
            <option value="SA">SA</option>
            <option value="W">W</option>
        </select>
    `;
    container.appendChild(subjectDiv);
}

document.getElementById("cgpaForm").addEventListener("submit", function(e) {
    e.preventDefault();

    // Calculate current semester GPA
    const currentEntries = document.querySelectorAll("#subjectsContainer > div");
    let currentSemesterCredits = 0;
    let currentSemesterPoints = 0;

    currentEntries.forEach(div => {
        const [subjectCode, subjectName, creditDiv, gradeSelect] = div.children;
        const credit = parseInt(creditDiv.textContent);
        const grade = gradeSelect.value;
        const point = gradePoints[grade];

        if (!isNaN(credit) && point !== undefined) {
            currentSemesterCredits += credit;
            currentSemesterPoints += credit * point;
        }
    });

    // Calculate semester GPAs for overall CGPA
    const semesterGPARows = document.querySelectorAll("#semesterGPAsContainer > div");
    let semesterCount = 0;
    let semesterTotal = 0;

    semesterGPARows.forEach(semesterDiv => {
        const gpaInput = semesterDiv.querySelector('.semester-gpa-input');
        const gpa = parseFloat(gpaInput.value);

        if (!isNaN(gpa) && gpa >= 0) {
            semesterCount++;
            semesterTotal += gpa;
        }
    });

    // Calculate average GPA from all semesters
    const overallCGPA = semesterCount > 0 ? semesterTotal / semesterCount : 0;

    // Calculate arrear subjects
    const arrearEntries = document.querySelectorAll("#arrearsContainer > div");
    let arrearCredits = 0;
    let arrearPoints = 0;

    arrearEntries.forEach(div => {
        const creditInput = div.querySelector('.arrear-credit');
        const gradeSelect = div.querySelector('.arrear-grade');
        const credit = parseInt(creditInput.value);
        const grade = gradeSelect.value;
        const point = gradePoints[grade];

        if (!isNaN(credit) && point !== undefined) {
            arrearCredits += credit;
            arrearPoints += credit * point;
        }
    });

    const result = document.getElementById("result");

    if (currentSemesterCredits === 0 && semesterCount === 0) {
        result.innerHTML = "<p>Please enter at least one valid subject or semester GPA.</p>";
    } else {
        const semesterGPA = currentSemesterCredits > 0 ? (currentSemesterPoints / currentSemesterCredits).toFixed(2) : "N/A";
        const overallCGPAValue = overallCGPA.toFixed(2);
        
        result.innerHTML = `
            <div class="gpa-results">
                <div class="semester-gpa">
                    <h3>Current Semester GPA</h3>
                    <div class="gpa-value">${semesterGPA}</div>
                    <div class="gpa-details">
                        <span>Credits: ${currentSemesterCredits}</span>
                        <span>Points: ${currentSemesterPoints}</span>
                    </div>
                </div>
            </div>
        `;
    }
});

// Initialize the form when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Add event listeners for batch and semester selection
    const batchSelect = document.getElementById("batchSelect");
    const semesterSelect = document.getElementById("semesterSelect");
    
    if (batchSelect) {
        batchSelect.addEventListener('change', populateSemesters);
    }
    
    if (semesterSelect) {
        semesterSelect.addEventListener('change', populateSubjects);
    }
    
    // Add calculate button event listener
    const calculateBtn = document.getElementById('calculateBtn');
    if (calculateBtn) {
        calculateBtn.addEventListener('click', function() {
            const gpaMode = document.getElementById('gpaMode');
            if (gpaMode.checked) {
                calculateGPA();
            } else {
                calculateCGPA();
            }
        });
    }
    
    // Initialize dark mode
    initializeDarkMode();
    
    // Initialize calculation mode toggle
    initializeCalculationModeToggle();
});

// Dark mode functionality
function initializeDarkMode() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const icon = darkModeToggle.querySelector('i');
    
    // Check for saved dark mode preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
        updateDarkModeIcon(icon, savedTheme === 'dark');
    }
    
    // Add click event listener
    darkModeToggle.addEventListener('click', function() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateDarkModeIcon(icon, newTheme === 'dark');
    });
}

function updateDarkModeIcon(icon, isDark) {
    if (isDark) {
        icon.className = 'fa fa-sun';
        icon.style.transform = 'rotate(180deg)';
    } else {
        icon.className = 'fa fa-moon';
        icon.style.transform = 'rotate(0deg)';
    }
}

// Function to update semester GPA inputs based on selected range
function updateSemesterGPAs() {
    const rangeSelect = document.getElementById("semesterRangeSelect");
    const container = document.getElementById("semesterGPAsContainer");
    const selectedRange = parseInt(rangeSelect.value);
    
    container.innerHTML = '';
    
    if (selectedRange && selectedRange > 0) {
        // Add header for the GPA list
        const headerDiv = document.createElement("div");
        headerDiv.className = "semester-gpa-header";
        headerDiv.innerHTML = `
            <div class="semester-number">Semester</div>
            <div class="gpa-input-label">GPA</div>
        `;
        container.appendChild(headerDiv);
        
        // Generate GPA input fields
        for (let i = 1; i <= selectedRange; i++) {
            const semesterDiv = document.createElement("div");
            semesterDiv.className = "semester-gpa-row";
            semesterDiv.innerHTML = `
                <div class="semester-gpa-inputs">
                    <div class="semester-label">
                        <span class="semester-number">${i}</span>
                        <span class="semester-text">Semester ${i}</span>
                    </div>
                    <div class="gpa-input-container">
                        <input type="number" class="semester-gpa-input" placeholder="Enter GPA" step="0.01" min="0" max="10" required>
                        <div class="input-hint">0.00 - 10.00</div>
                    </div>
                </div>
            `;
            container.appendChild(semesterDiv);
        }
        
        // Add summary note
        const summaryDiv = document.createElement("div");
        summaryDiv.className = "cgpa-summary";
        summaryDiv.innerHTML = `
            <div class="summary-text">
                <i class="fa fa-calculator"></i>
                <span>CGPA = (Sum of all GPAs) ÷ ${selectedRange}</span>
            </div>
        `;
        container.appendChild(summaryDiv);
    }
}

// Function to remove completed semester (kept for compatibility but not used)
function removeCompletedSemester(button) {
    button.closest('.completed-semester-row').remove();
}

// Calculation mode toggle functionality
function initializeCalculationModeToggle() {
    const gpaMode = document.getElementById('gpaMode');
    const cgpaMode = document.getElementById('cgpaMode');
    const gpaSection = document.getElementById('gpaSection');
    const cgpaSection = document.getElementById('cgpaSection');
    const arrearSection = document.querySelector('.arrears-section');
    const selectionSection = document.querySelector('.selection-section');
    const calculateBtn = document.getElementById('calculateBtn');
    
    function updateMode() {
        if (gpaMode.checked) {
            // GPA Mode
            selectionSection.style.display = 'flex';
            gpaSection.style.display = 'block';
            cgpaSection.style.display = 'none';
            arrearSection.style.display = 'block';
            calculateBtn.innerHTML = '<i class="fa fa-calculator"></i> Calculate GPA';
            document.getElementById('result').innerHTML = '';
        } else {
            // CGPA Mode
            selectionSection.style.display = 'none';
            gpaSection.style.display = 'none';
            cgpaSection.style.display = 'block';
            arrearSection.style.display = 'none';
            calculateBtn.innerHTML = '<i class="fa fa-calculator"></i> Calculate CGPA';
            document.getElementById('result').innerHTML = '';
        }
    }
    
    // Add event listeners
    gpaMode.addEventListener('change', updateMode);
    cgpaMode.addEventListener('change', updateMode);
    
    // Initialize mode
    updateMode();
}

// Function to calculate GPA (current semester + arrears)
function calculateGPA() {
    // Calculate current semester GPA
    const subjectRows = document.querySelectorAll("#subjectsContainer > div");
    let currentSemesterCredits = 0;
    let currentSemesterPoints = 0;

    subjectRows.forEach(row => {
        const creditElement = row.querySelector('.subject-credit');
        const gradeSelect = row.querySelector('.subject-grade');
        const credit = parseInt(creditElement.textContent);
        const grade = gradeSelect.value;
        const point = gradePoints[grade];

        if (!isNaN(credit) && point !== undefined) {
            currentSemesterCredits += credit;
            currentSemesterPoints += credit * point;
        }
    });

    // Calculate arrear subjects
    const arrearEntries = document.querySelectorAll("#arrearsContainer > div");
    let arrearCredits = 0;
    let arrearPoints = 0;

    arrearEntries.forEach(div => {
        const creditInput = div.querySelector('.arrear-credit');
        const gradeSelect = div.querySelector('.arrear-grade');
        const credit = parseInt(creditInput.value);
        const grade = gradeSelect.value;
        const point = gradePoints[grade];

        if (!isNaN(credit) && point !== undefined) {
            arrearCredits += credit;
            arrearPoints += credit * point;
        }
    });

    // Combine current semester and arrears
    const totalCredits = currentSemesterCredits + arrearCredits;
    const totalPoints = currentSemesterPoints + arrearPoints;

    const result = document.getElementById("result");

    if (totalCredits === 0) {
        result.innerHTML = "<p>Please enter at least one valid subject.</p>";
    } else {
        const gpa = (totalPoints / totalCredits).toFixed(2);
        
        result.innerHTML = `
            <div class="gpa-result">
                <h3>GPA</h3>
                <div class="gpa-value">${gpa}</div>
                <div class="gpa-details">
                    <span>Total Credits: ${totalCredits}</span>
                    <span>Total Points: ${totalPoints}</span>
                </div>
            </div>
        `;
    }
}

// Function to calculate CGPA (simple average of semester GPAs)
function calculateCGPA() {
    const semesterGPAInputs = document.querySelectorAll('.semester-gpa-input');
    let totalGPA = 0;
    let validInputs = 0;

    semesterGPAInputs.forEach(input => {
        const gpa = parseFloat(input.value);
        if (!isNaN(gpa) && gpa >= 0 && gpa <= 10) {
            totalGPA += gpa;
            validInputs++;
        }
    });

    const result = document.getElementById("result");

    if (validInputs === 0) {
        result.innerHTML = "<p>Please enter at least one valid semester GPA.</p>";
    } else {
        const cgpa = (totalGPA / validInputs).toFixed(2);
        
        result.innerHTML = `
            <div class="cgpa-result">
                <h3>Overall CGPA</h3>
                <div class="gpa-value">${cgpa}</div>
                <div class="gpa-details">
                    <span>Semesters included: ${validInputs}</span>
                    <span>Total GPA: ${totalGPA.toFixed(2)}</span>
                </div>
            </div>
        `;
    }
}

