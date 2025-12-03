import React from 'react';
import { FaInstagram, FaYoutube, FaFacebook, FaSpotify } from 'react-icons/fa';
import '../styles/kiranRaj.css';

export default function Footer() {
    return (
        <footer className="kr-footer">
            <div className="kr-footer-content">
                <div className="kr-footer-brand">
                    <h3>Kiran Raj</h3>
                    <p>Guitarist | Music Producer | Director</p>
                </div>

                <div className="kr-footer-socials">
                    <a href="#" aria-label="Instagram"><FaInstagram /></a>
                    <a href="#" aria-label="YouTube"><FaYoutube /></a>
                    <a href="#" aria-label="Facebook"><FaFacebook /></a>
                    <a href="#" aria-label="Spotify"><FaSpotify /></a>
                </div>

                <div className="kr-footer-links">
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#gallery">Gallery</a>
                    <a href="#contact">Contact</a>
                </div>
            </div>

            <div className="kr-footer-bottom">
                <p>&copy; {new Date().getFullYear()} Kiran Raj. All rights reserved.</p>
            </div>
        </footer>
    );
}
