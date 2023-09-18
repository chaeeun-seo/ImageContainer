import React from 'react'
import dummyData from '../datas/dummyData'
import ItemContainer from './ItemContainer'

export default function GridContainer() {
    const dummyItems = dummyData.data.items
    const items = dummyItems.map((item) => (<ItemContainer key={item.id} name={item.name} image_url={item.image_url} price={item.price}/>))

    return (
        // <div className='w-11/12 sm:w-9/12 flex flex-wrap gap-4 justify-start justify-items-center'>
        <div className='grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-4'>     
            {items}
        </div>
    )
}