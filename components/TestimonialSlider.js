// testimonial data
const testimonialData = [
  {
    image: '/t-avt-1.png',
    name: 'Anne Smith',
    position: 'Customer',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!',
  },
  {
    image: '/t-avt-2.png',
    name: 'Jane Doe',
    position: 'Customer',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!',
  },
  {
    image: '/t-avt-3.png',
    name: 'Jhon Doe',
    position: 'Customer',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!',
  },
];

// import swiper styles
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'

//import required modules

import { Pagination } from "swiper";

//icons
import {BsArrowRight} from 'react-icons/bs';
//next image
import Image from "next/image";

const TestimonialSlider = () => {
  return <Swiper 
  spaceBetween={10}
  pagination={{
    clickable: true
  }}
  modules={[Pagination]}
  className="h-[280px] sm:h-[480px]"
  >
    {
      TestimonialSlider.map((person,index)=>{
        return <SwiperSlide key={index}>
        <div>
          {/* avatar & name & position */}
          <div>
            <div>
              {/* avatar */}
              <div>avavavavavavtar</div>
              {/* name */}
              <div>nananananananame</div>
              {/* position */}
              <div>popoposhel nahuy</div>
            </div>
          </div>
          {/* quote & message*/}
          <div>quote & message</div>
        </div>
        </SwiperSlide>
      })
    }
  </Swiper>;
};

export default TestimonialSlider ;
