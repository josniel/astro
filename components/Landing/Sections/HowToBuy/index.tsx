import Image from "next/image";


import meteorite from "../../../../public/static/images/landing/how-to-buy/meteorite.png";
import meteorite2 from "../../../../public/static/images/landing/how-to-buy/meteorite2.png";
import meteorite3 from "../../../../public/static/images/landing/how-to-buy/meteorite3.png";
import ellipse from "../../../../public/static/images/landing/how-to-buy/ellipse.png";

const HowToBuy = ({ className = "" , id }: { className?: string , id?: string }) => {
  return (
    <div
      className={`relative container w-full px-10 ${className}`} id={id}
    >
      {<div className="absolute top-[-60px] left-0 right-0 h-[2000px] z-[-9] w-full select-none pointer-events-none overflow-hidden lg:hidden">
        <Image
          src={meteorite}
          alt="Spring 1"
          className="absolute top-[260px] w-[120px] right-0 z-[-1]"
        />
        <Image
          src={ellipse}
          alt="Spring 1"
          className="absolute top-[160px] right-0 z-[-1]"
        />
        <Image
          src={meteorite2}
          alt="Spring 1"
          className="absolute top-[0px] left-0 z-[-1]"
        />
        <Image
          src={meteorite3}
          alt="Spring 1"
          className="absolute top-[500px] left-0 z-[-1]"
        />
      </div>}
      <h1 className="text-yellow-doge-500 font-extrabold text-3xl text-center">How to buy</h1>
      <div className="flex flex-wrap mx-auto gap-8 mt-5 justify-center">
        <div className="flex flex-col items-center text-white lg:w-[20%] md:w-[50%]">
          <div className="text-xl font-bold text-center">Create a Wallet</div>
          <div className="font-medium text-center">
            Download metamask or your wallet of choice from the app store or google play store for free. Desktop users, download the google chrome extension by going to metamask.io.
          </div>
        </div>
        <div className="flex flex-col items-center text-white lg:w-[20%] md:w-[50%]">
          <div className="text-xl font-bold text-center">Get Some Crypto</div>
          <div className="font-medium text-center">
            have ETH in your wallet to switch to $ASTRODOGE. If you don’t have any Token, you can buy directly on metamask, transfer from another wallet, or buy on another exchange and send it to your wallet.
          </div>
        </div>
        <div className="flex flex-col items-center text-white lg:w-[20%] md:w-[50%]">
          <div className="text-xl font-bold text-center">Buy</div>
          <div className="font-medium text-center">
            Connect your Wallet like Metamask with our dApp. or Paste the $ASTRODOGE token address into a trusted exchange like Uniswap, swap and confirm. Now you have $ASTRODOGE!
          </div>
        </div>
        <div className="flex flex-col items-center text-white lg:w-[20%] md:w-[50%]">
          <div className="text-xl font-bold text-center">Switch ETH for $ASTRODOGE</div>
          <div className="font-medium text-center">
            switch ETH for $ASTRODOGE. We have ZERO taxes so you don’t need to worry about buying with a specific slippage, although you may need to use slippage during times of market volatility.
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToBuy;
