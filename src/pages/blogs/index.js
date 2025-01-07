import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'

const index = () => {
    return (
        <>
            <Navbar />
            <main className="main">
                <section className="section mod--hero">
                    <div className="container">
                        <div data-anim-trigger="load" className="columns mod--blog-hero">
                            <div
                                data-anim-delay=""
                                className="columns__col mod--blog-hero is-1 anim"
                            >
                                <div
                                    data-submit-parent=""
                                    className="post-card__img-link is-big is-big-border"
                                >
                                    <div className="heading-wrap is-post-big-border">
                                        <h1 className="heading-1 mod--blog-hero">Useful articles</h1>
                                    </div>
                                    <div className="post-big-border__video-block">
                                        <div
                                            data-submit-anim=""
                                            className="post-big-border__video anim w-embed"
                                        >
                                            <video
                                                style={{ display: "block" }}
                                                className="post-big-border__video"
                                                autoplay
                                                loop
                                                muted
                                                playsinline
                                            >
                                                <source
                                                    src="https://d3vlq52qrgdnc2.cloudfront.net/Blog-Hero-Girl.webm"
                                                    type="video/webm"
                                                />
                                                <source
                                                    src="https://d3vlq52qrgdnc2.cloudfront.net/Blog-Hero-Girl.mp4"
                                                    type="video/mp4"
                                                />
                                            </video>
                                        </div>
                                        <img
                                            src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/64aa5c009aeb0c7398121247_form-success_join.webp"
                                            loading="lazy"
                                            data-submit-anim=""
                                            alt="succes icon"
                                            className="post-big-border__video is-success anim"
                                        />
                                        <div className="post-big-border__video-text">
                                            Stay in the loop and keep up with all our news and
                                            updates!
                                        </div>
                                    </div>
                                    <div className="post-big-border__bottom">
                                        <div className="form-wrapper mod--post-big w-form">
                                            <form
                                                method="get"
                                                name="wf-form-Subscribe-blog"
                                                data-name="Subscribe blog"
                                                data-success-hide=""
                                                target="form-subs"
                                                id="wf-form-Subscribe-blog"
                                                className="form"
                                                data-wf-page-id="65e02e1378aeac8c4c4d9b84"
                                                data-wf-element-id="280af6a1-58ae-1332-482b-1d09236bc546"
                                            >
                                                <div className="form-subs__content is-subs">
                                                    <div className="input-wrap">
                                                        <input
                                                            className="input mod--blog w-input"
                                                            maxlength="256"
                                                            name="Email"
                                                            data-name="Email"
                                                            placeholder="Join us, share your email"
                                                            type="email"
                                                            id="subs-email"
                                                            required=""
                                                        />
                                                        <div
                                                            data-submit-anim=""
                                                            className="form__submit-result pointer-events-off anim"
                                                        >
                                                            <div className="form__submit-result-text mod--blog">
                                                                Thank you for subscribing!
                                                            </div>
                                                        </div>
                                                        <div className="form__label-invalid is-subs anim">
                                                            Please, enter a valid email
                                                        </div>
                                                    </div>
                                                    <div data-hover="" className="form-submit-wrap mod--blog">
                                                        <a
                                                            href="blog?b1d3bc67_page=12#"
                                                            className="button mod--blog w-inline-block"
                                                        >
                                                            <div className="button__overflow">
                                                                <div data-hover-elem="" className="button__texts">
                                                                    <div className="button__text is-absolute">
                                                                        subscribe
                                                                    </div>
                                                                    <div className="button__text">subscribe</div>
                                                                </div>
                                                            </div>
                                                            <div
                                                                data-submit-anim=""
                                                                className="submit__checked anim"
                                                            >
                                                                <div
                                                                    data-submit-anim=""
                                                                    className="submit__checked-anim anim"
                                                                >
                                                                    <img
                                                                        loading="eager"
                                                                        src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6481d9a928737610f9397707_icon-%D1%81keck.svg"
                                                                        alt=""
                                                                        className="submit__checked-icon"
                                                                    />
                                                                </div>
                                                            </div> </a
                                                        ><input
                                                            type="submit"
                                                            data-wait="Please wait..."
                                                            className="form-submit is-absolute w-button"
                                                            value="Submit"
                                                        />
                                                    </div>
                                                </div>
                                            </form>
                                            <div className="form-success w-form-done">
                                                <div>Thank you for subscribing!</div>
                                            </div>
                                            <div className="form-error w-form-fail">
                                                <div>Hmm...something went wrong.</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                data-anim-delay="100"
                                className="columns__col mod--blog-hero hide-mobile-portrait anim"
                            >
                                <div className="collection mod--blog-hero w-dyn-list">
                                    <div
                                        role="list"
                                        className="collection__list mod--blog-hero w-dyn-items"
                                    >
                                        <div
                                            role="listitem"
                                            className="collection__item mod--blog-hero w-dyn-item"
                                        >
                                            <div className="post-card is-big">
                                                <a
                                                    data-hover=""
                                                    href="blog/how-to-find-investors-for-startup"
                                                    className="post-card__img-link is-big w-inline-block"
                                                >
                                                    <div className="post-card__pinned">
                                                        <img
                                                            src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/643c1c5dd6324148f439da28_icon-pin.svg"
                                                            loading="lazy"
                                                            alt="pin icon"
                                                            className="icon-regular"
                                                        />
                                                        <div
                                                            className="text-size-14 text-style-allcaps hide-tablet"
                                                        >
                                                            Recent post
                                                        </div>
                                                    </div>
                                                    <div className="post-card__img-wrap is-big">
                                                        <img
                                                            loading="lazy"
                                                            data-hover-elem=""
                                                            alt="How to find investors for startup"
                                                            src="https://cdn.prod.website-files.com/63fc977c14aaea404dce4439/6697abc899937cd572e9c2f4_cover2.webp"
                                                            sizes="(max-width: 479px) 100vw, (max-width: 767px) 38vw, (max-width: 991px) 32vw, 25vw"
                                                            srcset="
                                https://cdn.prod.website-files.com/63fc977c14aaea404dce4439/6697abc899937cd572e9c2f4_cover2-p-500.webp   500w,
                                https://cdn.prod.website-files.com/63fc977c14aaea404dce4439/6697abc899937cd572e9c2f4_cover2-p-800.webp   800w,
                                https://cdn.prod.website-files.com/63fc977c14aaea404dce4439/6697abc899937cd572e9c2f4_cover2-p-1080.webp 1080w,
                                https://cdn.prod.website-files.com/63fc977c14aaea404dce4439/6697abc899937cd572e9c2f4_cover2.webp        1200w
                              "
                                                            className="post-card__img is-big"
                                                        />
                                                    </div>
                                                    <div className="post-big__bottom">
                                                        <h2 className="heading-6">
                                                            How to find investors and attract funding for your
                                                            startup in 2024
                                                        </h2>
                                                        <div className="post-card__param is--big">
                                                            <div>Insights</div>
                                                            <div className="post-card__param-date hide">
                                                                <div className="w-condition-invisible">17 Jul</div>
                                                                <div className="w-condition-invisible">2024</div>
                                                                <div>17 Jul</div>
                                                                <div>2024</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="posts" className="container">
                        <div className="category-wrap">
                            <div
                                data-hover="false"
                                data-delay="0"
                                className="category-dropdown w-dropdown"
                            >
                                <div className="category-dropdown__toggle w-dropdown-toggle">
                                    <div className="category-dropdown__icon w-embed">
                                        <svg
                                            aria-hidden="true"
                                            role="img"
                                            fill="currentColor"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            width="100%"
                                            height="100%"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                d="M.76 2.08a1 1 0 0 1 .908-.58h16.667a1 1 0 0 1 .763 1.646l-6.43 7.603V17.5a1 1 0 0 1-1.447.894l-3.334-1.666a1 1 0 0 1-.552-.895V10.75L.905 3.146A1 1 0 0 1 .76 2.079ZM3.824 3.5l5.275 6.238a1 1 0 0 1 .237.645v4.832l1.333.667v-5.499a1 1 0 0 1 .236-.645L16.18 3.5H3.823Z"
                                                clip-rule="evenodd"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <nav className="category-dropdown__list w-dropdown-list">
                                    <div className="category-dropdown__content">
                                        <a
                                            data-hover=""
                                            href="blog"
                                            aria-current="page"
                                            className="category__btn is-cat-dropdown w-inline-block w--current"
                                        >
                                            <div className="button__overflow">
                                                <div data-hover-elem="" className="button__texts">
                                                    <div className="button__text">All Posts</div>
                                                    <div className="button__text is-absolute">All Posts</div>
                                                </div>
                                            </div>
                                        </a>
                                        <div className="collection w-dyn-list">
                                            <div
                                                role="list"
                                                className="collection__list mod--category is-cat-dropdown w-dyn-items"
                                            >
                                                <div
                                                    role="listitem"
                                                    className="collection__item w-dyn-item"
                                                >
                                                    <a
                                                        href="category/insights"
                                                        className="category__btn is-cat-dropdown w-inline-block"
                                                    >
                                                        <div className="button__overflow">
                                                            <div data-hover-elem="" className="button__texts">
                                                                <div className="button__text">Insights</div>
                                                                <div className="button__text is-absolute">
                                                                    Insights
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </a>
                                                    <link rel="prefetch" href="category/insights" />
                                                </div>
                                                <div
                                                    role="listitem"
                                                    className="collection__item w-dyn-item"
                                                >
                                                    <a
                                                        href="category/development"
                                                        className="category__btn is-cat-dropdown w-inline-block"
                                                    >
                                                        <div className="button__overflow">
                                                            <div data-hover-elem="" className="button__texts">
                                                                <div className="button__text">Development</div>
                                                                <div className="button__text is-absolute">
                                                                    Development
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </a>
                                                    <link rel="prefetch" href="category/development" />
                                                </div>
                                                <div
                                                    role="listitem"
                                                    className="collection__item w-dyn-item"
                                                >
                                                    <a
                                                        href="category/design"
                                                        className="category__btn is-cat-dropdown w-inline-block"
                                                    >
                                                        <div className="button__overflow">
                                                            <div data-hover-elem="" className="button__texts">
                                                                <div className="button__text">Design</div>
                                                                <div className="button__text is-absolute">
                                                                    Design
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </a>
                                                    <link rel="prefetch" href="category/design" />
                                                </div>
                                                <div
                                                    role="listitem"
                                                    className="collection__item w-dyn-item"
                                                >
                                                    <a
                                                        href="category/case-studies"
                                                        className="category__btn is-cat-dropdown w-inline-block"
                                                    >
                                                        <div className="button__overflow">
                                                            <div data-hover-elem="" className="button__texts">
                                                                <div className="button__text">Case Studies</div>
                                                                <div className="button__text is-absolute">
                                                                    Case Studies
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </a>
                                                    <link rel="prefetch" href="category/case-studies" />
                                                </div>
                                                <div
                                                    role="listitem"
                                                    className="collection__item w-dyn-item"
                                                >
                                                    <a
                                                        href="category/seo"
                                                        className="category__btn is-cat-dropdown w-inline-block"
                                                    >
                                                        <div className="button__overflow">
                                                            <div data-hover-elem="" className="button__texts">
                                                                <div className="button__text">Seo</div>
                                                                <div className="button__text is-absolute">Seo</div>
                                                            </div>
                                                        </div>
                                                    </a>
                                                    <link rel="prefetch" href="category/seo" />
                                                </div>
                                                <div
                                                    role="listitem"
                                                    className="collection__item w-dyn-item"
                                                >
                                                    <a
                                                        href="category/news"
                                                        className="category__btn is-cat-dropdown w-inline-block"
                                                    >
                                                        <div className="button__overflow">
                                                            <div data-hover-elem="" className="button__texts">
                                                                <div className="button__text">News</div>
                                                                <div className="button__text is-absolute">News</div>
                                                            </div>
                                                        </div>
                                                    </a>
                                                    <link rel="prefetch" href="category/news" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </nav>
                            </div>
                            <div className="category">
                                <a
                                    data-hover-prevent-responsive=""
                                    data-hover=""
                                    href="blog"
                                    aria-current="page"
                                    className="category__btn hide-mobile-portrait w-inline-block w--current"
                                >
                                    <div className="button__overflow">
                                        <div data-hover-elem="" className="button__texts">
                                            <div className="button__text">All Posts</div>
                                            <div className="button__text is-absolute">All Posts</div>
                                        </div>
                                    </div>
                                </a>
                                <link rel="prefetch" href="blog" />
                                <div className="collection hide-mobile-portrait w-dyn-list">
                                    <div
                                        role="list"
                                        className="collection__list mod--category w-dyn-items"
                                    >
                                        <div role="listitem" className="collection__item w-dyn-item">
                                            <a
                                                data-hover-prevent-responsive=""
                                                data-hover=""
                                                href="category/insights"
                                                className="category__btn w-inline-block"
                                            >
                                                <div className="button__overflow">
                                                    <div data-hover-elem="" className="button__texts">
                                                        <div className="button__text">Insights</div>
                                                        <div className="button__text is-absolute">Insights</div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div role="listitem" className="collection__item w-dyn-item">
                                            <a
                                                data-hover-prevent-responsive=""
                                                data-hover=""
                                                href="category/development"
                                                className="category__btn w-inline-block"
                                            >
                                                <div className="button__overflow">
                                                    <div data-hover-elem="" className="button__texts">
                                                        <div className="button__text">Development</div>
                                                        <div className="button__text is-absolute">
                                                            Development
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div role="listitem" className="collection__item w-dyn-item">
                                            <a
                                                data-hover-prevent-responsive=""
                                                data-hover=""
                                                href="category/design"
                                                className="category__btn w-inline-block"
                                            >
                                                <div className="button__overflow">
                                                    <div data-hover-elem="" className="button__texts">
                                                        <div className="button__text">Design</div>
                                                        <div className="button__text is-absolute">Design</div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div role="listitem" className="collection__item w-dyn-item">
                                            <a
                                                data-hover-prevent-responsive=""
                                                data-hover=""
                                                href="category/seo"
                                                className="category__btn w-inline-block"
                                            >
                                                <div className="button__overflow">
                                                    <div data-hover-elem="" className="button__texts">
                                                        <div className="button__text">Seo</div>
                                                        <div className="button__text is-absolute">Seo</div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <a
                                    data-hover=""
                                    data-component="search-toggle"
                                    href="blog?b1d3bc67_page=12#"
                                    className="category__btn mod--search w-inline-block"
                                >
                                    <div className="button__overflow">
                                        <div data-hover-elem="" className="button__texts">
                                            <div className="button__text">Search</div>
                                            <div className="button__text is-absolute">Search</div>
                                        </div>
                                    </div>
                                    <div data-hover-elem="" className="button__icons mod--search">
                                        <div data-hover-elem="" className="button__icon-anim">
                                            <div className="button__icon-small w-embed">
                                                <svg
                                                    aria-hidden="true"
                                                    role="img"
                                                    fill="currentColor"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 16 16"
                                                    width="100%"
                                                    height="100%"
                                                >
                                                    <g
                                                        fill-rule="evenodd"
                                                        clip-path="url(#a)"
                                                        clip-rule="evenodd"
                                                    >
                                                        <path
                                                            d="M10.372 10.372a.889.889 0 0 1 1.257 0l4 4a.889.889 0 0 1-1.257 1.257l-4-4a.889.889 0 0 1 0-1.257Z"
                                                        />
                                                        <path
                                                            d="M6.5 11.5a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0 1.5a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13Z"
                                                        />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="a">
                                                            <path d="M0 0h16v16H0z" />
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                            </div>
                                            <div className="button__icon-small is-icon-absolute w-embed">
                                                <svg
                                                    aria-hidden="true"
                                                    role="img"
                                                    fill="currentColor"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 16 16"
                                                    width="100%"
                                                    height="100%"
                                                >
                                                    <g
                                                        fill-rule="evenodd"
                                                        clip-path="url(#a)"
                                                        clip-rule="evenodd"
                                                    >
                                                        <path
                                                            d="M10.372 10.372a.889.889 0 0 1 1.257 0l4 4a.889.889 0 0 1-1.257 1.257l-4-4a.889.889 0 0 1 0-1.257Z"
                                                        />
                                                        <path
                                                            d="M6.5 11.5a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0 1.5a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13Z"
                                                        />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="a">
                                                            <path d="M0 0h16v16H0z" />
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                            </div>
                                        </div>
                                        <div
                                            data-hover-elem=""
                                            className="button__bg bg-color-yellow"
                                        ></div>
                                    </div>
                                </a>
                                <div
                                    fs-cmsfilter-element="filters"
                                    data-component="search-form"
                                    className="form-block mod--search anim w-form"
                                >
                                    <form
                                        id="wf-form-search"
                                        name="wf-form-search"
                                        data-name="search"
                                        method="get"
                                        className="form mod--search"
                                        data-wf-page-id="65e02e1378aeac8c4c4d9b84"
                                        data-wf-element-id="62070f9b-6f0e-cc16-566f-6e51e28c7055"
                                    >
                                        <div className="search__icon">
                                            <div className="icon-small w-embed">
                                                <svg
                                                    aria-hidden="true"
                                                    role="img"
                                                    fill="currentColor"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 16 16"
                                                    width="100%"
                                                    height="100%"
                                                >
                                                    <g
                                                        fill-rule="evenodd"
                                                        clip-path="url(#a)"
                                                        clip-rule="evenodd"
                                                    >
                                                        <path
                                                            d="M10.372 10.372a.889.889 0 0 1 1.257 0l4 4a.889.889 0 0 1-1.257 1.257l-4-4a.889.889 0 0 1 0-1.257Z"
                                                        />
                                                        <path
                                                            d="M6.5 11.5a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0 1.5a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13Z"
                                                        />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="a">
                                                            <path d="M0 0h16v16H0z" />
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                            </div>
                                        </div>
                                        <input
                                            className="search-input w-input"
                                            maxlength="256"
                                            name="name-2"
                                            fs-cmsfilter-field="title"
                                            data-name="Name 2"
                                            placeholder="I&#x27;m looking for"
                                            type="text"
                                            id="name-2"
                                            required=""
                                        />
                                        <div data-component="search-close" className="search__close">
                                            <div className="icon-regular w-embed">
                                                <svg
                                                    aria-hidden="true"
                                                    role="img"
                                                    fill="currentColor"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    width="100%"
                                                    height="100%"
                                                >
                                                    <path
                                                        fill-rule="evenodd"
                                                        d="M6.344 6.34a1 1 0 0 1 1.414 0l9.9 9.9a1 1 0 0 1-1.415 1.414l-9.9-9.9a1 1 0 0 1 0-1.414Z"
                                                        clip-rule="evenodd"
                                                    />
                                                    <path
                                                        fill-rule="evenodd"
                                                        d="M17.657 6.346a1 1 0 0 1 0 1.414l-9.9 9.9a1 1 0 0 1-1.413-1.415l9.9-9.9a1 1 0 0 1 1.413 0Z"
                                                        clip-rule="evenodd"
                                                    />
                                                </svg>
                                            </div>
                                        </div>
                                    </form>
                                    <div className="w-form-done">
                                        <div>Thank you! Your submission has been received!</div>
                                    </div>
                                    <div className="w-form-fail">
                                        <div>
                                            Oops! Something went wrong while submitting the form.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="collection w-dyn-list">
                            <div
                                fs-cmsload-element="list"
                                fs-cmsfilter-element="list"
                                fs-cmsload-mode="pagination"
                                fs-cmsload-showquery="true"
                                role="list"
                                className="collection__list is-posts w-dyn-items"
                            >
                                <div
                                    role="listitem"
                                    className="collection__item is-posts w-dyn-item"
                                >
                                    <div data-hover-parent="" className="post-card">
                                        <a
                                            data-hover=""
                                            href="blog/is-it-possible-to-develop-a-telemedicine-product-in-6-months"
                                            className="post-card__img-link w-inline-block"
                                        ><img
                                                loading="lazy"
                                                data-hover-elem=""
                                                alt=""
                                                src="https://cdn.prod.website-files.com/63fc977c14aaea404dce4439/64aff0f57b57144f618941e5_6486e61655a6b2b46a5be516_Illustration%2520(1).webp"
                                                sizes="(max-width: 479px) 78vw, (max-width: 991px) 187.35498046875px, 19vw"
                                                srcset="
                          https://cdn.prod.website-files.com/63fc977c14aaea404dce4439/64aff0f57b57144f618941e5_6486e61655a6b2b46a5be516_Illustration%2520(1)-p-500.webp  500w,
                          https://cdn.prod.website-files.com/63fc977c14aaea404dce4439/64aff0f57b57144f618941e5_6486e61655a6b2b46a5be516_Illustration%2520(1)-p-800.webp  800w,
                          https://cdn.prod.website-files.com/63fc977c14aaea404dce4439/64aff0f57b57144f618941e5_6486e61655a6b2b46a5be516_Illustration%2520(1).webp       1200w
                        "
                                                className="post-card__img"
                                            /></a>
                                        <div className="post-card__param">
                                            <div>Case Studies</div>
                                            <div className="post-card__param-date">
                                                <div className="w-condition-invisible">29 Feb</div>
                                                <div>29 Jul</div>
                                            </div>
                                        </div>
                                        <a
                                            data-hover=""
                                            href="blog/is-it-possible-to-develop-a-telemedicine-product-in-6-months"
                                            className="post-card__title-link w-inline-block"
                                        >
                                            <h2 fs-cmsfilter-field="title" className="post-card__title">
                                                Is it possible to develop a telehealth product in 6
                                                months?
                                            </h2>
                                            <div className="hide">
                                                <div className="post-card__span-icons">
                                                    <div data-post-card-arrow="" className="post-card__icons">
                                                        <div data-hover-elem="" className="button__icon-anim">
                                                            <div className="post-card__icon opacity-0 w-embed">
                                                                <svg
                                                                    aria-hidden="true"
                                                                    role="img"
                                                                    fill="currentColor"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    viewBox="0 0 19 19"
                                                                    width="100%"
                                                                    height="100%"
                                                                >
                                                                    <path
                                                                        fill-rule="evenodd"
                                                                        d="M6.25.879 14.871 9.5l-8.62 8.622L4.128 16l6.5-6.5-6.5-6.5L6.25.88Z"
                                                                        clip-rule="evenodd"
                                                                    />
                                                                </svg>
                                                            </div>
                                                            <div
                                                                className="post-card__icon is-icon-absolute w-embed"
                                                            >
                                                                <svg
                                                                    aria-hidden="true"
                                                                    role="img"
                                                                    fill="currentColor"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    viewBox="0 0 19 19"
                                                                    width="100%"
                                                                    height="100%"
                                                                >
                                                                    <path
                                                                        fill-rule="evenodd"
                                                                        d="M6.25.879 14.871 9.5l-8.62 8.622L4.128 16l6.5-6.5-6.5-6.5L6.25.88Z"
                                                                        clip-rule="evenodd"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div
                                    role="listitem"
                                    className="collection__item is-posts w-dyn-item"
                                >
                                    <div data-hover-parent="" className="post-card">
                                        <a
                                            data-hover=""
                                            href="blog/freelance-vs-team"
                                            className="post-card__img-link w-inline-block"
                                        ><img
                                                loading="lazy"
                                                data-hover-elem=""
                                                alt=""
                                                src="https://cdn.prod.website-files.com/63fc977c14aaea404dce4439/64aff0f530ded343138b2783_6486f5a8a33c763d33dd31de_cover%2520image.webp"
                                                sizes="(max-width: 479px) 78vw, (max-width: 991px) 187.35498046875px, 19vw"
                                                srcset="
                          https://cdn.prod.website-files.com/63fc977c14aaea404dce4439/64aff0f530ded343138b2783_6486f5a8a33c763d33dd31de_cover%2520image-p-500.webp  500w,
                          https://cdn.prod.website-files.com/63fc977c14aaea404dce4439/64aff0f530ded343138b2783_6486f5a8a33c763d33dd31de_cover%2520image-p-800.webp  800w,
                          https://cdn.prod.website-files.com/63fc977c14aaea404dce4439/64aff0f530ded343138b2783_6486f5a8a33c763d33dd31de_cover%2520image.webp       1200w
                        "
                                                className="post-card__img"
                                            /></a>
                                        <div className="post-card__param">
                                            <div>Development</div>
                                            <div className="post-card__param-date">
                                                <div className="w-condition-invisible">29 Feb</div>
                                                <div>15 Jul</div>
                                            </div>
                                        </div>
                                        <a
                                            data-hover=""
                                            href="blog/freelance-vs-team"
                                            className="post-card__title-link w-inline-block"
                                        >
                                            <h2 fs-cmsfilter-field="title" className="post-card__title">
                                                Freelance versus Team: who is better to work with?
                                            </h2>
                                            <div className="hide">
                                                <div className="post-card__span-icons">
                                                    <div data-post-card-arrow="" className="post-card__icons">
                                                        <div data-hover-elem="" className="button__icon-anim">
                                                            <div className="post-card__icon opacity-0 w-embed">
                                                                <svg
                                                                    aria-hidden="true"
                                                                    role="img"
                                                                    fill="currentColor"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    viewBox="0 0 19 19"
                                                                    width="100%"
                                                                    height="100%"
                                                                >
                                                                    <path
                                                                        fill-rule="evenodd"
                                                                        d="M6.25.879 14.871 9.5l-8.62 8.622L4.128 16l6.5-6.5-6.5-6.5L6.25.88Z"
                                                                        clip-rule="evenodd"
                                                                    />
                                                                </svg>
                                                            </div>
                                                            <div
                                                                className="post-card__icon is-icon-absolute w-embed"
                                                            >
                                                                <svg
                                                                    aria-hidden="true"
                                                                    role="img"
                                                                    fill="currentColor"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    viewBox="0 0 19 19"
                                                                    width="100%"
                                                                    height="100%"
                                                                >
                                                                    <path
                                                                        fill-rule="evenodd"
                                                                        d="M6.25.879 14.871 9.5l-8.62 8.622L4.128 16l6.5-6.5-6.5-6.5L6.25.88Z"
                                                                        clip-rule="evenodd"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div
                                    role="listitem"
                                    className="collection__item is-posts w-dyn-item"
                                >
                                    <div data-hover-parent="" className="post-card">
                                        <a
                                            data-hover=""
                                            href="blog/dribbble-more-followers-please"
                                            className="post-card__img-link w-inline-block"
                                        ><img
                                                loading="lazy"
                                                data-hover-elem=""
                                                alt=""
                                                src="https://cdn.prod.website-files.com/63fc977c14aaea404dce4439/64aff0f57960733b652d83b6_64888b78ee99490ab8bd680a_Illustration%2520(1).webp"
                                                sizes="(max-width: 479px) 78vw, (max-width: 991px) 187.35498046875px, 19vw"
                                                srcset="
                          https://cdn.prod.website-files.com/63fc977c14aaea404dce4439/64aff0f57960733b652d83b6_64888b78ee99490ab8bd680a_Illustration%2520(1)-p-500.webp  500w,
                          https://cdn.prod.website-files.com/63fc977c14aaea404dce4439/64aff0f57960733b652d83b6_64888b78ee99490ab8bd680a_Illustration%2520(1)-p-800.webp  800w,
                          https://cdn.prod.website-files.com/63fc977c14aaea404dce4439/64aff0f57960733b652d83b6_64888b78ee99490ab8bd680a_Illustration%2520(1).webp       1200w
                        "
                                                className="post-card__img"
                                            /></a>
                                        <div className="post-card__param">
                                            <div>Design</div>
                                            <div className="post-card__param-date">
                                                <div className="w-condition-invisible">29 Feb</div>
                                                <div>11 Jul</div>
                                            </div>
                                        </div>
                                        <a
                                            data-hover=""
                                            href="blog/dribbble-more-followers-please"
                                            className="post-card__title-link w-inline-block"
                                        >
                                            <h2 fs-cmsfilter-field="title" className="post-card__title">
                                                Dribbble, more followers, please!
                                            </h2>
                                            <div className="hide">
                                                <div className="post-card__span-icons">
                                                    <div data-post-card-arrow="" className="post-card__icons">
                                                        <div data-hover-elem="" className="button__icon-anim">
                                                            <div className="post-card__icon opacity-0 w-embed">
                                                                <svg
                                                                    aria-hidden="true"
                                                                    role="img"
                                                                    fill="currentColor"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    viewBox="0 0 19 19"
                                                                    width="100%"
                                                                    height="100%"
                                                                >
                                                                    <path
                                                                        fill-rule="evenodd"
                                                                        d="M6.25.879 14.871 9.5l-8.62 8.622L4.128 16l6.5-6.5-6.5-6.5L6.25.88Z"
                                                                        clip-rule="evenodd"
                                                                    />
                                                                </svg>
                                                            </div>
                                                            <div
                                                                className="post-card__icon is-icon-absolute w-embed"
                                                            >
                                                                <svg
                                                                    aria-hidden="true"
                                                                    role="img"
                                                                    fill="currentColor"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    viewBox="0 0 19 19"
                                                                    width="100%"
                                                                    height="100%"
                                                                >
                                                                    <path
                                                                        fill-rule="evenodd"
                                                                        d="M6.25.879 14.871 9.5l-8.62 8.622L4.128 16l6.5-6.5-6.5-6.5L6.25.88Z"
                                                                        clip-rule="evenodd"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div
                                    role="listitem"
                                    className="collection__item is-posts w-dyn-item"
                                >
                                    <div data-hover-parent="" className="post-card">
                                        <a
                                            data-hover=""
                                            href="blog/5-principles-of-good-design"
                                            className="post-card__img-link w-inline-block"
                                        ><img
                                                loading="lazy"
                                                data-hover-elem=""
                                                alt=""
                                                src="https://cdn.prod.website-files.com/63fc977c14aaea404dce4439/657b0e6dd7710fa10ea873d5_Illustration%20(6).webp"
                                                sizes="(max-width: 479px) 78vw, (max-width: 991px) 187.35498046875px, 19vw"
                                                srcset="
                          https://cdn.prod.website-files.com/63fc977c14aaea404dce4439/657b0e6dd7710fa10ea873d5_Illustration%20(6)-p-500.webp   500w,
                          https://cdn.prod.website-files.com/63fc977c14aaea404dce4439/657b0e6dd7710fa10ea873d5_Illustration%20(6)-p-800.webp   800w,
                          https://cdn.prod.website-files.com/63fc977c14aaea404dce4439/657b0e6dd7710fa10ea873d5_Illustration%20(6)-p-1080.webp 1080w,
                          https://cdn.prod.website-files.com/63fc977c14aaea404dce4439/657b0e6dd7710fa10ea873d5_Illustration%20(6).webp        1200w
                        "
                                                className="post-card__img"
                                            /></a>
                                        <div className="post-card__param">
                                            <div>Design</div>
                                            <div className="post-card__param-date">
                                                <div className="w-condition-invisible">29 Feb</div>
                                                <div>7 May</div>
                                            </div>
                                        </div>
                                        <a
                                            data-hover=""
                                            href="blog/5-principles-of-good-design"
                                            className="post-card__title-link w-inline-block"
                                        >
                                            <h2 fs-cmsfilter-field="title" className="post-card__title">
                                                5 principles of good design
                                            </h2>
                                            <div className="hide">
                                                <div className="post-card__span-icons">
                                                    <div data-post-card-arrow="" className="post-card__icons">
                                                        <div data-hover-elem="" className="button__icon-anim">
                                                            <div className="post-card__icon opacity-0 w-embed">
                                                                <svg
                                                                    aria-hidden="true"
                                                                    role="img"
                                                                    fill="currentColor"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    viewBox="0 0 19 19"
                                                                    width="100%"
                                                                    height="100%"
                                                                >
                                                                    <path
                                                                        fill-rule="evenodd"
                                                                        d="M6.25.879 14.871 9.5l-8.62 8.622L4.128 16l6.5-6.5-6.5-6.5L6.25.88Z"
                                                                        clip-rule="evenodd"
                                                                    />
                                                                </svg>
                                                            </div>
                                                            <div
                                                                className="post-card__icon is-icon-absolute w-embed"
                                                            >
                                                                <svg
                                                                    aria-hidden="true"
                                                                    role="img"
                                                                    fill="currentColor"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    viewBox="0 0 19 19"
                                                                    width="100%"
                                                                    height="100%"
                                                                >
                                                                    <path
                                                                        fill-rule="evenodd"
                                                                        d="M6.25.879 14.871 9.5l-8.62 8.622L4.128 16l6.5-6.5-6.5-6.5L6.25.88Z"
                                                                        clip-rule="evenodd"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div
                                    role="listitem"
                                    className="collection__item is-posts w-dyn-item"
                                >
                                    <div data-hover-parent="" className="post-card">
                                        <a
                                            data-hover=""
                                            href="blog/why-is-mvp-an-excellent-choice-for-your-startup"
                                            className="post-card__img-link w-inline-block"
                                        ><img
                                                loading="lazy"
                                                data-hover-elem=""
                                                alt=""
                                                src="https://cdn.prod.website-files.com/63fc977c14aaea404dce4439/64aff0f11f12f19ec699e67d_6481a635b30ca30eee8335fd_cover%2520image.webp"
                                                sizes="(max-width: 479px) 78vw, (max-width: 991px) 187.35498046875px, 19vw"
                                                srcset="
                          https://cdn.prod.website-files.com/63fc977c14aaea404dce4439/64aff0f11f12f19ec699e67d_6481a635b30ca30eee8335fd_cover%2520image-p-500.webp   500w,
                          https://cdn.prod.website-files.com/63fc977c14aaea404dce4439/64aff0f11f12f19ec699e67d_6481a635b30ca30eee8335fd_cover%2520image-p-800.webp   800w,
                          https://cdn.prod.website-files.com/63fc977c14aaea404dce4439/64aff0f11f12f19ec699e67d_6481a635b30ca30eee8335fd_cover%2520image-p-1080.webp 1080w,
                          https://cdn.prod.website-files.com/63fc977c14aaea404dce4439/64aff0f11f12f19ec699e67d_6481a635b30ca30eee8335fd_cover%2520image.webp        1200w
                        "
                                                className="post-card__img"
                                            /></a>
                                        <div className="post-card__param">
                                            <div>Development</div>
                                            <div className="post-card__param-date">
                                                <div className="w-condition-invisible">29 Feb</div>
                                                <div>23 Apr</div>
                                            </div>
                                        </div>
                                        <a
                                            data-hover=""
                                            href="blog/why-is-mvp-an-excellent-choice-for-your-startup"
                                            className="post-card__title-link w-inline-block"
                                        >
                                            <h2 fs-cmsfilter-field="title" className="post-card__title">
                                                Why is MVP an excellent choice for your startup?
                                            </h2>
                                            <div className="hide">
                                                <div className="post-card__span-icons">
                                                    <div data-post-card-arrow="" className="post-card__icons">
                                                        <div data-hover-elem="" className="button__icon-anim">
                                                            <div className="post-card__icon opacity-0 w-embed">
                                                                <svg
                                                                    aria-hidden="true"
                                                                    role="img"
                                                                    fill="currentColor"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    viewBox="0 0 19 19"
                                                                    width="100%"
                                                                    height="100%"
                                                                >
                                                                    <path
                                                                        fill-rule="evenodd"
                                                                        d="M6.25.879 14.871 9.5l-8.62 8.622L4.128 16l6.5-6.5-6.5-6.5L6.25.88Z"
                                                                        clip-rule="evenodd"
                                                                    />
                                                                </svg>
                                                            </div>
                                                            <div
                                                                className="post-card__icon is-icon-absolute w-embed"
                                                            >
                                                                <svg
                                                                    aria-hidden="true"
                                                                    role="img"
                                                                    fill="currentColor"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    viewBox="0 0 19 19"
                                                                    width="100%"
                                                                    height="100%"
                                                                >
                                                                    <path
                                                                        fill-rule="evenodd"
                                                                        d="M6.25.879 14.871 9.5l-8.62 8.622L4.128 16l6.5-6.5-6.5-6.5L6.25.88Z"
                                                                        clip-rule="evenodd"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div
                                    role="listitem"
                                    className="collection__item is-posts w-dyn-item"
                                >
                                    <div data-hover-parent="" className="post-card">
                                        <a
                                            data-hover=""
                                            href="blog/case-story-how-to-design-avatar-generator"
                                            className="post-card__img-link w-inline-block"
                                        ><img
                                                loading="lazy"
                                                data-hover-elem=""
                                                alt=""
                                                src="https://cdn.prod.website-files.com/63fc977c14aaea404dce4439/64aff0f57b57144f618941e5_6486e61655a6b2b46a5be516_Illustration%2520(1).webp"
                                                sizes="(max-width: 479px) 78vw, (max-width: 991px) 187.35498046875px, 19vw"
                                                srcset="
                          https://cdn.prod.website-files.com/63fc977c14aaea404dce4439/64aff0f57b57144f618941e5_6486e61655a6b2b46a5be516_Illustration%2520(1)-p-500.webp  500w,
                          https://cdn.prod.website-files.com/63fc977c14aaea404dce4439/64aff0f57b57144f618941e5_6486e61655a6b2b46a5be516_Illustration%2520(1)-p-800.webp  800w,
                          https://cdn.prod.website-files.com/63fc977c14aaea404dce4439/64aff0f57b57144f618941e5_6486e61655a6b2b46a5be516_Illustration%2520(1).webp       1200w
                        "
                                                className="post-card__img"
                                            /></a>
                                        <div className="post-card__param">
                                            <div>Case Studies</div>
                                            <div className="post-card__param-date">
                                                <div className="w-condition-invisible">29 Feb</div>
                                                <div>26 Jul</div>
                                            </div>
                                        </div>
                                        <a
                                            data-hover=""
                                            href="blog/case-story-how-to-design-avatar-generator"
                                            className="post-card__title-link w-inline-block"
                                        >
                                            <h2 fs-cmsfilter-field="title" className="post-card__title">
                                                Case story: how to design avatar generator
                                            </h2>
                                            <div className="hide">
                                                <div className="post-card__span-icons">
                                                    <div data-post-card-arrow="" className="post-card__icons">
                                                        <div data-hover-elem="" className="button__icon-anim">
                                                            <div className="post-card__icon opacity-0 w-embed">
                                                                <svg
                                                                    aria-hidden="true"
                                                                    role="img"
                                                                    fill="currentColor"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    viewBox="0 0 19 19"
                                                                    width="100%"
                                                                    height="100%"
                                                                >
                                                                    <path
                                                                        fill-rule="evenodd"
                                                                        d="M6.25.879 14.871 9.5l-8.62 8.622L4.128 16l6.5-6.5-6.5-6.5L6.25.88Z"
                                                                        clip-rule="evenodd"
                                                                    />
                                                                </svg>
                                                            </div>
                                                            <div
                                                                className="post-card__icon is-icon-absolute w-embed"
                                                            >
                                                                <svg
                                                                    aria-hidden="true"
                                                                    role="img"
                                                                    fill="currentColor"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    viewBox="0 0 19 19"
                                                                    width="100%"
                                                                    height="100%"
                                                                >
                                                                    <path
                                                                        fill-rule="evenodd"
                                                                        d="M6.25.879 14.871 9.5l-8.62 8.622L4.128 16l6.5-6.5-6.5-6.5L6.25.88Z"
                                                                        clip-rule="evenodd"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div
                                    role="listitem"
                                    className="collection__item is-posts w-dyn-item"
                                >
                                    <div data-hover-parent="" className="post-card">
                                        <a
                                            data-hover=""
                                            href="blog/three-faces-of-your-plan"
                                            className="post-card__img-link w-inline-block"
                                        ><img
                                                loading="lazy"
                                                data-hover-elem=""
                                                alt=""
                                                src="https://cdn.prod.website-files.com/63fc977c14aaea404dce4439/657b0e6dd7710fa10ea873d5_Illustration%20(6).webp"
                                                sizes="(max-width: 479px) 78vw, (max-width: 991px) 187.35498046875px, 19vw"
                                                srcset="
                          https://cdn.prod.website-files.com/63fc977c14aaea404dce4439/657b0e6dd7710fa10ea873d5_Illustration%20(6)-p-500.webp   500w,
                          https://cdn.prod.website-files.com/63fc977c14aaea404dce4439/657b0e6dd7710fa10ea873d5_Illustration%20(6)-p-800.webp   800w,
                          https://cdn.prod.website-files.com/63fc977c14aaea404dce4439/657b0e6dd7710fa10ea873d5_Illustration%20(6)-p-1080.webp 1080w,
                          https://cdn.prod.website-files.com/63fc977c14aaea404dce4439/657b0e6dd7710fa10ea873d5_Illustration%20(6).webp        1200w
                        "
                                                className="post-card__img"
                                            /></a>
                                        <div className="post-card__param">
                                            <div>Development</div>
                                            <div className="post-card__param-date">
                                                <div className="w-condition-invisible">29 Feb</div>
                                                <div>23 Mar</div>
                                            </div>
                                        </div>
                                        <a
                                            data-hover=""
                                            href="blog/three-faces-of-your-plan"
                                            className="post-card__title-link w-inline-block"
                                        >
                                            <h2 fs-cmsfilter-field="title" className="post-card__title">
                                                Three faces of your plan
                                            </h2>
                                            <div className="hide">
                                                <div className="post-card__span-icons">
                                                    <div data-post-card-arrow="" className="post-card__icons">
                                                        <div data-hover-elem="" className="button__icon-anim">
                                                            <div className="post-card__icon opacity-0 w-embed">
                                                                <svg
                                                                    aria-hidden="true"
                                                                    role="img"
                                                                    fill="currentColor"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    viewBox="0 0 19 19"
                                                                    width="100%"
                                                                    height="100%"
                                                                >
                                                                    <path
                                                                        fill-rule="evenodd"
                                                                        d="M6.25.879 14.871 9.5l-8.62 8.622L4.128 16l6.5-6.5-6.5-6.5L6.25.88Z"
                                                                        clip-rule="evenodd"
                                                                    />
                                                                </svg>
                                                            </div>
                                                            <div
                                                                className="post-card__icon is-icon-absolute w-embed"
                                                            >
                                                                <svg
                                                                    aria-hidden="true"
                                                                    role="img"
                                                                    fill="currentColor"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    viewBox="0 0 19 19"
                                                                    width="100%"
                                                                    height="100%"
                                                                >
                                                                    <path
                                                                        fill-rule="evenodd"
                                                                        d="M6.25.879 14.871 9.5l-8.62 8.622L4.128 16l6.5-6.5-6.5-6.5L6.25.88Z"
                                                                        clip-rule="evenodd"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div
                                    role="listitem"
                                    className="collection__item is-posts w-dyn-item"
                                >
                                    <div data-hover-parent="" className="post-card">
                                        <a
                                            data-hover=""
                                            href="blog/5-hints-to-make-rebranding-smartly"
                                            className="post-card__img-link w-inline-block"
                                        ><img
                                                loading="lazy"
                                                data-hover-elem=""
                                                alt=""
                                                src="https://cdn.prod.website-files.com/63fc977c14aaea404dce4439/64b7dedf43919c0549a2f3fa_5-hints-to-make-rebranding-smartly.webp"
                                                sizes="(max-width: 479px) 78vw, (max-width: 991px) 187.35498046875px, 19vw"
                                                srcset="
                          https://cdn.prod.website-files.com/63fc977c14aaea404dce4439/64b7dedf43919c0549a2f3fa_5-hints-to-make-rebranding-smartly-p-500.webp  500w,
                          https://cdn.prod.website-files.com/63fc977c14aaea404dce4439/64b7dedf43919c0549a2f3fa_5-hints-to-make-rebranding-smartly-p-800.webp  800w,
                          https://cdn.prod.website-files.com/63fc977c14aaea404dce4439/64b7dedf43919c0549a2f3fa_5-hints-to-make-rebranding-smartly.webp       1200w
                        "
                                                className="post-card__img"
                                            /></a>
                                        <div className="post-card__param">
                                            <div>Development</div>
                                            <div className="post-card__param-date">
                                                <div className="w-condition-invisible">29 Feb</div>
                                                <div>16 Feb</div>
                                            </div>
                                        </div>
                                        <a
                                            data-hover=""
                                            href="blog/5-hints-to-make-rebranding-smartly"
                                            className="post-card__title-link w-inline-block"
                                        >
                                            <h2 fs-cmsfilter-field="title" className="post-card__title">
                                                5 hints to make rebranding smartly
                                            </h2>
                                            <div className="hide">
                                                <div className="post-card__span-icons">
                                                    <div data-post-card-arrow="" className="post-card__icons">
                                                        <div data-hover-elem="" className="button__icon-anim">
                                                            <div className="post-card__icon opacity-0 w-embed">
                                                                <svg
                                                                    aria-hidden="true"
                                                                    role="img"
                                                                    fill="currentColor"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    viewBox="0 0 19 19"
                                                                    width="100%"
                                                                    height="100%"
                                                                >
                                                                    <path
                                                                        fill-rule="evenodd"
                                                                        d="M6.25.879 14.871 9.5l-8.62 8.622L4.128 16l6.5-6.5-6.5-6.5L6.25.88Z"
                                                                        clip-rule="evenodd"
                                                                    />
                                                                </svg>
                                                            </div>
                                                            <div
                                                                className="post-card__icon is-icon-absolute w-embed"
                                                            >
                                                                <svg
                                                                    aria-hidden="true"
                                                                    role="img"
                                                                    fill="currentColor"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    viewBox="0 0 19 19"
                                                                    width="100%"
                                                                    height="100%"
                                                                >
                                                                    <path
                                                                        fill-rule="evenodd"
                                                                        d="M6.25.879 14.871 9.5l-8.62 8.622L4.128 16l6.5-6.5-6.5-6.5L6.25.88Z"
                                                                        clip-rule="evenodd"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div
                                    role="listitem"
                                    className="collection__item is-posts w-dyn-item"
                                >
                                    <div data-hover-parent="" className="post-card">
                                        <a
                                            data-hover=""
                                            href="blog/uunnic-reveals-talents-the-case-story"
                                            className="post-card__img-link w-inline-block"
                                        ><img
                                                loading="lazy"
                                                data-hover-elem=""
                                                alt=""
                                                src="https://cdn.prod.website-files.com/63fc977c14aaea404dce4439/64aff0f57b57144f618941e5_6486e61655a6b2b46a5be516_Illustration%2520(1).webp"
                                                sizes="(max-width: 479px) 78vw, (max-width: 991px) 187.35498046875px, 19vw"
                                                srcset="
                          https://cdn.prod.website-files.com/63fc977c14aaea404dce4439/64aff0f57b57144f618941e5_6486e61655a6b2b46a5be516_Illustration%2520(1)-p-500.webp  500w,
                          https://cdn.prod.website-files.com/63fc977c14aaea404dce4439/64aff0f57b57144f618941e5_6486e61655a6b2b46a5be516_Illustration%2520(1)-p-800.webp  800w,
                          https://cdn.prod.website-files.com/63fc977c14aaea404dce4439/64aff0f57b57144f618941e5_6486e61655a6b2b46a5be516_Illustration%2520(1).webp       1200w
                        "
                                                className="post-card__img"
                                            /></a>
                                        <div className="post-card__param">
                                            <div>Case Studies</div>
                                            <div className="post-card__param-date">
                                                <div className="w-condition-invisible">29 Feb</div>
                                                <div>22 Dec</div>
                                            </div>
                                        </div>
                                        <a
                                            data-hover=""
                                            href="blog/uunnic-reveals-talents-the-case-story"
                                            className="post-card__title-link w-inline-block"
                                        >
                                            <h2 fs-cmsfilter-field="title" className="post-card__title">
                                                Uunnic Reveals Talents. The case story
                                            </h2>
                                            <div className="hide">
                                                <div className="post-card__span-icons">
                                                    <div data-post-card-arrow="" className="post-card__icons">
                                                        <div data-hover-elem="" className="button__icon-anim">
                                                            <div className="post-card__icon opacity-0 w-embed">
                                                                <svg
                                                                    aria-hidden="true"
                                                                    role="img"
                                                                    fill="currentColor"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    viewBox="0 0 19 19"
                                                                    width="100%"
                                                                    height="100%"
                                                                >
                                                                    <path
                                                                        fill-rule="evenodd"
                                                                        d="M6.25.879 14.871 9.5l-8.62 8.622L4.128 16l6.5-6.5-6.5-6.5L6.25.88Z"
                                                                        clip-rule="evenodd"
                                                                    />
                                                                </svg>
                                                            </div>
                                                            <div
                                                                className="post-card__icon is-icon-absolute w-embed"
                                                            >
                                                                <svg
                                                                    aria-hidden="true"
                                                                    role="img"
                                                                    fill="currentColor"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    viewBox="0 0 19 19"
                                                                    width="100%"
                                                                    height="100%"
                                                                >
                                                                    <path
                                                                        fill-rule="evenodd"
                                                                        d="M6.25.879 14.871 9.5l-8.62 8.622L4.128 16l6.5-6.5-6.5-6.5L6.25.88Z"
                                                                        clip-rule="evenodd"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div
                                    role="listitem"
                                    className="collection__item is-posts w-dyn-item"
                                >
                                    <div data-hover-parent="" className="post-card">
                                        <a
                                            data-hover=""
                                            href="blog/gamification-techniques-applied-to-a-design-studio"
                                            className="post-card__img-link w-inline-block"
                                        ><img
                                                loading="lazy"
                                                data-hover-elem=""
                                                alt=""
                                                src="https://cdn.prod.website-files.com/63fc977c14aaea404dce4439/64aff0f3c0a80d406deeca95_64830bfbb73a996d0e7c6778_cover%2520image.webp"
                                                sizes="(max-width: 479px) 78vw, (max-width: 991px) 187.35498046875px, 19vw"
                                                srcset="
                          https://cdn.prod.website-files.com/63fc977c14aaea404dce4439/64aff0f3c0a80d406deeca95_64830bfbb73a996d0e7c6778_cover%2520image-p-500.webp  500w,
                          https://cdn.prod.website-files.com/63fc977c14aaea404dce4439/64aff0f3c0a80d406deeca95_64830bfbb73a996d0e7c6778_cover%2520image-p-800.webp  800w,
                          https://cdn.prod.website-files.com/63fc977c14aaea404dce4439/64aff0f3c0a80d406deeca95_64830bfbb73a996d0e7c6778_cover%2520image.webp       1200w
                        "
                                                className="post-card__img"
                                            /></a>
                                        <div className="post-card__param">
                                            <div>Development</div>
                                            <div className="post-card__param-date">
                                                <div className="w-condition-invisible">27 Jun</div>
                                                <div>3 Oct</div>
                                            </div>
                                        </div>
                                        <a
                                            data-hover=""
                                            href="blog/gamification-techniques-applied-to-a-design-studio"
                                            className="post-card__title-link w-inline-block"
                                        >
                                            <h2 fs-cmsfilter-field="title" className="post-card__title">
                                                Gamification techniques applied to a design studio
                                            </h2>
                                            <div className="hide">
                                                <div className="post-card__span-icons">
                                                    <div data-post-card-arrow="" className="post-card__icons">
                                                        <div data-hover-elem="" className="button__icon-anim">
                                                            <div className="post-card__icon opacity-0 w-embed">
                                                                <svg
                                                                    aria-hidden="true"
                                                                    role="img"
                                                                    fill="currentColor"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    viewBox="0 0 19 19"
                                                                    width="100%"
                                                                    height="100%"
                                                                >
                                                                    <path
                                                                        fill-rule="evenodd"
                                                                        d="M6.25.879 14.871 9.5l-8.62 8.622L4.128 16l6.5-6.5-6.5-6.5L6.25.88Z"
                                                                        clip-rule="evenodd"
                                                                    />
                                                                </svg>
                                                            </div>
                                                            <div
                                                                className="post-card__icon is-icon-absolute w-embed"
                                                            >
                                                                <svg
                                                                    aria-hidden="true"
                                                                    role="img"
                                                                    fill="currentColor"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    viewBox="0 0 19 19"
                                                                    width="100%"
                                                                    height="100%"
                                                                >
                                                                    <path
                                                                        fill-rule="evenodd"
                                                                        d="M6.25.879 14.871 9.5l-8.62 8.622L4.128 16l6.5-6.5-6.5-6.5L6.25.88Z"
                                                                        clip-rule="evenodd"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div
                                role="navigation"
                                aria-label="List"
                                className="w-pagination-wrapper posts-pagination"
                            >
                                <a
                                    href="blog?b1d3bc67_page=11"
                                    aria-label="Previous Page"
                                    className="w-pagination-previous posts-pagination__btn is-previews"
                                >
                                    <div className="button__icon-anim">
                                        <div className="icon-regular w-embed">
                                            <svg
                                                aria-hidden="true"
                                                role="img"
                                                fill="currentColor"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                width="100%"
                                                height="100%"
                                            >
                                                <path
                                                    d="M9.293 5.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L14.586 12 9.293 6.707a1 1 0 0 1 0-1.414Z"
                                                />
                                            </svg>
                                        </div>
                                        <div className="icon-regular is-absolute w-embed">
                                            <svg
                                                aria-hidden="true"
                                                role="img"
                                                fill="currentColor"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                width="100%"
                                                height="100%"
                                            >
                                                <path
                                                    d="M9.293 5.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L14.586 12 9.293 6.707a1 1 0 0 1 0-1.414Z"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="button__bg bg-color-white"></div>
                                </a>
                                <div data-page-current="" className="posts-pagination__pages">
                                    <a
                                        fs-cmsload-element="page-button"
                                        href="blog"
                                        aria-current="page"
                                        className="posts-pagination__btn is-page w--current"
                                    >1</a
                                    ><a
                                        href="blog?b1d3bc67_page=12#"
                                        fs-cmsload-element="page-dots"
                                        className="posts-pagination__btn is-dots"
                                    >...</a
                                    >
                                </div>
                            </div>
                        </div>
                        <div className="hide">
                            <div fs-cmsfilter-element="empty" className="columns mod--blog-empty">
                                <div className="columns__col is-1-old mod--blog-empty">
                                    <h3 className="heading-5 mod--blog-empty">
                                        Sorry, no results were found for your request
                                    </h3>
                                    <div className="blog__empty-desc">
                                        Please try using different keywords:
                                    </div>
                                    <div className="collection w-dyn-list">
                                        <div
                                            role="list"
                                            className="collection__list mod--category-more w-dyn-items"
                                        >
                                            <div role="listitem" className="collection__item w-dyn-item">
                                                <a
                                                    data-hover-prevent-responsive=""
                                                    data-hover=""
                                                    href="category/insights"
                                                    className="category__btn w-inline-block"
                                                >
                                                    <div className="button__overflow">
                                                        <div data-hover-elem="" className="button__texts">
                                                            <div className="button__text">Insights</div>
                                                            <div className="button__text is-absolute">
                                                                Insights
                                                            </div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                            <div role="listitem" className="collection__item w-dyn-item">
                                                <a
                                                    data-hover-prevent-responsive=""
                                                    data-hover=""
                                                    href="category/development"
                                                    className="category__btn w-inline-block"
                                                >
                                                    <div className="button__overflow">
                                                        <div data-hover-elem="" className="button__texts">
                                                            <div className="button__text">Development</div>
                                                            <div className="button__text is-absolute">
                                                                Development
                                                            </div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                            <div role="listitem" className="collection__item w-dyn-item">
                                                <a
                                                    data-hover-prevent-responsive=""
                                                    data-hover=""
                                                    href="category/design"
                                                    className="category__btn w-inline-block"
                                                >
                                                    <div className="button__overflow">
                                                        <div data-hover-elem="" className="button__texts">
                                                            <div className="button__text">Design</div>
                                                            <div className="button__text is-absolute">Design</div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                            <div role="listitem" className="collection__item w-dyn-item">
                                                <a
                                                    data-hover-prevent-responsive=""
                                                    data-hover=""
                                                    href="category/case-studies"
                                                    className="category__btn w-inline-block"
                                                >
                                                    <div className="button__overflow">
                                                        <div data-hover-elem="" className="button__texts">
                                                            <div className="button__text">Case Studies</div>
                                                            <div className="button__text is-absolute">
                                                                Case Studies
                                                            </div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                            <div role="listitem" className="collection__item w-dyn-item">
                                                <a
                                                    data-hover-prevent-responsive=""
                                                    data-hover=""
                                                    href="category/seo"
                                                    className="category__btn w-inline-block"
                                                >
                                                    <div className="button__overflow">
                                                        <div data-hover-elem="" className="button__texts">
                                                            <div className="button__text">Seo</div>
                                                            <div className="button__text is-absolute">Seo</div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                            <div role="listitem" className="collection__item w-dyn-item">
                                                <a
                                                    data-hover-prevent-responsive=""
                                                    data-hover=""
                                                    href="category/news"
                                                    className="category__btn w-inline-block"
                                                >
                                                    <div className="button__overflow">
                                                        <div data-hover-elem="" className="button__texts">
                                                            <div className="button__text">News</div>
                                                            <div className="button__text is-absolute">News</div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="columns__col is-2-old mod--blog-empty">
                                    <div className="blog__empty-img-wrap is-bg">
                                        <img
                                            src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6425962988caebb22ffaf202_empty-state-bg.png"
                                            loading="lazy"
                                            sizes="100vw"
                                            srcset="
                        https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6425962988caebb22ffaf202_empty-state-bg-p-500.png   500w,
                        https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6425962988caebb22ffaf202_empty-state-bg-p-800.png   800w,
                        https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6425962988caebb22ffaf202_empty-state-bg-p-1080.png 1080w,
                        https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6425962988caebb22ffaf202_empty-state-bg.png        1282w
                      "
                                            alt="empty state background"
                                            className="blog__empty-bg"
                                        />
                                    </div>
                                    <div className="blog__empty-img-wrap">
                                        <img
                                            src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/642597d4e4f1568eeb7c8e3f_empty.gif"
                                            loading="lazy"
                                            alt="empty image"
                                            className="blog__empty-gif"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="discuss" className="section mod--discuss">
                    <div
                        data-w-id="7092799e-d269-0bf1-02e2-a8316ce8ccd0"
                        className="container"
                    >
                        <div className="columns mod--discuss">
                            <div className="columns__col mod--discuss is-1">
                                <div className="form-wrapper mod--discuss w-form">
                                    <form
                                        id="wf-form-Discuss"
                                        name="wf-form-Discuss"
                                        data-name="Discuss"
                                        method="get"
                                        target="form-order"
                                        className="form"
                                        data-wf-page-id="65e02e1378aeac8c4c4d9b84"
                                        data-wf-element-id="7092799e-d269-0bf1-02e2-a8316ce8ccd2"
                                    >
                                        <div className="form__content">
                                            <h2 className="heading-4">
                                                Ready to discuss <br />your project with us?
                                            </h2>
                                            <div className="form__fields">
                                                <div className="form__field is-half">
                                                    <div className="input-wrap is-half">
                                                        <label for="Discuss-Name" className="form__label active"
                                                        >Full Name</label
                                                        ><input
                                                            className="input w-input"
                                                            maxlength="256"
                                                            name="Full-Name"
                                                            data-name="Full Name"
                                                            placeholder="Full Name"
                                                            data-input-anim=""
                                                            type="text"
                                                            id="Discuss-Name"
                                                        />
                                                    </div>
                                                    <div className="input-wrap is-half">
                                                        <label for="Discuss-email" className="form__label"
                                                        >Email
                                                            <span className="text-color-red">*</span></label
                                                        ><input
                                                            className="input w-input"
                                                            maxlength="256"
                                                            name="Email"
                                                            data-name="Email"
                                                            placeholder="Email"
                                                            data-input-anim=""
                                                            type="email"
                                                            id="Discuss-email"
                                                            required=""
                                                        />
                                                        <div className="form__label-invalid anim">
                                                            Please, enter a valid email
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    id="w-node-_7092799e-d269-0bf1-02e2-a8316ce8cce4-6ce8cccf"
                                                    className="form__field"
                                                >
                                                    <div className="input-wrap">
                                                        <label
                                                            for="Discuss-About-Project"
                                                            className="form__label is--textarea active"
                                                        >About Project</label
                                                        ><textarea
                                                            className="input is-textarea w-input"
                                                            data-lenis-prevent=""
                                                            maxlength="5000"
                                                            name="About-Project"
                                                            data-name="About Project"
                                                            placeholder="About Project"
                                                            data-input-anim=""
                                                            id="Discuss-About-Project"
                                                        ></textarea>
                                                    </div>
                                                </div>
                                                <div
                                                    id="w-node-_7092799e-d269-0bf1-02e2-a8316ce8cce9-6ce8cccf"
                                                    className="form__field is-submit"
                                                >
                                                    <div className="input-wrap is-submit">
                                                        <div className="contact-form__policy">
                                                            By sending this form I confirm that I have read
                                                            and accept the
                                                            <a
                                                                href="cookie-policy#halo-lab-privacy-policy"
                                                                data-link-underline="blue"
                                                                className="text-color-blue"
                                                            >Privacy Policy</a
                                                            >
                                                        </div>
                                                        <div data-hover="" className="form-submit-wrap">
                                                            <a
                                                                href="blog?b1d3bc67_page=12#"
                                                                className="button w-inline-block"
                                                            >
                                                                <div className="button__overflow">
                                                                    <div
                                                                        data-hover-elem=""
                                                                        className="button__texts active"
                                                                    >
                                                                        <div className="button__text is-absolute">
                                                                            SEND A MESsage
                                                                        </div>
                                                                        <div className="button__text">
                                                                            SEND A MESsage
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    data-hover-elem=""
                                                                    className="button__icons is-white active"
                                                                >
                                                                    <div
                                                                        data-hover-elem=""
                                                                        className="button__icon-anim"
                                                                    >
                                                                        <div className="icon-small w-embed">
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
                                                                                    d="M3.5 8a1 1 0 0 1 1-1h4a1 1 0 0 1 0 2h-4a1 1 0 0 1-1-1Z"
                                                                                    clip-rule="evenodd"
                                                                                />
                                                                                <path
                                                                                    fill-rule="evenodd"
                                                                                    d="M14.216 6.693a1.494 1.494 0 0 1 0 2.615L3.664 15.222a1.5 1.5 0 0 1-2.148-1.823L3.447 8l-1.93-5.398A1.5 1.5 0 0 1 3.662.779l10.553 5.914ZM12.458 8 3.845 3.173l1.545 4.32c.119.328.119.687 0 1.015l-1.545 4.32L12.457 8Z"
                                                                                    clip-rule="evenodd"
                                                                                />
                                                                            </svg>
                                                                        </div>
                                                                        <div className="icon-small is-absolute w-embed">
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
                                                                                    d="M3.5 8a1 1 0 0 1 1-1h4a1 1 0 0 1 0 2h-4a1 1 0 0 1-1-1Z"
                                                                                    clip-rule="evenodd"
                                                                                />
                                                                                <path
                                                                                    fill-rule="evenodd"
                                                                                    d="M14.216 6.693a1.494 1.494 0 0 1 0 2.615L3.664 15.222a1.5 1.5 0 0 1-2.148-1.823L3.447 8l-1.93-5.398A1.5 1.5 0 0 1 3.662.779l10.553 5.914ZM12.458 8 3.845 3.173l1.545 4.32c.119.328.119.687 0 1.015l-1.545 4.32L12.457 8Z"
                                                                                    clip-rule="evenodd"
                                                                                />
                                                                            </svg>
                                                                        </div>
                                                                    </div>
                                                                    <div
                                                                        data-hover-elem=""
                                                                        className="button__bg active"
                                                                    ></div>
                                                                </div> </a
                                                            ><input
                                                                type="submit"
                                                                data-wait="Please wait..."
                                                                className="form-submit is-absolute w-button"
                                                                value="Submit"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                    <div className="form-success w-form-done">
                                        <div className="form__content">
                                            <h2 className="heading-4">
                                                Thank you!<br />We will contact you ASAP!
                                            </h2>
                                            <div className="success__video mod--discuss w-embed">
                                                <video
                                                    className="success__video"
                                                    style={{ marginTop: "0rem" }}
                                                    autoplay
                                                    loop
                                                    muted
                                                    playsinline
                                                    loading="lazy"
                                                >
                                                    <source
                                                        src="https://d3vlq52qrgdnc2.cloudfront.net/Form-Success.webm"
                                                        type="video/webm"
                                                    />
                                                    <source
                                                        src="https://d3vlq52qrgdnc2.cloudfront.net/Form-Success.mp4"
                                                        type="video/mp4"
                                                    />
                                                </video>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-error w-form-fail">
                                        <div className="error-popup-wrap">
                                            <div className="error-popup">
                                                <img
                                                    src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6466312f14415ae38f7bb897_error__img.webp"
                                                    loading="lazy"
                                                    alt="error image"
                                                    className="error__video"
                                                /><img
                                                    src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/642430ed0c544e31ed241358_icon-close.svg"
                                                    loading="lazy"
                                                    alt="close icon"
                                                    className="error__icon"
                                                />
                                                <h6 className="heading-6 text-align-center mod--error">
                                                    Hmm...something went wrong. Please try again 🙏
                                                </h6>
                                                <div data-hover="" className="button mod--case">
                                                    <div className="overflow-hidden is-wide">
                                                        <div className="button__texts active">
                                                            <div className="button__text">SEND AGAIN</div>
                                                            <div className="button__text is-absolute">
                                                                SEND AGAIN
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <img
                                                        src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6466326303de460a821a270a_error__icon.svg"
                                                        loading="lazy"
                                                        alt="error icon"
                                                        className="icon-medium"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="columns__col mod--discuss is-2">
                                <div className="discuss__sidebar">
                                    <div className="discuss__sidebar-top">
                                        <img
                                            width="31"
                                            height="31"
                                            src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/64ba8960d94f86aae7e77933_icon-clutch.svg"
                                            loading="lazy"
                                            alt="clutch icon"
                                            className="discuss__reviews-icon"
                                        />
                                        <h3 className="heading-6">Our clients say</h3>
                                    </div>
                                    <div className="discuss__sidebar-body">
                                        <div data-swiper="reviews-form" className="swiper mod--discuss">
                                            <div className="swiper-wrapper">
                                                <div className="swiper-slide mod--discuss">
                                                    <div className="text-size-20 text-weight-medium">
                                                        The site developed by Alphabet Technology projected a very
                                                        premium experience, successfully delivering the
                                                        client’s messaging to customers. Despite external
                                                        challenges, the team’s performance was exceptional.
                                                    </div>
                                                    <div className="author">
                                                        <img
                                                            width="56"
                                                            alt="Aaron Nwabuoku avatar"
                                                            src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/641c384be46dfd24f8039d6c_form-review-ava-01.webp"
                                                            loading="lazy"
                                                            className="author__ava"
                                                        />
                                                        <div className="author__text-wrap">
                                                            <div className="text-weight-medium">
                                                                Aaron Nwabuoku
                                                            </div>
                                                            <div className="text-size-14 opacity-60">
                                                                Founder, ChatKitty
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="swiper-slide mod--discuss">
                                                    <div className="text-size-20 text-weight-medium">
                                                        Thanks to Alphabet Technology&#x27;s work, the client scored 95
                                                        points on the PageSpeed insights test and increased
                                                        their CR by 7.5%. They frequently communicated via
                                                        Slack and Google Meet, ensuring an effective
                                                        workflow.
                                                    </div>
                                                    <div className="author">
                                                        <img
                                                            width="56"
                                                            alt="Viktor Rovkach avatar"
                                                            src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/650d626822cc3e81c79a8aab_form-review-ava-02.webp"
                                                            loading="lazy"
                                                            className="author__ava"
                                                        />
                                                        <div className="author__text-wrap">
                                                            <div className="text-weight-medium">
                                                                Viktor Rovkach
                                                            </div>
                                                            <div className="text-size-14 opacity-60">
                                                                Brand Manager at felyx
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="swiper-slide mod--discuss">
                                                    <div className="text-size-20 text-weight-medium">
                                                        The client is thrilled with the new site and excited
                                                        to deploy it soon. Alphabet Technology manages tasks well and
                                                        communicates regularly to ensure both sides are
                                                        always on the same page and all of the client’s
                                                        needs are addressed promptly.
                                                    </div>
                                                    <div className="author">
                                                        <img
                                                            width="56"
                                                            alt="Rahil Sachak Patwa avatar"
                                                            src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/641c3ce08742cc3c0200b362_form-review-ava-03.webp"
                                                            loading="lazy"
                                                            className="author__ava"
                                                        />
                                                        <div className="author__text-wrap">
                                                            <div className="text-weight-medium">
                                                                Rahil Sachak Patwa
                                                            </div>
                                                            <div className="text-size-14 opacity-60">
                                                                Founder, TutorChase
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="discuss__bg-wrap">
                        <div className="discuss__bg w-embed">
                            <video
                                className="discuss__bg"
                                autoplay
                                loop
                                muted
                                playsinline
                                loading="lazy"
                            >
                                <source
                                    src="https://d3vlq52qrgdnc2.cloudfront.net/bg-discuss.mp4"
                                    type="video/mp4"
                                />
                            </video>
                        </div>
                    </div>
                </section>
            </main >
            <Footer />
        </>)
}

export default index