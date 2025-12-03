import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';

export default function Lightbox({ image, onClose }) {
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [onClose]);

    if (!image) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="kr-lightbox-overlay"
                onClick={onClose}
            >
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    className="kr-lightbox-content"
                    onClick={(e) => e.stopPropagation()}
                >
                    <button className="kr-lightbox-close" onClick={onClose}>
                        <FaTimes />
                    </button>
                    <img src={image.src} alt={image.alt} className="kr-lightbox-img" />
                    <p className="kr-lightbox-caption">{image.alt}</p>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}
