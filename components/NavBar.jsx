import Link from 'next/link';
import React from 'react';

const NavBar = () => {
    return (
        <div className=' h-full flex items-center justify-between px-4  md:px-12'>
            <div>
                <Link href="/"
                    className='bg-black '
                >
                    <span>Rohan</span>
                    <span>.Dev</span>
                </Link>
            </div>
            <div>2</div>
        </div>
    );
};

export default NavBar;