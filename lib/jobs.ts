import { Queue } from 'bullmq';

export const transcriptionQueue = new Queue('transcriptions', {
  connection: { host: 'localhost', port: 6379 }
});

// Add job when video is imported
export async function addTranscriptionJob(videoId: string) {
  await transcriptionQueue.add('transcribe', { videoId });
}