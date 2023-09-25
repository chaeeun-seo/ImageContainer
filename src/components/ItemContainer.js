import React from 'react'
import { Link } from 'react-router-dom'

export default function ItemContainer({order, name, image_url, price, checkGrid}) {
    // TODO : change bg color of img
    // props.checkGrid == true : w-44, h-56
    // props.checkGrid == false : w-28, h-36
    const colorList = ['#F8F1FB', '#E3CFED', '#C0ACCA']
    const bgColor = colorList[order%3]

    return (
        // <div className={`flex flex-col ${checkGrid ? 'w-44' : 'w-28'} grow`}>
        //     <div className={`grow w-full ${checkGrid ? 'h-56' : 'h-36'}`}>
        //         <img style={{backgroundColor: `${bgColor}`}} className={`grow w-full h-full object-cover bg-[#C0ACCA] rounded-lg`} alt="이미지" src={image_url}></img>
        //     </div>
        <Link to={"/detail"} className={`${checkGrid ? 'w-44' : 'w-28'} grow`}>
            <img style={{backgroundColor: `${bgColor}`}} className={`w-full ${checkGrid ? 'h-56' : 'h-36'} object-cover bg-[#C0ACCA] rounded-lg`} alt="이미지" src={image_url}></img>
            <p className='font-bold text-sm'>{price}</p>
            <p className='truncate text-xs text-slate-500'>{name}</p>
        </Link>
    )
}

// export default function ItemContainer(props) {
//     // TODO : change bg color of img
//     // props.checkGrid == true : w-44, h-56
//     // props.checkGrid == false : w-28, h-36

//     return (
//         <div className={`${props.checkGrid ? 'w-44' : 'w-28'} flex-none`}>
//             <img className={`${props.checkGrid ? 'w-44' : 'w-28'} ${props.checkGrid ? 'h-56' : 'h-36'} object-cover bg-[#C0ACCA] rounded-lg`} alt="이미지" src={props.image_url}></img>
//             <p className='font-bold'>{props.price}</p>
//             <p className='truncate text-xs text-slate-500'>{props.name}</p>
//         </div>
//     )
// }