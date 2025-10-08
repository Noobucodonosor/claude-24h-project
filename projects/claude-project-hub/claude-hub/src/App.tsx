import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');
  const [repos, setRepos] = useState<string[]>([]);

  // Carica repos all'avvio
  useEffect(() => {
    fetch('/api/github')
      .then(r => r.json())
      .then(data => setRepos(data.repos))
      .catch(err => console.error('GitHub error:', err));
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message })
    });
    
    const data = await res.json();
    setResponse(data.response);
  };

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold mb-8">⚖️ Claude Hub</h1>
      
      <form onSubmit={handleSubmit} className="mb-8">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Ask Claude..."
          className="w-full p-4 bg-gray-900 rounded mb-4"
        />
        <button 
          type="submit"
          className="px-6 py-2 bg-blue-600 rounded hover:bg-blue-700"
        >
          Send
        </button>
      </form>

      {response && (
        <div className="p-4 bg-gray-900 rounded mb-8">
          <p>{response}</p>
        </div>
      )}

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Your GitHub Projects</h2>
        {repos.length === 0 ? (
          <p className="text-gray-500">Loading...</p>
        ) : (
          <ul className="space-y-2">
            {repos.map(repo => (
              <li key={repo} className="p-3 bg-gray-900 rounded hover:bg-gray-800">
                📁 {repo}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;