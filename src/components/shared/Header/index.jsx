import React from 'react'

// CSS
import './Header.css';

const Header = () => {
  return (
    <div className='header-top-strip py-3'>
      <div className='container-xxl text-white'>
        <header className='row'>
          <div className='col-12 col-sm-8'>
            <p className='mb-0'>free shipping over 100$ & free returns</p>
          </div>

          <div className='col-12 col-sm-4'>
            <div className='text-end'>
              <p className='mb-0'>Hotline: +123 456 789</p>
            </div>
          </div>
        </header>
        <header className='row'></header>
        <header className='row'></header>
      </div>
    </div>
  )
}

export default Header