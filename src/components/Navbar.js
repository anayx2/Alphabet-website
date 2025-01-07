'use client'

import React, { useEffect, useState } from "react"
import Link from "next/link"
import { useRouter } from "next/router"
// import img from "next/img"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(true)
  const router = useRouter()

  // Define all navigation functions
  const Home = () => router.push('/')
  const Projects = () => router.push('/projects')
  const Service = () => router.push('/services')
  const Blog = () => router.push('/blogs')
  const Contacts = () => router.push('/contact-us')
  const Process = () => router.push('/process')

  useEffect(() => {
    const handleScroll = () => {
      setIsMenuOpen(true); // Trigger the onClick functionality when scrolling
    };
    if (!isMenuOpen) {
      window.addEventListener("scroll", handleScroll);
    }
    // Cleanup the event listener when the component unmounts or menu opens
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMenuOpen]);

  return (
    <header data-anim-trigger="load" className="header is-header-hide">
      <div data-header-absolute="" className="section mod--header is-header-absolute">
        <div className="header__banners"></div>
        <div data-anim-delay="" className="container mod--header">
          <div className="columns mod--header">
            <div className="columns__col mod--header is-1">
              <span onClick={Home} className="logo-link">
                <img
                  src="/logo.png"
                  loading="eager"
                  width={120}
                  height={32}
                  alt=""
                  className="logo"
                />
              </span>
            </div>
            <div className="columns__col mod--header is-2 hide-tablet">
              <nav data-anim-delay="" className="header__nav anim">
                <div data-menu-open="" data-hover="" className="header__nav-link mod--dropdown">
                  <div className="overflow-hidden">
                    <div data-hover-elem="" className="button__texts">
                      <div className="button__text">services</div>
                      <div className="button__text is-absolute">services</div>
                    </div>
                  </div>
                  <div className="nav__link-arrow">
                    <svg width="100%" height="100%" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 6L8 10L12 6" stroke="CurrentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>

                <div className="button__overflow">
                  <span onClick={Projects} className="header__nav-link">
                    <div data-hover-elem="" className="button__texts">
                      <div className="button__text">projects</div>
                      <div className="button__text is-absolute">projects</div>
                    </div>
                  </span>
                </div>


                {/* <span onClick={Process} className="header__nav-link">
                  <div className="button__overflow">
                    <div data-hover-elem="" className="button__texts">
                      <div className="button__text is-absolute">Our Process</div>
                      <div className="button__text">Our Process</div>
                    </div>
                  </div>
                </span> */}
                <span onClick={Service} className="header__nav-link">
                  <div className="button__overflow">
                    <div data-hover-elem="" className="button__texts">
                      <div className="button__text is-absolute">Services</div>
                      <div className="button__text">Services</div>
                    </div>
                  </div>
                </span>

                <span onClick={Blog} className="header__nav-link">
                  <div className="button__overflow">
                    <div data-hover-elem="" className="button__texts">
                      <div className="button__text">our blog</div>
                      <div className="button__text is-absolute">our blog</div>
                    </div>
                  </div>
                </span>
              </nav>
            </div>
            <div className="columns__col mod--header is-3">
              <span onClick={Contacts} className="button is-small is-white hide-mobile-portrait">
                <div className="button__overflow">
                  <div data-hover-elem="" className="button__texts">
                    <div className="button__text">Contact us</div>
                    <div className="button__text is-absolute">Contact us</div>
                  </div>
                </div>
                <div data-hover-elem="" className="button__icons">
                  <div
                    data-hover-elem=""
                    data-is-ix2-target="1"
                    className="button__icon-lottie"
                    data-animation-type="lottie"
                    data-src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6501d01983656d12abf8ff87_icon-pen.json"
                    data-loop="1"
                    data-direction="1"
                    data-autoplay="0"
                    data-renderer="svg"
                    data-default-duration="1.5166666666666666"
                    data-duration="0"
                  ></div>
                  <div data-hover-elem="" className="button__bg bg-color-white"></div>
                </div>
              </span >
              <div data-menu-open="" className="burger-wrap" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <div className="burger">
                  <div data-anim="" className="burger__line is-1 anim"></div>
                  <div data-anim="" className="burger__line is-2 anim"></div>
                  <div data-anim="" className="burger__line is-3 anim"></div>
                </div>
              </div>
            </div>
          </div>
          <div data-anim-delay="" className="header__line is-top anim"></div>
          <div data-anim-delay="" className="header__line is-bottom anim"></div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div data-menu-anim="" className={`menu ${isMenuOpen ? 'active' : ''}`}>
        <div data-menu-anim="" className={`container mod--menu ${isMenuOpen ? 'active' : ''}`}>

          {!isMenuOpen && (
            <div
              className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40 h-[400dvh] w-[140%] absolute top-[-50%] left-[-20%]"
              onClick={() => setIsMenuOpen(true)}
            ></div>
          )}
          <div className="menu__block" style={{ height: "19rem", zIndex: "99", width: "100" }}>
            <nav className="header__nav hide-desktop">
              <div data-menu-services-link="" className="header__nav-link mod--dropdown">
                <div className="overflow-hidden">
                  <div data-hover-elem="" className="button__texts">
                    <div className="button__text">Services</div>
                    <div className="button__text is-absolute">Services</div>
                  </div>
                </div>
                {/* <div data-menu-services-anim="" className="nav__link-arrow active">
                  <svg width="100%" height="100%" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 6L8 10L12 6" stroke="CurrentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div> */}
              </div>

              <Link href="/projects" className="header__nav-link">
                <div className="overflow-hidden">
                  <div data-hover-elem="" className="button__texts">
                    <div className="button__text">Projects</div>
                    <div className="button__text is-absolute">Projects</div>
                  </div>
                </div>
              </Link>

              <Link href="/process" className="header__nav-link">
                <div className="overflow-hidden">
                  <div data-hover-elem="" className="button__texts">
                    <div className="button__text">Our Process</div>
                    <div className="button__text is-absolute">Our Process</div>
                  </div>
                </div>
              </Link>

              <Link href="/opensource" className="header__nav-link">
                <div className="overflow-hidden">
                  <div data-hover-elem="" className="button__texts">
                    <div className="button__text is-absolute">Open source</div>
                    <div className="button__text">Open source</div>
                  </div>
                </div>
              </Link>

              <Link href="/blog" className="header__nav-link">
                <div className="overflow-hidden">
                  <div data-hover-elem="" className="button__texts">
                    <div className="button__text">Our blog</div>
                    <div className="button__text is-absolute">Our blog</div>
                  </div>
                </div>
              </Link>
            </nav>

            {/* Services Menu Content */}
            <div data-menu-services-anim="" className="columns mod--menu active">
              {/* Service sections (Discovery, Design, Development, Marketing) */}
              {/* Keeping the same structure as original but simplified for brevity */}
              <div className="columns__col mod--menu">
                <Link href="/services/discovery" className="menu__service-link">
                  <div className="menu__service-top">
                    <img
                      src="/placeholder.svg?height=40&width=40"
                      width={40}
                      height={40}
                      alt="Discovery icon"
                      className="icon-service"
                    />
                    <div data-hover-elem="" className="button-service active hide-tablet">
                      {/* Arrow icon and button background */}
                    </div>
                  </div>
                  <div className="menu__service-title">Discovery</div>
                  <div className="menu__service-line"></div>
                </Link>
                <div className="menu__links">
                  <div>
                    To kickstart creative ideation, we begin our product journey with the discovery phase.
                  </div>
                </div>
                <img
                  src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6501bdad4a839869e45dcdd2_bg-card-menu.webp"
                  width={300}
                  height={200}
                  alt="card menu background"
                  className="menu__service-bg"
                />
              </div>
              {/* Additional service columns would follow the same pattern */}
            </div>
          </div>
        </div>
        <div data-menu-close="" className="menu__close hide" onClick={() => setIsMenuOpen(false)}></div>
      </div>
    </header>
  )
}

