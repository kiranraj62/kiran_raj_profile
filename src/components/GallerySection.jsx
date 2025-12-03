import React, { useState } from 'react';
import FadeIn from './FadeIn';
import Lightbox from './Lightbox';
import '../styles/kiranRaj.css';

import section3Top from '../assets/images/section3-top.png';
import section3Bottom from '../assets/images/section3-bottom.png';
import concertBlueLights from '../assets/images/concert-blue-lights.jpg';
import concertPurpleSmile from '../assets/images/concert-purple-smile.jpg';
import concertBwSolo from '../assets/images/concert-bw-solo.jpg';
import concertGreenVibes from '../assets/images/concert-green-vibes.jpg';
import concertRedLights from '../assets/images/concert-red-lights.jpg';
import concertWhiteLights from '../assets/images/concert-white-lights.jpg';
import concertOrangeBg from '../assets/images/concert-orange-bg.jpg';

export default function GallerySection() {
    const [selectedImage, setSelectedImage] = useState(null);

    // To add more images:
    // 1. Place your image files in the 'public/images' folder.
    // 2. Add a new object to this array with the 'src' and 'alt' text.
    // 3. Optional: Add a 'link' property to link to an Instagram post or Reel.
    const galleryImages = [
        { id: 1, src: section3Top, alt: 'Stage performance' },
        { id: 2, src: section3Bottom, alt: 'Band performance' },
        { id: 3, src: concertBlueLights, alt: 'Live Concert with Blue Lights' },
        { id: 4, src: concertPurpleSmile, alt: 'Joyful Performance' },
        { id: 5, src: concertBwSolo, alt: 'Guitar Solo in B&W' },
        { id: 6, src: concertGreenVibes, alt: 'Green Stage Atmosphere' },
        { id: 9, src: concertRedLights, alt: 'Intense Red Lighting' },
        { id: 10, src: concertWhiteLights, alt: 'Atmospheric White Lights' },
        { id: 11, src: concertOrangeBg, alt: 'Guitar Solo with Orange Backdrop' },
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
