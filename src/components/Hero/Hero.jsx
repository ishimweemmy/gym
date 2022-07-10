import React from 'react'
import './Hero.css'
import Header from '../Header/Header'
import hero_image from '../../assets/hero_image.png'
import hero_image_back from '../../assets/hero_image_back.png'
import Heart from '../../assets/heart.png'
import Calories from '../../assets/calories.png'

const Hero = () => {
  return (
    <div className='hero'>
      <div className="left-h">
        <Header />

        <div className="the-best-ad">
          <div></div>
          <span>the best fitness in the town </span>
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

        <div className="heart-rate">
          <img src={Heart} alt="" />
          <span>Heart Rate</span>
          <span>116bpm</span>
        </div>

        <img src={hero_image} alt="" className='hero-image' />
        <img src={hero_image_back} alt="" className='hero-image-back' />

        <div className="calories">
          <img src={Calories} alt="" />
          <div>
            <span>Calories Burned</span>
            <span>200 kcal</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
 