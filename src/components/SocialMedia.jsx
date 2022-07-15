import React from 'react'
import { BsTwitter, BsGithub, BsLinkedin } from 'react-icons/bs'

const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
          <a href="https://twitter.com/fullStackRacc" target='_blank' rel='noreferrer'><BsTwitter /></a>
        </div>
        <div>
          <a href="https://github.com/fullStackRacc" target='_blank' rel='noreferrer'><BsGithub /></a>
        </div>
        <div>
          <a href="https://linkedin.com/in/beloisehuffstutler" target='_blank' rel='noreferrer'><BsLinkedin /></a>
        </div>
    </div>
  )
}

export default SocialMedia