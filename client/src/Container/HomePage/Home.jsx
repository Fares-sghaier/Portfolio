import React from 'react';
import HeroSection from '../HeroSection/HeroSection';
import HeroTwo from '../HeroSection/HeroTwo.jsx'
import HeroThree from '../HeroSection/HeroThree.jsx'
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';
import Pricing from '../Pricing/Pricing';

function Home() {
  return (
    <>
      <HeroSection {...homeObjOne} />
      <HeroTwo {...homeObjThree} />
      <HeroThree {...homeObjTwo} />
      <Pricing />
      <HeroSection {...homeObjFour} />
    </>
  );
}

export default Home;