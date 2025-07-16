'use client';

export default function PlaylistPage({ params }: { params: { id: string } }) {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Playlist {params.id}</h1>
      <div className="w-full bg-gray-200 rounded-full h-2.5 mb-6">
        <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '45%' }}></div>
      </div>
      {/* Video list will go here */}
    </div>
  );
}