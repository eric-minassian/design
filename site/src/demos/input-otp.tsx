import * as React from "react"

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/input-otp"

export const notes =
  "Only for short one-time codes, like pairing a device or confirming a sign in. Anything longer or memorable belongs in a plain input."

export function Default() {
  const [code, setCode] = React.useState("482")

  return (
    <InputOTP maxLength={6} value={code} onChange={setCode}>
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
        <InputOTPSlot index={3} />
        <InputOTPSlot index={4} />
        <InputOTPSlot index={5} />
      </InputOTPGroup>
    </InputOTP>
  )
}

export function WithSeparator() {
  const [code, setCode] = React.useState("T3C")

  return (
    <InputOTP maxLength={6} value={code} onChange={setCode}>
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
      </InputOTPGroup>
      <InputOTPSeparator />
      <InputOTPGroup>
        <InputOTPSlot index={3} />
        <InputOTPSlot index={4} />
        <InputOTPSlot index={5} />
      </InputOTPGroup>
    </InputOTP>
  )
}

export function Invalid() {
  const [code, setCode] = React.useState("9182")

  return (
    <InputOTP maxLength={4} value={code} onChange={setCode}>
      <InputOTPGroup>
        <InputOTPSlot aria-invalid index={0} />
        <InputOTPSlot aria-invalid index={1} />
        <InputOTPSlot aria-invalid index={2} />
        <InputOTPSlot aria-invalid index={3} />
      </InputOTPGroup>
    </InputOTP>
  )
}

export function Disabled() {
  return (
    <InputOTP disabled maxLength={4} value="0417">
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
        <InputOTPSlot index={3} />
      </InputOTPGroup>
    </InputOTP>
  )
}
