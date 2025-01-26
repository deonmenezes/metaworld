'use client';

import { motion } from 'framer-motion';

import { startingFeatures } from '../constants';
import { startingFeatures1 } from '../constants';
import { startingFeatures2 } from '../constants';
import { staggerContainer, fadeIn, planetVariants } from '../utils/motion';
import { StartSteps, TitleText, TypingText } from '../components';
import styles from '../styles';

const GetStarted = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: 'false', amount: '0.25' }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
        variants={planetVariants('left')}
        className={'flex-1 ${styles.flexCenter}'}
      >
        <img
          src="/ship.svg"
          alt="get-started"
          className="w-[80%] h-[80%] object-contain"
        />
      </motion.div>
      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] flex justify-center flex-col"
      >
        <TypingText title="| Explore Inermech" />
        <TitleText title={<>Get started with just a few clicks</>} />
        <a href="#explore">
        <div className="mt-[31px] flex flex-col max-w-[370px] gap-[24px]">
          {startingFeatures.map((feature, index) => (
            <StartSteps
              key={feature}
              number={index + 1}
              text={feature}
            />
          ))}
          </div>
          </a>
           <a href="#marine">
           <div className="mt-[31px] flex flex-col max-w-[370px] gap-[24px]">
          {startingFeatures1.map((feature, index) => (
            <StartSteps
              key={feature}
              number={index + 2}
              text={feature}
            />
          ))}
          </div>
          </a>
        <a href="#marine">
        <div className="mt-[31px] flex flex-col max-w-[370px] gap-[24px]">
          {startingFeatures2.map((feature, index) => (
            <StartSteps
              key={feature}
              number={index + 3}
              text={feature}
            />
          ))}
        </div>
        </a>
      </motion.div>
    </motion.div>
  </section>
);

export default GetStarted;
