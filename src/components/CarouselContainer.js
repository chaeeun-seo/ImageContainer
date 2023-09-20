import React from 'react'
import carouselData from '../datas/carouselData'
import CarouselBox from './CarouselBox'
import SliderControlButton from './SliderControlButton'

export default function CarouselContainer() {
    const carouselItems = carouselData.carousel.items
    const carouselBoxes = carouselItems.map((item) => (<CarouselBox key={item.carousel_id} image={item.carousel_image_url}/>))
    
    const count = carouselItems.length
    const sliderIndicators = carouselItems.map((item, idx) => (<button key={item.carousel_id} type='button' className={`w-3 h-3 rounded-full bg-white/50 aria-current=${idx==1 ? "true" : "false"} aria-label=${"Slide " + idx} data-carousel-slide-to=${idx-1}`}></button>))

    return (
        <div id="default-carousel" className="relative w-full" data-carousel="slide">
            {/* Carousel Wrapper */}
            <div className="relative overflow-hidden h-72">
                {carouselBoxes}
            </div>
            {/* Slider Indicators */}
            <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
                {sliderIndicators}
            </div>
            {/* Slider Controls */}
            <button type='button' className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                <SliderControlButton path="M5 1 1 5l4 4"/>
            </button>
            <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                <SliderControlButton path="m1 9 4-4-4-4"/>
            </button>
        </div>
    )
}