import React from 'react'
import ZuriImage from '../assets/img/Zuri.Logo.svg'
import HngImage from '../assets/img/I4G.svg'


const Footer = () => {
  return (

    <footer>
    <div className='footer'>
        <img src={ZuriImage} alt="" />
        <p>
        HNG Internship 9 Frontend Task
        </p>
        <img src={HngImage} alt="" />
    </div>
    </footer>
  )
}

export default Footer