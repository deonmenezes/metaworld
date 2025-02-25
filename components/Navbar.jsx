'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from '../styles';
import { navVariants } from '../utils/motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} py-4 relative`}
    >
      <div className="absolute w-[50%] inset-0 gradient-01" />
      <div className={`${styles.innerWidth} mx-auto flex justify-between items-center gap-4 px-4 md:px-8`}>
        {/* Left - Search Icon */}
        <img
          src="/search.svg"
          alt="search"
          className="w-[24px] h-[24px] object-contain"
        />

        {/* Middle - Brand Name */}
        <h2 className="font-extrabold text-[20px] md:text-[24px] leading-[30px] text-white">
          EXPLORE-INERMECH
        </h2>

        {/* Right - Mobile Menu Toggle */}
        <div className="md:hidden">
          <button type="button" onClick={() => setIsOpen(!isOpen)}>
            <img
              src="/menu.svg"
              alt="menu"
              className="w-[24px] h-[24px] object-contain"
            />
        </button>
      </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex gap-6 text-white">
          <Link href="/products">Oil & Gas Products</Link>
          <Link href="/products1">Marine Products</Link>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-[60px] left-0 w-full bg-black p-4 flex flex-col gap-4 text-white">
          <Link href="/products">Oil & Gas Products</Link>
          <Link href="/products1">Marine Products</Link>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
