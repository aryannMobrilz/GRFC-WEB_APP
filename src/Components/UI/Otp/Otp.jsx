import React from 'react'
import { MuiOtpInput } from 'mui-one-time-password-input'

const Otp = () => {
  const [otp, setOtp] = React.useState('')

  const handleChange = (newValue) => {
    setOtp(newValue)
  }

  return (
    <div className="d-flex w-100 justify-content-center align-items-center py-5">
    <div className='' style={{width : "20%", height:"25%"}}>
    <MuiOtpInput value={otp} length={6} onChange={handleChange}  />
    </div>
    </div>
  )
}
export default Otp;