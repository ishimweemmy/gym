import React from 'react'
import './Hero.css'
import Header from '../Header/Header'
import hero_image from '../../assets/hero_image.png'
import hero_image_back from '../../assets/hero_image_back.png'
import Heart from '../../assets/heart.png'
import Calories from '../../assets/calories.png'
import { motion } from 'framer-motion';
// import NumberCounter from '';

const Hero = () => {
  const transition = {type: 'spring', duration: 3}

  const mobile = window.innerWidth <=768 ? true : false;

  return (
    <div className='hero' id='hero'>
      <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header />

        <div className="the-best-ad">
          <motion.div initial={{left: mobile ? '165px' : '238px'}} whileInView={{left: '8px'}} transition={{...transition, type: 'tween'}}></motion.div>
          <span>the best fitness club in the town </span>
        </div>

        <div className="hero-text">
          <div>
            <span className='stroke-text'>shape</span>
            <span>your</span>
          </div>
          <div><span>Ideal body</span></div>
          <div>
            <span>In here we will help you to shape and build your ideal  body and lite up your life to fulliest</span>
          </div>
        </div>

        <div className="figures">
          <div>
            <span>+200</span>
            <span>expert coaches</span>
          </div>
          <div>
            <span>+1000</span>
            <span>members joined</span>
          </div>
          <div>
            <span>+60</span>
            <span>fitness programs</span>
          </div>
        </div>

        <div className="hero-buttons">
          <button className='btn'>Get started</button>
          <button className='btn'>Learn More</button>
        </div>
      </div>

      <div className="right-h">
        <button className="btn">Join Now</button>

        <motion.div transition={transition} initial={{right: '-1rem'}} whileInView={{right: "4rem"}} className="heart-rate">
          <img src={Heart} alt="" />
          <span>Heart Rate</span>
          <span>116bpm</span>
        </motion.div>

          <img  src={hero_image} alt="" className='hero-image' />
          <motion.img initial={{right: "11rem"}} whileInView={{right: "20rem"}} transition={{...transition}} src={hero_image_back} alt="" className='hero-image-back' />

        <motion.div initial={{right: "37rem"}} whileInView={{right: "28rem"}} transition={transition}className="calories">
          <img src={Calories} alt="" />
          <div>
            <span>Calories Burned</span>
            <span>200 kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Hero
 