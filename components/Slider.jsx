import Carousel from 'nuka-carousel'
import React from 'react'
import image1 from '../public/img/slider1.jpg'
import image2 from '../public/img/slider1.jpg'
import image3 from '../public/img/slider1.jpg'
import image4 from '../public/img/slider1.jpg'


const Slider = () => {
  const imagesSlider = [image1, image2, image3, image4]
  return (
    <div className='mx-auto bg-primaryColor select-none sliderButton' >
      <Carousel defaultControlsConfig={{
        nextButtonText: '>',
        prevButtonText: '<',
        prevButtonStyle: {
          color: '#0038a8',
          background: 'white',
          fontSize: '40px'
        }, nextButtonStyle: {
          color: '#0038a8',
          background: 'white',
          fontSize: '40px'
        },
        pagingDotsStyle: {
          fill: 'white',
          height: '12px',
          width: '12px'
        }
      }}  cellAlign='right' wrapAround swiping scrollMode='remainder'
      className='mx-auto'
      >
        {
          imagesSlider.map(image =>{
            return <img key={image.src} className='lg:max-w-6xl mx-auto' src={image.src} />
          })
        }
      </Carousel>
    </div>
  )
}

export default Slider