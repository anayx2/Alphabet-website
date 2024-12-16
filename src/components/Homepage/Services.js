import React, { useEffect, useRef } from "react";

const Services = () => {
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
  return (
    <>
      <section className="section">
        <div data-anim-trigger="" className="container">
          <div className="card__container">
            <div className="columns mod--card-head is-services">
              <div className="columns__col mod--card-head">
                <h2 className="heading-1">
                  OUR <br />
                  SERVICES
                </h2>
              </div>
              <div className="columns__col mod--card-head">
                {/* <div className="service__video-wrap">
                  <div
                    data-videoask-preview=""
                    className="service__video pointer-events-off"
                  ></div>
                  <div
                    data-videoask-open=""
                    data-hover=""
                    data-w-id="25981dc4-e73c-ba99-f31d-e8389d0580f6"
                    className="button-play mod--services"
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
                </div> */}
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
                        // style="
                        //     background-image: url(https://www.halo-lab.com/'https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/656ed72055fc2c14fdb5141a_small-Showreel-poster-00001.jpg');
                        //   "
                        style={{
                          backgroundImage:
                            "url(https://www.halo-lab.com/'https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/656ed72055fc2c14fdb5141a_small-Showreel-poster-00001.jpg')",
                        }}
                        // muted=""
                        // playsinline=""
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
            <img
              src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/648c756274d4a4a4f5eaa04b_services-video_mobile.webp"
              loading="lazy"
              sizes="100vw"
              srcset="
                  https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/648c756274d4a4a4f5eaa04b_services-video_mobile-p-500.webp 500w,
                  https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/648c756274d4a4a4f5eaa04b_services-video_mobile.webp       576w
                "
              alt="services video"
              className="services__video-mob"
            />
            <ul role="list" className="services__list w-list-unstyled">
              <li data-anim-delay="300" className="services__item anim">
                <a
                  data-hover="prevent-responsive"
                  href="/services/product-research.html"
                  className="services__block w-inline-block"
                >
                  <div className="services__icon-wrap">
                    <img
                      src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/64f852beac4d6ff134432f2b_icon-services-research.svg"
                      loading="eager"
                      alt="services research icon "
                      className="icon-service"
                    />
                    <div
                      data-hover-elem=""
                      className="button-service hide-tablet"
                    >
                      <div
                        data-hover-elem=""
                        className="button__icon-anim is-diagonal-top active"
                      >
                        <div
                          data-hover-elem=""
                          className="icon-regular is-size-20-tablet w-embed"
                        >
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentcolor"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M6 18L18 6"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M9 6H18V15"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </div>
                        <div
                          data-hover-elem=""
                          className="icon-regular is-absolute is-diagonal-top is-size-20-tablet w-embed"
                        >
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentcolor"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M6 18L18 6"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M9 6H18V15"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
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
                    id="w-node-_3752c5f3-4eab-8241-b2c6-3aa2b94ade88-4c4d9b29"
                    className="services__text-wrap"
                  >
                    <div className="services__title-wrap">
                      <h3 className="services__title">Discovery</h3>
                      <div className="overflow-hidden hide">
                        <div
                          data-hover-elem=""
                          className="services__soon active"
                        >
                          <span className="services__soon-span">COMING </span>
                          SOON
                        </div>
                      </div>
                    </div>
                    <p className="services__text">
                      To lay a solid foundation for the creative process that
                      follows, we begin our journey with the discovery phase.
                    </p>
                  </div>
                  <div
                    data-hover-elem=""
                    className="button-service hide-desktop hide-mobile-portrait"
                  >
                    <div
                      data-hover-elem=""
                      className="button__icon-anim is-diagonal-top active"
                    >
                      <div
                        data-hover-elem=""
                        className="icon-regular is-size-20-tablet w-embed"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentcolor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6 18L18 6"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M9 6H18V15"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                      <div
                        data-hover-elem=""
                        className="icon-regular is-absolute is-diagonal-top is-size-20-tablet w-embed"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentcolor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6 18L18 6"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M9 6H18V15"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                    <div
                      data-hover-elem=""
                      className="button__bg bg-color-black"
                    ></div>
                  </div>
                </a>
              </li>
              <li data-anim-delay="400" className="services__item anim">
                <a
                  data-hover="prevent-responsive"
                  href="/services/design.html"
                  className="services__block w-inline-block"
                >
                  <div className="services__icon-wrap">
                    <img
                      src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/640744d0e7b29de6f1a29aee_icon-services-design.svg"
                      loading="eager"
                      alt="services design icon"
                      className="icon-service"
                    />
                    <div
                      data-hover-elem=""
                      className="button-service hide-tablet"
                    >
                      <div
                        data-hover-elem=""
                        className="button__icon-anim is-diagonal-top active"
                      >
                        <div
                          data-hover-elem=""
                          className="icon-regular is-size-20-tablet w-embed"
                        >
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentcolor"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M6 18L18 6"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M9 6H18V15"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </div>
                        <div
                          data-hover-elem=""
                          className="icon-regular is-absolute is-diagonal-top is-size-20-tablet w-embed"
                        >
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentcolor"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M6 18L18 6"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M9 6H18V15"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </div>
                      </div>
                      <div
                        data-hover-elem=""
                        className="button__bg bg-color-black"
                      ></div>
                    </div>
                  </div>
                  <div className="services__text-wrap">
                    <h3 className="services__title">Design</h3>
                    <p className="services__text">
                      By putting users&#x27; needs at the forefront, we tell a
                      unique story of your company, juggling with fancy visual
                      elements.
                    </p>
                  </div>
                  <div
                    data-hover-elem=""
                    className="button-service hide-desktop hide-mobile-portrait"
                  >
                    <div
                      data-hover-elem=""
                      className="button__icon-anim is-diagonal-top active"
                    >
                      <div
                        data-hover-elem=""
                        className="icon-regular is-size-20-tablet w-embed"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentcolor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6 18L18 6"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M9 6H18V15"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                      <div
                        data-hover-elem=""
                        className="icon-regular is-absolute is-diagonal-top is-size-20-tablet w-embed"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentcolor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6 18L18 6"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M9 6H18V15"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                    <div
                      data-hover-elem=""
                      className="button__bg bg-color-black"
                    ></div>
                  </div>
                </a>
              </li>
              <li data-anim-delay="500" className="services__item anim">
                <a
                  data-hover="prevent-responsive"
                  href="/services/development.html"
                  className="services__block w-inline-block"
                >
                  <div className="services__icon-wrap">
                    <img
                      src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6449421486eae3cf4d387564_development-Illustration.svg"
                      loading="eager"
                      alt="development Illustration icon"
                      className="icon-service"
                    />
                    <div
                      data-hover-elem=""
                      className="button-service hide-tablet"
                    >
                      <div
                        data-hover-elem=""
                        className="button__icon-anim is-diagonal-top active"
                      >
                        <div
                          data-hover-elem=""
                          className="icon-regular is-size-20-tablet w-embed"
                        >
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentcolor"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M6 18L18 6"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M9 6H18V15"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </div>
                        <div
                          data-hover-elem=""
                          className="icon-regular is-absolute is-diagonal-top is-size-20-tablet w-embed"
                        >
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentcolor"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M6 18L18 6"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M9 6H18V15"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </div>
                      </div>
                      <div
                        data-hover-elem=""
                        className="button__bg bg-color-black"
                      ></div>
                    </div>
                  </div>
                  <div className="services__text-wrap">
                    <h3 className="services__title">Development</h3>
                    <p className="services__text">
                      The motto of our development process is creating digital
                      experiences that are both appealing and functional.
                    </p>
                  </div>
                  <div
                    data-hover-elem=""
                    className="button-service hide-desktop hide-mobile-portrait"
                  >
                    <div
                      data-hover-elem=""
                      className="button__icon-anim is-diagonal-top active"
                    >
                      <div
                        data-hover-elem=""
                        className="icon-regular is-size-20-tablet w-embed"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentcolor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6 18L18 6"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M9 6H18V15"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                      <div
                        data-hover-elem=""
                        className="icon-regular is-absolute is-diagonal-top is-size-20-tablet w-embed"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentcolor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6 18L18 6"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M9 6H18V15"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                    <div
                      data-hover-elem=""
                      className="button__bg bg-color-black"
                    ></div>
                  </div>
                </a>
              </li>
              <li data-anim-delay="600" className="services__item anim">
                <a
                  data-hover="prevent-responsive"
                  href="/services/marketing.html"
                  className="services__block w-inline-block"
                >
                  <div className="services__icon-wrap">
                    <img
                      src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6449410877257b6dcfa0ec88_marketing-illustration.svg"
                      loading="eager"
                      alt="marketing illustration icon"
                      className="icon-service"
                    />
                    <div
                      data-hover-elem=""
                      className="button-service hide-tablet"
                    >
                      <div
                        data-hover-elem=""
                        className="button__icon-anim is-diagonal-top active"
                      >
                        <div
                          data-hover-elem=""
                          className="icon-regular is-size-20-tablet w-embed"
                        >
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentcolor"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M6 18L18 6"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M9 6H18V15"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </div>
                        <div
                          data-hover-elem=""
                          className="icon-regular is-absolute is-diagonal-top is-size-20-tablet w-embed"
                        >
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentcolor"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M6 18L18 6"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M9 6H18V15"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </div>
                      </div>
                      <div
                        data-hover-elem=""
                        className="button__bg bg-color-black"
                      ></div>
                    </div>
                  </div>
                  <div className="services__text-wrap">
                    <h3 className="services__title">Marketing</h3>
                    <p className="services__text">
                      With various tools, our experts can help you expand the
                      target audience and increase brand awareness.
                    </p>
                  </div>
                  <div
                    data-hover-elem=""
                    className="button-service hide-desktop hide-mobile-portrait"
                  >
                    <div
                      data-hover-elem=""
                      className="button__icon-anim is-diagonal-top active"
                    >
                      <div
                        data-hover-elem=""
                        className="icon-regular is-size-20-tablet w-embed"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentcolor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6 18L18 6"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M9 6H18V15"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                      <div
                        data-hover-elem=""
                        className="icon-regular is-absolute is-diagonal-top is-size-20-tablet w-embed"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentcolor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6 18L18 6"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M9 6H18V15"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                    <div
                      data-hover-elem=""
                      className="button__bg bg-color-black"
                    ></div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
