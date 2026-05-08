import React, { useState } from 'react'
import Header from './Components/Header'
import Sidebar from './Components/Sidebar'
import Movies from './Cine/Movielist'
import Footer from './Components/Footer'
import { MovieContext } from './Context/indexx'
const App = () => {
  const [cartData, setCartData] = useState([]);
  return (
    <div>
      <MovieContext.Provider value={{cartData, setCartData}}>
        <Header />
      <main>
        <div className='container grid lg:grid-cols-[218px_1fr] gap-14'>
        <Sidebar />
        <Movies/>
        </div>
      </main>
      <Footer />
      </MovieContext.Provider>
    </div>
  )
}

export default App
