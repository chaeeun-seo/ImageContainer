import React from 'react'
import dummyData from '../datas/dummyData'
import ItemContainer from './ItemContainer'

export default function HorizontalContainer() {
    const dummyItems = dummyData.data.items
    const items = dummyItems.map((item) => (<ItemContainer key={item.id} checkGrid={false} name={item.name} image_url={item.image_url} price={item.price}/>))
    const title = dummyData.title

    return (
        <>
            <h2 className='w-full text-left text-lg font-bold'>{title}</h2>
            <div className='w-full flex flex-row gap-4 overflow-x-auto'>
                {items}
            </div>
        </>
    )
}