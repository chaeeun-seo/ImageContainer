import React from 'react'

export default function ItemContainer(props) {
    // const bgColor = ["#f8f1fb", "#E3CFED", "#C0ACCA"];
    // const myColor = '#C0ACCA';
    // const num = bgColor[props.key%3]
    return (
        <div className='w-48'>
            {/* <img className={`w-48 h-60 object-cover bg-[${bgColor[0]}] rounded-lg`} alt="이미지" src={props.image_url}></img> */}
            <img className="w-48 h-60 object-cover bg-['#C0ACCA'] rounded-lg" alt="이미지" src={props.image_url}></img>
            <p className='truncate'>{props.name}</p>
            <p className='font-bold'>{props.price}</p>
        </div>
    )
}