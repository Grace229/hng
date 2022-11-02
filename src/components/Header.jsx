import React from 'react'
import ProfileImage from "../assets/img/profile__img.svg"
import ShareImage from "../assets/img/desktop-share.svg"
import MobileImage from "../assets/img/mobile-share.svg"

const Header = () => {
  return (
    <div className='header'>
        <img src={ShareImage} alt="share" id='share' />
        <img src={MobileImage} alt="share" id='share1' />
        <div className='header-items'>
        <img src={ProfileImage} alt="profileImg" id='profile__img' />
     <p id='twitter'>rissamo2</p>
     <p id='slack'>itiunggrace</p>
        </div>
    </div>
  )
}

export default Header