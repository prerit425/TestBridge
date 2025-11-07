export const examData = {
  examTitle: "Sample Aptitude Test",
  duration: 30, // in minutes
  totalMarks: 50,
  questions: [
    {
    id: 1,
    question: "What is the SI unit of Force?",
    options: ["Joule", "Newton", "Pascal", "Watt"],
    correctAnswer: "Newton",
    marks: 1,
  },
  {
    id: 2,
    question: "Which of the following quantities is a vector?",
    options: ["Speed", "Mass", "Displacement", "Temperature"],
    correctAnswer: "Displacement",
    marks: 1,
  },
  {
    id: 3,
    question: "What happens to the acceleration of an object if the net force on it doubles while its mass remains the same?",
    options: [
      "It doubles",
      "It becomes half",
      "It remains unchanged",
      "It becomes zero",
    ],
    correctAnswer: "It doubles",
    marks: 1,
  },
  {
    id: 4,
    question: "Which law states that every action has an equal and opposite reaction?",
    options: [
      "Newton’s First Law",
      "Newton’s Second Law",
      "Newton’s Third Law",
      "Law of Gravitation",
    ],
    correctAnswer: "Newton’s Third Law",
    marks: 1,
  },
  {
    id: 5,
    question: "The energy possessed by a body due to its motion is called?",
    options: [
      "Potential Energy",
      "Kinetic Energy",
      "Thermal Energy",
      "Mechanical Energy",
    ],
    correctAnswer: "Kinetic Energy",
    marks: 1,
  },
  ],
};

// ========================
// 📚 STUDY RESOURCES DATA
// ========================
export const resources = [
    {
      id: 1,
      title: 'Physics Chapter 1 Notes',
      type: 'PDF',
      category: 'Study Notes',
      link: '#',
      description: 'Comprehensive summary of key formulas and derivations.',
    },
    {
      id: 2,
      title: 'Mathematics Practice Sheet',
      type: 'PDF',
      category: 'Practice',
      link: '#',
      description: 'Includes previous exam patterns and topic-wise questions.',
    },
    {
      id: 3,
      title: 'Organic Chemistry Basics',
      type: 'Video',
      category: 'Video Lecture',
      link: '#',
      description: 'Short visual guide on reaction mechanisms and naming rules.',
    },
    {
      id: 4,
      title: 'Exam Guidelines',
      type: 'PDF',
      category: 'Guidelines',
      link: '#',
      description: 'Rules and best practices for online proctored exams.',
    },
    {
      id: 5,
      title: 'Time Management Tips',
      type: 'Article',
      category: 'Tips',
      link: '#',
      description: 'Effective strategies to balance study and rest during exams.',
    },
  ];

  export const exams = [
    {
      title: 'Physics I Midterm',
      course: 'PHY 101',
      date: 'Nov 15, 2025',
      time: '10:00 AM',
      status: 'Upcoming',
    },
    {
      title: 'Mathematics Final',
      course: 'MTH 102',
      date: 'Oct 20, 2025',
      time: '09:00 AM',
      status: 'Completed',
    },
    {
      title: 'Chemistry II Test',
      course: 'CHE 202',
      date: 'Nov 5, 2025',
      time: '11:00 AM',
      status: 'Ongoing',
    },
    {
      title: 'English Literature Quiz',
      course: 'ENG 110',
      date: 'Oct 10, 2025',
      time: '02:00 PM',
      status: 'Completed',
    },
  ];