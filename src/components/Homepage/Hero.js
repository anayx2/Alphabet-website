"use client";
import React, { useEffect, useRef } from "react";

const Hero = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const playVideo = () => {
      if (videoRef.current) {
        videoRef.current
          .play()
          .catch((err) => console.log("Autoplay failed:", err));
      }
    };

    playVideo();
  }, []);

  useEffect(() => {
    const words = document.querySelectorAll(".h1__word");
    const letters = document.querySelectorAll(".h1__letter");
    const images = document.querySelectorAll(".home__image");

    let index = 0;

    const animate = () => {
      words.forEach((word, i) => {
        // Toggle the active class for words and corresponding images
        if (i === index) {
          word.querySelectorAll(".h1__letter").forEach((letter) => {
            letter.classList.add("active");
          });
          images[i]?.classList.add("active");
        } else {
          word.querySelectorAll(".h1__letter").forEach((letter) => {
            letter.classList.remove("active", "done");
          });
          images[i]?.classList.remove("active", "done");
        }
      });

      setTimeout(() => {
        words[index].querySelectorAll(".h1__letter").forEach((letter) => {
          letter.classList.add("done");
        });
        images[index]?.classList.add("done");

        index = (index + 1) % words.length; // Move to the next word
      }, 1000); // Match this with your CSS transition duration
    };

    const interval = setInterval(animate, 2000); // Adjust the interval
    animate(); // Trigger the first animation immediately

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <>
      <section className="section mod--hero">
        <div className="container">
          <div data-anim-trigger="load" className="columns mod--home">
            <div
              data-anim-delay=""
              id="w-node-fd23b61c-86bf-2ca9-3ba5-c59ebf089708-4c4d9b29"
              className="columns__col mod--home is-1 anim"
            >
              <div className="home__container">
                <h1 className="heading-1 mod--home">
                  <span>Let's build THE NEXT</span>
                  <br />
                  <span className="w-auto">
                    <span data-h1-words="" className="h1__words">
                      <strong className="h1__word">
                        <em className="h1__letter active">s</em>
                        <em className="h1__letter active">m</em>
                        <em className="h1__letter active">a</em>
                        <em className="h1__letter active">r</em>
                        <em className="h1__letter active">t</em>
                      </strong>
                      <strong className="h1__word">
                        <em className="h1__letter">b</em>
                        <em className="h1__letter">i</em>
                        <em className="h1__letter">g</em>
                      </strong>
                      <strong className="h1__word">
                        <em className="h1__letter">t</em>
                        <em className="h1__letter">e</em>
                        <em className="h1__letter">c</em>
                        <em className="h1__letter">h</em>
                      </strong>
                      <strong className="h1__word">
                        <em className="h1__letter">b</em>
                        <em className="h1__letter">u</em>
                        <em className="h1__letter">z</em>
                        <em className="h1__letter">z</em>
                      </strong>
                      <strong className="h1__word">
                        <em className="h1__letter active done">c</em>
                        <em className="h1__letter active done">o</em>
                        <em className="h1__letter active done">o</em>
                        <em className="h1__letter active done">l</em>
                      </strong>
                    </span>
                  </span>
                  <span className="w-auto">
                    <span className="h1__thing">THING</span> <br />
                  </span>
                </h1>
                <div data-home-images="" className="home__images">
                  <img
                    src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/64783ebdb52cf8fbc2c201f4_home-hero_01.webp"
                    loading="eager"
                    width="270"
                    height="270"
                    alt="home hero smart thing"
                    srcset="
                        https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/64783ebdb52cf8fbc2c201f4_home-hero_01-p-500.webp 500w,
                        https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/64783ebdb52cf8fbc2c201f4_home-hero_01.webp       540w
                      "
                    sizes="(max-width: 479px) 100vw, (max-width: 767px) 22vw, 19vw"
                    className="home__image active"
                  />
                  <img
                    src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/64783ebdb52cf8fbc2c201fa_home-hero_02.webp"
                    loading="eager"
                    width="270"
                    height="270"
                    alt="home hero big thing"
                    srcset="
                        https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/64783ebdb52cf8fbc2c201fa_home-hero_02-p-500.webp 500w,
                        https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/64783ebdb52cf8fbc2c201fa_home-hero_02.webp       540w
                      "
                    sizes="100vw"
                    className="home__image"
                  />
                  <img
                    src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/64783ebdb52cf8fbc2c201fd_home-hero_03.webp"
                    loading="eager"
                    width="270"
                    height="270"
                    alt="home hero tech thing"
                    srcset="
                        https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/64783ebdb52cf8fbc2c201fd_home-hero_03-p-500.webp 500w,
                        https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/64783ebdb52cf8fbc2c201fd_home-hero_03.webp       540w
                      "
                    sizes="100vw"
                    className="home__image"
                  />
                  <img
                    src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/64783ebdb52cf8fbc2c201f7_home-hero_04.webp"
                    loading="eager"
                    width="270"
                    height="270"
                    alt="home hero buzz thing"
                    srcset="
                        https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/64783ebdb52cf8fbc2c201f7_home-hero_04-p-500.webp 500w,
                        https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/64783ebdb52cf8fbc2c201f7_home-hero_04.webp       540w
                      "
                    sizes="100vw"
                    className="home__image"
                  />
                  <img
                    src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/64783ebdb52cf8fbc2c20200_home-hero_05.webp"
                    loading="eager"
                    width="270"
                    height="270"
                    alt="home hero cool thing"
                    srcset="
                        https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/64783ebdb52cf8fbc2c20200_home-hero_05-p-500.webp 500w,
                        https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/64783ebdb52cf8fbc2c20200_home-hero_05.webp       540w
                      "
                    sizes="100vw"
                    className="home__image active done"
                  />
                </div>
                <div className="home__cta">
                  <div className="home__cta-item mod--10y">
                    <div className="home__cta-10y">10Y</div>
                    <div className="home__cta-text">
                      OF Design-Driven <br />
                      PRODUCT DEVELOPMENT
                    </div>
                  </div>
                  <div className="home__cta-item">
                    <a
                      href="index.html#discuss"
                      data-hover=""
                      className="button-flex w-inline-block"
                    >
                      <img
                        src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6597f240efa939b246a117ea_icon-button-lightning_white.svg"
                        loading="eager"
                        width="40"
                        height="40"
                        alt=""
                        data-hover-elem=""
                        className="icon-scale is-1"
                      />
                      <div className="button is-small-simple bg-color-yellow">
                        <div className="button__overflow">
                          <div data-hover-elem="" className="button__texts">
                            <div className="button__text">Let’s TALK</div>
                            <div className="button__text is-absolute">
                              Let's TALK
                            </div>
                          </div>
                        </div>
                      </div>
                      <img
                        src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6597f240efa939b246a117ea_icon-button-lightning_white.svg"
                        loading="eager"
                        width="40"
                        height="40"
                        alt=""
                        data-hover-elem=""
                        className="icon-scale is-2"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-anim-delay="100"
              id="w-node-_35c93d8a-c859-154f-3a6b-245b194dd4bb-4c4d9b29"
              className="columns__col mod--home anim"
            >
              <div className="home__slider">
                <div data-swiper="home" className="swiper mod--home">
                  <div className="swiper-wrapper mod--home">
                    <div className="swiper-slide mod--home">
                      <div className="home__video w-embed">
                        <video
                          //   style="width: 100%; height: 100%; object-fit: cover"
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                          autoPlay
                          muted
                          loop
                          playsInline
                          preload="auto"
                        >
                          <source
                            src="https://d3vlq52qrgdnc2.cloudfront.net/home-story-1.mp4"
                            type="video/mp4"
                          />
                        </video>
                      </div>
                    </div>
                    <div className="swiper-slide mod--home">
                      <div className="home__video w-embed">
                        <video
                          //   style="width: 100%; height: 100%; object-fit: cover"
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                          autoPlay
                          muted
                          loop
                          playsInline
                          preload="auto"
                        >
                          <source
                            src="https://d3vlq52qrgdnc2.cloudfront.net/home-story-2.mp4"
                            type="video/mp4"
                          />
                        </video>
                      </div>
                    </div>
                    <div className="swiper-slide mod--home">
                      <div className="home__video w-embed">
                        <video
                          //   style="width: 100%; height: 100%; object-fit: cover"
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                          autoPlay
                          muted
                          loop
                          playsInline
                          preload="auto"
                        >
                          <source
                            src="https://d3vlq52qrgdnc2.cloudfront.net/home-story-3.mp4"
                            type="video/mp4"
                          />
                        </video>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="home__stories">
                  <div data-stories-lines="" className="home__stories-top">
                    <div className="home__stories-line-wrap">
                      <div className="home__stories-line">
                        <div
                          data-stories-fill=""
                          className="home__stories-line-fill"
                        ></div>
                      </div>
                    </div>
                    <div className="home__stories-line-wrap">
                      <div className="home__stories-line">
                        <div
                          data-stories-fill=""
                          className="home__stories-line-fill"
                        ></div>
                      </div>
                    </div>
                    <div className="home__stories-line-wrap">
                      <div className="home__stories-line">
                        <div
                          data-stories-fill=""
                          className="home__stories-line-fill"
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div className="home__stories-bottom">
                    <img
                      src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6545115054d0cddcd30b1271_stories-interface-author.svg"
                      loading="eager"
                      alt=""
                      className="home__stories-author"
                    />
                    <img
                      src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/65451150eeedc8ea44d6a936_stories-interface-dots.svg"
                      loading="eager"
                      alt=""
                      className="home__stories-menu"
                    />
                  </div>
                </div>
                <div
                  data-swiper-prev="home"
                  className="home__stories-nav"
                ></div>
                <div
                  data-swiper-next="home"
                  className="home__stories-nav is-next"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
