import React from 'react'
import { BsLinkedin, BsFacebook } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'


const HeaderSocial = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/faisal-ansari-173b2176/' target='__blank'><BsLinkedin/></a>
        <a href='https://github.com/devopsfaisal'  target='__blank'><FaGithub/></a>
        <a href='https://facebook.com/clumsyfaisal'  target='__blank'><BsFacebook/></a>
    </div>
  )
}

export default HeaderSocial