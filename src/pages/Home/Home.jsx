import React from 'react'
import "./Home.css"
import Navbar from '../../components/Navbar/Navbar'
import Hero from '../../assets/hero_banner.jpg'
import HeroTitle from '../../assets/hero_title.png'
import PlayIcon from '../../assets/play_icon.png'
import InfoIcon from '../../assets/info_icon.png'
import TitleCards from '../../components/TitleCards/TitleCards'
import Footer from '../../components/Footer/Footer'
const Home = () => {
  return (
    <div className='home'>
      <Navbar></Navbar>
      <div className="hero">
        <img src={Hero} alt="" className='banner-img' />
      <div className="hero-caption">
        <img src={HeroTitle} alt="" className='caption-img'/>
        <p>Discovering hid ties to a secret ancient order, a young man living in modern Istanbul embarks on a quest to save the city from an immortal enemy.</p>
      <div className="hero-btns">
        <button className='btn'><img src={PlayIcon} alt="" />Play</button>
        <button className='btn dark-btn'><img src={InfoIcon} alt="" />More Info</button>
      </div>
      <TitleCards/>
      </div>
      </div>
      <div className="more-cards">
        <TitleCards title={"Blockbuster Movies"}/>
         <TitleCards title={"Only On Netflix"}/> 
         <TitleCards title={"Upcoming"}/>
          <TitleCards title={"Top Picks For you"}/>
      </div>
      <Footer/>
    </div>
  )
}

export default Home
