import React from 'react'
import styles from '../styles/slider.module.css'
import Image from 'next/image'
const Slider = () => {
  return (
    <div className={styles.wrapper}>
    <div className={styles.slider} id="slider">
      <ul className={styles.slides}>
        <li className={styles.slide} id="slide1">
          <a href="#">
            <p className={styles.caption}>Texto llamativo</p>
            <Image height={500} width={1000} src="/img/1.jpg" alt="photo 1" />
          </a>
        </li>
        <li className={styles.slide} id="slide2">
          <a href="#">
            <p className={styles.caption}>Texto llamativo</p>
            <Image height={500} width={1000} src="/img/1.jpg" alt="photo 1" />
          </a>
        </li>
        <li className={styles.slide} id="slide3">
          <a href="#">
            <p className={styles.caption}>Texto llamativo</p>
            <Image height={500} width={1000} src="/img/1.jpg" alt="photo 1" />

          </a>
        </li>
        <li className={styles.slide} id="slide4">
          <a href="#">
            <p className={styles.caption}>Texto llamativo</p>
            <Image height={500} width={1000} src="/img/1.jpg" alt="photo 1" />

          </a>
        </li>
        <li className={styles.slide} id="slide5">
          <a href="#">
             <p className={styles.caption}>Texto llamativo</p>
             <Image height={500} width={1000} src="/img/1.jpg" alt="photo 1" />

          </a>
        </li>
        <li className={styles.slide}>
          <a href="#">
            <p className={styles.caption}>Texto llamativo</p>
            <Image height={500} width={1000} src="/img/1.jpg" alt="photo 1" />

          </a>
        </li>
      </ul>
      <ul className={styles.sliderController}>
        <li><a href="#slide1">&bullet;</a></li>
        <li><a href="#slide2">&bullet;</a></li>
        <li><a href="#slide3">&bullet;</a></li>
        <li><a href="#slide4">&bullet;</a></li>
        <li><a href="#slide5">&bullet;</a></li>
      </ul>
    </div>
  </div>
  )
}

export default Slider