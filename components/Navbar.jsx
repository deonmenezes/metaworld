'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from '../styles';
import { navVariants } from '../utils/motion';

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="absolute w-[50%] inset-0 gradient-01" />
    <div className={`${styles.innerWidth} mx-auto flex justify-between items-center gap-8`}>
      <img
        src="/search.svg"
        alt="search"
        className="w-[24px] h-[24px] object-contain"
      />
      <h2 className="font-extrabold text-[24px] leading-[30px] text-white">
        EXPLORE-INERMECH
      </h2>
      <img
        src="/menu.svg"
        alt="menu"
        className="w-[24px] h-[24px] object-contain"
      />

      {/* Navigation Links */}
      <div className="flex gap-6 text-white">
        <Link href="/products">Products</Link>
        <Link href="/services">Services</Link>
        <Link href="/about">About Us</Link>
      </div>
    </div>
  </motion.nav>
);

export default Navbar;
      