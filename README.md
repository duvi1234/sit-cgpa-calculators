# SIT CGPA Calculator

A modern web application for B.E CSE (AI & ML) students at Sethu Institute of Technology to easily calculate GPA and CGPA by selecting batch, semester, and grades. Supports arrears, multiple batches, and features a responsive, user-friendly design with dark mode support.

## ✨ Features

### 🎯 **Core Functionality**
- **Dual Mode Calculator**: Switch between GPA (current semester) and CGPA (overall performance) modes
- **Batch-wise and semester-wise subject and credit selection**
- **Dynamic Subject Population**: Automatically loads subjects based on selected batch and semester
- **Grade Point System**: Supports O, A+, A, B+, B, C grades with automatic point calculation
- **Failed Grade Handling**: U, SA, W grades are excluded from calculations

### 📊 **GPA Mode**
- Select batch and current semester
- View all subjects with their codes, names, and credits
- Enter grades for each subject
- Add cleared arrear subjects with manual entry
- Calculate current semester GPA

### 🎓 **CGPA Mode**
- **Batch Selection**: Choose from available batches (2022-2026, 2023-2027, 2024-2028)
- **Semester Count Selection**: Select number of semesters (1-8)
- **Semester-wise Subject Display**: View all subjects organized by semester
- **Comprehensive Grade Entry**: Enter grades for all subjects across selected semesters
- **Enhanced Arrear Management**: 
  - Dropdown-based semester selection
  - Dropdown-based subject selection from chosen semester
  - Auto-populated credit values
  - Dynamic subject loading based on batch and semester

### 🎨 **User Experience**
- **Modern, Responsive Design**: Works seamlessly on desktop, tablet, and mobile
- **Dark Mode Support**: Toggle between light and dark themes
- **Intuitive Interface**: Clean, organized layout with clear sections
- **Real-time Validation**: Input validation and error handling
- **Visual Feedback**: Hover effects, transitions, and status indicators

### 📱 **Technical Features**
- **Mobile-First Design**: Optimized for all screen sizes
- **Progressive Enhancement**: Works without JavaScript for basic functionality
- **Local Storage**: Remembers user preferences (dark mode)
- **Cross-Browser Compatibility**: Works on all modern browsers

## 🚀 Usage

### **GPA Calculation (Current Semester)**
1. Switch to **GPA mode** using the toggle
2. Select your **batch** and **current semester**
3. Enter **grades** for each displayed subject
4. Optionally add **cleared arrear subjects** with manual entry
5. Click **"Calculate GPA"** to view your current semester GPA

### **CGPA Calculation (Overall Performance)**
1. Switch to **CGPA mode** using the toggle
2. Select your **batch** and **number of semesters**
3. Enter **grades** for all subjects across the selected semesters
4. Add **cleared arrear subjects** using the enhanced dropdown system:
   - Click **"Add Cleared Arrear"**
   - Select the **semester** from dropdown
   - Select the **subject** from the populated dropdown
   - Enter the **grade** (credit auto-fills)
5. Click **"Calculate CGPA"** to view your overall CGPA

### **Grade System**
- **O**: 10 points (Outstanding)
- **A+**: 9 points (Excellent)
- **A**: 8 points (Very Good)
- **B+**: 7 points (Good)
- **B**: 6 points (Average)
- **C**: 5 points (Pass)
- **U/SA/W**: 0 points (Failed/Not counted in calculation)

## 📁 Project Structure
```
sit-cgpa-calculator/
├── index.html          # Main web page with dual-mode interface
├── style.css           # Comprehensive styling with dark mode support
├── script.js           # Enhanced functionality and calculation logic
└── README.md          # This documentation
```

## 🛠️ Technical Implementation

### **Key Components**
- **Dynamic Content Generation**: Semester-wise subject rendering
- **Event-Driven Architecture**: Responsive to user interactions
- **Data-Driven Design**: Centralized subject and grade data
- **Modular Functions**: Clean, maintainable code structure

### **Data Structure**
- **Batch Management**: Multiple academic years supported
- **Semester Organization**: Structured subject data by semester
- **Credit System**: Accurate credit allocation for each subject
- **Grade Mapping**: Comprehensive grade point calculation

## 🎯 Recent Updates

### **Enhanced CGPA Calculator**
- ✅ **Semester-wise Subject Display**: Organized view of all subjects by semester
- ✅ **Dropdown-based Arrear Selection**: Intuitive semester and subject selection
- ✅ **Auto-populated Credits**: Automatic credit filling based on subject selection
- ✅ **Improved Validation**: Better error handling and user feedback
- ✅ **Enhanced UI/UX**: Cleaner interface with better organization

### **User Experience Improvements**
- ✅ **Responsive Design**: Optimized for all device sizes
- ✅ **Dark Mode**: Complete dark theme support
- ✅ **Visual Feedback**: Hover effects and transitions
- ✅ **Accessibility**: Better keyboard navigation and screen reader support

## 👨‍💻 Credits

**Made by Durga Devi R**  
B.E CSE(AI&ML), 2023 - 2027  
Sethu Institute of Technology

### **Contact**
- **GitHub**: [Your GitHub Profile]
- **Email**: [Your Email]
- **LinkedIn**: [Your LinkedIn]

---

## 📄 License

This project is open source and available under the MIT License. Feel free to use, modify, and share this project for academic purposes.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request or open an Issue for any bugs or feature requests.

---

**Built with ❤️ for SIT Students** 