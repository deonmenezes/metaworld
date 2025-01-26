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
        <img
          src="/map.png"
          alt="map"
          className="w-full h-full object-cover"
        />

        <div className="absolute top-1/3 left-[90%] w-[150px] h-[70px] p-[6px] bg-[#5d6680]">
          <img src="man1.png" alt="people" className="w-full h-full" />
        </div>

        <div className="absolute top-1/3 left-[70%] w-[180px] h-[70px] p-[6px]  bg-[#5d6680]">
          <img src="man2.png" alt="people" className="w-full h-full" />
        </div>

        <div className="absolute top-1/3 left-[55%] w-[90px] h-[70px] p-[6px]  bg-[#5d6680]">
          <img src="man3.png" alt="people" className="w-full h-full" />
        </div>
        <div className="absolute top-1/3 left-[35%] w-[180px] h-[70px] p-[6px]  bg-[#5d6680]">
          <img src="man4.png" alt="people" className="w-full h-full" />
        </div>

        <div className="absolute top-1/3 left-[10%] w-[220px] h-[70px] p-[6px]  bg-[#5d6680]">
          <img src="man5.png" alt="people" className="w-full h-full" />
        </div>

        <div className="absolute top-1/3 left-[-5%] w-[130px] h-[70px] p-[6px] bg-[#5d6680]">
          <img src="man6.png" alt="people" className="w-full h-full" />
        </div>  
        <div className="absolute top-2/4 left-[90%] w-[150px] h-[70px] p-[6px] bg-[#5d6680]">
          <img src="man12.png" alt="people" className="w-full h-full" />
        </div>

        <div className="absolute top-2/4 left-[70%] w-[180px] h-[70px] p-[6px] bg-[#5d6680]">
          <img src="man11.png" alt="people" className="w-full h-full" />
        </div>

        <div className="absolute top-2/4 left-[55%] w-[90px] h-[70px] p-[6px]  bg-[#5d6680]">
          <img src="man10.png" alt="people" className="w-full h-full" />
        </div>
        <div className="absolute top-2/4 left-[35%] w-[180px] h-[70px] p-[6px]  bg-[#5d6680]">
          <img src="man9.png" alt="people" className="w-full h-full" />
        </div>

        <div className="absolute top-2/4 left-[10%] w-[220px] h-[70px] p-[6px]  bg-[#5d6680]">
          <img src="man7.png" alt="people" className="w-full h-full" />
        </div>

        <div className="absolute top-2/4 left-[-5%] w-[130px] h-[70px] p-[6px] bg-[#5d6680]">
          <img src="man8.png" alt="people" className="w-full h-full" />
        </div>  
      </motion.div>
    </motion.div>
  </section>
);

export default World;
