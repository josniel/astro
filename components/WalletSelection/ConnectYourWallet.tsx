/* eslint-disable import/no-default-export */
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import WALLETS from './data'
import useStore from '@/store'

interface ConnectYourWalletProps {
  setIsConnecting: (isConnecting: boolean) => void
}

const ConnectYourWallet = ({ setIsConnecting }: ConnectYourWalletProps) => {
  const { setIsConnected } = useStore()
  const isConnected = useStore((state) => state.isConnected)
  const handlerSelectWallet = () => setIsConnecting(true)
  const router = useRouter()
  const handlerConnect = () => {
    setIsConnected(true)
    setTimeout(() => {
      router.push('/home')
    },2000)
  }

  return (
    <div className="w-full p-10 xl:w-[100%] bg-[rgba(10, 11, 11, 0.40);] bg-opacity-40 relative rounded-2xl z-10">
      <h4 className="mb-4 text-base text-white md:mb-8 md:text-xl">Connect your Wallet</h4>
      <div className="grid grid-cols-1 2xl:grid-cols-2 gap-4 mb-4 max-h-[400px] md:max-h-auto overflow-y-auto md:overscroll-none">
        {WALLETS.map((wallet, index) => (
          <div
            key={index}
            onClick={handlerSelectWallet}
            className="relative flex items-center justify-between w-full p-3 cursor-pointer md:p-4 border-yellow-doge-500 border hover:bg-yellow-main-op-300 bg-[#A8A808] bg-opacity-20 rounded-xl hover:bg-opacity-60"
          >
            <div className="flex items-center gap-4" onClick={() => {handlerConnect()}} >
              <Image src={wallet.image} alt="wallet" className="w-5 h-5 md:w-10 md:h-10" width={42} height={42} />
              <h5 className="text-sm text-white">{wallet.name}</h5>
            </div>
            {index < 1 && <span className="px-2 text-[10px] rounded-lg button-primary">Recent</span>}
          </div>
        ))}
      </div>
      <div className="flex items-center gap-2 cursor-pointer text-[#53606A] hover:text-yellow-doge-500">
        <span className="icon-discord"></span>
        <p className="text-sm">Need help?</p>
      </div>
    </div>
  )
}

export default ConnectYourWallet
