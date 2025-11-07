import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { examData } from "../config/Examconfig.js";

export default function StartExamPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const { questions, examTitle } = examData;
  const currentQuestion = questions[currentIndex];

  // Disable browser shortcuts, refresh, and right-click
  useEffect(() => {
    const handleBeforeUnload = (e) => {
      e.preventDefault();
      e.returnValue = "Are you sure you want to leave the exam?";
    };

    const disableKeys = (e) => {
      // Block refresh (F5, Ctrl+R), backspace navigation
      if (
        e.key === "F5" ||
        (e.ctrlKey && e.key === "r") ||
        e.key === "Backspace"
      ) {
        e.preventDefault();
      }
    };

    const disableContextMenu = (e) => e.preventDefault();

    window.addEventListener("beforeunload", handleBeforeUnload);
    document.addEventListener("keydown", disableKeys);
    document.addEventListener("contextmenu", disableContextMenu);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
      document.removeEventListener("keydown", disableKeys);
      document.removeEventListener("contextmenu", disableContextMenu);
    };
  }, []);

  // Navigation handlers
  const handleOptionChange = (option) => {
    setAnswers({ ...answers, [currentQuestion.id]: option });
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) setCurrentIndex(currentIndex + 1);
  };

  const handlePrev = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  const handleSubmit = () => {
    setSubmitted(true);
    setTimeout(() => navigate("/"), 3000); // redirect after 3 sec
  };

  const calculateScore = () => {
    let score = 0;
    questions.forEach((q) => {
      if (answers[q.id] === q.correctAnswer) score += q.marks;
    });
    return score;
  };

  // After submission screen
  if (submitted) {
    const score = calculateScore();
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#13315C] via-[#1E3A6A] to-[#244A8D] text-white font-inter p-8">
        <h1 className="text-3xl font-semibold mb-3">🎉 Exam Submitted!</h1>
        <p className="text-xl mb-6">
          You scored <span className="font-bold">{score}</span> out of{" "}
          {questions.length}.
        </p>
        <p className="text-sm text-blue-200 mb-3">
          Redirecting to home in 3 seconds...
        </p>
      </div>
    );
  }

  // Main Exam UI
  return (
    <div className="min-h-screen flex flex-col justify-between bg-gradient-to-br from-[#13315C] via-[#1E3A6A] to-[#244A8D] text-white font-inter p-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-10">
        <div>
          <h1 className="text-3xl font-semibold">{examTitle}</h1>
          <p className="text-blue-200 text-sm">
            Question {currentIndex + 1} of {questions.length}
          </p>
        </div>
        <div className="text-blue-100 text-sm">
          Duration: {examData.duration} min
        </div>
      </div>

      {/* Question Box */}
      <div className="bg-white/10 border border-white/10 rounded-2xl p-8 shadow-lg hover:shadow-xl transition">
        <h2 className="text-lg font-semibold mb-6">
          {currentQuestion.question}
        </h2>

        <div className="space-y-3">
          {currentQuestion.options.map((option, i) => (
            <label
              key={i}
              className={`flex items-center p-3 rounded-lg cursor-pointer transition border border-transparent ${
                answers[currentQuestion.id] === option
                  ? "bg-blue-600/40 border-blue-300/30"
                  : "bg-white/10 hover:bg-white/15"
              }`}
            >
              <input
                type="radio"
                name={`question-${currentQuestion.id}`}
                value={option}
                checked={answers[currentQuestion.id] === option}
                onChange={() => handleOptionChange(option)}
                className="mr-3 accent-blue-500"
              />
              {option}
            </label>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-8">
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className={`px-6 py-2 rounded-lg transition ${
            currentIndex === 0
              ? "bg-gray-600/50 cursor-not-allowed"
              : "bg-blue-600/60 hover:bg-blue-500/70"
          }`}
        >
          Previous
        </button>

        {currentIndex === questions.length - 1 ? (
          <button
            onClick={handleSubmit}
            className="px-6 py-2 rounded-lg bg-green-600/60 hover:bg-green-500/70 transition"
          >
            Submit Exam
          </button>
        ) : (
          <button
            onClick={handleNext}
            className="px-6 py-2 rounded-lg bg-blue-600/60 hover:bg-blue-500/70 transition"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
}
