'use client';
import { useState } from 'react';

export default function QuizPage() {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  
  const handleSubmit = () => {
    // Submit quiz answers
  };
  
  return (
    <div>
      <h1>Quiz Questions</h1>
      {/* Render questions */}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}