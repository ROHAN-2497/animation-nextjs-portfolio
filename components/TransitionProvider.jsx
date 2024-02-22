import { AnimatePresence } from 'framer-motion';
import React from 'react';
import NavBar from './NavBar';

const TransitionProvider = () => {
    return (
        <AnimatePresence>
            <div className="w-screen h-screen bg-gradient-to-b from-blue-100 to-red-100">
                <div className="h-24"><NavBar />
                </div>
                {children}
            </div>
        </AnimatePresence>
    );
};

export default TransitionProvider;