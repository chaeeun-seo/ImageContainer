import React from 'react'

export default function AccordionBox({id, rank, name, tags, profile_image, items}) {
    const tagsContainer = tags.map((tag, index) => (<span key={index} className='text-sm text-gray-500 font-normal'>#{tag}</span>))

    return (
        <>
            <h2 id={`accordion-heading-${id}`}>
                <button type="button" className="flex items-center justify-between w-full px-5 py-5 font-medium text-left text-gray-500 focus:rounded-lg border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 focus:ring-1 focus:ring-[#5839D5] dark:focus:ring-[#5839D5]" data-accordion-target={`#accordion-body-${id}`} aria-expanded="true" aria-controls={`accordion-body-${id}`}>
                    <div className='flex gap-4 items-center'>
                        <p>{rank}</p>
                        <img src={profile_image} className="w-10 h-10 object-cover rounded-full bg-[#f8f1fb]" alt="" />
                        <div className='flex flex-col'>
                            <p className='text-base font-bold'>{name}</p>
                            <div className='flex'>{tagsContainer}</div>
                        </div>
                    </div>
                    <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
                    </svg>
                </button>
            </h2>
            <div id={`accordion-body-${id}`} className="hidden" aria-labelledby={`accordion-heading-${id}`}>
                <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                    <p className="mb-2 text-gray-500 dark:text-gray-400">Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.</p>
                    <p className="text-gray-500 dark:text-gray-400">Check out this guide to learn how to <a href="/docs/getting-started/introduction/" className="text-blue-600 dark:text-blue-500 hover:underline">get started</a> and start developing websites even faster with components on top of Tailwind CSS.</p>
                </div>
            </div>
        </>
    )
}