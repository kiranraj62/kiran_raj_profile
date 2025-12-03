import React from 'react';
import { motion } from 'framer-motion';

export default function FadeIn({ children, delay = 0, direction = 'up', className = '' }) {
    const variants = {
        hidden: {
            opacity: 0,
            y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
            x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
        },
        visible: {
            opacity: 1,
            y: 0,
            x: 0,
            transition: {
                duration: 0.8,
                ease: [0.25, 0.25, 0, 1],
                delay: delay,
            },
        },
    };

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={variants}
            className={className}
        >
            {children}
        </motion.div>
    );
}
