'use client'

import React, { useEffect, useRef } from "react";

const Clients = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;

    if (videoElement) {
      videoElement.play().catch((error) => {
        console.error("Error attempting to play video:", error);
      });
    }
  }, []);
  return (
    <>
      <section className="section">
        <div data-anim-trigger="" className="container overflow-hidden">
          <div className="grid mod--clients">
            <div
              data-clients-block=""
              data-hover=""
              id="w-node-_016ab6d4-70ec-82f0-f47f-64f578ec8f94-78ec8f91"
              className="clients__block-wrap"
            >
              <div data-anim-delay="0" className="clients__block anim">
                <img
                  src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/64c916e3b9f3e40ff0538797_logo-oppo.svg"
                  loading="lazy"
                  width="210"
                  height="58"
                  alt="oppo logo"
                  className="clients__logo"
                />
                <div data-hover-elem="" className="clients__text-wrap active">
                  <div className="clients__text">
                    Designing mobile concepts for a popular brand in electronic
                    products.
                  </div>
                </div>
                <div data-hover-elem="" className="clients__btn">
                  <img
                    src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/64c916e3b9f3e40ff0538797_logo-oppo.svg"
                    loading="lazy"
                    data-hover-elem=""
                    alt="plus icon"
                    className="clients__btn-icon is-plus"
                  />
                  <img
                    src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/64c916e3b9f3e40ff0538797_logo-oppo.svg"
                    loading="lazy"
                    data-hover-elem=""
                    alt="plus icon"
                    className="clients__btn-icon is-minus"
                  />
                  <div data-hover-elem="" className="clients__btn-bg"></div>
                </div>
              </div>
            </div>
            <div
              data-clients-block=""
              data-hover=""
              id="w-node-_016ab6d4-70ec-82f0-f47f-64f578ec8f9e-78ec8f91"
              className="clients__block-wrap"
            >
              <div data-anim-delay="50" className="clients__block anim">
                <img
                  src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/64c916e32ce946863b8f8186_logo-udemy.svg"
                  loading="lazy"
                  width="210"
                  height="58"
                  alt="udemy logo"
                  className="clients__logo"
                />
                <div data-hover-elem="" className="clients__text-wrap active">
                  <div className="clients__text">
                    Reimagining the video player for courses and overall viewer
                    experience.
                  </div>
                </div>
                <div data-hover-elem="" className="clients__btn">
                  <img
                    src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/64354534280dce11db78732b_clients-plus.svg"
                    loading="lazy"
                    data-hover-elem=""
                    alt="plus icon"
                    className="clients__btn-icon is-plus"
                  />
                  <img
                    src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/643545e420509a41dd7fe1b2_icon-plus.svg"
                    loading="lazy"
                    data-hover-elem=""
                    alt="plus icon"
                    className="clients__btn-icon is-minus"
                  />
                  <div data-hover-elem="" className="clients__btn-bg"></div>
                </div>
              </div>
            </div>
            <div
              data-clients-block=""
              data-hover=""
              id="w-node-_016ab6d4-70ec-82f0-f47f-64f578ec8fa8-78ec8f91"
              className="clients__block-wrap"
            >
              <div data-anim-delay="100" className="clients__block anim">
                <img
                  src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/64c916e3096057f141c8ebcd_logo-jbl.svg"
                  loading="lazy"
                  width="210"
                  height="58"
                  alt="jbl logo"
                  className="clients__logo"
                />
                <div data-hover-elem="" className="clients__text-wrap active">
                  <div className="clients__text">
                    Developing a full-stack application as part of the hi-end
                    audio brand&#x27;s marketing campaign.
                  </div>
                </div>
                <div data-hover-elem="" className="clients__btn">
                  <img
                    src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/64354534280dce11db78732b_clients-plus.svg"
                    loading="lazy"
                    data-hover-elem=""
                    alt="plus icon"
                    className="clients__btn-icon is-plus"
                  />
                  <img
                    src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/643545e420509a41dd7fe1b2_icon-plus.svg"
                    loading="lazy"
                    data-hover-elem=""
                    alt="plus icon"
                    className="clients__btn-icon is-minus"
                  />
                  <div data-hover-elem="" className="clients__btn-bg"></div>
                </div>
              </div>
            </div>
            <div
              data-clients-block=""
              data-hover=""
              id="w-node-_016ab6d4-70ec-82f0-f47f-64f578ec8fb2-78ec8f91"
              className="clients__block-wrap"
            >
              <div data-anim-delay="150" className="clients__block anim">
                <img
                  src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/64c916e39eb5682b005d667b_logo-creativemarket.svg"
                  loading="lazy"
                  width="210"
                  height="58"
                  alt="creativemarket logo"
                  className="clients__logo"
                />
                <div data-hover-elem="" className="clients__text-wrap active">
                  <div className="clients__text">
                    Online marketplace that provides a platform for creators to
                    buy and sell design assets.
                  </div>
                </div>
                <div data-hover-elem="" className="clients__btn">
                  <img
                    src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/64354534280dce11db78732b_clients-plus.svg"
                    loading="lazy"
                    data-hover-elem=""
                    alt="plus icon"
                    className="clients__btn-icon is-plus"
                  />
                  <img
                    src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/643545e420509a41dd7fe1b2_icon-plus.svg"
                    loading="lazy"
                    data-hover-elem=""
                    alt="plus icon"
                    className="clients__btn-icon is-minus"
                  />
                  <div data-hover-elem="" className="clients__btn-bg"></div>
                </div>
              </div>
            </div>
            <div
              data-clients-block=""
              data-hover=""
              id="w-node-_016ab6d4-70ec-82f0-f47f-64f578ec8fbc-78ec8f91"
              className="clients__block-wrap"
            >
              <div data-anim-delay="200" className="clients__block anim">
                <img
                  src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/64c916e3bff353f4da960f47_logo-seneca.svg"
                  loading="lazy"
                  width="210"
                  height="58"
                  alt="seneca logo"
                  className="clients__logo"
                />
                <div data-hover-elem="" className="clients__text-wrap active">
                  <div className="clients__text">
                    Designing a powerful educational platform for effective
                    learning.
                  </div>
                </div>
                <div data-hover-elem="" className="clients__btn">
                  <img
                    src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/64354534280dce11db78732b_clients-plus.svg"
                    loading="lazy"
                    data-hover-elem=""
                    alt="plus icon"
                    className="clients__btn-icon is-plus"
                  />
                  <img
                    src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/643545e420509a41dd7fe1b2_icon-plus.svg"
                    loading="lazy"
                    data-hover-elem=""
                    alt="plus icon"
                    className="clients__btn-icon is-minus"
                  />
                  <div data-hover-elem="" className="clients__btn-bg"></div>
                </div>
              </div>
            </div>
            <div
              data-clients-block=""
              data-hover=""
              id="w-node-_016ab6d4-70ec-82f0-f47f-64f578ec8fc6-78ec8f91"
              className="clients__block-wrap"
            >
              <div data-anim-delay="250" className="clients__block anim">
                <img
                  src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/64c916e39174b67fc9938ad1_logo-auth0.svg"
                  loading="lazy"
                  width="210"
                  height="58"
                  alt="autho logo"
                  className="clients__logo"
                />
                <div data-hover-elem="" className="clients__text-wrap active">
                  <div className="clients__text">
                    Using our expertise to boost Auth0 processes.
                  </div>
                </div>
                <div data-hover-elem="" className="clients__btn">
                  <img
                    src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/64354534280dce11db78732b_clients-plus.svg"
                    loading="lazy"
                    data-hover-elem=""
                    alt="plus icon"
                    className="clients__btn-icon is-plus"
                  />
                  <img
                    src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/643545e420509a41dd7fe1b2_icon-plus.svg"
                    loading="lazy"
                    data-hover-elem=""
                    alt="plus icon"
                    className="clients__btn-icon is-minus"
                  />
                  <div data-hover-elem="" className="clients__btn-bg"></div>
                </div>
              </div>
            </div>
            <div
              data-clients-block=""
              data-hover=""
              id="w-node-_016ab6d4-70ec-82f0-f47f-64f578ec8fd0-78ec8f91"
              className="clients__block-wrap"
            >
              <div data-anim-delay="300" className="clients__block anim">
                <img
                  src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/64c916e3e925e907cbc11093_logo-corel.svg"
                  loading="lazy"
                  width="210"
                  height="58"
                  alt="corel logo"
                  className="clients__logo"
                />
                <div data-hover-elem="" className="clients__text-wrap done">
                  <div className="clients__text">
                    Showcasing a future vision for WinZip family products.
                  </div>
                </div>
                <div data-hover-elem="" className="clients__btn done">
                  <img
                    src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/64354534280dce11db78732b_clients-plus.svg"
                    loading="lazy"
                    data-hover-elem=""
                    alt="plus icon"
                    className="clients__btn-icon is-plus done"
                  />
                  <img
                    src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/643545e420509a41dd7fe1b2_icon-plus.svg"
                    loading="lazy"
                    data-hover-elem=""
                    alt="plus icon"
                    className="clients__btn-icon is-minus done"
                  />
                  <div
                    data-hover-elem=""
                    className="clients__btn-bg done"
                  ></div>
                </div>
              </div>
            </div>
            <div
              id="w-node-_016ab6d4-70ec-82f0-f47f-64f578ec8fda-78ec8f91"
              className="clients__block-wrap"
            >
              <div
                data-anim-delay="350"
                className="clients__block mod--globus anim"
              >
                <div className="clients__video pointer-events-off w-embed">
                  <video
                    ref={videoRef}
                    className="clients__video"
                    autoPlay
                    loop
                    muted
                    playsInline
                    loading="lazy"
                  >
                    <source
                      src="https://d3vlq52qrgdnc2.cloudfront.net/Home-Page-Earth.webm"
                      type="video/webm"
                    />
                    <source
                      src="https://d3vlq52qrgdnc2.cloudfront.net/Home-Page-Earth.mp4"
                      type="video/mp4"
                    />
                  </video>
                </div>
                <div>
                  <span className="text-weight-medium">350+</span> clients
                  worldwide
                </div>
              </div>
            </div>
            <div
              id="w-node-d0f02925-ec01-44b8-b3bc-e8b9e1f39852-78ec8f91"
              className="clients__line"
            ></div>
            <div
              id="w-node-_434cab59-98e7-186b-1781-281f0fae8f3f-78ec8f91"
              className="clients__line is-2"
            ></div>
            <div
              id="w-node-_831409b4-02f6-96ee-f725-2dbec17ce53d-78ec8f91"
              className="clients__line is-3"
            ></div>
            <div
              id="w-node-ff4438cf-c98f-1dec-e87d-a04002761d01-78ec8f91"
              className="clients__line is-4"
            ></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Clients;
