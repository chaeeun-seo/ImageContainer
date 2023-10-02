import React from 'react'
import dummyData from '../datas/dummyData'
import ItemContainer from './ItemContainer'

export default function GridContainer() {
    const dummyItems = dummyData.data.items
    const items = dummyItems.map(function(item, index){
        const propsObj = {
            key: item.id,
            id : item.id,
            order: index,
            name: item.name,
            image_url: item.image_url,
            price: item.price,
            checkGrid: true,
        }
        return <ItemContainer {...propsObj}/>
    })
    // const items = dummyItems.map((item) => (<ItemContainer {...item, {checkGrid: true}}/>))
    // const items = dummyItems.map((item) => (<ItemContainer key={item.id} checkGrid={true} name={item.name} image_url={item.image_url} price={item.price}/>))

    return (
        <div className="w-full flex flex-col justify-center items-center gap-3">
            <h2 className='w-full max-w-6xl text-left text-lg font-bold'>{dummyData.title}</h2>
            <div className='w-full max-w-6xl flex flex-wrap gap-4 justify-start justify-items-center'>
            {/* <div className='grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-4'>      */}
                {items}
            </div>
        </div>
    )
}