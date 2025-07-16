'use client';
import { useEffect, useState } from 'react';
import { api } from '@/trpc/react';

export default function ReviewPage() {
  const [cards, setCards] = useState([]);
  
  useEffect(() => {
    // Fetch today's review cards
    api.review.getToday.query().then(setCards);
  }, []);
  
  const handleReview = async (cardId: string, confidence: number) => {
    await api.review.submit.mutate({ cardId, confidence });
    setCards(cards.filter(card => card.id !== cardId));
  };
  
  return (
    <div>
      <h1>Today's Review ({cards.length})</h1>
      {cards.map(card => (
        <div key={card.id}>
          <p>{card.question}</p>
          <div>
            {[1, 2, 3, 4, 5].map(score => (
              <button 
                key={score} 
                onClick={() => handleReview(card.id, score)}
              >
                {score}
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}