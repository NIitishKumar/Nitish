import Link from 'next/link'
import React from 'react'

function Navbar() {
    return (
        <div className='backdrop-blur-lg fixed top-0 w-full h-10 text-white py-4 pb-8 z-50'>
            <div className='flex flex-row'>
                <div className='basis-1/4 text-center hidden lg:block md:block xl:block'>
                    <span className='cursor-pointer'><span className='text-highlight'>Nitish </span>Kumar</span>
                </div>
                <div className='basis-1/2 float-right mx-auto'>
                    <ul className='flex justify-center gap-x-4 xl:gap-x-20 md:gap-x-20 lg:gap-x-20'>
                        <li className='cursor-pointer'><a href={"#about"}>About</a></li>
                        <li className='cursor-pointer'><a href={"#experience"}>Experience</a></li>
                        <li className='cursor-pointer'><a href={"#projects"}>Projects</a></li>
                    </ul>

                </div>
                <div className='basis-1/4 text-center'>
                    <a href={"#contact"}>
                    <button className='btn btn-dark font-white border-solid border border-slate-100 rounded-lg px-2'>Contact</button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Navbar