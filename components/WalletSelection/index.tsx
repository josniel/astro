'use client'

import React, { useState } from 'react'

import { Modal } from '@/components/UI'
import ConnectYourWallet from '@/components/WalletSelection/ConnectYourWallet'
import Welcome from '@/components/WalletSelection/Welcome'
import SignIn from '@/components/WalletSelection/SignIn'

import useStore from '@/store'

const WalletSelection = () => {
  const [isConnecting, setIsConnecting] = useState<boolean>(false)
  const { setWalletSelectionModal } = useStore()

  return (
    <>
      <ConnectYourWallet setIsConnecting={setIsConnecting} />
    </>
  )
}

export default WalletSelection
