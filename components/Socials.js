//links
import Link from "next/link";

//icons
import {
  RiInstagramLine,
  RiGithubFill,
  RiTelegramLine,
  RiLinkedinLine
} from 'react-icons/ri'

const Socials = () => {
  return <div className="flex items-center gap-x-4 text-lg">
    <Link href={''} className=" hover:text-accent translation-all duration-300 ">
     <RiTelegramLine/>
    </Link>
    <Link href={'https://github.com/Misterwhale/portfolio_web'} className=" hover:text-accent translation-all duration-300 ">
     <RiGithubFill/>
    </Link>
    <Link href={''} className=" hover:text-accent translation-all duration-300 ">
     <RiLinkedinLine/>
    </Link>
    <Link href={''} className=" hover:text-accent translation-all duration-300 ">
     <RiInstagramLine/>
    </Link>
  </div>;
};

export default Socials;
