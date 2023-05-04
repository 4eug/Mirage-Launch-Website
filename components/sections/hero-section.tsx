/* eslint-disable react/no-unescaped-entities */
'use client';
import { Button } from '../button';
import { Hero, HeroTitle, HeroSubtitle } from '../hero';
import { Ico } from '../icons/ico';
import TimerCard from '../timer-card';
import { motion } from 'framer-motion';

let easing = [0.6, -0.05, 0.01, 0.99];

const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
    transition: { duration: 0.9, ease: easing },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.9,
      ease: easing,
    },
  },
};

export const HomepageHero = () => (
  <>
    <motion.section
      initial="initial"
      animate="animate"
      exit={{ opacity: 0 }}
      className=""
    >
      <motion.div variants={fadeInUp} className="text-center">
        <Hero>
          <Button
            className="gap-x-2"
            href="/"
            variant="secondary"
            size="medium"
          >
            <Ico />
            <span>
              {' '}
              Release 2023.06 |{' '}
              <span className="text-primary600">Coming Soon</span>
            </span>
          </Button>
          <HeroTitle className="">
            The Ultimate Design <br /> System for <br /> Devs and Designers!
            {/* <br />
        Designers! */}
          </HeroTitle>
          <HeroSubtitle className="">
            Elevate your designs with Mirage's extensive library of
            <br />
            customisable components and styles
          </HeroSubtitle>
          <TimerCard />
        </Hero>
      </motion.div>
    </motion.section>
  </>
);
