import React, { useState } from "react"
import CustomModal from "../../shared/customModal/CustomModal"

const StakingInfo = ({ token }: any) => {
  const [typeOfStake, setTypeOfStake] = useState<string>("Stake")
  const [openModal, setOpenModal] = useState<boolean>(false)

  const handleStakeModal = (e: any) => {
    setTypeOfStake(e.target?.textContent)
    setOpenModal(true)
  }
  return (
    <>
      <div className='stakingInfo_wrapper'>
        <div className='container'>
          <div className='stakingInfo_container'>
            <div className='tokenOne'>{token}</div>
            <div className='earned_token_wrapper'>
              <div className='earned_tokens'>Earned Tokens</div>
              <div className='earned_token_value'>0.000000</div>
            </div>
            <div className='total_staked_wrapper'>
              <div className='total_staked'>Total Staked</div>
              <div className='earned_token_value'>0.000000</div>
            </div>
            <div className='apy_wrapper'>
              <div className='apy'>APY</div>
              <div className='apy_value'>125%</div>
            </div>
            <div className='btn_wrapper'>
              <button
                className='stake_btn'
                onClick={(e: any) => handleStakeModal(e)}
              >
                stake
              </button>
              <button
                className='stake_btn'
                onClick={(e: any) => handleStakeModal(e)}
              >
                Unstake
              </button>
            </div>
            <div className='claim_btn_wrapper'>
              <button className='stake_btn'>Claim</button>
            </div>
          </div>
        </div>
      </div>
      {openModal && (
        <CustomModal
          openModal={openModal}
          setOpenModal={setOpenModal}
          type={typeOfStake}
        />
      )}
    </>
  )
}

export default StakingInfo
