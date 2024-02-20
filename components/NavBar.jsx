"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import NavLinks from './NavLinks';
const links = [
    { url: "/", title: "home" },
    { url: "/about", title: "About" },
    { url: "/portfolio", title: "Portfolio" },
    { url: "/contact", title: "Contact" }
]


const NavBar = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className=' h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl'>
            {/* LINKS  */}
            <div className='hidden md:flex gap-4 w-1/3'>
                {
                    links.map(link => (
                        <NavLinks link={link} key={link.title} />
                    ))
                }
            </div>
            {/* LOGO */}

            <div className='md:hidden lg:flex  xl:w-1/3 xl:justify-center '
            > <Link href="/"
                className='bg-black rounded-md p-1 font-semibold text-sm flex items-center justify-center'
            >
                    <span className='text-white mr-1'>Rohan </span>
                    <span className='bg-white rounded-sm flex items-center justify-center  w-12 h-8'>.Dev</span>
                </Link></div>
            <div className='hidden md:flex gap-4 w-1/3 '>
                {/* SOCIAL  */}
                <Link href="/">
                    <Image src='/facebook.png' alt='' width={24} height={24}></Image>
                </Link>
                <Link href="/">
                    <Image src='/github.png' alt='' width={24} height={24}></Image>
                </Link>
                <Link href="/">
                    <Image src='/linkedin-logo.png' alt='' width={24} height={24}></Image>
                </Link>


            </div>

            {/* RESPONSIVE MENU */}
            <div className='md:hidden'>
                {/* MENU BUTTON */}
                <button className='w-10 h-8 flex flex-col justify-between z-50 relative'
                    onClick={() => setOpen((perv) => !perv)}
                >
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