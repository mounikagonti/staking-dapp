import React from "react"
import StakingInfo from "../stakinginfo/StakingInfo"
// import bgImg from "/public/images/bg-img.svg"

const Main = () => {
  return (
    <div className='main_wrapper'>
      <div className='container'>
        <div className='main_container'>
          <div className='main_top'>
            <h1 className='main_top_heading'>Staking pool</h1>
            <p className='main_top_subHeading'>Earn auto-compound rewards</p>
          </div>
          <div className='main_bottom'>
            <StakingInfo token='Token-1'/>
            <StakingInfo token='Token-2'/>
            <StakingInfo token='Token-3'/>
            <StakingInfo token='Token-4'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main
