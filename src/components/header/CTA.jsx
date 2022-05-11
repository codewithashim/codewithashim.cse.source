import React from 'react'
import './header.css'
import CV from '../../assets/cv.pdf'

const CTA = () => {
  return (
    <div className='main_header_btn'>
      <a href={CV} download className='btn'> Dawonload CV </a>
      <a href='#contact' className='btn btn_primary'>Let's Talk</a>
    </div>
  )
}

export default CTA