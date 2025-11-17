function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Welcome to Your App
        </h1>
        <p className="text-gray-600 mb-6">
          This is your starting template. Start building by describing what you want to create!
        </p>
        <div className="bg-blue-50 border border-blue-200 rounded p-4">
          <p className="text-sm text-blue-800">
            💡 <strong>Tip:</strong> You can modify this app by chatting with the AI agent. Try asking to add new features, change the design, or connect to your backend API.
          </p>
        </div>
      </div>
    </div>
  )
}

export default App