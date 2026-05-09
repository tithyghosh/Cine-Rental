import React, { useContext } from 'react'
import Header from './Components/Header'
import Sidebar from './Components/Sidebar'
import Movies from './Cine/Movielist'
import Footer from './Components/Footer'
import { ThemeContext } from './Context/indexx'
const Page = () => {
    const {darkMode} = useContext(ThemeContext);
  return (
    <div className= {`h-full w-full ${darkMode ? "dark" : ""}`}>
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

export default Page
