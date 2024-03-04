"use client"
import { useState } from 'react'

import Button from '@/components/UI/Button'
import Swap from '@/components/Landing/Sections/TakeToAction/Swap'
import For from '@/components/Landing/Sections/TakeToAction/For'
import Separator from '@/components/Landing/Sections/TakeToAction/Separator'
import mainArrow from "../../../../public/static/images/buttons/main-arrow.svg";

import { IToken } from '@/types'
import Image from "next/image";
import Astrodoge from '../../../../public/static/images/landing/take-to-action/astrodoge.svg'

const Taketoaction = ({ className = "" }: { className?: string }) => {
  const [tokenSell, setTokenSell] = useState<IToken>({ name: 'Fenix', symbol: 'FNX' })
  const [tokenGet, setTokenGet] = useState<IToken>({ name: 'USDC', symbol: 'USDC' })
  const [swapValue, setSwapValue] = useState<number>(0)
  const [forValue, setForValue] = useState<number>(0)

  return (
    <section className={`${className} container w-full`}>
      <div className="flex gap-3 w-[100%] max-xl:justify-center">
        <div className="flex flex-col items-end w-[50%] max-xl:hidden">
          <Image src={Astrodoge} alt="Astrodoge"/>
        </div>
        <div className="flex flex-col items-center justify-center max-lg:mx-auto max-xl:w-[100%] w-[50%]">
            <div className="mb-3 w-[80%]">
              <Swap
                token={tokenSell}
                setToken={setTokenSell}
                value={swapValue}
                setValue={setSwapValue}
              />
              {/* <Separator /> */}
              <For token={tokenGet} setToken={setTokenGet} value={forValue} setValue={setForValue} />
            </div>
            <Button variant='primary' className='w-[80%] mt-2' icon={mainArrow}>
              Connect your wallet
            </Button>
        </div>
      </div>
    </section>
  );
};

export default Taketoaction;
