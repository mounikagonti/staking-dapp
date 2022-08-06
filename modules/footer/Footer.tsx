import React, { useId } from "react"

import { AiFillLinkedin } from "react-icons/ai"
import { BsInstagram, BsTwitter, BsFacebook } from "react-icons/bs"
import { FaTelegramPlane } from "react-icons/fa"

const Footer = () => {
  const socialArray = [
    {
      id: useId(),
      icon: <BsFacebook />,
      link: "https://www.linkedin.com/in/mounika-gonti-318074183/",
    },
    {
      id: useId(),
      icon: <BsInstagram />,
      link: "https://github.com/mounikagonti",
    },
    {
      id: useId(),
      icon: <BsTwitter />,
      link: "https://www.instagram.com/mounika_halde/",
    },
    {
      id: useId(),
      icon: <AiFillLinkedin />,
      link: "https://github.com/mounikagonti",
    },
    {
      id: useId(),
      icon: <FaTelegramPlane />,
      link: "https://www.instagram.com/mounika_halde/",
    },
  ]
  return (
    <div className='footer_wrapper'>
      <div className='container'>
        <div className='footer_container'>
          {socialArray?.map((network) => (
            <a
              href={network?.link}
              className='icon'
              target='_blank'
              key={network?.id}
            >
              <div className='social_icon'>{network?.icon}</div>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Footer
