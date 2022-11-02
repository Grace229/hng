import React from 'react'
import SlackIcon from '../assets/img/slack.svg'
import GithubIcon from '../assets/img/Social icon.svg'


const Link = () => {
  return (
    <div className='link-container'>
        <a href="https://training.zuri.team/" id='btn__zuri'>Zuri Team</a>
        <a href="https://books.zuri.team/" id='books'>Zuri Books</a>
        <a href="https://books.zuri.team/python-for-beginners?ref_id=itiunggrace" id='book__python'>Python Books</a>
        <a href="https://background.zuri.team/" id='pitch'>
        Background Check for Coders
        </a>
        <a href="https://books.zuri.team/design-rules" type='button' id='book__design'>Design Books</a>
        <div className='social'>
            <img src={SlackIcon} alt="" />
            <img src={GithubIcon} alt="" />
        </div>

    </div>
  )
}

export default Link