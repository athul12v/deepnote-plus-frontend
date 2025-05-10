import React, { useState } from "react";

function TranscriptSummaryQuiz({ backendResponse, transcriptText }) {
  // backendResponse = { summary: "...", quiz: { questions: [...] } }
  const [showQuiz, setShowQuiz] = useState(false);
  const [userAnswers, setUserAnswers] = useState([]);
  const [showResult, setShowResult] = useState(false);

  const questions = backendResponse.quiz.questions;

  const handleAnswer = (qIdx, answer) => {
    const updated = [...userAnswers];
    updated[qIdx] = answer;
    setUserAnswers(updated);
  };

  const handleSubmit = () => setShowResult(true);

  const handleSaveTranscript = () => {
    const blob = new Blob([transcriptText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'transcript.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  if (!showQuiz) {
    return (
      <div>
        <h2>Summary</h2>
        <p>{backendResponse.summary}</p>
        <button onClick={() => setShowQuiz(true)}>Play Quiz</button>
        <button onClick={handleSaveTranscript} style={{ marginLeft: 8 }}>Save Transcript</button>
      </div>
    );
  }

  if (showResult) {
    let score = 0;
    questions.forEach((q, i) => {
      if (userAnswers[i] === q.answer) score++;
    });
    return (
      <div>
        <h2>Quiz Result</h2>
        <p>Your Score: {score} / {questions.length}</p>
        <ul>
          {questions.map((q, i) => (
            <li key={i}>
              <strong>{q.question}</strong><br />
              Your answer: {userAnswers[i] || "No answer"}<br />
              Correct answer: {q.answer}
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <form onSubmit={e => { e.preventDefault(); handleSubmit(); }}>
      <h2>Quiz</h2>
      {questions.map((q, i) => (
        <div key={i}>
          <p>{q.question}</p>
          {q.options.map(opt => (
            <label key={opt} style={{ display: "block" }}>
              <input
                type="radio"
                name={`q${i}`}
                value={opt}
                checked={userAnswers[i] === opt}
                onChange={() => handleAnswer(i, opt)}
                required
              />
              {opt}
            </label>
          ))}
        </div>
      ))}
      <button type="submit">Submit Quiz</button>
    </form>
  );
}

export default TranscriptSummaryQuiz; 