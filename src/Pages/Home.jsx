import React from 'react'
import AfterHero from '../Components/Elements/AfterHero'
import CrossChain from '../Components/Elements/CrossChain'
import Hero from '../Components/Elements/Hero'
import Roadmap from '../Components/Elements/Roadmap'
// import RoadmapCustom from '../Components/Elements/RoadmapCustom'
import ThreeCards from '../Components/Elements/ThreeCards'
import Token from '../Components/Elements/Token'
import Utilities from '../Components/Elements/Utilities'
import FAQs from '../Components/Utils/FAQs'

const Home = () => {
  return (
    <>
    <Hero/>
    <AfterHero/>
    <CrossChain/>
    <ThreeCards/>
    <Token/>
    <Utilities/>
    <Roadmap/>
    {/* <RoadmapCustom/> */}
     <FAQs/> 
    </>
  )
}

export default Home
