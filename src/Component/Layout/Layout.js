import React from 'react'
import Navigation from './Navigation/Navigation'
import Footer from './Footer/Footer'

function Layout({children}) {
  return (
    <div>
        <Navigation />
        <main className='flex-1'>{children}</main>
        <Footer />
    </div>
  )
}

export default Layout