'use client'

import React from "react";

const Navbar = () => {
  return (
    <>
      <header data-anim-trigger="load" class="header is-header-hide">
        <div
          data-header-absolute=""
          class="section mod--header is-header-absolute"
        >
          <div class="header__banners"></div>
          <div data-anim-delay="" class="container mod--header">
            <div class="columns mod--header">
              <div class="columns__col mod--header is-1">
                <a
                  href="index.html"
                  aria-current="page"
                  class="logo-link w-inline-block w--current"
                >
                  <img
                    src="images/logo.png"
                    loading="eager"
                    width="Auto"
                    height="Auto"
                    alt=""
                    class="logo"
                  />
                </a>
              </div>
              <div class="columns__col mod--header is-2 hide-tablet">
                <nav data-anim-delay="" class="header__nav anim">
                  <div
                    data-menu-open=""
                    data-hover=""
                    class="header__nav-link mod--dropdown"
                  >
                    <div class="overflow-hidden">
                      <div data-hover-elem="" class="button__texts">
                        <div class="button__text">services</div>
                        <div class="button__text is-absolute">services</div>
                      </div>
                    </div>
                    <div class="nav__link-arrow w-embed">
                      <svg
                        width="100%"
                        height="100%"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4 6L8 10L12 6"
                          stroke="CurrentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                  <a
                    data-hover=""
                    href="projects.html"
                    class="header__nav-link w-inline-block"
                  >
                    <div class="button__overflow">
                      <div data-hover-elem="" class="button__texts">
                        <div class="button__text">projects</div>
                        <div class="button__text is-absolute">projects</div>
                      </div>
                    </div>
                  </a>
                  <link rel="prefetch" href="projects.html" />
                  <a
                    data-hover=""
                    href="/services/dedicated-team.html"
                    class="header__nav-link w-inline-block"
                  >
                    <div class="button__overflow">
                      <div data-hover-elem="" class="button__texts">
                        <div class="button__text">Our Process</div>
                        <div class="button__text is-absolute">Our Process</div>
                      </div>
                    </div>
                  </a>
                  <a
                    data-hover=""
                    href="opensource.html.html"
                    class="header__nav-link w-inline-block"
                  >
                    <div class="button__overflow">
                      <div data-hover-elem="" class="button__texts">
                        <div class="button__text is-absolute">open sourCe</div>
                        <div class="button__text">open sourCe</div>
                      </div>
                    </div>
                  </a>
                  <link rel="prefetch" href="opensource.html.html" />
                  <a
                    data-hover=""
                    href="index.html#"
                    class="header__nav-link hide w-inline-block"
                  >
                    <div class="button__overflow">
                      <div data-hover-elem="" class="button__texts">
                        <div class="button__text">process</div>
                        <div class="button__text is-absolute">process</div>
                      </div>
                    </div>
                  </a>
                  <a
                    data-hover=""
                    href="blog.html"
                    class="header__nav-link w-inline-block"
                  >
                    <div class="button__overflow">
                      <div data-hover-elem="" class="button__texts">
                        <div class="button__text">our blog</div>
                        <div class="button__text is-absolute">our blog</div>
                      </div>
                    </div>
                  </a>
                  <link rel="prefetch" href="blog.html" />
                </nav>
              </div>
              <div class="columns__col mod--header is-3">
                <a
                  data-hover=""
                  href="contacts.html"
                  class="button is-small is-white hide-mobile-portrait w-inline-block"
                >
                  <div class="button__overflow">
                    <div data-hover-elem="" class="button__texts">
                      <div class="button__text">Contact us</div>
                      <div class="button__text is-absolute">Contact us</div>
                    </div>
                  </div>
                  <div data-hover-elem="" class="button__icons">
                    <div
                      data-hover-elem=""
                      data-is-ix2-target="1"
                      class="button__icon-lottie"
                      data-w-id="e6307cba-5df9-9ee4-09f5-b7ff083f32ac"
                      data-animation-type="lottie"
                      data-src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6501d01983656d12abf8ff87_icon-pen.json"
                      data-loop="1"
                      data-direction="1"
                      data-autoplay="0"
                      data-renderer="svg"
                      data-default-duration="1.5166666666666666"
                      data-duration="0"
                      data-ix2-initial-state="0"
                    ></div>
                    <div
                      data-hover-elem=""
                      class="button__bg bg-color-white"
                    ></div>
                  </div>
                </a>
                <link rel="prefetch" href="contacts.html" />
                <div data-menu-open="" class="burger-wrap">
                  <div class="burger">
                    <div data-anim="" class="burger__line is-1 anim"></div>
                    <div data-anim="" class="burger__line is-2 anim"></div>
                    <div data-anim="" class="burger__line is-3 anim"></div>
                  </div>
                </div>
              </div>
            </div>
            <div data-anim-delay="" class="header__line is-top anim"></div>
            <div data-anim-delay="" class="header__line is-bottom anim"></div>
          </div>
        </div>
        <div data-header-fixed="" class="section mod--header is-header-fixed">
          <div class="container mod--header is-header-fixed">
            <div class="columns mod--header">
              <div class="columns__col mod--header is-1">
                <a
                  href="index.html"
                  aria-current="page"
                  class="logo-link w-inline-block w--current"
                >
                  <img
                    src="images/1.svg"
                    loading="eager"
                    width="Auto"
                    height="Auto"
                    alt=""
                    class="logo"
                  />
                </a>
              </div>
              <div class="columns__col mod--header is-2 hide-tablet">
                <nav data-anim-delay="" class="header__nav anim">
                  <div
                    data-menu-open=""
                    data-hover=""
                    class="header__nav-link mod--dropdown"
                  >
                    <div class="overflow-hidden">
                      <div data-hover-elem="" class="button__texts">
                        <div class="button__text">services</div>
                        <div class="button__text is-absolute">services</div>
                      </div>
                    </div>
                    <div class="nav__link-arrow w-embed">
                      <svg
                        width="100%"
                        height="100%"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4 6L8 10L12 6"
                          stroke="CurrentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                  <a
                    data-hover=""
                    href="projects.html"
                    class="header__nav-link w-inline-block"
                  >
                    <div class="button__overflow">
                      <div data-hover-elem="" class="button__texts">
                        <div class="button__text">projects</div>
                        <div class="button__text is-absolute">projects</div>
                      </div>
                    </div>
                  </a>
                  <link rel="prefetch" href="projects.html" />
                  <a
                    data-hover=""
                    href="/services/dedicated-team.html"
                    class="header__nav-link w-inline-block"
                  >
                    <div class="button__overflow">
                      <div data-hover-elem="" class="button__texts">
                        <div class="button__text">Our Process</div>
                        <div class="button__text is-absolute">Our Process</div>
                      </div>
                    </div>
                  </a>
                  <a
                    data-hover=""
                    href="opensource.html"
                    class="header__nav-link w-inline-block"
                  >
                    <div class="button__overflow">
                      <div data-hover-elem="" class="button__texts">
                        <div class="button__text is-absolute">open sourCe</div>
                        <div class="button__text">open sourCe</div>
                      </div>
                    </div>
                  </a>
                  <link rel="prefetch" href="opensource.html" />
                  <a
                    data-hover=""
                    href="index.html#"
                    class="header__nav-link hide w-inline-block"
                  >
                    <div class="button__overflow">
                      <div data-hover-elem="" class="button__texts">
                        <div class="button__text">process</div>
                        <div class="button__text is-absolute">process</div>
                      </div>
                    </div>
                  </a>
                  <a
                    data-hover=""
                    href="blog.html"
                    class="header__nav-link w-inline-block"
                  >
                    <div class="button__overflow">
                      <div data-hover-elem="" class="button__texts">
                        <div class="button__text">our blog</div>
                        <div class="button__text is-absolute">our blog</div>
                      </div>
                    </div>
                  </a>
                  <link rel="prefetch" href="blog.html" />
                </nav>
              </div>
              <div class="columns__col mod--header is-3">
                <a
                  data-hover=""
                  href="contacts.html"
                  class="button is-small is-white hide-mobile-portrait w-inline-block"
                >
                  <div class="button__overflow">
                    <div data-hover-elem="" class="button__texts">
                      <div class="button__text">Contact us</div>
                      <div class="button__text is-absolute">Contact us</div>
                    </div>
                  </div>
                  <div data-hover-elem="" class="button__icons">
                    <div
                      data-hover-elem=""
                      data-is-ix2-target="1"
                      class="button__icon-lottie"
                      data-w-id="e6307cba-5df9-9ee4-09f5-b7ff083f32ac"
                      data-animation-type="lottie"
                      data-src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6501d01983656d12abf8ff87_icon-pen.json"
                      data-loop="1"
                      data-direction="1"
                      data-autoplay="0"
                      data-renderer="svg"
                      data-default-duration="1.5166666666666666"
                      data-duration="0"
                      data-ix2-initial-state="0"
                    ></div>
                    <div
                      data-hover-elem=""
                      class="button__bg bg-color-white"
                    ></div>
                  </div>
                </a>
                <link rel="prefetch" href="contacts.html" />
                <div data-menu-open="" class="burger-wrap">
                  <div class="burger">
                    <div data-anim="" class="burger__line is-1 anim"></div>
                    <div data-anim="" class="burger__line is-2 anim"></div>
                    <div data-anim="" class="burger__line is-3 anim"></div>
                  </div>
                </div>
              </div>
            </div>
            <div data-anim-delay="" class="header__line is-bottom"></div>
          </div>
          <div data-menu-close="close" class="header__blur"></div>
        </div>
        <div data-menu-anim="" class="menu active">
          <div data-menu-anim="" class="container mod--menu active">
            <div class="menu__block">
              <nav class="header__nav hide-desktop">
                <div
                  data-menu-services-link=""
                  class="header__nav-link mod--dropdown"
                >
                  <div class="overflow-hidden">
                    <div data-hover-elem="" class="button__texts">
                      <div class="button__text">Services</div>
                      <div class="button__text is-absolute">Services</div>
                    </div>
                  </div>
                  <div
                    data-menu-services-anim=""
                    class="nav__link-arrow active w-embed"
                  >
                    <svg
                      width="100%"
                      height="100%"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4 6L8 10L12 6"
                        stroke="CurrentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                </div>
                <a href="projects.html" class="header__nav-link w-inline-block">
                  <div class="overflow-hidden">
                    <div data-hover-elem="" class="button__texts">
                      <div class="button__text">Projects</div>
                      <div class="button__text is-absolute">Projects</div>
                    </div>
                  </div>
                </a>
                <a
                  href="/services/dedicated-team.html"
                  class="header__nav-link w-inline-block"
                >
                  <div class="overflow-hidden">
                    <div data-hover-elem="" class="button__texts">
                      <div class="button__text">Our Process</div>
                      <div class="button__text is-absolute">Our Process</div>
                    </div>
                  </div>
                </a>
                <a
                  href="opensource.html"
                  class="header__nav-link w-inline-block"
                >
                  <div class="overflow-hidden">
                    <div data-hover-elem="" class="button__texts">
                      <div class="button__text is-absolute">Open source</div>
                      <div class="button__text">Open source</div>
                    </div>
                  </div>
                </a>
                <a
                  href="index.html#"
                  class="header__nav-link hide w-inline-block"
                >
                  <div class="overflow-hidden">
                    <div data-hover-elem="" class="button__texts">
                      <div class="button__text">Process</div>
                      <div class="button__text is-absolute">Process</div>
                    </div>
                  </div>
                </a>
                <a href="blog.html" class="header__nav-link w-inline-block">
                  <div class="overflow-hidden">
                    <div data-hover-elem="" class="button__texts">
                      <div class="button__text">Our blog</div>
                      <div class="button__text is-absolute">Our blog</div>
                    </div>
                  </div>
                </a>
              </nav>
              <div data-menu-services-anim="" class="columns mod--menu active">
                <div class="columns__col mod--menu">
                  <a
                    data-hover="prevent-responsive"
                    href="/services/product-research.html"
                    class="menu__service-link w-inline-block"
                  >
                    <div class="menu__service-top is-soon hide">
                      <img
                        src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/64f852beac4d6ff134432f2b_icon-services-research.svg"
                        loading="eager"
                        alt="services research icon "
                        class="icon-service"
                      />
                      <div
                        data-hover-elem=""
                        class="button-service active hide"
                      >
                        <div
                          data-hover-elem=""
                          class="button__icon-anim is-diagonal-top active"
                        >
                          <div
                            data-hover-elem=""
                            class="icon-regular is-size-20-tablet w-embed"
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
                            class="icon-regular is-absolute is-diagonal-top is-size-20-tablet w-embed"
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
                          class="button__bg bg-color-black active"
                        ></div>
                      </div>
                      <div class="menu__text-soon hide-tablet">
                        COMING <br />
                        SOON
                      </div>
                    </div>
                    <div class="menu__service-top">
                      <img
                        src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/640744d0e7b29de6f1a29aee_icon-services-design.svg"
                        loading="eager"
                        alt="services design icon"
                        class="icon-service"
                      />
                      <div
                        data-hover-elem=""
                        class="button-service active hide-tablet"
                      >
                        <div
                          data-hover-elem=""
                          class="button__icon-anim is-diagonal-top active"
                        >
                          <div
                            data-hover-elem=""
                            class="icon-regular is-size-20-tablet w-embed"
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
                            class="icon-regular is-absolute is-diagonal-top is-size-20-tablet w-embed"
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
                          class="button__bg bg-color-black active"
                        ></div>
                      </div>
                    </div>
                    <div class="menu__service-title">Discovery</div>
                    <div class="menu__service-line"></div>
                  </a>
                  <div class="menu__text-soon hide-desktop hide">
                    <span class="menu__text-soon-span">COMING </span>SOON
                  </div>
                  <div class="menu__links is-soon hide-tablet">
                    <div>
                      To kickstart creative ideation, we begin our product
                      journey with the discovery phase.
                    </div>
                  </div>
                  <img
                    src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6501bdad4a839869e45dcdd2_bg-card-menu.webp"
                    loading="eager"
                    alt="card menu background"
                    class="menu__service-bg"
                  />
                </div>
                <div class="columns__col mod--menu">
                  <a
                    data-hover="prevent-responsive"
                    href="/services/design.html"
                    class="menu__service-link w-inline-block"
                  >
                    <div class="menu__service-top">
                      <img
                        src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/640744d0e7b29de6f1a29aee_icon-services-design.svg"
                        loading="eager"
                        alt="services design icon"
                        class="icon-service"
                      />
                      <div
                        data-hover-elem=""
                        class="button-service active hide-tablet"
                      >
                        <div
                          data-hover-elem=""
                          class="button__icon-anim is-diagonal-top active"
                        >
                          <div
                            data-hover-elem=""
                            class="icon-regular is-size-20-tablet w-embed"
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
                            class="icon-regular is-absolute is-diagonal-top is-size-20-tablet w-embed"
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
                          class="button__bg bg-color-black active"
                        ></div>
                      </div>
                    </div>
                    <div class="menu__service-title">Design</div>
                    <div class="menu__service-line"></div>
                  </a>
                  <div class="menu__links">
                    <a
                      data-hover="prevent-responsive"
                      href="/services/ui-ux-design.html"
                      class="menu__link w-inline-block"
                    >
                      <div>UI/UX design</div>
                      <div data-hover-elem="" class="overflow-hidden">
                        <div
                          data-hover-elem=""
                          class="menu__link-arrow w-embed"
                        >
                          <svg
                            aria-hidden="true"
                            role="img"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            width="100%"
                            height="100%"
                          >
                            <path
                              fill-rule="evenodd"
                              d="m5.969 2.07 5.968 5.97-5.968 5.968L4.5 12.539 9 8.04l-4.5-4.5 1.469-1.468Z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </div>
                      </div>
                    </a>
                    <a
                      data-hover="prevent-responsive"
                      href="services/website-design-services"
                      class="menu__link w-inline-block"
                    >
                      <div>Web design</div>
                      <div data-hover-elem="" class="overflow-hidden">
                        <div
                          data-hover-elem=""
                          class="menu__link-arrow w-embed"
                        >
                          <svg
                            aria-hidden="true"
                            role="img"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            width="100%"
                            height="100%"
                          >
                            <path
                              fill-rule="evenodd"
                              d="m5.969 2.07 5.968 5.97-5.968 5.968L4.5 12.539 9 8.04l-4.5-4.5 1.469-1.468Z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </div>
                      </div>
                    </a>
                    <a
                      data-hover="prevent-responsive"
                      href="/services/mobile-application-design-services.html"
                      class="menu__link w-inline-block"
                    >
                      <div>Mobile app design</div>
                      <div data-hover-elem="" class="overflow-hidden">
                        <div
                          data-hover-elem=""
                          class="menu__link-arrow w-embed"
                        >
                          <svg
                            aria-hidden="true"
                            role="img"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            width="100%"
                            height="100%"
                          >
                            <path
                              fill-rule="evenodd"
                              d="m5.969 2.07 5.968 5.97-5.968 5.968L4.5 12.539 9 8.04l-4.5-4.5 1.469-1.468Z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </div>
                      </div>
                    </a>
                    <a
                      data-hover="prevent-responsive"
                      href="services/landing"
                      class="menu__link w-inline-block"
                    >
                      <div>Landing page design</div>
                      <div data-hover-elem="" class="overflow-hidden">
                        <div
                          data-hover-elem=""
                          class="menu__link-arrow w-embed"
                        >
                          <svg
                            aria-hidden="true"
                            role="img"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            width="100%"
                            height="100%"
                          >
                            <path
                              fill-rule="evenodd"
                              d="m5.969 2.07 5.968 5.97-5.968 5.968L4.5 12.539 9 8.04l-4.5-4.5 1.469-1.468Z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </div>
                      </div>
                    </a>
                  </div>
                  <img
                    src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6501bdad4a839869e45dcdd2_bg-card-menu.webp"
                    loading="eager"
                    data-hover-elem=""
                    alt="card menu background"
                    class="menu__service-bg"
                  />
                </div>
                <div class="columns__col mod--menu">
                  <a
                    data-hover="prevent-responsive"
                    href="/services/development.html"
                    class="menu__service-link w-inline-block"
                  >
                    <div class="menu__service-top">
                      <img
                        src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6449421486eae3cf4d387564_development-Illustration.svg"
                        loading="eager"
                        alt="development Illustration icon"
                        class="icon-service"
                      />
                      <div
                        data-hover-elem=""
                        class="button-service active hide-tablet"
                      >
                        <div
                          data-hover-elem=""
                          class="button__icon-anim is-diagonal-top active"
                        >
                          <div
                            data-hover-elem=""
                            class="icon-regular is-size-20-tablet w-embed"
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
                            class="icon-regular is-absolute is-diagonal-top is-size-20-tablet w-embed"
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
                          class="button__bg bg-color-black active"
                        ></div>
                      </div>
                    </div>
                    <div class="menu__service-title">Development</div>
                    <div class="menu__service-line"></div>
                  </a>
                  <div class="menu__links">
                    <a
                      data-hover="prevent-responsive"
                      href="/services/web-development-services.html"
                      class="menu__link w-inline-block"
                    >
                      <div>Web development</div>
                      <div data-hover-elem="" class="overflow-hidden">
                        <div
                          data-hover-elem=""
                          class="menu__link-arrow w-embed"
                        >
                          <svg
                            aria-hidden="true"
                            role="img"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            width="100%"
                            height="100%"
                          >
                            <path
                              fill-rule="evenodd"
                              d="m5.969 2.07 5.968 5.97-5.968 5.968L4.5 12.539 9 8.04l-4.5-4.5 1.469-1.468Z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </div>
                      </div>
                    </a>
                    <a
                      data-hover="prevent-responsive"
                      href="services/software-product-development"
                      class="menu__link w-inline-block"
                    >
                      <div>Software development</div>
                      <div data-hover-elem="" class="overflow-hidden">
                        <div
                          data-hover-elem=""
                          class="menu__link-arrow w-embed"
                        >
                          <svg
                            aria-hidden="true"
                            role="img"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            width="100%"
                            height="100%"
                          >
                            <path
                              fill-rule="evenodd"
                              d="m5.969 2.07 5.968 5.97-5.968 5.968L4.5 12.539 9 8.04l-4.5-4.5 1.469-1.468Z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </div>
                      </div>
                    </a>
                    <a
                      data-hover="prevent-responsive"
                      href="/services/cms-development.html"
                      class="menu__link w-inline-block"
                    >
                      <div>CMS development</div>
                      <div data-hover-elem="" class="overflow-hidden">
                        <div
                          data-hover-elem=""
                          class="menu__link-arrow w-embed"
                        >
                          <svg
                            aria-hidden="true"
                            role="img"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            width="100%"
                            height="100%"
                          >
                            <path
                              fill-rule="evenodd"
                              d="m5.969 2.07 5.968 5.97-5.968 5.968L4.5 12.539 9 8.04l-4.5-4.5 1.469-1.468Z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </div>
                      </div>
                    </a>
                    <a
                      data-hover="prevent-responsive"
                      href="services/webflow-development-services"
                      class="menu__link w-inline-block"
                    >
                      <div>No-code development</div>
                      <div data-hover-elem="" class="overflow-hidden">
                        <div
                          data-hover-elem=""
                          class="menu__link-arrow w-embed"
                        >
                          <svg
                            aria-hidden="true"
                            role="img"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            width="100%"
                            height="100%"
                          >
                            <path
                              fill-rule="evenodd"
                              d="m5.969 2.07 5.968 5.97-5.968 5.968L4.5 12.539 9 8.04l-4.5-4.5 1.469-1.468Z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </div>
                      </div>
                    </a>
                  </div>
                  <img
                    src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6501bdad4a839869e45dcdd2_bg-card-menu.webp"
                    loading="eager"
                    data-hover-elem=""
                    alt="card menu background"
                    class="menu__service-bg"
                  />
                </div>
                <div class="columns__col mod--menu mod--last-service">
                  <a
                    data-hover="prevent-responsive"
                    href="/services/marketing.html"
                    class="menu__service-link w-inline-block"
                  >
                    <div class="menu__service-top">
                      <img
                        src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6449410877257b6dcfa0ec88_marketing-illustration.svg"
                        loading="eager"
                        alt="marketing illustration icon"
                        class="icon-service"
                      />
                      <div
                        data-hover-elem=""
                        class="button-service active hide-tablet"
                      >
                        <div
                          data-hover-elem=""
                          class="button__icon-anim is-diagonal-top active"
                        >
                          <div
                            data-hover-elem=""
                            class="icon-regular is-size-20-tablet w-embed"
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
                            class="icon-regular is-absolute is-diagonal-top is-size-20-tablet w-embed"
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
                          class="button__bg bg-color-black active"
                        ></div>
                      </div>
                    </div>
                    <div class="menu__service-title">Marketing</div>
                    <div class="menu__service-line"></div>
                  </a>
                  <div class="menu__links">
                    <a
                      data-hover="prevent-responsive"
                      href="/services/branding.html"
                      class="menu__link w-inline-block"
                    >
                      <div>Branding</div>
                      <div data-hover-elem="" class="overflow-hidden">
                        <div
                          data-hover-elem=""
                          class="menu__link-arrow w-embed"
                        >
                          <svg
                            aria-hidden="true"
                            role="img"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            width="100%"
                            height="100%"
                          >
                            <path
                              fill-rule="evenodd"
                              d="m5.969 2.07 5.968 5.97-5.968 5.968L4.5 12.539 9 8.04l-4.5-4.5 1.469-1.468Z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </div>
                      </div>
                    </a>
                    <a
                      data-hover="prevent-responsive"
                      href="services/content-marketing"
                      class="menu__link w-inline-block"
                    >
                      <div>Content marketing</div>
                      <div data-hover-elem="" class="overflow-hidden">
                        <div
                          data-hover-elem=""
                          class="menu__link-arrow w-embed"
                        >
                          <svg
                            aria-hidden="true"
                            role="img"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            width="100%"
                            height="100%"
                          >
                            <path
                              fill-rule="evenodd"
                              d="m5.969 2.07 5.968 5.97-5.968 5.968L4.5 12.539 9 8.04l-4.5-4.5 1.469-1.468Z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </div>
                      </div>
                    </a>
                    <a
                      data-hover="prevent-responsive"
                      href="/services/pitch.html"
                      class="menu__link w-inline-block"
                    >
                      <div>Pitch deck design</div>
                      <div data-hover-elem="" class="overflow-hidden">
                        <div
                          data-hover-elem=""
                          class="menu__link-arrow w-embed"
                        >
                          <svg
                            aria-hidden="true"
                            role="img"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            width="100%"
                            height="100%"
                          >
                            <path
                              fill-rule="evenodd"
                              d="m5.969 2.07 5.968 5.97-5.968 5.968L4.5 12.539 9 8.04l-4.5-4.5 1.469-1.468Z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </div>
                      </div>
                    </a>
                    <a
                      data-hover="prevent-responsive"
                      href="services/search-engine-optimisation"
                      class="menu__link w-inline-block"
                    >
                      <div>SEO</div>
                      <div data-hover-elem="" class="overflow-hidden">
                        <div
                          data-hover-elem=""
                          class="menu__link-arrow active w-embed"
                        >
                          <svg
                            aria-hidden="true"
                            role="img"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            width="100%"
                            height="100%"
                          >
                            <path
                              fill-rule="evenodd"
                              d="m5.969 2.07 5.968 5.97-5.968 5.968L4.5 12.539 9 8.04l-4.5-4.5 1.469-1.468Z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </div>
                      </div>
                    </a>
                  </div>
                  <img
                    src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6501bdad4a839869e45dcdd2_bg-card-menu.webp"
                    loading="eager"
                    data-hover-elem=""
                    alt="card menu background"
                    class="menu__service-bg active"
                  />
                </div>
              </div>
            </div>
            <div class="menu__btn-wrap">
              <a
                data-hover=""
                href="contacts.html"
                class="button is-small is-white w-inline-block"
              >
                <div class="button__overflow">
                  <div data-hover-elem="" class="button__texts">
                    <div class="button__text">Contact us</div>
                    <div class="button__text is-absolute">Contact us</div>
                  </div>
                </div>
                <div data-hover-elem="" class="button__icons">
                  <div
                    data-hover-elem=""
                    data-is-ix2-target="1"
                    class="button__icon-lottie"
                    data-w-id="9a7f1e43-c3c8-3ced-5fe1-c8b9d94aa658"
                    data-animation-type="lottie"
                    data-src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6501d01983656d12abf8ff87_icon-pen.json"
                    data-loop="1"
                    data-direction="1"
                    data-autoplay="0"
                    data-renderer="svg"
                    data-default-duration="1.5166666666666666"
                    data-duration="0"
                    data-ix2-initial-state="0"
                  ></div>
                  <div
                    data-hover-elem=""
                    class="button__bg bg-color-white"
                  ></div>
                </div>
              </a>
              <link rel="prefetch" href="contacts.html" />
            </div>
          </div>
          <div data-menu-close="" class="menu__close hide"></div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
