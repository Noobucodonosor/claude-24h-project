function App() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px'
    }}>
      <div style={{
        background: 'white',
        borderRadius: '20px',
        boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
        padding: '40px',
        maxWidth: '500px',
        textAlign: 'center'
      }}>
        <h1 style={{
          fontSize: '2.5rem',
          marginBottom: '20px',
          color: '#2d3748'
        }}>
          🎯 Claude Project Hub
        </h1>
        <p style={{ color: '#4a5568', fontSize: '1.1rem' }}>
          Progressive Web App - V1.0 Coming Soon
        </p>
      </div>
    </div>
  )
}

export default App