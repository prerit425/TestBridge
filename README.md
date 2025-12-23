# TestBridge  
### A Secure, Scalable, and Automated Online Examination System  
**Team Members:** Sachin Mishra, Prerit Maheshwari, Aastha Shukla, Sandhya, Krishna    

---

## Overview

**TestBridge** is an online examination platform created to simplify the process of conducting tests for schools, colleges, and training centers.
Our goal was to build something that makes exams easier to manage while keeping them secure and accessible.  
The system lets admins create exams and upload questions, while students can log in, take exams, and instantly view their results. It reduces paperwork and makes evaluations faster and more accurate.

> **Tagline:**  
> “Bridge the test gap , from pen and paper to instant results.”

---

## Objectives

- Develop a **secure and automated** online exam platform.  
- Provide **separate accesss** for students and administrators.  
- Enable **timer-based exams** and **instant result generation**.  
- Offer **performance analytics** to reduce teacher workload and help students improve.

---

## Key Features

-  **Secure Authentication:** Role-based login for students and admins.  
-  **Instant Result Generation:** Auto-grading for objective-type questions.  
- **Question Bank Management:** Add, edit, or delete questions easily.  
-  **Performance Analytics Dashboard:** Real-time data on student performance.  
-  **Responsive Design:** Works smoothly on mobile, tablet, and PC.  
-  **Anti-Cheating System:** Detects tab switching and suspicious activity.  
-  **Scalable Architecture:** Handles thousands of concurrent users efficiently.  

---

## System Architecture

- **Frontend:** User interface for students and admins.  


---

## 🧠 How It Works

1. The **Admin** creates an exam and uploads questions.  
2. The **Student** logs in, selects the exam, and answers the questions.  
3. The **System** automatically grades the answers and stores the result.  
4. The **Result Dashboard** displays scores and performance analysis in real time.

---

## 💾 Database Design

### Main Tables:

| Table Name | Description |
|-------------|-------------|
| `students` | Stores student details (ID, name, email, password) |
| `admins` | Stores admin credentials |
| `exams` | Contains exam title, subject, duration, total marks |
| `questions` | Holds question text, options, and correct answers |
| `results` | Stores student results, scores, and timestamps |

### Relationships:
- One **exam** → many **questions**  
- One **student** → many **results**  
- One **admin** → many **exams**

---

## 💻 Frontend

**Tools:** HTML, CSS, JavaScript 

### Frontend Pages:
- **Login & Registration** – For user authentication  
- **Dashboard** – Displays available exams and previous results  
- **Exam Page** – Shows questions, timer, and navigation buttons  
- **Result Page** – Displays instant score and performance summary  
- **Admin Panel** – For exam and question management  

### Features:
- Real-time countdown timer  
- Responsive and mobile-friendly layout  
- Validation to prevent invalid actions  
- Smooth navigation between questions  

---

### Core Functions:
- Handles API communication with frontend  
- Validates login credentials  
- Fetches and stores exam data  
- Calculates scores automatically  
- Generates detailed analytics
  

---

 System Workflow
👨‍💼 Admin Side
Logs in securely

Creates or schedules exams

Adds questions with correct answers

Monitors student performance via analytics

👨‍🎓 Student Side
Registers and logs in

Selects exam from dashboard

Attempts questions within the time limit

Submits exam → sees instant results

📊 Future Enhancements
🤖 AI-Based Proctoring: Real-time webcam monitoring

🧠 Support for Descriptive Questions: Semi-automated grading

📱 Mobile App Integration: Android/iOS compatibility



✅ Conclusion
TestBridge offers a secure, automated, and scalable way to conduct exams online.
It reduces manual workload, ensures fairness, and enhances accessibility for modern education.

“TestBridge is not just an exam system — it’s a step toward smarter, digital learning.”

🙏 Acknowledgments
We thank our mentors and instructors for their valuable guidance and support throughout the development of TestBridge.

⚖️ License
This project is licensed under the MIT License — you are free to use and modify it with proper attribution.
