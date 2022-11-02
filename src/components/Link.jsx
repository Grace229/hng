import React from 'react'
import SlackIcon from '../assets/img/slack.svg'
import GithubIcon from '../assets/img/Social icon.svg'


const Link = () => {
  return (
    <div className='link-container'>
        <a href="https://twitter.com/rissamo2"  target="_blank" id='btn__zuri' className='link' >Twitter Link</a>
        <a href="https://training.zuri.team/" target="_blank" id='btn__zuri' className='link'>Zuri Team</a>
        <a href="https://books.zuri.team/" target="_blank" id='books' className='link'>Zuri Books</a>
        <a href="https://books.zuri.team/python-for-beginners?ref_id=itiunggrace" target="_blank" id='book__python' className='link'>Python Books</a>
        <a href="https://background.zuri.team/" target="_blank" id='pitch' className='link'>
        Background Check for Coders
        </a>
        <a href="https://books.zuri.team/design-rules" type='button' target="_blank" id='book__design' className='link'>Design Books</a>
        <div className='social'>
            <a href="https//slack.com/itiunggrace" target="_blank"><img src={SlackIcon} className="slack" alt="slack" /></a>
            
           <a href="https://github.com/grace229/hng" target="_blank"> <img src={GithubIcon} alt="github" /></a>
        </div>

    </div>
  )
}

export default Link