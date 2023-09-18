import React from 'react'


export default function CategoryBox(props) {
    return (
        <div className='flex flex-col justify-center items-center gap-1'>
            <div className='flex justify-center items-center bg-[#f8f1fb] rounded-[20px] w-12 h-12 z-0'>
                <img src={props.icon} className="mx-0 w-8 z-10"></img>
            </div>
            <p className='text-sm'>{props.name}</p>
        </div>
    )
}