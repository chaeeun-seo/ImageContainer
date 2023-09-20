import React from 'react'

export default function CarouselBox({key, image}) {
    return (
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
        {/* <img className='object-cover h-72 absolute block w-full -translate-x-1/2 left-1/2' src={image} alt="" /> */}
            <img src={image} className="object-cover h-72 absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"/>
        </div>
    )
}