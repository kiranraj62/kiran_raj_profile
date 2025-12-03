import React from 'react';
import FadeIn from './FadeIn';
import '../styles/kiranRaj.css';

export default function MediaSection() {
    const videos = [
        {
            id: 'video1',
            title: 'You can watch Dhyuthi here!',
            url: 'https://www.youtube.com/embed/q8PBuB5FZJk',
            thumbnail: 'https://img.youtube.com/vi/q8PBuB5FZJk/maxresdefault.jpg'
        },
        {
            id: 'video2',
            title: 'MAHR',
            url: 'https://www.youtube.com/embed/al6ds-voEHg',
            thumbnail: 'https://img.youtube.com/vi/al6ds-voEHg/maxresdefault.jpg'
        }
    ];

    return (
        <section className="kr-media" id="media">
            <div className="kr-media-container">
                <FadeIn>
                    <h2 className="kr-section-title">Latest Releases</h2>
                    <p className="kr-section-subtitle">Experience the energy of live music and studio sessions.</p>
                </FadeIn>

                <div className="kr-video-grid">
                    {videos.map((video, index) => (
                        <FadeIn key={video.id} className="kr-video-card" delay={index * 0.2}>
                            <div className="kr-video-wrapper">
                                <iframe
                                    src={video.url}
                                    title={video.title}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                            <h3 className="kr-video-title">{video.title}</h3>
                        </FadeIn>
                    ))}
                </div>

                <FadeIn className="kr-spotify-link" delay={0.4}>
                    <a href="https://open.spotify.com/artist/073IBMNMRasBUk0GxoqKIK?si=Nqg3CzV_TUeKUh9HDsnbiw" target="_blank" rel="noopener noreferrer" className="kr-btn-spotify">Listen on Spotify</a>
                </FadeIn>
            </div>
        </section>
    );
}
