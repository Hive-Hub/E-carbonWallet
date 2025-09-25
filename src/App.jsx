import React from 'react'
import IndexHeader from './components/index-page/index-header/IndexHeader'
import './App.css'

function App() {
  return (
    <div className="App">
      <IndexHeader />
      <main>
        <div className="content">
          <h1>Welcome to Ecotrack</h1>
          <p>Your journey to a greener future starts here.</p>
        </div>
      </main>
    </div>
  )
}

export default App
