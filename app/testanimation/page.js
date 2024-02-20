"use client"
import { motion } from "framer-motion"
import React from 'react';
const variants = {
    variants1: {
        x: 400,
        y: 300,
        opacity: 0.5
    },
    variants2: {
        x: 100,
        y: -300,
        rotation: 90,
    }
}

const TestPage = () => {
    return (
        <div className='h-full flex items-center justify-center'
        >
            < motion.div className='w-96 h-96 bg-red-500 rounded' initial={{ x: -100 }} variants={variants} animate="variants2"
                transition={{ delay: 2, duration: 4 }}></motion.div>
        </div>
    );
};

export default TestPage;