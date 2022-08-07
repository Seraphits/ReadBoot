// import Head from 'next/head'
// import CopyRight from './CopyRight'
import Navbar from './Nav/Navbar'


export default function Layout({children}) {
  return (
    <div>
      <Navbar/>
      {children}
      {/* <CopyRight/> */}
    </div>
  )
}
