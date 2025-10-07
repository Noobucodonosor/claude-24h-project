import { useState } from 'react'

function App() {
  const [message, setMessage] = useState('')
  const [response, setResponse] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message })
      })
      const data = await res.json()
      setResponse(data.response)
    } catch (error) {
      setResponse('Error: ' + error)
    }
    
    setLoading(false)
  }

  return (
    <div style={{ minHeight: '100vh', background: '#111', color: '#fff', padding: '2rem' }}>
      <h1>🏗️ Claude Hub</h1>
      
      <form onSubmit={handleSubmit} style={{ marginTop: '2rem' }}>
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Ask Claude..."
          style={{ 
            width: '100%', 
            padding: '1rem', 
            fontSize: '1rem',
            marginBottom: '1rem'
          }}
        />
        <button 
          type="submit" 
          disabled={loading}
          style={{ padding: '1rem 2rem', fontSize: '1rem' }}
        >
          {loading ? 'Loading...' : 'Send'}
        </button>
      </form>

      {response && (
        <div style={{ 
          marginTop: '2rem', 
          padding: '1rem', 
          background: '#222',
          borderRadius: '8px'
        }}>
          {response}
        </div>
      )}
    </div>
  )
}

export default App