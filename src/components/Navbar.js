import React from 'react'
import { useState } from "react";
import { FaBars, FaX } from "react-icons/fa6";
import { navLinks } from '../datas/navData';

export default function Navbar() {
    const navItems = navLinks.map((nav, index) => (<li key={nav.id} className={`text-base ${index == navLinks.length - 1 ? 'mr-0' : 'mr-4'}`}><a href={`#${nav.id}`}>{nav.title}</a></li>))
    const drawerItems = navLinks.filter((nav) => nav.icon === false).map((nav) => (<li key={nav.id}><a href={`#${nav.id}`}><span className='text-base'>{nav.title}</span></a></li>))

    return (
        <nav className='flex flex-row max-w-6xl w-full my-3 sm:justify-between items-center gap-4'>
            <>
                <div className='sm:hidden'>
                    <button className='sm:hidden' type="button" data-drawer-target="drawer-navigation" data-drawer-show="drawer-navigation" aria-controls="drawer-navigation">
                        <FaBars className="mt-2" size={14}/>
                    </button>
                    
                    <div id="drawer-navigation" className="fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-white w-64 dark:bg-gray-800" tabIndex="-1" aria-labelledby="drawer-navigation-label">
                        <h5 id="drawer-navigation-label" className="text-base font-semibold text-gray-500 uppercase dark:text-gray-400">메뉴</h5>
                        <button type="button" data-drawer-hide="drawer-navigation" aria-controls="drawer-navigation" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg w-9 h-9 absolute top-2.5 right-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white" >
                            <FaX size={14}/>
                            <span className="sr-only">Close menu</span>
                        </button>
                        <div className="py-8 overflow-y-auto">
                            <ul className="space-y-5 font-medium">
                                {drawerItems}
                            </ul>
                        </div>
                    </div>
                </div>
            </>
            
            <img src="https://studiocdn.ifland.io/images/logo/prod-9c2754b9730e649424d85a9264c2281e.png" alt="" />
            <ul className='hidden sm:flex justify-end items-center'>
                {navItems}
            </ul>
        </nav>
    )
}