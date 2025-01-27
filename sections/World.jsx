'use client';

import { motion } from 'framer-motion';

import { staggerContainer, fadeIn } from '../utils/motion';
import { TitleText, TypingText } from '../components';
import styles from '../styles';

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title=" Our Manufacturers" textStyles="text-center" />
      <TitleText
        title={(
          <>
            Manfacturers We have Partnered With
          </>
        )}
        textStyles="text-center"
      />

      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className="relative mt-[68px] flex w-full h-[550px]"
      >
       

       <div
  className="relative w-screen h-screen bg-no-repeat bg-center bg-cover lg:bg-contain"
  style={{ backgroundImage: "url('map.png')" }}
  id="man"
>
  {/* First Row */}
  <div className="flex flex-wrap justify-center items-center gap-4">
    <div className="w-[150px] h-[70px] p-[6px] bg-[#5d6680]">
      <img src="man1.png" alt="man1" className="w-full h-full" />
    </div>
    <div className="w-[180px] h-[70px] p-[6px] bg-[#5d6680]">
      <img src="man2.png" alt="man2" className="w-full h-full" />
    </div>
    <div className="w-[90px] h-[70px] p-[6px] bg-[#5d6680]">
      <img src="man3.png" alt="man3" className="w-full h-full" />
    </div>
    <div className="w-[180px] h-[70px] p-[6px] bg-[#5d6680]">
      <img src="man4.png" alt="man4" className="w-full h-full" />
    </div>
    <div className="w-[220px] h-[70px] p-[6px] bg-[#5d6680]">
      <img src="man5.png" alt="man5" className="w-full h-full" />
    </div>
    <div className="w-[130px] h-[70px] p-[6px] bg-[#5d6680]">
      <img src="man6.png" alt="man6" className="w-full h-full" />
    </div>
  </div>

  {/* Second Row */}
  <div className="flex flex-wrap justify-center items-center gap-4">
    <div className="w-[150px] h-[70px] p-[6px] bg-[#5d6680] mt-5">
      <img src="man12.png" alt="man12" className="w-full h-full" />
    </div>
    <div className="w-[180px] h-[70px] p-[6px] bg-[#5d6680] mt-5">
      <img src="man11.png" alt="man11" className="w-full h-full" />
    </div>
    <div className="w-[90px] h-[70px] p-[6px] bg-[#5d6680] mt-5">
      <img src="man10.png" alt="man10" className="w-full h-full" />
    </div>
    <div className="w-[180px] h-[70px] p-[6px] bg-[#5d6680] mt-5">
      <img src="man9.png" alt="man9" className="w-full h-full" />
    </div>
    <div className="w-[220px] h-[70px] p-[6px] bg-[#5d6680] mt-5">
      <img src="man7.png" alt="man7" className="w-full h-full" />
    </div>
    <div className="w-[130px] h-[70px] p-[6px] bg-[#5d6680] mt-5">
      <img src="man8.png" alt="man8" className="w-full h-full" />
    </div>
  </div>
</div>
      </motion.div>
    </motion.div>
  </section>
);

export default World;
