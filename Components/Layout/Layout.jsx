// import Head from 'next/head'
import CopyRight from './CopyRight/CopyRight'
import Footer from './Footer/Footer'
import Navbar from './Nav/Navbar'


export default function Layout({children}) {
  return (
    <div>
      <Navbar/>
      {children}
      <Footer/>
      <CopyRight/>
    </div>
  )
}
