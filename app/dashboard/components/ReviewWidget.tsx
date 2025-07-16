import Link from 'next/link';
import { Calendar, CheckCircle } from 'lucide-react';

interface ReviewWidgetProps {
  dueCount: number;
  reviewedToday: number;
  streak: number;
}

export default function ReviewWidget({ dueCount, reviewedToday, streak }: ReviewWidgetProps) {
  return (
    <section className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Daily Reviews</h2>
        <Link href="/dashboard/reviews" className="text-[#6c47ff] hover:underline text-sm font-medium">
          View All
        </Link>
      </div>
      
      {dueCount > 0 ? (
        <div className="space-y-3">
          <div className="p-4 border rounded-md flex justify-between items-center hover:border-[#6c47ff]/50 hover:bg-[#6c47ff]/5 transition-colors">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-[#6c47ff]/20 flex items-center justify-center text-[#6c47ff] font-bold mr-3">
                {dueCount}
              </div>
              <div>
                <h3 className="font-medium">Cards Due Today</h3>
                <p className="text-sm text-gray-500">{dueCount} cards waiting for review</p>
              </div>
            </div>
            <Link href="/dashboard/reviews" className="bg-[#6c47ff] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-[#5a3cd9] transition-colors">
              Start Review
            </Link>
          </div>
          
          <div className="flex justify-between items-center p-3 bg-gray-50 rounded-md">
            <div className="flex items-center">
              <Calendar className="h-5 w-5 text-gray-500 mr-2" />
              <span className="text-sm text-gray-600">Current streak: {streak} days</span>
            </div>
            <div className="text-sm text-gray-600">
              Reviewed today: {reviewedToday}
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center py-8 text-gray-500">
          <CheckCircle className="h-12 w-12 mx-auto mb-3 text-green-500" />
          <p className="font-medium">All caught up!</p>
          <p className="text-sm">No reviews due today. Great job!</p>
          
          <div className="mt-4 flex justify-center items-center p-3 bg-gray-50 rounded-md">
            <Calendar className="h-5 w-5 text-gray-500 mr-2" />
            <span className="text-sm text-gray-600">Current streak: {streak} days</span>
          </div>
        </div>
      )}
    </section>
  );
}