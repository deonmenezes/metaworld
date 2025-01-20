'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About Inermech" textStyles="text-center" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        <span className="font-extrabold text-white">Inermech</span> is a well-known service provider and trading company based in Saudi Arabia that has recently moved into the <span className="font-extrabold text-white">UAE</span> market. With the highest quality service and products, our mission is to become a holistic solution supplier in the Oil & Gas Industry, Marine Industry, Heavy Metal Industry, and Petrochemical Industry. We are one of the UAE's fastest-growing businesses. Since our founding in 2016, we have been recognized by our clients for our commitment to client satisfaction. We concentrate on issues relating to the Gulf Region's industrial, construction, mining, oil and gas businesses. Our goal is to provide our potential customers with high-quality products and services. We make our services as simple as possible in order to offer value to your company. Inermech is a prominent service supplier to the <span className="font-extrabold text-white">Oil & Gas and Marine industries</span> that strives for client satisfaction excellence.

We have great and efficient executives who will provide you with the best technological solutions as well as good core product references. We handle specialist jobs like as nitrogen service and chemical cleaning, and we also provide qualified labor to help you manage your assets. Our Items division is responsible for supplying all products connected to the energy sector and marine services from various manufacturers throughout the world.

All areas of Marine services are handled by a  <span className="font-extrabold text-white">professional staff at Inermech</span>. We ship high-quality spare parts straight from the manufacturer to any port in the world. Our service professionals can install and inspect the equipment onboard, as well as give a complete solution.
      </motion.p>
      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
