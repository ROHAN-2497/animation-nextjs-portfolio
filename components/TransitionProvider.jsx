"use client"
import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import NavBar from './NavBar';
import { usePathname } from 'next/navigation';

const TransitionProvider = ({children}) => {
    const pathName= usePathname()
    return (
        <AnimatePresence>
            <div key={pathName} className="w-screen h-screen bg-gradient-to-b from-blue-100 to-red-100">
                <motion.div className='rounded-b-[100px] z-40'
                animate={{height:"0vh"}}
                exit={{height:"140vh"}}
                transition={{duration:0.5, ease: "easeInOut"}}
                />
                <div className="h-24"><NavBar />
                </div >
               {children}
            </div>
        </AnimatePresence>
    );
};

export default TransitionProvider;