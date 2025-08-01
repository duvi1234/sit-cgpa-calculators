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
                { "name": "Basic Sciences Laboratory - I", "credit": 1, "code": "21UGS113" },
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
                { "name": "Basic Sciences Laboratory - II", "credit": 1, "code": "21UGS210" },
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

// CGPA Functions
function renderCGPASubjects(batch, semesterCount) {
    const container = document.getElementById("semesterSubjectsContainer");
    container.innerHTML = "";

    if (!batch || !semesterCount || !departmentData["CSE (AI & ML)"][batch]) {
        return;
    }

    const semesterOrder = ["Semester I", "Semester II", "Semester III", "Semester IV", "Semester V", "Semester VI", "Semester VII", "Semester VIII"];
    
    for (let i = 0; i < semesterCount; i++) {
        const semesterKey = semesterOrder[i];
        const subjects = departmentData["CSE (AI & ML)"][batch][semesterKey];
        
        if (!subjects) continue;

        // Create semester block
        const semesterBlock = document.createElement("div");
        semesterBlock.classList.add("semester-block");
        semesterBlock.style.marginBottom = "30px";
        semesterBlock.style.border = "1px solid var(--border-color)";
        semesterBlock.style.borderRadius = "10px";
        semesterBlock.style.overflow = "hidden";

        const heading = document.createElement("h5");
        heading.textContent = semesterKey;
        heading.style.margin = "0";
        heading.style.padding = "15px 20px";
        heading.style.background = "var(--header-bg)";
        heading.style.color = "white";
        heading.style.fontSize = "1.1rem";
        heading.style.fontWeight = "600";
        semesterBlock.appendChild(heading);

        const headerRow = document.createElement("div");
        headerRow.classList.add("subjects-header");
        headerRow.innerHTML = `
            <div class="header-cell">Subject Code</div>
            <div class="header-cell">Subject Name</div>
            <div class="header-cell">Credits</div>
            <div class="header-cell">Grade</div>
        `;
        semesterBlock.appendChild(headerRow);

        subjects.forEach((subject, index) => {
            if (subject.credit > 0) { // Only include subjects with credits > 0
                const row = document.createElement("div");
                row.classList.add("subject-row");

                const code = document.createElement("div");
                code.textContent = subject.code;
                code.classList.add("subject-cell");

                const name = document.createElement("div");
                name.textContent = subject.name;
                name.classList.add("subject-cell");

                const credit = document.createElement("div");
                credit.textContent = subject.credit;
                credit.classList.add("subject-cell");

                const grade = document.createElement("div");
                grade.classList.add("subject-cell");

                const gradeSelect = document.createElement("select");
                gradeSelect.name = `grade-${i}-${index}`;
                gradeSelect.classList.add("grade-dropdown");
                gradeSelect.style.width = "100%";
                gradeSelect.style.padding = "8px 12px";
                gradeSelect.style.border = "1px solid var(--input-border)";
                gradeSelect.style.borderRadius = "6px";
                gradeSelect.style.background = "var(--container-bg)";
                gradeSelect.style.color = "var(--text-primary)";
                
                ["", "O", "A+", "A", "B+", "B", "C", "U", "SA", "W"].forEach(opt => {
                    const option = document.createElement("option");
                    option.value = opt;
                    option.textContent = opt;
                    gradeSelect.appendChild(option);
                });

                grade.appendChild(gradeSelect);

                // Append cells to row
                row.appendChild(code);
                row.appendChild(name);
                row.appendChild(credit);
                row.appendChild(grade);

                semesterBlock.appendChild(row);
            }
        });

        container.appendChild(semesterBlock);
    }
}

