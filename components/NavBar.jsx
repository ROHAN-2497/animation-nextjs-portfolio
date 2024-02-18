import Link from 'next/link';
import React, { useState } from 'react';
const links = [
    { url: "/", title: "home" },
    { url: "/about", title: "About" },
    { url: "/portfolio", title: "Portfolio" },
    { url: "/contact", title: "Contact" }
]

const NavBar = () => {
    const [open, setOpen] = useState(false);
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
                <button className='w-10 h-8 flex flex-col justify-between z-50 relative'>
                    <div className='w-10 h-1 bg-black rounded'></div>
                    <div className='w-10 h-1 bg-black rounded'></div>
                    <div className='w-10 h-1 bg-black rounded'></div>
                </button>
            </div>
            {/* MENU LIST */}
            {
                open && (<div className='absolute top-0 left-0 w-screen h-screen bg-red-50  text-black flex flex-col justify-center gap-8 text-4xl font-medium items-center'>
                    {
                        links.map(link => (
                            <Link href={link.url} key={link.title}>
                                {link.title}</Link>
                        ))
                    }
                </div>
                )}
        </div>
    );
};

export default NavBar;