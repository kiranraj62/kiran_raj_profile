import React from 'react';
import { motion } from 'framer-motion';
import '../styles/kiranRaj.css';

export default function LoadingScreen() {
    return (
        <motion.div
            className="kr-loading-screen"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
                className="kr-loading-content"
            >
                <h1 className="kr-loading-text">KR</h1>
                <div className="kr-loading-bar">
                    <motion.div
                        className="kr-loading-progress"
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 2 }}
                    />
                </div>
            </motion.div>
        </motion.div>
    );
}
