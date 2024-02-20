"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLinks = ({link}) => {
const pathName = usePathname()
    return (
        <Link className={`rounded p-1 ${pathName === link.url && "bg-black text-white"}`} href={link.title}>
            {link.title}
        </Link>
    );
};

export default NavLinks;