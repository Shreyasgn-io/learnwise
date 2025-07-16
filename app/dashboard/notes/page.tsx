'use client';
import { useState } from 'react';
// Remove unused import since 'api' is not used in this component

type Note = {
  id: string;
  content: string;
  createdAt: Date;
};

export default function NotesPage() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [isExporting, setIsExporting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const handleExport = async () => {
    try {
      setIsExporting(true);
      setError(null);
      
      const response = await fetch('/api/notes/export', {
        method: 'POST'
      });
      
      if (!response.ok) throw new Error(`Export failed: ${response.statusText}`);
      
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'learnwise-notes.zip'; // Updated filename
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to export notes');
    } finally {
      setIsExporting(false);
    }
  };
  
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">My Notes</h1>
      {error && <div className="text-red-500 mb-4">{error}</div>}
      <button 
        onClick={handleExport}
        disabled={isExporting}
        className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
      >
        {isExporting ? 'Exporting...' : 'Export as Markdown'}
      </button>
      {/* Render notes list */}
    </div>
  );
}