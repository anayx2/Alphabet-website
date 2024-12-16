"use client"
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const OurWork = () => {
  return (
    <>
      <section id="works" className="section">
        <div className="container">
          <div className="card__container mod--works">
            <div className="columns mod--card-head">
              <div className="columns__col mod--works-head is-1">
                <h2 className="heading-1">
                  Our <br />
                  works
                </h2>
              </div>
              <div className="columns__col mod--works-head is-2">
                <p className="works__subheading">
                  Business challenges are tough, but we have a proven record of
                  elevating our partners to their next and best selves.
                </p>
                <div className="works__video-wrap">
                  <div className="works__video">
                    <div
                      data-poster-url="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/656ed72055fc2c14fdb5141a_small-Showreel-poster-00001.jpg"
                      data-video-urls="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/656ed72055fc2c14fdb5141a_small-Showreel-transcode.mp4,https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/656ed72055fc2c14fdb5141a_small-Showreel-transcode.webm"
                      data-autoplay="true"
                      data-loop="true"
                      data-wf-ignore="true"
                      className="works__video w-background-video w-background-video-atom"
                    >
                      <video
                        id="37531b92-13ac-25f1-4931-730d78218922-video"
                        autoPlay
                        loop
                        muted
                        playsInline
                        loading="lazy"
                        style={{
                          backgroundImage:
                            "url(https://www.halo-lab.com/'https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/656ed72055fc2c14fdb5141a_small-Showreel-poster-00001.jpg')",
                        }}
                        data-wf-ignore="true"
                        data-object-fit="cover"
                      >
                        <source
                          src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/656ed72055fc2c14fdb5141a_small-Showreel-transcode.mp4"
                          data-wf-ignore="true"
                        />
                        <source
                          src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/656ed72055fc2c14fdb5141a_small-Showreel-transcode.webm"
                          data-wf-ignore="true"
                        />
                      </video>
                    </div>
                    <div
                      data-remodal-target="video"
                      className="works__video-play"
                    >
                      <div className="button-play__icon mod--card-video w-embed">
                        <svg
                          aria-hidden="true"
                          role="img"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 16 16"
                          width="100%"
                          height="100%"
                        >
                          <path d="M13.9 7.35a.7.7 0 0 1 0 1.213l-8.4 4.85a.7.7 0 0 1-1.05-.606v-9.7a.7.7 0 0 1 1.05-.606l8.4 4.85Z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div
                    data-remodal-target="video"
                    data-hover=""
                    data-w-id="e8a655e3-2b51-e7a1-007c-d8d7eceaa93e"
                    className="button-play mod--works"
                  >
                    <div
                      data-hover-elem=""
                      className="button__bg mod--services"
                    ></div>
                    <div className="button-play__icon mod--card-video w-embed">
                      <svg
                        aria-hidden="true"
                        role="img"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        width="100%"
                        height="100%"
                      >
                        <path d="M13.9 7.35a.7.7 0 0 1 0 1.213l-8.4 4.85a.7.7 0 0 1-1.05-.606v-9.7a.7.7 0 0 1 1.05-.606l8.4 4.85Z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Swiper
              modules={[Navigation, Pagination]}
              className="swiper mod--works"
              navigation={{
                prevEl: '[data-swiper-prev="works"]',
                nextEl: '[data-swiper-next="works"]',
              }}
              pagination={{
                el: '[data-swiper-pagination="works"]',
                clickable: true,
                renderBullet: function (index, className) {
                  return (
                    '<div class="' +
                    className +
                    ' swiper-pagination__item is-grow"></div>'
                  );
                },
              }}
            >
              <SwiperSlide className="swiper-slide mod--works">
                <div className="columns mod--works">
                  <div className="columns__col mod--works is--1">
                    <div className="works__info">
                      <div className="text-size-14 text-style-allcaps mod--works-cat">
                        HEALTHCARE
                      </div>
                      <a
                        data-hover=""
                        href="/project/kinetik.html"
                        className="w-inline-block"
                      >
                        <h3 className="heading-5 mod--works">
                          Kinetik Platform with over 3500+ Integrated Providers
                        </h3>
                      </a>
                      <p className="opacity-70">
                        We helped Kinetik in developing an app and a convenient
                        analytics dashboard — by the end of 2022, they raised
                        over $20M in funding.
                      </p>
                    </div>
                  </div>
                  <div
                    data-mask="works"
                    className="columns__col mod--works is--2"
                  >
                    <a
                      href="/project/kinetik.html"
                      className="works__video-link w-inline-block"
                    >
                      <div className="works__video-case w-embed">
                        <video
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                          autoPlay
                          loop
                          muted
                          playsInline
                          loading="lazy"
                        >
                          <source
                            src="https://d3vlq52qrgdnc2.cloudfront.net/bg-project-kinetik.mp4"
                            type="video/mp4"
                          />
                        </video>
                      </div>
                    </a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide mod--works">
                <div className="columns mod--works">
                  <div className="columns__col mod--works is--1">
                    <div className="works__info">
                      <div className="text-size-14 text-style-allcaps mod--works-cat">
                        E-COMMERCE
                      </div>
                      <a
                        data-hover=""
                        href="/project/raven.html"
                        className="w-inline-block"
                      >
                        <h3 className="heading-5 mod--works">
                          The Leading Brand for Custom Esports Clothing Design
                        </h3>
                      </a>
                      <p className="opacity-70">
                        Alphabet Technology crafted a 3D Builder for Raven from
                        scratch, helping them dominate the esports market with a
                        custom ecommerce product.
                      </p>
                    </div>
                  </div>
                  <div
                    data-mask="works"
                    className="columns__col mod--works is--2"
                  >
                    <a
                      href="/project/raven.html"
                      className="works__video-link w-inline-block"
                    >
                      <div className="works__video-case w-embed">
                        <video
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                          loop
                          muted
                          playsInline
                          loading="lazy"
                        >
                          <source
                            src="https://d3vlq52qrgdnc2.cloudfront.net/bg-project-raven-v3.mp4"
                            type="video/mp4"
                          />
                        </video>
                      </div>
                    </a>
                  </div>
                </div>
              </SwiperSlide>
              {/* Add more SwiperSlide components for the remaining slides */}
            </Swiper>
            <div className="swiper-nav mod--works">
              <div
                data-hover-elem=""
                data-swiper-prev="works"
                data-hover="prevent-responsive"
                className="swiper-nav__arrow is-left mod--works"
              >
                <div data-hover-elem="" className="button__icon-anim">
                  <div className="icon-regular is-size-fixed w-embed">
                    <svg
                      aria-hidden="true"
                      role="img"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="100%"
                      height="100%"
                    >
                      <path d="M9.293 5.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L14.586 12 9.293 6.707a1 1 0 0 1 0-1.414Z" />
                    </svg>
                  </div>
                  <div className="icon-regular is-absolute is-size-fixed w-embed">
                    <svg
                      aria-hidden="true"
                      role="img"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="100%"
                      height="100%"
                    >
                      <path d="M9.293 5.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L14.586 12 9.293 6.707a1 1 0 0 1 0-1.414Z" />
                    </svg>
                  </div>
                </div>
                <div
                  data-hover-elem=""
                  className="button__bg bg-color-black"
                ></div>
              </div>
              <div
                data-hover-elem=""
                data-swiper-next="works"
                data-hover="prevent-responsive"
                className="swiper-nav__arrow mod--works"
              >
                <div data-hover-elem="" className="button__icon-anim">
                  <div className="icon-regular is-size-fixed w-embed">
                    <svg
                      aria-hidden="true"
                      role="img"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="100%"
                      height="100%"
                    >
                      <path d="M9.293 5.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L14.586 12 9.293 6.707a1 1 0 0 1 0-1.414Z" />
                    </svg>
                  </div>
                  <div className="icon-regular is-absolute is-size-fixed w-embed">
                    <svg
                      aria-hidden="true"
                      role="img"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="100%"
                      height="100%"
                    >
                      <path d="M9.293 5.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L14.586 12 9.293 6.707a1 1 0 0 1 0-1.414Z" />
                    </svg>
                  </div>
                </div>
                <div
                  data-hover-elem=""
                  className="button__bg bg-color-black"
                ></div>
              </div>
            </div>
            <div
              data-swiper-pagination-style="load"
              data-swiper-pagination="works"
              className="swiper-pagin mod--works"
            >
              {/* Swiper will populate this */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurWork;
