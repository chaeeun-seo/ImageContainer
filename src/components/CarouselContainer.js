import React from 'react'
import carouselData from '../datas/carouselData'
import CarouselBox from './CarouselBox'

export default function CarouselContainer() {
    const carouselItems = carouselData.carousel.items
    const carouselBoxes = carouselItems.map((item) => (<CarouselBox key={item.carousel_id} image={item.carousel_image_url}/>))
    const count = carouselItems.length
    
    return (
        <div id="default-carousel" className="relative w-full" data-carousel="slide">
            {/* Carousel Wrapper */}
            <div className="relative h-56 overflow-hidden md:h-72">
                {carouselBoxes}
            </div>
            
        </div>
    )
}