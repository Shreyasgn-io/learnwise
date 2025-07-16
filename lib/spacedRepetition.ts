export function calculateNextReview(
  currentSchedule: {
    easeFactor: number
    interval: number
    repetitions: number
  },
  confidence: number // 0-5 scale
) {
  let { easeFactor, interval, repetitions } = currentSchedule;
  
  // SM-2 algorithm implementation
  if (confidence >= 3) { // Correct response
    repetitions += 1;
    
    if (repetitions === 1) interval = 1;
    else if (repetitions === 2) interval = 6;
    else interval = Math.round(interval * easeFactor);
    
    easeFactor = Math.max(1.3, easeFactor + (0.1 - (5 - confidence) * (0.08 + (5 - confidence) * 0.02)));
  } else { // Incorrect response
    repetitions = 0;
    interval = 1;
  }
  
  return {
    easeFactor,
    interval,
    repetitions,
    nextReview: new Date(Date.now() + interval * 24 * 60 * 60 * 1000)
  };
}