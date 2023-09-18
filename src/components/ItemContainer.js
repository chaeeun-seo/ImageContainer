import React from 'react'

export default function ItemContainer(props) {
    // const bgColor = ["#f8f1fb", "#E3CFED", "#C0ACCA"];
    // const myColor = '#C0ACCA';
    // const num = bgColor[props.key%3]
    return (
        <div className='w-44'>
            <img className="w-44 h-56 object-cover bg-[#C0ACCA] rounded-lg" alt="이미지" src={props.image_url}></img>
            <p className='font-bold'>{props.price}</p>
            <p className='truncate text-xs text-slate-500'>{props.name}</p>
        </div>
    )
}