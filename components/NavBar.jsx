import Link from 'next/link';
import React from 'react';
const links = [
    { url: "/", title: "home" },
    { url: "/about", title: "About" },
    { url: "/portfolio", title: "Portfolio" },
    { url: "/contact", title: "Contact" }
]

const NavBar = () => {
    return (
        <div className=' h-full flex items-center justify-between px-4  md:px-12'>
            {/* LOGO */}
            <div>
                <Link href="/"
                    className='bg-black rounded-md p-1 font-semibold text-sm flex items-center justify-center  '
                >
                    <span className='text-white mr-1'>Rohan </span>
                    <span className='bg-white rounded-sm flex items-center justify-center  w-12 h-8'>.Dev</span>
                </Link>
            </div>
            {/* RESPONSIVE MENU */}
            <div className=''>
                {/* MENU BUTTON */}
                <button className='w-10 h-8 flex flex-col justify-between'>
                    <div className='w-10 h-1 bg-black rounded'></div>
                    <div className='w-10 h-1 bg-black rounded'></div>
                    <div className='w-10 h-1 bg-black rounded'></div>
                </button>
            </div>
            {/* MENU LIST */}
            <div className=''>
                {
                    links.map(link =>(
                        <Link href={link.url} key={link.title}>{link.title}</Link>
                    ))
                }
            </div>
        </div>
    );
};

export default NavBar;