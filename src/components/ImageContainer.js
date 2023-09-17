import React from 'react'
import dummyData from '../datas/dummyData'
import ItemContainer from './ItemContainer'

export default function ImageContainer() {
    const dummyItems = dummyData.data.items
    const items = dummyItems.map((item) => (<ItemContainer key={item.id} name={item.name} image_url={item.image_url} price={item.price}/>))

    return (
        <div className='grid sm:grid-cols-5 grid-cols-2 gap-4'>        
            {items}
        </div>
    )
}