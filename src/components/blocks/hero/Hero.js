import React from 'react';
import heropic from '../../../assets/img/hero-img.png'
import herobg from '../../../assets/img/hero-bg.png'

export const Hero = () => {
  return (
    <section className='hero-section'>
      <div className="container hero-container">
        <div className="hero-container__info">
          <h1>Get your passwords organized </h1>
          <button className="button button--primary">
            Get started
          </button>
        </div>
        <div className="hero-container__img">
          <img src={heropic} alt="picture of a laptop" />
        </div>
      </div>
    </section>
  )
}

