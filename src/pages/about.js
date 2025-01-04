
// import Head from "next/head";
// import React from "react";

// const About = () => {

//     return (
//         <>
//             <Head>
//                 <link
//                     href="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/css/halo-lab.cd6771155.min.css"
//                     rel="stylesheet"
//                     type="text/css"
//                 />
//                 <link
//                     href="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/65ae3a51b9eea4cecbb82f1a_favicon.gif"
//                     rel="shortcut icon"
//                     type="image/x-icon"
//                 />
//                 <link
//                     href="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/64008b5d15340345dde09c5c_webclip.png"
//                     rel="apple-touch-icon"
//                 />
//                 <link href="projects?be99beb4_page=4" rel="canonical" />
//                 <link
//                     rel="stylesheet"
//                     href="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css"
//                 />
//                 <link
//                     href="https://assets.slater.app/slater/826/3053.css?v=1.2"
//                     rel="stylesheet"
//                     type="text/css"
//                 />
//                 {/* <script
//                     async
//                     src="https://cdn.jsdelivr.net/npm/@finsweet/cookie-consent@1/fs-cc.js"
//                     fs-cc-mode="opt-in"
//                 ></script> */}
//                 <script
//                     async
//                     src="https://cdn.jsdelivr.net/npm/@finsweet/attributes-cmsload@1/cmsload.js"
//                 ></script>
//                 <script
//                     async
//                     src="https://cdn.jsdelivr.net/npm/@finsweet/attributes-cmsfilter@1/cmsfilter.js"
//                 ></script>
//                 <script
//                     async
//                     src="https://cdn.jsdelivr.net/npm/@finsweet/attributes-cmsnest@1/cmsnest.js"
//                 ></script>
//                 <script
//                     src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=63f38a8c92397a024fcb9ae8"
//                     integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
//                     crossorigin="anonymous"
//                 ></script>
//                 <script
//                     src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/js/halo-lab.b47d30dd5.js"
//                     type="text/javascript"
//                 ></script>
//                 <script src="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js"></script>
//             </Head>
//             <main>
//                 <body>
//                     <div class="page-wrapper">
//                         <div class="global-styles">
//                             <div class="styles w-embed">
//                                 <style>
//                                     html {
//                                         font - size: 1rem;
//         }

//                                     @media screen and (min-width: 1801px) {
//                                         html {
//                                         font - size: 1.25rem;
//             }
//         }

//                                     @media screen and (max-width: 1800px) and (min-width: 992px) {
//                                         html {
//                                         font - size: calc(1.1vw);
//             }
//         }

//                                     @media screen and (max-width: 991px) and (min-width: 480px) {
//                                         html {
//                                         font - size: calc(0.3rem + 1.5vw);
//             }
//         }

//                                     @media screen and (max-width: 479px) and (min-width: 320px) {
//                                         html {
//                                         font - size: 5vw;
//             }
//         }

//                                     body {
//                                         -webkit - font - smoothing: antialiased;
//                                     -moz-osx-font-smoothing: grayscale;
//                                     font-smoothing: antialiased;
//                                     text-rendering: optimizeLegibility;
//             }

//                                     *[tabindex]:focus-visible,
//                                     input[type="file"]:focus-visible {
//                                         outline: 0.125rem solid #4d65ff;
//                                     outline-offset: 0.125rem;
//             }

//             .w-richtext > :not(div):first-child,
//             .w-richtext > div:first-child > :first-child {
//                                         margin - top: 0 !important;
//             }

//             .w-richtext > :last-child,
//             .w-richtext > div:last-child > :last-child,
//                                     .w-richtext ol li:last-child,
//                                     .w-richtext ul li:last-child {
//                                         margin - bottom: 0 !important;
//             }

//                                     .pointer-events-off {
//                                         pointer - events: none;
//             }

//                                     .pointer-events-on {
//                                         pointer - events: auto;
//             }

//                                     a,
//                                     .w-input,
//                                     .w-select,
//                                     .w-tab-link,
//                                     .w-nav-link,
//                                     .w-dropdown-btn,
//                                     .w-dropdown-toggle,
//                                     .w-dropdown-link {
//                                         color: inherit;
//                                     text-decoration: inherit;
//                                     font-size: inherit;
//             }

//                                     .text-style-1lines,
//                                     .text-style-2lines,
//                                     .text-style-3lines {
//                                         display: -webkit-box;
//                                     overflow: hidden;
//                                     -webkit-line-clamp: 1;
//                                     -webkit-box-orient: vertical;
//             }

//                                     .text-style-1lines {
//                                         -webkit - line - clamp: 1;
//             }

//                                     .text-style-2lines {
//                                         -webkit - line - clamp: 2;
//             }

//                                     .text-style-3lines {
//                                         -webkit - line - clamp: 3;
//             }

//                                     .display-inlineflex {
//                                         display: inline-flex;
//             }

//                                     textarea {
//                                         resize: none;
//             }

//                                     textarea::-webkit-scrollbar {
//                                         width: 4px;
//             }

//                                     textarea::-webkit-scrollbar-track {
//                                         background: rgba(255, 0, 0, 0);
//                                     border-color: transparent;
//             }

//                                     textarea::-webkit-scrollbar-thumb {
//                                         background: rgba(20, 20, 45, 0.3);
//                                     opacity: 0.3;
//                                     border-radius: 41px;
//             }

//                                     .hide {
//                                         display: none !important;
//             }

//                                     @media screen and (min-width: 992px) {
//               .hide - desktop {
//                                         display: none !important;
//               }
//                                     .opacity-0-desktop {
//                                         opacity: 0 !important;
//               }
//             }

//                                     @media screen and (max-width: 991px) and (min-width: 768px) {
//               .hide - tablet - only {
//                                         display: none !important;
//               }
//             }

//                                     @media screen and (max-width: 991px) {
//               .hide - tablet {
//                                         display: none !important;
//               }
//             }

//                                     @media screen and (max-width: 767px) {
//               .hide - mobile - landscape {
//                                         display: none !important;
//               }
//             }

//                                     @media screen and (max-width: 767px) and (min-width: 480px) {
//               .hide - mobile - landscape - only {
//                                         display: none !important;
//               }
//             }

//                                     @media screen and (max-width: 479px) {
//               .hide - mobile - portrait {
//                                         display: none !important;
//               }
//             }
//                                     /* Custom styles */

//                                     [scroll-hide]::-webkit-scrollbar {
//                                         width: 0rem;
//                                     height: 0rem;
//             }

//                                     [scroll-style-light]::-webkit-scrollbar,
//                                     [scroll-style-dark]::-webkit-scrollbar,
//                                     [scroll-style-grey]::-webkit-scrollbar {
//                                         width: 0.25rem;
//                                     height: 0.25rem;
//             }

//                                     [scroll-style-light]::-webkit-scrollbar-thumb,
//                                     [scroll-style-light]::-webkit-scrollbar-track,
//                                     [scroll-style-dark]::-webkit-scrollbar-thumb,
//                                     [scroll-style-dark]::-webkit-scrollbar-track,
//                                     [scroll-style-grey]::-webkit-scrollbar-thumb,
//                                     [scroll-style-grey]::-webkit-scrollbar-track {
//                                         border - radius: 1rem;
//             }

//                                     [scroll-style-dark]::-webkit-scrollbar-thumb {
//                                         background: #3719ca;
//             }

//                                     [scroll-style-dark]::-webkit-scrollbar-track {
//                                         background: #eaeaec;
//             }

//                                     [scroll-style-light]::-webkit-scrollbar-thumb {
//                                         background: rgba(255, 255, 255, 0.3);
//             }

//                                     [scroll-style-light]::-webkit-scrollbar-track {
//                                         background: transparent;
//             }

//                                     [scroll-style-grey]::-webkit-scrollbar-thumb {
//                                         background: #b4b4bc;
//             }

//                                     [scroll-style-grey]::-webkit-scrollbar-track {
//                                         background: transparent;
//             }

//                                     [data-hide-after-before]:before,
//                                     [data-hide-after-before]:after,
//                                     [data-hide-br] br {
//                                         display: none;
//             }

//                                     @media screen and (min-width: 992px) {
//               .w - dropdown - toggle:hover [data-dropdown-plus] ~ .button__bg,
//                                     .w-dropdown-toggle.w--open [data-dropdown-plus] ~ .button__bg {
//                                         transform: scale(1);
//               }
//                                     .w-dropdown-toggle:hover [data-dropdown-plus],
//                                     .w-dropdown-toggle.w--open [data-dropdown-plus] {
//                                         color: #02021e;
//               }
//             }

//                                     [data-dropdown-arrow],
//                                     [data-dropdown-arrow-each] {
//                                         transition: transform 200ms ease;
//             }

//                                     .w-dropdown-toggle.w--open [data-dropdown-arrow],
//                                     .w-dropdown-toggle [data-dropdown-arrow-each="up"] {
//                                         transform: rotate(-180deg);
//             }

//                                     .w-dropdown.mod--footer-nav .dropdown__icon-wrap {
//                                         transition: all 0.2s;
//                                     opacity: 0;
//             }

//                                     .w-dropdown.mod--footer-nav
//                                     .w-dropdown-toggle:hover
//                                     .dropdown__icon-wrap,
//                                     .w-dropdown.mod--footer-nav
//                                     .w-dropdown-toggle.w--open
//                                     .dropdown__icon-wrap {
//                                         opacity: 1;
//             }

//                                     [data-style-checkbox] .w-checkbox span::after {
//                                         content: "";
//                                     position: absolute;
//                                     --size: calc(2.5rem / 2 - 0.25rem);
//                                     width: var(--size);
//                                     height: var(--size);
//                                     border-radius: 50%;
//                                     background-color: var(--grey-medium);
//                                     top: 0.25rem;
//                                     left: 0.25rem;
//                                     transition: all 0.4s;
//             }

//                                     [data-style-checkbox] .w-checkbox input:checked ~ span::after {
//                                         left: calc(2.5rem / 2);
//                                     background-color: var(--blue-dark);
//             }

//                                     [data-style-checkbox]
//                                     .w-checkbox.pointer-events-off
//                                     input:checked
//                                     ~ span::after {
//                                         background - color: var(--grey-medium);
//             }
//                                     /** Cookie **/

//                                     [data-remodal-id="cookie"] [fs-cc="preferences"] {
//                                         display: block !important;
//             }

//                                     [data-dropdown-cookie] .dropdown__list {
//                                         max - height: 0rem;
//                                     transition: all 0.4s;
//             }

//                                     [data-dropdown-cookie].is--cookie-active .dropdown__list {
//                                         max - height: 7rem;
//             }
//                                     /** Parametrs in post card **/

//                                     .post-card__param.is--big .project__tag {
//                                         color: var(--blue-dark);
//                                     border-color: rgb(2 2 30 / 40%);
//             }

//             .post-card__param > div {
//                                         width: auto;
//             }
//                                 </style>
//                             </div>
//                             <div class="styles w-embed">
//                                 <style>
//             /** header **/

//                                     .menu.active {
//                                         pointer - events: none; }

//                                     .header__nav-link.mod--dropdown.active .nav__link-arrow {
//                                         transform: rotate(-180deg);
//             }

//                                     .menu,
//                                     .header__blur {
//                                         pointer - events: none;
//             }

//             .menu:not(.active) > div {
//                                         pointer - events: auto;
//             }

//                                     header.is-header-hide [data-header-fixed],
//                                     [data-header-fixed].is-header-hide {
//                                         transform: translate3d(0px, -5rem, 0px);
//             }

//                                     header.is-menu-open .header__line.is-bottom {
//                                         opacity: 0;
//             }

//                                     header.is-menu-open .header__blur {
//                                         height: calc(100vh + 5rem);
//             }

//                                     [data-subheader-fixed]:not(.is--subheader-anim) .header__blur {
//                                         transition: all 0.8s;
//                                     margin-top: 0rem;
//             }

//                                     [data-subheader-fixed="hidden"] {
//                                         top: 0rem !important;
//                                     transform: translate3d(0px, -5rem, 0px) !important;
//             }
//                                     /** masks **/

//                                     [data-mask] {
//                                         -webkit - mask - position: 0% 0%;
//                                     -webkit-mask-size: 100% 100%;
//                                     -webkit-mask-repeat: no-repeat;
//             }

//                                     @media screen and (min-width: 992px) {
//                                         [data - mask= "solution"] {
//                                         -webkit - mask - image: url(https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/64a8635c64fb995068b8c8dd_bg-card-solutionBorder_laptop.webp);
//               }
//                                     [data-mask="awards"] {
//                                         -webkit - mask - image: url(https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6512ef9d06d51a6b376bab9d_award-border.svg);
//               }
//                                     [data-mask="benefits"] {
//                                         -webkit - mask - image: url(https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/651539b0daa2b9a3e60232ca_card-benefitsBorder.webp);
//               }
//                                     [data-mask="benefits-long"] {
//                                         -webkit - mask - image: url(https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/651539b01ac75a2f07a6f425_card-benefitsBorderLong.webp);
//               }
//                                     [data-mask="reviews"] {
//                                         -webkit - mask - image: url(https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/648c620695b80bc58810a156_bg-card-reviews_laptop.webp);
//               }
//                                     [data-mask="error"] {
//                                         -webkit - mask - image: url(https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/64b14376d206bc88a0374470_form-error_laptop.webp);
//               }
//                                     [data-mask="works"] {
//                                         -webkit - mask - image: url(https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/648b10ef9ccee0a3fa3ae1cb_bg-card-worksSlide_laptop.webp);
//               }
//                                     [data-mask="post"] {
//                                         -webkit - mask - image: url(https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/647f40ca80b2366090015301_bg-card-post_laptop.webp);
//               }
//                                     [data-mask="on-dribble"] {
//                                         -webkit - mask - image: url(https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/64afa9bfcc6b742829ac4578_bg-card-onDribble_laptop.webp);
//               }
//                                     [data-mask="projects-big"] {
//                                         -webkit - mask - image: url(https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6488858ecefbe57e58587357_bg-card-postBig_laptop.webp);
//               }
//                                     [data-mask="projects-big-invert"],
//                                     [data-projects-big]
//                 > div:nth-child(even)
//                                     [data-mask="projects-big"] {
//                                         -webkit - mask - image: url(https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6488858edd23f5690e30e623_bg-card-postBig2_laptop.webp);
//               }
//             }

//                                     @media screen and (max-width: 991px) and (min-width: 480px) {
//                                         [data - mask= "solution"] {
//                                         -webkit - mask - image: url(https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/64a8635b8d7cd698bc48de97_bg-card-solutionBorder_tablet.webp);
//               }
//                                     [data-mask="reviews"] {
//                                         -webkit - mask - image: url(https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/648c6205918a5b5121781a8b_bg-card-reviews_tablet.webp);
//               }
//                                     [data-mask="error"] {
//                                         -webkit - mask - image: url(https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/64b14376d206bc88a0374470_form-error_laptop.webp);
//               }
//                                     [data-mask="works"] {
//                                         -webkit - mask - image: url(https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/648b10ef60a6ff58e72bfc12_bg-card-worksSlide_tablet.png);
//               }
//                                     [data-mask="post"] {
//                                         -webkit - mask - image: url(https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/647f40ca4096796087778f34_bg-card-post_tablet.webp);
//               }
//                                     [data-mask="on-dribble"] {
//                                         -webkit - mask - image: url(https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/64afa9be376d3438a757bc33_bg-card-onDribble_tablet.webp);
//               }
//                                     [data-mask="projects-big"] {
//                                         -webkit - mask - image: url(https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6488858d011d127471d61998_bg-card-postBig_tablet.webp);
//               }
//                                     [data-mask="projects-big-invert"],
//                                     [data-projects-big]
//                 > div:nth-child(even)
//                                     [data-mask="projects-big"] {
//                                         -webkit - mask - image: url(https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6488858e9c6ab83eafdbd7a7_bg-card-postBig2_tablet.webp);
//               }
//             }

//                                     @media screen and (max-width: 479px) {
//                                         [data - mask= "solution"] {
//                                         -webkit - mask - image: url(https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/64a8635ca0e69ebdfd26c3be_bg-card-solutionBorder_mobile.webp);
//               }
//                                     [data-mask="reviews"] {
//                                         -webkit - mask - image: url(https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/648c620595b80bc58810a130_bg-card-reviews_mobile.webp);
//               }
//                                     [data-mask="error"] {
//                                         -webkit - mask - image: url(https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/64b14376bfa43fcb0540d46e_form-error_mobile.webp);
//               }
//                                     [data-mask="works"] {
//                                         -webkit - mask - image: url(https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/648b10ef45910495411c1a28_bg-card-worksSlide_mobile.webp);
//               }
//                                     [data-mask="post"] {
//                                         -webkit - mask - image: url(https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/647f425dc9adcf998fe5ada2_bg-card-post_mobile.webp);
//               }
//                                     [data-mask="on-dribble"] {
//                                         -webkit - mask - image: url(https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/64afa9bec17b5670ade3f278_bg-card-onDribble_mobile.webp);
//               }
//                                     [data-mask="projects-big"],
//                                     [data-mask="projects-big-invert"] {
//                                         -webkit - mask - image: url(https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6488858d2e8b1b93ebd64cb6_bg-card-postBig_mobile.webp);
//               }
//             }

//                                     .rich-heading-4 h2::before {
//                                         content: "";
//                                     position: relative;
//                                     display: inline-block;
//                                     width: 13.125rem;
//                                     height: 3rem;
//                                     float: left;
//             }

//                                     [data-anim-delay] {
//                                         transition: transform 0.6s, opacity 0.4s;
//             }
//                                     /** visible anim elements in dev **/

//                                     .wf-design-mode .anim[data-anim-delay] {
//                                         opacity: initial !important;
//                                     transform: initial !important;
//             }

//                                     .wf-design-mode .header__line {
//                                         width: 100% !important;
//             }

//                                     @media screen and (min-width: 992px) {
//                                     }

//                                     @media screen and (max-width: 991px) {
//               .anim[data - anim - delay] {
//                                         opacity: initial !important;
//                                     transform: initial !important;
//               }
//                                     .header__blur {
//                                         pointer - events: auto;
//               }
//                                     .footer__nav .w-dropdown-list {
//                                         height: auto !important;
//               }
//                                     .rich-heading-4 h2::before {
//                                         width: 7.125rem;
//                                     height: 2rem;
//               }
//             }

//                                     @media screen and (max-width: 767px) {
//               .rich - heading - 4 h2::before {
//                                         display: none;
//               }
//             }
//                                 </style>
//                             </div>
//                         </div>
//                         <div class="styles w-embed">
//                             <style>
//                                 [fs-cmsload-element="page-button"]::after {
//                                     content: "";
//                                 width: 100%;
//                                 height: 100%;
//                                 background-color: white;
//                                 border-radius: 50%;
//                                 transition: all 0.4s;
//                                 position: absolute;
//                                 top: 0%;
//                                 bottom: 0%;
//                                 left: 0%;
//                                 right: 0%;
//                                 transform: scale(0);
//                                 z-index: -1;
//           }

//                                 [fs-cmsload-element="page-button"]:hover::after {
//                                     transform: scale(1);
//           }

//                                 [fs-cmsload-element="page-button"].w--current::after {
//                                     transform: scale(1);
//           }

//           [data-projects-big] > div:first-child > a {
//                                     display: none;
//           }

//           [data-projects-big] > div:first-child > div {
//                                     display: block;
//           }

//                                 a[class^="w-pagination-"] {
//                                     display: flex !important;
//           }

//                                 a[class^="w-pagination-"][style*="display: none"] {
//                                     cursor: default;
//                                 pointer-events: none;
//                                 color: rgba(255, 255, 255, 0.3);
//                                 border-color: rgba(255, 255, 255, 0.3);
//           }

//                                 @media screen and (min-width: 992px) {
//                                     a[class^= "w-pagination-"]:hover .button__icon-anim {
//                                     transform: translate(180%);
//             }
//                                 a[class^="w-pagination-"]:hover .button__bg {
//                                     transform: scale(1);
//             }
//           }

//                                 a[class^="w-pagination-"][style*="display: none"] .button__icon-anim {
//                                     transform: translate(0%);
//           }

//                                 a[class^="w-pagination-"][style*="display: none"] .button__bg {
//                                     transform: scale(0);
//           }

//                                 @media screen and (max-width: 479px) {
//                                     [data - page - current] a:not(.is-show) {
//                                     display: none;
//             }
//                                 [data-page-current] a.w--current,
//                                 [data-page-current] a.w--current + a,
//                                 [data-page-current] a.w--current ~ .is-dots,
//                                 [data-page-current] a.w--current ~ .is-dots + a {
//                                     display: flex;
//             }
//           }

//                                 @media screen and (min-width: 480px) {
//                                     [data - component= "search-form"].anim {
//                                     pointer - events: none;
//             }
//           }
//                             </style>
//                         </div>
//                         <div class="styles w-embed">
//                             <style>
//           .projects-sort__btn.active > div {
//                                     opacity: 1;
//           }

//                                 [fs-cmsfilter-element="filters"]
//                                 .w-dropdown.active
//                                 [data-dropdown-arrow-each] {
//                                     transform: rotate(-180deg);
//           }

//                                 @media screen and (min-width: 992px) {
//                                     [fs - cmsfilter - element= "filters"] label.active img {
//                                     display: block;
//             }
//                                 [data-dropdown-industries].is--filtred:not(.active)
//                                 .w-dropdown-toggle
//                                 img {
//                                     display: block;
//             }
//                                 [data-dropdown-services].is--filtred:not(.active)
//                                 .w-dropdown-toggle
//                                 img {
//                                     display: block;
//             }
//           }

//                                 [data-filter-btn].is--filtred [data-filter-icon] .button__bg {
//                                     background - color: #fdc448;
//                                 transform: scale(1);
//           }

//                                 [data-filter-btn].is--filtred [data-filter-icon] {
//                                     color: var(--blue-dark);
//                                 border-color: #fdc448;
//           }

//                                 [data-filter-btn].is--filtred {
//                                     background - color: var(--white);
//                                 color: var(--blue-dark);
//           }
//                             </style>
//                         </div>
//                         <header data-anim-trigger="load" class="header is-header-hide">
//                             <div
//                                 data-header-absolute=""
//                                 class="section mod--header is-header-absolute"
//                             >
//                                 <div class="header__banners"></div>
//                                 <div data-anim-delay="" class="container mod--header">
//                                     <div class="columns mod--header">
//                                         <div class="columns__col mod--header is-1">
//                                             <a href="index.html" class="logo-link w-inline-block"
//                                             ><img
//                                                     src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/65142d5754eafa29699ca491_logo.svg"
//                                                     loading="eager"
//                                                     width="Auto"
//                                                     height="Auto"
//                                                     alt=""
//                                                     class="logo"
//                                                 /></a>
//                                         </div>
//                                         <div class="columns__col mod--header is-2 hide-tablet">
//                                             <nav data-anim-delay="" class="header__nav anim">
//                                                 <div
//                                                     data-menu-open=""
//                                                     data-hover=""
//                                                     class="header__nav-link mod--dropdown"
//                                                 >
//                                                     <div class="overflow-hidden">
//                                                         <div data-hover-elem="" class="button__texts">
//                                                             <div class="button__text">services</div>
//                                                             <div class="button__text is-absolute">services</div>
//                                                         </div>
//                                                     </div>
//                                                     <div class="nav__link-arrow w-embed">
//                                                         <svg
//                                                             width="100%"
//                                                             height="100%"
//                                                             viewBox="0 0 16 16"
//                                                             fill="none"
//                                                             xmlns="http://www.w3.org/2000/svg"
//                                                         >
//                                                             <path
//                                                                 d="M4 6L8 10L12 6"
//                                                                 stroke="CurrentColor"
//                                                                 stroke-width="2"
//                                                                 stroke-linecap="round"
//                                                                 stroke-linejoin="round"
//                                                             />
//                                                         </svg>
//                                                     </div>
//                                                 </div>
//                                                 <a
//                                                     data-hover=""
//                                                     href="projects"
//                                                     aria-current="page"
//                                                     class="header__nav-link w-inline-block w--current"
//                                                 >
//                                                     <div class="button__overflow">
//                                                         <div data-hover-elem="" class="button__texts">
//                                                             <div class="button__text">projects</div>
//                                                             <div class="button__text is-absolute">projects</div>
//                                                         </div>
//                                                     </div>
//                                                 </a>
//                                                 <link rel="prefetch" href="projects" />
//                                                 <a
//                                                     data-hover=""
//                                                     href="services/dedicated-team"
//                                                     class="header__nav-link w-inline-block"
//                                                 >
//                                                     <div class="button__overflow">
//                                                         <div data-hover-elem="" class="button__texts">
//                                                             <div class="button__text">Our Process</div>
//                                                             <div class="button__text is-absolute">Our Process</div>
//                                                         </div>
//                                                     </div>
//                                                 </a>
//                                                 <a
//                                                     data-hover=""
//                                                     href="opensource"
//                                                     class="header__nav-link w-inline-block"
//                                                 >
//                                                     <div class="button__overflow">
//                                                         <div data-hover-elem="" class="button__texts">
//                                                             <div class="button__text is-absolute">open sourCe</div>
//                                                             <div class="button__text">open sourCe</div>
//                                                         </div>
//                                                     </div>
//                                                 </a>
//                                                 <link rel="prefetch" href="opensource" />
//                                                 <a
//                                                     data-hover=""
//                                                     href="projects?be99beb4_page=4#"
//                                                     class="header__nav-link hide w-inline-block"
//                                                 >
//                                                     <div class="button__overflow">
//                                                         <div data-hover-elem="" class="button__texts">
//                                                             <div class="button__text">process</div>
//                                                             <div class="button__text is-absolute">process</div>
//                                                         </div>
//                                                     </div>
//                                                 </a>
//                                                 <a
//                                                     data-hover=""
//                                                     href="blog"
//                                                     class="header__nav-link w-inline-block"
//                                                 >
//                                                     <div class="button__overflow">
//                                                         <div data-hover-elem="" class="button__texts">
//                                                             <div class="button__text">our blog</div>
//                                                             <div class="button__text is-absolute">our blog</div>
//                                                         </div>
//                                                     </div>
//                                                 </a>
//                                                 <link rel="prefetch" href="blog" />
//                                             </nav>
//                                         </div>
//                                         <div class="columns__col mod--header is-3">
//                                             <a
//                                                 data-hover=""
//                                                 href="contacts"
//                                                 class="button is-small is-white hide-mobile-portrait w-inline-block"
//                                             >
//                                                 <div class="button__overflow">
//                                                     <div data-hover-elem="" class="button__texts">
//                                                         <div class="button__text">Contact us</div>
//                                                         <div class="button__text is-absolute">Contact us</div>
//                                                     </div>
//                                                 </div>
//                                                 <div data-hover-elem="" class="button__icons">
//                                                     <div
//                                                         data-hover-elem=""
//                                                         data-is-ix2-target="1"
//                                                         class="button__icon-lottie"
//                                                         data-w-id="e6307cba-5df9-9ee4-09f5-b7ff083f32ac"
//                                                         data-animation-type="lottie"
//                                                         data-src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6501d01983656d12abf8ff87_icon-pen.json"
//                                                         data-loop="1"
//                                                         data-direction="1"
//                                                         data-autoplay="0"
//                                                         data-renderer="svg"
//                                                         data-default-duration="1.5166666666666666"
//                                                         data-duration="0"
//                                                         data-ix2-initial-state="0"
//                                                     ></div>
//                                                     <div
//                                                         data-hover-elem=""
//                                                         class="button__bg bg-color-white"
//                                                     ></div>
//                                                 </div>
//                                             </a>
//                                             <link rel="prefetch" href="contacts" />
//                                             <div data-menu-open="" class="burger-wrap">
//                                                 <div class="burger">
//                                                     <div data-anim="" class="burger__line is-1 anim"></div>
//                                                     <div data-anim="" class="burger__line is-2 anim"></div>
//                                                     <div data-anim="" class="burger__line is-3 anim"></div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div data-anim-delay="" class="header__line is-top anim"></div>
//                                     <div data-anim-delay="" class="header__line is-bottom anim"></div>
//                                 </div>
//                             </div>
//                             <div data-header-fixed="" class="section mod--header is-header-fixed">
//                                 <div class="container mod--header is-header-fixed">
//                                     <div class="columns mod--header">
//                                         <div class="columns__col mod--header is-1">
//                                             <a href="index.html" class="logo-link w-inline-block"
//                                             ><img
//                                                     src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/65142d5754eafa29699ca491_logo.svg"
//                                                     loading="eager"
//                                                     width="Auto"
//                                                     height="Auto"
//                                                     alt=""
//                                                     class="logo"
//                                                 /></a>
//                                         </div>
//                                         <div class="columns__col mod--header is-2 hide-tablet">
//                                             <nav data-anim-delay="" class="header__nav anim">
//                                                 <div
//                                                     data-menu-open=""
//                                                     data-hover=""
//                                                     class="header__nav-link mod--dropdown"
//                                                 >
//                                                     <div class="overflow-hidden">
//                                                         <div data-hover-elem="" class="button__texts">
//                                                             <div class="button__text">services</div>
//                                                             <div class="button__text is-absolute">services</div>
//                                                         </div>
//                                                     </div>
//                                                     <div class="nav__link-arrow w-embed">
//                                                         <svg
//                                                             width="100%"
//                                                             height="100%"
//                                                             viewBox="0 0 16 16"
//                                                             fill="none"
//                                                             xmlns="http://www.w3.org/2000/svg"
//                                                         >
//                                                             <path
//                                                                 d="M4 6L8 10L12 6"
//                                                                 stroke="CurrentColor"
//                                                                 stroke-width="2"
//                                                                 stroke-linecap="round"
//                                                                 stroke-linejoin="round"
//                                                             />
//                                                         </svg>
//                                                     </div>
//                                                 </div>
//                                                 <a
//                                                     data-hover=""
//                                                     href="projects"
//                                                     aria-current="page"
//                                                     class="header__nav-link w-inline-block w--current"
//                                                 >
//                                                     <div class="button__overflow">
//                                                         <div data-hover-elem="" class="button__texts">
//                                                             <div class="button__text">projects</div>
//                                                             <div class="button__text is-absolute">projects</div>
//                                                         </div>
//                                                     </div>
//                                                 </a>
//                                                 <link rel="prefetch" href="projects" />
//                                                 <a
//                                                     data-hover=""
//                                                     href="services/dedicated-team"
//                                                     class="header__nav-link w-inline-block"
//                                                 >
//                                                     <div class="button__overflow">
//                                                         <div data-hover-elem="" class="button__texts">
//                                                             <div class="button__text">Our Process</div>
//                                                             <div class="button__text is-absolute">Our Process</div>
//                                                         </div>
//                                                     </div>
//                                                 </a>
//                                                 <a
//                                                     data-hover=""
//                                                     href="opensource"
//                                                     class="header__nav-link w-inline-block"
//                                                 >
//                                                     <div class="button__overflow">
//                                                         <div data-hover-elem="" class="button__texts">
//                                                             <div class="button__text is-absolute">open sourCe</div>
//                                                             <div class="button__text">open sourCe</div>
//                                                         </div>
//                                                     </div>
//                                                 </a>
//                                                 <link rel="prefetch" href="opensource" />
//                                                 <a
//                                                     data-hover=""
//                                                     href="projects?be99beb4_page=4#"
//                                                     class="header__nav-link hide w-inline-block"
//                                                 >
//                                                     <div class="button__overflow">
//                                                         <div data-hover-elem="" class="button__texts">
//                                                             <div class="button__text">process</div>
//                                                             <div class="button__text is-absolute">process</div>
//                                                         </div>
//                                                     </div>
//                                                 </a>
//                                                 <a
//                                                     data-hover=""
//                                                     href="blog"
//                                                     class="header__nav-link w-inline-block"
//                                                 >
//                                                     <div class="button__overflow">
//                                                         <div data-hover-elem="" class="button__texts">
//                                                             <div class="button__text">our blog</div>
//                                                             <div class="button__text is-absolute">our blog</div>
//                                                         </div>
//                                                     </div>
//                                                 </a>
//                                                 <link rel="prefetch" href="blog" />
//                                             </nav>
//                                         </div>
//                                         <div class="columns__col mod--header is-3">
//                                             <a
//                                                 data-hover=""
//                                                 href="contacts"
//                                                 class="button is-small is-white hide-mobile-portrait w-inline-block"
//                                             >
//                                                 <div class="button__overflow">
//                                                     <div data-hover-elem="" class="button__texts">
//                                                         <div class="button__text">Contact us</div>
//                                                         <div class="button__text is-absolute">Contact us</div>
//                                                     </div>
//                                                 </div>
//                                                 <div data-hover-elem="" class="button__icons">
//                                                     <div
//                                                         data-hover-elem=""
//                                                         data-is-ix2-target="1"
//                                                         class="button__icon-lottie"
//                                                         data-w-id="e6307cba-5df9-9ee4-09f5-b7ff083f32ac"
//                                                         data-animation-type="lottie"
//                                                         data-src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6501d01983656d12abf8ff87_icon-pen.json"
//                                                         data-loop="1"
//                                                         data-direction="1"
//                                                         data-autoplay="0"
//                                                         data-renderer="svg"
//                                                         data-default-duration="1.5166666666666666"
//                                                         data-duration="0"
//                                                         data-ix2-initial-state="0"
//                                                     ></div>
//                                                     <div
//                                                         data-hover-elem=""
//                                                         class="button__bg bg-color-white"
//                                                     ></div>
//                                                 </div>
//                                             </a>
//                                             <link rel="prefetch" href="contacts" />
//                                             <div data-menu-open="" class="burger-wrap">
//                                                 <div class="burger">
//                                                     <div data-anim="" class="burger__line is-1 anim"></div>
//                                                     <div data-anim="" class="burger__line is-2 anim"></div>
//                                                     <div data-anim="" class="burger__line is-3 anim"></div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div data-anim-delay="" class="header__line is-bottom"></div>
//                                 </div>
//                                 <div data-menu-close="close" class="header__blur"></div>
//                             </div>
//                             <div data-menu-anim="" class="menu active">
//                                 <div data-menu-anim="" class="container mod--menu active">
//                                     <div class="menu__block">
//                                         <nav class="header__nav hide-desktop">
//                                             <div
//                                                 data-menu-services-link=""
//                                                 class="header__nav-link mod--dropdown"
//                                             >
//                                                 <div class="overflow-hidden">
//                                                     <div data-hover-elem="" class="button__texts">
//                                                         <div class="button__text">Services</div>
//                                                         <div class="button__text is-absolute">Services</div>
//                                                     </div>
//                                                 </div>
//                                                 <div
//                                                     data-menu-services-anim=""
//                                                     class="nav__link-arrow active w-embed"
//                                                 >
//                                                     <svg
//                                                         width="100%"
//                                                         height="100%"
//                                                         viewBox="0 0 16 16"
//                                                         fill="none"
//                                                         xmlns="http://www.w3.org/2000/svg"
//                                                     >
//                                                         <path
//                                                             d="M4 6L8 10L12 6"
//                                                             stroke="CurrentColor"
//                                                             stroke-width="2"
//                                                             stroke-linecap="round"
//                                                             stroke-linejoin="round"
//                                                         />
//                                                     </svg>
//                                                 </div>
//                                             </div>
//                                             <a
//                                                 href="projects"
//                                                 aria-current="page"
//                                                 class="header__nav-link w-inline-block w--current"
//                                             >
//                                                 <div class="overflow-hidden">
//                                                     <div data-hover-elem="" class="button__texts">
//                                                         <div class="button__text">Projects</div>
//                                                         <div class="button__text is-absolute">Projects</div>
//                                                     </div>
//                                                 </div>
//                                             </a>
//                                             <a
//                                                 href="services/dedicated-team"
//                                                 class="header__nav-link w-inline-block"
//                                             >
//                                                 <div class="overflow-hidden">
//                                                     <div data-hover-elem="" class="button__texts">
//                                                         <div class="button__text">Our Process</div>
//                                                         <div class="button__text is-absolute">Our Process</div>
//                                                     </div>
//                                                 </div>
//                                             </a>
//                                             <a href="opensource" class="header__nav-link w-inline-block">
//                                                 <div class="overflow-hidden">
//                                                     <div data-hover-elem="" class="button__texts">
//                                                         <div class="button__text is-absolute">Open source</div>
//                                                         <div class="button__text">Open source</div>
//                                                     </div>
//                                                 </div>
//                                             </a>
//                                             <a
//                                                 href="projects?be99beb4_page=4#"
//                                                 class="header__nav-link hide w-inline-block"
//                                             >
//                                                 <div class="overflow-hidden">
//                                                     <div data-hover-elem="" class="button__texts">
//                                                         <div class="button__text">Process</div>
//                                                         <div class="button__text is-absolute">Process</div>
//                                                     </div>
//                                                 </div>
//                                             </a>
//                                             <a href="blog" class="header__nav-link w-inline-block">
//                                                 <div class="overflow-hidden">
//                                                     <div data-hover-elem="" class="button__texts">
//                                                         <div class="button__text">Our blog</div>
//                                                         <div class="button__text is-absolute">Our blog</div>
//                                                     </div>
//                                                 </div>
//                                             </a>
//                                         </nav>
//                                         <div data-menu-services-anim="" class="columns mod--menu active">
//                                             <div class="columns__col mod--menu">
//                                                 <a
//                                                     data-hover="prevent-responsive"
//                                                     href="services/product-research"
//                                                     class="menu__service-link w-inline-block"
//                                                 >
//                                                     <div class="menu__service-top is-soon hide">
//                                                         <img
//                                                             src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/64f852beac4d6ff134432f2b_icon-services-research.svg"
//                                                             loading="eager"
//                                                             alt="services research icon "
//                                                             class="icon-service"
//                                                         />
//                                                         <div
//                                                             data-hover-elem=""
//                                                             class="button-service active hide"
//                                                         >
//                                                             <div
//                                                                 data-hover-elem=""
//                                                                 class="button__icon-anim is-diagonal-top active"
//                                                             >
//                                                                 <div
//                                                                     data-hover-elem=""
//                                                                     class="icon-regular is-size-20-tablet w-embed"
//                                                                 >
//                                                                     <svg
//                                                                         viewBox="0 0 24 24"
//                                                                         fill="none"
//                                                                         stroke="currentcolor"
//                                                                         xmlns="http://www.w3.org/2000/svg"
//                                                                     >
//                                                                         <path
//                                                                             d="M6 18L18 6"
//                                                                             stroke-width="2"
//                                                                             stroke-linecap="round"
//                                                                             stroke-linejoin="round"
//                                                                         />
//                                                                         <path
//                                                                             d="M9 6H18V15"
//                                                                             stroke-width="2"
//                                                                             stroke-linecap="round"
//                                                                             stroke-linejoin="round"
//                                                                         />
//                                                                     </svg>
//                                                                 </div>
//                                                                 <div
//                                                                     data-hover-elem=""
//                                                                     class="icon-regular is-absolute is-diagonal-top is-size-20-tablet w-embed"
//                                                                 >
//                                                                     <svg
//                                                                         viewBox="0 0 24 24"
//                                                                         fill="none"
//                                                                         stroke="currentcolor"
//                                                                         xmlns="http://www.w3.org/2000/svg"
//                                                                     >
//                                                                         <path
//                                                                             d="M6 18L18 6"
//                                                                             stroke-width="2"
//                                                                             stroke-linecap="round"
//                                                                             stroke-linejoin="round"
//                                                                         />
//                                                                         <path
//                                                                             d="M9 6H18V15"
//                                                                             stroke-width="2"
//                                                                             stroke-linecap="round"
//                                                                             stroke-linejoin="round"
//                                                                         />
//                                                                     </svg>
//                                                                 </div>
//                                                             </div>
//                                                             <div
//                                                                 data-hover-elem=""
//                                                                 class="button__bg bg-color-black active"
//                                                             ></div>
//                                                         </div>
//                                                         <div class="menu__text-soon hide-tablet">
//                                                             COMING <br />SOON
//                                                         </div>
//                                                     </div>
//                                                     <div class="menu__service-top">
//                                                         <img
//                                                             src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/640744d0e7b29de6f1a29aee_icon-services-design.svg"
//                                                             loading="eager"
//                                                             alt="services design icon"
//                                                             class="icon-service"
//                                                         />
//                                                         <div
//                                                             data-hover-elem=""
//                                                             class="button-service active hide-tablet"
//                                                         >
//                                                             <div
//                                                                 data-hover-elem=""
//                                                                 class="button__icon-anim is-diagonal-top active"
//                                                             >
//                                                                 <div
//                                                                     data-hover-elem=""
//                                                                     class="icon-regular is-size-20-tablet w-embed"
//                                                                 >
//                                                                     <svg
//                                                                         viewBox="0 0 24 24"
//                                                                         fill="none"
//                                                                         stroke="currentcolor"
//                                                                         xmlns="http://www.w3.org/2000/svg"
//                                                                     >
//                                                                         <path
//                                                                             d="M6 18L18 6"
//                                                                             stroke-width="2"
//                                                                             stroke-linecap="round"
//                                                                             stroke-linejoin="round"
//                                                                         />
//                                                                         <path
//                                                                             d="M9 6H18V15"
//                                                                             stroke-width="2"
//                                                                             stroke-linecap="round"
//                                                                             stroke-linejoin="round"
//                                                                         />
//                                                                     </svg>
//                                                                 </div>
//                                                                 <div
//                                                                     data-hover-elem=""
//                                                                     class="icon-regular is-absolute is-diagonal-top is-size-20-tablet w-embed"
//                                                                 >
//                                                                     <svg
//                                                                         viewBox="0 0 24 24"
//                                                                         fill="none"
//                                                                         stroke="currentcolor"
//                                                                         xmlns="http://www.w3.org/2000/svg"
//                                                                     >
//                                                                         <path
//                                                                             d="M6 18L18 6"
//                                                                             stroke-width="2"
//                                                                             stroke-linecap="round"
//                                                                             stroke-linejoin="round"
//                                                                         />
//                                                                         <path
//                                                                             d="M9 6H18V15"
//                                                                             stroke-width="2"
//                                                                             stroke-linecap="round"
//                                                                             stroke-linejoin="round"
//                                                                         />
//                                                                     </svg>
//                                                                 </div>
//                                                             </div>
//                                                             <div
//                                                                 data-hover-elem=""
//                                                                 class="button__bg bg-color-black active"
//                                                             ></div>
//                                                         </div>
//                                                     </div>
//                                                     <div class="menu__service-title">Discovery</div>
//                                                     <div class="menu__service-line"></div>
//                                                 </a>
//                                                 <div class="menu__text-soon hide-desktop hide">
//                                                     <span class="menu__text-soon-span">COMING </span>SOON
//                                                 </div>
//                                                 <div class="menu__links is-soon hide-tablet">
//                                                     <div>
//                                                         To kickstart creative ideation, we begin our product
//                                                         journey with the discovery phase.
//                                                     </div>
//                                                 </div>
//                                                 <img
//                                                     src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6501bdad4a839869e45dcdd2_bg-card-menu.webp"
//                                                     loading="eager"
//                                                     alt="card menu background"
//                                                     class="menu__service-bg"
//                                                 />
//                                             </div>
//                                             <div class="columns__col mod--menu">
//                                                 <a
//                                                     data-hover="prevent-responsive"
//                                                     href="services/design"
//                                                     class="menu__service-link w-inline-block"
//                                                 >
//                                                     <div class="menu__service-top">
//                                                         <img
//                                                             src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/640744d0e7b29de6f1a29aee_icon-services-design.svg"
//                                                             loading="eager"
//                                                             alt="services design icon"
//                                                             class="icon-service"
//                                                         />
//                                                         <div
//                                                             data-hover-elem=""
//                                                             class="button-service active hide-tablet"
//                                                         >
//                                                             <div
//                                                                 data-hover-elem=""
//                                                                 class="button__icon-anim is-diagonal-top active"
//                                                             >
//                                                                 <div
//                                                                     data-hover-elem=""
//                                                                     class="icon-regular is-size-20-tablet w-embed"
//                                                                 >
//                                                                     <svg
//                                                                         viewBox="0 0 24 24"
//                                                                         fill="none"
//                                                                         stroke="currentcolor"
//                                                                         xmlns="http://www.w3.org/2000/svg"
//                                                                     >
//                                                                         <path
//                                                                             d="M6 18L18 6"
//                                                                             stroke-width="2"
//                                                                             stroke-linecap="round"
//                                                                             stroke-linejoin="round"
//                                                                         />
//                                                                         <path
//                                                                             d="M9 6H18V15"
//                                                                             stroke-width="2"
//                                                                             stroke-linecap="round"
//                                                                             stroke-linejoin="round"
//                                                                         />
//                                                                     </svg>
//                                                                 </div>
//                                                                 <div
//                                                                     data-hover-elem=""
//                                                                     class="icon-regular is-absolute is-diagonal-top is-size-20-tablet w-embed"
//                                                                 >
//                                                                     <svg
//                                                                         viewBox="0 0 24 24"
//                                                                         fill="none"
//                                                                         stroke="currentcolor"
//                                                                         xmlns="http://www.w3.org/2000/svg"
//                                                                     >
//                                                                         <path
//                                                                             d="M6 18L18 6"
//                                                                             stroke-width="2"
//                                                                             stroke-linecap="round"
//                                                                             stroke-linejoin="round"
//                                                                         />
//                                                                         <path
//                                                                             d="M9 6H18V15"
//                                                                             stroke-width="2"
//                                                                             stroke-linecap="round"
//                                                                             stroke-linejoin="round"
//                                                                         />
//                                                                     </svg>
//                                                                 </div>
//                                                             </div>
//                                                             <div
//                                                                 data-hover-elem=""
//                                                                 class="button__bg bg-color-black active"
//                                                             ></div>
//                                                         </div>
//                                                     </div>
//                                                     <div class="menu__service-title">Design</div>
//                                                     <div class="menu__service-line"></div>
//                                                 </a>
//                                                 <div class="menu__links">
//                                                     <a
//                                                         data-hover="prevent-responsive"
//                                                         href="services/ui-ux-design"
//                                                         class="menu__link w-inline-block"
//                                                     >
//                                                         <div>UI/UX design</div>
//                                                         <div data-hover-elem="" class="overflow-hidden">
//                                                             <div
//                                                                 data-hover-elem=""
//                                                                 class="menu__link-arrow w-embed"
//                                                             >
//                                                                 <svg
//                                                                     aria-hidden="true"
//                                                                     role="img"
//                                                                     fill="currentColor"
//                                                                     xmlns="http://www.w3.org/2000/svg"
//                                                                     viewBox="0 0 16 16"
//                                                                     width="100%"
//                                                                     height="100%"
//                                                                 >
//                                                                     <path
//                                                                         fill-rule="evenodd"
//                                                                         d="m5.969 2.07 5.968 5.97-5.968 5.968L4.5 12.539 9 8.04l-4.5-4.5 1.469-1.468Z"
//                                                                         clip-rule="evenodd"
//                                                                     />
//                                                                 </svg>
//                                                             </div>
//                                                         </div>
//                                                     </a>
//                                                     <a
//                                                         data-hover="prevent-responsive"
//                                                         href="services/website-design-services"
//                                                         class="menu__link w-inline-block"
//                                                     >
//                                                         <div>Web design</div>
//                                                         <div data-hover-elem="" class="overflow-hidden">
//                                                             <div
//                                                                 data-hover-elem=""
//                                                                 class="menu__link-arrow w-embed"
//                                                             >
//                                                                 <svg
//                                                                     aria-hidden="true"
//                                                                     role="img"
//                                                                     fill="currentColor"
//                                                                     xmlns="http://www.w3.org/2000/svg"
//                                                                     viewBox="0 0 16 16"
//                                                                     width="100%"
//                                                                     height="100%"
//                                                                 >
//                                                                     <path
//                                                                         fill-rule="evenodd"
//                                                                         d="m5.969 2.07 5.968 5.97-5.968 5.968L4.5 12.539 9 8.04l-4.5-4.5 1.469-1.468Z"
//                                                                         clip-rule="evenodd"
//                                                                     />
//                                                                 </svg>
//                                                             </div>
//                                                         </div>
//                                                     </a>
//                                                     <a
//                                                         data-hover="prevent-responsive"
//                                                         href="services/mobile-application-design-services"
//                                                         class="menu__link w-inline-block"
//                                                     >
//                                                         <div>Mobile app design</div>
//                                                         <div data-hover-elem="" class="overflow-hidden">
//                                                             <div
//                                                                 data-hover-elem=""
//                                                                 class="menu__link-arrow w-embed"
//                                                             >
//                                                                 <svg
//                                                                     aria-hidden="true"
//                                                                     role="img"
//                                                                     fill="currentColor"
//                                                                     xmlns="http://www.w3.org/2000/svg"
//                                                                     viewBox="0 0 16 16"
//                                                                     width="100%"
//                                                                     height="100%"
//                                                                 >
//                                                                     <path
//                                                                         fill-rule="evenodd"
//                                                                         d="m5.969 2.07 5.968 5.97-5.968 5.968L4.5 12.539 9 8.04l-4.5-4.5 1.469-1.468Z"
//                                                                         clip-rule="evenodd"
//                                                                     />
//                                                                 </svg>
//                                                             </div>
//                                                         </div>
//                                                     </a>
//                                                     <a
//                                                         data-hover="prevent-responsive"
//                                                         href="services/landing"
//                                                         class="menu__link w-inline-block"
//                                                     >
//                                                         <div>Landing page design</div>
//                                                         <div data-hover-elem="" class="overflow-hidden">
//                                                             <div
//                                                                 data-hover-elem=""
//                                                                 class="menu__link-arrow w-embed"
//                                                             >
//                                                                 <svg
//                                                                     aria-hidden="true"
//                                                                     role="img"
//                                                                     fill="currentColor"
//                                                                     xmlns="http://www.w3.org/2000/svg"
//                                                                     viewBox="0 0 16 16"
//                                                                     width="100%"
//                                                                     height="100%"
//                                                                 >
//                                                                     <path
//                                                                         fill-rule="evenodd"
//                                                                         d="m5.969 2.07 5.968 5.97-5.968 5.968L4.5 12.539 9 8.04l-4.5-4.5 1.469-1.468Z"
//                                                                         clip-rule="evenodd"
//                                                                     />
//                                                                 </svg>
//                                                             </div>
//                                                         </div>
//                                                     </a>
//                                                 </div>
//                                                 <img
//                                                     src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6501bdad4a839869e45dcdd2_bg-card-menu.webp"
//                                                     loading="eager"
//                                                     data-hover-elem=""
//                                                     alt="card menu background"
//                                                     class="menu__service-bg"
//                                                 />
//                                             </div>
//                                             <div class="columns__col mod--menu">
//                                                 <a
//                                                     data-hover="prevent-responsive"
//                                                     href="services/development"
//                                                     class="menu__service-link w-inline-block"
//                                                 >
//                                                     <div class="menu__service-top">
//                                                         <img
//                                                             src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6449421486eae3cf4d387564_development-Illustration.svg"
//                                                             loading="eager"
//                                                             alt="development Illustration icon"
//                                                             class="icon-service"
//                                                         />
//                                                         <div
//                                                             data-hover-elem=""
//                                                             class="button-service active hide-tablet"
//                                                         >
//                                                             <div
//                                                                 data-hover-elem=""
//                                                                 class="button__icon-anim is-diagonal-top active"
//                                                             >
//                                                                 <div
//                                                                     data-hover-elem=""
//                                                                     class="icon-regular is-size-20-tablet w-embed"
//                                                                 >
//                                                                     <svg
//                                                                         viewBox="0 0 24 24"
//                                                                         fill="none"
//                                                                         stroke="currentcolor"
//                                                                         xmlns="http://www.w3.org/2000/svg"
//                                                                     >
//                                                                         <path
//                                                                             d="M6 18L18 6"
//                                                                             stroke-width="2"
//                                                                             stroke-linecap="round"
//                                                                             stroke-linejoin="round"
//                                                                         />
//                                                                         <path
//                                                                             d="M9 6H18V15"
//                                                                             stroke-width="2"
//                                                                             stroke-linecap="round"
//                                                                             stroke-linejoin="round"
//                                                                         />
//                                                                     </svg>
//                                                                 </div>
//                                                                 <div
//                                                                     data-hover-elem=""
//                                                                     class="icon-regular is-absolute is-diagonal-top is-size-20-tablet w-embed"
//                                                                 >
//                                                                     <svg
//                                                                         viewBox="0 0 24 24"
//                                                                         fill="none"
//                                                                         stroke="currentcolor"
//                                                                         xmlns="http://www.w3.org/2000/svg"
//                                                                     >
//                                                                         <path
//                                                                             d="M6 18L18 6"
//                                                                             stroke-width="2"
//                                                                             stroke-linecap="round"
//                                                                             stroke-linejoin="round"
//                                                                         />
//                                                                         <path
//                                                                             d="M9 6H18V15"
//                                                                             stroke-width="2"
//                                                                             stroke-linecap="round"
//                                                                             stroke-linejoin="round"
//                                                                         />
//                                                                     </svg>
//                                                                 </div>
//                                                             </div>
//                                                             <div
//                                                                 data-hover-elem=""
//                                                                 class="button__bg bg-color-black active"
//                                                             ></div>
//                                                         </div>
//                                                     </div>
//                                                     <div class="menu__service-title">Development</div>
//                                                     <div class="menu__service-line"></div>
//                                                 </a>
//                                                 <div class="menu__links">
//                                                     <a
//                                                         data-hover="prevent-responsive"
//                                                         href="services/web-development-services"
//                                                         class="menu__link w-inline-block"
//                                                     >
//                                                         <div>Web development</div>
//                                                         <div data-hover-elem="" class="overflow-hidden">
//                                                             <div
//                                                                 data-hover-elem=""
//                                                                 class="menu__link-arrow w-embed"
//                                                             >
//                                                                 <svg
//                                                                     aria-hidden="true"
//                                                                     role="img"
//                                                                     fill="currentColor"
//                                                                     xmlns="http://www.w3.org/2000/svg"
//                                                                     viewBox="0 0 16 16"
//                                                                     width="100%"
//                                                                     height="100%"
//                                                                 >
//                                                                     <path
//                                                                         fill-rule="evenodd"
//                                                                         d="m5.969 2.07 5.968 5.97-5.968 5.968L4.5 12.539 9 8.04l-4.5-4.5 1.469-1.468Z"
//                                                                         clip-rule="evenodd"
//                                                                     />
//                                                                 </svg>
//                                                             </div>
//                                                         </div>
//                                                     </a>
//                                                     <a
//                                                         data-hover="prevent-responsive"
//                                                         href="services/software-product-development"
//                                                         class="menu__link w-inline-block"
//                                                     >
//                                                         <div>Software development</div>
//                                                         <div data-hover-elem="" class="overflow-hidden">
//                                                             <div
//                                                                 data-hover-elem=""
//                                                                 class="menu__link-arrow w-embed"
//                                                             >
//                                                                 <svg
//                                                                     aria-hidden="true"
//                                                                     role="img"
//                                                                     fill="currentColor"
//                                                                     xmlns="http://www.w3.org/2000/svg"
//                                                                     viewBox="0 0 16 16"
//                                                                     width="100%"
//                                                                     height="100%"
//                                                                 >
//                                                                     <path
//                                                                         fill-rule="evenodd"
//                                                                         d="m5.969 2.07 5.968 5.97-5.968 5.968L4.5 12.539 9 8.04l-4.5-4.5 1.469-1.468Z"
//                                                                         clip-rule="evenodd"
//                                                                     />
//                                                                 </svg>
//                                                             </div>
//                                                         </div>
//                                                     </a>
//                                                     <a
//                                                         data-hover="prevent-responsive"
//                                                         href="services/cms-development"
//                                                         class="menu__link w-inline-block"
//                                                     >
//                                                         <div>CMS development</div>
//                                                         <div data-hover-elem="" class="overflow-hidden">
//                                                             <div
//                                                                 data-hover-elem=""
//                                                                 class="menu__link-arrow w-embed"
//                                                             >
//                                                                 <svg
//                                                                     aria-hidden="true"
//                                                                     role="img"
//                                                                     fill="currentColor"
//                                                                     xmlns="http://www.w3.org/2000/svg"
//                                                                     viewBox="0 0 16 16"
//                                                                     width="100%"
//                                                                     height="100%"
//                                                                 >
//                                                                     <path
//                                                                         fill-rule="evenodd"
//                                                                         d="m5.969 2.07 5.968 5.97-5.968 5.968L4.5 12.539 9 8.04l-4.5-4.5 1.469-1.468Z"
//                                                                         clip-rule="evenodd"
//                                                                     />
//                                                                 </svg>
//                                                             </div>
//                                                         </div>
//                                                     </a>
//                                                     <a
//                                                         data-hover="prevent-responsive"
//                                                         href="services/webflow-development-services"
//                                                         class="menu__link w-inline-block"
//                                                     >
//                                                         <div>No-code development</div>
//                                                         <div data-hover-elem="" class="overflow-hidden">
//                                                             <div
//                                                                 data-hover-elem=""
//                                                                 class="menu__link-arrow w-embed"
//                                                             >
//                                                                 <svg
//                                                                     aria-hidden="true"
//                                                                     role="img"
//                                                                     fill="currentColor"
//                                                                     xmlns="http://www.w3.org/2000/svg"
//                                                                     viewBox="0 0 16 16"
//                                                                     width="100%"
//                                                                     height="100%"
//                                                                 >
//                                                                     <path
//                                                                         fill-rule="evenodd"
//                                                                         d="m5.969 2.07 5.968 5.97-5.968 5.968L4.5 12.539 9 8.04l-4.5-4.5 1.469-1.468Z"
//                                                                         clip-rule="evenodd"
//                                                                     />
//                                                                 </svg>
//                                                             </div>
//                                                         </div>
//                                                     </a>
//                                                 </div>
//                                                 <img
//                                                     src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6501bdad4a839869e45dcdd2_bg-card-menu.webp"
//                                                     loading="eager"
//                                                     data-hover-elem=""
//                                                     alt="card menu background"
//                                                     class="menu__service-bg"
//                                                 />
//                                             </div>
//                                             <div class="columns__col mod--menu mod--last-service">
//                                                 <a
//                                                     data-hover="prevent-responsive"
//                                                     href="services/marketing"
//                                                     class="menu__service-link w-inline-block"
//                                                 >
//                                                     <div class="menu__service-top">
//                                                         <img
//                                                             src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6449410877257b6dcfa0ec88_marketing-illustration.svg"
//                                                             loading="eager"
//                                                             alt="marketing illustration icon"
//                                                             class="icon-service"
//                                                         />
//                                                         <div
//                                                             data-hover-elem=""
//                                                             class="button-service active hide-tablet"
//                                                         >
//                                                             <div
//                                                                 data-hover-elem=""
//                                                                 class="button__icon-anim is-diagonal-top active"
//                                                             >
//                                                                 <div
//                                                                     data-hover-elem=""
//                                                                     class="icon-regular is-size-20-tablet w-embed"
//                                                                 >
//                                                                     <svg
//                                                                         viewBox="0 0 24 24"
//                                                                         fill="none"
//                                                                         stroke="currentcolor"
//                                                                         xmlns="http://www.w3.org/2000/svg"
//                                                                     >
//                                                                         <path
//                                                                             d="M6 18L18 6"
//                                                                             stroke-width="2"
//                                                                             stroke-linecap="round"
//                                                                             stroke-linejoin="round"
//                                                                         />
//                                                                         <path
//                                                                             d="M9 6H18V15"
//                                                                             stroke-width="2"
//                                                                             stroke-linecap="round"
//                                                                             stroke-linejoin="round"
//                                                                         />
//                                                                     </svg>
//                                                                 </div>
//                                                                 <div
//                                                                     data-hover-elem=""
//                                                                     class="icon-regular is-absolute is-diagonal-top is-size-20-tablet w-embed"
//                                                                 >
//                                                                     <svg
//                                                                         viewBox="0 0 24 24"
//                                                                         fill="none"
//                                                                         stroke="currentcolor"
//                                                                         xmlns="http://www.w3.org/2000/svg"
//                                                                     >
//                                                                         <path
//                                                                             d="M6 18L18 6"
//                                                                             stroke-width="2"
//                                                                             stroke-linecap="round"
//                                                                             stroke-linejoin="round"
//                                                                         />
//                                                                         <path
//                                                                             d="M9 6H18V15"
//                                                                             stroke-width="2"
//                                                                             stroke-linecap="round"
//                                                                             stroke-linejoin="round"
//                                                                         />
//                                                                     </svg>
//                                                                 </div>
//                                                             </div>
//                                                             <div
//                                                                 data-hover-elem=""
//                                                                 class="button__bg bg-color-black active"
//                                                             ></div>
//                                                         </div>
//                                                     </div>
//                                                     <div class="menu__service-title">Marketing</div>
//                                                     <div class="menu__service-line"></div>
//                                                 </a>
//                                                 <div class="menu__links">
//                                                     <a
//                                                         data-hover="prevent-responsive"
//                                                         href="services/branding"
//                                                         class="menu__link w-inline-block"
//                                                     >
//                                                         <div>Branding</div>
//                                                         <div data-hover-elem="" class="overflow-hidden">
//                                                             <div
//                                                                 data-hover-elem=""
//                                                                 class="menu__link-arrow w-embed"
//                                                             >
//                                                                 <svg
//                                                                     aria-hidden="true"
//                                                                     role="img"
//                                                                     fill="currentColor"
//                                                                     xmlns="http://www.w3.org/2000/svg"
//                                                                     viewBox="0 0 16 16"
//                                                                     width="100%"
//                                                                     height="100%"
//                                                                 >
//                                                                     <path
//                                                                         fill-rule="evenodd"
//                                                                         d="m5.969 2.07 5.968 5.97-5.968 5.968L4.5 12.539 9 8.04l-4.5-4.5 1.469-1.468Z"
//                                                                         clip-rule="evenodd"
//                                                                     />
//                                                                 </svg>
//                                                             </div>
//                                                         </div>
//                                                     </a>
//                                                     <a
//                                                         data-hover="prevent-responsive"
//                                                         href="services/content-marketing"
//                                                         class="menu__link w-inline-block"
//                                                     >
//                                                         <div>Content marketing</div>
//                                                         <div data-hover-elem="" class="overflow-hidden">
//                                                             <div
//                                                                 data-hover-elem=""
//                                                                 class="menu__link-arrow w-embed"
//                                                             >
//                                                                 <svg
//                                                                     aria-hidden="true"
//                                                                     role="img"
//                                                                     fill="currentColor"
//                                                                     xmlns="http://www.w3.org/2000/svg"
//                                                                     viewBox="0 0 16 16"
//                                                                     width="100%"
//                                                                     height="100%"
//                                                                 >
//                                                                     <path
//                                                                         fill-rule="evenodd"
//                                                                         d="m5.969 2.07 5.968 5.97-5.968 5.968L4.5 12.539 9 8.04l-4.5-4.5 1.469-1.468Z"
//                                                                         clip-rule="evenodd"
//                                                                     />
//                                                                 </svg>
//                                                             </div>
//                                                         </div>
//                                                     </a>
//                                                     <a
//                                                         data-hover="prevent-responsive"
//                                                         href="services/pitch"
//                                                         class="menu__link w-inline-block"
//                                                     >
//                                                         <div>Pitch deck design</div>
//                                                         <div data-hover-elem="" class="overflow-hidden">
//                                                             <div
//                                                                 data-hover-elem=""
//                                                                 class="menu__link-arrow w-embed"
//                                                             >
//                                                                 <svg
//                                                                     aria-hidden="true"
//                                                                     role="img"
//                                                                     fill="currentColor"
//                                                                     xmlns="http://www.w3.org/2000/svg"
//                                                                     viewBox="0 0 16 16"
//                                                                     width="100%"
//                                                                     height="100%"
//                                                                 >
//                                                                     <path
//                                                                         fill-rule="evenodd"
//                                                                         d="m5.969 2.07 5.968 5.97-5.968 5.968L4.5 12.539 9 8.04l-4.5-4.5 1.469-1.468Z"
//                                                                         clip-rule="evenodd"
//                                                                     />
//                                                                 </svg>
//                                                             </div>
//                                                         </div>
//                                                     </a>
//                                                     <a
//                                                         data-hover="prevent-responsive"
//                                                         href="services/search-engine-optimisation"
//                                                         class="menu__link w-inline-block"
//                                                     >
//                                                         <div>SEO</div>
//                                                         <div data-hover-elem="" class="overflow-hidden">
//                                                             <div
//                                                                 data-hover-elem=""
//                                                                 class="menu__link-arrow active w-embed"
//                                                             >
//                                                                 <svg
//                                                                     aria-hidden="true"
//                                                                     role="img"
//                                                                     fill="currentColor"
//                                                                     xmlns="http://www.w3.org/2000/svg"
//                                                                     viewBox="0 0 16 16"
//                                                                     width="100%"
//                                                                     height="100%"
//                                                                 >
//                                                                     <path
//                                                                         fill-rule="evenodd"
//                                                                         d="m5.969 2.07 5.968 5.97-5.968 5.968L4.5 12.539 9 8.04l-4.5-4.5 1.469-1.468Z"
//                                                                         clip-rule="evenodd"
//                                                                     />
//                                                                 </svg>
//                                                             </div>
//                                                         </div>
//                                                     </a>
//                                                 </div>
//                                                 <img
//                                                     src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6501bdad4a839869e45dcdd2_bg-card-menu.webp"
//                                                     loading="eager"
//                                                     data-hover-elem=""
//                                                     alt="card menu background"
//                                                     class="menu__service-bg active"
//                                                 />
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div class="menu__btn-wrap">
//                                         <a
//                                             data-hover=""
//                                             href="contacts"
//                                             class="button is-small is-white w-inline-block"
//                                         >
//                                             <div class="button__overflow">
//                                                 <div data-hover-elem="" class="button__texts">
//                                                     <div class="button__text">Contact us</div>
//                                                     <div class="button__text is-absolute">Contact us</div>
//                                                 </div>
//                                             </div>
//                                             <div data-hover-elem="" class="button__icons">
//                                                 <div
//                                                     data-hover-elem=""
//                                                     data-is-ix2-target="1"
//                                                     class="button__icon-lottie"
//                                                     data-w-id="9a7f1e43-c3c8-3ced-5fe1-c8b9d94aa658"
//                                                     data-animation-type="lottie"
//                                                     data-src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6501d01983656d12abf8ff87_icon-pen.json"
//                                                     data-loop="1"
//                                                     data-direction="1"
//                                                     data-autoplay="0"
//                                                     data-renderer="svg"
//                                                     data-default-duration="1.5166666666666666"
//                                                     data-duration="0"
//                                                     data-ix2-initial-state="0"
//                                                 ></div>
//                                                 <div
//                                                     data-hover-elem=""
//                                                     class="button__bg bg-color-white"
//                                                 ></div>
//                                             </div>
//                                         </a>
//                                         <link rel="prefetch" href="contacts" />
//                                     </div>
//                                 </div>
//                                 <div data-menu-close="" class="menu__close hide"></div>
//                             </div>
//                         </header>
//                         <div class="main">
//                             <div class="section mod--hero">
//                                 <div class="container">
//                                     <div
//                                         data-anim-trigger="load"
//                                         class="columns mod--blog-hero is-projects"
//                                     >
//                                         <div
//                                             data-anim-delay=""
//                                             class="columns__col mod--blog-hero is-1 anim"
//                                         >
//                                             <div class="post-card__img-link is-big is-big-border">
//                                                 <div class="heading-wrap is-post-big-border">
//                                                     <h1 class="heading-1 mod--blog-hero">
//                                                         OUR <br />BEST <br />WORKS
//                                                     </h1>
//                                                 </div>
//                                                 <div class="post-big-border__bottom">
//                                                     <div class="post-big-border__content">
//                                                         <div class="post-big-border__advant">
//                                                             <div class="post-big-border__advant-numb">350+</div>
//                                                             <div class="post-big-border__advant-text is-1">
//                                                                 projects <br />done
//                                                             </div>
//                                                             <div class="post-big-border__advant-text is-2">
//                                                                 350+ projects <br />done
//                                                             </div>
//                                                         </div>
//                                                         <a
//                                                             href="projects?be99beb4_page=4#posts"
//                                                             data-hover=""
//                                                             class="button-flex w-inline-block"
//                                                         ><img
//                                                                 src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/644a822df3c2ce4b21e19455_icon-hero-project.svg"
//                                                                 loading="eager"
//                                                                 data-hover-elem=""
//                                                                 alt=""
//                                                                 class="icon-scale is-1" />
//                                                             <div class="button is-small-simple bg-color-yellow">
//                                                                 <div class="button__overflow">
//                                                                     <div data-hover-elem="" class="button__texts">
//                                                                         <div class="button__text">all cases</div>
//                                                                         <div class="button__text is-absolute">
//                                                                             all cases
//                                                                         </div>
//                                                                     </div>
//                                                                 </div>
//                                                             </div>
//                                                             <img
//                                                                 src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/644a822df3c2ce4b21e19455_icon-hero-project.svg"
//                                                                 loading="eager"
//                                                                 data-hover-elem=""
//                                                                 alt=""
//                                                                 class="icon-scale is-2"
//                                                             /></a>
//                                                     </div>
//                                                 </div>
//                                                 <div
//                                                     data-remodal-target="video"
//                                                     data-hover=""
//                                                     class="projects-hero__video-wrap"
//                                                 >
//                                                     <img
//                                                         src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/641adc8c6e983a3b4cb7f03d_works-swiper-img.webp"
//                                                         loading="lazy"
//                                                         sizes="100vw"
//                                                         srcset="
//                         https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/641adc8c6e983a3b4cb7f03d_works-swiper-img-p-500.webp   500w,
//                         https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/641adc8c6e983a3b4cb7f03d_works-swiper-img-p-800.webp   800w,
//                         https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/641adc8c6e983a3b4cb7f03d_works-swiper-img-p-1080.webp 1080w,
//                         https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/641adc8c6e983a3b4cb7f03d_works-swiper-img.webp        1380w
//                       "
//                                                         alt=""
//                                                         class="projects-hero__video"
//                                                     />
//                                                     <div class="projects-hero__play">
//                                                         <div class="button-play mod--projects">
//                                                             <div
//                                                                 data-hover-elem=""
//                                                                 class="button__bg bg-color-yellow"
//                                                             ></div>
//                                                             <div class="button-play__icon mod--projects w-embed">
//                                                                 <svg
//                                                                     aria-hidden="true"
//                                                                     role="img"
//                                                                     fill="currentColor"
//                                                                     xmlns="http://www.w3.org/2000/svg"
//                                                                     viewBox="0 0 16 16"
//                                                                     width="100%"
//                                                                     height="100%"
//                                                                 >
//                                                                     <path
//                                                                         d="M13.9 7.35a.7.7 0 0 1 0 1.213l-8.4 4.85a.7.7 0 0 1-1.05-.606v-9.7a.7.7 0 0 1 1.05-.606l8.4 4.85Z"
//                                                                     />
//                                                                 </svg>
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                         <div
//                                             data-anim-delay="100"
//                                             class="columns__col mod--blog-hero anim"
//                                         >
//                                             <div
//                                                 data-swiper="projects-hero"
//                                                 class="swiper mod--projects-hero w-dyn-list"
//                                             >
//                                                 <div
//                                                     fs-cmsnest-element="list"
//                                                     role="list"
//                                                     class="swiper-wrapper mod--projects-hero w-dyn-items"
//                                                 >
//                                                     <div
//                                                         role="listitem"
//                                                         class="swiper-slide mod--projects-hero2 w-dyn-item"
//                                                     >
//                                                         <a
//                                                             data-hover=""
//                                                             data-mask="projects-big-invert"
//                                                             href="project/kinetik"
//                                                             class="project-card w-inline-block"
//                                                         >
//                                                             <div class="project-card-big__img-wrap">
//                                                                 <img
//                                                                     alt=""
//                                                                     loading="lazy"
//                                                                     data-hover-elem=""
//                                                                     src="https://cdn.prod.website-files.com/63fc977c14aaea404dce4439/660193d2b78a5e40971f414c_Preview.webp"
//                                                                     sizes="(max-width: 479px) 100vw, (max-width: 767px) 51vw, (max-width: 991px) 49vw, 50vw"
//                                                                     srcset="
//                               https://cdn.prod.website-files.com/63fc977c14aaea404dce4439/660193d2b78a5e40971f414c_Preview-p-500.webp   500w,
//                               https://cdn.prod.website-files.com/63fc977c14aaea404dce4439/660193d2b78a5e40971f414c_Preview-p-800.webp   800w,
//                               https://cdn.prod.website-files.com/63fc977c14aaea404dce4439/660193d2b78a5e40971f414c_Preview-p-1080.webp 1080w,
//                               https://cdn.prod.website-files.com/63fc977c14aaea404dce4439/660193d2b78a5e40971f414c_Preview.webp        1280w
//                             "
//                                                                     class="post-card__img is-full"
//                                                                 />
//                                                             </div>
//                                                             <div
//                                                                 class="project-card-big__content mod--projects-hero"
//                                                             >
//                                                                 <div class="post-card__param is--big">
//                                                                     <div
//                                                                         fs-cmsnest-collection="industries"
//                                                                         fs-cmsnest-element="nest-target"
//                                                                         class="project__tag"
//                                                                     >
//                                                                         INDUSTRY
//                                                                     </div>
//                                                                     <div>
//                                                                         <img
//                                                                             src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f93d2fc2bf12abc331_flag-USA.svg"
//                                                                             loading="lazy"
//                                                                             alt=""
//                                                                             class="project__flag"
//                                                                         /><img
//                                                                             src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f57d6e1f1f7843d783_flag-UK.svg"
//                                                                             loading="lazy"
//                                                                             alt=""
//                                                                             class="project__flag w-condition-invisible"
//                                                                         /><img
//                                                                             src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f58b8a864aefae4cc4_flag-France.svg"
//                                                                             loading="lazy"
//                                                                             alt=""
//                                                                             class="project__flag w-condition-invisible"
//                                                                         /><img
//                                                                             src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f5bba1c0265ae1c9f8_flag-Canada.svg"
//                                                                             loading="lazy"
//                                                                             alt=""
//                                                                             class="project__flag w-condition-invisible"
//                                                                         /><img
//                                                                             src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f5a2bfa47c04db6ea7_flag-Switzerland-1.svg"
//                                                                             loading="lazy"
//                                                                             alt=""
//                                                                             class="project__flag w-condition-invisible"
//                                                                         /><img
//                                                                             src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f57d6e1f1f7843d77f_flag-Switzerland.svg"
//                                                                             loading="lazy"
//                                                                             alt=""
//                                                                             class="project__flag w-condition-invisible"
//                                                                         /><img
//                                                                             src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f5e7f20fc58fe5c44e_flag-Israel.svg"
//                                                                             loading="lazy"
//                                                                             alt=""
//                                                                             class="project__flag w-condition-invisible"
//                                                                         /><img
//                                                                             src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f5c0f20cf420b31974_flag-Morocco.svg"
//                                                                             loading="lazy"
//                                                                             alt=""
//                                                                             class="project__flag w-condition-invisible"
//                                                                         /><img
//                                                                             src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f5d720129808ba77dd_flag-Singapore.svg"
//                                                                             loading="lazy"
//                                                                             alt=""
//                                                                             class="project__flag w-condition-invisible"
//                                                                         /><img
//                                                                             src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f592cb738c6af0302b_flag-Taiwan.svg"
//                                                                             loading="lazy"
//                                                                             alt=""
//                                                                             class="project__flag w-condition-invisible"
//                                                                         /><img
//                                                                             src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f7aa02d59cf699d4a6_flag-Ukraine.svg"
//                                                                             loading="lazy"
//                                                                             alt=""
//                                                                             class="project__flag w-condition-invisible"
//                                                                         /><img
//                                                                             src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f5242c5a0ca8d07969_flag-Austria.svg"
//                                                                             loading="lazy"
//                                                                             alt=""
//                                                                             class="project__flag w-condition-invisible"
//                                                                         /><img
//                                                                             src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f7d720129808ba78ab_flag-Spain.svg"
//                                                                             loading="lazy"
//                                                                             alt=""
//                                                                             class="project__flag w-condition-invisible"
//                                                                         /><img
//                                                                             src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f5e5892608c2ca9cbe_flag-Norway.svg"
//                                                                             loading="lazy"
//                                                                             alt=""
//                                                                             class="project__flag w-condition-invisible"
//                                                                         /><img
//                                                                             src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f54d72d127cd1e97c8_flag-Netherlands.svg"
//                                                                             loading="lazy"
//                                                                             alt=""
//                                                                             class="project__flag w-condition-invisible"
//                                                                         />
//                                                                     </div>
//                                                                 </div>
//                                                                 <h3 class="heading-6 text-style-2lines">
//                                                                     Kinetik Platform with over 3,500 Integrated
//                                                                     Providers
//                                                                 </h3>
//                                                             </div>
//                                                         </a>
//                                                     </div>
//                                                     <div
//                                                         role="listitem"
//                                                         class="swiper-slide mod--projects-hero2 w-dyn-item"
//                                                     >
//                                                         <a
//                                                             data-hover=""
//                                                             data-mask="projects-big-invert"
//                                                             href="project/bookclub24"
//                                                             class="project-card w-inline-block"
//                                                         >
//                                                             <div class="project-card-big__img-wrap">
//                                                                 <img
//                                                                     alt=""
//                                                                     loading="lazy"
//                                                                     data-hover-elem=""
//                                                                     src="https://cdn.prod.website-files.com/63fc977c14aaea404dce4439/660199184e4243c8019bc577_Preview.webp"
//                                                                     sizes="(max-width: 479px) 100vw, (max-width: 767px) 51vw, (max-width: 991px) 49vw, 50vw"
//                                                                     srcset="
//                               https://cdn.prod.website-files.com/63fc977c14aaea404dce4439/660199184e4243c8019bc577_Preview-p-500.webp   500w,
//                               https://cdn.prod.website-files.com/63fc977c14aaea404dce4439/660199184e4243c8019bc577_Preview-p-800.webp   800w,
//                               https://cdn.prod.website-files.com/63fc977c14aaea404dce4439/660199184e4243c8019bc577_Preview-p-1080.webp 1080w,
//                               https://cdn.prod.website-files.com/63fc977c14aaea404dce4439/660199184e4243c8019bc577_Preview.webp        1280w
//                             "
//                                                                     class="post-card__img is-full"
//                                                                 />
//                                                             </div>
//                                                             <div
//                                                                 class="project-card-big__content mod--projects-hero"
//                                                             >
//                                                                 <div class="post-card__param is--big">
//                                                                     <div
//                                                                         fs-cmsnest-collection="industries"
//                                                                         fs-cmsnest-element="nest-target"
//                                                                         class="project__tag"
//                                                                     >
//                                                                         INDUSTRY
//                                                                     </div>
//                                                                     <div>
//                                                                         <img
//                                                                             src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f93d2fc2bf12abc331_flag-USA.svg"
//                                                                             loading="lazy"
//                                                                             alt=""
//                                                                             class="project__flag w-condition-invisible"
//                                                                         /><img
//                                                                             src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f57d6e1f1f7843d783_flag-UK.svg"
//                                                                             loading="lazy"
//                                                                             alt=""
//                                                                             class="project__flag w-condition-invisible"
//                                                                         /><img
//                                                                             src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f58b8a864aefae4cc4_flag-France.svg"
//                                                                             loading="lazy"
//                                                                             alt=""
//                                                                             class="project__flag w-condition-invisible"
//                                                                         /><img
//                                                                             src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f5bba1c0265ae1c9f8_flag-Canada.svg"
//                                                                             loading="lazy"
//                                                                             alt=""
//                                                                             class="project__flag w-condition-invisible"
//                                                                         /><img
//                                                                             src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f5a2bfa47c04db6ea7_flag-Switzerland-1.svg"
//                                                                             loading="lazy"
//                                                                             alt=""
//                                                                             class="project__flag w-condition-invisible"
//                                                                         /><img
//                                                                             src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f57d6e1f1f7843d77f_flag-Switzerland.svg"
//                                                                             loading="lazy"
//                                                                             alt=""
//                                                                             class="project__flag"
//                                                                         /><img
//                                                                             src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f5e7f20fc58fe5c44e_flag-Israel.svg"
//                                                                             loading="lazy"
//                                                                             alt=""
//                                                                             class="project__flag w-condition-invisible"
//                                                                         /><img
//                                                                             src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f5c0f20cf420b31974_flag-Morocco.svg"
//                                                                             loading="lazy"
//                                                                             alt=""
//                                                                             class="project__flag w-condition-invisible"
//                                                                         /><img
//                                                                             src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f5d720129808ba77dd_flag-Singapore.svg"
//                                                                             loading="lazy"
//                                                                             alt=""
//                                                                             class="project__flag w-condition-invisible"
//                                                                         /><img
//                                                                             src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f592cb738c6af0302b_flag-Taiwan.svg"
//                                                                             loading="lazy"
//                                                                             alt=""
//                                                                             class="project__flag w-condition-invisible"
//                                                                         /><img
//                                                                             src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f7aa02d59cf699d4a6_flag-Ukraine.svg"
//                                                                             loading="lazy"
//                                                                             alt=""
//                                                                             class="project__flag w-condition-invisible"
//                                                                         /><img
//                                                                             src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f5242c5a0ca8d07969_flag-Austria.svg"
//                                                                             loading="lazy"
//                                                                             alt=""
//                                                                             class="project__flag w-condition-invisible"
//                                                                         /><img
//                                                                             src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f7d720129808ba78ab_flag-Spain.svg"
//                                                                             loading="lazy"
//                                                                             alt=""
//                                                                             class="project__flag w-condition-invisible"
//                                                                         /><img
//                                                                             src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f5e5892608c2ca9cbe_flag-Norway.svg"
//                                                                             loading="lazy"
//                                                                             alt=""
//                                                                             class="project__flag w-condition-invisible"
//                                                                         /><img
//                                                                             src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f54d72d127cd1e97c8_flag-Netherlands.svg"
//                                                                             loading="lazy"
//                                                                             alt=""
//                                                                             class="project__flag w-condition-invisible"
//                                                                         />
//                                                                     </div>
//                                                                 </div>
//                                                                 <h3 class="heading-6 text-style-2lines">
//                                                                     Digital rebirth of Bookclub24 — #1 German online
//                                                                     library for book collectors
//                                                                 </h3>
//                                                             </div>
//                                                         </a>
//                                                     </div>
//                                                     <div
//                                                         role="listitem"
//                                                         class="swiper-slide mod--projects-hero2 w-dyn-item"
//                                                     >
//                                                         <a
//                                                             data-hover=""
//                                                             data-mask="projects-big-invert"
//                                                             href="project/raven"
//                                                             class="project-card w-inline-block"
//                                                         >
//                                                             <div class="project-card-big__img-wrap">
//                                                                 <img
//                                                                     alt=""
//                                                                     loading="lazy"
//                                                                     data-hover-elem=""
//                                                                     src="https://cdn.prod.website-files.com/63fc977c14aaea404dce4439/66019cc561302e60a73e61dc_Preview.webp"
//                                                                     sizes="(max-width: 479px) 100vw, (max-width: 767px) 51vw, (max-width: 991px) 49vw, 50vw"
//                                                                     srcset="
//                               https://cdn.prod.website-files.com/63fc977c14aaea404dce4439/66019cc561302e60a73e61dc_Preview-p-500.webp   500w,
//                               https://cdn.prod.website-files.com/63fc977c14aaea404dce4439/66019cc561302e60a73e61dc_Preview-p-800.webp   800w,
//                               https://cdn.prod.website-files.com/63fc977c14aaea404dce4439/66019cc561302e60a73e61dc_Preview-p-1080.webp 1080w,
//                               https://cdn.prod.website-files.com/63fc977c14aaea404dce4439/66019cc561302e60a73e61dc_Preview.webp        1280w
//                             "
//                                                                     class="post-card__img is-full"
//                                                                 />
//                                                             </div>
//                                                             <div
//                                                                 class="project-card-big__content mod--projects-hero"
//                                                             >
//                                                                 <div class="post-card__param is--big">
//                                                                     <div
//                                                                         fs-cmsnest-collection="industries"
//                                                                         fs-cmsnest-element="nest-target"
//                                                                         class="project__tag"
//                                                                     >
//                                                                         INDUSTRY
//                                                                     </div>
//                                                                     <div>
//                                                                         <img
//                                                                             src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f93d2fc2bf12abc331_flag-USA.svg"
//                                                                             loading="lazy"
//                                                                             alt=""
//                                                                             class="project__flag w-condition-invisible"
//                                                                         /><img
//                                                                             src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f57d6e1f1f7843d783_flag-UK.svg"
//                                                                             loading="lazy"
//                                                                             alt=""
//                                                                             class="project__flag"
//                                                                         /><img
//                                                                             src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f58b8a864aefae4cc4_flag-France.svg"
//                                                                             loading="lazy"
//                                                                             alt=""
//                                                                             class="project__flag w-condition-invisible"
//                                                                         /><img
//                                                                             src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f5bba1c0265ae1c9f8_flag-Canada.svg"
//                                                                             loading="lazy"
//                                                                             alt=""
//                                                                             class="project__flag w-condition-invisible"
//                                                                         /><img
//                                                                             src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f5a2bfa47c04db6ea7_flag-Switzerland-1.svg"
//                                                                             loading="lazy"
//                                                                             alt=""
//                                                                             class="project__flag w-condition-invisible"
//                                                                         /><img
//                                                                             src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f57d6e1f1f7843d77f_flag-Switzerland.svg"
//                                                                             loading="lazy"
//                                                                             alt=""
//                                                                             class="project__flag w-condition-invisible"
//                                                                         /><img
//                                                                             src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f5e7f20fc58fe5c44e_flag-Israel.svg"
//                                                                             loading="lazy"
//                                                                             alt=""
//                                                                             class="project__flag w-condition-invisible"
//                                                                         /><img
//                                                                             src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f5c0f20cf420b31974_flag-Morocco.svg"
//                                                                             loading="lazy"
//                                                                             alt=""
//                                                                             class="project__flag w-condition-invisible"
//                                                                         /><img
//                                                                             src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f5d720129808ba77dd_flag-Singapore.svg"
//                                                                             loading="lazy"
//                                                                             alt=""
//                                                                             class="project__flag w-condition-invisible"
//                                                                         /><img
//                                                                             src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f592cb738c6af0302b_flag-Taiwan.svg"
//                                                                             loading="lazy"
//                                                                             alt=""
//                                                                             class="project__flag w-condition-invisible"
//                                                                         /><img
//                                                                             src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f7aa02d59cf699d4a6_flag-Ukraine.svg"
//                                                                             loading="lazy"
//                                                                             alt=""
//                                                                             class="project__flag w-condition-invisible"
//                                                                         /><img
//                                                                             src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f5242c5a0ca8d07969_flag-Austria.svg"
//                                                                             loading="lazy"
//                                                                             alt=""
//                                                                             class="project__flag w-condition-invisible"
//                                                                         /><img
//                                                                             src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f7d720129808ba78ab_flag-Spain.svg"
//                                                                             loading="lazy"
//                                                                             alt=""
//                                                                             class="project__flag w-condition-invisible"
//                                                                         /><img
//                                                                             src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f5e5892608c2ca9cbe_flag-Norway.svg"
//                                                                             loading="lazy"
//                                                                             alt=""
//                                                                             class="project__flag w-condition-invisible"
//                                                                         /><img
//                                                                             src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f54d72d127cd1e97c8_flag-Netherlands.svg"
//                                                                             loading="lazy"
//                                                                             alt=""
//                                                                             class="project__flag w-condition-invisible"
//                                                                         />
//                                                                     </div>
//                                                                 </div>
//                                                                 <h3 class="heading-6 text-style-2lines">
//                                                                     Raven.gg — the leading brand for custom esports
//                                                                     clothing design
//                                                                 </h3>
//                                                             </div>
//                                                         </a>
//                                                     </div>
//                                                     <div
//                                                         role="listitem"
//                                                         class="swiper-slide mod--projects-hero2 w-dyn-item"
//                                                     >
//                                                         <a
//                                                             data-hover=""
//                                                             data-mask="projects-big-invert"
//                                                             href="project/mighty-buildings"
//                                                             class="project-card w-inline-block"
//                                                         >
//                                                             <div class="project-card-big__img-wrap">
//                                                                 <img
//                                                                     alt=""
//                                                                     loading="lazy"
//                                                                     data-hover-elem=""
//                                                                     src="https://cdn.prod.website-files.com/63fc977c14aaea404dce4439/66019359736ba489b08485fa_Preview1.webp"
//                                                                     sizes="(max-width: 479px) 100vw, (max-width: 767px) 51vw, (max-width: 991px) 49vw, 50vw"
//                                                                     srcset="
//                               https://cdn.prod.website-files.com/63fc977c14aaea404dce4439/66019359736ba489b08485fa_Preview1-p-500.webp   500w,
//                               https://cdn.prod.website-files.com/63fc977c14aaea404dce4439/66019359736ba489b08485fa_Preview1-p-800.webp   800w,
//                               https://cdn.prod.website-files.com/63fc977c14aaea404dce4439/66019359736ba489b08485fa_Preview1-p-1080.webp 1080w,
//                               https://cdn.prod.website-files.com/63fc977c14aaea404dce4439/66019359736ba489b08485fa_Preview1.webp        1280w
//                             "
//                                                                     class="post-card__img is-full"
//                                                                 />
//                                                             </div>
//                                                             <div
//                                                                 class="project-card-big__content mod--projects-hero"
//                                                             >
//                                                                 <div class="post-card__param is--big">
//                                                                     <div
//                                                                         fs-cmsnest-collection="industries"
//                                                                         fs-cmsnest-element="nest-target"
//                                                                         class="project__tag"
//                                                                     >
//                                                                         INDUSTRY
//                                                                     </div>
//                                                                     <div>
//                                                                         <img
//                                                                             src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f93d2fc2bf12abc331_flag-USA.svg"
//                                                                             loading="lazy"
//                                                                             alt=""
//                                                                             class="project__flag"
//                                                                         /><img
//                                                                             src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f57d6e1f1f7843d783_flag-UK.svg"
//                                                                             loading="lazy"
//                                                                             alt=""
//                                                                             class="project__flag w-condition-invisible"
//                                                                         /><img
//                                                                             src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f58b8a864aefae4cc4_flag-France.svg"
//                                                                             loading="lazy"
//                                                                             alt=""
//                                                                             class="project__flag w-condition-invisible"
//                                                                         /><img
//                                                                             src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f5bba1c0265ae1c9f8_flag-Canada.svg"
//                                                                             loading="lazy"
//                                                                             alt=""
//                                                                             class="project__flag w-condition-invisible"
//                                                                         /><img
//                                                                             src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f5a2bfa47c04db6ea7_flag-Switzerland-1.svg"
//                                                                             loading="lazy"
//                                                                             alt=""
//                                                                             class="project__flag w-condition-invisible"
//                                                                         /><img
//                                                                             src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f57d6e1f1f7843d77f_flag-Switzerland.svg"
//                                                                             loading="lazy"
//                                                                             alt=""
//                                                                             class="project__flag w-condition-invisible"
//                                                                         /><img
//                                                                             src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f5e7f20fc58fe5c44e_flag-Israel.svg"
//                                                                             loading="lazy"
//                                                                             alt=""
//                                                                             class="project__flag w-condition-invisible"
//                                                                         /><img
//                                                                             src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f5c0f20cf420b31974_flag-Morocco.svg"
//                                                                             loading="lazy"
//                                                                             alt=""
//                                                                             class="project__flag w-condition-invisible"
//                                                                         /><img
//                                                                             src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f5d720129808ba77dd_flag-Singapore.svg"
//                                                                             loading="lazy"
//                                                                             alt=""
//                                                                             class="project__flag w-condition-invisible"
//                                                                         /><img
//                                                                             src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f592cb738c6af0302b_flag-Taiwan.svg"
//                                                                             loading="lazy"
//                                                                             alt=""
//                                                                             class="project__flag w-condition-invisible"
//                                                                         /><img
//                                                                             src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f7aa02d59cf699d4a6_flag-Ukraine.svg"
//                                                                             loading="lazy"
//                                                                             alt=""
//                                                                             class="project__flag w-condition-invisible"
//                                                                         /><img
//                                                                             src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f5242c5a0ca8d07969_flag-Austria.svg"
//                                                                             loading="lazy"
//                                                                             alt=""
//                                                                             class="project__flag w-condition-invisible"
//                                                                         /><img
//                                                                             src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f7d720129808ba78ab_flag-Spain.svg"
//                                                                             loading="lazy"
//                                                                             alt=""
//                                                                             class="project__flag w-condition-invisible"
//                                                                         /><img
//                                                                             src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f5e5892608c2ca9cbe_flag-Norway.svg"
//                                                                             loading="lazy"
//                                                                             alt=""
//                                                                             class="project__flag w-condition-invisible"
//                                                                         /><img
//                                                                             src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f54d72d127cd1e97c8_flag-Netherlands.svg"
//                                                                             loading="lazy"
//                                                                             alt=""
//                                                                             class="project__flag w-condition-invisible"
//                                                                         />
//                                                                     </div>
//                                                                 </div>
//                                                                 <h3 class="heading-6 text-style-2lines">
//                                                                     Mighty Buildings — sustainable 3D printed houses of
//                                                                     the future
//                                                                 </h3>
//                                                             </div>
//                                                         </a>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                             <div class="projects-hero__pagination">
//                                                 <div
//                                                     data-swiper-pagination-style="load"
//                                                     data-swiper-pagination="projects-hero"
//                                                     class="swiper-pagin mod--projects-hero"
//                                                 >
//                                                     <div class="swiper-pagination__item active"></div>
//                                                     <div class="swiper-pagination__item"></div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div class="section z-index-3">
//                                 <div id="posts" class="container">
//                                     <div class="columns mod--projects">
//                                         <div class="columns__col mod--projects is--1">
//                                             <div
//                                                 class="heading-wrap mod--projects-catalog is-mobile w-clearfix"
//                                             >
//                                                 <div class="space-heading-4"></div>
//                                                 <h4 class="heading-4">
//                                                     We&#x27;ve helped over 250 firms reach their full potential,
//                                                     and we&#x27;re happy to do the same for you! Find out how
//                                                     our skills can contribute to your success.
//                                                 </h4>
//                                             </div>
//                                             <div
//                                                 data-sidebar-sticky=""
//                                                 class="projects-sidebar is--sidebar-anim"
//                                             >
//                                                 <div
//                                                     data-filter-btn=""
//                                                     class="button mod--projects-sort active"
//                                                 >
//                                                     <div class="button__text mod--projects-sort">Filters</div>
//                                                     <div
//                                                         data-filter-icon=""
//                                                         data-anim=""
//                                                         class="button__icons mod--projects-sort active"
//                                                     >
//                                                         <div class="icon-small w-embed">
//                                                             <svg
//                                                                 aria-hidden="true"
//                                                                 role="img"
//                                                                 fill="currentColor"
//                                                                 xmlns="http://www.w3.org/2000/svg"
//                                                                 viewBox="0 0 20 20"
//                                                                 width="100%"
//                                                                 height="100%"
//                                                             >
//                                                                 <path
//                                                                     fill-rule="evenodd"
//                                                                     d="M.76 2.08a1 1 0 0 1 .908-.58h16.667a1 1 0 0 1 .763 1.646l-6.43 7.603V17.5a1 1 0 0 1-1.447.894l-3.334-1.666a1 1 0 0 1-.552-.895V10.75L.905 3.146A1 1 0 0 1 .76 2.079ZM3.824 3.5l5.275 6.238a1 1 0 0 1 .237.645v4.832l1.333.667v-5.499a1 1 0 0 1 .236-.645L16.18 3.5H3.823Z"
//                                                                     clip-rule="evenodd"
//                                                                 />
//                                                             </svg>
//                                                         </div>
//                                                         <div
//                                                             data-anim=""
//                                                             class="button__bg bg-color-black active"
//                                                         ></div>
//                                                     </div>
//                                                 </div>
//                                                 <div
//                                                     fs-cmsfilter-element="filters"
//                                                     class="form-wrapper mod--projects w-form"
//                                                 >
//                                                     <form
//                                                         id="wf-form-sort"
//                                                         name="wf-form-sort"
//                                                         data-name="sort"
//                                                         method="get"
//                                                         class="form mod--projects-sort"
//                                                         data-wf-page-id="65e02e1378aeac8c4c4d9bfe"
//                                                         data-wf-element-id="264ca55c-e9c8-406f-8d42-0dfc82754f89"
//                                                     >
//                                                         <div class="projects-sort__dropdowns">
//                                                             <div
//                                                                 data-delay="0"
//                                                                 data-hover="false"
//                                                                 data-dropdown-industries=""
//                                                                 class="dropdown-inter-each mod--projects-sort active w-dropdown"
//                                                             >
//                                                                 <div
//                                                                     class="dropdown__toggle mod--projects-sort w-dropdown-toggle"
//                                                                 >
//                                                                     <div class="projects-sidebar__title-wrap">
//                                                                         <div>INDUSTRIES</div>
//                                                                         <img
//                                                                             src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6672e0ff9cd586d2e15fd87a_icon-checked-yellow_filled.svg"
//                                                                             loading="lazy"
//                                                                             alt=""
//                                                                             class="projects-sidebar__check is--filled"
//                                                                         />
//                                                                     </div>
//                                                                     <div
//                                                                         data-dropdown-arrow-each=""
//                                                                         class="icon-regular mod--projects-sort w-embed"
//                                                                     >
//                                                                         <svg
//                                                                             aria-hidden="true"
//                                                                             role="img"
//                                                                             fill="currentColor"
//                                                                             xmlns="http://www.w3.org/2000/svg"
//                                                                             viewBox="0 0 24 24"
//                                                                             width="100%"
//                                                                             height="100%"
//                                                                         >
//                                                                             <path
//                                                                                 fill-rule="evenodd"
//                                                                                 d="M5.293 8.293a1 1 0 0 1 1.414 0L12 13.586l5.293-5.293a1 1 0 1 1 1.414 1.414l-6 6a1 1 0 0 1-1.414 0l-6-6a1 1 0 0 1 0-1.414Z"
//                                                                                 clip-rule="evenodd"
//                                                                             />
//                                                                         </svg>
//                                                                     </div>
//                                                                 </div>
//                                                                 <div
//                                                                     data-lenis-prevent=""
//                                                                     class="dropdown__list is-inter w-dropdown-list"
//                                                                 >
//                                                                     <div
//                                                                         data-lenis-prevent=""
//                                                                         scroll-style-light=""
//                                                                         class="dropdown__content mod--projects-sort"
//                                                                     >
//                                                                         <div
//                                                                             fs-cmsfilter-element="clear"
//                                                                             fs-cmsfilter-clear="industries"
//                                                                             class="projects-sort__btn active"
//                                                                         >
//                                                                             <div>All industries</div>
//                                                                             <div class="projects-sort__btn-active"></div>
//                                                                         </div>
//                                                                         <div class="collection w-dyn-list">
//                                                                             <div
//                                                                                 role="list"
//                                                                                 class="collection__list mod--projects-sort w-dyn-items"
//                                                                             >
//                                                                                 <div
//                                                                                     role="listitem"
//                                                                                     class="collection__item mod--projects-sort w-dyn-item"
//                                                                                 >
//                                                                                     <label class="projects-sort__btn w-radio"
//                                                                                     ><input
//                                                                                             type="radio"
//                                                                                             data-name="Radio 3"
//                                                                                             id="radio-3"
//                                                                                             name="radio"
//                                                                                             class="w-form-formradioinput hide w-radio-input"
//                                                                                             value="Radio" /><span
//                                                                                                 fs-cmsfilter-active="active"
//                                                                                                 fs-cmsfilter-field="industries"
//                                                                                                 class="margin-0 w-form-label"
//                                                                                                 for="radio-3"
//                                                                                             >Healthcare</span
//                                                                                         >
//                                                                                         <div
//                                                                                             class="projects-sort__btn-active"
//                                                                                         ></div>
//                                                                                         <img
//                                                                                             src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6647547e56d648deafecc88d_icon-checked-yellow.svg"
//                                                                                             loading="lazy"
//                                                                                             alt=""
//                                                                                             class="projects-sidebar__check"
//                                                                                         /></label>
//                                                                                 </div>
//                                                                                 <div
//                                                                                     role="listitem"
//                                                                                     class="collection__item mod--projects-sort w-dyn-item"
//                                                                                 >
//                                                                                     <label class="projects-sort__btn w-radio"
//                                                                                     ><input
//                                                                                             type="radio"
//                                                                                             data-name="Radio 3"
//                                                                                             id="radio-3"
//                                                                                             name="radio"
//                                                                                             class="w-form-formradioinput hide w-radio-input"
//                                                                                             value="Radio" /><span
//                                                                                                 fs-cmsfilter-active="active"
//                                                                                                 fs-cmsfilter-field="industries"
//                                                                                                 class="margin-0 w-form-label"
//                                                                                                 for="radio-3"
//                                                                                             >Finance</span
//                                                                                         >
//                                                                                         <div
//                                                                                             class="projects-sort__btn-active"
//                                                                                         ></div>
//                                                                                         <img
//                                                                                             src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6647547e56d648deafecc88d_icon-checked-yellow.svg"
//                                                                                             loading="lazy"
//                                                                                             alt=""
//                                                                                             class="projects-sidebar__check"
//                                                                                         /></label>
//                                                                                 </div>
//                                                                                 <div
//                                                                                     role="listitem"
//                                                                                     class="collection__item mod--projects-sort w-dyn-item"
//                                                                                 >
//                                                                                     <label class="projects-sort__btn w-radio"
//                                                                                     ><input
//                                                                                             type="radio"
//                                                                                             data-name="Radio 3"
//                                                                                             id="radio-3"
//                                                                                             name="radio"
//                                                                                             class="w-form-formradioinput hide w-radio-input"
//                                                                                             value="Radio" /><span
//                                                                                                 fs-cmsfilter-active="active"
//                                                                                                 fs-cmsfilter-field="industries"
//                                                                                                 class="margin-0 w-form-label"
//                                                                                                 for="radio-3"
//                                                                                             >Education</span
//                                                                                         >
//                                                                                         <div
//                                                                                             class="projects-sort__btn-active"
//                                                                                         ></div>
//                                                                                         <img
//                                                                                             src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6647547e56d648deafecc88d_icon-checked-yellow.svg"
//                                                                                             loading="lazy"
//                                                                                             alt=""
//                                                                                             class="projects-sidebar__check"
//                                                                                         /></label>
//                                                                                 </div>
//                                                                                 <div
//                                                                                     role="listitem"
//                                                                                     class="collection__item mod--projects-sort w-dyn-item"
//                                                                                 >
//                                                                                     <label class="projects-sort__btn w-radio"
//                                                                                     ><input
//                                                                                             type="radio"
//                                                                                             data-name="Radio 3"
//                                                                                             id="radio-3"
//                                                                                             name="radio"
//                                                                                             class="w-form-formradioinput hide w-radio-input"
//                                                                                             value="Radio" /><span
//                                                                                                 fs-cmsfilter-active="active"
//                                                                                                 fs-cmsfilter-field="industries"
//                                                                                                 class="margin-0 w-form-label"
//                                                                                                 for="radio-3"
//                                                                                             >Information technology</span
//                                                                                         >
//                                                                                         <div
//                                                                                             class="projects-sort__btn-active"
//                                                                                         ></div>
//                                                                                         <img
//                                                                                             src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6647547e56d648deafecc88d_icon-checked-yellow.svg"
//                                                                                             loading="lazy"
//                                                                                             alt=""
//                                                                                             class="projects-sidebar__check"
//                                                                                         /></label>
//                                                                                 </div>
//                                                                                 <div
//                                                                                     role="listitem"
//                                                                                     class="collection__item mod--projects-sort w-dyn-item"
//                                                                                 >
//                                                                                     <label class="projects-sort__btn w-radio"
//                                                                                     ><input
//                                                                                             type="radio"
//                                                                                             data-name="Radio 3"
//                                                                                             id="radio-3"
//                                                                                             name="radio"
//                                                                                             class="w-form-formradioinput hide w-radio-input"
//                                                                                             value="Radio" /><span
//                                                                                                 fs-cmsfilter-active="active"
//                                                                                                 fs-cmsfilter-field="industries"
//                                                                                                 class="margin-0 w-form-label"
//                                                                                                 for="radio-3"
//                                                                                             >Other industries</span
//                                                                                         >
//                                                                                         <div
//                                                                                             class="projects-sort__btn-active"
//                                                                                         ></div>
//                                                                                         <img
//                                                                                             src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6647547e56d648deafecc88d_icon-checked-yellow.svg"
//                                                                                             loading="lazy"
//                                                                                             alt=""
//                                                                                             class="projects-sidebar__check"
//                                                                                         /></label>
//                                                                                 </div>
//                                                                             </div>
//                                                                         </div>
//                                                                         <div
//                                                                             class="projects-sort__grad pointer-events-off"
//                                                                         ></div>
//                                                                     </div>
//                                                                 </div>
//                                                             </div>
//                                                             <div class="projects-sort__line"></div>
//                                                             <div
//                                                                 data-delay="0"
//                                                                 data-hover="false"
//                                                                 data-dropdown-services=""
//                                                                 class="dropdown-inter-each w-dropdown"
//                                                             >
//                                                                 <div
//                                                                     class="dropdown__toggle mod--projects-sort is-last w-dropdown-toggle"
//                                                                 >
//                                                                     <div class="projects-sidebar__title-wrap">
//                                                                         <div>SERVICES</div>
//                                                                         <img
//                                                                             src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6672e0ff9cd586d2e15fd87a_icon-checked-yellow_filled.svg"
//                                                                             loading="lazy"
//                                                                             alt=""
//                                                                             class="projects-sidebar__check is--filled"
//                                                                         />
//                                                                     </div>
//                                                                     <div
//                                                                         data-dropdown-arrow-each=""
//                                                                         class="icon-regular mod--projects-sort w-embed"
//                                                                     >
//                                                                         <svg
//                                                                             aria-hidden="true"
//                                                                             role="img"
//                                                                             fill="currentColor"
//                                                                             xmlns="http://www.w3.org/2000/svg"
//                                                                             viewBox="0 0 24 24"
//                                                                             width="100%"
//                                                                             height="100%"
//                                                                         >
//                                                                             <path
//                                                                                 fill-rule="evenodd"
//                                                                                 d="M5.293 8.293a1 1 0 0 1 1.414 0L12 13.586l5.293-5.293a1 1 0 1 1 1.414 1.414l-6 6a1 1 0 0 1-1.414 0l-6-6a1 1 0 0 1 0-1.414Z"
//                                                                                 clip-rule="evenodd"
//                                                                             />
//                                                                         </svg>
//                                                                     </div>
//                                                                 </div>
//                                                                 <div class="dropdown__list is-inter w-dropdown-list">
//                                                                     <div
//                                                                         data-lenis-prevent=""
//                                                                         scroll-style-light=""
//                                                                         class="dropdown__content mod--projects-sort"
//                                                                     >
//                                                                         <div
//                                                                             fs-cmsfilter-clear="services"
//                                                                             fs-cmsfilter-element="clear"
//                                                                             class="projects-sort__btn active"
//                                                                         >
//                                                                             <div>All services</div>
//                                                                             <div class="projects-sort__btn-active"></div>
//                                                                         </div>
//                                                                         <div class="collection w-dyn-list">
//                                                                             <div
//                                                                                 role="list"
//                                                                                 class="collection__list mod--projects-sort w-dyn-items"
//                                                                             >
//                                                                                 <div
//                                                                                     role="listitem"
//                                                                                     class="collection__item mod--projects-sort w-dyn-item"
//                                                                                 >
//                                                                                     <label class="projects-sort__btn w-radio"
//                                                                                     ><input
//                                                                                             type="radio"
//                                                                                             data-name="Radio 3"
//                                                                                             id="radio-3"
//                                                                                             name="radio"
//                                                                                             class="w-form-formradioinput hide w-radio-input"
//                                                                                             value="Radio" /><span
//                                                                                                 fs-cmsfilter-active="active"
//                                                                                                 fs-cmsfilter-field="services"
//                                                                                                 class="margin-0 w-form-label"
//                                                                                                 for="radio-3"
//                                                                                             >UX/UI design</span
//                                                                                         >
//                                                                                         <div
//                                                                                             class="projects-sort__btn-active"
//                                                                                         ></div>
//                                                                                         <img
//                                                                                             src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6647547e56d648deafecc88d_icon-checked-yellow.svg"
//                                                                                             loading="lazy"
//                                                                                             alt=""
//                                                                                             class="projects-sidebar__check"
//                                                                                         /></label>
//                                                                                 </div>
//                                                                                 <div
//                                                                                     role="listitem"
//                                                                                     class="collection__item mod--projects-sort w-dyn-item"
//                                                                                 >
//                                                                                     <label class="projects-sort__btn w-radio"
//                                                                                     ><input
//                                                                                             type="radio"
//                                                                                             data-name="Radio 3"
//                                                                                             id="radio-3"
//                                                                                             name="radio"
//                                                                                             class="w-form-formradioinput hide w-radio-input"
//                                                                                             value="Radio" /><span
//                                                                                                 fs-cmsfilter-active="active"
//                                                                                                 fs-cmsfilter-field="services"
//                                                                                                 class="margin-0 w-form-label"
//                                                                                                 for="radio-3"
//                                                                                             >Web design</span
//                                                                                         >
//                                                                                         <div
//                                                                                             class="projects-sort__btn-active"
//                                                                                         ></div>
//                                                                                         <img
//                                                                                             src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6647547e56d648deafecc88d_icon-checked-yellow.svg"
//                                                                                             loading="lazy"
//                                                                                             alt=""
//                                                                                             class="projects-sidebar__check"
//                                                                                         /></label>
//                                                                                 </div>
//                                                                                 <div
//                                                                                     role="listitem"
//                                                                                     class="collection__item mod--projects-sort w-dyn-item"
//                                                                                 >
//                                                                                     <label class="projects-sort__btn w-radio"
//                                                                                     ><input
//                                                                                             type="radio"
//                                                                                             data-name="Radio 3"
//                                                                                             id="radio-3"
//                                                                                             name="radio"
//                                                                                             class="w-form-formradioinput hide w-radio-input"
//                                                                                             value="Radio" /><span
//                                                                                                 fs-cmsfilter-active="active"
//                                                                                                 fs-cmsfilter-field="services"
//                                                                                                 class="margin-0 w-form-label"
//                                                                                                 for="radio-3"
//                                                                                             >Branding</span
//                                                                                         >
//                                                                                         <div
//                                                                                             class="projects-sort__btn-active"
//                                                                                         ></div>
//                                                                                         <img
//                                                                                             src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6647547e56d648deafecc88d_icon-checked-yellow.svg"
//                                                                                             loading="lazy"
//                                                                                             alt=""
//                                                                                             class="projects-sidebar__check"
//                                                                                         /></label>
//                                                                                 </div>
//                                                                                 <div
//                                                                                     role="listitem"
//                                                                                     class="collection__item mod--projects-sort w-dyn-item"
//                                                                                 >
//                                                                                     <label class="projects-sort__btn w-radio"
//                                                                                     ><input
//                                                                                             type="radio"
//                                                                                             data-name="Radio 3"
//                                                                                             id="radio-3"
//                                                                                             name="radio"
//                                                                                             class="w-form-formradioinput hide w-radio-input"
//                                                                                             value="Radio" /><span
//                                                                                                 fs-cmsfilter-active="active"
//                                                                                                 fs-cmsfilter-field="services"
//                                                                                                 class="margin-0 w-form-label"
//                                                                                                 for="radio-3"
//                                                                                             >Product development</span
//                                                                                         >
//                                                                                         <div
//                                                                                             class="projects-sort__btn-active"
//                                                                                         ></div>
//                                                                                         <img
//                                                                                             src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6647547e56d648deafecc88d_icon-checked-yellow.svg"
//                                                                                             loading="lazy"
//                                                                                             alt=""
//                                                                                             class="projects-sidebar__check"
//                                                                                         /></label>
//                                                                                 </div>
//                                                                                 <div
//                                                                                     role="listitem"
//                                                                                     class="collection__item mod--projects-sort w-dyn-item"
//                                                                                 >
//                                                                                     <label class="projects-sort__btn w-radio"
//                                                                                     ><input
//                                                                                             type="radio"
//                                                                                             data-name="Radio 3"
//                                                                                             id="radio-3"
//                                                                                             name="radio"
//                                                                                             class="w-form-formradioinput hide w-radio-input"
//                                                                                             value="Radio" /><span
//                                                                                                 fs-cmsfilter-active="active"
//                                                                                                 fs-cmsfilter-field="services"
//                                                                                                 class="margin-0 w-form-label"
//                                                                                                 for="radio-3"
//                                                                                             >Webflow development</span
//                                                                                         >
//                                                                                         <div
//                                                                                             class="projects-sort__btn-active"
//                                                                                         ></div>
//                                                                                         <img
//                                                                                             src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6647547e56d648deafecc88d_icon-checked-yellow.svg"
//                                                                                             loading="lazy"
//                                                                                             alt=""
//                                                                                             class="projects-sidebar__check"
//                                                                                         /></label>
//                                                                                 </div>
//                                                                                 <div
//                                                                                     role="listitem"
//                                                                                     class="collection__item mod--projects-sort w-dyn-item"
//                                                                                 >
//                                                                                     <label class="projects-sort__btn w-radio"
//                                                                                     ><input
//                                                                                             type="radio"
//                                                                                             data-name="Radio 3"
//                                                                                             id="radio-3"
//                                                                                             name="radio"
//                                                                                             class="w-form-formradioinput hide w-radio-input"
//                                                                                             value="Radio" /><span
//                                                                                                 fs-cmsfilter-active="active"
//                                                                                                 fs-cmsfilter-field="services"
//                                                                                                 class="margin-0 w-form-label"
//                                                                                                 for="radio-3"
//                                                                                             >Web development</span
//                                                                                         >
//                                                                                         <div
//                                                                                             class="projects-sort__btn-active"
//                                                                                         ></div>
//                                                                                         <img
//                                                                                             src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6647547e56d648deafecc88d_icon-checked-yellow.svg"
//                                                                                             loading="lazy"
//                                                                                             alt=""
//                                                                                             class="projects-sidebar__check"
//                                                                                         /></label>
//                                                                                 </div>
//                                                                             </div>
//                                                                         </div>
//                                                                         <div
//                                                                             class="projects-sort__grad pointer-events-off"
//                                                                         ></div>
//                                                                     </div>
//                                                                 </div>
//                                                             </div>
//                                                         </div>
//                                                     </form>
//                                                     <div class="w-form-done">
//                                                         <div>Thank you! Your submission has been received!</div>
//                                                     </div>
//                                                     <div class="w-form-fail">
//                                                         <div>
//                                                             Oops! Something went wrong while submitting the form.
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                                 <div class="projects-sidebar__cta">
//                                                     <a
//                                                         href="projects?be99beb4_page=4#discuss"
//                                                         data-hover=""
//                                                         class="button w-inline-block"
//                                                     >
//                                                         <div class="button__overflow">
//                                                             <div data-hover-elem="" class="button__texts">
//                                                                 <div class="button__text">Have a project?</div>
//                                                                 <div class="button__text is-absolute">
//                                                                     Let’s connect
//                                                                 </div>
//                                                             </div>
//                                                         </div>
//                                                         <div
//                                                             data-hover-elem=""
//                                                             class="button__icons is-white active"
//                                                         >
//                                                             <div data-hover-elem="" class="button__icon-anim">
//                                                                 <div class="icon-small w-embed">
//                                                                     <svg
//                                                                         aria-hidden="true"
//                                                                         role="img"
//                                                                         fill="currentColor"
//                                                                         xmlns="http://www.w3.org/2000/svg"
//                                                                         viewBox="0 0 16 16"
//                                                                         width="100%"
//                                                                         height="100%"
//                                                                     >
//                                                                         <path
//                                                                             d="M6.726 2.273c1.627 0 3.096.105 4.618.315.262.053.525.053.735.158.682.157 1.05.63 1.207 1.311.314 1.417.42 2.886.367 4.356-.053 1.05-.158 2.046-.42 3.043-.157.735-.63 1.154-1.417 1.26-1.05.157-2.099.262-3.148.314-.157 0-.21.053-.262.158-.368.63-.735 1.311-1.102 1.941-.21.42-.682.42-.892 0-.368-.682-.787-1.312-1.155-1.994-.052-.105-.105-.157-.262-.157a23.602 23.602 0 0 1-3.306-.368C.955 12.453.482 11.98.377 11.3.115 9.987-.043 8.623.01 7.31c0-1.155.157-2.257.42-3.41.157-.736.63-1.155 1.364-1.26a22.357 22.357 0 0 1 2.624-.315c.787-.053 1.574-.053 2.308-.053Z"
//                                                                         />
//                                                                         <path
//                                                                             d="M14.7 10.197a16.88 16.88 0 0 0 .158-2.256c0-1.47-.105-2.886-.473-4.303-.262-1.207-1.154-1.994-2.308-2.151-2.1-.367-4.25-.42-6.402-.367-.892 0-1.784.105-2.729.157H2.79c.157-.315.367-.525.63-.735.262-.157.524-.21.84-.21 2.15-.314 4.25-.367 6.4-.314 1.155.052 2.257.157 3.412.315.524.105.997.314 1.311.787.158.262.21.524.263.787.315 1.469.42 2.938.315 4.407-.053.945-.21 1.837-.368 2.729-.105.525-.367.892-.892 1.154Z"
//                                                                         />
//                                                                         <defs>
//                                                                             <clipPath id="a">
//                                                                                 <path d="M0 0h16v16H0z" />
//                                                                             </clipPath>
//                                                                         </defs>
//                                                                     </svg>
//                                                                 </div>
//                                                                 <div class="icon-small is-absolute w-embed">
//                                                                     <svg
//                                                                         aria-hidden="true"
//                                                                         role="img"
//                                                                         fill="currentColor"
//                                                                         xmlns="http://www.w3.org/2000/svg"
//                                                                         viewBox="0 0 16 16"
//                                                                         width="100%"
//                                                                         height="100%"
//                                                                     >
//                                                                         <path
//                                                                             d="M6.726 2.273c1.627 0 3.096.105 4.618.315.262.053.525.053.735.158.682.157 1.05.63 1.207 1.311.314 1.417.42 2.886.367 4.356-.053 1.05-.158 2.046-.42 3.043-.157.735-.63 1.154-1.417 1.26-1.05.157-2.099.262-3.148.314-.157 0-.21.053-.262.158-.368.63-.735 1.311-1.102 1.941-.21.42-.682.42-.892 0-.368-.682-.787-1.312-1.155-1.994-.052-.105-.105-.157-.262-.157a23.602 23.602 0 0 1-3.306-.368C.955 12.453.482 11.98.377 11.3.115 9.987-.043 8.623.01 7.31c0-1.155.157-2.257.42-3.41.157-.736.63-1.155 1.364-1.26a22.357 22.357 0 0 1 2.624-.315c.787-.053 1.574-.053 2.308-.053Z"
//                                                                         />
//                                                                         <path
//                                                                             d="M14.7 10.197a16.88 16.88 0 0 0 .158-2.256c0-1.47-.105-2.886-.473-4.303-.262-1.207-1.154-1.994-2.308-2.151-2.1-.367-4.25-.42-6.402-.367-.892 0-1.784.105-2.729.157H2.79c.157-.315.367-.525.63-.735.262-.157.524-.21.84-.21 2.15-.314 4.25-.367 6.4-.314 1.155.052 2.257.157 3.412.315.524.105.997.314 1.311.787.158.262.21.524.263.787.315 1.469.42 2.938.315 4.407-.053.945-.21 1.837-.368 2.729-.105.525-.367.892-.892 1.154Z"
//                                                                         />
//                                                                         <defs>
//                                                                             <clipPath id="a">
//                                                                                 <path d="M0 0h16v16H0z" />
//                                                                             </clipPath>
//                                                                         </defs>
//                                                                     </svg>
//                                                                 </div>
//                                                             </div>
//                                                             <div data-hover-elem="" class="button__bg active"></div>
//                                                         </div>
//                                                     </a>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                         <div class="columns__col mod--projects is--2">
//                                             <div
//                                                 class="heading-wrap mod--projects-catalog hide-mobile-landscape w-clearfix"
//                                             >
//                                                 <div class="space-heading-4"></div>
//                                                 <h4 data-anim-split="" class="heading-4">
//                                                     We&#x27;ve helped over 350 firms reach their full potential,
//                                                     and we&#x27;re happy to do the same for you! Find out how
//                                                     our skills can contribute to your success.
//                                                 </h4>
//                                             </div>
//                                             <div
//                                                 data-projects-tags=""
//                                                 class="projects-tags-wrap hide-tablet"
//                                             >
//                                                 <div class="projects-tags">
//                                                     <div class="opacity-70">
//                                                         We have
//                                                         <span fs-cmsfilter-element="results-count">3</span> cases
//                                                     </div>
//                                                     <div class="projects-tags">
//                                                         <div
//                                                             fs-cmsfilter-element="tag-template"
//                                                             class="projects-tags__tag"
//                                                         >
//                                                             <div fs-cmsfilter-element="tag-text">tag</div>
//                                                             <img
//                                                                 src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/642430ed0c544e31ed241358_icon-close.svg"
//                                                                 loading="lazy"
//                                                                 fs-cmsfilter-element="tag-remove"
//                                                                 alt="close icon"
//                                                                 class="projects-tag__remove"
//                                                             />
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                             <div class="collection w-dyn-list">
//                                                 <div
//                                                     fs-cmsload-mode="pagination"
//                                                     class="collection__list is-posts w-dyn-items"
//                                                     fs-cmsload-showquery="true"
//                                                     fs-cmsfilter-element="list"
//                                                     fs-cmsnest-element="list"
//                                                     role="list"
//                                                     fs-cmsload-pageboundary="1,1,1,0"
//                                                     fs-cmsload-element="list"
//                                                     fs-cmsfilter-showquery="true"
//                                                 >
//                                                     <div
//                                                         role="listitem"
//                                                         class="collection__item is-posts is-2col w-dyn-item"
//                                                     >
//                                                         <div data-hover-parent="" class="post-card">
//                                                             <a
//                                                                 data-hover=""
//                                                                 data-mask="post"
//                                                                 href="project/wrangle"
//                                                                 class="post-card__img-link w-inline-block"
//                                                             ><img
//                                                                     alt=""
//                                                                     loading="lazy"
//                                                                     data-hover-elem=""
//                                                                     src="https://cdn.prod.website-files.com/63fc977c14aaea404dce4439/66019c9652d21a461d7056e3_Preview.webp"
//                                                                     sizes="(max-width: 479px) 91vw, (max-width: 767px) 46vw, (max-width: 991px) 43vw, 29vw"
//                                                                     srcset="
//                               https://cdn.prod.website-files.com/63fc977c14aaea404dce4439/66019c9652d21a461d7056e3_Preview-p-500.webp   500w,
//                               https://cdn.prod.website-files.com/63fc977c14aaea404dce4439/66019c9652d21a461d7056e3_Preview-p-800.webp   800w,
//                               https://cdn.prod.website-files.com/63fc977c14aaea404dce4439/66019c9652d21a461d7056e3_Preview-p-1080.webp 1080w,
//                               https://cdn.prod.website-files.com/63fc977c14aaea404dce4439/66019c9652d21a461d7056e3_Preview.webp        1280w
//                             "
//                                                                     class="post-card__img is-full"
//                                                                 /></a>
//                                                             <div class="post-card__param">
//                                                                 <div
//                                                                     fs-cmsnest-collection="industries"
//                                                                     fs-cmsnest-element="nest-target"
//                                                                     class="project__tag"
//                                                                 >
//                                                                     INDUSTRY
//                                                                 </div>
//                                                                 <div
//                                                                     fs-cmsnest-collection="services"
//                                                                     fs-cmsnest-element="nest-target"
//                                                                     class="hide"
//                                                                 >
//                                                                     Development
//                                                                 </div>
//                                                                 <div class="project__flags">
//                                                                     <img
//                                                                         src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f93d2fc2bf12abc331_flag-USA.svg"
//                                                                         loading="lazy"
//                                                                         alt=""
//                                                                         class="project__flag"
//                                                                     /><img
//                                                                         src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f57d6e1f1f7843d783_flag-UK.svg"
//                                                                         loading="lazy"
//                                                                         alt=""
//                                                                         class="project__flag w-condition-invisible"
//                                                                     /><img
//                                                                         src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f58b8a864aefae4cc4_flag-France.svg"
//                                                                         loading="lazy"
//                                                                         alt=""
//                                                                         class="project__flag w-condition-invisible"
//                                                                     /><img
//                                                                         src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f5bba1c0265ae1c9f8_flag-Canada.svg"
//                                                                         loading="lazy"
//                                                                         alt=""
//                                                                         class="project__flag w-condition-invisible"
//                                                                     /><img
//                                                                         src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f5a2bfa47c04db6ea7_flag-Switzerland-1.svg"
//                                                                         loading="lazy"
//                                                                         alt=""
//                                                                         class="project__flag w-condition-invisible"
//                                                                     /><img
//                                                                         src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f57d6e1f1f7843d77f_flag-Switzerland.svg"
//                                                                         loading="lazy"
//                                                                         alt=""
//                                                                         class="project__flag w-condition-invisible"
//                                                                     /><img
//                                                                         src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f5e7f20fc58fe5c44e_flag-Israel.svg"
//                                                                         loading="lazy"
//                                                                         alt=""
//                                                                         class="project__flag w-condition-invisible"
//                                                                     /><img
//                                                                         src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f5c0f20cf420b31974_flag-Morocco.svg"
//                                                                         loading="lazy"
//                                                                         alt=""
//                                                                         class="project__flag w-condition-invisible"
//                                                                     /><img
//                                                                         src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f5d720129808ba77dd_flag-Singapore.svg"
//                                                                         loading="lazy"
//                                                                         alt=""
//                                                                         class="project__flag w-condition-invisible"
//                                                                     /><img
//                                                                         src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f592cb738c6af0302b_flag-Taiwan.svg"
//                                                                         loading="lazy"
//                                                                         alt=""
//                                                                         class="project__flag w-condition-invisible"
//                                                                     /><img
//                                                                         src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f7aa02d59cf699d4a6_flag-Ukraine.svg"
//                                                                         loading="lazy"
//                                                                         alt=""
//                                                                         class="project__flag w-condition-invisible"
//                                                                     /><img
//                                                                         src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f5242c5a0ca8d07969_flag-Austria.svg"
//                                                                         loading="lazy"
//                                                                         alt=""
//                                                                         class="project__flag w-condition-invisible"
//                                                                     /><img
//                                                                         src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f7d720129808ba78ab_flag-Spain.svg"
//                                                                         loading="lazy"
//                                                                         alt=""
//                                                                         class="project__flag w-condition-invisible"
//                                                                     /><img
//                                                                         src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f5e5892608c2ca9cbe_flag-Norway.svg"
//                                                                         loading="lazy"
//                                                                         alt=""
//                                                                         class="project__flag w-condition-invisible"
//                                                                     /><img
//                                                                         src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f54d72d127cd1e97c8_flag-Netherlands.svg"
//                                                                         loading="lazy"
//                                                                         alt=""
//                                                                         class="project__flag w-condition-invisible"
//                                                                     />
//                                                                 </div>
//                                                             </div>
//                                                             <a
//                                                                 data-hover=""
//                                                                 href="project/wrangle"
//                                                                 class="post-card__title-link w-inline-block"
//                                                             >
//                                                                 <h2 class="post-card__title">
//                                                                     Wrangle — dynamic design for streamlined business
//                                                                     management
//                                                                 </h2>
//                                                                 <div class="hide">
//                                                                     <div class="post-card__span-icons">
//                                                                         <div
//                                                                             data-post-card-arrow=""
//                                                                             class="post-card__icons"
//                                                                         >
//                                                                             <div
//                                                                                 data-hover-elem=""
//                                                                                 class="button__icon-anim"
//                                                                             >
//                                                                                 <div
//                                                                                     class="post-card__icon opacity-0 w-embed"
//                                                                                 >
//                                                                                     <svg
//                                                                                         aria-hidden="true"
//                                                                                         role="img"
//                                                                                         fill="currentColor"
//                                                                                         xmlns="http://www.w3.org/2000/svg"
//                                                                                         viewBox="0 0 19 19"
//                                                                                         width="100%"
//                                                                                         height="100%"
//                                                                                     >
//                                                                                         <path
//                                                                                             fill-rule="evenodd"
//                                                                                             d="M6.25.879 14.871 9.5l-8.62 8.622L4.128 16l6.5-6.5-6.5-6.5L6.25.88Z"
//                                                                                             clip-rule="evenodd"
//                                                                                         />
//                                                                                     </svg>
//                                                                                 </div>
//                                                                                 <div
//                                                                                     class="post-card__icon is-icon-absolute w-embed"
//                                                                                 >
//                                                                                     <svg
//                                                                                         aria-hidden="true"
//                                                                                         role="img"
//                                                                                         fill="currentColor"
//                                                                                         xmlns="http://www.w3.org/2000/svg"
//                                                                                         viewBox="0 0 19 19"
//                                                                                         width="100%"
//                                                                                         height="100%"
//                                                                                     >
//                                                                                         <path
//                                                                                             fill-rule="evenodd"
//                                                                                             d="M6.25.879 14.871 9.5l-8.62 8.622L4.128 16l6.5-6.5-6.5-6.5L6.25.88Z"
//                                                                                             clip-rule="evenodd"
//                                                                                         />
//                                                                                     </svg>
//                                                                                 </div>
//                                                                             </div>
//                                                                         </div>
//                                                                     </div>
//                                                                 </div>
//                                                             </a>
//                                                         </div>
//                                                     </div>
//                                                     <div
//                                                         role="listitem"
//                                                         class="collection__item is-posts is-2col w-dyn-item"
//                                                     >
//                                                         <div data-hover-parent="" class="post-card">
//                                                             <a
//                                                                 data-hover=""
//                                                                 data-mask="post"
//                                                                 href="project/catalyze"
//                                                                 class="post-card__img-link w-inline-block"
//                                                             ><img
//                                                                     alt=""
//                                                                     loading="lazy"
//                                                                     data-hover-elem=""
//                                                                     src="https://cdn.prod.website-files.com/63fc977c14aaea404dce4439/66019b77db3c9e757a1acc51_Preview.webp"
//                                                                     sizes="(max-width: 479px) 91vw, (max-width: 767px) 46vw, (max-width: 991px) 43vw, 29vw"
//                                                                     srcset="
//                               https://cdn.prod.website-files.com/63fc977c14aaea404dce4439/66019b77db3c9e757a1acc51_Preview-p-500.webp   500w,
//                               https://cdn.prod.website-files.com/63fc977c14aaea404dce4439/66019b77db3c9e757a1acc51_Preview-p-800.webp   800w,
//                               https://cdn.prod.website-files.com/63fc977c14aaea404dce4439/66019b77db3c9e757a1acc51_Preview-p-1080.webp 1080w,
//                               https://cdn.prod.website-files.com/63fc977c14aaea404dce4439/66019b77db3c9e757a1acc51_Preview.webp        1280w
//                             "
//                                                                     class="post-card__img is-full"
//                                                                 /></a>
//                                                             <div class="post-card__param">
//                                                                 <div
//                                                                     fs-cmsnest-collection="industries"
//                                                                     fs-cmsnest-element="nest-target"
//                                                                     class="project__tag"
//                                                                 >
//                                                                     INDUSTRY
//                                                                 </div>
//                                                                 <div
//                                                                     fs-cmsnest-collection="services"
//                                                                     fs-cmsnest-element="nest-target"
//                                                                     class="hide"
//                                                                 >
//                                                                     Development
//                                                                 </div>
//                                                                 <div class="project__flags">
//                                                                     <img
//                                                                         src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f93d2fc2bf12abc331_flag-USA.svg"
//                                                                         loading="lazy"
//                                                                         alt=""
//                                                                         class="project__flag"
//                                                                     /><img
//                                                                         src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f57d6e1f1f7843d783_flag-UK.svg"
//                                                                         loading="lazy"
//                                                                         alt=""
//                                                                         class="project__flag w-condition-invisible"
//                                                                     /><img
//                                                                         src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f58b8a864aefae4cc4_flag-France.svg"
//                                                                         loading="lazy"
//                                                                         alt=""
//                                                                         class="project__flag w-condition-invisible"
//                                                                     /><img
//                                                                         src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f5bba1c0265ae1c9f8_flag-Canada.svg"
//                                                                         loading="lazy"
//                                                                         alt=""
//                                                                         class="project__flag w-condition-invisible"
//                                                                     /><img
//                                                                         src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f5a2bfa47c04db6ea7_flag-Switzerland-1.svg"
//                                                                         loading="lazy"
//                                                                         alt=""
//                                                                         class="project__flag w-condition-invisible"
//                                                                     /><img
//                                                                         src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f57d6e1f1f7843d77f_flag-Switzerland.svg"
//                                                                         loading="lazy"
//                                                                         alt=""
//                                                                         class="project__flag w-condition-invisible"
//                                                                     /><img
//                                                                         src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f5e7f20fc58fe5c44e_flag-Israel.svg"
//                                                                         loading="lazy"
//                                                                         alt=""
//                                                                         class="project__flag w-condition-invisible"
//                                                                     /><img
//                                                                         src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f5c0f20cf420b31974_flag-Morocco.svg"
//                                                                         loading="lazy"
//                                                                         alt=""
//                                                                         class="project__flag w-condition-invisible"
//                                                                     /><img
//                                                                         src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f5d720129808ba77dd_flag-Singapore.svg"
//                                                                         loading="lazy"
//                                                                         alt=""
//                                                                         class="project__flag w-condition-invisible"
//                                                                     /><img
//                                                                         src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f592cb738c6af0302b_flag-Taiwan.svg"
//                                                                         loading="lazy"
//                                                                         alt=""
//                                                                         class="project__flag w-condition-invisible"
//                                                                     /><img
//                                                                         src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f7aa02d59cf699d4a6_flag-Ukraine.svg"
//                                                                         loading="lazy"
//                                                                         alt=""
//                                                                         class="project__flag w-condition-invisible"
//                                                                     /><img
//                                                                         src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f5242c5a0ca8d07969_flag-Austria.svg"
//                                                                         loading="lazy"
//                                                                         alt=""
//                                                                         class="project__flag w-condition-invisible"
//                                                                     /><img
//                                                                         src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f7d720129808ba78ab_flag-Spain.svg"
//                                                                         loading="lazy"
//                                                                         alt=""
//                                                                         class="project__flag w-condition-invisible"
//                                                                     /><img
//                                                                         src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f5e5892608c2ca9cbe_flag-Norway.svg"
//                                                                         loading="lazy"
//                                                                         alt=""
//                                                                         class="project__flag w-condition-invisible"
//                                                                     /><img
//                                                                         src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f54d72d127cd1e97c8_flag-Netherlands.svg"
//                                                                         loading="lazy"
//                                                                         alt=""
//                                                                         class="project__flag w-condition-invisible"
//                                                                     />
//                                                                 </div>
//                                                             </div>
//                                                             <a
//                                                                 data-hover=""
//                                                                 href="project/catalyze"
//                                                                 class="post-card__title-link w-inline-block"
//                                                             >
//                                                                 <h2 class="post-card__title">
//                                                                     Catalyze — user-friendly website for your partner in
//                                                                     growth and success
//                                                                 </h2>
//                                                                 <div class="hide">
//                                                                     <div class="post-card__span-icons">
//                                                                         <div
//                                                                             data-post-card-arrow=""
//                                                                             class="post-card__icons"
//                                                                         >
//                                                                             <div
//                                                                                 data-hover-elem=""
//                                                                                 class="button__icon-anim"
//                                                                             >
//                                                                                 <div
//                                                                                     class="post-card__icon opacity-0 w-embed"
//                                                                                 >
//                                                                                     <svg
//                                                                                         aria-hidden="true"
//                                                                                         role="img"
//                                                                                         fill="currentColor"
//                                                                                         xmlns="http://www.w3.org/2000/svg"
//                                                                                         viewBox="0 0 19 19"
//                                                                                         width="100%"
//                                                                                         height="100%"
//                                                                                     >
//                                                                                         <path
//                                                                                             fill-rule="evenodd"
//                                                                                             d="M6.25.879 14.871 9.5l-8.62 8.622L4.128 16l6.5-6.5-6.5-6.5L6.25.88Z"
//                                                                                             clip-rule="evenodd"
//                                                                                         />
//                                                                                     </svg>
//                                                                                 </div>
//                                                                                 <div
//                                                                                     class="post-card__icon is-icon-absolute w-embed"
//                                                                                 >
//                                                                                     <svg
//                                                                                         aria-hidden="true"
//                                                                                         role="img"
//                                                                                         fill="currentColor"
//                                                                                         xmlns="http://www.w3.org/2000/svg"
//                                                                                         viewBox="0 0 19 19"
//                                                                                         width="100%"
//                                                                                         height="100%"
//                                                                                     >
//                                                                                         <path
//                                                                                             fill-rule="evenodd"
//                                                                                             d="M6.25.879 14.871 9.5l-8.62 8.622L4.128 16l6.5-6.5-6.5-6.5L6.25.88Z"
//                                                                                             clip-rule="evenodd"
//                                                                                         />
//                                                                                     </svg>
//                                                                                 </div>
//                                                                             </div>
//                                                                         </div>
//                                                                     </div>
//                                                                 </div>
//                                                             </a>
//                                                         </div>
//                                                     </div>
//                                                     <div
//                                                         role="listitem"
//                                                         class="collection__item is-posts is-2col w-dyn-item"
//                                                     >
//                                                         <div data-hover-parent="" class="post-card">
//                                                             <a
//                                                                 data-hover=""
//                                                                 data-mask="post"
//                                                                 href="project/window-search"
//                                                                 class="post-card__img-link w-inline-block"
//                                                             ><img
//                                                                     alt=""
//                                                                     loading="lazy"
//                                                                     data-hover-elem=""
//                                                                     src="https://cdn.prod.website-files.com/63fc977c14aaea404dce4439/66019bc70592a7decad24f55_Preview.webp"
//                                                                     sizes="(max-width: 479px) 91vw, (max-width: 767px) 46vw, (max-width: 991px) 43vw, 29vw"
//                                                                     srcset="
//                               https://cdn.prod.website-files.com/63fc977c14aaea404dce4439/66019bc70592a7decad24f55_Preview-p-500.webp   500w,
//                               https://cdn.prod.website-files.com/63fc977c14aaea404dce4439/66019bc70592a7decad24f55_Preview-p-800.webp   800w,
//                               https://cdn.prod.website-files.com/63fc977c14aaea404dce4439/66019bc70592a7decad24f55_Preview-p-1080.webp 1080w,
//                               https://cdn.prod.website-files.com/63fc977c14aaea404dce4439/66019bc70592a7decad24f55_Preview.webp        1280w
//                             "
//                                                                     class="post-card__img is-full"
//                                                                 /></a>
//                                                             <div class="post-card__param">
//                                                                 <div
//                                                                     fs-cmsnest-collection="industries"
//                                                                     fs-cmsnest-element="nest-target"
//                                                                     class="project__tag"
//                                                                 >
//                                                                     INDUSTRY
//                                                                 </div>
//                                                                 <div
//                                                                     fs-cmsnest-collection="services"
//                                                                     fs-cmsnest-element="nest-target"
//                                                                     class="hide"
//                                                                 >
//                                                                     Development
//                                                                 </div>
//                                                                 <div class="project__flags">
//                                                                     <img
//                                                                         src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f93d2fc2bf12abc331_flag-USA.svg"
//                                                                         loading="lazy"
//                                                                         alt=""
//                                                                         class="project__flag"
//                                                                     /><img
//                                                                         src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f57d6e1f1f7843d783_flag-UK.svg"
//                                                                         loading="lazy"
//                                                                         alt=""
//                                                                         class="project__flag w-condition-invisible"
//                                                                     /><img
//                                                                         src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f58b8a864aefae4cc4_flag-France.svg"
//                                                                         loading="lazy"
//                                                                         alt=""
//                                                                         class="project__flag w-condition-invisible"
//                                                                     /><img
//                                                                         src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f5bba1c0265ae1c9f8_flag-Canada.svg"
//                                                                         loading="lazy"
//                                                                         alt=""
//                                                                         class="project__flag w-condition-invisible"
//                                                                     /><img
//                                                                         src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f5a2bfa47c04db6ea7_flag-Switzerland-1.svg"
//                                                                         loading="lazy"
//                                                                         alt=""
//                                                                         class="project__flag w-condition-invisible"
//                                                                     /><img
//                                                                         src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f57d6e1f1f7843d77f_flag-Switzerland.svg"
//                                                                         loading="lazy"
//                                                                         alt=""
//                                                                         class="project__flag w-condition-invisible"
//                                                                     /><img
//                                                                         src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f5e7f20fc58fe5c44e_flag-Israel.svg"
//                                                                         loading="lazy"
//                                                                         alt=""
//                                                                         class="project__flag w-condition-invisible"
//                                                                     /><img
//                                                                         src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f5c0f20cf420b31974_flag-Morocco.svg"
//                                                                         loading="lazy"
//                                                                         alt=""
//                                                                         class="project__flag w-condition-invisible"
//                                                                     /><img
//                                                                         src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f5d720129808ba77dd_flag-Singapore.svg"
//                                                                         loading="lazy"
//                                                                         alt=""
//                                                                         class="project__flag w-condition-invisible"
//                                                                     /><img
//                                                                         src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f592cb738c6af0302b_flag-Taiwan.svg"
//                                                                         loading="lazy"
//                                                                         alt=""
//                                                                         class="project__flag w-condition-invisible"
//                                                                     /><img
//                                                                         src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f7aa02d59cf699d4a6_flag-Ukraine.svg"
//                                                                         loading="lazy"
//                                                                         alt=""
//                                                                         class="project__flag w-condition-invisible"
//                                                                     /><img
//                                                                         src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f5242c5a0ca8d07969_flag-Austria.svg"
//                                                                         loading="lazy"
//                                                                         alt=""
//                                                                         class="project__flag w-condition-invisible"
//                                                                     /><img
//                                                                         src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f7d720129808ba78ab_flag-Spain.svg"
//                                                                         loading="lazy"
//                                                                         alt=""
//                                                                         class="project__flag w-condition-invisible"
//                                                                     /><img
//                                                                         src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f5e5892608c2ca9cbe_flag-Norway.svg"
//                                                                         loading="lazy"
//                                                                         alt=""
//                                                                         class="project__flag w-condition-invisible"
//                                                                     /><img
//                                                                         src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f54d72d127cd1e97c8_flag-Netherlands.svg"
//                                                                         loading="lazy"
//                                                                         alt=""
//                                                                         class="project__flag w-condition-invisible"
//                                                                     />
//                                                                 </div>
//                                                             </div>
//                                                             <a
//                                                                 data-hover=""
//                                                                 href="project/window-search"
//                                                                 class="post-card__title-link w-inline-block"
//                                                             >
//                                                                 <h2 class="post-card__title">
//                                                                     How we helped Window make shopping fast and fun
//                                                                     again
//                                                                 </h2>
//                                                                 <div class="hide">
//                                                                     <div class="post-card__span-icons">
//                                                                         <div
//                                                                             data-post-card-arrow=""
//                                                                             class="post-card__icons"
//                                                                         >
//                                                                             <div
//                                                                                 data-hover-elem=""
//                                                                                 class="button__icon-anim"
//                                                                             >
//                                                                                 <div
//                                                                                     class="post-card__icon opacity-0 w-embed"
//                                                                                 >
//                                                                                     <svg
//                                                                                         aria-hidden="true"
//                                                                                         role="img"
//                                                                                         fill="currentColor"
//                                                                                         xmlns="http://www.w3.org/2000/svg"
//                                                                                         viewBox="0 0 19 19"
//                                                                                         width="100%"
//                                                                                         height="100%"
//                                                                                     >
//                                                                                         <path
//                                                                                             fill-rule="evenodd"
//                                                                                             d="M6.25.879 14.871 9.5l-8.62 8.622L4.128 16l6.5-6.5-6.5-6.5L6.25.88Z"
//                                                                                             clip-rule="evenodd"
//                                                                                         />
//                                                                                     </svg>
//                                                                                 </div>
//                                                                                 <div
//                                                                                     class="post-card__icon is-icon-absolute w-embed"
//                                                                                 >
//                                                                                     <svg
//                                                                                         aria-hidden="true"
//                                                                                         role="img"
//                                                                                         fill="currentColor"
//                                                                                         xmlns="http://www.w3.org/2000/svg"
//                                                                                         viewBox="0 0 19 19"
//                                                                                         width="100%"
//                                                                                         height="100%"
//                                                                                     >
//                                                                                         <path
//                                                                                             fill-rule="evenodd"
//                                                                                             d="M6.25.879 14.871 9.5l-8.62 8.622L4.128 16l6.5-6.5-6.5-6.5L6.25.88Z"
//                                                                                             clip-rule="evenodd"
//                                                                                         />
//                                                                                     </svg>
//                                                                                 </div>
//                                                                             </div>
//                                                                         </div>
//                                                                     </div>
//                                                                 </div>
//                                                             </a>
//                                                         </div>
//                                                     </div>
//                                                     <div
//                                                         role="listitem"
//                                                         class="collection__item is-posts is-2col w-dyn-item"
//                                                     >
//                                                         <div data-hover-parent="" class="post-card">
//                                                             <a
//                                                                 data-hover=""
//                                                                 data-mask="post"
//                                                                 href="project/gig-share"
//                                                                 class="post-card__img-link w-inline-block"
//                                                             ><img
//                                                                     alt=""
//                                                                     loading="lazy"
//                                                                     data-hover-elem=""
//                                                                     src="https://cdn.prod.website-files.com/63fc977c14aaea404dce4439/660286073a1822665f1ee374_case-preview-gigshare.webp"
//                                                                     sizes="(max-width: 479px) 91vw, (max-width: 767px) 46vw, (max-width: 991px) 43vw, 29vw"
//                                                                     srcset="
//                               https://cdn.prod.website-files.com/63fc977c14aaea404dce4439/660286073a1822665f1ee374_case-preview-gigshare-p-500.webp   500w,
//                               https://cdn.prod.website-files.com/63fc977c14aaea404dce4439/660286073a1822665f1ee374_case-preview-gigshare-p-800.webp   800w,
//                               https://cdn.prod.website-files.com/63fc977c14aaea404dce4439/660286073a1822665f1ee374_case-preview-gigshare-p-1080.webp 1080w,
//                               https://cdn.prod.website-files.com/63fc977c14aaea404dce4439/660286073a1822665f1ee374_case-preview-gigshare.webp        1280w
//                             "
//                                                                     class="post-card__img is-full"
//                                                                 /></a>
//                                                             <div class="post-card__param">
//                                                                 <div
//                                                                     fs-cmsnest-collection="industries"
//                                                                     fs-cmsnest-element="nest-target"
//                                                                     class="project__tag"
//                                                                 >
//                                                                     INDUSTRY
//                                                                 </div>
//                                                                 <div
//                                                                     fs-cmsnest-collection="services"
//                                                                     fs-cmsnest-element="nest-target"
//                                                                     class="hide"
//                                                                 >
//                                                                     Development
//                                                                 </div>
//                                                                 <div class="project__flags">
//                                                                     <img
//                                                                         src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f93d2fc2bf12abc331_flag-USA.svg"
//                                                                         loading="lazy"
//                                                                         alt=""
//                                                                         class="project__flag"
//                                                                     /><img
//                                                                         src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f57d6e1f1f7843d783_flag-UK.svg"
//                                                                         loading="lazy"
//                                                                         alt=""
//                                                                         class="project__flag w-condition-invisible"
//                                                                     /><img
//                                                                         src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f58b8a864aefae4cc4_flag-France.svg"
//                                                                         loading="lazy"
//                                                                         alt=""
//                                                                         class="project__flag w-condition-invisible"
//                                                                     /><img
//                                                                         src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f5bba1c0265ae1c9f8_flag-Canada.svg"
//                                                                         loading="lazy"
//                                                                         alt=""
//                                                                         class="project__flag w-condition-invisible"
//                                                                     /><img
//                                                                         src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f5a2bfa47c04db6ea7_flag-Switzerland-1.svg"
//                                                                         loading="lazy"
//                                                                         alt=""
//                                                                         class="project__flag w-condition-invisible"
//                                                                     /><img
//                                                                         src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f57d6e1f1f7843d77f_flag-Switzerland.svg"
//                                                                         loading="lazy"
//                                                                         alt=""
//                                                                         class="project__flag w-condition-invisible"
//                                                                     /><img
//                                                                         src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f5e7f20fc58fe5c44e_flag-Israel.svg"
//                                                                         loading="lazy"
//                                                                         alt=""
//                                                                         class="project__flag w-condition-invisible"
//                                                                     /><img
//                                                                         src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f5c0f20cf420b31974_flag-Morocco.svg"
//                                                                         loading="lazy"
//                                                                         alt=""
//                                                                         class="project__flag w-condition-invisible"
//                                                                     /><img
//                                                                         src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f5d720129808ba77dd_flag-Singapore.svg"
//                                                                         loading="lazy"
//                                                                         alt=""
//                                                                         class="project__flag w-condition-invisible"
//                                                                     /><img
//                                                                         src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f592cb738c6af0302b_flag-Taiwan.svg"
//                                                                         loading="lazy"
//                                                                         alt=""
//                                                                         class="project__flag w-condition-invisible"
//                                                                     /><img
//                                                                         src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f7aa02d59cf699d4a6_flag-Ukraine.svg"
//                                                                         loading="lazy"
//                                                                         alt=""
//                                                                         class="project__flag w-condition-invisible"
//                                                                     /><img
//                                                                         src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f5242c5a0ca8d07969_flag-Austria.svg"
//                                                                         loading="lazy"
//                                                                         alt=""
//                                                                         class="project__flag w-condition-invisible"
//                                                                     /><img
//                                                                         src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f7d720129808ba78ab_flag-Spain.svg"
//                                                                         loading="lazy"
//                                                                         alt=""
//                                                                         class="project__flag w-condition-invisible"
//                                                                     /><img
//                                                                         src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f5e5892608c2ca9cbe_flag-Norway.svg"
//                                                                         loading="lazy"
//                                                                         alt=""
//                                                                         class="project__flag w-condition-invisible"
//                                                                     /><img
//                                                                         src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f54d72d127cd1e97c8_flag-Netherlands.svg"
//                                                                         loading="lazy"
//                                                                         alt=""
//                                                                         class="project__flag w-condition-invisible"
//                                                                     />
//                                                                 </div>
//                                                             </div>
//                                                             <a
//                                                                 data-hover=""
//                                                                 href="project/gig-share"
//                                                                 class="post-card__title-link w-inline-block"
//                                                             >
//                                                                 <h2 class="post-card__title">
//                                                                     Geometry in color: high-contrast design for Gig
//                                                                     Share platform
//                                                                 </h2>
//                                                                 <div class="hide">
//                                                                     <div class="post-card__span-icons">
//                                                                         <div
//                                                                             data-post-card-arrow=""
//                                                                             class="post-card__icons"
//                                                                         >
//                                                                             <div
//                                                                                 data-hover-elem=""
//                                                                                 class="button__icon-anim"
//                                                                             >
//                                                                                 <div
//                                                                                     class="post-card__icon opacity-0 w-embed"
//                                                                                 >
//                                                                                     <svg
//                                                                                         aria-hidden="true"
//                                                                                         role="img"
//                                                                                         fill="currentColor"
//                                                                                         xmlns="http://www.w3.org/2000/svg"
//                                                                                         viewBox="0 0 19 19"
//                                                                                         width="100%"
//                                                                                         height="100%"
//                                                                                     >
//                                                                                         <path
//                                                                                             fill-rule="evenodd"
//                                                                                             d="M6.25.879 14.871 9.5l-8.62 8.622L4.128 16l6.5-6.5-6.5-6.5L6.25.88Z"
//                                                                                             clip-rule="evenodd"
//                                                                                         />
//                                                                                     </svg>
//                                                                                 </div>
//                                                                                 <div
//                                                                                     class="post-card__icon is-icon-absolute w-embed"
//                                                                                 >
//                                                                                     <svg
//                                                                                         aria-hidden="true"
//                                                                                         role="img"
//                                                                                         fill="currentColor"
//                                                                                         xmlns="http://www.w3.org/2000/svg"
//                                                                                         viewBox="0 0 19 19"
//                                                                                         width="100%"
//                                                                                         height="100%"
//                                                                                     >
//                                                                                         <path
//                                                                                             fill-rule="evenodd"
//                                                                                             d="M6.25.879 14.871 9.5l-8.62 8.622L4.128 16l6.5-6.5-6.5-6.5L6.25.88Z"
//                                                                                             clip-rule="evenodd"
//                                                                                         />
//                                                                                     </svg>
//                                                                                 </div>
//                                                                             </div>
//                                                                         </div>
//                                                                     </div>
//                                                                 </div>
//                                                             </a>
//                                                         </div>
//                                                     </div>
//                                                     <div
//                                                         role="listitem"
//                                                         class="collection__item is-posts is-2col w-dyn-item"
//                                                     >
//                                                         <div data-hover-parent="" class="post-card">
//                                                             <a
//                                                                 data-hover=""
//                                                                 data-mask="post"
//                                                                 href="project/alukaze"
//                                                                 class="post-card__img-link w-inline-block"
//                                                             ><img
//                                                                     alt=""
//                                                                     loading="lazy"
//                                                                     data-hover-elem=""
//                                                                     src="https://cdn.prod.website-files.com/63fc977c14aaea404dce4439/66019affc0c597f78f6a82e2_Preview.webp"
//                                                                     sizes="(max-width: 479px) 91vw, (max-width: 767px) 46vw, (max-width: 991px) 43vw, 29vw"
//                                                                     srcset="
//                               https://cdn.prod.website-files.com/63fc977c14aaea404dce4439/66019affc0c597f78f6a82e2_Preview-p-500.webp   500w,
//                               https://cdn.prod.website-files.com/63fc977c14aaea404dce4439/66019affc0c597f78f6a82e2_Preview-p-800.webp   800w,
//                               https://cdn.prod.website-files.com/63fc977c14aaea404dce4439/66019affc0c597f78f6a82e2_Preview-p-1080.webp 1080w,
//                               https://cdn.prod.website-files.com/63fc977c14aaea404dce4439/66019affc0c597f78f6a82e2_Preview.webp        1280w
//                             "
//                                                                     class="post-card__img is-full"
//                                                                 /></a>
//                                                             <div class="post-card__param">
//                                                                 <div
//                                                                     fs-cmsnest-collection="industries"
//                                                                     fs-cmsnest-element="nest-target"
//                                                                     class="project__tag"
//                                                                 >
//                                                                     INDUSTRY
//                                                                 </div>
//                                                                 <div
//                                                                     fs-cmsnest-collection="services"
//                                                                     fs-cmsnest-element="nest-target"
//                                                                     class="hide"
//                                                                 >
//                                                                     Development
//                                                                 </div>
//                                                                 <div class="project__flags">
//                                                                     <img
//                                                                         src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f93d2fc2bf12abc331_flag-USA.svg"
//                                                                         loading="lazy"
//                                                                         alt=""
//                                                                         class="project__flag w-condition-invisible"
//                                                                     /><img
//                                                                         src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f57d6e1f1f7843d783_flag-UK.svg"
//                                                                         loading="lazy"
//                                                                         alt=""
//                                                                         class="project__flag w-condition-invisible"
//                                                                     /><img
//                                                                         src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f58b8a864aefae4cc4_flag-France.svg"
//                                                                         loading="lazy"
//                                                                         alt=""
//                                                                         class="project__flag w-condition-invisible"
//                                                                     /><img
//                                                                         src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f5bba1c0265ae1c9f8_flag-Canada.svg"
//                                                                         loading="lazy"
//                                                                         alt=""
//                                                                         class="project__flag w-condition-invisible"
//                                                                     /><img
//                                                                         src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f5a2bfa47c04db6ea7_flag-Switzerland-1.svg"
//                                                                         loading="lazy"
//                                                                         alt=""
//                                                                         class="project__flag w-condition-invisible"
//                                                                     /><img
//                                                                         src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f57d6e1f1f7843d77f_flag-Switzerland.svg"
//                                                                         loading="lazy"
//                                                                         alt=""
//                                                                         class="project__flag w-condition-invisible"
//                                                                     /><img
//                                                                         src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f5e7f20fc58fe5c44e_flag-Israel.svg"
//                                                                         loading="lazy"
//                                                                         alt=""
//                                                                         class="project__flag w-condition-invisible"
//                                                                     /><img
//                                                                         src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f5c0f20cf420b31974_flag-Morocco.svg"
//                                                                         loading="lazy"
//                                                                         alt=""
//                                                                         class="project__flag w-condition-invisible"
//                                                                     /><img
//                                                                         src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f5d720129808ba77dd_flag-Singapore.svg"
//                                                                         loading="lazy"
//                                                                         alt=""
//                                                                         class="project__flag"
//                                                                     /><img
//                                                                         src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f592cb738c6af0302b_flag-Taiwan.svg"
//                                                                         loading="lazy"
//                                                                         alt=""
//                                                                         class="project__flag w-condition-invisible"
//                                                                     /><img
//                                                                         src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f7aa02d59cf699d4a6_flag-Ukraine.svg"
//                                                                         loading="lazy"
//                                                                         alt=""
//                                                                         class="project__flag w-condition-invisible"
//                                                                     /><img
//                                                                         src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f5242c5a0ca8d07969_flag-Austria.svg"
//                                                                         loading="lazy"
//                                                                         alt=""
//                                                                         class="project__flag w-condition-invisible"
//                                                                     /><img
//                                                                         src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f7d720129808ba78ab_flag-Spain.svg"
//                                                                         loading="lazy"
//                                                                         alt=""
//                                                                         class="project__flag w-condition-invisible"
//                                                                     /><img
//                                                                         src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f5e5892608c2ca9cbe_flag-Norway.svg"
//                                                                         loading="lazy"
//                                                                         alt=""
//                                                                         class="project__flag w-condition-invisible"
//                                                                     /><img
//                                                                         src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f54d72d127cd1e97c8_flag-Netherlands.svg"
//                                                                         loading="lazy"
//                                                                         alt=""
//                                                                         class="project__flag w-condition-invisible"
//                                                                     />
//                                                                 </div>
//                                                             </div>
//                                                             <a
//                                                                 data-hover=""
//                                                                 href="project/alukaze"
//                                                                 class="post-card__title-link w-inline-block"
//                                                             >
//                                                                 <h2 class="post-card__title">
//                                                                     Alukaze — combining wind and metal for a truly
//                                                                     striking effect
//                                                                 </h2>
//                                                                 <div class="hide">
//                                                                     <div class="post-card__span-icons">
//                                                                         <div
//                                                                             data-post-card-arrow=""
//                                                                             class="post-card__icons"
//                                                                         >
//                                                                             <div
//                                                                                 data-hover-elem=""
//                                                                                 class="button__icon-anim"
//                                                                             >
//                                                                                 <div
//                                                                                     class="post-card__icon opacity-0 w-embed"
//                                                                                 >
//                                                                                     <svg
//                                                                                         aria-hidden="true"
//                                                                                         role="img"
//                                                                                         fill="currentColor"
//                                                                                         xmlns="http://www.w3.org/2000/svg"
//                                                                                         viewBox="0 0 19 19"
//                                                                                         width="100%"
//                                                                                         height="100%"
//                                                                                     >
//                                                                                         <path
//                                                                                             fill-rule="evenodd"
//                                                                                             d="M6.25.879 14.871 9.5l-8.62 8.622L4.128 16l6.5-6.5-6.5-6.5L6.25.88Z"
//                                                                                             clip-rule="evenodd"
//                                                                                         />
//                                                                                     </svg>
//                                                                                 </div>
//                                                                                 <div
//                                                                                     class="post-card__icon is-icon-absolute w-embed"
//                                                                                 >
//                                                                                     <svg
//                                                                                         aria-hidden="true"
//                                                                                         role="img"
//                                                                                         fill="currentColor"
//                                                                                         xmlns="http://www.w3.org/2000/svg"
//                                                                                         viewBox="0 0 19 19"
//                                                                                         width="100%"
//                                                                                         height="100%"
//                                                                                     >
//                                                                                         <path
//                                                                                             fill-rule="evenodd"
//                                                                                             d="M6.25.879 14.871 9.5l-8.62 8.622L4.128 16l6.5-6.5-6.5-6.5L6.25.88Z"
//                                                                                             clip-rule="evenodd"
//                                                                                         />
//                                                                                     </svg>
//                                                                                 </div>
//                                                                             </div>
//                                                                         </div>
//                                                                     </div>
//                                                                 </div>
//                                                             </a>
//                                                         </div>
//                                                     </div>
//                                                     <div
//                                                         role="listitem"
//                                                         class="collection__item is-posts is-2col w-dyn-item"
//                                                     >
//                                                         <div data-hover-parent="" class="post-card">
//                                                             <a
//                                                                 data-hover=""
//                                                                 data-mask="post"
//                                                                 href="project/we-go"
//                                                                 class="post-card__img-link w-inline-block"
//                                                             ><img
//                                                                     alt=""
//                                                                     loading="lazy"
//                                                                     data-hover-elem=""
//                                                                     src="https://cdn.prod.website-files.com/63fc977c14aaea404dce4439/66019a63bbb4b205f45896db_Preview.webp"
//                                                                     sizes="(max-width: 479px) 91vw, (max-width: 767px) 46vw, (max-width: 991px) 43vw, 29vw"
//                                                                     srcset="
//                               https://cdn.prod.website-files.com/63fc977c14aaea404dce4439/66019a63bbb4b205f45896db_Preview-p-500.webp   500w,
//                               https://cdn.prod.website-files.com/63fc977c14aaea404dce4439/66019a63bbb4b205f45896db_Preview-p-800.webp   800w,
//                               https://cdn.prod.website-files.com/63fc977c14aaea404dce4439/66019a63bbb4b205f45896db_Preview-p-1080.webp 1080w,
//                               https://cdn.prod.website-files.com/63fc977c14aaea404dce4439/66019a63bbb4b205f45896db_Preview.webp        1280w
//                             "
//                                                                     class="post-card__img is-full"
//                                                                 /></a>
//                                                             <div class="post-card__param">
//                                                                 <div
//                                                                     fs-cmsnest-collection="industries"
//                                                                     fs-cmsnest-element="nest-target"
//                                                                     class="project__tag"
//                                                                 >
//                                                                     INDUSTRY
//                                                                 </div>
//                                                                 <div
//                                                                     fs-cmsnest-collection="services"
//                                                                     fs-cmsnest-element="nest-target"
//                                                                     class="hide"
//                                                                 >
//                                                                     Development
//                                                                 </div>
//                                                                 <div class="project__flags">
//                                                                     <img
//                                                                         src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f93d2fc2bf12abc331_flag-USA.svg"
//                                                                         loading="lazy"
//                                                                         alt=""
//                                                                         class="project__flag w-condition-invisible"
//                                                                     /><img
//                                                                         src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f57d6e1f1f7843d783_flag-UK.svg"
//                                                                         loading="lazy"
//                                                                         alt=""
//                                                                         class="project__flag w-condition-invisible"
//                                                                     /><img
//                                                                         src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f58b8a864aefae4cc4_flag-France.svg"
//                                                                         loading="lazy"
//                                                                         alt=""
//                                                                         class="project__flag w-condition-invisible"
//                                                                     /><img
//                                                                         src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f5bba1c0265ae1c9f8_flag-Canada.svg"
//                                                                         loading="lazy"
//                                                                         alt=""
//                                                                         class="project__flag w-condition-invisible"
//                                                                     /><img
//                                                                         src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f5a2bfa47c04db6ea7_flag-Switzerland-1.svg"
//                                                                         loading="lazy"
//                                                                         alt=""
//                                                                         class="project__flag w-condition-invisible"
//                                                                     /><img
//                                                                         src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f57d6e1f1f7843d77f_flag-Switzerland.svg"
//                                                                         loading="lazy"
//                                                                         alt=""
//                                                                         class="project__flag w-condition-invisible"
//                                                                     /><img
//                                                                         src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f5e7f20fc58fe5c44e_flag-Israel.svg"
//                                                                         loading="lazy"
//                                                                         alt=""
//                                                                         class="project__flag w-condition-invisible"
//                                                                     /><img
//                                                                         src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f5c0f20cf420b31974_flag-Morocco.svg"
//                                                                         loading="lazy"
//                                                                         alt=""
//                                                                         class="project__flag w-condition-invisible"
//                                                                     /><img
//                                                                         src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f5d720129808ba77dd_flag-Singapore.svg"
//                                                                         loading="lazy"
//                                                                         alt=""
//                                                                         class="project__flag w-condition-invisible"
//                                                                     /><img
//                                                                         src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f592cb738c6af0302b_flag-Taiwan.svg"
//                                                                         loading="lazy"
//                                                                         alt=""
//                                                                         class="project__flag"
//                                                                     /><img
//                                                                         src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f7aa02d59cf699d4a6_flag-Ukraine.svg"
//                                                                         loading="lazy"
//                                                                         alt=""
//                                                                         class="project__flag w-condition-invisible"
//                                                                     /><img
//                                                                         src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f5242c5a0ca8d07969_flag-Austria.svg"
//                                                                         loading="lazy"
//                                                                         alt=""
//                                                                         class="project__flag w-condition-invisible"
//                                                                     /><img
//                                                                         src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f7d720129808ba78ab_flag-Spain.svg"
//                                                                         loading="lazy"
//                                                                         alt=""
//                                                                         class="project__flag w-condition-invisible"
//                                                                     /><img
//                                                                         src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f5e5892608c2ca9cbe_flag-Norway.svg"
//                                                                         loading="lazy"
//                                                                         alt=""
//                                                                         class="project__flag w-condition-invisible"
//                                                                     /><img
//                                                                         src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f54d72d127cd1e97c8_flag-Netherlands.svg"
//                                                                         loading="lazy"
//                                                                         alt=""
//                                                                         class="project__flag w-condition-invisible"
//                                                                     />
//                                                                 </div>
//                                                             </div>
//                                                             <a
//                                                                 data-hover=""
//                                                                 href="project/we-go"
//                                                                 class="post-card__title-link w-inline-block"
//                                                             >
//                                                                 <h2 class="post-card__title">
//                                                                     We-go — a new digital life for a perinatal wellness
//                                                                     center
//                                                                 </h2>
//                                                                 <div class="hide">
//                                                                     <div class="post-card__span-icons">
//                                                                         <div
//                                                                             data-post-card-arrow=""
//                                                                             class="post-card__icons"
//                                                                         >
//                                                                             <div
//                                                                                 data-hover-elem=""
//                                                                                 class="button__icon-anim"
//                                                                             >
//                                                                                 <div
//                                                                                     class="post-card__icon opacity-0 w-embed"
//                                                                                 >
//                                                                                     <svg
//                                                                                         aria-hidden="true"
//                                                                                         role="img"
//                                                                                         fill="currentColor"
//                                                                                         xmlns="http://www.w3.org/2000/svg"
//                                                                                         viewBox="0 0 19 19"
//                                                                                         width="100%"
//                                                                                         height="100%"
//                                                                                     >
//                                                                                         <path
//                                                                                             fill-rule="evenodd"
//                                                                                             d="M6.25.879 14.871 9.5l-8.62 8.622L4.128 16l6.5-6.5-6.5-6.5L6.25.88Z"
//                                                                                             clip-rule="evenodd"
//                                                                                         />
//                                                                                     </svg>
//                                                                                 </div>
//                                                                                 <div
//                                                                                     class="post-card__icon is-icon-absolute w-embed"
//                                                                                 >
//                                                                                     <svg
//                                                                                         aria-hidden="true"
//                                                                                         role="img"
//                                                                                         fill="currentColor"
//                                                                                         xmlns="http://www.w3.org/2000/svg"
//                                                                                         viewBox="0 0 19 19"
//                                                                                         width="100%"
//                                                                                         height="100%"
//                                                                                     >
//                                                                                         <path
//                                                                                             fill-rule="evenodd"
//                                                                                             d="M6.25.879 14.871 9.5l-8.62 8.622L4.128 16l6.5-6.5-6.5-6.5L6.25.88Z"
//                                                                                             clip-rule="evenodd"
//                                                                                         />
//                                                                                     </svg>
//                                                                                 </div>
//                                                                             </div>
//                                                                         </div>
//                                                                     </div>
//                                                                 </div>
//                                                             </a>
//                                                         </div>
//                                                     </div>
//                                                     <div
//                                                         role="listitem"
//                                                         class="collection__item is-posts is-2col w-dyn-item"
//                                                     >
//                                                         <div data-hover-parent="" class="post-card">
//                                                             <a
//                                                                 data-hover=""
//                                                                 data-mask="post"
//                                                                 href="project/vestox"
//                                                                 class="post-card__img-link w-inline-block"
//                                                             ><img
//                                                                     alt=""
//                                                                     loading="lazy"
//                                                                     data-hover-elem=""
//                                                                     src="https://cdn.prod.website-files.com/63fc977c14aaea404dce4439/66019c152c987dcc8e6b74b2_Preview.webp"
//                                                                     sizes="(max-width: 479px) 91vw, (max-width: 767px) 46vw, (max-width: 991px) 43vw, 29vw"
//                                                                     srcset="
//                               https://cdn.prod.website-files.com/63fc977c14aaea404dce4439/66019c152c987dcc8e6b74b2_Preview-p-500.webp   500w,
//                               https://cdn.prod.website-files.com/63fc977c14aaea404dce4439/66019c152c987dcc8e6b74b2_Preview-p-800.webp   800w,
//                               https://cdn.prod.website-files.com/63fc977c14aaea404dce4439/66019c152c987dcc8e6b74b2_Preview-p-1080.webp 1080w,
//                               https://cdn.prod.website-files.com/63fc977c14aaea404dce4439/66019c152c987dcc8e6b74b2_Preview.webp        1280w
//                             "
//                                                                     class="post-card__img is-full"
//                                                                 /></a>
//                                                             <div class="post-card__param">
//                                                                 <div
//                                                                     fs-cmsnest-collection="industries"
//                                                                     fs-cmsnest-element="nest-target"
//                                                                     class="project__tag"
//                                                                 >
//                                                                     INDUSTRY
//                                                                 </div>
//                                                                 <div
//                                                                     fs-cmsnest-collection="services"
//                                                                     fs-cmsnest-element="nest-target"
//                                                                     class="hide"
//                                                                 >
//                                                                     Development
//                                                                 </div>
//                                                                 <div class="project__flags">
//                                                                     <img
//                                                                         src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f93d2fc2bf12abc331_flag-USA.svg"
//                                                                         loading="lazy"
//                                                                         alt=""
//                                                                         class="project__flag"
//                                                                     /><img
//                                                                         src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f57d6e1f1f7843d783_flag-UK.svg"
//                                                                         loading="lazy"
//                                                                         alt=""
//                                                                         class="project__flag w-condition-invisible"
//                                                                     /><img
//                                                                         src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f58b8a864aefae4cc4_flag-France.svg"
//                                                                         loading="lazy"
//                                                                         alt=""
//                                                                         class="project__flag w-condition-invisible"
//                                                                     /><img
//                                                                         src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f5bba1c0265ae1c9f8_flag-Canada.svg"
//                                                                         loading="lazy"
//                                                                         alt=""
//                                                                         class="project__flag w-condition-invisible"
//                                                                     /><img
//                                                                         src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f5a2bfa47c04db6ea7_flag-Switzerland-1.svg"
//                                                                         loading="lazy"
//                                                                         alt=""
//                                                                         class="project__flag w-condition-invisible"
//                                                                     /><img
//                                                                         src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f57d6e1f1f7843d77f_flag-Switzerland.svg"
//                                                                         loading="lazy"
//                                                                         alt=""
//                                                                         class="project__flag w-condition-invisible"
//                                                                     /><img
//                                                                         src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f5e7f20fc58fe5c44e_flag-Israel.svg"
//                                                                         loading="lazy"
//                                                                         alt=""
//                                                                         class="project__flag w-condition-invisible"
//                                                                     /><img
//                                                                         src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f5c0f20cf420b31974_flag-Morocco.svg"
//                                                                         loading="lazy"
//                                                                         alt=""
//                                                                         class="project__flag w-condition-invisible"
//                                                                     /><img
//                                                                         src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f5d720129808ba77dd_flag-Singapore.svg"
//                                                                         loading="lazy"
//                                                                         alt=""
//                                                                         class="project__flag w-condition-invisible"
//                                                                     /><img
//                                                                         src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f592cb738c6af0302b_flag-Taiwan.svg"
//                                                                         loading="lazy"
//                                                                         alt=""
//                                                                         class="project__flag w-condition-invisible"
//                                                                     /><img
//                                                                         src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f7aa02d59cf699d4a6_flag-Ukraine.svg"
//                                                                         loading="lazy"
//                                                                         alt=""
//                                                                         class="project__flag w-condition-invisible"
//                                                                     /><img
//                                                                         src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f5242c5a0ca8d07969_flag-Austria.svg"
//                                                                         loading="lazy"
//                                                                         alt=""
//                                                                         class="project__flag w-condition-invisible"
//                                                                     /><img
//                                                                         src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f7d720129808ba78ab_flag-Spain.svg"
//                                                                         loading="lazy"
//                                                                         alt=""
//                                                                         class="project__flag w-condition-invisible"
//                                                                     /><img
//                                                                         src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f5e5892608c2ca9cbe_flag-Norway.svg"
//                                                                         loading="lazy"
//                                                                         alt=""
//                                                                         class="project__flag w-condition-invisible"
//                                                                     /><img
//                                                                         src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f54d72d127cd1e97c8_flag-Netherlands.svg"
//                                                                         loading="lazy"
//                                                                         alt=""
//                                                                         class="project__flag w-condition-invisible"
//                                                                     />
//                                                                 </div>
//                                                             </div>
//                                                             <a
//                                                                 data-hover=""
//                                                                 href="project/vestox"
//                                                                 class="post-card__title-link w-inline-block"
//                                                             >
//                                                                 <h2 class="post-card__title">
//                                                                     High-contrast design for Vestox management system
//                                                                 </h2>
//                                                                 <div class="hide">
//                                                                     <div class="post-card__span-icons">
//                                                                         <div
//                                                                             data-post-card-arrow=""
//                                                                             class="post-card__icons"
//                                                                         >
//                                                                             <div
//                                                                                 data-hover-elem=""
//                                                                                 class="button__icon-anim"
//                                                                             >
//                                                                                 <div
//                                                                                     class="post-card__icon opacity-0 w-embed"
//                                                                                 >
//                                                                                     <svg
//                                                                                         aria-hidden="true"
//                                                                                         role="img"
//                                                                                         fill="currentColor"
//                                                                                         xmlns="http://www.w3.org/2000/svg"
//                                                                                         viewBox="0 0 19 19"
//                                                                                         width="100%"
//                                                                                         height="100%"
//                                                                                     >
//                                                                                         <path
//                                                                                             fill-rule="evenodd"
//                                                                                             d="M6.25.879 14.871 9.5l-8.62 8.622L4.128 16l6.5-6.5-6.5-6.5L6.25.88Z"
//                                                                                             clip-rule="evenodd"
//                                                                                         />
//                                                                                     </svg>
//                                                                                 </div>
//                                                                                 <div
//                                                                                     class="post-card__icon is-icon-absolute w-embed"
//                                                                                 >
//                                                                                     <svg
//                                                                                         aria-hidden="true"
//                                                                                         role="img"
//                                                                                         fill="currentColor"
//                                                                                         xmlns="http://www.w3.org/2000/svg"
//                                                                                         viewBox="0 0 19 19"
//                                                                                         width="100%"
//                                                                                         height="100%"
//                                                                                     >
//                                                                                         <path
//                                                                                             fill-rule="evenodd"
//                                                                                             d="M6.25.879 14.871 9.5l-8.62 8.622L4.128 16l6.5-6.5-6.5-6.5L6.25.88Z"
//                                                                                             clip-rule="evenodd"
//                                                                                         />
//                                                                                     </svg>
//                                                                                 </div>
//                                                                             </div>
//                                                                         </div>
//                                                                     </div>
//                                                                 </div>
//                                                             </a>
//                                                         </div>
//                                                     </div>
//                                                     <div
//                                                         role="listitem"
//                                                         class="collection__item is-posts is-2col w-dyn-item"
//                                                     >
//                                                         <div data-hover-parent="" class="post-card">
//                                                             <a
//                                                                 data-hover=""
//                                                                 data-mask="post"
//                                                                 href="project/quirkchat"
//                                                                 class="post-card__img-link w-inline-block"
//                                                             ><img
//                                                                     alt=""
//                                                                     loading="lazy"
//                                                                     data-hover-elem=""
//                                                                     src="https://cdn.prod.website-files.com/63fc977c14aaea404dce4439/66019a9ec2c25a177d893657_Preview.webp"
//                                                                     sizes="(max-width: 479px) 91vw, (max-width: 767px) 46vw, (max-width: 991px) 43vw, 29vw"
//                                                                     srcset="
//                               https://cdn.prod.website-files.com/63fc977c14aaea404dce4439/66019a9ec2c25a177d893657_Preview-p-500.webp   500w,
//                               https://cdn.prod.website-files.com/63fc977c14aaea404dce4439/66019a9ec2c25a177d893657_Preview-p-800.webp   800w,
//                               https://cdn.prod.website-files.com/63fc977c14aaea404dce4439/66019a9ec2c25a177d893657_Preview-p-1080.webp 1080w,
//                               https://cdn.prod.website-files.com/63fc977c14aaea404dce4439/66019a9ec2c25a177d893657_Preview.webp        1280w
//                             "
//                                                                     class="post-card__img is-full"
//                                                                 /></a>
//                                                             <div class="post-card__param">
//                                                                 <div
//                                                                     fs-cmsnest-collection="industries"
//                                                                     fs-cmsnest-element="nest-target"
//                                                                     class="project__tag"
//                                                                 >
//                                                                     INDUSTRY
//                                                                 </div>
//                                                                 <div
//                                                                     fs-cmsnest-collection="services"
//                                                                     fs-cmsnest-element="nest-target"
//                                                                     class="hide"
//                                                                 >
//                                                                     Development
//                                                                 </div>
//                                                                 <div class="project__flags">
//                                                                     <img
//                                                                         src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f93d2fc2bf12abc331_flag-USA.svg"
//                                                                         loading="lazy"
//                                                                         alt=""
//                                                                         class="project__flag"
//                                                                     /><img
//                                                                         src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f57d6e1f1f7843d783_flag-UK.svg"
//                                                                         loading="lazy"
//                                                                         alt=""
//                                                                         class="project__flag w-condition-invisible"
//                                                                     /><img
//                                                                         src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f58b8a864aefae4cc4_flag-France.svg"
//                                                                         loading="lazy"
//                                                                         alt=""
//                                                                         class="project__flag w-condition-invisible"
//                                                                     /><img
//                                                                         src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f5bba1c0265ae1c9f8_flag-Canada.svg"
//                                                                         loading="lazy"
//                                                                         alt=""
//                                                                         class="project__flag w-condition-invisible"
//                                                                     /><img
//                                                                         src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f5a2bfa47c04db6ea7_flag-Switzerland-1.svg"
//                                                                         loading="lazy"
//                                                                         alt=""
//                                                                         class="project__flag w-condition-invisible"
//                                                                     /><img
//                                                                         src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f57d6e1f1f7843d77f_flag-Switzerland.svg"
//                                                                         loading="lazy"
//                                                                         alt=""
//                                                                         class="project__flag w-condition-invisible"
//                                                                     /><img
//                                                                         src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f5e7f20fc58fe5c44e_flag-Israel.svg"
//                                                                         loading="lazy"
//                                                                         alt=""
//                                                                         class="project__flag w-condition-invisible"
//                                                                     /><img
//                                                                         src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f5c0f20cf420b31974_flag-Morocco.svg"
//                                                                         loading="lazy"
//                                                                         alt=""
//                                                                         class="project__flag w-condition-invisible"
//                                                                     /><img
//                                                                         src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f5d720129808ba77dd_flag-Singapore.svg"
//                                                                         loading="lazy"
//                                                                         alt=""
//                                                                         class="project__flag w-condition-invisible"
//                                                                     /><img
//                                                                         src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f592cb738c6af0302b_flag-Taiwan.svg"
//                                                                         loading="lazy"
//                                                                         alt=""
//                                                                         class="project__flag w-condition-invisible"
//                                                                     /><img
//                                                                         src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f7aa02d59cf699d4a6_flag-Ukraine.svg"
//                                                                         loading="lazy"
//                                                                         alt=""
//                                                                         class="project__flag w-condition-invisible"
//                                                                     /><img
//                                                                         src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f5242c5a0ca8d07969_flag-Austria.svg"
//                                                                         loading="lazy"
//                                                                         alt=""
//                                                                         class="project__flag w-condition-invisible"
//                                                                     /><img
//                                                                         src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f7d720129808ba78ab_flag-Spain.svg"
//                                                                         loading="lazy"
//                                                                         alt=""
//                                                                         class="project__flag w-condition-invisible"
//                                                                     /><img
//                                                                         src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f5e5892608c2ca9cbe_flag-Norway.svg"
//                                                                         loading="lazy"
//                                                                         alt=""
//                                                                         class="project__flag w-condition-invisible"
//                                                                     /><img
//                                                                         src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f54d72d127cd1e97c8_flag-Netherlands.svg"
//                                                                         loading="lazy"
//                                                                         alt=""
//                                                                         class="project__flag w-condition-invisible"
//                                                                     />
//                                                                 </div>
//                                                             </div>
//                                                             <a
//                                                                 data-hover=""
//                                                                 href="project/quirkchat"
//                                                                 class="post-card__title-link w-inline-block"
//                                                             >
//                                                                 <h2 class="post-card__title">
//                                                                     Quirkchat — Swipe right ongeek &amp; Fleek design
//                                                                     solutions
//                                                                 </h2>
//                                                                 <div class="hide">
//                                                                     <div class="post-card__span-icons">
//                                                                         <div
//                                                                             data-post-card-arrow=""
//                                                                             class="post-card__icons"
//                                                                         >
//                                                                             <div
//                                                                                 data-hover-elem=""
//                                                                                 class="button__icon-anim"
//                                                                             >
//                                                                                 <div
//                                                                                     class="post-card__icon opacity-0 w-embed"
//                                                                                 >
//                                                                                     <svg
//                                                                                         aria-hidden="true"
//                                                                                         role="img"
//                                                                                         fill="currentColor"
//                                                                                         xmlns="http://www.w3.org/2000/svg"
//                                                                                         viewBox="0 0 19 19"
//                                                                                         width="100%"
//                                                                                         height="100%"
//                                                                                     >
//                                                                                         <path
//                                                                                             fill-rule="evenodd"
//                                                                                             d="M6.25.879 14.871 9.5l-8.62 8.622L4.128 16l6.5-6.5-6.5-6.5L6.25.88Z"
//                                                                                             clip-rule="evenodd"
//                                                                                         />
//                                                                                     </svg>
//                                                                                 </div>
//                                                                                 <div
//                                                                                     class="post-card__icon is-icon-absolute w-embed"
//                                                                                 >
//                                                                                     <svg
//                                                                                         aria-hidden="true"
//                                                                                         role="img"
//                                                                                         fill="currentColor"
//                                                                                         xmlns="http://www.w3.org/2000/svg"
//                                                                                         viewBox="0 0 19 19"
//                                                                                         width="100%"
//                                                                                         height="100%"
//                                                                                     >
//                                                                                         <path
//                                                                                             fill-rule="evenodd"
//                                                                                             d="M6.25.879 14.871 9.5l-8.62 8.622L4.128 16l6.5-6.5-6.5-6.5L6.25.88Z"
//                                                                                             clip-rule="evenodd"
//                                                                                         />
//                                                                                     </svg>
//                                                                                 </div>
//                                                                             </div>
//                                                                         </div>
//                                                                     </div>
//                                                                 </div>
//                                                             </a>
//                                                         </div>
//                                                     </div>
//                                                     <div
//                                                         role="listitem"
//                                                         class="collection__item is-posts is-2col w-dyn-item"
//                                                     >
//                                                         <div data-hover-parent="" class="post-card">
//                                                             <a
//                                                                 data-hover=""
//                                                                 data-mask="post"
//                                                                 href="project/kinetik"
//                                                                 class="post-card__img-link w-inline-block"
//                                                             ><img
//                                                                     alt=""
//                                                                     loading="lazy"
//                                                                     data-hover-elem=""
//                                                                     src="https://cdn.prod.website-files.com/63fc977c14aaea404dce4439/660193d2b78a5e40971f414c_Preview.webp"
//                                                                     sizes="(max-width: 479px) 91vw, (max-width: 767px) 46vw, (max-width: 991px) 43vw, 29vw"
//                                                                     srcset="
//                               https://cdn.prod.website-files.com/63fc977c14aaea404dce4439/660193d2b78a5e40971f414c_Preview-p-500.webp   500w,
//                               https://cdn.prod.website-files.com/63fc977c14aaea404dce4439/660193d2b78a5e40971f414c_Preview-p-800.webp   800w,
//                               https://cdn.prod.website-files.com/63fc977c14aaea404dce4439/660193d2b78a5e40971f414c_Preview-p-1080.webp 1080w,
//                               https://cdn.prod.website-files.com/63fc977c14aaea404dce4439/660193d2b78a5e40971f414c_Preview.webp        1280w
//                             "
//                                                                     class="post-card__img is-full"
//                                                                 /></a>
//                                                             <div class="post-card__param">
//                                                                 <div
//                                                                     fs-cmsnest-collection="industries"
//                                                                     fs-cmsnest-element="nest-target"
//                                                                     class="project__tag"
//                                                                 >
//                                                                     INDUSTRY
//                                                                 </div>
//                                                                 <div
//                                                                     fs-cmsnest-collection="services"
//                                                                     fs-cmsnest-element="nest-target"
//                                                                     class="hide"
//                                                                 >
//                                                                     Development
//                                                                 </div>
//                                                                 <div class="project__flags">
//                                                                     <img
//                                                                         src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f93d2fc2bf12abc331_flag-USA.svg"
//                                                                         loading="lazy"
//                                                                         alt=""
//                                                                         class="project__flag"
//                                                                     /><img
//                                                                         src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f57d6e1f1f7843d783_flag-UK.svg"
//                                                                         loading="lazy"
//                                                                         alt=""
//                                                                         class="project__flag w-condition-invisible"
//                                                                     /><img
//                                                                         src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f58b8a864aefae4cc4_flag-France.svg"
//                                                                         loading="lazy"
//                                                                         alt=""
//                                                                         class="project__flag w-condition-invisible"
//                                                                     /><img
//                                                                         src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f5bba1c0265ae1c9f8_flag-Canada.svg"
//                                                                         loading="lazy"
//                                                                         alt=""
//                                                                         class="project__flag w-condition-invisible"
//                                                                     /><img
//                                                                         src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f5a2bfa47c04db6ea7_flag-Switzerland-1.svg"
//                                                                         loading="lazy"
//                                                                         alt=""
//                                                                         class="project__flag w-condition-invisible"
//                                                                     /><img
//                                                                         src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f57d6e1f1f7843d77f_flag-Switzerland.svg"
//                                                                         loading="lazy"
//                                                                         alt=""
//                                                                         class="project__flag w-condition-invisible"
//                                                                     /><img
//                                                                         src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f5e7f20fc58fe5c44e_flag-Israel.svg"
//                                                                         loading="lazy"
//                                                                         alt=""
//                                                                         class="project__flag w-condition-invisible"
//                                                                     /><img
//                                                                         src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f5c0f20cf420b31974_flag-Morocco.svg"
//                                                                         loading="lazy"
//                                                                         alt=""
//                                                                         class="project__flag w-condition-invisible"
//                                                                     /><img
//                                                                         src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f5d720129808ba77dd_flag-Singapore.svg"
//                                                                         loading="lazy"
//                                                                         alt=""
//                                                                         class="project__flag w-condition-invisible"
//                                                                     /><img
//                                                                         src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f592cb738c6af0302b_flag-Taiwan.svg"
//                                                                         loading="lazy"
//                                                                         alt=""
//                                                                         class="project__flag w-condition-invisible"
//                                                                     /><img
//                                                                         src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f7aa02d59cf699d4a6_flag-Ukraine.svg"
//                                                                         loading="lazy"
//                                                                         alt=""
//                                                                         class="project__flag w-condition-invisible"
//                                                                     /><img
//                                                                         src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f5242c5a0ca8d07969_flag-Austria.svg"
//                                                                         loading="lazy"
//                                                                         alt=""
//                                                                         class="project__flag w-condition-invisible"
//                                                                     /><img
//                                                                         src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f7d720129808ba78ab_flag-Spain.svg"
//                                                                         loading="lazy"
//                                                                         alt=""
//                                                                         class="project__flag w-condition-invisible"
//                                                                     /><img
//                                                                         src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f5e5892608c2ca9cbe_flag-Norway.svg"
//                                                                         loading="lazy"
//                                                                         alt=""
//                                                                         class="project__flag w-condition-invisible"
//                                                                     /><img
//                                                                         src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f54d72d127cd1e97c8_flag-Netherlands.svg"
//                                                                         loading="lazy"
//                                                                         alt=""
//                                                                         class="project__flag w-condition-invisible"
//                                                                     />
//                                                                 </div>
//                                                             </div>
//                                                             <a
//                                                                 data-hover=""
//                                                                 href="project/kinetik"
//                                                                 class="post-card__title-link w-inline-block"
//                                                             >
//                                                                 <h2 class="post-card__title">
//                                                                     Kinetik Platform with over 3,500 Integrated
//                                                                     Providers
//                                                                 </h2>
//                                                                 <div class="hide">
//                                                                     <div class="post-card__span-icons">
//                                                                         <div
//                                                                             data-post-card-arrow=""
//                                                                             class="post-card__icons"
//                                                                         >
//                                                                             <div
//                                                                                 data-hover-elem=""
//                                                                                 class="button__icon-anim"
//                                                                             >
//                                                                                 <div
//                                                                                     class="post-card__icon opacity-0 w-embed"
//                                                                                 >
//                                                                                     <svg
//                                                                                         aria-hidden="true"
//                                                                                         role="img"
//                                                                                         fill="currentColor"
//                                                                                         xmlns="http://www.w3.org/2000/svg"
//                                                                                         viewBox="0 0 19 19"
//                                                                                         width="100%"
//                                                                                         height="100%"
//                                                                                     >
//                                                                                         <path
//                                                                                             fill-rule="evenodd"
//                                                                                             d="M6.25.879 14.871 9.5l-8.62 8.622L4.128 16l6.5-6.5-6.5-6.5L6.25.88Z"
//                                                                                             clip-rule="evenodd"
//                                                                                         />
//                                                                                     </svg>
//                                                                                 </div>
//                                                                                 <div
//                                                                                     class="post-card__icon is-icon-absolute w-embed"
//                                                                                 >
//                                                                                     <svg
//                                                                                         aria-hidden="true"
//                                                                                         role="img"
//                                                                                         fill="currentColor"
//                                                                                         xmlns="http://www.w3.org/2000/svg"
//                                                                                         viewBox="0 0 19 19"
//                                                                                         width="100%"
//                                                                                         height="100%"
//                                                                                     >
//                                                                                         <path
//                                                                                             fill-rule="evenodd"
//                                                                                             d="M6.25.879 14.871 9.5l-8.62 8.622L4.128 16l6.5-6.5-6.5-6.5L6.25.88Z"
//                                                                                             clip-rule="evenodd"
//                                                                                         />
//                                                                                     </svg>
//                                                                                 </div>
//                                                                             </div>
//                                                                         </div>
//                                                                     </div>
//                                                                 </div>
//                                                             </a>
//                                                         </div>
//                                                     </div>
//                                                     <div
//                                                         role="listitem"
//                                                         class="collection__item is-posts is-2col w-dyn-item"
//                                                     >
//                                                         <div data-hover-parent="" class="post-card">
//                                                             <a
//                                                                 data-hover=""
//                                                                 data-mask="post"
//                                                                 href="project/raven"
//                                                                 class="post-card__img-link w-inline-block"
//                                                             ><img
//                                                                     alt=""
//                                                                     loading="lazy"
//                                                                     data-hover-elem=""
//                                                                     src="https://cdn.prod.website-files.com/63fc977c14aaea404dce4439/66019cc561302e60a73e61dc_Preview.webp"
//                                                                     sizes="(max-width: 479px) 91vw, (max-width: 767px) 46vw, (max-width: 991px) 43vw, 29vw"
//                                                                     srcset="
//                               https://cdn.prod.website-files.com/63fc977c14aaea404dce4439/66019cc561302e60a73e61dc_Preview-p-500.webp   500w,
//                               https://cdn.prod.website-files.com/63fc977c14aaea404dce4439/66019cc561302e60a73e61dc_Preview-p-800.webp   800w,
//                               https://cdn.prod.website-files.com/63fc977c14aaea404dce4439/66019cc561302e60a73e61dc_Preview-p-1080.webp 1080w,
//                               https://cdn.prod.website-files.com/63fc977c14aaea404dce4439/66019cc561302e60a73e61dc_Preview.webp        1280w
//                             "
//                                                                     class="post-card__img is-full"
//                                                                 /></a>
//                                                             <div class="post-card__param">
//                                                                 <div
//                                                                     fs-cmsnest-collection="industries"
//                                                                     fs-cmsnest-element="nest-target"
//                                                                     class="project__tag"
//                                                                 >
//                                                                     INDUSTRY
//                                                                 </div>
//                                                                 <div
//                                                                     fs-cmsnest-collection="services"
//                                                                     fs-cmsnest-element="nest-target"
//                                                                     class="hide"
//                                                                 >
//                                                                     Development
//                                                                 </div>
//                                                                 <div class="project__flags">
//                                                                     <img
//                                                                         src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f93d2fc2bf12abc331_flag-USA.svg"
//                                                                         loading="lazy"
//                                                                         alt=""
//                                                                         class="project__flag w-condition-invisible"
//                                                                     /><img
//                                                                         src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f57d6e1f1f7843d783_flag-UK.svg"
//                                                                         loading="lazy"
//                                                                         alt=""
//                                                                         class="project__flag"
//                                                                     /><img
//                                                                         src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f58b8a864aefae4cc4_flag-France.svg"
//                                                                         loading="lazy"
//                                                                         alt=""
//                                                                         class="project__flag w-condition-invisible"
//                                                                     /><img
//                                                                         src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f5bba1c0265ae1c9f8_flag-Canada.svg"
//                                                                         loading="lazy"
//                                                                         alt=""
//                                                                         class="project__flag w-condition-invisible"
//                                                                     /><img
//                                                                         src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f5a2bfa47c04db6ea7_flag-Switzerland-1.svg"
//                                                                         loading="lazy"
//                                                                         alt=""
//                                                                         class="project__flag w-condition-invisible"
//                                                                     /><img
//                                                                         src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f57d6e1f1f7843d77f_flag-Switzerland.svg"
//                                                                         loading="lazy"
//                                                                         alt=""
//                                                                         class="project__flag w-condition-invisible"
//                                                                     /><img
//                                                                         src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f5e7f20fc58fe5c44e_flag-Israel.svg"
//                                                                         loading="lazy"
//                                                                         alt=""
//                                                                         class="project__flag w-condition-invisible"
//                                                                     /><img
//                                                                         src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f5c0f20cf420b31974_flag-Morocco.svg"
//                                                                         loading="lazy"
//                                                                         alt=""
//                                                                         class="project__flag w-condition-invisible"
//                                                                     /><img
//                                                                         src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f5d720129808ba77dd_flag-Singapore.svg"
//                                                                         loading="lazy"
//                                                                         alt=""
//                                                                         class="project__flag w-condition-invisible"
//                                                                     /><img
//                                                                         src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f592cb738c6af0302b_flag-Taiwan.svg"
//                                                                         loading="lazy"
//                                                                         alt=""
//                                                                         class="project__flag w-condition-invisible"
//                                                                     /><img
//                                                                         src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f7aa02d59cf699d4a6_flag-Ukraine.svg"
//                                                                         loading="lazy"
//                                                                         alt=""
//                                                                         class="project__flag w-condition-invisible"
//                                                                     /><img
//                                                                         src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f5242c5a0ca8d07969_flag-Austria.svg"
//                                                                         loading="lazy"
//                                                                         alt=""
//                                                                         class="project__flag w-condition-invisible"
//                                                                     /><img
//                                                                         src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f7d720129808ba78ab_flag-Spain.svg"
//                                                                         loading="lazy"
//                                                                         alt=""
//                                                                         class="project__flag w-condition-invisible"
//                                                                     /><img
//                                                                         src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f5e5892608c2ca9cbe_flag-Norway.svg"
//                                                                         loading="lazy"
//                                                                         alt=""
//                                                                         class="project__flag w-condition-invisible"
//                                                                     /><img
//                                                                         src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f54d72d127cd1e97c8_flag-Netherlands.svg"
//                                                                         loading="lazy"
//                                                                         alt=""
//                                                                         class="project__flag w-condition-invisible"
//                                                                     />
//                                                                 </div>
//                                                             </div>
//                                                             <a
//                                                                 data-hover=""
//                                                                 href="project/raven"
//                                                                 class="post-card__title-link w-inline-block"
//                                                             >
//                                                                 <h2 class="post-card__title">
//                                                                     Raven.gg — the leading brand for custom esports
//                                                                     clothing design
//                                                                 </h2>
//                                                                 <div class="hide">
//                                                                     <div class="post-card__span-icons">
//                                                                         <div
//                                                                             data-post-card-arrow=""
//                                                                             class="post-card__icons"
//                                                                         >
//                                                                             <div
//                                                                                 data-hover-elem=""
//                                                                                 class="button__icon-anim"
//                                                                             >
//                                                                                 <div
//                                                                                     class="post-card__icon opacity-0 w-embed"
//                                                                                 >
//                                                                                     <svg
//                                                                                         aria-hidden="true"
//                                                                                         role="img"
//                                                                                         fill="currentColor"
//                                                                                         xmlns="http://www.w3.org/2000/svg"
//                                                                                         viewBox="0 0 19 19"
//                                                                                         width="100%"
//                                                                                         height="100%"
//                                                                                     >
//                                                                                         <path
//                                                                                             fill-rule="evenodd"
//                                                                                             d="M6.25.879 14.871 9.5l-8.62 8.622L4.128 16l6.5-6.5-6.5-6.5L6.25.88Z"
//                                                                                             clip-rule="evenodd"
//                                                                                         />
//                                                                                     </svg>
//                                                                                 </div>
//                                                                                 <div
//                                                                                     class="post-card__icon is-icon-absolute w-embed"
//                                                                                 >
//                                                                                     <svg
//                                                                                         aria-hidden="true"
//                                                                                         role="img"
//                                                                                         fill="currentColor"
//                                                                                         xmlns="http://www.w3.org/2000/svg"
//                                                                                         viewBox="0 0 19 19"
//                                                                                         width="100%"
//                                                                                         height="100%"
//                                                                                     >
//                                                                                         <path
//                                                                                             fill-rule="evenodd"
//                                                                                             d="M6.25.879 14.871 9.5l-8.62 8.622L4.128 16l6.5-6.5-6.5-6.5L6.25.88Z"
//                                                                                             clip-rule="evenodd"
//                                                                                         />
//                                                                                     </svg>
//                                                                                 </div>
//                                                                             </div>
//                                                                         </div>
//                                                                     </div>
//                                                                 </div>
//                                                             </a>
//                                                         </div>
//                                                     </div>
//                                                     <div
//                                                         role="listitem"
//                                                         class="collection__item is-posts is-2col w-dyn-item"
//                                                     >
//                                                         <div data-hover-parent="" class="post-card">
//                                                             <a
//                                                                 data-hover=""
//                                                                 data-mask="post"
//                                                                 href="project/databest"
//                                                                 class="post-card__img-link w-inline-block"
//                                                             ><img
//                                                                     alt=""
//                                                                     loading="lazy"
//                                                                     data-hover-elem=""
//                                                                     src="https://cdn.prod.website-files.com/63fc977c14aaea404dce4439/660199f223a5d1a412ba86d4_Preview.webp"
//                                                                     sizes="(max-width: 479px) 91vw, (max-width: 767px) 46vw, (max-width: 991px) 43vw, 29vw"
//                                                                     srcset="
//                               https://cdn.prod.website-files.com/63fc977c14aaea404dce4439/660199f223a5d1a412ba86d4_Preview-p-500.webp   500w,
//                               https://cdn.prod.website-files.com/63fc977c14aaea404dce4439/660199f223a5d1a412ba86d4_Preview-p-800.webp   800w,
//                               https://cdn.prod.website-files.com/63fc977c14aaea404dce4439/660199f223a5d1a412ba86d4_Preview-p-1080.webp 1080w,
//                               https://cdn.prod.website-files.com/63fc977c14aaea404dce4439/660199f223a5d1a412ba86d4_Preview.webp        1280w
//                             "
//                                                                     class="post-card__img is-full"
//                                                                 /></a>
//                                                             <div class="post-card__param">
//                                                                 <div
//                                                                     fs-cmsnest-collection="industries"
//                                                                     fs-cmsnest-element="nest-target"
//                                                                     class="project__tag"
//                                                                 >
//                                                                     INDUSTRY
//                                                                 </div>
//                                                                 <div
//                                                                     fs-cmsnest-collection="services"
//                                                                     fs-cmsnest-element="nest-target"
//                                                                     class="hide"
//                                                                 >
//                                                                     Development
//                                                                 </div>
//                                                                 <div class="project__flags">
//                                                                     <img
//                                                                         src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f93d2fc2bf12abc331_flag-USA.svg"
//                                                                         loading="lazy"
//                                                                         alt=""
//                                                                         class="project__flag"
//                                                                     /><img
//                                                                         src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f57d6e1f1f7843d783_flag-UK.svg"
//                                                                         loading="lazy"
//                                                                         alt=""
//                                                                         class="project__flag w-condition-invisible"
//                                                                     /><img
//                                                                         src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f58b8a864aefae4cc4_flag-France.svg"
//                                                                         loading="lazy"
//                                                                         alt=""
//                                                                         class="project__flag w-condition-invisible"
//                                                                     /><img
//                                                                         src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f5bba1c0265ae1c9f8_flag-Canada.svg"
//                                                                         loading="lazy"
//                                                                         alt=""
//                                                                         class="project__flag w-condition-invisible"
//                                                                     /><img
//                                                                         src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f5a2bfa47c04db6ea7_flag-Switzerland-1.svg"
//                                                                         loading="lazy"
//                                                                         alt=""
//                                                                         class="project__flag w-condition-invisible"
//                                                                     /><img
//                                                                         src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f57d6e1f1f7843d77f_flag-Switzerland.svg"
//                                                                         loading="lazy"
//                                                                         alt=""
//                                                                         class="project__flag w-condition-invisible"
//                                                                     /><img
//                                                                         src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f5e7f20fc58fe5c44e_flag-Israel.svg"
//                                                                         loading="lazy"
//                                                                         alt=""
//                                                                         class="project__flag w-condition-invisible"
//                                                                     /><img
//                                                                         src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f5c0f20cf420b31974_flag-Morocco.svg"
//                                                                         loading="lazy"
//                                                                         alt=""
//                                                                         class="project__flag w-condition-invisible"
//                                                                     /><img
//                                                                         src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f5d720129808ba77dd_flag-Singapore.svg"
//                                                                         loading="lazy"
//                                                                         alt=""
//                                                                         class="project__flag w-condition-invisible"
//                                                                     /><img
//                                                                         src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f592cb738c6af0302b_flag-Taiwan.svg"
//                                                                         loading="lazy"
//                                                                         alt=""
//                                                                         class="project__flag w-condition-invisible"
//                                                                     /><img
//                                                                         src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f7aa02d59cf699d4a6_flag-Ukraine.svg"
//                                                                         loading="lazy"
//                                                                         alt=""
//                                                                         class="project__flag w-condition-invisible"
//                                                                     /><img
//                                                                         src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f5242c5a0ca8d07969_flag-Austria.svg"
//                                                                         loading="lazy"
//                                                                         alt=""
//                                                                         class="project__flag w-condition-invisible"
//                                                                     /><img
//                                                                         src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f7d720129808ba78ab_flag-Spain.svg"
//                                                                         loading="lazy"
//                                                                         alt=""
//                                                                         class="project__flag w-condition-invisible"
//                                                                     /><img
//                                                                         src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f5e5892608c2ca9cbe_flag-Norway.svg"
//                                                                         loading="lazy"
//                                                                         alt=""
//                                                                         class="project__flag w-condition-invisible"
//                                                                     /><img
//                                                                         src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f54d72d127cd1e97c8_flag-Netherlands.svg"
//                                                                         loading="lazy"
//                                                                         alt=""
//                                                                         class="project__flag w-condition-invisible"
//                                                                     />
//                                                                 </div>
//                                                             </div>
//                                                             <a
//                                                                 data-hover=""
//                                                                 href="project/databest"
//                                                                 class="post-card__title-link w-inline-block"
//                                                             >
//                                                                 <h2 class="post-card__title">
//                                                                     Databest — Business intelligence that leaves
//                                                                     competitors behind
//                                                                 </h2>
//                                                                 <div class="hide">
//                                                                     <div class="post-card__span-icons">
//                                                                         <div
//                                                                             data-post-card-arrow=""
//                                                                             class="post-card__icons"
//                                                                         >
//                                                                             <div
//                                                                                 data-hover-elem=""
//                                                                                 class="button__icon-anim"
//                                                                             >
//                                                                                 <div
//                                                                                     class="post-card__icon opacity-0 w-embed"
//                                                                                 >
//                                                                                     <svg
//                                                                                         aria-hidden="true"
//                                                                                         role="img"
//                                                                                         fill="currentColor"
//                                                                                         xmlns="http://www.w3.org/2000/svg"
//                                                                                         viewBox="0 0 19 19"
//                                                                                         width="100%"
//                                                                                         height="100%"
//                                                                                     >
//                                                                                         <path
//                                                                                             fill-rule="evenodd"
//                                                                                             d="M6.25.879 14.871 9.5l-8.62 8.622L4.128 16l6.5-6.5-6.5-6.5L6.25.88Z"
//                                                                                             clip-rule="evenodd"
//                                                                                         />
//                                                                                     </svg>
//                                                                                 </div>
//                                                                                 <div
//                                                                                     class="post-card__icon is-icon-absolute w-embed"
//                                                                                 >
//                                                                                     <svg
//                                                                                         aria-hidden="true"
//                                                                                         role="img"
//                                                                                         fill="currentColor"
//                                                                                         xmlns="http://www.w3.org/2000/svg"
//                                                                                         viewBox="0 0 19 19"
//                                                                                         width="100%"
//                                                                                         height="100%"
//                                                                                     >
//                                                                                         <path
//                                                                                             fill-rule="evenodd"
//                                                                                             d="M6.25.879 14.871 9.5l-8.62 8.622L4.128 16l6.5-6.5-6.5-6.5L6.25.88Z"
//                                                                                             clip-rule="evenodd"
//                                                                                         />
//                                                                                     </svg>
//                                                                                 </div>
//                                                                             </div>
//                                                                         </div>
//                                                                     </div>
//                                                                 </div>
//                                                             </a>
//                                                         </div>
//                                                     </div>
//                                                     <div
//                                                         role="listitem"
//                                                         class="collection__item is-posts is-2col w-dyn-item"
//                                                     >
//                                                         <div data-hover-parent="" class="post-card">
//                                                             <a
//                                                                 data-hover=""
//                                                                 data-mask="post"
//                                                                 href="project/booster"
//                                                                 class="post-card__img-link w-inline-block"
//                                                             ><img
//                                                                     alt=""
//                                                                     loading="lazy"
//                                                                     data-hover-elem=""
//                                                                     src="https://cdn.prod.website-files.com/63fc977c14aaea404dce4439/660286dcbd2dfb111b482d02_case-preview-booster.webp"
//                                                                     sizes="(max-width: 479px) 91vw, (max-width: 767px) 46vw, (max-width: 991px) 43vw, 29vw"
//                                                                     srcset="
//                               https://cdn.prod.website-files.com/63fc977c14aaea404dce4439/660286dcbd2dfb111b482d02_case-preview-booster-p-500.webp   500w,
//                               https://cdn.prod.website-files.com/63fc977c14aaea404dce4439/660286dcbd2dfb111b482d02_case-preview-booster-p-800.webp   800w,
//                               https://cdn.prod.website-files.com/63fc977c14aaea404dce4439/660286dcbd2dfb111b482d02_case-preview-booster-p-1080.webp 1080w,
//                               https://cdn.prod.website-files.com/63fc977c14aaea404dce4439/660286dcbd2dfb111b482d02_case-preview-booster.webp        1280w
//                             "
//                                                                     class="post-card__img is-full"
//                                                                 /></a>
//                                                             <div class="post-card__param">
//                                                                 <div
//                                                                     fs-cmsnest-collection="industries"
//                                                                     fs-cmsnest-element="nest-target"
//                                                                     class="project__tag"
//                                                                 >
//                                                                     INDUSTRY
//                                                                 </div>
//                                                                 <div
//                                                                     fs-cmsnest-collection="services"
//                                                                     fs-cmsnest-element="nest-target"
//                                                                     class="hide"
//                                                                 >
//                                                                     Development
//                                                                 </div>
//                                                                 <div class="project__flags">
//                                                                     <img
//                                                                         src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f93d2fc2bf12abc331_flag-USA.svg"
//                                                                         loading="lazy"
//                                                                         alt=""
//                                                                         class="project__flag"
//                                                                     /><img
//                                                                         src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f57d6e1f1f7843d783_flag-UK.svg"
//                                                                         loading="lazy"
//                                                                         alt=""
//                                                                         class="project__flag w-condition-invisible"
//                                                                     /><img
//                                                                         src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f58b8a864aefae4cc4_flag-France.svg"
//                                                                         loading="lazy"
//                                                                         alt=""
//                                                                         class="project__flag w-condition-invisible"
//                                                                     /><img
//                                                                         src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f5bba1c0265ae1c9f8_flag-Canada.svg"
//                                                                         loading="lazy"
//                                                                         alt=""
//                                                                         class="project__flag w-condition-invisible"
//                                                                     /><img
//                                                                         src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f5a2bfa47c04db6ea7_flag-Switzerland-1.svg"
//                                                                         loading="lazy"
//                                                                         alt=""
//                                                                         class="project__flag w-condition-invisible"
//                                                                     /><img
//                                                                         src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f57d6e1f1f7843d77f_flag-Switzerland.svg"
//                                                                         loading="lazy"
//                                                                         alt=""
//                                                                         class="project__flag w-condition-invisible"
//                                                                     /><img
//                                                                         src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f5e7f20fc58fe5c44e_flag-Israel.svg"
//                                                                         loading="lazy"
//                                                                         alt=""
//                                                                         class="project__flag w-condition-invisible"
//                                                                     /><img
//                                                                         src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f5c0f20cf420b31974_flag-Morocco.svg"
//                                                                         loading="lazy"
//                                                                         alt=""
//                                                                         class="project__flag w-condition-invisible"
//                                                                     /><img
//                                                                         src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f5d720129808ba77dd_flag-Singapore.svg"
//                                                                         loading="lazy"
//                                                                         alt=""
//                                                                         class="project__flag w-condition-invisible"
//                                                                     /><img
//                                                                         src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f592cb738c6af0302b_flag-Taiwan.svg"
//                                                                         loading="lazy"
//                                                                         alt=""
//                                                                         class="project__flag w-condition-invisible"
//                                                                     /><img
//                                                                         src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f7aa02d59cf699d4a6_flag-Ukraine.svg"
//                                                                         loading="lazy"
//                                                                         alt=""
//                                                                         class="project__flag w-condition-invisible"
//                                                                     /><img
//                                                                         src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f5242c5a0ca8d07969_flag-Austria.svg"
//                                                                         loading="lazy"
//                                                                         alt=""
//                                                                         class="project__flag w-condition-invisible"
//                                                                     /><img
//                                                                         src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f7d720129808ba78ab_flag-Spain.svg"
//                                                                         loading="lazy"
//                                                                         alt=""
//                                                                         class="project__flag w-condition-invisible"
//                                                                     /><img
//                                                                         src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f5e5892608c2ca9cbe_flag-Norway.svg"
//                                                                         loading="lazy"
//                                                                         alt=""
//                                                                         class="project__flag w-condition-invisible"
//                                                                     /><img
//                                                                         src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6683b8f54d72d127cd1e97c8_flag-Netherlands.svg"
//                                                                         loading="lazy"
//                                                                         alt=""
//                                                                         class="project__flag w-condition-invisible"
//                                                                     />
//                                                                 </div>
//                                                             </div>
//                                                             <a
//                                                                 data-hover=""
//                                                                 href="project/booster"
//                                                                 class="post-card__title-link w-inline-block"
//                                                             >
//                                                                 <h2 class="post-card__title">
//                                                                     Booster — A modern platform for all your
//                                                                     business-boosting needs
//                                                                 </h2>
//                                                                 <div class="hide">
//                                                                     <div class="post-card__span-icons">
//                                                                         <div
//                                                                             data-post-card-arrow=""
//                                                                             class="post-card__icons"
//                                                                         >
//                                                                             <div
//                                                                                 data-hover-elem=""
//                                                                                 class="button__icon-anim"
//                                                                             >
//                                                                                 <div
//                                                                                     class="post-card__icon opacity-0 w-embed"
//                                                                                 >
//                                                                                     <svg
//                                                                                         aria-hidden="true"
//                                                                                         role="img"
//                                                                                         fill="currentColor"
//                                                                                         xmlns="http://www.w3.org/2000/svg"
//                                                                                         viewBox="0 0 19 19"
//                                                                                         width="100%"
//                                                                                         height="100%"
//                                                                                     >
//                                                                                         <path
//                                                                                             fill-rule="evenodd"
//                                                                                             d="M6.25.879 14.871 9.5l-8.62 8.622L4.128 16l6.5-6.5-6.5-6.5L6.25.88Z"
//                                                                                             clip-rule="evenodd"
//                                                                                         />
//                                                                                     </svg>
//                                                                                 </div>
//                                                                                 <div
//                                                                                     class="post-card__icon is-icon-absolute w-embed"
//                                                                                 >
//                                                                                     <svg
//                                                                                         aria-hidden="true"
//                                                                                         role="img"
//                                                                                         fill="currentColor"
//                                                                                         xmlns="http://www.w3.org/2000/svg"
//                                                                                         viewBox="0 0 19 19"
//                                                                                         width="100%"
//                                                                                         height="100%"
//                                                                                     >
//                                                                                         <path
//                                                                                             fill-rule="evenodd"
//                                                                                             d="M6.25.879 14.871 9.5l-8.62 8.622L4.128 16l6.5-6.5-6.5-6.5L6.25.88Z"
//                                                                                             clip-rule="evenodd"
//                                                                                         />
//                                                                                     </svg>
//                                                                                 </div>
//                                                                             </div>
//                                                                         </div>
//                                                                     </div>
//                                                                 </div>
//                                                             </a>
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                                 <div
//                                                     role="navigation"
//                                                     aria-label="List"
//                                                     class="w-pagination-wrapper posts-pagination"
//                                                 >
//                                                     <a
//                                                         href="projects?be99beb4_page=3"
//                                                         aria-label="Previous Page"
//                                                         class="w-pagination-previous posts-pagination__btn is-previews"
//                                                     >
//                                                         <div class="button__icon-anim">
//                                                             <div class="icon-regular w-embed">
//                                                                 <svg
//                                                                     aria-hidden="true"
//                                                                     role="img"
//                                                                     fill="currentColor"
//                                                                     xmlns="http://www.w3.org/2000/svg"
//                                                                     viewBox="0 0 24 24"
//                                                                     width="100%"
//                                                                     height="100%"
//                                                                 >
//                                                                     <path
//                                                                         d="M9.293 5.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L14.586 12 9.293 6.707a1 1 0 0 1 0-1.414Z"
//                                                                     />
//                                                                 </svg>
//                                                             </div>
//                                                             <div class="icon-regular is-absolute w-embed">
//                                                                 <svg
//                                                                     aria-hidden="true"
//                                                                     role="img"
//                                                                     fill="currentColor"
//                                                                     xmlns="http://www.w3.org/2000/svg"
//                                                                     viewBox="0 0 24 24"
//                                                                     width="100%"
//                                                                     height="100%"
//                                                                 >
//                                                                     <path
//                                                                         d="M9.293 5.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L14.586 12 9.293 6.707a1 1 0 0 1 0-1.414Z"
//                                                                     />
//                                                                 </svg>
//                                                             </div>
//                                                         </div>
//                                                         <div class="button__bg bg-color-white"></div>
//                                                     </a>
//                                                     <div data-page-current="" class="posts-pagination__pages">
//                                                         <a
//                                                             href="projects?be99beb4_page=4#"
//                                                             fs-cmsload-element="page-button"
//                                                             class="posts-pagination__btn is-page"
//                                                         >1</a
//                                                         ><a
//                                                             href="projects?be99beb4_page=4#"
//                                                             fs-cmsload-element="page-dots"
//                                                             class="posts-pagination__btn is-dots"
//                                                         >...</a
//                                                         >
//                                                     </div>
//                                                     <a
//                                                         href="projects?be99beb4_page=5"
//                                                         aria-label="Next Page"
//                                                         class="w-pagination-next posts-pagination__btn"
//                                                     >
//                                                         <div class="button__icon-anim">
//                                                             <div class="icon-regular w-embed">
//                                                                 <svg
//                                                                     aria-hidden="true"
//                                                                     role="img"
//                                                                     fill="currentColor"
//                                                                     xmlns="http://www.w3.org/2000/svg"
//                                                                     viewBox="0 0 24 24"
//                                                                     width="100%"
//                                                                     height="100%"
//                                                                 >
//                                                                     <path
//                                                                         d="M9.293 5.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L14.586 12 9.293 6.707a1 1 0 0 1 0-1.414Z"
//                                                                     />
//                                                                 </svg>
//                                                             </div>
//                                                             <div class="icon-regular is-absolute w-embed">
//                                                                 <svg
//                                                                     aria-hidden="true"
//                                                                     role="img"
//                                                                     fill="currentColor"
//                                                                     xmlns="http://www.w3.org/2000/svg"
//                                                                     viewBox="0 0 24 24"
//                                                                     width="100%"
//                                                                     height="100%"
//                                                                 >
//                                                                     <path
//                                                                         d="M9.293 5.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L14.586 12 9.293 6.707a1 1 0 0 1 0-1.414Z"
//                                                                     />
//                                                                 </svg>
//                                                             </div>
//                                                         </div>
//                                                         <div class="button__bg bg-color-white"></div>
//                                                     </a>
//                                                     <link rel="prerender" href="projects?be99beb4_page=5" />
//                                                 </div>
//                                             </div>
//                                             <div class="hide">
//                                                 <div class="collection is-nest w-dyn-list">
//                                                     <div
//                                                         fs-cmsnest-collection="industries"
//                                                         fs-cmsnest-element="nest-source"
//                                                         role="list"
//                                                         class="collection__list is-nest w-dyn-items"
//                                                     >
//                                                         <div
//                                                             data-slug-industry="transportation-logistics"
//                                                             role="listitem"
//                                                             class="collection__item is-nest w-dyn-item"
//                                                         >
//                                                             <div
//                                                                 fs-cmsfilter-field="industries"
//                                                                 class="project__tag"
//                                                             >
//                                                                 Transportation &amp; Logistics
//                                                             </div>
//                                                             <a
//                                                                 href="project-industry/transportation-logistics"
//                                                                 class="hide w-inline-block"
//                                                             ></a>
//                                                         </div>
//                                                         <div
//                                                             data-slug-industry="esports"
//                                                             role="listitem"
//                                                             class="collection__item is-nest w-dyn-item"
//                                                         >
//                                                             <div
//                                                                 fs-cmsfilter-field="industries"
//                                                                 class="project__tag"
//                                                             >
//                                                                 Esports
//                                                             </div>
//                                                             <a
//                                                                 href="project-industry/esports"
//                                                                 class="hide w-inline-block"
//                                                             ></a>
//                                                         </div>
//                                                         <div
//                                                             data-slug-industry="fintech"
//                                                             role="listitem"
//                                                             class="collection__item is-nest w-dyn-item"
//                                                         >
//                                                             <div
//                                                                 fs-cmsfilter-field="industries"
//                                                                 class="project__tag"
//                                                             >
//                                                                 Fintech
//                                                             </div>
//                                                             <a
//                                                                 href="project-industry/fintech"
//                                                                 class="hide w-inline-block"
//                                                             ></a>
//                                                         </div>
//                                                         <div
//                                                             data-slug-industry="ai-ml"
//                                                             role="listitem"
//                                                             class="collection__item is-nest w-dyn-item"
//                                                         >
//                                                             <div
//                                                                 fs-cmsfilter-field="industries"
//                                                                 class="project__tag"
//                                                             >
//                                                                 AI &amp; ML
//                                                             </div>
//                                                             <a
//                                                                 href="project-industry/ai-ml"
//                                                                 class="hide w-inline-block"
//                                                             ></a>
//                                                         </div>
//                                                         <div
//                                                             data-slug-industry="manufacturing"
//                                                             role="listitem"
//                                                             class="collection__item is-nest w-dyn-item"
//                                                         >
//                                                             <div
//                                                                 fs-cmsfilter-field="industries"
//                                                                 class="project__tag"
//                                                             >
//                                                                 Manufacturing
//                                                             </div>
//                                                             <a
//                                                                 href="project-industry/manufacturing"
//                                                                 class="hide w-inline-block"
//                                                             ></a>
//                                                         </div>
//                                                         <div
//                                                             data-slug-industry="non-profit"
//                                                             role="listitem"
//                                                             class="collection__item is-nest w-dyn-item"
//                                                         >
//                                                             <div
//                                                                 fs-cmsfilter-field="industries"
//                                                                 class="project__tag"
//                                                             >
//                                                                 Non-profit
//                                                             </div>
//                                                             <a
//                                                                 href="project-industry/non-profit"
//                                                                 class="hide w-inline-block"
//                                                             ></a>
//                                                         </div>
//                                                         <div
//                                                             data-slug-industry="healthcare"
//                                                             role="listitem"
//                                                             class="collection__item is-nest w-dyn-item"
//                                                         >
//                                                             <div
//                                                                 fs-cmsfilter-field="industries"
//                                                                 class="project__tag"
//                                                             >
//                                                                 Healthcare
//                                                             </div>
//                                                             <a
//                                                                 href="project-industry/healthcare"
//                                                                 class="hide w-inline-block"
//                                                             ></a>
//                                                         </div>
//                                                         <div
//                                                             data-slug-industry="finance"
//                                                             role="listitem"
//                                                             class="collection__item is-nest w-dyn-item"
//                                                         >
//                                                             <div
//                                                                 fs-cmsfilter-field="industries"
//                                                                 class="project__tag"
//                                                             >
//                                                                 Finance
//                                                             </div>
//                                                             <a
//                                                                 href="project-industry/finance"
//                                                                 class="hide w-inline-block"
//                                                             ></a>
//                                                         </div>
//                                                         <div
//                                                             data-slug-industry="beauty"
//                                                             role="listitem"
//                                                             class="collection__item is-nest w-dyn-item"
//                                                         >
//                                                             <div
//                                                                 fs-cmsfilter-field="industries"
//                                                                 class="project__tag"
//                                                             >
//                                                                 Beauty
//                                                             </div>
//                                                             <a
//                                                                 href="project-industry/beauty"
//                                                                 class="hide w-inline-block"
//                                                             ></a>
//                                                         </div>
//                                                         <div
//                                                             data-slug-industry="b2b"
//                                                             role="listitem"
//                                                             class="collection__item is-nest w-dyn-item"
//                                                         >
//                                                             <div
//                                                                 fs-cmsfilter-field="industries"
//                                                                 class="project__tag"
//                                                             >
//                                                                 B2B
//                                                             </div>
//                                                             <a
//                                                                 href="project-industry/b2b"
//                                                                 class="hide w-inline-block"
//                                                             ></a>
//                                                         </div>
//                                                         <div
//                                                             data-slug-industry="saas"
//                                                             role="listitem"
//                                                             class="collection__item is-nest w-dyn-item"
//                                                         >
//                                                             <div
//                                                                 fs-cmsfilter-field="industries"
//                                                                 class="project__tag"
//                                                             >
//                                                                 SaaS
//                                                             </div>
//                                                             <a
//                                                                 href="project-industry/saas"
//                                                                 class="hide w-inline-block"
//                                                             ></a>
//                                                         </div>
//                                                         <div
//                                                             data-slug-industry="consumer-products-services"
//                                                             role="listitem"
//                                                             class="collection__item is-nest w-dyn-item"
//                                                         >
//                                                             <div
//                                                                 fs-cmsfilter-field="industries"
//                                                                 class="project__tag"
//                                                             >
//                                                                 Consumer products &amp; services
//                                                             </div>
//                                                             <a
//                                                                 href="project-industry/consumer-products-services"
//                                                                 class="hide w-inline-block"
//                                                             ></a>
//                                                         </div>
//                                                         <div
//                                                             data-slug-industry="business-services"
//                                                             role="listitem"
//                                                             class="collection__item is-nest w-dyn-item"
//                                                         >
//                                                             <div
//                                                                 fs-cmsfilter-field="industries"
//                                                                 class="project__tag"
//                                                             >
//                                                                 Business services
//                                                             </div>
//                                                             <a
//                                                                 href="project-industry/business-services"
//                                                                 class="hide w-inline-block"
//                                                             ></a>
//                                                         </div>
//                                                         <div
//                                                             data-slug-industry="education"
//                                                             role="listitem"
//                                                             class="collection__item is-nest w-dyn-item"
//                                                         >
//                                                             <div
//                                                                 fs-cmsfilter-field="industries"
//                                                                 class="project__tag"
//                                                             >
//                                                                 Education
//                                                             </div>
//                                                             <a
//                                                                 href="project-industry/education"
//                                                                 class="hide w-inline-block"
//                                                             ></a>
//                                                         </div>
//                                                         <div
//                                                             data-slug-industry="real-estate"
//                                                             role="listitem"
//                                                             class="collection__item is-nest w-dyn-item"
//                                                         >
//                                                             <div
//                                                                 fs-cmsfilter-field="industries"
//                                                                 class="project__tag"
//                                                             >
//                                                                 Real estate
//                                                             </div>
//                                                             <a
//                                                                 href="project-industry/real-estate"
//                                                                 class="hide w-inline-block"
//                                                             ></a>
//                                                         </div>
//                                                         <div
//                                                             data-slug-industry="e-commerce"
//                                                             role="listitem"
//                                                             class="collection__item is-nest w-dyn-item"
//                                                         >
//                                                             <div
//                                                                 fs-cmsfilter-field="industries"
//                                                                 class="project__tag"
//                                                             >
//                                                                 E-commerce
//                                                             </div>
//                                                             <a
//                                                                 href="project-industry/e-commerce"
//                                                                 class="hide w-inline-block"
//                                                             ></a>
//                                                         </div>
//                                                         <div
//                                                             data-slug-industry="media"
//                                                             role="listitem"
//                                                             class="collection__item is-nest w-dyn-item"
//                                                         >
//                                                             <div
//                                                                 fs-cmsfilter-field="industries"
//                                                                 class="project__tag"
//                                                             >
//                                                                 Media
//                                                             </div>
//                                                             <a
//                                                                 href="project-industry/media"
//                                                                 class="hide w-inline-block"
//                                                             ></a>
//                                                         </div>
//                                                         <div
//                                                             data-slug-industry="advertising-marketing"
//                                                             role="listitem"
//                                                             class="collection__item is-nest w-dyn-item"
//                                                         >
//                                                             <div
//                                                                 fs-cmsfilter-field="industries"
//                                                                 class="project__tag"
//                                                             >
//                                                                 Advertising &amp; marketing
//                                                             </div>
//                                                             <a
//                                                                 href="project-industry/advertising-marketing"
//                                                                 class="hide w-inline-block"
//                                                             ></a>
//                                                         </div>
//                                                         <div
//                                                             data-slug-industry="arts-entertainment-music"
//                                                             role="listitem"
//                                                             class="collection__item is-nest w-dyn-item"
//                                                         >
//                                                             <div
//                                                                 fs-cmsfilter-field="industries"
//                                                                 class="project__tag"
//                                                             >
//                                                                 Arts, entertainment &amp; music
//                                                             </div>
//                                                             <a
//                                                                 href="project-industry/arts-entertainment-music"
//                                                                 class="hide w-inline-block"
//                                                             ></a>
//                                                         </div>
//                                                         <div
//                                                             data-slug-industry="information-technology"
//                                                             role="listitem"
//                                                             class="collection__item is-nest w-dyn-item"
//                                                         >
//                                                             <div
//                                                                 fs-cmsfilter-field="industries"
//                                                                 class="project__tag"
//                                                             >
//                                                                 Information technology
//                                                             </div>
//                                                             <a
//                                                                 href="project-industry/information-technology"
//                                                                 class="hide w-inline-block"
//                                                             ></a>
//                                                         </div>
//                                                         <div
//                                                             data-slug-industry="other-industries"
//                                                             role="listitem"
//                                                             class="collection__item is-nest w-dyn-item"
//                                                         >
//                                                             <div
//                                                                 fs-cmsfilter-field="industries"
//                                                                 class="project__tag w-condition-invisible"
//                                                             >
//                                                                 Other industries
//                                                             </div>
//                                                             <a
//                                                                 href="project-industry/other-industries"
//                                                                 class="hide w-inline-block"
//                                                             ></a>
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                                 <div class="collection is-nest hide w-dyn-list">
//                                                     <div
//                                                         fs-cmsnest-collection="services"
//                                                         fs-cmsnest-element="nest-source"
//                                                         role="list"
//                                                         class="collection__list is-nest w-dyn-items"
//                                                     >
//                                                         <div
//                                                             role="listitem"
//                                                             class="collection__item is-nest w-dyn-item"
//                                                         >
//                                                             <div fs-cmsfilter-field="services">Web development</div>
//                                                             <a
//                                                                 href="project-service/web-development"
//                                                                 class="hide w-inline-block"
//                                                             ></a>
//                                                         </div>
//                                                         <div
//                                                             role="listitem"
//                                                             class="collection__item is-nest w-dyn-item"
//                                                         >
//                                                             <div fs-cmsfilter-field="services">
//                                                                 Webflow development
//                                                             </div>
//                                                             <a
//                                                                 href="project-service/webflow"
//                                                                 class="hide w-inline-block"
//                                                             ></a>
//                                                         </div>
//                                                         <div
//                                                             role="listitem"
//                                                             class="collection__item is-nest w-dyn-item"
//                                                         >
//                                                             <div fs-cmsfilter-field="services">
//                                                                 Product development
//                                                             </div>
//                                                             <a
//                                                                 href="project-service/product-development"
//                                                                 class="hide w-inline-block"
//                                                             ></a>
//                                                         </div>
//                                                         <div
//                                                             role="listitem"
//                                                             class="collection__item is-nest w-dyn-item"
//                                                         >
//                                                             <div fs-cmsfilter-field="services">Branding</div>
//                                                             <a
//                                                                 href="project-service/branding"
//                                                                 class="hide w-inline-block"
//                                                             ></a>
//                                                         </div>
//                                                         <div
//                                                             role="listitem"
//                                                             class="collection__item is-nest w-dyn-item"
//                                                         >
//                                                             <div fs-cmsfilter-field="services">Web design</div>
//                                                             <a
//                                                                 href="project-service/web-design"
//                                                                 class="hide w-inline-block"
//                                                             ></a>
//                                                         </div>
//                                                         <div
//                                                             role="listitem"
//                                                             class="collection__item is-nest w-dyn-item"
//                                                         >
//                                                             <div fs-cmsfilter-field="services">UX/UI design</div>
//                                                             <a
//                                                                 href="project-service/ux-ui-design"
//                                                                 class="hide w-inline-block"
//                                                             ></a>
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                             <div fs-cmsfilter-element="empty">
//                                                 <div class="projects-empty__content">
//                                                     <div class="projects-empty__text">
//                                                         Sorry, we don’t have results yet. We are working hard on
//                                                         new cases. Try selecting other filters for now.
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <section class="section">
//                                 <div class="container">
//                                     <div class="card__container">
//                                         <div class="columns mod--card-head">
//                                             <div class="columns__col is-1-old mod--heading-works">
//                                                 <h2 class="heading-1">#1 on <br />Dribbble</h2>
//                                             </div>
//                                             <div class="columns__col is-2-old mod--works-heading">
//                                                 <p class="works__subheading hide-tablet">
//                                                     Our company offers personalized design and development
//                                                     solutions that prioritize user experience.
//                                                 </p>
//                                                 <a
//                                                     data-hover=""
//                                                     data-w-id="3bd7e329-20e9-4fe8-4255-b02cd809465c"
//                                                     href="https://dribbble.com/halolab"
//                                                     target="_blank"
//                                                     class="works__more mod--ondribble w-inline-block"
//                                                 >
//                                                     <div class="works__more-texts mod--dribble">
//                                                         <div class="overflow-hidden">
//                                                             <div data-hover-elem="" class="button__texts active">
//                                                                 <div class="button__text">GET</div>
//                                                                 <div class="button__text is-absolute">GET</div>
//                                                             </div>
//                                                         </div>
//                                                         <div class="overflow-hidden">
//                                                             <div data-hover-elem="" class="button__texts active">
//                                                                 <div class="button__text">inspired</div>
//                                                                 <div class="button__text is-absolute">inspired</div>
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                     <div class="works__more-icon">
//                                                         <div
//                                                             data-hover-elem=""
//                                                             class="button__icons mod--projects-dribble active"
//                                                         >
//                                                             <div data-hover-elem="" class="button__icon-anim">
//                                                                 <div class="icon-regular is-size-16-mobile w-embed">
//                                                                     <svg
//                                                                         aria-hidden="true"
//                                                                         role="img"
//                                                                         fill="currentColor"
//                                                                         xmlns="http://www.w3.org/2000/svg"
//                                                                         viewBox="0 0 24 24"
//                                                                         width="100%"
//                                                                         height="100%"
//                                                                     >
//                                                                         <path
//                                                                             fill-rule="evenodd"
//                                                                             d="M2.398 12.01c0-5.295 4.308-9.6 9.6-9.6 5.293 0 9.6 4.305 9.6 9.6 0 5.292-4.307 9.597-9.6 9.597-5.292 0-9.6-4.305-9.6-9.598Zm7.679-7.96c.224.304 1.715 2.33 3.058 4.802 2.917-1.094 4.151-2.753 4.298-2.964a8.168 8.168 0 0 0-5.435-2.066c-.662 0-1.305.081-1.921.228Zm-1.564.553a8.222 8.222 0 0 0-4.54 5.74h.121c.721 0 3.892-.051 7.46-1a52.062 52.062 0 0 0-3.04-4.74Zm5.8 6.656c.061.14.12.28.178.421 2.73-.343 5.44.207 5.71.266a8.156 8.156 0 0 0-1.852-5.107c-.173.234-1.545 1.994-4.579 3.232.191.39.374.786.544 1.188Zm-2.084-.656C8.6 11.688 5.067 11.77 4.06 11.77c-.13 0-.217-.002-.258-.002-.002.085-.002.167-.002.25 0 2.108.797 4.031 2.107 5.482.185-.316 2.437-4.042 6.665-5.407.106-.037.215-.07.321-.099a25.159 25.159 0 0 0-.664-1.391Zm2.755 2.368c1.074 2.948 1.51 5.346 1.595 5.845a8.22 8.22 0 0 0 3.514-5.494c-.283-.09-2.54-.762-5.109-.351Zm-8.02 5.518a8.175 8.175 0 0 0 5.034 1.731 8.188 8.188 0 0 0 3.205-.65c-.123-.72-.6-3.227-1.751-6.218l-.054.018c-4.626 1.612-6.286 4.818-6.434 5.12Z"
//                                                                             clip-rule="evenodd"
//                                                                         />
//                                                                     </svg>
//                                                                 </div>
//                                                                 <div
//                                                                     class="icon-regular is-absolute is-size-16-mobile w-embed"
//                                                                 >
//                                                                     <svg
//                                                                         aria-hidden="true"
//                                                                         role="img"
//                                                                         fill="currentColor"
//                                                                         xmlns="http://www.w3.org/2000/svg"
//                                                                         viewBox="0 0 24 24"
//                                                                         width="100%"
//                                                                         height="100%"
//                                                                     >
//                                                                         <path
//                                                                             fill-rule="evenodd"
//                                                                             d="M2.398 12.01c0-5.295 4.308-9.6 9.6-9.6 5.293 0 9.6 4.305 9.6 9.6 0 5.292-4.307 9.597-9.6 9.597-5.292 0-9.6-4.305-9.6-9.598Zm7.679-7.96c.224.304 1.715 2.33 3.058 4.802 2.917-1.094 4.151-2.753 4.298-2.964a8.168 8.168 0 0 0-5.435-2.066c-.662 0-1.305.081-1.921.228Zm-1.564.553a8.222 8.222 0 0 0-4.54 5.74h.121c.721 0 3.892-.051 7.46-1a52.062 52.062 0 0 0-3.04-4.74Zm5.8 6.656c.061.14.12.28.178.421 2.73-.343 5.44.207 5.71.266a8.156 8.156 0 0 0-1.852-5.107c-.173.234-1.545 1.994-4.579 3.232.191.39.374.786.544 1.188Zm-2.084-.656C8.6 11.688 5.067 11.77 4.06 11.77c-.13 0-.217-.002-.258-.002-.002.085-.002.167-.002.25 0 2.108.797 4.031 2.107 5.482.185-.316 2.437-4.042 6.665-5.407.106-.037.215-.07.321-.099a25.159 25.159 0 0 0-.664-1.391Zm2.755 2.368c1.074 2.948 1.51 5.346 1.595 5.845a8.22 8.22 0 0 0 3.514-5.494c-.283-.09-2.54-.762-5.109-.351Zm-8.02 5.518a8.175 8.175 0 0 0 5.034 1.731 8.188 8.188 0 0 0 3.205-.65c-.123-.72-.6-3.227-1.751-6.218l-.054.018c-4.626 1.612-6.286 4.818-6.434 5.12Z"
//                                                                             clip-rule="evenodd"
//                                                                         />
//                                                                     </svg>
//                                                                 </div>
//                                                             </div>
//                                                             <div
//                                                                 data-hover-elem=""
//                                                                 class="button__bg bg-color-pink active"
//                                                             ></div>
//                                                         </div>
//                                                     </div>
//                                                 </a>
//                                             </div>
//                                         </div>
//                                         <div class="columns mod--projects-dribble">
//                                             <div class="columns__col is-1-old mod--projects-dribble">
//                                                 <div class="dribble-card__border">
//                                                     <img
//                                                         src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/64d25fb852d34e3c9b08f5ca_label-dribble.svg"
//                                                         loading="lazy"
//                                                         alt=""
//                                                         class="dribble-card__label-dribble is-1"
//                                                     /><img
//                                                         src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/64d2604252d49180b380b54e_label-dribble_tablet.svg"
//                                                         loading="lazy"
//                                                         alt=""
//                                                         class="dribble-card__label-dribble is-2"
//                                                     />
//                                                     <div class="dribble-card__advant">
//                                                         <div class="text-size-80 text-weight-medium">1,000+</div>
//                                                         <div class="heading-6 text-size-tablet-16">
//                                                             Impressive Dribbble shots, showcasing our design
//                                                             expertise and prowess
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                             <div
//                                                 data-mask="on-dribble"
//                                                 class="columns__col is-2-old mod--projects-dribble"
//                                             >
//                                                 <div class="dribble-card__video w-embed">
//                                                     <video
//                                                         class="dribble-card__video"
//                                                         loading="lazy"
//                                                         autoplay
//                                                         loop
//                                                         muted
//                                                         playsinline
//                                                     >
//                                                         <source
//                                                             src="https://d3vlq52qrgdnc2.cloudfront.net/Design-Carusel.mp4"
//                                                             type="video/mp4"
//                                                         />
//                                                     </video>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div class="dribble__bg-wrap">
//                                     <img
//                                         src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/649d29798fa7ad5b02f10629_bg-onDribble_laptop.webp"
//                                         loading="eager"
//                                         sizes="100vw"
//                                         srcset="
//                 https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/649d29798fa7ad5b02f10629_bg-onDribble_laptop-p-500.webp   500w,
//                 https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/649d29798fa7ad5b02f10629_bg-onDribble_laptop-p-800.webp   800w,
//                 https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/649d29798fa7ad5b02f10629_bg-onDribble_laptop-p-1080.webp 1080w,
//                 https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/649d29798fa7ad5b02f10629_bg-onDribble_laptop-p-1600.webp 1600w,
//                 https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/649d29798fa7ad5b02f10629_bg-onDribble_laptop-p-2000.webp 2000w,
//                 https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/649d29798fa7ad5b02f10629_bg-onDribble_laptop-p-2600.webp 2600w,
//                 https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/649d29798fa7ad5b02f10629_bg-onDribble_laptop.webp        2880w
//               "
//                                         alt=""
//                                         class="dribble__bg hide-mobile-portrait"
//                                     /><img
//                                         src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/649d2be2fa9613aa9585ccaf_bg-onDribble_mobile.webp"
//                                         loading="eager"
//                                         alt=""
//                                         class="dribble__bg is-mobile"
//                                     />
//                                     <div class="bg-blur"></div>
//                                 </div>
//                             </section>
//                             <section id="awards" class="section">
//                                 <div class="container">
//                                     <div data-anim-trigger="load" class="columns mod--heading">
//                                         <div
//                                             data-award-heading-col=""
//                                             data-anim-delay=""
//                                             class="columns__col mod--heading is-1 hide-mobile-landscape anim"
//                                         >
//                                             <div class="button-label">our awards</div>
//                                         </div>
//                                         <div
//                                             data-anim-delay=""
//                                             class="columns__col mod--heading anim w-clearfix"
//                                         >
//                                             <div class="space-heading-4"></div>
//                                             <p data-anim-split="" class="heading-4">
//                                                 Our award-winning company creates exceptional, user-centric
//                                                 products that captivate audiences and drive results.
//                                             </p>
//                                         </div>
//                                     </div>
//                                     <div class="awards-container">
//                                         <div
//                                             data-glow-container=""
//                                             data-swiper="awards-runline"
//                                             class="swiper mod--awards"
//                                         >
//                                             <div class="swiper-wrapper mod--awards">
//                                                 <div class="swiper-slide mod--awards">
//                                                     <div data-hover="" class="circles__block-wrap">
//                                                         <div class="circles__block">
//                                                             <img
//                                                                 src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/65df2245169d0dbda30cc38c_award-clutch.svg"
//                                                                 loading="lazy"
//                                                                 height=""
//                                                                 alt=""
//                                                                 data-hover-elem=""
//                                                                 class="circles__logo"
//                                                             />
//                                                             <div data-hover-elem="" class="circles__border">
//                                                                 <div
//                                                                     data-glow=""
//                                                                     data-mask="awards"
//                                                                     class="circles__border-anim"
//                                                                 ></div>
//                                                             </div>
//                                                             <div class="circles__text">
//                                                                 Top 100 companies worldwide by Clutch
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                                 <div class="swiper-slide mod--awards">
//                                                     <div data-hover="" class="circles__block-wrap">
//                                                         <div class="circles__block">
//                                                             <img
//                                                                 src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/65df2245fbe6c26a04e38642_award-awwwards.svg"
//                                                                 loading="lazy"
//                                                                 height=""
//                                                                 alt=""
//                                                                 data-hover-elem=""
//                                                                 class="circles__logo"
//                                                             />
//                                                             <div data-hover-elem="" class="circles__border">
//                                                                 <div
//                                                                     data-glow=""
//                                                                     data-mask="awards"
//                                                                     class="circles__border-anim"
//                                                                 ></div>
//                                                             </div>
//                                                             <div class="circles__text">
//                                                                 17 Honorable Mentions<br />by Awwwards
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                                 <div class="swiper-slide mod--awards">
//                                                     <div data-hover="" class="circles__block-wrap">
//                                                         <div class="circles__block">
//                                                             <img
//                                                                 src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/65df2248b0570f11feddea87_award-upwork.svg"
//                                                                 loading="lazy"
//                                                                 height=""
//                                                                 alt=""
//                                                                 data-hover-elem=""
//                                                                 class="circles__logo"
//                                                             />
//                                                             <div data-hover-elem="" class="circles__border">
//                                                                 <div
//                                                                     data-glow=""
//                                                                     data-mask="awards"
//                                                                     class="circles__border-anim"
//                                                                 ></div>
//                                                             </div>
//                                                             <div class="circles__text">
//                                                                 100% Job Success on Upwork
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                                 <div class="swiper-slide mod--awards">
//                                                     <div data-hover="" class="circles__block-wrap">
//                                                         <div class="circles__block">
//                                                             <img
//                                                                 src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/65df2245169d0dbda30cc38c_award-clutch.svg"
//                                                                 loading="lazy"
//                                                                 height=""
//                                                                 alt=""
//                                                                 data-hover-elem=""
//                                                                 class="circles__logo"
//                                                             />
//                                                             <div data-hover-elem="" class="circles__border">
//                                                                 <div
//                                                                     data-glow=""
//                                                                     data-mask="awards"
//                                                                     class="circles__border-anim"
//                                                                 ></div>
//                                                             </div>
//                                                             <div class="circles__text">
//                                                                 Top 20 Digital Design Company by Clutch
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                                 <div class="swiper-slide mod--awards">
//                                                     <div data-hover="" class="circles__block-wrap">
//                                                         <div class="circles__block">
//                                                             <img
//                                                                 src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/65df224561b22f2fb2303d11_award-behance.svg"
//                                                                 loading="lazy"
//                                                                 height=""
//                                                                 alt=""
//                                                                 data-hover-elem=""
//                                                                 class="circles__logo"
//                                                             />
//                                                             <div data-hover-elem="" class="circles__border">
//                                                                 <div
//                                                                     data-glow=""
//                                                                     data-mask="awards"
//                                                                     class="circles__border-anim"
//                                                                 ></div>
//                                                             </div>
//                                                             <div class="circles__text">
//                                                                 17 features on the Behance platform
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                                 <div class="swiper-slide mod--awards">
//                                                     <div data-hover="" class="circles__block-wrap">
//                                                         <div class="circles__block">
//                                                             <img
//                                                                 src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/65df2245b492a6ee900345c1_award-64.svg"
//                                                                 loading="lazy"
//                                                                 height=""
//                                                                 alt=""
//                                                                 data-hover-elem=""
//                                                                 class="circles__logo"
//                                                             />
//                                                             <div data-hover-elem="" class="circles__border">
//                                                                 <div
//                                                                     data-glow=""
//                                                                     data-mask="awards"
//                                                                     class="circles__border-anim"
//                                                                 ></div>
//                                                             </div>
//                                                             <div class="circles__text">
//                                                                 #1 Team on Dribbble platform
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                                 <div class="swiper-slide mod--awards">
//                                                     <div data-hover="" class="circles__block-wrap">
//                                                         <div class="circles__block">
//                                                             <img
//                                                                 src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/65df2245947339c4d4a52e5d_award-css.svg"
//                                                                 loading="lazy"
//                                                                 height=""
//                                                                 alt=""
//                                                                 data-hover-elem=""
//                                                                 class="circles__logo"
//                                                             />
//                                                             <div data-hover-elem="" class="circles__border">
//                                                                 <div
//                                                                     data-glow=""
//                                                                     data-mask="awards"
//                                                                     class="circles__border-anim"
//                                                                 ></div>
//                                                             </div>
//                                                             <div class="circles__text">
//                                                                 14 Special Kudos CSS Design Award
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                                 <div class="swiper-slide mod--awards">
//                                                     <div data-hover="" class="circles__block-wrap">
//                                                         <div class="circles__block">
//                                                             <img
//                                                                 src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/65df2245b492a6ee900345c1_award-64.svg"
//                                                                 loading="lazy"
//                                                                 height=""
//                                                                 alt=""
//                                                                 data-hover-elem=""
//                                                                 class="circles__logo"
//                                                             />
//                                                             <div data-hover-elem="" class="circles__border active">
//                                                                 <div
//                                                                     data-glow=""
//                                                                     data-mask="awards"
//                                                                     class="circles__border-anim"
//                                                                 ></div>
//                                                             </div>
//                                                             <div class="circles__text">
//                                                                 Other awards and recognitions
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </section>
//                             <section id="discuss" class="section mod--discuss">
//                                 <div
//                                     data-w-id="7092799e-d269-0bf1-02e2-a8316ce8ccd0"
//                                     class="container"
//                                 >
//                                     <div class="columns mod--discuss">
//                                         <div class="columns__col mod--discuss is-1">
//                                             <div class="form-wrapper mod--discuss w-form">
//                                                 <form
//                                                     id="wf-form-Discuss"
//                                                     name="wf-form-Discuss"
//                                                     data-name="Discuss"
//                                                     method="get"
//                                                     target="form-order"
//                                                     class="form"
//                                                     data-wf-page-id="65e02e1378aeac8c4c4d9bfe"
//                                                     data-wf-element-id="7092799e-d269-0bf1-02e2-a8316ce8ccd2"
//                                                 >
//                                                     <div class="form__content">
//                                                         <h2 class="heading-4">
//                                                             Ready to discuss <br />your project with us?
//                                                         </h2>
//                                                         <div class="form__fields">
//                                                             <div class="form__field is-half">
//                                                                 <div class="input-wrap is-half">
//                                                                     <label for="Discuss-Name" class="form__label active"
//                                                                     >Full Name</label
//                                                                     ><input
//                                                                         class="input w-input"
//                                                                         maxlength="256"
//                                                                         name="Full-Name"
//                                                                         data-name="Full Name"
//                                                                         placeholder="Full Name"
//                                                                         data-input-anim=""
//                                                                         type="text"
//                                                                         id="Discuss-Name"
//                                                                     />
//                                                                 </div>
//                                                                 <div class="input-wrap is-half">
//                                                                     <label for="Discuss-email" class="form__label"
//                                                                     >Email
//                                                                         <span class="text-color-red">*</span></label
//                                                                     ><input
//                                                                         class="input w-input"
//                                                                         maxlength="256"
//                                                                         name="Email"
//                                                                         data-name="Email"
//                                                                         placeholder="Email"
//                                                                         data-input-anim=""
//                                                                         type="email"
//                                                                         id="Discuss-email"
//                                                                         required=""
//                                                                     />
//                                                                     <div class="form__label-invalid anim">
//                                                                         Please, enter a valid email
//                                                                     </div>
//                                                                 </div>
//                                                             </div>
//                                                             <div
//                                                                 id="w-node-_7092799e-d269-0bf1-02e2-a8316ce8cce4-6ce8cccf"
//                                                                 class="form__field"
//                                                             >
//                                                                 <div class="input-wrap">
//                                                                     <label
//                                                                         for="Discuss-About-Project"
//                                                                         class="form__label is--textarea active"
//                                                                     >About Project</label
//                                                                     ><textarea
//                                                                         class="input is-textarea w-input"
//                                                                         data-lenis-prevent=""
//                                                                         maxlength="5000"
//                                                                         name="About-Project"
//                                                                         data-name="About Project"
//                                                                         placeholder="About Project"
//                                                                         data-input-anim=""
//                                                                         id="Discuss-About-Project"
//                                                                     ></textarea>
//                                                                 </div>
//                                                             </div>
//                                                             <div
//                                                                 id="w-node-_7092799e-d269-0bf1-02e2-a8316ce8cce9-6ce8cccf"
//                                                                 class="form__field is-submit"
//                                                             >
//                                                                 <div class="input-wrap is-submit">
//                                                                     <div class="contact-form__policy">
//                                                                         By sending this form I confirm that I have read
//                                                                         and accept the
//                                                                         <a
//                                                                             href="cookie-policy#halo-lab-privacy-policy"
//                                                                             data-link-underline="blue"
//                                                                             class="text-color-blue"
//                                                                         >Privacy Policy</a
//                                                                         >
//                                                                     </div>
//                                                                     <div data-hover="" class="form-submit-wrap">
//                                                                         <a
//                                                                             href="projects?be99beb4_page=4#"
//                                                                             class="button w-inline-block"
//                                                                         >
//                                                                             <div class="button__overflow">
//                                                                                 <div
//                                                                                     data-hover-elem=""
//                                                                                     class="button__texts active"
//                                                                                 >
//                                                                                     <div class="button__text is-absolute">
//                                                                                         SEND A MESsage
//                                                                                     </div>
//                                                                                     <div class="button__text">
//                                                                                         SEND A MESsage
//                                                                                     </div>
//                                                                                 </div>
//                                                                             </div>
//                                                                             <div
//                                                                                 data-hover-elem=""
//                                                                                 class="button__icons is-white active"
//                                                                             >
//                                                                                 <div
//                                                                                     data-hover-elem=""
//                                                                                     class="button__icon-anim"
//                                                                                 >
//                                                                                     <div class="icon-small w-embed">
//                                                                                         <svg
//                                                                                             aria-hidden="true"
//                                                                                             role="img"
//                                                                                             fill="currentColor"
//                                                                                             xmlns="http://www.w3.org/2000/svg"
//                                                                                             viewBox="0 0 16 16"
//                                                                                             width="100%"
//                                                                                             height="100%"
//                                                                                         >
//                                                                                             <path
//                                                                                                 fill-rule="evenodd"
//                                                                                                 d="M3.5 8a1 1 0 0 1 1-1h4a1 1 0 0 1 0 2h-4a1 1 0 0 1-1-1Z"
//                                                                                                 clip-rule="evenodd"
//                                                                                             />
//                                                                                             <path
//                                                                                                 fill-rule="evenodd"
//                                                                                                 d="M14.216 6.693a1.494 1.494 0 0 1 0 2.615L3.664 15.222a1.5 1.5 0 0 1-2.148-1.823L3.447 8l-1.93-5.398A1.5 1.5 0 0 1 3.662.779l10.553 5.914ZM12.458 8 3.845 3.173l1.545 4.32c.119.328.119.687 0 1.015l-1.545 4.32L12.457 8Z"
//                                                                                                 clip-rule="evenodd"
//                                                                                             />
//                                                                                         </svg>
//                                                                                     </div>
//                                                                                     <div class="icon-small is-absolute w-embed">
//                                                                                         <svg
//                                                                                             aria-hidden="true"
//                                                                                             role="img"
//                                                                                             fill="currentColor"
//                                                                                             xmlns="http://www.w3.org/2000/svg"
//                                                                                             viewBox="0 0 16 16"
//                                                                                             width="100%"
//                                                                                             height="100%"
//                                                                                         >
//                                                                                             <path
//                                                                                                 fill-rule="evenodd"
//                                                                                                 d="M3.5 8a1 1 0 0 1 1-1h4a1 1 0 0 1 0 2h-4a1 1 0 0 1-1-1Z"
//                                                                                                 clip-rule="evenodd"
//                                                                                             />
//                                                                                             <path
//                                                                                                 fill-rule="evenodd"
//                                                                                                 d="M14.216 6.693a1.494 1.494 0 0 1 0 2.615L3.664 15.222a1.5 1.5 0 0 1-2.148-1.823L3.447 8l-1.93-5.398A1.5 1.5 0 0 1 3.662.779l10.553 5.914ZM12.458 8 3.845 3.173l1.545 4.32c.119.328.119.687 0 1.015l-1.545 4.32L12.457 8Z"
//                                                                                                 clip-rule="evenodd"
//                                                                                             />
//                                                                                         </svg>
//                                                                                     </div>
//                                                                                 </div>
//                                                                                 <div
//                                                                                     data-hover-elem=""
//                                                                                     class="button__bg active"
//                                                                                 ></div>
//                                                                             </div> </a
//                                                                         ><input
//                                                                             type="submit"
//                                                                             data-wait="Please wait..."
//                                                                             class="form-submit is-absolute w-button"
//                                                                             value="Submit"
//                                                                         />
//                                                                     </div>
//                                                                 </div>
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                 </form>
//                                                 <div class="form-success w-form-done">
//                                                     <div class="form__content">
//                                                         <h2 class="heading-4">
//                                                             Thank you!<br />We will contact you ASAP!
//                                                         </h2>
//                                                         <div class="success__video mod--discuss w-embed">
//                                                             <video
//                                                                 class="success__video"
//                                                                 style="margin-top: 0rem"
//                                                                 autoplay
//                                                                 loop
//                                                                 muted
//                                                                 playsinline
//                                                                 loading="lazy"
//                                                             >
//                                                                 <source
//                                                                     src="https://d3vlq52qrgdnc2.cloudfront.net/Form-Success.webm"
//                                                                     type="video/webm"
//                                                                 />
//                                                                 <source
//                                                                     src="https://d3vlq52qrgdnc2.cloudfront.net/Form-Success.mp4"
//                                                                     type="video/mp4"
//                                                                 />
//                                                             </video>
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                                 <div class="form-error w-form-fail">
//                                                     <div class="error-popup-wrap">
//                                                         <div class="error-popup">
//                                                             <img
//                                                                 src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6466312f14415ae38f7bb897_error__img.webp"
//                                                                 loading="lazy"
//                                                                 alt="error image"
//                                                                 class="error__video"
//                                                             /><img
//                                                                 src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/642430ed0c544e31ed241358_icon-close.svg"
//                                                                 loading="lazy"
//                                                                 alt="close icon"
//                                                                 class="error__icon"
//                                                             />
//                                                             <h6 class="heading-6 text-align-center mod--error">
//                                                                 Hmm...something went wrong. Please try again 🙏
//                                                             </h6>
//                                                             <div data-hover="" class="button mod--case">
//                                                                 <div class="overflow-hidden is-wide">
//                                                                     <div class="button__texts active">
//                                                                         <div class="button__text">SEND AGAIN</div>
//                                                                         <div class="button__text is-absolute">
//                                                                             SEND AGAIN
//                                                                         </div>
//                                                                     </div>
//                                                                 </div>
//                                                                 <img
//                                                                     src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6466326303de460a821a270a_error__icon.svg"
//                                                                     loading="lazy"
//                                                                     alt="error icon"
//                                                                     class="icon-medium"
//                                                                 />
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                         <div class="columns__col mod--discuss is-2">
//                                             <div class="discuss__sidebar">
//                                                 <div class="discuss__sidebar-top">
//                                                     <img
//                                                         width="31"
//                                                         height="31"
//                                                         src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/64ba8960d94f86aae7e77933_icon-clutch.svg"
//                                                         loading="lazy"
//                                                         alt="clutch icon"
//                                                         class="discuss__reviews-icon"
//                                                     />
//                                                     <h3 class="heading-6">Our clients say</h3>
//                                                 </div>
//                                                 <div class="discuss__sidebar-body">
//                                                     <div data-swiper="reviews-form" class="swiper mod--discuss">
//                                                         <div class="swiper-wrapper">
//                                                             <div class="swiper-slide mod--discuss">
//                                                                 <div class="text-size-20 text-weight-medium">
//                                                                     The site developed by Halo Lab projected a very
//                                                                     premium experience, successfully delivering the
//                                                                     client’s messaging to customers. Despite external
//                                                                     challenges, the team’s performance was exceptional.
//                                                                 </div>
//                                                                 <div class="author">
//                                                                     <img
//                                                                         width="56"
//                                                                         alt="Aaron Nwabuoku avatar"
//                                                                         src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/641c384be46dfd24f8039d6c_form-review-ava-01.webp"
//                                                                         loading="lazy"
//                                                                         class="author__ava"
//                                                                     />
//                                                                     <div class="author__text-wrap">
//                                                                         <div class="text-weight-medium">
//                                                                             Aaron Nwabuoku
//                                                                         </div>
//                                                                         <div class="text-size-14 opacity-60">
//                                                                             Founder, ChatKitty
//                                                                         </div>
//                                                                     </div>
//                                                                 </div>
//                                                             </div>
//                                                             <div class="swiper-slide mod--discuss">
//                                                                 <div class="text-size-20 text-weight-medium">
//                                                                     Thanks to Halo Lab&#x27;s work, the client scored 95
//                                                                     points on the PageSpeed insights test and increased
//                                                                     their CR by 7.5%. They frequently communicated via
//                                                                     Slack and Google Meet, ensuring an effective
//                                                                     workflow.
//                                                                 </div>
//                                                                 <div class="author">
//                                                                     <img
//                                                                         width="56"
//                                                                         alt="Viktor Rovkach avatar"
//                                                                         src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/650d626822cc3e81c79a8aab_form-review-ava-02.webp"
//                                                                         loading="lazy"
//                                                                         class="author__ava"
//                                                                     />
//                                                                     <div class="author__text-wrap">
//                                                                         <div class="text-weight-medium">
//                                                                             Viktor Rovkach
//                                                                         </div>
//                                                                         <div class="text-size-14 opacity-60">
//                                                                             Brand Manager at felyx
//                                                                         </div>
//                                                                     </div>
//                                                                 </div>
//                                                             </div>
//                                                             <div class="swiper-slide mod--discuss">
//                                                                 <div class="text-size-20 text-weight-medium">
//                                                                     The client is thrilled with the new site and excited
//                                                                     to deploy it soon. Halo Lab manages tasks well and
//                                                                     communicates regularly to ensure both sides are
//                                                                     always on the same page and all of the client’s
//                                                                     needs are addressed promptly.
//                                                                 </div>
//                                                                 <div class="author">
//                                                                     <img
//                                                                         width="56"
//                                                                         alt="Rahil Sachak Patwa avatar"
//                                                                         src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/641c3ce08742cc3c0200b362_form-review-ava-03.webp"
//                                                                         loading="lazy"
//                                                                         class="author__ava"
//                                                                     />
//                                                                     <div class="author__text-wrap">
//                                                                         <div class="text-weight-medium">
//                                                                             Rahil Sachak Patwa
//                                                                         </div>
//                                                                         <div class="text-size-14 opacity-60">
//                                                                             Founder, TutorChase
//                                                                         </div>
//                                                                     </div>
//                                                                 </div>
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div class="discuss__bg-wrap">
//                                     <div class="discuss__bg w-embed">
//                                         <video
//                                             class="discuss__bg"
//                                             autoplay
//                                             loop
//                                             muted
//                                             playsinline
//                                             loading="lazy"
//                                         >
//                                             <source
//                                                 src="https://d3vlq52qrgdnc2.cloudfront.net/bg-discuss.mp4"
//                                                 type="video/mp4"
//                                             />
//                                         </video>
//                                     </div>
//                                 </div>
//                             </section>
//                         </div>
//                         <footer class="footer">
//                             <div class="section mod--footer">
//                                 <div class="container">
//                                     <div class="grid mod--footer">
//                                         <div
//                                             id="w-node-cdeddecc-b995-497a-639b-0edd64cdc734-64cdc730"
//                                             class="grid__block is-form"
//                                         >
//                                             <div class="form-wrapper mod--footer w-form">
//                                                 <form
//                                                     method="get"
//                                                     name="wf-form-Footer-subscribe"
//                                                     data-name="Footer subscribe"
//                                                     data-success-hide=""
//                                                     target="form-subs"
//                                                     id="wf-form-Footer-subscribe"
//                                                     class="form"
//                                                     data-wf-page-id="65e02e1378aeac8c4c4d9bfe"
//                                                     data-wf-element-id="cdeddecc-b995-497a-639b-0edd64cdc736"
//                                                 >
//                                                     <div class="form-subs__content mod--footer">
//                                                         <h2 class="heading-6 mod--footer">
//                                                             Subscribe to our newsletter to stay in touch with the
//                                                             latest.
//                                                         </h2>
//                                                         <div data-input-invalid="" class="input-wrap mod--footer">
//                                                             <label
//                                                                 for="footer-Email"
//                                                                 class="form__label mod--footer"
//                                                             >Your email address</label
//                                                             ><input
//                                                                 class="input mod--footer w-input"
//                                                                 maxlength="256"
//                                                                 name="Email"
//                                                                 data-name="Email"
//                                                                 placeholder="Your email address"
//                                                                 data-input-anim=""
//                                                                 type="email"
//                                                                 id="footer-Email"
//                                                                 required=""
//                                                             />
//                                                             <div
//                                                                 data-submit-anim=""
//                                                                 class="form__submit-result pointer-events-off anim"
//                                                             >
//                                                                 <div class="form__submit-result-text bg-color-dark">
//                                                                     Thank you for subscribing!
//                                                                 </div>
//                                                             </div>
//                                                             <div class="form__label-invalid is-subs anim">
//                                                                 Please, enter a valid email
//                                                             </div>
//                                                             <div data-hover="" class="form-submit-wrap mod--footer">
//                                                                 <div
//                                                                     data-hover-elem=""
//                                                                     class="button__icons mod--footer-form"
//                                                                 >
//                                                                     <div data-hover-elem="" class="button__icon-anim">
//                                                                         <div class="icon-small w-embed">
//                                                                             <svg
//                                                                                 aria-hidden="true"
//                                                                                 role="img"
//                                                                                 fill="currentColor"
//                                                                                 xmlns="http://www.w3.org/2000/svg"
//                                                                                 viewBox="0 0 16 16"
//                                                                                 width="100%"
//                                                                                 height="100%"
//                                                                             >
//                                                                                 <path
//                                                                                     d="M2.667 3.418a.587.587 0 0 0-.583.583v8c0 .32.264.584.583.584h10.667c.32 0 .583-.265.583-.584v-8a.587.587 0 0 0-.583-.583H2.667Zm-2.083.583c0-1.147.936-2.083 2.083-2.083h10.667c1.148 0 2.083.936 2.083 2.083v8a2.087 2.087 0 0 1-2.083 2.084H2.667A2.087 2.087 0 0 1 .584 12v-8Z"
//                                                                                 />
//                                                                                 <path
//                                                                                     d="M.72 3.57a.75.75 0 0 1 1.044-.184L8.001 7.75l6.236-4.365a.75.75 0 1 1 .86 1.228L8.431 9.281a.75.75 0 0 1-.86 0L.904 4.614A.75.75 0 0 1 .72 3.57Z"
//                                                                                 />
//                                                                             </svg>
//                                                                         </div>
//                                                                         <div class="icon-small is-absolute w-embed">
//                                                                             <svg
//                                                                                 aria-hidden="true"
//                                                                                 role="img"
//                                                                                 fill="currentColor"
//                                                                                 xmlns="http://www.w3.org/2000/svg"
//                                                                                 viewBox="0 0 16 16"
//                                                                                 width="100%"
//                                                                                 height="100%"
//                                                                             >
//                                                                                 <path
//                                                                                     d="M2.667 3.418a.587.587 0 0 0-.583.583v8c0 .32.264.584.583.584h10.667c.32 0 .583-.265.583-.584v-8a.587.587 0 0 0-.583-.583H2.667Zm-2.083.583c0-1.147.936-2.083 2.083-2.083h10.667c1.148 0 2.083.936 2.083 2.083v8a2.087 2.087 0 0 1-2.083 2.084H2.667A2.087 2.087 0 0 1 .584 12v-8Z"
//                                                                                 />
//                                                                                 <path
//                                                                                     d="M.72 3.57a.75.75 0 0 1 1.044-.184L8.001 7.75l6.236-4.365a.75.75 0 1 1 .86 1.228L8.431 9.281a.75.75 0 0 1-.86 0L.904 4.614A.75.75 0 0 1 .72 3.57Z"
//                                                                                 />
//                                                                             </svg>
//                                                                         </div>
//                                                                     </div>
//                                                                     <div data-hover-elem="" class="button__bg"></div>
//                                                                     <input
//                                                                         type="submit"
//                                                                         data-wait=" "
//                                                                         class="form-submit is-absolute w-button"
//                                                                         value=" "
//                                                                     />
//                                                                     <div
//                                                                         data-submit-anim=""
//                                                                         class="submit__checked anim"
//                                                                     >
//                                                                         <div
//                                                                             data-submit-anim=""
//                                                                             class="submit__checked-anim mod--footer anim"
//                                                                         >
//                                                                             <img
//                                                                                 loading="eager"
//                                                                                 src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6481d9a928737610f9397707_icon-%D1%81keck.svg"
//                                                                                 alt=""
//                                                                                 class="submit__checked-icon mod--footer"
//                                                                             />
//                                                                         </div>
//                                                                     </div>
//                                                                 </div>
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                 </form>
//                                                 <div class="w-form-done">
//                                                     <div>Thank you! Your submission has been received!</div>
//                                                 </div>
//                                                 <div class="form-error w-form-fail">
//                                                     <div>
//                                                         Oops! Something went wrong while submitting the form.
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                             <div class="footer__block">
//                                                 <div class="footer__title">Follow us here:</div>
//                                                 <div class="social">
//                                                     <a
//                                                         data-hover="prevent-responsive"
//                                                         href="https://dribbble.com/halolab"
//                                                         target="_blank"
//                                                         class="social__link w-inline-block"
//                                                     >
//                                                         <div data-hover-elem="" class="button__icon-anim">
//                                                             <div class="icon-regular is-size-16-mobile w-embed">
//                                                                 <svg
//                                                                     aria-hidden="true"
//                                                                     role="img"
//                                                                     fill="currentColor"
//                                                                     xmlns="http://www.w3.org/2000/svg"
//                                                                     viewBox="0 0 24 24"
//                                                                     width="100%"
//                                                                     height="100%"
//                                                                 >
//                                                                     <path
//                                                                         fill-rule="evenodd"
//                                                                         d="M2.398 12.01c0-5.295 4.308-9.6 9.6-9.6 5.293 0 9.6 4.305 9.6 9.6 0 5.292-4.307 9.597-9.6 9.597-5.292 0-9.6-4.305-9.6-9.598Zm7.679-7.96c.224.304 1.715 2.33 3.058 4.802 2.917-1.094 4.151-2.753 4.298-2.964a8.168 8.168 0 0 0-5.435-2.066c-.662 0-1.305.081-1.921.228Zm-1.564.553a8.222 8.222 0 0 0-4.54 5.74h.121c.721 0 3.892-.051 7.46-1a52.062 52.062 0 0 0-3.04-4.74Zm5.8 6.656c.061.14.12.28.178.421 2.73-.343 5.44.207 5.71.266a8.156 8.156 0 0 0-1.852-5.107c-.173.234-1.545 1.994-4.579 3.232.191.39.374.786.544 1.188Zm-2.084-.656C8.6 11.688 5.067 11.77 4.06 11.77c-.13 0-.217-.002-.258-.002-.002.085-.002.167-.002.25 0 2.108.797 4.031 2.107 5.482.185-.316 2.437-4.042 6.665-5.407.106-.037.215-.07.321-.099a25.159 25.159 0 0 0-.664-1.391Zm2.755 2.368c1.074 2.948 1.51 5.346 1.595 5.845a8.22 8.22 0 0 0 3.514-5.494c-.283-.09-2.54-.762-5.109-.351Zm-8.02 5.518a8.175 8.175 0 0 0 5.034 1.731 8.188 8.188 0 0 0 3.205-.65c-.123-.72-.6-3.227-1.751-6.218l-.054.018c-4.626 1.612-6.286 4.818-6.434 5.12Z"
//                                                                         clip-rule="evenodd"
//                                                                     />
//                                                                 </svg>
//                                                             </div>
//                                                             <div
//                                                                 class="icon-regular is-absolute is-size-16-mobile w-embed"
//                                                             >
//                                                                 <svg
//                                                                     aria-hidden="true"
//                                                                     role="img"
//                                                                     fill="currentColor"
//                                                                     xmlns="http://www.w3.org/2000/svg"
//                                                                     viewBox="0 0 24 24"
//                                                                     width="100%"
//                                                                     height="100%"
//                                                                 >
//                                                                     <path
//                                                                         fill-rule="evenodd"
//                                                                         d="M2.398 12.01c0-5.295 4.308-9.6 9.6-9.6 5.293 0 9.6 4.305 9.6 9.6 0 5.292-4.307 9.597-9.6 9.597-5.292 0-9.6-4.305-9.6-9.598Zm7.679-7.96c.224.304 1.715 2.33 3.058 4.802 2.917-1.094 4.151-2.753 4.298-2.964a8.168 8.168 0 0 0-5.435-2.066c-.662 0-1.305.081-1.921.228Zm-1.564.553a8.222 8.222 0 0 0-4.54 5.74h.121c.721 0 3.892-.051 7.46-1a52.062 52.062 0 0 0-3.04-4.74Zm5.8 6.656c.061.14.12.28.178.421 2.73-.343 5.44.207 5.71.266a8.156 8.156 0 0 0-1.852-5.107c-.173.234-1.545 1.994-4.579 3.232.191.39.374.786.544 1.188Zm-2.084-.656C8.6 11.688 5.067 11.77 4.06 11.77c-.13 0-.217-.002-.258-.002-.002.085-.002.167-.002.25 0 2.108.797 4.031 2.107 5.482.185-.316 2.437-4.042 6.665-5.407.106-.037.215-.07.321-.099a25.159 25.159 0 0 0-.664-1.391Zm2.755 2.368c1.074 2.948 1.51 5.346 1.595 5.845a8.22 8.22 0 0 0 3.514-5.494c-.283-.09-2.54-.762-5.109-.351Zm-8.02 5.518a8.175 8.175 0 0 0 5.034 1.731 8.188 8.188 0 0 0 3.205-.65c-.123-.72-.6-3.227-1.751-6.218l-.054.018c-4.626 1.612-6.286 4.818-6.434 5.12Z"
//                                                                         clip-rule="evenodd"
//                                                                     />
//                                                                 </svg>
//                                                             </div>
//                                                         </div>
//                                                         <div
//                                                             data-hover-elem=""
//                                                             class="button__bg mod--dribble"
//                                                         ></div>
//                                                     </a>
//                                                     <a
//                                                         data-hover="prevent-responsive"
//                                                         href="https://www.instagram.com/halolabteam/"
//                                                         target="_blank"
//                                                         class="social__link w-inline-block"
//                                                     >
//                                                         <div data-hover-elem="" class="button__icon-anim">
//                                                             <div class="icon-regular is-size-16-mobile w-embed">
//                                                                 <svg
//                                                                     aria-hidden="true"
//                                                                     role="img"
//                                                                     fill="currentColor"
//                                                                     xmlns="http://www.w3.org/2000/svg"
//                                                                     viewBox="0 0 24 24"
//                                                                     width="100%"
//                                                                     height="100%"
//                                                                 >
//                                                                     <path
//                                                                         fill-rule="evenodd"
//                                                                         d="M7.986 2.398h8.028c3.073 0 5.586 2.447 5.586 5.437v8.326c0 2.99-2.513 5.437-5.586 5.437H7.986c-3.071 0-5.586-2.447-5.586-5.437V7.835c0-2.99 2.515-5.437 5.586-5.437Zm-2.9 16.59a4.143 4.143 0 0 0 2.9 1.176h8.03a4.142 4.142 0 0 0 2.901-1.176 3.922 3.922 0 0 0 1.209-2.825V7.836c0-1.061-.43-2.064-1.209-2.823a4.144 4.144 0 0 0-2.902-1.178H7.987c-1.092 0-2.12.42-2.901 1.178a3.923 3.923 0 0 0-1.21 2.823v8.327c.001 1.062.431 2.067 1.21 2.825ZM16.149 6.7c0-.674.561-1.22 1.252-1.22.692 0 1.252.546 1.252 1.22 0 .673-.56 1.216-1.252 1.216-.69 0-1.252-.543-1.252-1.216ZM6.74 11.925c0-2.842 2.367-5.146 5.286-5.146 2.92 0 5.287 2.304 5.287 5.146s-2.368 5.146-5.287 5.146-5.286-2.304-5.286-5.146Zm1.8.003c0 1.861 1.55 3.371 3.463 3.371 1.91 0 3.46-1.51 3.46-3.371 0-1.86-1.55-3.368-3.46-3.368-1.913 0-3.463 1.508-3.463 3.368Z"
//                                                                         clip-rule="evenodd"
//                                                                     />
//                                                                 </svg>
//                                                             </div>
//                                                             <div
//                                                                 class="icon-regular is-absolute is-size-16-mobile w-embed"
//                                                             >
//                                                                 <svg
//                                                                     aria-hidden="true"
//                                                                     role="img"
//                                                                     fill="currentColor"
//                                                                     xmlns="http://www.w3.org/2000/svg"
//                                                                     viewBox="0 0 24 24"
//                                                                     width="100%"
//                                                                     height="100%"
//                                                                 >
//                                                                     <path
//                                                                         fill-rule="evenodd"
//                                                                         d="M7.986 2.398h8.028c3.073 0 5.586 2.447 5.586 5.437v8.326c0 2.99-2.513 5.437-5.586 5.437H7.986c-3.071 0-5.586-2.447-5.586-5.437V7.835c0-2.99 2.515-5.437 5.586-5.437Zm-2.9 16.59a4.143 4.143 0 0 0 2.9 1.176h8.03a4.142 4.142 0 0 0 2.901-1.176 3.922 3.922 0 0 0 1.209-2.825V7.836c0-1.061-.43-2.064-1.209-2.823a4.144 4.144 0 0 0-2.902-1.178H7.987c-1.092 0-2.12.42-2.901 1.178a3.923 3.923 0 0 0-1.21 2.823v8.327c.001 1.062.431 2.067 1.21 2.825ZM16.149 6.7c0-.674.561-1.22 1.252-1.22.692 0 1.252.546 1.252 1.22 0 .673-.56 1.216-1.252 1.216-.69 0-1.252-.543-1.252-1.216ZM6.74 11.925c0-2.842 2.367-5.146 5.286-5.146 2.92 0 5.287 2.304 5.287 5.146s-2.368 5.146-5.287 5.146-5.286-2.304-5.286-5.146Zm1.8.003c0 1.861 1.55 3.371 3.463 3.371 1.91 0 3.46-1.51 3.46-3.371 0-1.86-1.55-3.368-3.46-3.368-1.913 0-3.463 1.508-3.463 3.368Z"
//                                                                         clip-rule="evenodd"
//                                                                     />
//                                                                 </svg>
//                                                             </div>
//                                                         </div>
//                                                         <div
//                                                             data-hover-elem=""
//                                                             class="button__bg mod--instagram"
//                                                         ></div>
//                                                     </a>
//                                                     <a
//                                                         data-hover="prevent-responsive"
//                                                         href="https://www.behance.net/halolab"
//                                                         target="_blank"
//                                                         class="social__link w-inline-block"
//                                                     >
//                                                         <div data-hover-elem="" class="button__icon-anim">
//                                                             <div class="icon-regular is-size-16-mobile w-embed">
//                                                                 <svg
//                                                                     aria-hidden="true"
//                                                                     role="img"
//                                                                     fill="currentColor"
//                                                                     xmlns="http://www.w3.org/2000/svg"
//                                                                     viewBox="0 0 24 24"
//                                                                     width="100%"
//                                                                     height="100%"
//                                                                 >
//                                                                     <path
//                                                                         fill-rule="evenodd"
//                                                                         d="M1.445 4.32h6.307c1.594.024 2.72.513 3.384 1.465.397.584.599 1.28.599 2.098 0 .838-.202 1.51-.605 2.023-.224.286-.556.547-.995.781.667.254 1.168.66 1.508 1.213.337.553.508 1.224.508 2.014 0 .814-.193 1.545-.582 2.191a3.77 3.77 0 0 1-.925 1.081 3.513 3.513 0 0 1-1.475.69 8.564 8.564 0 0 1-1.842.185H1.445V4.32Zm2.602 2.386v3.03h3.17c.57 0 1.029-.113 1.382-.34.354-.228.53-.63.53-1.206 0-.64-.232-1.064-.7-1.269-.404-.145-.917-.215-1.543-.215h-2.84Zm0 5.306v3.666h3.168c.566 0 1.007-.08 1.322-.243.573-.298.859-.873.859-1.715 0-.716-.279-1.205-.831-1.473-.312-.15-.746-.228-1.306-.235H4.047Zm10.898-5.34h5.592v-1.71h-5.592v1.71Zm-.621 2.366c.887-.937 2.037-1.406 3.452-1.406.84 0 1.597.158 2.27.475.672.317 1.228.82 1.666 1.503.398.604.654 1.305.771 2.1.07.469.095 1.14.082 2.018h-7.029c.038 1.02.374 1.734 1.008 2.146.387.252.852.382 1.392.382.577 0 1.042-.155 1.402-.467a2.22 2.22 0 0 0 .518-.7h2.579c-.07.603-.382 1.217-.936 1.837-.865.988-2.075 1.482-3.632 1.482a5.101 5.101 0 0 1-3.4-1.25c-.981-.832-1.472-2.19-1.472-4.066 0-1.762.443-3.112 1.329-4.054Zm1.944 1.363c-.354.39-.58.913-.671 1.573h4.347c-.047-.705-.269-1.239-.672-1.606-.402-.364-.902-.547-1.498-.547-.647 0-1.15.193-1.506.58Z"
//                                                                         clip-rule="evenodd"
//                                                                     />
//                                                                 </svg>
//                                                             </div>
//                                                             <div
//                                                                 class="icon-regular is-absolute is-size-16-mobile w-embed"
//                                                             >
//                                                                 <svg
//                                                                     aria-hidden="true"
//                                                                     role="img"
//                                                                     fill="currentColor"
//                                                                     xmlns="http://www.w3.org/2000/svg"
//                                                                     viewBox="0 0 24 24"
//                                                                     width="100%"
//                                                                     height="100%"
//                                                                 >
//                                                                     <path
//                                                                         fill-rule="evenodd"
//                                                                         d="M1.445 4.32h6.307c1.594.024 2.72.513 3.384 1.465.397.584.599 1.28.599 2.098 0 .838-.202 1.51-.605 2.023-.224.286-.556.547-.995.781.667.254 1.168.66 1.508 1.213.337.553.508 1.224.508 2.014 0 .814-.193 1.545-.582 2.191a3.77 3.77 0 0 1-.925 1.081 3.513 3.513 0 0 1-1.475.69 8.564 8.564 0 0 1-1.842.185H1.445V4.32Zm2.602 2.386v3.03h3.17c.57 0 1.029-.113 1.382-.34.354-.228.53-.63.53-1.206 0-.64-.232-1.064-.7-1.269-.404-.145-.917-.215-1.543-.215h-2.84Zm0 5.306v3.666h3.168c.566 0 1.007-.08 1.322-.243.573-.298.859-.873.859-1.715 0-.716-.279-1.205-.831-1.473-.312-.15-.746-.228-1.306-.235H4.047Zm10.898-5.34h5.592v-1.71h-5.592v1.71Zm-.621 2.366c.887-.937 2.037-1.406 3.452-1.406.84 0 1.597.158 2.27.475.672.317 1.228.82 1.666 1.503.398.604.654 1.305.771 2.1.07.469.095 1.14.082 2.018h-7.029c.038 1.02.374 1.734 1.008 2.146.387.252.852.382 1.392.382.577 0 1.042-.155 1.402-.467a2.22 2.22 0 0 0 .518-.7h2.579c-.07.603-.382 1.217-.936 1.837-.865.988-2.075 1.482-3.632 1.482a5.101 5.101 0 0 1-3.4-1.25c-.981-.832-1.472-2.19-1.472-4.066 0-1.762.443-3.112 1.329-4.054Zm1.944 1.363c-.354.39-.58.913-.671 1.573h4.347c-.047-.705-.269-1.239-.672-1.606-.402-.364-.902-.547-1.498-.547-.647 0-1.15.193-1.506.58Z"
//                                                                         clip-rule="evenodd"
//                                                                     />
//                                                                 </svg>
//                                                             </div>
//                                                         </div>
//                                                         <div
//                                                             data-hover-elem=""
//                                                             class="button__bg mod--behance"
//                                                         ></div>
//                                                     </a>
//                                                     <a
//                                                         data-hover="prevent-responsive"
//                                                         href="https://webflow.com/@halolab"
//                                                         target="_blank"
//                                                         class="social__link w-inline-block"
//                                                     >
//                                                         <div data-hover-elem="" class="button__icon-anim">
//                                                             <div class="icon-regular is-size-16-mobile w-embed">
//                                                                 <svg
//                                                                     aria-hidden="true"
//                                                                     role="img"
//                                                                     fill="currentColor"
//                                                                     xmlns="http://www.w3.org/2000/svg"
//                                                                     viewBox="0 0 24 24"
//                                                                     width="100%"
//                                                                     height="100%"
//                                                                 >
//                                                                     <path
//                                                                         fill-rule="evenodd"
//                                                                         d="m22.239 6-6.14 12h-5.765l2.569-4.973h-.116C10.667 15.778 7.506 17.589 3 18v-4.904s2.882-.17 4.577-1.952H3V6h5.144v4.23h.115L10.363 6h3.89v4.204h.115L16.549 6h5.69Z"
//                                                                         clip-rule="evenodd"
//                                                                     />
//                                                                 </svg>
//                                                             </div>
//                                                             <div
//                                                                 class="icon-regular is-absolute is-size-16-mobile w-embed"
//                                                             >
//                                                                 <svg
//                                                                     aria-hidden="true"
//                                                                     role="img"
//                                                                     fill="currentColor"
//                                                                     xmlns="http://www.w3.org/2000/svg"
//                                                                     viewBox="0 0 24 24"
//                                                                     width="100%"
//                                                                     height="100%"
//                                                                 >
//                                                                     <path
//                                                                         fill-rule="evenodd"
//                                                                         d="m22.239 6-6.14 12h-5.765l2.569-4.973h-.116C10.667 15.778 7.506 17.589 3 18v-4.904s2.882-.17 4.577-1.952H3V6h5.144v4.23h.115L10.363 6h3.89v4.204h.115L16.549 6h5.69Z"
//                                                                         clip-rule="evenodd"
//                                                                     />
//                                                                 </svg>
//                                                             </div>
//                                                         </div>
//                                                         <div
//                                                             data-hover-elem=""
//                                                             class="button__bg mod--webflow"
//                                                         ></div>
//                                                     </a>
//                                                     <a
//                                                         data-hover="prevent-responsive"
//                                                         href="https://www.linkedin.com/company/halolabteam"
//                                                         target="_blank"
//                                                         class="social__link w-inline-block"
//                                                     >
//                                                         <div data-hover-elem="" class="button__icon-anim">
//                                                             <div class="icon-regular is-size-16-mobile w-embed">
//                                                                 <svg
//                                                                     aria-hidden="true"
//                                                                     role="img"
//                                                                     fill="currentColor"
//                                                                     xmlns="http://www.w3.org/2000/svg"
//                                                                     viewBox="0 0 24 24"
//                                                                     width="100%"
//                                                                     height="100%"
//                                                                 >
//                                                                     <path
//                                                                         d="M8.155 18.402h-3.2v-9.6h3.2v9.6Zm-1.6-10.88a1.6 1.6 0 1 1 0-3.2 1.6 1.6 0 0 1 0 3.2Zm13.12 10.88H16.6V13.73c0-1.114-.021-2.547-1.6-2.547-1.602 0-1.848 1.213-1.848 2.467v4.752h-3.076V8.795h2.953v1.313h.042c.41-.755 1.415-1.551 2.912-1.551 3.117 0 3.693 1.99 3.693 4.576v5.27Z"
//                                                                     />
//                                                                 </svg>
//                                                             </div>
//                                                             <div
//                                                                 class="icon-regular is-absolute is-size-16-mobile w-embed"
//                                                             >
//                                                                 <svg
//                                                                     aria-hidden="true"
//                                                                     role="img"
//                                                                     fill="currentColor"
//                                                                     xmlns="http://www.w3.org/2000/svg"
//                                                                     viewBox="0 0 24 24"
//                                                                     width="100%"
//                                                                     height="100%"
//                                                                 >
//                                                                     <path
//                                                                         d="M8.155 18.402h-3.2v-9.6h3.2v9.6Zm-1.6-10.88a1.6 1.6 0 1 1 0-3.2 1.6 1.6 0 0 1 0 3.2Zm13.12 10.88H16.6V13.73c0-1.114-.021-2.547-1.6-2.547-1.602 0-1.848 1.213-1.848 2.467v4.752h-3.076V8.795h2.953v1.313h.042c.41-.755 1.415-1.551 2.912-1.551 3.117 0 3.693 1.99 3.693 4.576v5.27Z"
//                                                                     />
//                                                                 </svg>
//                                                             </div>
//                                                         </div>
//                                                         <div
//                                                             data-hover-elem=""
//                                                             class="button__bg mod--linkedin"
//                                                         ></div>
//                                                     </a>
//                                                     <a
//                                                         data-hover="prevent-responsive"
//                                                         href="https://github.com/Halo-Lab"
//                                                         target="_blank"
//                                                         class="social__link is-github w-inline-block"
//                                                     >
//                                                         <div data-hover-elem="" class="button__icon-anim">
//                                                             <div class="icon-regular is-size-16-mobile w-embed">
//                                                                 <svg
//                                                                     aria-hidden="true"
//                                                                     role="img"
//                                                                     fill="currentColor"
//                                                                     xmlns="http://www.w3.org/2000/svg"
//                                                                     viewBox="0 0 24 24"
//                                                                     width="100%"
//                                                                     height="100%"
//                                                                 >
//                                                                     <path
//                                                                         d="M10.174 15.536c0-.787-.412-2.062-1.387-2.062-.975 0-1.388 1.275-1.388 2.062 0 .788.413 2.063 1.388 2.063.975 0 1.387-1.275 1.387-2.063ZM21.2 13.661c0-1.575-.45-3.075-1.462-4.312.187-.563.262-1.163.262-1.8 0-.788-.187-1.2-.525-1.95-1.687 0-2.775.337-4.05 1.35-.975-.263-2.025-.375-3.037-.375-1.088 0-2.213.15-3.3.375-1.313-1.013-2.4-1.35-4.088-1.35-.375.75-.562 1.162-.562 1.95 0 .637.112 1.237.3 1.837-1.05 1.2-1.538 2.7-1.538 4.275 0 1.2.188 2.475.75 3.563 1.463 2.887 5.625 2.775 8.438 2.775 2.812 0 6.712.075 8.137-2.775.525-1.125.675-2.363.675-3.563Zm-2.437 1.875c0 3.3-3 3.788-5.625 3.788h-1.838c-2.625 0-5.625-.488-5.625-3.788 0-1.65 1.013-3.075 2.775-3.075.713 0 1.388.113 2.1.225a12.755 12.755 0 0 0 3.375 0c.713-.112 1.388-.225 2.1-.225 1.763 0 2.738 1.425 2.738 3.075Zm-3.075-2.062c-.975 0-1.388 1.275-1.388 2.062 0 .788.413 2.063 1.388 2.063.937 0 1.35-1.275 1.35-2.063 0-.787-.413-2.062-1.35-2.062Z"
//                                                                     />
//                                                                 </svg>
//                                                             </div>
//                                                             <div
//                                                                 class="icon-regular is-absolute is-size-16-mobile w-embed"
//                                                             >
//                                                                 <svg
//                                                                     aria-hidden="true"
//                                                                     role="img"
//                                                                     fill="currentColor"
//                                                                     xmlns="http://www.w3.org/2000/svg"
//                                                                     viewBox="0 0 24 24"
//                                                                     width="100%"
//                                                                     height="100%"
//                                                                 >
//                                                                     <path
//                                                                         d="M10.174 15.536c0-.787-.412-2.062-1.387-2.062-.975 0-1.388 1.275-1.388 2.062 0 .788.413 2.063 1.388 2.063.975 0 1.387-1.275 1.387-2.063ZM21.2 13.661c0-1.575-.45-3.075-1.462-4.312.187-.563.262-1.163.262-1.8 0-.788-.187-1.2-.525-1.95-1.687 0-2.775.337-4.05 1.35-.975-.263-2.025-.375-3.037-.375-1.088 0-2.213.15-3.3.375-1.313-1.013-2.4-1.35-4.088-1.35-.375.75-.562 1.162-.562 1.95 0 .637.112 1.237.3 1.837-1.05 1.2-1.538 2.7-1.538 4.275 0 1.2.188 2.475.75 3.563 1.463 2.887 5.625 2.775 8.438 2.775 2.812 0 6.712.075 8.137-2.775.525-1.125.675-2.363.675-3.563Zm-2.437 1.875c0 3.3-3 3.788-5.625 3.788h-1.838c-2.625 0-5.625-.488-5.625-3.788 0-1.65 1.013-3.075 2.775-3.075.713 0 1.388.113 2.1.225a12.755 12.755 0 0 0 3.375 0c.713-.112 1.388-.225 2.1-.225 1.763 0 2.738 1.425 2.738 3.075Zm-3.075-2.062c-.975 0-1.388 1.275-1.388 2.062 0 .788.413 2.063 1.388 2.063.937 0 1.35-1.275 1.35-2.063 0-.787-.413-2.062-1.35-2.062Z"
//                                                                     />
//                                                                 </svg>
//                                                             </div>
//                                                         </div>
//                                                         <div
//                                                             data-hover-elem=""
//                                                             class="button__bg bg-color-white"
//                                                         ></div>
//                                                     </a>
//                                                     <a
//                                                         data-hover="prevent-responsive"
//                                                         href="https://www.npmjs.com/~halolab"
//                                                         target="_blank"
//                                                         class="social__link w-inline-block"
//                                                     >
//                                                         <div data-hover-elem="" class="button__icon-anim">
//                                                             <div class="icon-regular is-size-16-mobile w-embed">
//                                                                 <svg
//                                                                     aria-hidden="true"
//                                                                     role="img"
//                                                                     fill="currentColor"
//                                                                     xmlns="http://www.w3.org/2000/svg"
//                                                                     viewBox="0 0 24 24"
//                                                                     width="100%"
//                                                                     height="100%"
//                                                                 >
//                                                                     <path
//                                                                         d="M11.7 13.199v-2.6h-1.3v2.6h1.3Zm11.7-5.2H0v7.8h6.5v1.3h5.2v-1.3h11.7v-7.8Zm-16.9 1.3v5.2H5.2v-3.9H3.9v3.9H1.3v-5.2h5.2Zm6.5 0v5.2h-2.6v1.3H7.8v-6.5H13Zm9.1 0v5.2h-1.3v-3.9h-1.3v3.9h-1.3v-3.9h-1.3v3.9h-2.6v-5.2h7.8Z"
//                                                                     />
//                                                                 </svg>
//                                                             </div>
//                                                             <div
//                                                                 class="icon-regular is-absolute is-size-16-mobile w-embed"
//                                                             >
//                                                                 <svg
//                                                                     aria-hidden="true"
//                                                                     role="img"
//                                                                     fill="currentColor"
//                                                                     xmlns="http://www.w3.org/2000/svg"
//                                                                     viewBox="0 0 24 24"
//                                                                     width="100%"
//                                                                     height="100%"
//                                                                 >
//                                                                     <path
//                                                                         d="M11.7 13.199v-2.6h-1.3v2.6h1.3Zm11.7-5.2H0v7.8h6.5v1.3h5.2v-1.3h11.7v-7.8Zm-16.9 1.3v5.2H5.2v-3.9H3.9v3.9H1.3v-5.2h5.2Zm6.5 0v5.2h-2.6v1.3H7.8v-6.5H13Zm9.1 0v5.2h-1.3v-3.9h-1.3v3.9h-1.3v-3.9h-1.3v3.9h-2.6v-5.2h7.8Z"
//                                                                     />
//                                                                 </svg>
//                                                             </div>
//                                                         </div>
//                                                         <div data-hover-elem="" class="button__bg mod--npm"></div>
//                                                     </a>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                         <div
//                                             id="w-node-d86be207-12ce-6ff4-4e43-15b17734cd13-64cdc730"
//                                             class="grid__block is-nav"
//                                         >
//                                             <nav class="footer__nav is--main">
//                                                 <div
//                                                     data-hover="false"
//                                                     data-delay="0"
//                                                     class="dropdown-inter mod--footer-nav w-dropdown"
//                                                 >
//                                                     <div class="dropdown__toggle hide-tablet w-dropdown-toggle">
//                                                         <div data-hover="" class="footer__nav-link">
//                                                             <div class="button__overflow">
//                                                                 <div data-hover-elem="" class="button__texts">
//                                                                     <div class="button__text">Our Services</div>
//                                                                     <div class="button__text is-absolute">
//                                                                         Our Services
//                                                                     </div>
//                                                                 </div>
//                                                             </div>
//                                                             <div class="dropdown__icons">
//                                                                 <div class="dropdown__icon is-open w-embed">
//                                                                     <svg
//                                                                         aria-hidden="true"
//                                                                         role="img"
//                                                                         fill="currentColor"
//                                                                         xmlns="http://www.w3.org/2000/svg"
//                                                                         viewBox="0 0 24 24"
//                                                                         width="100%"
//                                                                         height="100%"
//                                                                     >
//                                                                         <path
//                                                                             fill-rule="evenodd"
//                                                                             d="M12 4a1 1 0 0 1 1 1v14a1 1 0 1 1-2 0V5a1 1 0 0 1 1-1Z"
//                                                                             clip-rule="evenodd"
//                                                                         />
//                                                                         <path
//                                                                             fill-rule="evenodd"
//                                                                             d="M4 12a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1Z"
//                                                                             clip-rule="evenodd"
//                                                                         />
//                                                                     </svg>
//                                                                 </div>
//                                                                 <div class="dropdown__icon is-close w-embed">
//                                                                     <svg
//                                                                         aria-hidden="true"
//                                                                         role="img"
//                                                                         fill="currentColor"
//                                                                         xmlns="http://www.w3.org/2000/svg"
//                                                                         viewBox="0 0 24 24"
//                                                                         width="100%"
//                                                                         height="100%"
//                                                                     >
//                                                                         <path
//                                                                             fill-rule="evenodd"
//                                                                             d="M4 12a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1Z"
//                                                                             clip-rule="evenodd"
//                                                                         />
//                                                                     </svg>
//                                                                 </div>
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                     <nav class="dropdown__list is-inter w-dropdown-list">
//                                                         <div class="dropdown__content mod--footer-nav">
//                                                             <a
//                                                                 data-hover=""
//                                                                 href="services/product-research"
//                                                                 class="footer__nav-link2 w-inline-block"
//                                                             >
//                                                                 <div class="button__overflow">
//                                                                     <div data-hover-elem="" class="button__texts">
//                                                                         <div class="button__text">Discovery</div>
//                                                                         <div class="button__text is-absolute">
//                                                                             Discovery
//                                                                         </div>
//                                                                     </div>
//                                                                 </div>
//                                                             </a>
//                                                             <a
//                                                                 data-hover=""
//                                                                 href="services/design"
//                                                                 class="footer__nav-link2 w-inline-block"
//                                                             >
//                                                                 <div class="button__overflow">
//                                                                     <div data-hover-elem="" class="button__texts">
//                                                                         <div class="button__text">Design</div>
//                                                                         <div class="button__text is-absolute">Design</div>
//                                                                     </div>
//                                                                 </div>
//                                                             </a>
//                                                             <a
//                                                                 data-hover=""
//                                                                 href="services/development"
//                                                                 class="footer__nav-link2 w-inline-block"
//                                                             >
//                                                                 <div class="button__overflow">
//                                                                     <div data-hover-elem="" class="button__texts">
//                                                                         <div class="button__text">Development</div>
//                                                                         <div class="button__text is-absolute">
//                                                                             Development
//                                                                         </div>
//                                                                     </div>
//                                                                 </div>
//                                                             </a>
//                                                             <a
//                                                                 data-hover=""
//                                                                 href="services/marketing"
//                                                                 class="footer__nav-link2 w-inline-block"
//                                                             >
//                                                                 <div class="button__overflow">
//                                                                     <div data-hover-elem="" class="button__texts">
//                                                                         <div class="button__text">Marketing</div>
//                                                                         <div class="button__text is-absolute">
//                                                                             Marketing
//                                                                         </div>
//                                                                     </div>
//                                                                 </div>
//                                                             </a>
//                                                         </div>
//                                                     </nav>
//                                                 </div>
//                                                 <div class="footer__nav is--other">
//                                                     <a
//                                                         data-hover-prevent-responsive=""
//                                                         data-hover=""
//                                                         href="projects"
//                                                         aria-current="page"
//                                                         class="footer__nav-link w-inline-block w--current"
//                                                     >
//                                                         <div class="button__overflow">
//                                                             <div data-hover-elem="" class="button__texts">
//                                                                 <div class="button__text">Projects</div>
//                                                                 <div class="button__text is-absolute">Projects</div>
//                                                             </div>
//                                                         </div>
//                                                         <div class="overflow-hidden hide-tablet">
//                                                             <div
//                                                                 data-hover-elem=""
//                                                                 class="button__icon-anim is-diagonal-top"
//                                                             >
//                                                                 <div class="icon-regular opacity-0 w-embed">
//                                                                     <svg
//                                                                         aria-hidden="true"
//                                                                         role="img"
//                                                                         fill="currentColor"
//                                                                         xmlns="http://www.w3.org/2000/svg"
//                                                                         viewBox="0 0 24 24"
//                                                                         width="100%"
//                                                                         height="100%"
//                                                                     >
//                                                                         <path
//                                                                             fill-rule="evenodd"
//                                                                             d="M18.707 5.293a1 1 0 0 1 0 1.414l-12 12a1 1 0 0 1-1.414-1.414l12-12a1 1 0 0 1 1.414 0Z"
//                                                                             clip-rule="evenodd"
//                                                                         />
//                                                                         <path
//                                                                             fill="#fff"
//                                                                             fill-rule="evenodd"
//                                                                             d="M8 6a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v9a1 1 0 1 1-2 0V7H9a1 1 0 0 1-1-1Z"
//                                                                             clip-rule="evenodd"
//                                                                         />
//                                                                     </svg>
//                                                                 </div>
//                                                                 <div
//                                                                     class="icon-regular is-absolute is-diagonal-top w-embed"
//                                                                 >
//                                                                     <svg
//                                                                         aria-hidden="true"
//                                                                         role="img"
//                                                                         fill="currentColor"
//                                                                         xmlns="http://www.w3.org/2000/svg"
//                                                                         viewBox="0 0 24 24"
//                                                                         width="100%"
//                                                                         height="100%"
//                                                                     >
//                                                                         <path
//                                                                             fill-rule="evenodd"
//                                                                             d="M18.707 5.293a1 1 0 0 1 0 1.414l-12 12a1 1 0 0 1-1.414-1.414l12-12a1 1 0 0 1 1.414 0Z"
//                                                                             clip-rule="evenodd"
//                                                                         />
//                                                                         <path
//                                                                             fill="#fff"
//                                                                             fill-rule="evenodd"
//                                                                             d="M8 6a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v9a1 1 0 1 1-2 0V7H9a1 1 0 0 1-1-1Z"
//                                                                             clip-rule="evenodd"
//                                                                         />
//                                                                     </svg>
//                                                                 </div>
//                                                             </div>
//                                                         </div>
//                                                     </a>
//                                                     <a
//                                                         data-hover-prevent-responsive=""
//                                                         data-hover=""
//                                                         href="services/dedicated-team"
//                                                         class="footer__nav-link w-inline-block"
//                                                     >
//                                                         <div class="button__overflow">
//                                                             <div data-hover-elem="" class="button__texts">
//                                                                 <div class="button__text">Our Process</div>
//                                                                 <div class="button__text is-absolute">
//                                                                     Our Process
//                                                                 </div>
//                                                             </div>
//                                                         </div>
//                                                         <div class="overflow-hidden hide-tablet">
//                                                             <div
//                                                                 data-hover-elem=""
//                                                                 class="button__icon-anim is-diagonal-top"
//                                                             >
//                                                                 <div class="icon-regular opacity-0 w-embed">
//                                                                     <svg
//                                                                         aria-hidden="true"
//                                                                         role="img"
//                                                                         fill="currentColor"
//                                                                         xmlns="http://www.w3.org/2000/svg"
//                                                                         viewBox="0 0 24 24"
//                                                                         width="100%"
//                                                                         height="100%"
//                                                                     >
//                                                                         <path
//                                                                             fill-rule="evenodd"
//                                                                             d="M18.707 5.293a1 1 0 0 1 0 1.414l-12 12a1 1 0 0 1-1.414-1.414l12-12a1 1 0 0 1 1.414 0Z"
//                                                                             clip-rule="evenodd"
//                                                                         />
//                                                                         <path
//                                                                             fill="#fff"
//                                                                             fill-rule="evenodd"
//                                                                             d="M8 6a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v9a1 1 0 1 1-2 0V7H9a1 1 0 0 1-1-1Z"
//                                                                             clip-rule="evenodd"
//                                                                         />
//                                                                     </svg>
//                                                                 </div>
//                                                                 <div
//                                                                     class="icon-regular is-absolute is-diagonal-top w-embed"
//                                                                 >
//                                                                     <svg
//                                                                         aria-hidden="true"
//                                                                         role="img"
//                                                                         fill="currentColor"
//                                                                         xmlns="http://www.w3.org/2000/svg"
//                                                                         viewBox="0 0 24 24"
//                                                                         width="100%"
//                                                                         height="100%"
//                                                                     >
//                                                                         <path
//                                                                             fill-rule="evenodd"
//                                                                             d="M18.707 5.293a1 1 0 0 1 0 1.414l-12 12a1 1 0 0 1-1.414-1.414l12-12a1 1 0 0 1 1.414 0Z"
//                                                                             clip-rule="evenodd"
//                                                                         />
//                                                                         <path
//                                                                             fill="#fff"
//                                                                             fill-rule="evenodd"
//                                                                             d="M8 6a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v9a1 1 0 1 1-2 0V7H9a1 1 0 0 1-1-1Z"
//                                                                             clip-rule="evenodd"
//                                                                         />
//                                                                     </svg>
//                                                                 </div>
//                                                             </div>
//                                                         </div>
//                                                     </a>
//                                                     <a
//                                                         data-hover-prevent-responsive=""
//                                                         data-hover=""
//                                                         href="opensource"
//                                                         class="footer__nav-link w-inline-block"
//                                                     >
//                                                         <div class="button__overflow">
//                                                             <div data-hover-elem="" class="button__texts">
//                                                                 <div class="button__text">Open Source</div>
//                                                                 <div class="button__text is-absolute">
//                                                                     Open Source
//                                                                 </div>
//                                                             </div>
//                                                         </div>
//                                                         <div class="overflow-hidden hide-tablet">
//                                                             <div
//                                                                 data-hover-elem=""
//                                                                 class="button__icon-anim is-diagonal-top"
//                                                             >
//                                                                 <div class="icon-regular opacity-0 w-embed">
//                                                                     <svg
//                                                                         aria-hidden="true"
//                                                                         role="img"
//                                                                         fill="currentColor"
//                                                                         xmlns="http://www.w3.org/2000/svg"
//                                                                         viewBox="0 0 24 24"
//                                                                         width="100%"
//                                                                         height="100%"
//                                                                     >
//                                                                         <path
//                                                                             fill-rule="evenodd"
//                                                                             d="M18.707 5.293a1 1 0 0 1 0 1.414l-12 12a1 1 0 0 1-1.414-1.414l12-12a1 1 0 0 1 1.414 0Z"
//                                                                             clip-rule="evenodd"
//                                                                         />
//                                                                         <path
//                                                                             fill="#fff"
//                                                                             fill-rule="evenodd"
//                                                                             d="M8 6a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v9a1 1 0 1 1-2 0V7H9a1 1 0 0 1-1-1Z"
//                                                                             clip-rule="evenodd"
//                                                                         />
//                                                                     </svg>
//                                                                 </div>
//                                                                 <div
//                                                                     class="icon-regular is-absolute is-diagonal-top w-embed"
//                                                                 >
//                                                                     <svg
//                                                                         aria-hidden="true"
//                                                                         role="img"
//                                                                         fill="currentColor"
//                                                                         xmlns="http://www.w3.org/2000/svg"
//                                                                         viewBox="0 0 24 24"
//                                                                         width="100%"
//                                                                         height="100%"
//                                                                     >
//                                                                         <path
//                                                                             fill-rule="evenodd"
//                                                                             d="M18.707 5.293a1 1 0 0 1 0 1.414l-12 12a1 1 0 0 1-1.414-1.414l12-12a1 1 0 0 1 1.414 0Z"
//                                                                             clip-rule="evenodd"
//                                                                         />
//                                                                         <path
//                                                                             fill="#fff"
//                                                                             fill-rule="evenodd"
//                                                                             d="M8 6a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v9a1 1 0 1 1-2 0V7H9a1 1 0 0 1-1-1Z"
//                                                                             clip-rule="evenodd"
//                                                                         />
//                                                                     </svg>
//                                                                 </div>
//                                                             </div>
//                                                         </div>
//                                                     </a>
//                                                     <a
//                                                         data-hover=""
//                                                         href="projects?be99beb4_page=4#"
//                                                         class="footer__nav-link hide w-inline-block"
//                                                     >
//                                                         <div>About</div>
//                                                     </a>
//                                                     <a
//                                                         data-hover-prevent-responsive=""
//                                                         data-hover=""
//                                                         href="referral-program"
//                                                         class="footer__nav-link w-inline-block"
//                                                     >
//                                                         <div class="button__overflow">
//                                                             <div data-hover-elem="" class="button__texts">
//                                                                 <div class="button__text">Referral Program</div>
//                                                                 <div class="button__text is-absolute">
//                                                                     Referral Program
//                                                                 </div>
//                                                             </div>
//                                                         </div>
//                                                         <div class="overflow-hidden hide-tablet">
//                                                             <div
//                                                                 data-hover-elem=""
//                                                                 class="button__icon-anim is-diagonal-top"
//                                                             >
//                                                                 <div class="icon-regular opacity-0 w-embed">
//                                                                     <svg
//                                                                         aria-hidden="true"
//                                                                         role="img"
//                                                                         fill="currentColor"
//                                                                         xmlns="http://www.w3.org/2000/svg"
//                                                                         viewBox="0 0 24 24"
//                                                                         width="100%"
//                                                                         height="100%"
//                                                                     >
//                                                                         <path
//                                                                             fill-rule="evenodd"
//                                                                             d="M18.707 5.293a1 1 0 0 1 0 1.414l-12 12a1 1 0 0 1-1.414-1.414l12-12a1 1 0 0 1 1.414 0Z"
//                                                                             clip-rule="evenodd"
//                                                                         />
//                                                                         <path
//                                                                             fill="#fff"
//                                                                             fill-rule="evenodd"
//                                                                             d="M8 6a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v9a1 1 0 1 1-2 0V7H9a1 1 0 0 1-1-1Z"
//                                                                             clip-rule="evenodd"
//                                                                         />
//                                                                     </svg>
//                                                                 </div>
//                                                                 <div
//                                                                     class="icon-regular is-absolute is-diagonal-top w-embed"
//                                                                 >
//                                                                     <svg
//                                                                         aria-hidden="true"
//                                                                         role="img"
//                                                                         fill="currentColor"
//                                                                         xmlns="http://www.w3.org/2000/svg"
//                                                                         viewBox="0 0 24 24"
//                                                                         width="100%"
//                                                                         height="100%"
//                                                                     >
//                                                                         <path
//                                                                             fill-rule="evenodd"
//                                                                             d="M18.707 5.293a1 1 0 0 1 0 1.414l-12 12a1 1 0 0 1-1.414-1.414l12-12a1 1 0 0 1 1.414 0Z"
//                                                                             clip-rule="evenodd"
//                                                                         />
//                                                                         <path
//                                                                             fill="#fff"
//                                                                             fill-rule="evenodd"
//                                                                             d="M8 6a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v9a1 1 0 1 1-2 0V7H9a1 1 0 0 1-1-1Z"
//                                                                             clip-rule="evenodd"
//                                                                         />
//                                                                     </svg>
//                                                                 </div>
//                                                             </div>
//                                                         </div>
//                                                     </a>
//                                                     <a
//                                                         data-hover-prevent-responsive=""
//                                                         data-hover=""
//                                                         href="contacts"
//                                                         class="footer__nav-link w-inline-block"
//                                                     >
//                                                         <div class="button__overflow">
//                                                             <div data-hover-elem="" class="button__texts">
//                                                                 <div class="button__text">Contacts</div>
//                                                                 <div class="button__text is-absolute">Contacts</div>
//                                                             </div>
//                                                         </div>
//                                                         <div class="overflow-hidden hide-tablet">
//                                                             <div
//                                                                 data-hover-elem=""
//                                                                 class="button__icon-anim is-diagonal-top"
//                                                             >
//                                                                 <div class="icon-regular opacity-0 w-embed">
//                                                                     <svg
//                                                                         aria-hidden="true"
//                                                                         role="img"
//                                                                         fill="currentColor"
//                                                                         xmlns="http://www.w3.org/2000/svg"
//                                                                         viewBox="0 0 24 24"
//                                                                         width="100%"
//                                                                         height="100%"
//                                                                     >
//                                                                         <path
//                                                                             fill-rule="evenodd"
//                                                                             d="M18.707 5.293a1 1 0 0 1 0 1.414l-12 12a1 1 0 0 1-1.414-1.414l12-12a1 1 0 0 1 1.414 0Z"
//                                                                             clip-rule="evenodd"
//                                                                         />
//                                                                         <path
//                                                                             fill="#fff"
//                                                                             fill-rule="evenodd"
//                                                                             d="M8 6a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v9a1 1 0 1 1-2 0V7H9a1 1 0 0 1-1-1Z"
//                                                                             clip-rule="evenodd"
//                                                                         />
//                                                                     </svg>
//                                                                 </div>
//                                                                 <div
//                                                                     class="icon-regular is-absolute is-diagonal-top w-embed"
//                                                                 >
//                                                                     <svg
//                                                                         aria-hidden="true"
//                                                                         role="img"
//                                                                         fill="currentColor"
//                                                                         xmlns="http://www.w3.org/2000/svg"
//                                                                         viewBox="0 0 24 24"
//                                                                         width="100%"
//                                                                         height="100%"
//                                                                     >
//                                                                         <path
//                                                                             fill-rule="evenodd"
//                                                                             d="M18.707 5.293a1 1 0 0 1 0 1.414l-12 12a1 1 0 0 1-1.414-1.414l12-12a1 1 0 0 1 1.414 0Z"
//                                                                             clip-rule="evenodd"
//                                                                         />
//                                                                         <path
//                                                                             fill="#fff"
//                                                                             fill-rule="evenodd"
//                                                                             d="M8 6a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v9a1 1 0 1 1-2 0V7H9a1 1 0 0 1-1-1Z"
//                                                                             clip-rule="evenodd"
//                                                                         />
//                                                                     </svg>
//                                                                 </div>
//                                                             </div>
//                                                         </div>
//                                                     </a>
//                                                     <a
//                                                         data-hover-prevent-responsive=""
//                                                         data-hover=""
//                                                         href="blog"
//                                                         class="footer__nav-link w-inline-block"
//                                                     >
//                                                         <div class="button__overflow">
//                                                             <div data-hover-elem="" class="button__texts">
//                                                                 <div class="button__text">Blog</div>
//                                                                 <div class="button__text is-absolute">Blog</div>
//                                                             </div>
//                                                         </div>
//                                                         <div class="overflow-hidden hide-tablet">
//                                                             <div
//                                                                 data-hover-elem=""
//                                                                 class="button__icon-anim is-diagonal-top"
//                                                             >
//                                                                 <div class="icon-regular opacity-0 w-embed">
//                                                                     <svg
//                                                                         aria-hidden="true"
//                                                                         role="img"
//                                                                         fill="currentColor"
//                                                                         xmlns="http://www.w3.org/2000/svg"
//                                                                         viewBox="0 0 24 24"
//                                                                         width="100%"
//                                                                         height="100%"
//                                                                     >
//                                                                         <path
//                                                                             fill-rule="evenodd"
//                                                                             d="M18.707 5.293a1 1 0 0 1 0 1.414l-12 12a1 1 0 0 1-1.414-1.414l12-12a1 1 0 0 1 1.414 0Z"
//                                                                             clip-rule="evenodd"
//                                                                         />
//                                                                         <path
//                                                                             fill="#fff"
//                                                                             fill-rule="evenodd"
//                                                                             d="M8 6a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v9a1 1 0 1 1-2 0V7H9a1 1 0 0 1-1-1Z"
//                                                                             clip-rule="evenodd"
//                                                                         />
//                                                                     </svg>
//                                                                 </div>
//                                                                 <div
//                                                                     class="icon-regular is-absolute is-diagonal-top w-embed"
//                                                                 >
//                                                                     <svg
//                                                                         aria-hidden="true"
//                                                                         role="img"
//                                                                         fill="currentColor"
//                                                                         xmlns="http://www.w3.org/2000/svg"
//                                                                         viewBox="0 0 24 24"
//                                                                         width="100%"
//                                                                         height="100%"
//                                                                     >
//                                                                         <path
//                                                                             fill-rule="evenodd"
//                                                                             d="M18.707 5.293a1 1 0 0 1 0 1.414l-12 12a1 1 0 0 1-1.414-1.414l12-12a1 1 0 0 1 1.414 0Z"
//                                                                             clip-rule="evenodd"
//                                                                         />
//                                                                         <path
//                                                                             fill="#fff"
//                                                                             fill-rule="evenodd"
//                                                                             d="M8 6a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v9a1 1 0 1 1-2 0V7H9a1 1 0 0 1-1-1Z"
//                                                                             clip-rule="evenodd"
//                                                                         />
//                                                                     </svg>
//                                                                 </div>
//                                                             </div>
//                                                         </div>
//                                                     </a>
//                                                 </div>
//                                             </nav>
//                                         </div>
//                                         <div
//                                             id="w-node-cdeddecc-b995-497a-639b-0edd64cdc754-64cdc730"
//                                             class="grid__block is-contacts"
//                                         >
//                                             <div class="footer-contact">
//                                                 <div class="footer__block">
//                                                     <div class="footer__title">Drop us a line</div>
//                                                     <div class="footer-contact__links">
//                                                         <a
//                                                             data-link-underline=""
//                                                             data-hover=""
//                                                             href="mailto:inquiry@halo-lab.com"
//                                                             class="footer-contact__link w-inline-block"
//                                                         >
//                                                             <div class="button__overflow">
//                                                                 <div data-hover-elem="" class="button__texts">
//                                                                     <div class="button__text">inquiry@halo-lab.com</div>
//                                                                     <div class="button__text is-absolute">
//                                                                         inquiry@halo-lab.com
//                                                                     </div>
//                                                                 </div>
//                                                             </div>
//                                                         </a>
//                                                     </div>
//                                                 </div>
//                                                 <div class="footer__block">
//                                                     <div class="footer__title">Call us</div>
//                                                     <div class="footer-contact__links">
//                                                         <a
//                                                             href="https://wa.me/12133378573"
//                                                             target="_blank"
//                                                             class="footer-contact__link w-inline-block"
//                                                         ><img
//                                                                 src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/63f8ed7e51bcb49b284c6e1e_icon-whatsapp.svg"
//                                                                 loading="lazy"
//                                                                 width="28"
//                                                                 height="28"
//                                                                 alt="whatsapp icon"
//                                                                 class="icon-regular"
//                                                             />
//                                                             <div
//                                                                 data-link-underline=""
//                                                                 data-hover=""
//                                                                 class="button__overflow"
//                                                             >
//                                                                 <div data-hover-elem="" class="button__texts">
//                                                                     <div class="button__text">+1 (213) 337-8573</div>
//                                                                     <div class="button__text is-absolute">
//                                                                         +1 (213) 337-8573
//                                                                     </div>
//                                                                 </div>
//                                                             </div>
//                                                         </a>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                         <div
//                                             id="w-node-cdeddecc-b995-497a-639b-0edd64cdc768-64cdc730"
//                                             class="grid__block is-logos"
//                                         >
//                                             <div class="footer-tech">
//                                                 <a
//                                                     href="https://clutch.co/profile/halo-lab#summary"
//                                                     target="_blank"
//                                                     class="footer-tech__link w-inline-block"
//                                                 ><img
//                                                         src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/64c14f7f41892adcb9d18482_footer-Clutch.svg"
//                                                         loading="lazy"
//                                                         width="182"
//                                                         height="72"
//                                                         alt="Clutch logo"
//                                                         class="footer-tech__img"
//                                                     /></a>
//                                                 <a
//                                                     href="https://www.goodfirms.co/company/halo-lab"
//                                                     target="_blank"
//                                                     class="footer-tech__link w-inline-block"
//                                                 ><img
//                                                         src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/648ac009f1b00eb246463608_footer-Goodfirms.svg"
//                                                         loading="lazy"
//                                                         width="182"
//                                                         height="72"
//                                                         alt="Goodfirms logo"
//                                                         class="footer-tech__img"
//                                                     /></a>
//                                                 <a
//                                                     href="https://www.designrush.com/agency/profile/halo-lab"
//                                                     target="_blank"
//                                                     class="footer-tech__link w-inline-block"
//                                                 ><img
//                                                         src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6639efc37f4f87f6087cf514_footer-DesignRush.svg"
//                                                         loading="lazy"
//                                                         width="182"
//                                                         height="72"
//                                                         alt=""
//                                                         class="footer-tech__img"
//                                                     /></a>
//                                                 <a
//                                                     href="https://dribbble.com/halolab"
//                                                     target="_blank"
//                                                     class="footer-tech__link w-inline-block"
//                                                 ><img
//                                                         src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/64bfea787bea1fb348f7a91a_footer-Dribble.svg"
//                                                         loading="lazy"
//                                                         width="182"
//                                                         height="72"
//                                                         alt="Dribble logo"
//                                                         class="footer-tech__img"
//                                                     /></a>
//                                                 <a
//                                                     href="https://webflow.com/@halolab"
//                                                     target="_blank"
//                                                     class="footer-tech__link w-inline-block"
//                                                 ><img
//                                                         src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/655387ab9d4690b9dfd58b88_footer-Webflow.svg"
//                                                         loading="lazy"
//                                                         width="182"
//                                                         height="72"
//                                                         alt="Webflow logo"
//                                                         class="footer-tech__img"
//                                                     /></a>
//                                                 <a
//                                                     href="https://prismic.io/hire-a-developer/halo-lab"
//                                                     target="_blank"
//                                                     class="footer-tech__link w-inline-block"
//                                                 ><img
//                                                         src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/648ac00a01cd6f265b088b8b_footer-Prismic.svg"
//                                                         loading="lazy"
//                                                         width="182"
//                                                         height="72"
//                                                         alt="Prismic logo"
//                                                         class="footer-tech__img"
//                                                     /></a>
//                                                 <a
//                                                     href="https://www.sanity.io/agency-partners/halo-lab"
//                                                     target="_blank"
//                                                     class="footer-tech__link w-inline-block"
//                                                 ><img
//                                                         src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/648ac009f1b00eb246463645_footer-Sanity.svg"
//                                                         loading="lazy"
//                                                         width="182"
//                                                         height="72"
//                                                         alt="Sanity logo"
//                                                         class="footer-tech__img"
//                                                     /></a>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div
//                                         data-hover="false"
//                                         data-delay="0"
//                                         class="dropdown-inter mod--footer w-dropdown"
//                                     >
//                                         <div class="dropdown__toggle mod--footer w-dropdown-toggle">
//                                             <div class="dropdown__title-wrap">
//                                                 <div class="text-color-white">Show all services</div>
//                                             </div>
//                                             <div class="dropdown__icon-wrap">
//                                                 <div data-dropdown-plus="" class="dropdown__icons">
//                                                     <div class="dropdown__icon is-open w-embed">
//                                                         <svg
//                                                             aria-hidden="true"
//                                                             role="img"
//                                                             fill="currentColor"
//                                                             xmlns="http://www.w3.org/2000/svg"
//                                                             viewBox="0 0 24 24"
//                                                             width="100%"
//                                                             height="100%"
//                                                         >
//                                                             <path
//                                                                 fill-rule="evenodd"
//                                                                 d="M12 4a1 1 0 0 1 1 1v14a1 1 0 1 1-2 0V5a1 1 0 0 1 1-1Z"
//                                                                 clip-rule="evenodd"
//                                                             />
//                                                             <path
//                                                                 fill-rule="evenodd"
//                                                                 d="M4 12a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1Z"
//                                                                 clip-rule="evenodd"
//                                                             />
//                                                         </svg>
//                                                     </div>
//                                                     <div class="dropdown__icon is-close w-embed">
//                                                         <svg
//                                                             aria-hidden="true"
//                                                             role="img"
//                                                             fill="currentColor"
//                                                             xmlns="http://www.w3.org/2000/svg"
//                                                             viewBox="0 0 24 24"
//                                                             width="100%"
//                                                             height="100%"
//                                                         >
//                                                             <path
//                                                                 fill-rule="evenodd"
//                                                                 d="M4 12a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1Z"
//                                                                 clip-rule="evenodd"
//                                                             />
//                                                         </svg>
//                                                     </div>
//                                                 </div>
//                                                 <div class="button__bg bg-color-white"></div>
//                                             </div>
//                                         </div>
//                                         <nav class="dropdown__list is-inter w-dropdown-list">
//                                             <div class="dropdown__content mod--footer-serv">
//                                                 <div class="footer-serv__block">
//                                                     <div
//                                                         class="text-size-14 letter-spacing-005 text-style-allcaps"
//                                                     >
//                                                         DESIGN
//                                                     </div>
//                                                     <ul role="list" class="footer-serv__list w-list-unstyled">
//                                                         <li class="footer-serv__list-item">
//                                                             <a
//                                                                 data-link-underline=""
//                                                                 data-hover=""
//                                                                 href="services/website-design-services"
//                                                                 class="footer__link w-inline-block"
//                                                             >
//                                                                 <div class="overflow-hidden">
//                                                                     <div data-hover-elem="" class="button__texts">
//                                                                         <div class="button__text">Web Design</div>
//                                                                         <div class="button__text is-absolute">
//                                                                             Web Design
//                                                                         </div>
//                                                                     </div>
//                                                                 </div>
//                                                             </a>
//                                                         </li>
//                                                         <li class="footer-serv__list-item">
//                                                             <a
//                                                                 data-link-underline=""
//                                                                 data-hover=""
//                                                                 href="services/saas-website-design"
//                                                                 class="footer__link w-inline-block"
//                                                             >
//                                                                 <div class="overflow-hidden">
//                                                                     <div
//                                                                         data-hover-elem=""
//                                                                         class="button__texts active"
//                                                                     >
//                                                                         <div class="button__text">
//                                                                             Saas Website Design
//                                                                         </div>
//                                                                         <div class="button__text is-absolute">
//                                                                             Saas Website Design
//                                                                         </div>
//                                                                     </div>
//                                                                 </div>
//                                                             </a>
//                                                         </li>
//                                                         <li class="footer-serv__list-item">
//                                                             <a
//                                                                 data-link-underline=""
//                                                                 data-hover=""
//                                                                 href="services/ui-ux-design"
//                                                                 class="footer__link w-inline-block"
//                                                             >
//                                                                 <div class="overflow-hidden">
//                                                                     <div data-hover-elem="" class="button__texts">
//                                                                         <div class="button__text">UI/UX Design</div>
//                                                                         <div class="button__text is-absolute">
//                                                                             UI/UX Design
//                                                                         </div>
//                                                                     </div>
//                                                                 </div>
//                                                             </a>
//                                                         </li>
//                                                         <li class="footer-serv__list-item">
//                                                             <a
//                                                                 data-link-underline=""
//                                                                 data-hover=""
//                                                                 href="services/responsive-website-design"
//                                                                 class="footer__link w-inline-block"
//                                                             >
//                                                                 <div class="overflow-hidden">
//                                                                     <div
//                                                                         data-hover-elem=""
//                                                                         class="button__texts active"
//                                                                     >
//                                                                         <div class="button__text">
//                                                                             Responsive Web Design
//                                                                         </div>
//                                                                         <div class="button__text is-absolute">
//                                                                             Responsive Web Design
//                                                                         </div>
//                                                                     </div>
//                                                                 </div>
//                                                             </a>
//                                                         </li>
//                                                         <li class="footer-serv__list-item">
//                                                             <a
//                                                                 data-link-underline=""
//                                                                 data-hover=""
//                                                                 href="services/mobile-application-design-services"
//                                                                 class="footer__link w-inline-block"
//                                                             >
//                                                                 <div class="overflow-hidden">
//                                                                     <div data-hover-elem="" class="button__texts">
//                                                                         <div class="button__text">Mobile App Design</div>
//                                                                         <div class="button__text is-absolute">
//                                                                             Mobile App Design
//                                                                         </div>
//                                                                     </div>
//                                                                 </div>
//                                                             </a>
//                                                         </li>
//                                                         <li class="footer-serv__list-item">
//                                                             <a
//                                                                 data-link-underline=""
//                                                                 data-hover=""
//                                                                 href="services/healthcare-medical-web-design"
//                                                                 class="footer__link w-inline-block"
//                                                             >
//                                                                 <div class="overflow-hidden">
//                                                                     <div
//                                                                         data-hover-elem=""
//                                                                         class="button__texts active"
//                                                                     >
//                                                                         <div class="button__text">
//                                                                             Healthcare Web Design
//                                                                         </div>
//                                                                         <div class="button__text is-absolute">
//                                                                             Healthcare Web Design
//                                                                         </div>
//                                                                     </div>
//                                                                 </div>
//                                                             </a>
//                                                         </li>
//                                                         <li class="footer-serv__list-item">
//                                                             <a
//                                                                 data-link-underline=""
//                                                                 data-hover=""
//                                                                 href="services/branding"
//                                                                 class="footer__link w-inline-block"
//                                                             >
//                                                                 <div class="overflow-hidden">
//                                                                     <div data-hover-elem="" class="button__texts">
//                                                                         <div class="button__text">
//                                                                             Branding for Startups
//                                                                         </div>
//                                                                         <div class="button__text is-absolute">
//                                                                             Branding for Startups
//                                                                         </div>
//                                                                     </div>
//                                                                 </div>
//                                                             </a>
//                                                         </li>
//                                                         <li class="footer-serv__list-item">
//                                                             <a
//                                                                 data-link-underline=""
//                                                                 data-hover=""
//                                                                 href="services/landing"
//                                                                 class="footer__link w-inline-block"
//                                                             >
//                                                                 <div class="overflow-hidden">
//                                                                     <div
//                                                                         data-hover-elem=""
//                                                                         class="button__texts active"
//                                                                     >
//                                                                         <div class="button__text">
//                                                                             Landing Website Design
//                                                                         </div>
//                                                                         <div class="button__text is-absolute">
//                                                                             Landing Website Design
//                                                                         </div>
//                                                                     </div>
//                                                                 </div>
//                                                             </a>
//                                                         </li>
//                                                         <li class="footer-serv__list-item">
//                                                             <a
//                                                                 data-link-underline=""
//                                                                 data-hover=""
//                                                                 href="services/ecommerce-website-design-services"
//                                                                 class="footer__link w-inline-block"
//                                                             >
//                                                                 <div class="overflow-hidden">
//                                                                     <div data-hover-elem="" class="button__texts">
//                                                                         <div class="button__text">
//                                                                             E-Commerce Web Design
//                                                                         </div>
//                                                                         <div class="button__text is-absolute">
//                                                                             E-Commerce Web Design
//                                                                         </div>
//                                                                     </div>
//                                                                 </div>
//                                                             </a>
//                                                         </li>
//                                                     </ul>
//                                                 </div>
//                                                 <div class="footer-serv__block">
//                                                     <div
//                                                         class="text-size-14 letter-spacing-005 text-style-allcaps"
//                                                     >
//                                                         Development
//                                                     </div>
//                                                     <ul role="list" class="footer-serv__list w-list-unstyled">
//                                                         <li class="footer-serv__list-item">
//                                                             <a
//                                                                 data-link-underline=""
//                                                                 data-hover=""
//                                                                 href="services/back-end-development-services"
//                                                                 class="footer__link w-inline-block"
//                                                             >
//                                                                 <div class="overflow-hidden">
//                                                                     <div
//                                                                         data-hover-elem=""
//                                                                         class="button__texts active"
//                                                                     >
//                                                                         <div class="button__text">
//                                                                             Back-end Development
//                                                                         </div>
//                                                                         <div class="button__text is-absolute">
//                                                                             Back-end Development
//                                                                         </div>
//                                                                     </div>
//                                                                 </div>
//                                                             </a>
//                                                         </li>
//                                                         <li class="footer-serv__list-item">
//                                                             <a
//                                                                 data-link-underline=""
//                                                                 data-hover=""
//                                                                 href="services/cms-development"
//                                                                 class="footer__link w-inline-block"
//                                                             >
//                                                                 <div class="overflow-hidden">
//                                                                     <div data-hover-elem="" class="button__texts">
//                                                                         <div class="button__text">CMS Development</div>
//                                                                         <div class="button__text is-absolute">
//                                                                             CMS Development
//                                                                         </div>
//                                                                     </div>
//                                                                 </div>
//                                                             </a>
//                                                         </li>
//                                                         <li class="footer-serv__list-item">
//                                                             <a
//                                                                 data-link-underline=""
//                                                                 data-hover=""
//                                                                 href="services/web-development-services"
//                                                                 class="footer__link w-inline-block"
//                                                             >
//                                                                 <div class="overflow-hidden">
//                                                                     <div
//                                                                         data-hover-elem=""
//                                                                         class="button__texts active"
//                                                                     >
//                                                                         <div class="button__text">Web Development</div>
//                                                                         <div class="button__text is-absolute">
//                                                                             Web Development
//                                                                         </div>
//                                                                     </div>
//                                                                 </div>
//                                                             </a>
//                                                         </li>
//                                                         <li class="footer-serv__list-item">
//                                                             <a
//                                                                 data-link-underline=""
//                                                                 data-hover=""
//                                                                 href="services/webflow-development-services"
//                                                                 class="footer__link w-inline-block"
//                                                             >
//                                                                 <div class="overflow-hidden">
//                                                                     <div data-hover-elem="" class="button__texts">
//                                                                         <div class="button__text">
//                                                                             Webflow Development
//                                                                         </div>
//                                                                         <div class="button__text is-absolute">
//                                                                             Webflow Development
//                                                                         </div>
//                                                                     </div>
//                                                                 </div>
//                                                             </a>
//                                                         </li>
//                                                         <li class="footer-serv__list-item">
//                                                             <a
//                                                                 data-link-underline=""
//                                                                 data-hover=""
//                                                                 href="services/front-end-development-services"
//                                                                 class="footer__link w-inline-block"
//                                                             >
//                                                                 <div class="overflow-hidden">
//                                                                     <div
//                                                                         data-hover-elem=""
//                                                                         class="button__texts active"
//                                                                     >
//                                                                         <div class="button__text">
//                                                                             Front-end Development
//                                                                         </div>
//                                                                         <div class="button__text is-absolute">
//                                                                             Front-end Development
//                                                                         </div>
//                                                                     </div>
//                                                                 </div>
//                                                             </a>
//                                                         </li>
//                                                         <li class="footer-serv__list-item">
//                                                             <a
//                                                                 data-link-underline=""
//                                                                 data-hover=""
//                                                                 href="services/node-js-development-services"
//                                                                 class="footer__link w-inline-block"
//                                                             >
//                                                                 <div class="overflow-hidden">
//                                                                     <div data-hover-elem="" class="button__texts">
//                                                                         <div class="button__text">
//                                                                             Node JS Development
//                                                                         </div>
//                                                                         <div class="button__text is-absolute">
//                                                                             Node JS Development
//                                                                         </div>
//                                                                     </div>
//                                                                 </div>
//                                                             </a>
//                                                         </li>
//                                                         <li class="footer-serv__list-item">
//                                                             <a
//                                                                 data-link-underline=""
//                                                                 data-hover=""
//                                                                 href="services/software-product-development"
//                                                                 class="footer__link w-inline-block"
//                                                             >
//                                                                 <div class="overflow-hidden">
//                                                                     <div
//                                                                         data-hover-elem=""
//                                                                         class="button__texts active"
//                                                                     >
//                                                                         <div class="button__text">
//                                                                             Software Product Development
//                                                                         </div>
//                                                                         <div class="button__text is-absolute">
//                                                                             Software Product Development
//                                                                         </div>
//                                                                     </div>
//                                                                 </div>
//                                                             </a>
//                                                         </li>
//                                                         <li class="footer-serv__list-item">
//                                                             <a
//                                                                 data-link-underline=""
//                                                                 data-hover=""
//                                                                 href="services/react-js-development-services"
//                                                                 class="footer__link w-inline-block"
//                                                             >
//                                                                 <div class="overflow-hidden">
//                                                                     <div data-hover-elem="" class="button__texts">
//                                                                         <div class="button__text">
//                                                                             React JS Development
//                                                                         </div>
//                                                                         <div class="button__text is-absolute">
//                                                                             React JS Development
//                                                                         </div>
//                                                                     </div>
//                                                                 </div>
//                                                             </a>
//                                                         </li>
//                                                         <li class="footer-serv__list-item">
//                                                             <a
//                                                                 data-link-underline=""
//                                                                 data-hover=""
//                                                                 href="services/prismic-development-services"
//                                                                 class="footer__link w-inline-block"
//                                                             >
//                                                                 <div class="overflow-hidden">
//                                                                     <div data-hover-elem="" class="button__texts">
//                                                                         <div class="button__text">
//                                                                             Prismic CMS Development
//                                                                         </div>
//                                                                         <div class="button__text is-absolute">
//                                                                             Prismic CMS Development
//                                                                         </div>
//                                                                     </div>
//                                                                 </div>
//                                                             </a>
//                                                         </li>
//                                                         <li class="footer-serv__list-item">
//                                                             <a
//                                                                 data-link-underline=""
//                                                                 data-hover=""
//                                                                 href="services/gatsby-development"
//                                                                 class="footer__link w-inline-block"
//                                                             >
//                                                                 <div class="overflow-hidden">
//                                                                     <div data-hover-elem="" class="button__texts">
//                                                                         <div class="button__text">Gatsby Development</div>
//                                                                         <div class="button__text is-absolute">
//                                                                             Gatsby Development
//                                                                         </div>
//                                                                     </div>
//                                                                 </div>
//                                                             </a>
//                                                         </li>
//                                                         <li class="footer-serv__list-item">
//                                                             <a
//                                                                 data-link-underline=""
//                                                                 data-hover=""
//                                                                 href="services/next-js-development"
//                                                                 class="footer__link w-inline-block"
//                                                             >
//                                                                 <div class="overflow-hidden">
//                                                                     <div data-hover-elem="" class="button__texts">
//                                                                         <div class="button__text">
//                                                                             Next JS Development
//                                                                         </div>
//                                                                         <div class="button__text is-absolute">
//                                                                             Next JS Development
//                                                                         </div>
//                                                                     </div>
//                                                                 </div>
//                                                             </a>
//                                                         </li>
//                                                         <li class="footer-serv__list-item">
//                                                             <a
//                                                                 data-link-underline=""
//                                                                 data-hover=""
//                                                                 href="services/sanity-cms-development"
//                                                                 class="footer__link w-inline-block"
//                                                             >
//                                                                 <div class="overflow-hidden">
//                                                                     <div data-hover-elem="" class="button__texts">
//                                                                         <div class="button__text">Sanity Development</div>
//                                                                         <div class="button__text is-absolute">
//                                                                             Sanity Development
//                                                                         </div>
//                                                                     </div>
//                                                                 </div>
//                                                             </a>
//                                                         </li>
//                                                         <li class="footer-serv__list-item">
//                                                             <a
//                                                                 data-link-underline=""
//                                                                 data-hover=""
//                                                                 href="services/vue-js-development"
//                                                                 class="footer__link w-inline-block"
//                                                             >
//                                                                 <div class="overflow-hidden">
//                                                                     <div data-hover-elem="" class="button__texts">
//                                                                         <div class="button__text">Vue JS Development</div>
//                                                                         <div class="button__text is-absolute">
//                                                                             Vue JS Development
//                                                                         </div>
//                                                                     </div>
//                                                                 </div>
//                                                             </a>
//                                                         </li>
//                                                     </ul>
//                                                 </div>
//                                                 <div class="footer-serv__block">
//                                                     <div
//                                                         class="text-size-14 letter-spacing-005 text-style-allcaps"
//                                                     >
//                                                         Marketing
//                                                     </div>
//                                                     <ul role="list" class="footer-serv__list w-list-unstyled">
//                                                         <li class="footer-serv__list-item">
//                                                             <a
//                                                                 data-link-underline=""
//                                                                 data-hover=""
//                                                                 href="services/search-engine-optimisation"
//                                                                 class="footer__link w-inline-block"
//                                                             >
//                                                                 <div class="overflow-hidden">
//                                                                     <div
//                                                                         data-hover-elem=""
//                                                                         class="button__texts active"
//                                                                     >
//                                                                         <div class="button__text">
//                                                                             Search Engine Optimisation
//                                                                         </div>
//                                                                         <div class="button__text is-absolute">
//                                                                             Search Engine Optimisation
//                                                                         </div>
//                                                                     </div>
//                                                                 </div>
//                                                             </a>
//                                                         </li>
//                                                         <li class="footer-serv__list-item">
//                                                             <a
//                                                                 data-link-underline=""
//                                                                 data-hover=""
//                                                                 href="services/services-media"
//                                                                 class="footer__link w-inline-block"
//                                                             >
//                                                                 <div class="overflow-hidden">
//                                                                     <div data-hover-elem="" class="button__texts">
//                                                                         <div class="button__text">
//                                                                             Social Media Design
//                                                                         </div>
//                                                                         <div class="button__text is-absolute">
//                                                                             Social Media Design
//                                                                         </div>
//                                                                     </div>
//                                                                 </div>
//                                                             </a>
//                                                         </li>
//                                                         <li class="footer-serv__list-item">
//                                                             <a
//                                                                 data-link-underline=""
//                                                                 data-hover=""
//                                                                 href="services/seo-audit"
//                                                                 class="footer__link w-inline-block"
//                                                             >
//                                                                 <div class="overflow-hidden">
//                                                                     <div
//                                                                         data-hover-elem=""
//                                                                         class="button__texts active"
//                                                                     >
//                                                                         <div class="button__text">SEO Audit</div>
//                                                                         <div class="button__text is-absolute">
//                                                                             SEO Audit
//                                                                         </div>
//                                                                     </div>
//                                                                 </div>
//                                                             </a>
//                                                         </li>
//                                                         <li class="footer-serv__list-item">
//                                                             <a
//                                                                 data-link-underline=""
//                                                                 data-hover=""
//                                                                 href="services/conversion-rate-optimization"
//                                                                 class="footer__link w-inline-block"
//                                                             >
//                                                                 <div class="overflow-hidden">
//                                                                     <div data-hover-elem="" class="button__texts">
//                                                                         <div class="button__text">
//                                                                             Conversion Rate Optimization
//                                                                         </div>
//                                                                         <div class="button__text is-absolute">
//                                                                             Conversion Rate Optimization
//                                                                         </div>
//                                                                     </div>
//                                                                 </div>
//                                                             </a>
//                                                         </li>
//                                                         <li class="footer-serv__list-item">
//                                                             <a
//                                                                 data-link-underline=""
//                                                                 data-hover=""
//                                                                 href="services/pitch"
//                                                                 class="footer__link w-inline-block"
//                                                             >
//                                                                 <div class="overflow-hidden">
//                                                                     <div
//                                                                         data-hover-elem=""
//                                                                         class="button__texts active"
//                                                                     >
//                                                                         <div class="button__text">Pitch Deck Design</div>
//                                                                         <div class="button__text is-absolute">
//                                                                             Pitch Deck Design
//                                                                         </div>
//                                                                     </div>
//                                                                 </div>
//                                                             </a>
//                                                         </li>
//                                                         <li class="footer-serv__list-item">
//                                                             <a
//                                                                 data-link-underline=""
//                                                                 data-hover=""
//                                                                 href="services/technical-seo"
//                                                                 class="footer__link w-inline-block"
//                                                             >
//                                                                 <div class="overflow-hidden">
//                                                                     <div data-hover-elem="" class="button__texts">
//                                                                         <div class="button__text">Technical SEO</div>
//                                                                         <div class="button__text is-absolute">
//                                                                             Technical SEO
//                                                                         </div>
//                                                                     </div>
//                                                                 </div>
//                                                             </a>
//                                                         </li>
//                                                         <li class="footer-serv__list-item">
//                                                             <a
//                                                                 data-link-underline=""
//                                                                 data-hover=""
//                                                                 href="services/content-marketing"
//                                                                 class="footer__link w-inline-block"
//                                                             >
//                                                                 <div class="overflow-hidden">
//                                                                     <div
//                                                                         data-hover-elem=""
//                                                                         class="button__texts active"
//                                                                     >
//                                                                         <div class="button__text">Content Marketing</div>
//                                                                         <div class="button__text is-absolute">
//                                                                             Content Marketing
//                                                                         </div>
//                                                                     </div>
//                                                                 </div>
//                                                             </a>
//                                                         </li>
//                                                         <li class="footer-serv__list-item">
//                                                             <a
//                                                                 data-link-underline=""
//                                                                 data-hover=""
//                                                                 href="services/local-seo"
//                                                                 class="footer__link w-inline-block"
//                                                             >
//                                                                 <div class="overflow-hidden">
//                                                                     <div data-hover-elem="" class="button__texts">
//                                                                         <div class="button__text">Local SEO</div>
//                                                                         <div class="button__text is-absolute">
//                                                                             Local SEO
//                                                                         </div>
//                                                                     </div>
//                                                                 </div>
//                                                             </a>
//                                                         </li>
//                                                         <li class="footer-serv__list-item">
//                                                             <a
//                                                                 data-link-underline=""
//                                                                 data-hover=""
//                                                                 href="services/technical-audit"
//                                                                 class="footer__link w-inline-block"
//                                                             >
//                                                                 <div class="overflow-hidden">
//                                                                     <div data-hover-elem="" class="button__texts">
//                                                                         <div class="button__text">Technical Audit</div>
//                                                                         <div class="button__text is-absolute">
//                                                                             Technical Audit
//                                                                         </div>
//                                                                     </div>
//                                                                 </div>
//                                                             </a>
//                                                         </li>
//                                                     </ul>
//                                                 </div>
//                                             </div>
//                                         </nav>
//                                     </div>
//                                     <div class="footer-copyright__links">
//                                         <div class="footer-copyright__reserved">
//                                             © Halo Lab. All rights reserved
//                                         </div>
//                                         <div
//                                             href="#policy"
//                                             data-remodal-target="cookie"
//                                             data-hover=""
//                                             data-link-underline=""
//                                             class="footer__link mod--terms is--cookies"
//                                         >
//                                             <div class="button__overflow">
//                                                 <div data-hover-elem="" class="button__texts">
//                                                     <div class="button__text is-absolute">Manage cookies</div>
//                                                     <div class="button__text">Manage cookies</div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                         <a
//                                             href="cookie-policy#halo-lab-website-terms-of-use"
//                                             data-link-underline=""
//                                             data-hover=""
//                                             class="footer__link mod--terms w-inline-block"
//                                         >
//                                             <div class="button__overflow">
//                                                 <div data-hover-elem="" class="button__texts">
//                                                     <div class="button__text is-absolute">
//                                                         Terms and Conditions
//                                                     </div>
//                                                     <div class="button__text">Terms and Conditions</div>
//                                                 </div>
//                                             </div>
//                                         </a>
//                                         <a
//                                             href="cookie-policy#halo-lab-privacy-policy"
//                                             data-link-underline=""
//                                             data-hover=""
//                                             class="footer__link mod--terms w-inline-block"
//                                         >
//                                             <div class="button__overflow">
//                                                 <div data-hover-elem="" class="button__texts">
//                                                     <div class="button__text is-absolute">Privacy Policy</div>
//                                                     <div class="button__text">Privacy Policy</div>
//                                                 </div>
//                                             </div>
//                                         </a>
//                                         <div class="footer-copyright__line"></div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div class="cursor-wrap pointer-events-off">
//                                 <div class="cursor-move">
//                                     <div data-cursor-works="" class="cursor-works active">
//                                         <div class="icon-regular w-embed">
//                                             <svg
//                                                 aria-hidden="true"
//                                                 role="img"
//                                                 fill="currentColor"
//                                                 xmlns="http://www.w3.org/2000/svg"
//                                                 viewBox="0 0 24 24"
//                                                 width="100%"
//                                                 height="100%"
//                                             >
//                                                 <path
//                                                     fill-rule="evenodd"
//                                                     d="M18.707 5.293a1 1 0 0 1 0 1.414l-12 12a1 1 0 0 1-1.414-1.414l12-12a1 1 0 0 1 1.414 0Z"
//                                                     clip-rule="evenodd"
//                                                 />
//                                                 <path
//                                                     fill-rule="evenodd"
//                                                     d="M8 6a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v9a1 1 0 1 1-2 0V7H9a1 1 0 0 1-1-1Z"
//                                                     clip-rule="evenodd"
//                                                 />
//                                             </svg>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div class="modals">
//                                 <div data-remodal-id="error" class="remodal is--global">
//                                     <div class="remodal__container mod--error">
//                                         <div class="remodal__close">
//                                             <div
//                                                 data-hover-elem=""
//                                                 data-hover="prevent-responsive"
//                                                 data-remodal-action="close"
//                                                 class="button-close active"
//                                             >
//                                                 <div class="button-close__icon w-embed">
//                                                     <svg
//                                                         aria-hidden="true"
//                                                         role="img"
//                                                         fill="currentColor"
//                                                         xmlns="http://www.w3.org/2000/svg"
//                                                         viewBox="0 0 24 24"
//                                                         width="100%"
//                                                         height="100%"
//                                                     >
//                                                         <path
//                                                             fill-rule="evenodd"
//                                                             d="M18.895 5.106a1 1 0 0 1 0 1.414L6.52 18.894a1 1 0 0 1-1.414-1.414L17.48 5.106a1 1 0 0 1 1.415 0Z"
//                                                             clip-rule="evenodd"
//                                                         />
//                                                         <path
//                                                             fill-rule="evenodd"
//                                                             d="M5.105 5.106a1 1 0 0 1 1.415 0L18.894 17.48a1 1 0 0 1-1.414 1.414L5.105 6.52a1 1 0 0 1 0-1.414Z"
//                                                             clip-rule="evenodd"
//                                                         />
//                                                     </svg>
//                                                 </div>
//                                                 <div
//                                                     data-hover-elem=""
//                                                     class="button__bg bg-color-white active"
//                                                 ></div>
//                                             </div>
//                                         </div>
//                                         <div data-mask="error" class="error__video w-embed">
//                                             <video
//                                                 class="error__video"
//                                                 autoplay
//                                                 loop
//                                                 muted
//                                                 playsinline
//                                                 loading="lazy"
//                                             >
//                                                 <source
//                                                     src="https://d3vlq52qrgdnc2.cloudfront.net/Form-Error.webm"
//                                                     type="video/webm"
//                                                 />
//                                                 <source
//                                                     src="https://d3vlq52qrgdnc2.cloudfront.net/Form-Error.mp4"
//                                                     type="video/mp4"
//                                                 />
//                                             </video>
//                                         </div>
//                                         <div class="heading-6 mod--modal-error">
//                                             Hmm...something went wrong. Please
//                                             <span class="text-style-nowrap"
//                                             >try again <strong class="emoji-pray is-h6"> </strong></span
//                                             >
//                                         </div>
//                                         <div
//                                             href="#hero"
//                                             data-remodal-action="close"
//                                             data-hover=""
//                                             class="button"
//                                         >
//                                             <div class="button__overflow">
//                                                 <div data-hover-elem="" class="button__texts">
//                                                     <div class="button__text">SEND AGAIN</div>
//                                                     <div class="button__text is-absolute">SEND AGAIN</div>
//                                                 </div>
//                                             </div>
//                                             <div data-hover-elem="" class="button__icons is-white">
//                                                 <div data-hover-elem="" class="button__icon-anim">
//                                                     <div data-hover-elem="" class="icon-small w-embed">
//                                                         <svg
//                                                             aria-hidden="true"
//                                                             role="img"
//                                                             fill="currentColor"
//                                                             xmlns="http://www.w3.org/2000/svg"
//                                                             viewBox="0 0 16 16"
//                                                             width="100%"
//                                                             height="100%"
//                                                         >
//                                                             <path
//                                                                 fill-rule="evenodd"
//                                                                 d="M14.666 1.668a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4a1 1 0 1 1 0-2h3v-3a1 1 0 0 1 1-1Z"
//                                                                 clip-rule="evenodd"
//                                                             />
//                                                             <path
//                                                                 fill-rule="evenodd"
//                                                                 d="M10.873 4.466a5 5 0 1 0 1.178 5.2 1 1 0 0 1 1.886.666 7 7 0 1 1-1.66-7.291l3.076 2.897a1 1 0 1 1-1.371 1.456l-3.087-2.907a1.034 1.034 0 0 1-.022-.021Z"
//                                                                 clip-rule="evenodd"
//                                                             />
//                                                         </svg>
//                                                     </div>
//                                                     <div
//                                                         data-hover-elem=""
//                                                         class="icon-small is-absolute w-embed"
//                                                     >
//                                                         <svg
//                                                             aria-hidden="true"
//                                                             role="img"
//                                                             fill="currentColor"
//                                                             xmlns="http://www.w3.org/2000/svg"
//                                                             viewBox="0 0 16 16"
//                                                             width="100%"
//                                                             height="100%"
//                                                         >
//                                                             <path
//                                                                 fill-rule="evenodd"
//                                                                 d="M14.666 1.668a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4a1 1 0 1 1 0-2h3v-3a1 1 0 0 1 1-1Z"
//                                                                 clip-rule="evenodd"
//                                                             />
//                                                             <path
//                                                                 fill-rule="evenodd"
//                                                                 d="M10.873 4.466a5 5 0 1 0 1.178 5.2 1 1 0 0 1 1.886.666 7 7 0 1 1-1.66-7.291l3.076 2.897a1 1 0 1 1-1.371 1.456l-3.087-2.907a1.034 1.034 0 0 1-.022-.021Z"
//                                                                 clip-rule="evenodd"
//                                                             />
//                                                         </svg>
//                                                     </div>
//                                                 </div>
//                                                 <div data-hover-elem="" class="button__bg"></div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div fs-cc="banner" class="banner-cookie">
//                                     <div class="container mod--banner-terms">
//                                         <div class="button-wrap mod--banner-terms">
//                                             <a
//                                                 fs-cc="close"
//                                                 data-hover=""
//                                                 data-remodal-target="cookie"
//                                                 href="projects?be99beb4_page=4#"
//                                                 class="button is-small-simple is-deny w-inline-block"
//                                             >
//                                                 <div class="button__overflow">
//                                                     <div data-hover-elem="" class="button__texts">
//                                                         <div class="button__text">Customize</div>
//                                                         <div class="button__text is-absolute">Customize</div>
//                                                     </div>
//                                                 </div>
//                                             </a>
//                                             <a
//                                                 data-hover=""
//                                                 fs-cc="allow"
//                                                 href="projects?be99beb4_page=4#"
//                                                 class="button is-small-simple w-inline-block"
//                                             >
//                                                 <div class="button__overflow">
//                                                     <div data-hover-elem="" class="button__texts">
//                                                         <div class="button__text">Accept</div>
//                                                         <div class="button__text is-absolute">Accept</div>
//                                                     </div>
//                                                 </div>
//                                             </a>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div
//                                     data-lenis-prevent=""
//                                     data-remodal-id="cookie"
//                                     class="remodal is--global is--scroll"
//                                 >
//                                     <div class="remodal__scroll">
//                                         <div class="remodal__container">
//                                             <div class="remodal__close">
//                                                 <div
//                                                     data-hover-elem=""
//                                                     data-hover="prevent-responsive"
//                                                     data-remodal-action="close"
//                                                     class="button-close"
//                                                 >
//                                                     <div class="button-close__icon w-embed">
//                                                         <svg
//                                                             aria-hidden="true"
//                                                             role="img"
//                                                             fill="currentColor"
//                                                             xmlns="http://www.w3.org/2000/svg"
//                                                             viewBox="0 0 24 24"
//                                                             width="100%"
//                                                             height="100%"
//                                                         >
//                                                             <path
//                                                                 fill-rule="evenodd"
//                                                                 d="M18.895 5.106a1 1 0 0 1 0 1.414L6.52 18.894a1 1 0 0 1-1.414-1.414L17.48 5.106a1 1 0 0 1 1.415 0Z"
//                                                                 clip-rule="evenodd"
//                                                             />
//                                                             <path
//                                                                 fill-rule="evenodd"
//                                                                 d="M5.105 5.106a1 1 0 0 1 1.415 0L18.894 17.48a1 1 0 0 1-1.414 1.414L5.105 6.52a1 1 0 0 1 0-1.414Z"
//                                                                 clip-rule="evenodd"
//                                                             />
//                                                         </svg>
//                                                     </div>
//                                                     <div
//                                                         data-hover-elem=""
//                                                         class="button__bg bg-color-white"
//                                                     ></div>
//                                                 </div>
//                                             </div>
//                                             <div fs-cc="preferences" class="form-wrapper w-form">
//                                                 <form
//                                                     method="get"
//                                                     data-style-checkbox="switcher"
//                                                     name="wf-form-Cookie-Preferences"
//                                                     data-name="Cookie Preferences"
//                                                     id="wf-form-Cookie-Preferences"
//                                                     data-form-default=""
//                                                     class="form"
//                                                     data-wf-page-id="65e02e1378aeac8c4c4d9bfe"
//                                                     data-wf-element-id="da09826c-7386-e772-72f3-900f8171a8e6"
//                                                 >
//                                                     <div class="cookie-modal__top">
//                                                         <div class="remodal__heading">
//                                                             Cookie and Privacy Settings
//                                                         </div>
//                                                         <div class="text-color-grey">
//                                                             We use cookies for various purposes to improve your
//                                                             online experience on our platform. See
//                                                             <a href="cookie-policy" class="text-style-underline"
//                                                             >Privacy Policy</a
//                                                             >
//                                                             for more details.
//                                                         </div>
//                                                         <div class="cookie-modal__buttons">
//                                                             <div
//                                                                 href="#hero"
//                                                                 data-remodal-action="close"
//                                                                 data-hover=""
//                                                                 fs-cc="deny"
//                                                                 class="button is-small-simple is-border-grey is-flex-grow"
//                                                             >
//                                                                 <div class="button__overflow">
//                                                                     <div data-hover-elem="" class="button__texts">
//                                                                         <div class="button__text">Reject all cookies</div>
//                                                                         <div class="button__text is-absolute">
//                                                                             Reject all cookies
//                                                                         </div>
//                                                                     </div>
//                                                                 </div>
//                                                             </div>
//                                                             <div
//                                                                 href="#hero"
//                                                                 data-remodal-action="close"
//                                                                 data-hover=""
//                                                                 fs-cc="allow"
//                                                                 class="button is-small-simple bg-color-black is-flex-grow"
//                                                             >
//                                                                 <div class="button__overflow">
//                                                                     <div data-hover-elem="" class="button__texts">
//                                                                         <div class="button__text">Accept all cookies</div>
//                                                                         <div class="button__text is-absolute">
//                                                                             Accept all cookies
//                                                                         </div>
//                                                                     </div>
//                                                                 </div>
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                     <div class="cookie-modal__body">
//                                                         <div class="cookie-modal__form-heading">
//                                                             Change my preferences
//                                                         </div>
//                                                         <div
//                                                             data-dropdown-cookie=""
//                                                             class="dropdown mod--cookie-form"
//                                                         >
//                                                             <div class="dropdown__toggle mod--cookie-form">
//                                                                 <div
//                                                                     data-dropdown-cookie-toggle=""
//                                                                     class="dropdown__title-wrap mod--cookie-form"
//                                                                 >
//                                                                     <div class="dropdown__icon-wrap">
//                                                                         <div
//                                                                             data-dropdown-plus=""
//                                                                             class="dropdown__icons"
//                                                                         >
//                                                                             <div class="dropdown__icon is-open w-embed">
//                                                                                 <svg
//                                                                                     aria-hidden="true"
//                                                                                     role="img"
//                                                                                     fill="currentColor"
//                                                                                     xmlns="http://www.w3.org/2000/svg"
//                                                                                     viewBox="0 0 24 24"
//                                                                                     width="100%"
//                                                                                     height="100%"
//                                                                                 >
//                                                                                     <path
//                                                                                         fill-rule="evenodd"
//                                                                                         d="M12 4a1 1 0 0 1 1 1v14a1 1 0 1 1-2 0V5a1 1 0 0 1 1-1Z"
//                                                                                         clip-rule="evenodd"
//                                                                                     />
//                                                                                     <path
//                                                                                         fill-rule="evenodd"
//                                                                                         d="M4 12a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1Z"
//                                                                                         clip-rule="evenodd"
//                                                                                     />
//                                                                                 </svg>
//                                                                             </div>
//                                                                             <div class="dropdown__icon is-close w-embed">
//                                                                                 <svg
//                                                                                     aria-hidden="true"
//                                                                                     role="img"
//                                                                                     fill="currentColor"
//                                                                                     xmlns="http://www.w3.org/2000/svg"
//                                                                                     viewBox="0 0 24 24"
//                                                                                     width="100%"
//                                                                                     height="100%"
//                                                                                 >
//                                                                                     <path
//                                                                                         fill-rule="evenodd"
//                                                                                         d="M4 12a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1Z"
//                                                                                         clip-rule="evenodd"
//                                                                                     />
//                                                                                 </svg>
//                                                                             </div>
//                                                                         </div>
//                                                                         <div class="button__bg bg-color-white"></div>
//                                                                     </div>
//                                                                     <div class="dropdown__title text-weight-medium">
//                                                                         Necessary cookies (always active)
//                                                                     </div>
//                                                                 </div>
//                                                                 <label
//                                                                     class="w-checkbox cookie-form__checkbox-label pointer-events-off"
//                                                                 ><input
//                                                                         type="checkbox"
//                                                                         name="Essential-2"
//                                                                         id="Essential-2"
//                                                                         data-name="Essential 2"
//                                                                         class="w-checkbox-input hide"
//                                                                         checked="" /><span
//                                                                             class="cookie-form__checkbox-span pointer-events-off w-form-label"
//                                                                             for="Essential-2"
//                                                                         >
//                                                                     </span
//                                                                     ></label>
//                                                             </div>
//                                                             <div class="dropdown__list">
//                                                                 <div class="cookie-form__rich w-richtext">
//                                                                     <p>
//                                                                         We use necessary cookies for smooth functionality
//                                                                         like page navigation and secure access. They are
//                                                                         activated by your actions, such as adjusting
//                                                                         settings or logging in.
//                                                                     </p>
//                                                                 </div>
//                                                             </div>
//                                                         </div>
//                                                         <div
//                                                             data-dropdown-cookie=""
//                                                             class="dropdown mod--cookie-form"
//                                                         >
//                                                             <div class="dropdown__toggle mod--cookie-form">
//                                                                 <div
//                                                                     data-dropdown-cookie-toggle=""
//                                                                     class="dropdown__title-wrap mod--cookie-form"
//                                                                 >
//                                                                     <div class="dropdown__icon-wrap">
//                                                                         <div
//                                                                             data-dropdown-plus=""
//                                                                             class="dropdown__icons"
//                                                                         >
//                                                                             <div class="dropdown__icon is-open w-embed">
//                                                                                 <svg
//                                                                                     aria-hidden="true"
//                                                                                     role="img"
//                                                                                     fill="currentColor"
//                                                                                     xmlns="http://www.w3.org/2000/svg"
//                                                                                     viewBox="0 0 24 24"
//                                                                                     width="100%"
//                                                                                     height="100%"
//                                                                                 >
//                                                                                     <path
//                                                                                         fill-rule="evenodd"
//                                                                                         d="M12 4a1 1 0 0 1 1 1v14a1 1 0 1 1-2 0V5a1 1 0 0 1 1-1Z"
//                                                                                         clip-rule="evenodd"
//                                                                                     />
//                                                                                     <path
//                                                                                         fill-rule="evenodd"
//                                                                                         d="M4 12a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1Z"
//                                                                                         clip-rule="evenodd"
//                                                                                     />
//                                                                                 </svg>
//                                                                             </div>
//                                                                             <div class="dropdown__icon is-close w-embed">
//                                                                                 <svg
//                                                                                     aria-hidden="true"
//                                                                                     role="img"
//                                                                                     fill="currentColor"
//                                                                                     xmlns="http://www.w3.org/2000/svg"
//                                                                                     viewBox="0 0 24 24"
//                                                                                     width="100%"
//                                                                                     height="100%"
//                                                                                 >
//                                                                                     <path
//                                                                                         fill-rule="evenodd"
//                                                                                         d="M4 12a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1Z"
//                                                                                         clip-rule="evenodd"
//                                                                                     />
//                                                                                 </svg>
//                                                                             </div>
//                                                                         </div>
//                                                                         <div class="button__bg bg-color-white"></div>
//                                                                     </div>
//                                                                     <div class="dropdown__title text-weight-medium">
//                                                                         Functional cookies
//                                                                     </div>
//                                                                 </div>
//                                                                 <label class="w-checkbox cookie-form__checkbox-label"
//                                                                 ><input
//                                                                         type="checkbox"
//                                                                         name="Personalization-2"
//                                                                         id="Personalization-2"
//                                                                         data-name="Personalization 2"
//                                                                         fs-cc-checkbox="personalization"
//                                                                         class="w-checkbox-input hide" /><span
//                                                                             class="cookie-form__checkbox-span w-form-label"
//                                                                             for="Personalization-2"
//                                                                         >
//                                                                     </span
//                                                                     ></label>
//                                                             </div>
//                                                             <div class="dropdown__list">
//                                                                 <div class="cookie-form__rich w-richtext">
//                                                                     <p>
//                                                                         Functionality cookies on our website aim to
//                                                                         personalize your experience and recall your
//                                                                         selections. For example, they may retain your
//                                                                         language preferences or login details.
//                                                                     </p>
//                                                                 </div>
//                                                             </div>
//                                                         </div>
//                                                         <div
//                                                             data-dropdown-cookie=""
//                                                             class="dropdown mod--cookie-form"
//                                                         >
//                                                             <div class="dropdown__toggle mod--cookie-form">
//                                                                 <div
//                                                                     data-dropdown-cookie-toggle=""
//                                                                     class="dropdown__title-wrap mod--cookie-form"
//                                                                 >
//                                                                     <div class="dropdown__icon-wrap">
//                                                                         <div
//                                                                             data-dropdown-plus=""
//                                                                             class="dropdown__icons"
//                                                                         >
//                                                                             <div class="dropdown__icon is-open w-embed">
//                                                                                 <svg
//                                                                                     aria-hidden="true"
//                                                                                     role="img"
//                                                                                     fill="currentColor"
//                                                                                     xmlns="http://www.w3.org/2000/svg"
//                                                                                     viewBox="0 0 24 24"
//                                                                                     width="100%"
//                                                                                     height="100%"
//                                                                                 >
//                                                                                     <path
//                                                                                         fill-rule="evenodd"
//                                                                                         d="M12 4a1 1 0 0 1 1 1v14a1 1 0 1 1-2 0V5a1 1 0 0 1 1-1Z"
//                                                                                         clip-rule="evenodd"
//                                                                                     />
//                                                                                     <path
//                                                                                         fill-rule="evenodd"
//                                                                                         d="M4 12a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1Z"
//                                                                                         clip-rule="evenodd"
//                                                                                     />
//                                                                                 </svg>
//                                                                             </div>
//                                                                             <div class="dropdown__icon is-close w-embed">
//                                                                                 <svg
//                                                                                     aria-hidden="true"
//                                                                                     role="img"
//                                                                                     fill="currentColor"
//                                                                                     xmlns="http://www.w3.org/2000/svg"
//                                                                                     viewBox="0 0 24 24"
//                                                                                     width="100%"
//                                                                                     height="100%"
//                                                                                 >
//                                                                                     <path
//                                                                                         fill-rule="evenodd"
//                                                                                         d="M4 12a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1Z"
//                                                                                         clip-rule="evenodd"
//                                                                                     />
//                                                                                 </svg>
//                                                                             </div>
//                                                                         </div>
//                                                                         <div class="button__bg bg-color-white"></div>
//                                                                     </div>
//                                                                     <div class="dropdown__title text-weight-medium">
//                                                                         Analytics cookies
//                                                                     </div>
//                                                                 </div>
//                                                                 <label class="w-checkbox cookie-form__checkbox-label"
//                                                                 ><input
//                                                                         type="checkbox"
//                                                                         name="analytics-2"
//                                                                         id="analytics-2"
//                                                                         data-name="Analytics 2"
//                                                                         fs-cc-checkbox="analytics"
//                                                                         class="w-checkbox-input hide" /><span
//                                                                             class="cookie-form__checkbox-span w-form-label"
//                                                                             for="analytics-2"
//                                                                         >
//                                                                     </span
//                                                                     ></label>
//                                                             </div>
//                                                             <div class="dropdown__list">
//                                                                 <div class="cookie-form__rich w-richtext">
//                                                                     <p>
//                                                                         These cookies help us to learn engagement patterns
//                                                                         on our website. Through data collection and
//                                                                         reporting of site usage statistics, they offer
//                                                                         valuable insights into user behavior.
//                                                                     </p>
//                                                                 </div>
//                                                             </div>
//                                                         </div>
//                                                         <div
//                                                             data-dropdown-cookie=""
//                                                             class="dropdown mod--cookie-form is--last"
//                                                         >
//                                                             <div class="dropdown__toggle mod--cookie-form">
//                                                                 <div
//                                                                     data-dropdown-cookie-toggle=""
//                                                                     class="dropdown__title-wrap mod--cookie-form"
//                                                                 >
//                                                                     <div class="dropdown__icon-wrap">
//                                                                         <div
//                                                                             data-dropdown-plus=""
//                                                                             class="dropdown__icons"
//                                                                         >
//                                                                             <div class="dropdown__icon is-open w-embed">
//                                                                                 <svg
//                                                                                     aria-hidden="true"
//                                                                                     role="img"
//                                                                                     fill="currentColor"
//                                                                                     xmlns="http://www.w3.org/2000/svg"
//                                                                                     viewBox="0 0 24 24"
//                                                                                     width="100%"
//                                                                                     height="100%"
//                                                                                 >
//                                                                                     <path
//                                                                                         fill-rule="evenodd"
//                                                                                         d="M12 4a1 1 0 0 1 1 1v14a1 1 0 1 1-2 0V5a1 1 0 0 1 1-1Z"
//                                                                                         clip-rule="evenodd"
//                                                                                     />
//                                                                                     <path
//                                                                                         fill-rule="evenodd"
//                                                                                         d="M4 12a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1Z"
//                                                                                         clip-rule="evenodd"
//                                                                                     />
//                                                                                 </svg>
//                                                                             </div>
//                                                                             <div class="dropdown__icon is-close w-embed">
//                                                                                 <svg
//                                                                                     aria-hidden="true"
//                                                                                     role="img"
//                                                                                     fill="currentColor"
//                                                                                     xmlns="http://www.w3.org/2000/svg"
//                                                                                     viewBox="0 0 24 24"
//                                                                                     width="100%"
//                                                                                     height="100%"
//                                                                                 >
//                                                                                     <path
//                                                                                         fill-rule="evenodd"
//                                                                                         d="M4 12a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1Z"
//                                                                                         clip-rule="evenodd"
//                                                                                     />
//                                                                                 </svg>
//                                                                             </div>
//                                                                         </div>
//                                                                         <div class="button__bg bg-color-white"></div>
//                                                                     </div>
//                                                                     <div class="dropdown__title text-weight-medium">
//                                                                         Advertising cookies
//                                                                     </div>
//                                                                 </div>
//                                                                 <label class="w-checkbox cookie-form__checkbox-label"
//                                                                 ><input
//                                                                         type="checkbox"
//                                                                         name="Marketing-2"
//                                                                         id="Marketing-2"
//                                                                         data-name="Marketing 2"
//                                                                         fs-cc-checkbox="marketing"
//                                                                         class="w-checkbox-input hide" /><span
//                                                                             class="cookie-form__checkbox-span w-form-label"
//                                                                             for="Marketing-2"
//                                                                         >
//                                                                     </span
//                                                                     ></label>
//                                                             </div>
//                                                             <div class="dropdown__list">
//                                                                 <div class="cookie-form__rich w-richtext">
//                                                                     <p>
//                                                                         We use advertising cookies to improve your
//                                                                         experience by showing relevant ads based on your
//                                                                         interests. This ensures a more enjoyable
//                                                                         interaction with our brand across platforms.
//                                                                     </p>
//                                                                 </div>
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                     <div
//                                                         href="#hero"
//                                                         fs-cc="submit"
//                                                         data-hover=""
//                                                         data-remodal-action="close"
//                                                         class="button is-small-simple"
//                                                     >
//                                                         <div class="button__overflow">
//                                                             <div data-hover-elem="" class="button__texts">
//                                                                 <div class="button__text">
//                                                                     Confirm
//                                                                     <span class="hide-mobile-portrait"
//                                                                     >my preferences </span
//                                                                     >and close
//                                                                 </div>
//                                                                 <div class="button__text is-absolute">
//                                                                     Confirm
//                                                                     <span class="hide-mobile-portrait"
//                                                                     >my preferences </span
//                                                                     >and close
//                                                                 </div>
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                 </form>
//                                                 <div class="w-form-done">
//                                                     <div>Thank you! Your submission has been received!</div>
//                                                 </div>
//                                                 <div class="w-form-fail">
//                                                     <div>
//                                                         Oops! Something went wrong while submitting the form.
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </footer>
//                     </div>
//                 </body>           </main>
//         </>
//     );
// };

// export default About;
