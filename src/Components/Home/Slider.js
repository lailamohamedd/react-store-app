import React, { useState } from 'react'
import { Carousel } from 'react-bootstrap'
import Slider4 from "../../assets/images/prod4.png"
import Slider1 from "../../assets/images/prod1.png"

const Slider = () => {
  const [index, setIndex] = useState(0)
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex)
  }
  return (
    <>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item className='slider-background' interval={2000}>
          <img
            style={{ height: "296px", width: "313.53px" }}
            src={Slider1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h5 className='slider-title'>هناك خصم كبير</h5>
            <p className='slider-text'>خصم يصل 50% عند شرائك</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className='slider-background' interval={2000}>
          <img
            style={{ height: "296px", width: "313.53px" }}
            src={Slider4}
            alt="second slide"
          />
          <Carousel.Caption>
            <h5 className='slider-title'>هناك خصم كبير</h5>
            <p className='slider-text'>خصم يصل 50% عند شرائك</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  )
}

export default Slider