// Function to populate subjects for arrear dropdown
function populateArrearSubjects(semesterSelect, subjectSelect, batch) {
    const selectedSemester = semesterSelect.value;
    const subjectSelectElement = subjectSelect;
    
    // Clear existing options
    subjectSelectElement.innerHTML = '<option value="">Select Subject</option>';
    
    if (!selectedSemester || !batch || !departmentData["CSE (AI & ML)"][batch]) {
        return;
    }
    
    const subjects = departmentData["CSE (AI & ML)"][batch][selectedSemester];
    if (subjects) {
        subjects.forEach(subject => {
            if (subject.credit > 0) { // Only include subjects with credits > 0
                const option = document.createElement("option");
                option.value = subject.code;
                option.textContent = `${subject.code} - ${subject.name} (${subject.credit} credits)`;
                option.dataset.credit = subject.credit;
                option.dataset.name = subject.name;
                subjectSelectElement.appendChild(option);
            }
        });
    }
}

// Function to add arrear subject
function addArrearSubject() {
    const container = document.getElementById("arrearsContainer");
    const batch = document.getElementById('cgpaBatchSelect').value;
    
    if (!batch) {
        alert("Please select a batch first.");
        return;
    }
    
    const arrearDiv = document.createElement("div");
    arrearDiv.className = "subject-row arrear-row";
    
    const semesterOrder = ["Semester I", "Semester II", "Semester III", "Semester IV", "Semester V", "Semester VI", "Semester VII", "Semester VIII"];
    
    arrearDiv.innerHTML = `
        <div class="arrear-semester-container">
            <label>Semester:</label>
            <select class="arrear-semester" required>
                <option value="">Select Semester</option>
                ${semesterOrder.map(semester => `<option value="${semester}">${semester}</option>`).join('')}
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
            <input type="number" class="arrear-credit" placeholder="Credit" required min="1" step="0.5" readonly>
        </div>
        <div class="arrear-grade-container">
            <label>Grade:</label>
            <select class="arrear-grade" required>
                <option value="">Grade</option>
                <option value="S">S</option>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
                <option value="D">D</option>
                <option value="E">E</option>
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
    
    // Add event listeners for the new dropdowns
    const semesterSelect = arrearDiv.querySelector('.arrear-semester');
    const subjectSelect = arrearDiv.querySelector('.arrear-subject');
    const creditInput = arrearDiv.querySelector('.arrear-credit');
    
    // Event listener for semester selection
    semesterSelect.addEventListener('change', function() {
        populateArrearSubjects(this, subjectSelect, batch);
        creditInput.value = '';
    });
    
    // Event listener for subject selection
    subjectSelect.addEventListener('change', function() {
        const selectedOption = this.options[this.selectedIndex];
        if (selectedOption && selectedOption.dataset.credit) {
            creditInput.value = selectedOption.dataset.credit;
        } else {
            creditInput.value = '';
        }
    });
}

// Function to remove arrear subject
function removeArrear(button) {
    button.parentElement.remove();
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

// CGPA Functions
function renderCGPASubjects(batch, semesterCount) {
    const container = document.getElementById("semesterSubjectsContainer");
    container.innerHTML = "";

    if (!batch || !semesterCount || !departmentData["CSE (AI & ML)"][batch]) {
        return;
    }

    const semesterOrder = ["Semester I", "Semester II", "Semester III", "Semester IV", "Semester V", "Semester VI", "Semester VII", "Semester VIII"];
    
    for (let i = 0; i < semesterCount; i++) {
        const semesterKey = semesterOrder[i];
        const subjects = departmentData["CSE (AI & ML)"][batch][semesterKey];
        
        if (!subjects) continue;

        // Create semester block
        const semesterBlock = document.createElement("div");
        semesterBlock.classList.add("semester-block");
        semesterBlock.style.marginBottom = "30px";
        semesterBlock.style.border = "1px solid var(--border-color)";
        semesterBlock.style.borderRadius = "10px";
        semesterBlock.style.overflow = "hidden";

        const heading = document.createElement("h5");
        heading.textContent = semesterKey;
        heading.style.margin = "0";
        heading.style.padding = "15px 20px";
        heading.style.background = "var(--header-bg)";
        heading.style.color = "white";
        heading.style.fontSize = "1.1rem";
        heading.style.fontWeight = "600";
        semesterBlock.appendChild(heading);

        const headerRow = document.createElement("div");
        headerRow.classList.add("subjects-header");
        headerRow.innerHTML = `
            <div class="header-cell">Subject Code</div>
            <div class="header-cell">Subject Name</div>
            <div class="header-cell">Credits</div>
            <div class="header-cell">Grade</div>
        `;
        semesterBlock.appendChild(headerRow);

        subjects.forEach((subject, index) => {
            if (subject.credit > 0) { // Only include subjects with credits > 0
                const row = document.createElement("div");
                row.classList.add("subject-row");

                const code = document.createElement("div");
                code.textContent = subject.code;
                code.classList.add("subject-cell");

                const name = document.createElement("div");
                name.textContent = subject.name;
                name.classList.add("subject-cell");

                const credit = document.createElement("div");
                credit.textContent = subject.credit;
                credit.classList.add("subject-cell");

                const grade = document.createElement("div");
                grade.classList.add("subject-cell");

                const gradeSelect = document.createElement("select");
                gradeSelect.name = `grade-${i}-${index}`;
                gradeSelect.classList.add("grade-dropdown");
                gradeSelect.style.width = "100%";
                gradeSelect.style.padding = "8px 12px";
                gradeSelect.style.border = "1px solid var(--input-border)";
                gradeSelect.style.borderRadius = "6px";
                gradeSelect.style.background = "var(--container-bg)";
                gradeSelect.style.color = "var(--text-primary)";
                
                ["", "O", "A+", "A", "B+", "B", "C", "U", "SA", "W"].forEach(opt => {
                    const option = document.createElement("option");
                    option.value = opt;
                    option.textContent = opt;
                    gradeSelect.appendChild(option);
                });

                grade.appendChild(gradeSelect);

                // Append cells to row
                row.appendChild(code);
                row.appendChild(name);
                row.appendChild(credit);
                row.appendChild(grade);

                semesterBlock.appendChild(row);
            }
        });

        container.appendChild(semesterBlock);
    }
}

// Function to add arrear subject
function addArrearSubject() {
    const container = document.getElementById("arrearsContainer");
    const arrearDiv = document.createElement("div");
    arrearDiv.className = "subject-row arrear-row";
    
    arrearDiv.innerHTML = `
        <div class="arrear-subject-container">
            <label>Subject Name:</label>
            <input type="text" class="arrear-subject-name" placeholder="Enter subject name" required>
        </div>
        <div class="arrear-credit-container">
            <label>Credit:</label>
            <input type="number" class="arrear-credit" placeholder="Credit" required min="1" step="0.5">
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

// Function to remove arrear subject
function removeArrear(button) {
    button.parentElement.remove();
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
        const credit = parseFloat(creditElement.textContent);
        const grade = gradeSelect.value;
        const point = gradePoints[grade];

        if (!isNaN(credit) && point !== undefined && grade !== "U" && grade !== "SA" && grade !== "W") {
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
        const credit = parseFloat(creditInput.value);
        const grade = gradeSelect.value;
        const point = gradePoints[grade];

        if (!isNaN(credit) && point !== undefined && grade !== "U" && grade !== "SA" && grade !== "W") {
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

// Function to calculate CGPA
function calculateCGPA() {
    const batch = document.getElementById('cgpaBatchSelect').value;
    const semesterCount = parseInt(document.getElementById('semesterCountSelect').value);

    if (!batch || !semesterCount) {
        alert("Please select both batch and number of semesters.");
        return;
    }

    let totalPoints = 0;
    let totalCredits = 0;

    // Calculate from semester subjects
    const semesterBlocks = document.querySelectorAll("#semesterSubjectsContainer .semester-block");
    semesterBlocks.forEach(block => {
        const subjectRows = block.querySelectorAll(".subject-row");
        subjectRows.forEach(row => {
            const creditElement = row.querySelector(".subject-cell:nth-child(3)");
            const gradeSelect = row.querySelector(".grade-dropdown");
            
            if (creditElement && gradeSelect) {
                const credit = parseFloat(creditElement.textContent);
                const grade = gradeSelect.value;
                const point = gradePoints[grade];

                if (!isNaN(credit) && point !== undefined && grade !== "U" && grade !== "SA" && grade !== "W") {
                    totalCredits += credit;
                    totalPoints += credit * point;
                }
            }
        });
    });

    // Calculate from arrear subjects
    const arrearEntries = document.querySelectorAll("#arrearsContainer > div");
    arrearEntries.forEach(div => {
        const creditInput = div.querySelector('.arrear-credit');
        const gradeSelect = div.querySelector('.arrear-grade');
        const credit = parseFloat(creditInput.value);
        const grade = gradeSelect.value;
        const point = gradePoints[grade];

        if (!isNaN(credit) && point !== undefined && grade !== "U" && grade !== "SA" && grade !== "W") {
            totalCredits += credit;
            totalPoints += credit * point;
        }
    });

    if (totalCredits === 0) {
        alert("Please enter valid grades for the selected semesters.");
        return;
    }

    const cgpa = (totalPoints / totalCredits).toFixed(2);
    document.getElementById('result').innerHTML = `
        <div class="cgpa-result">
            <h3>CGPA</h3>
            <div class="gpa-value">${cgpa}</div>
            <div class="gpa-details">
                <span>Total Credits: ${totalCredits}</span>
                <span>Total Points: ${totalPoints}</span>
            </div>
        </div>
    `;
}

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
    
    // CGPA Batch and Semester Count event listeners
    const cgpaBatchSelect = document.getElementById("cgpaBatchSelect");
    const semesterCountSelect = document.getElementById("semesterCountSelect");
    
    if (cgpaBatchSelect) {
        cgpaBatchSelect.addEventListener('change', function() {
            const batch = this.value;
            const semesterCountSelect = document.getElementById("semesterCountSelect");
            const semesterSubjectsSection = document.getElementById("semesterSubjectsSection");
            const arrearsSection = document.getElementById("arrearsSection");
            
            if (batch) {
                semesterCountSelect.disabled = false;
                semesterSubjectsSection.style.display = "none";
                arrearsSection.style.display = "none";
            } else {
                semesterCountSelect.disabled = true;
                semesterSubjectsSection.style.display = "none";
                arrearsSection.style.display = "none";
            }
        });
    }
    
    if (semesterCountSelect) {
        semesterCountSelect.addEventListener('change', function() {
            const batch = document.getElementById("cgpaBatchSelect").value;
            const semesterCount = parseInt(this.value);
            const semesterSubjectsSection = document.getElementById("semesterSubjectsSection");
            const arrearsSection = document.getElementById("arrearsSection");
            
            if (batch && semesterCount) {
                renderCGPASubjects(batch, semesterCount);
                semesterSubjectsSection.style.display = "block";
                arrearsSection.style.display = "block";
            } else {
                semesterSubjectsSection.style.display = "none";
                arrearsSection.style.display = "none";
            }
        });
    }
    
    // Add arrear button event listener
    const addArrearBtn = document.getElementById("addArrearBtn");
    if (addArrearBtn) {
        addArrearBtn.addEventListener('click', addArrearSubject);
    }
    
    // Add calculate button event listener
    const calculateBtn = document.getElementById('calculateBtn');
    if (calculateBtn) {
        calculateBtn.addEventListener('click', function(e) {
            e.preventDefault();
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

// Calculation mode toggle functionality
function initializeCalculationModeToggle() {
    const gpaMode = document.getElementById('gpaMode');
    const cgpaMode = document.getElementById('cgpaMode');
    const gpaSection = document.getElementById('gpaSection');
    const cgpaSection = document.getElementById('cgpaSection');
    const selectionSection = document.querySelector('.selection-section');
    const calculateBtn = document.getElementById('calculateBtn');
    
    function updateMode() {
        if (gpaMode.checked) {
            // GPA Mode
            selectionSection.style.display = 'flex';
            gpaSection.style.display = 'block';
            cgpaSection.style.display = 'none';
            calculateBtn.innerHTML = '<i class="fa fa-calculator"></i> Calculate GPA';
            document.getElementById('result').innerHTML = '';
        } else {
            // CGPA Mode
            selectionSection.style.display = 'none';
            gpaSection.style.display = 'none';
            cgpaSection.style.display = 'block';
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
