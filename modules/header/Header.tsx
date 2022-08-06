import Image from "next/image"
import React from "react"
import logoImg from "/public/images/logo-img.svg"
import { ConnectButton } from "@rainbow-me/rainbowkit"

const Header = () => {
  return (
    <div className='header_wrapper'>
      <div className='container'>
        <div className='header_container'>
          <div className='header_left'>
            <div className='header_image_container'>
              <Image src={logoImg} layout='fill' objectFit='contain' />
            </div>
            <div className='header_left_heading'>
              Howler <span className='header_left_headingOne'>staking</span>
            </div>
          </div>
          <div className='header_right'>
            <ConnectButton />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
