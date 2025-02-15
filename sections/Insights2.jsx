'use client';

import { motion } from 'framer-motion';

import { insights2 } from '../constants';
import { staggerContainer } from '../utils/motion';
import { InsightCard, TitleText, TypingText } from '../components';
import styles from '../styles';

const Insights2 = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| Insight" textStyles="text-center sm:mt-0 mt-80" />
      <TitleText title="Insight about Inermech" textStyles="text-center" />
      <div className="mt-[50px] flex flex-col gap-[30px] text-white">
  {insights2.map((item, index) => (
    <InsightCard key={`insight-${index}`} {...item} index={index + 1} />
  ))}
</div>
    </motion.div>
  </section>
);

export default Insights2;
