'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/UI'
import SelectToken from '@/components/Modals/SelectToken'

import { IToken } from '@/types'

interface SwapProps {
  token: IToken
  value: number
  setToken: (token: IToken) => void
  setValue: (value: number) => void
}

const Swap = ({ token, setToken, setValue, value }: SwapProps) => {
  const [openSelectToken, setOpenSelectToken] = useState<boolean>(false)

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => setValue(parseFloat(e.target.value))

  const handlerSelectToken = () => setOpenSelectToken(true)

  return (
    <div className="px-6 py-4 bg-black-box2 swap-box relative rounded-xl">
      <div className="flex items-center justify-start mb-3">
        <p className="text-white font-semibold">Swap</p>
      </div>
      <div className="flex flex-col xl:flex-row items-center gap-3">
        <div className="relative w-full xl:w-2/6">
          <div
            onClick={handlerSelectToken}
            className="bg-black-box rounded-lg border border-yellow-doge-500 text-white px-4 flex items-center justify-between h-[50px]"
          >
            <div className="flex items-center gap-2">
              <Image
                src={`/static/images/tokens/${token.symbol}.png`}
                alt="token"
                className="w-6 h-6 rounded-full"
                width={20}
                height={20}
              />
              <span className="text-base">{token.symbol}</span>
            </div>
            <span className="icon-chevron text-sm inline-block ml-2" />
          </div>
        </div>
        <div className="relative w-full xl:w-4/6">
          <input
            type="number"
            placeholder="0"
            onChange={onChangeInput}
            value={value}
            className="bg-black-box border border-yellow-doge-500 h-[50px] w-full rounded-lg outline-none px-3 text-white text-sm"
          />
        </div>
      </div>
      <SelectToken openModal={openSelectToken} setOpenModal={setOpenSelectToken} setToken={setToken} />
    </div>
  )
}

export default Swap
