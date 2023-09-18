import React from 'react'
import categoryData from '../datas/categoryData'
import CategoryBox from './CategoryBox'

export default function CategoryContainer() {
    const categoryItems = categoryData.category.items
    const categoryBoxes = categoryItems.map((item) => (<CategoryBox key={item.category_id} name={item.category_name} icon={item.category_icon}/>))

    return (
        <div className='w-full flex flex-row gap-4 overflow-x-auto md:justify-center'>
            {categoryBoxes}
        </div>           
    )
}