import React from "react";
import "../styles/kiranRaj.css";

export default function KiranRajPage() {
  return (
    <div className="kr-page">
      {/* HERO (Page 1) */}
      <section className="kr-hero">
        <div className="kr-hero-bg" />
        <div className="kr-hero-overlay" />
        <div className="kr-hero-content">
          <div className="kr-hero-text">
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
          </div>

          <div className="kr-hero-card">
            <img
              src="/images/hero-portrait.png"
              alt="Kiran Raj performing guitar"
              className="kr-hero-card-img"
            />
          </div>
        </div>
      </section>

      {/* SECTION 2 (Page 2) */}
      <section className="kr-section2">
        <div className="kr-section2-img kr-section2-img-left">
          <img src="/images/section2-left.png" alt="Live performance placeholder" />
        </div>

        <div className="kr-section2-text">
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
        </div>

        <div className="kr-section2-img kr-section2-img-right">
          <img src="/images/section2-right.png" alt="Guitar close-up placeholder" />
        </div>
      </section>

            {/* SECTION 3 (Page 3) */}
      <section className="kr-section3">
        <div className="kr-section3-top">
          <img
            src="/images/section3-top.png"
            alt="Stage shot placeholder"
            className="kr-section3-img"
          />
          <div className="kr-section3-text-overlay">
            <p>
              His international performances have taken him to stages in Kuwait and
              Abu Dhabi, where he continues to share his craft with global audiences.
              A defining milestone in Kiran’s journey came when his guitar performance
              was personally appreciated by renowned Indian composer Anirudh
              Ravichander, a moment that affirmed the emotional power and reach of his
              music.
            </p>
          </div>
        </div>

        <div className="kr-section3-bottom">
          <img
            src="/images/section3-bottom.png"
            alt="Band shot placeholder"
            className="kr-section3-img"
          />
          <div className="kr-section3-text-overlay">
            <p>
              With a deep commitment to musical growth and collaboration, Kiran Raj
              continues to shape his path in the independent and mainstream music
              scenes. Whether on stage with his band or behind the console producing,
              his focus remains clear—creating honest, resonant music that moves
              people and leaves a lasting impression.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}