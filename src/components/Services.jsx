import React from 'react'
import {Carousel} from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import img1 from "../Assets/3.jpg"
import img2 from "../Assets/4.jpg"
const Services = () => {
  return (
    <div>
    
    <Carousel
    infiniteLoop autoPlay showStatus={false} showArrows={false} interval={1000} showThumbs={false} showIndicators={false}
    >
        <div>
            <img src={img1} alt="Item1" />
            <p className='legend'>Full Stack</p>
        </div>
        <div>
            <img src={img2} alt="Item2" />
            <p className='legend'>Mern Stack</p>
        </div>
        <div>
            <img src="https://images.unsplash.com/photo-1610563166150-b34df4f3bcd6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1076&q=80" alt="Item3" />
            <p className='legend'>Mean Stack</p>
        </div>
        <div>
            <img src="https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="Item4" />
            <p className='legend'> React Native Developer</p>
        </div>

    </Carousel>
    
    
    </div>
  )
}

export default Services