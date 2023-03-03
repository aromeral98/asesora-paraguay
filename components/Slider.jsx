import React from 'react'
import image1 from '../public/img/slider1.webp'
import image2 from '../public/img/slider1.webp'
import image3 from '../public/img/slider1.webp'
import image4 from '../public/img/slider1.webp'


const Slider = () => {
  const imagesSlider = [image1, image2, image3, image4]
  return (
    <div className='mx-auto bg-primaryColor select-none sliderButton' >
      {/* <Carousel defaultControlsConfig={{
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
            return <Image layout='fill' key={image.src} className='lg:max-w-6xl mx-auto' src={image.src} />
          })
        }
      </Carousel> */}
    </div>
  )
}

export default Slider