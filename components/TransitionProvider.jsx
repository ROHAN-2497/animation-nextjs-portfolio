"use client"
import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import NavBar from './NavBar';

const TransitionProvider = ({children}) => {
    return (
        <AnimatePresence>
            <div className="w-screen h-screen bg-gradient-to-b from-blue-100 to-red-100">
                <motion.div/>
                <div className="h-24"><NavBar />
                </div >
               {children}
            </div>
        </AnimatePresence>
    );
};

export default TransitionProvider;