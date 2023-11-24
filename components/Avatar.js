// next image
import Image from "next/image";

const Avatar = () => {
  return <div className="hidden xl:flex xl:max-w-none bottom-0">
   <Image 
   src={'/avatar.png'} 
   width={730} 
   height={687} 
   alt="" 
   className="translate-z-0 w-full h-full bottom-0"
   />
    </div>;
};

export default Avatar;
