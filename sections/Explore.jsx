'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

import { exploreWorlds } from '../constants';
import { exploreWorlds1 } from '../constants';
import { staggerContainer } from '../utils/motion';
import { staggerContainer1 } from '../utils/motion';
import { ExploreCard, TitleText, TypingText } from '../components';
import styles from '../styles';

const Explore = () => {
  const [active, setActive] = useState('world-2');

  return (
  <section className={`${styles.paddings}`} id="explore">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="Our_Services" textStyles="text-center" />
      <TitleText title={<>Oil and Gas Services<br className="md:block hidden" />  </>} textStyles="text-center" />
      <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5 mb-16">
        {exploreWorlds.map((world, index) => (
          <ExploreCard
            key={world.id}
            {...world}
            index={index}
            active={active}
            handleClick={setActive}
          />
          
        ))}
      </div>
      
      </motion.div>
      <div></div>
      <motion.div
      variants={staggerContainer1}
      initial="hidden"
      whileInView="show"
      id="marine"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      
      <TitleText title={<>Marine Services<br className="md:block hidden"  /> </>} textStyles="text-center" />
      <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5  " >
        {exploreWorlds1.map((world, index) => (
          <ExploreCard
            key={world.id}
            {...world}
            index={index}
            active={active}
            handleClick={setActive}
          />
          
        ))}
      </div>
    </motion.div>
  </section>
)
        }
export default Explore;


