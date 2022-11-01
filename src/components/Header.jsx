import React from 'react'
import ProfileImage from "../assets/img/profile__img.svg"
import ShareImage from "../assets/img/desktop-share.svg"

const Header = () => {
  return (
    <div className='header'>
        <img src={ShareImage} alt="share" id='share' />
        <div className='header-items'>
        <img src={ProfileImage} alt="profileImg" id='profile__img' />
     <p id='twitter'>rissamo2</p>
        </div>
    </div>
  )
}

export default Header