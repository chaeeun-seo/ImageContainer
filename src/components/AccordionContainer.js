import React from 'react'
import accordionData from '../datas/accordionData'
import AccordionBox from './AccordionBox'

export default function AccordionContainer() {
    const accordionCreators = accordionData.accordion.creators
    const accordionBoxes = accordionCreators.map((creator) => (<AccordionBox key={creator.id} id={creator.id} rank={creator.rank} name={creator.name} tags={creator.tags} profile_image={creator.profile_image} items={creator.items}/>))

    return (
        <>
            <h2 className='w-full max-w-6xl text-left text-lg font-bold'>{accordionData.title}</h2>
            <div id="accordion" data-accordion="collapse" data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white" data-inactive-classes="text-gray-500 dark:text-gray-400" className='w-full max-w-6xl'>
                {accordionBoxes}
            </div>
        </>
    )
}