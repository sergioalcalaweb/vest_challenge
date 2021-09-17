import React, { FC } from 'react'
import Header from './Header'

const Layout: FC = ({children}) => {
  return (
    <div>
      <Header />
      <div className='container' style={{ paddingTop:'1em', paddingBottom:'1em' }}>
        {children}
      </div>
    </div>
  )
}

export default Layout
