//components
import WorkSlider from '../../components/WorkSlider';
import Bulb from '../../components/Bulb';
import Circles from '../../components/Circles';

// framer motion 
import {motion} from 'framer-motion';
import { fadeIn } from '../../variants';

// sevice
const Work = () => {
  return (
  <div className='h-full bg-primary/30  py-36 flex items-center'>
    <Circles/>
    <div className='container mx-auto'>
      <div className='flex flex-col xl:flex-row gap-x-8'>
        {/* text */}
          <div className='text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0'>
            <motion.h2 
            exit='hidden'
            animate='show'
            initial='hidden'
            variants={fadeIn('up', 0.3 )}
            className='h2 xl:mt-12'>
              My Work
              <span className='text-accent'>
                .
              </span>
            </motion.h2>
            <motion.p
            exit='hidden'
            animate='show'
            initial='hidden'
            variants={fadeIn('up', 0.4 )}
            className='mb-4 max-w-[480px] mx-auto lg:mx-0'>
              You are gey
            </motion.p>
          </div>
          {/*slider*/}
          <motion.div 
          exit='hidden'
          animate='show'
          initial='hidden'
          variants={fadeIn('down', 0.6 )}
          className='w-full xl:max-w-[65%]'>
            <WorkSlider/>
          </motion.div>
      </div>
    </div>
    <Bulb/>
  </div>
  );
};

export default Work;
