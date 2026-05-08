import React from 'react'
import Header from './Components/Header'
import Sidebar from './Components/Sidebar'
import Movies from './Cine/Movielist'
import Footer from './Components/Footer'

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <div className='container grid lg:grid-cols-[218px_1fr] gap-14'>
        <Sidebar />
        <Movies/>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App
