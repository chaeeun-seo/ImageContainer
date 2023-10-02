import React from 'react'
import dummyData from '../datas/dummyData'
import ItemContainer from './ItemContainer'

// HorizontalContainer receives props that decides which data to get
export default function HorizontalContainer({isTitle}) {
    const dummyItems = dummyData.data.items
    const items = dummyItems.map((item, index) => (<ItemContainer key={item.id} id={item.id} order={index} checkGrid={false} name={item.name} image_url={item.image_url} price={item.price}/>))
    const title = isTitle ? dummyData.title : ""

    return (
        <div className={`w-full flex flex-col justify-center items-center ${isTitle?'gap-3':'gap-0'}`}>
            <h2 className='w-full max-w-6xl text-left text-lg font-bold'>{title}</h2>
            <div className='w-full max-w-6xl flex flex-row gap-4 overflow-x-auto'>
                {items}
            </div>
        </div>
    )
}