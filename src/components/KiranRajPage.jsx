import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import MediaSection from "./MediaSection";
import ContactSection from "./ContactSection";
import GallerySection from "./GallerySection";
import "../styles/kiranRaj.css";

import FadeIn from "./FadeIn";
import CustomCursor from "./CustomCursor";

import heroPortrait from "../assets/images/hero-portrait.png";
import section2Left from "../assets/images/section2-left.png";
import section2Right from "../assets/images/section2-right.png";

import { motion, useScroll, useTransform } from "framer-motion";

export default function KiranRajPage() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  return (
    <div className="kr-page">
      <CustomCursor />
      <Navbar />

      {/* HERO (Page 1) */}
      <section className="kr-hero" id="home">
        <motion.div className="kr-hero-bg" style={{ y }} />
        <div className="kr-hero-overlay" />
        <div className="kr-hero-content">
          <FadeIn className="kr-hero-text" delay={0.2}>
            <h1 className="kr-name">Kiran Raj</h1>
            <p className="kr-tagline">
              An accomplished Indian Guitarist,
              <br />
              Music Producer &amp; Music Director
            </p>
            <p className="kr-body">
              Kiran Raj is a highly versatile and expressive Indian guitarist, music
              producer, and music director, best known for his captivating electric
              guitar performances and immersive sound design. With over 13 years of
              experience, Kiran has established himself as a dynamic presence in both
              live and studio settings, performing across South India and
              internationally.
            </p>
            <p className="kr-body">
              He currently serves as the lead guitarist of the legendary band URUMI,
              where his signature tone and melodic intuition bring depth and energy to
              the group’s sound. Kiran’s multi-instrumental skills include mandolin,
              guitarlele, bass guitar, and acoustic guitar, though it is the electric
              guitar that remains at the heart of his musical identity.
            </p>
          </FadeIn>

          <FadeIn className="kr-hero-card" delay={0.4} direction="left">
            <img
              src={section2Left}
              alt="Kiran Raj performing guitar"
              className="kr-hero-card-img"
            />
          </FadeIn>
        </div>
      </section>

      {/* SECTION 2 (Page 2) */}
      <section className="kr-section2" id="about">
        <FadeIn className="kr-section2-img kr-section2-img-left" direction="right">
          <img src={heroPortrait} alt="Live performance placeholder" />
        </FadeIn>

        <FadeIn className="kr-section2-text" delay={0.2}>
          <p>
            Kiran has contributed to numerous music projects across the Malayalam,
            Tamil, and Sri Lankan industries. His work as a music producer spans
            independent albums, collaborations, and live acts, blending modern
            production with organic instrumentation. He made his debut as a music
            director in the project <strong>Dhyuthi</strong>, showcasing his
            storytelling through sound and establishing himself as a composer with
            emotional and creative depth.
          </p>
          <p>
            Over the years, Kiran has had the privilege of performing with celebrated
            Indian musicians, including Jassie Gift, Jyotsna Radhakrishnan, and Vidhu
            Prathap, both in India and abroad.
          </p>
        </FadeIn>

        <FadeIn className="kr-section2-img kr-section2-img-right" direction="left">
          <img src={section2Right} alt="Guitar close-up placeholder" />
        </FadeIn>
      </section>

      {/* SECTION 3 (Page 3) */}
      <GallerySection />

      <MediaSection />

      <ContactSection />

      <Footer />
    </div>
  );
}