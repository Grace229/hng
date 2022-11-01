import React from 'react'
import ProfileImage from "../assets/img/profile__img.svg"
import ShareImage from "../assets/img/desktop-share.svg"

const Header = () => {
  return (
    <div className='header'>
        <div className='header-items'>
        <img src={ShareImage} alt="share" id='share' />
        <img src={ProfileImage} alt="profileImg" id='profile__img' />
     <p id='twitter'>rissamo2</p>
        </div>
    </div>
  )
}

export default Header