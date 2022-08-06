import { useRef, useState } from "react"
import { useAccount, useContractWrite, usePrepareContractWrite } from "wagmi"
import { useContractRead } from "wagmi"
import { stakingAddress, stakingTokenABI } from "../../contracts/staking"
import { tokenOneABI } from "../../contracts/tokenOne"

interface I_CustomModal {
  type: string
  setOpenModal: any
  openModal: boolean
}

const CustomModal = ({ type, setOpenModal, openModal }: I_CustomModal) => {
  const modalRef = useRef<any>()
  const [amount, setAmount] = useState<string>("")
  const { address } = useAccount()
  const { data, isError, isLoading } = useContractRead({
    addressOrName: "0x386a66E5B1F7BE1A52E4487283613c0Ee342504A",
    contractInterface: tokenOneABI,
    functionName: "balanceOf",
    args: address,
  })
  const { data: allowanceData } = useContractRead({
    addressOrName: "0x386a66E5B1F7BE1A52E4487283613c0Ee342504A",
    contractInterface: tokenOneABI,
    functionName: "allowance",
    args: [address, address],
  })

  const {
    data: stakeData,
    isLoading: stakeLoading,
    isSuccess: stakeSuccess,
    write: stakeWrite,
  } = useContractWrite({
    mode: "recklesslyUnprepared",
    addressOrName: "0x386a66E5B1F7BE1A52E4487283613c0Ee342504A",
    contractInterface: tokenOneABI,
    functionName: "approve",
    args: [address, (Number(amount) * 10 ** 18)?.toString()],
  })
  const {
    data: increaseAllowanceData,
    isLoading: increaseAllowanceLoading,
    isSuccess: increaseAllowanceSuccess,
    write: increaseAllowanceWrite,
  } = useContractWrite({
    mode: "recklesslyUnprepared",
    addressOrName: "0x386a66E5B1F7BE1A52E4487283613c0Ee342504A",
    contractInterface: tokenOneABI,
    functionName: "increaseAllowance",
    args: [
      address,
      "1000000000000000000000000000000000000000000000000000000000000000000000",
    ],
  })

  const {
    data: stakingData,
    isLoading: stakingLoading,
    isSuccess: stakingSuccess,
    write: stakingWrite,
  } = useContractWrite({
    mode: "recklesslyUnprepared",
    addressOrName: stakingAddress,
    contractInterface: stakingTokenABI,
    functionName: "deposit",
    args: [(Number(amount) * 10 ** 18)?.toString()],
  })
  console.log({ stakingData })

  const {
    data: unStakeData,
    isLoading: unStakeLoading,
    isSuccess: unStakeSuccess,
    write: unStakeWrite,
  } = useContractWrite({
    mode: "recklesslyUnprepared",
    addressOrName: stakingAddress,
    contractInterface: stakingTokenABI,
    functionName: "withdraw",
    args: (Number(amount) * 10 ** 18)?.toString(),
  })

  const handleAmount = (value: any) => {
    const reg = /^[0-9]\.?[0-9]$/
    // console.log(reg.test(value))

    // if (value === "") {
    //   setAmount("")
    // } else if (reg.test(value)) {
    setAmount(value)
    // }
  }

  const handleStakeAmount = () => {
    if (type === "stake") {
      if (Number(allowanceData) / 10 ** 18 <= Number(amount)) {
        increaseAllowanceWrite?.()
        stakingWrite?.()
        stakingWrite?.()
      } else {
        stakeWrite?.()
        stakingWrite?.()
      }
    } else {
      unStakeWrite?.()
    }
  }

  return (
    <div
      className={openModal ? "modal_wrapper" : " modal_wrapper_disable"}
      ref={modalRef}
    >
      <div className='modal_container'>
        <div className='modal_header'>
          <h4>{type} Token-1 Tokens</h4>
        </div>
        <div className='modal_body'>
          <div className='stake_wrapper'>
            <div className='stake_wrapper_left'>
              <p>{type}</p>
              <input
                type='text'
                value={amount}
                onChange={(e: any) => handleAmount(e.target.value)}
                placeholder='0.00'
              />
            </div>
            <div className='stake_wrapper_right'>
              <p>
                Wallet balance: {address ? parseInt(data?._hex) / 10 ** 18 : 0}
              </p>
              <button
                className='stake_btn max'
                onClick={() => handleAmount(parseInt(data?._hex))}
              >
                Max
              </button>
            </div>
          </div>
          <h4>Current ROI: 325%</h4>
          <div className='btn_wrapper'>
            <button
              disabled={amount === "" || amount === "0" || !amount}
              className={
                amount === "" || amount === "0" || !amount
                  ? "stake_btn disabled"
                  : "stake_btn"
              }
              onClick={handleStakeAmount}
            >
              {type}
            </button>
            <button className='stake_btn' onClick={() => setOpenModal(false)}>
              Cancel
            </button>
          </div>
          <h4 className='token'>Get Token-1 Tokens</h4>
        </div>
      </div>
    </div>
  )
}

export default CustomModal
