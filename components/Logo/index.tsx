import AstroDoge from "../../public/static/images/Logo.png"
import Link from "next/link"
import Image from 'next/image';


const LogoHeader = () => {
  return (
    <Link href={"/"}>
      <div className="pb-0.5 max-md:hidden text-navy-blue-900">
        <Image unoptimized={true} src={AstroDoge} alt="Astro Doge" width={51} height={51} />
      </div>
      <div className="md:hidden text-navy-blue-900">
        <Image unoptimized={true} src={AstroDoge} alt="Astro Doge" width={51} height={51} />
      </div>
    </Link>
  )
}

const LogoFooter = () => {
  return (
    <Link href={"/"}>
      <div className="max-md:hidden text-navy-blue-900">
        <Image unoptimized={true} src={AstroDoge} alt="Astro Doge" width={51} height={51} />
      </div>
      <div className="md:hidden text-navy-blue-900">
        <Image unoptimized={true} src={AstroDoge} alt="Astro Doge" width={70} height={70} />
      </div>
    </Link>
  )
}

export { LogoHeader, LogoFooter }
