import React, { useState } from 'react';
import FadeIn from './FadeIn';
import Lightbox from './Lightbox';
import '../styles/kiranRaj.css';

export default function GallerySection() {
    const [selectedImage, setSelectedImage] = useState(null);

    // To add more images:
    // 1. Place your image files in the 'public/images' folder.
    // 2. Add a new object to this array with the 'src' and 'alt' text.
    // 3. Optional: Add a 'link' property to link to an Instagram post or Reel.
    const galleryImages = [
        { id: 1, src: 'images/section3-top.png', alt: 'Stage performance' },
        { id: 2, src: 'images/section3-bottom.png', alt: 'Band performance' },
        { id: 3, src: 'images/concert-blue-lights.jpg', alt: 'Live Concert with Blue Lights' },
        { id: 4, src: 'images/concert-purple-smile.jpg', alt: 'Joyful Performance' },
        { id: 5, src: 'images/concert-bw-solo.jpg', alt: 'Guitar Solo in B&W' },
        { id: 6, src: 'images/concert-green-vibes.jpg', alt: 'Green Stage Atmosphere' },
        { id: 9, src: 'images/concert-red-lights.jpg', alt: 'Intense Red Lighting' },
        { id: 10, src: 'images/concert-white-lights.jpg', alt: 'Atmospheric White Lights' },
        { id: 11, src: 'images/concert-orange-bg.jpg', alt: 'Guitar Solo with Orange Backdrop' },
    ];

    return (
        <section className="kr-gallery" id="gallery">
            <div className="kr-gallery-container">
                <FadeIn>
                    <h2 className="kr-section-title">Gallery</h2>
                    <p className="kr-section-subtitle">Moments from the stage and studio.</p>
                </FadeIn>

                <div className="kr-gallery-grid">
                    {galleryImages.map((image, index) => (
                        <FadeIn key={image.id} className="kr-gallery-item" delay={index * 0.1}>
                            {image.link ? (
                                <a href={image.link} target="_blank" rel="noopener noreferrer" style={{ display: 'block', width: '100%', height: '100%' }}>
                                    <img src={image.src} alt={image.alt} loading="lazy" />
                                    <div className="kr-gallery-overlay">
                                        <p>{image.alt}</p>
                                        <span style={{ fontSize: '0.8rem', marginTop: '0.5rem', display: 'block' }}>View on Instagram ↗</span>
                                    </div>
                                </a>
                            ) : (
                                <div onClick={() => setSelectedImage(image)} style={{ width: '100%', height: '100%' }}>
                                    <img src={image.src} alt={image.alt} loading="lazy" />
                                    <div className="kr-gallery-overlay">
                                        <p>{image.alt}</p>
                                    </div>
                                </div>
                            )}
                        </FadeIn>
                    ))}
                </div>
            </div>

            {selectedImage && (
                <Lightbox image={selectedImage} onClose={() => setSelectedImage(null)} />
            )}
        </section>
    );
}
