import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'

const blogDetail = () => {
    return (
        <>
            <Navbar />
            <main class="main bg-color-white">
                <section class="section mod--post-hero">
                    <div class="container mod--hero-post">
                        <ul role="list" class="breadcrumb-list w-list-unstyled">
                            <li class="breadcrumb__item"><a data-link-underline="" href="../blog" class="breadcrumb__text">ALL BLOG POSTS</a>
                                <div class="breadcrumb__separ">/</div>
                            </li>
                            <li class="breadcrumb__item"><a data-link-underline="" href="../category/design" class="breadcrumb__text">Design</a></li>
                        </ul>
                        <div class="hero-post__heading-wrap">
                            <h1 class="heading-2">How to get featured on Product Hunt: 15 expert tips for maximum success
                            </h1>
                        </div>
                        <div class="columns mod--hero-param">
                            <div class="columns__col mod--hero-post-param">
                                <div class="post__param"><img src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/640081069daa17d3ad8ec7df_icon-calendar.svg" loading="lazy" alt="calendar icon" class="icon-regular" />
                                    <div class="post__param-date">
                                        <div class="w-condition-invisible">29 Feb</div>
                                        <div>7 May</div>
                                    </div>
                                </div>
                            </div>
                            <div class="columns__col mod--hero-post-param">
                                <a href="5-principles-of-good-design#article" data-customScroll="" class="post__param mod--scroll w-inline-block">
                                    <div class="icon-regular" data-w-id="1a88c845-8ec9-909c-7c3a-c8ba08cf9b38" data-animation-type="lottie" data-src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6538e581a723b6fc4ff1e353_icon-scroll.json" data-loop="1" data-direction="1" data-autoplay="1"
                                        data-is-ix2-target="0" data-renderer="svg" data-default-duration="1.5166666666666666" data-duration="0"></div>
                                    <div>scroll</div>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="article" data-section-white="" class="section text-color-dark">
                    <div class="container mod--post">
                        <div class="columns mod--post-main">
                            <div class="columns__col mod--post-main is-1">
                                <div data-sidebar-sticky="" class="post__share is--sidebar-anim">
                                    <div class="share__title">SHARE</div>
                                    <div class="share__links">
                                        <div data-hover="" fs-socialshare-element="LinkedIn" class="post-share__btn">
                                            <div data-hover-elem="" class="button__icon-anim mod--share active"><img src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/640091a4aa41743c3edc04f5_icon-linkedin.svg" loading="lazy" alt="linkedin icon" class="icon-regular mod--share" /><img src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/640091a4aa41743c3edc04f5_icon-linkedin.svg"
                                                loading="lazy" data-hover-elem="" alt="linkedin icon" class="icon-regular is-absolute mod--share" /></div>
                                            <div data-hover-elem="" class="button__bg mod--share-linkedin active"></div>
                                        </div>
                                        <div data-hover="" fs-socialshare-element="Facebook" class="post-share__btn">
                                            <div data-hover-elem="" class="button__icon-anim mod--share active"><img src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/640091a40bf3aa43634d367c_icon-facebook.svg" loading="lazy" alt="facebook icon" class="icon-regular mod--share" /><img src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/640091a40bf3aa43634d367c_icon-facebook.svg"
                                                loading="lazy" data-hober-elem="" alt="facebook icon" class="icon-regular is-absolute mod--share" /></div>
                                            <div data-hover-elem="" class="button__bg mod--share-fb active"></div>
                                        </div>
                                        <div data-hover="" fs-socialshare-element="Twitter" class="post-share__btn">
                                            <div data-hover-elem="" class="button__icon-anim mod--share active"><img src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6538e77d61b7941def5029df_icon-twitter.svg" loading="lazy" alt="" class="icon-regular mod--share" /><img src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6538e77d61b7941def5029df_icon-twitter.svg"
                                                loading="lazy" data-hover-elem="" alt="" class="icon-regular is-absolute mod--share" /></div>
                                            <div data-hover-elem="" class="button__bg mod--share-twitter active"></div>
                                        </div>
                                        <div data-hover="" data-clipboard-url="" class="post-share__btn">
                                            <div data-hover-elem="" class="button__icon-anim mod--share active"><img src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/640091a4aa41747500dc04f6_icon-link.svg" loading="lazy" alt="link icon" class="icon-regular mod--share" /><img src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/640091a4aa41747500dc04f6_icon-link.svg"
                                                loading="lazy" alt="link icon" class="icon-regular is-absolute mod--share" /></div>
                                            <div data-hover-elem="" class="button__bg mod--share-link active"></div>
                                            <div data-anim="" class="post-share__notice active">
                                                <div data-anim="" class="post-share__notice-anim active"><img src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6481d9a928737610f9397707_icon-%D1%81keck.svg" loading="eager" alt="" class="icon-regular is-checked" /></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="columns__col mod--post-main is-2">
                                <div class="columns mod--post-header">
                                    <div class="columns__col mod--post is-1">
                                        <p class="heading-6 mod--post-description">If we establish a parallel amongst the good designs of various companies, we can detect several common points, let us call them principles. We made a compilation of five principles needed to create a good design.</p>
                                    </div>
                                    <div class="columns__col mod--post is-2">
                                        <div class="post-author">
                                            <a href="../author/valentine-boyev" class="post-author__link w-inline-block">
                                                <div class="author"><img src="https://cdn.prod.website-files.com/63fc977c14aaea404dce4439/63ff85841141c24449d163ca_cms-author-11.webp" loading="lazy" alt="" class="author__ava" />
                                                    <div class="author__text-wrap">
                                                        <div class="text-weight-medium">Valentine Boyev</div>
                                                        <div class="text-size-14 opacity-60">CEO at Alphabet Technology</div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div class="columns mod--post">
                                    <div class="columns__col mod--post is-1">
                                        <div data-links-underline="blue" fs-toc-element="contents" fs-toc-offsettop="2rem" fs-richtext-element="rich-text" fs-codehighlight-element="code" fs-codehighlight-theme="webflow" class="post__rich-text w-richtext">
                                            <h2>Typography</h2>
                                            <p>Communication within the web design context frequently means text. Oliver Reichenstein, who is an information director and founder of Information Architect, conducted a mini-research project and discovered that
                                                95% of web design is made up of typography. The typography in a good design should have a minimum number of fonts, an appropriate line length, an optimal line spacing, and a well-viewed structure. Now we will
                                                focus on each of these factors in sequence.</p>
                                            <p><strong>The minimum number of typefaces</strong> is necessary to keep the composition clear and avoid any chaos in it. The best decision is to use fonts that belong to the same font family or have common characteristics.
                                                Then they will come together more harmoniously.</p>
                                            <figure class="w-richtext-align-center w-richtext-figure-type-image">
                                                <div><img src="https://cdn.prod.website-files.com/63fc977c14aaea404dce4439/6488764fd8aaae55bc4eb885_image%2063346643.png" alt="An example of the typography used in the interior design" loading="lazy" /></div>
                                                <figcaption>An example of the typography used in the interior design</figcaption>
                                            </figure>
                                            <p><strong>The appropriate length of the line</strong> is the key to the text reading on a site. There must be a golden mean because when the length is too short the dynamics of the text are lost and the reader must
                                                continuously interrupt their reading to take up another line. But if it is too long, it will take a lot of time to focus on what is learned. The width of the line should contain up to 60 symbols. This is the
                                                amount that the Baymard Institute recommends for the most comfortable use of the site by the user.</p>
                                            <p><strong>Optimal line spacing,</strong> or as it is also called line height, contributes to the text readability. According to the rules, the line spacing is supposed to be 30% more than the height of the symbol,
                                                if we are talking about a paragraph. When it comes to a couple of text lines, the leading indicators should be less so that the text does not fall apart.</p>
                                            <p><strong>The structure of the typography</strong> is its final design. When a person sees in front of them nothing but letters, it becomes complicated to understand the meaning of this chaos. If it is split into
                                                words, sentences, and meaningful blocks, it seems real to understand the content. The task can be facilitated if the text is structured, the headers are stripped with a different size, the style is changed,
                                                and quotes are highlighted. Afterward, the text can be read much easier and faster.</p>
                                            <figure class="w-richtext-align-center w-richtext-figure-type-image">
                                                <div><img src="https://cdn.prod.website-files.com/63fc977c14aaea404dce4439/6488766a4a3116e3ea6a45a7_image%2063346644.png" alt="The “Minimalist graphics”, Julia Schonlau" loading="lazy" /></div>
                                                <figcaption>The “Minimalist graphics”, Julia Schonlau</figcaption>
                                            </figure>
                                            <h2>Minimalism — keep it simple</h2>
                                            <p>What is commonly described as multitasking, in fact, is a quick switching between tasks. People at high speed turn from one object to another, only changing the focus of attention. For this, an intense concentration
                                                of attention and great intellectual work is required.<br />The principle “keep it simple” is based on the first law of usability – the web page should be visible. It also has such advantages as simple navigation,
                                                fast resource loading, consistency and focuses on content.</p>
                                            <p><strong>Simple navigation</strong> is achieved by the absence of unnecessary elements and simple structure, respectively, with download <strong>speed being top.</strong> The less a user needs to wonder about the
                                                purpose of their actions, the better their impression of the site — it is the essential usability principle. Due to minimalism, it is getting right to refocus the <strong>visitor’s attention</strong> on the
                                                essential features.</p>
                                            <figure class="w-richtext-align-center w-richtext-figure-type-image">
                                                <div><img src="https://cdn.prod.website-files.com/63fc977c14aaea404dce4439/6488768b24ac24b5ebccaf77_image%2063346645.png" alt="Product launch stages. Testing" loading="lazy" /></div>
                                                <figcaption>Product launch stages. Testing</figcaption>
                                            </figure>
                                            <h2>Test early, test often</h2>
                                            <p>Testing is essential because it provides you with the opportunity to assess the work accurately and take a look at what might go wrong with it. We discussed how important the testing process is in the <a href="why-is-mvp-an-excellent-choice-for-your-startup">MVP article</a>.
                                                It also assists in the correcting of gaps and examining what is suitable for the users and what is not.</p>
                                            <p>Firstly, testing is far more effective if it is conducted with a live target audience. It is also worth recalling <a href="https://en.wikipedia.org/wiki/Hardy%E2%80%93Weinberg_principle" target="_blank" rel="nofollow">Weinberg’s Law,</a>                                            which states that developers are not able to test their code, which also applies to designers. You must admit that it is not always possible to accurately assess what you are doing. And if you turned an “I am
                                                an artist, that’s how I see it” mode on, you can generally start to fight back against someone else’s criticism.</p>
                                            <p>And, secondly, testing should be started as early as possible. Thus the team saves time and lowers their budget. You don’t need to edit the mistakes as they can be prevented, and corrected something during the early
                                                stages. This is far cheaper than with a final product.</p>
                                            <figure class="w-richtext-align-center w-richtext-figure-type-image">
                                                <div><img src="https://cdn.prod.website-files.com/63fc977c14aaea404dce4439/648876a271cefced78ad62a9_image%2063346646.png" alt="The contrast between the wall and the postcard" loading="lazy" /></div>
                                                <figcaption>The contrast between the wall and the postcard</figcaption>
                                            </figure>
                                            <h2>Principle of contrast</h2>
                                            <p>The contrast is significant in design: it draws attention to the necessary details, makes the appearance more attractive and exciting to the user, and also creates a visual hierarchy. We will consider the role of
                                                size and color contrast.</p>
                                            <p>Through <strong>size contrast</strong>, you can emphasize more significant features or text headings/subheadings. This is performed in the following manner: we place two elements of the structure next to each other
                                                and the attention primarily is focused on the bigger object.</p>
                                            <p>Comfortability with the background <strong>color contrast</strong> speeds up the reading of the text. Before choosing a color scheme for your site, it’s worth initially drawing the attention to the foreground and
                                                background contrast. There are aspects to this, for example, the characteristics of contrast in non-textual content (video or animation), differ from the text. There are various tools to verify the level of
                                                the contrast, but for this, it is necessary to familiarize yourself with the indicators. For example, AA is the minimum contrast, AAA is improved, and Fail when the contrast is insufficient.</p>
                                            <figure class="w-richtext-align-center w-richtext-figure-type-image">
                                                <div><img src="https://cdn.prod.website-files.com/63fc977c14aaea404dce4439/648876bff2ff30c1ef28393b_image%2063346647.png" alt="Layout in the photo composition" loading="lazy" /></div>
                                                <figcaption>Layout in the photo composition</figcaption>
                                            </figure>
                                            <h2>Composition</h2>
                                            <p>The composition is the location of objects when they are in harmony with each other. It is through composition we can balance the features, that have different characteristics: color, shape, size, and significance.
                                                Accordingly, the aim of the composition is its balance. Curiously, elements that are closer to the central axis weigh more from those that are remote from the center. We will consider the importance of the color
                                                in a composition, the rule of thirds, and how both through composition a visual hierarchy is created.</p>
                                            <p><strong>Color</strong> in the composition plays an emotional component and attracts attention. Color contrast we’ve already discussed, now let’s talk about emotions. Depending on the saturation and hue of a particular
                                                color, it depends on how a person will perceive the product as a whole. If the colors are bright, then they will invigorate; if muffled, they will relax. Choose the emotion that you want to send to your visitor
                                                and the right color or its subtone.</p>
                                            <p><strong>The rule of thirds</strong> provides a better understanding of what and where to place. For use the rule of thirds, you need in your mind to divide the page into nine equal parts, visually by holding a couple
                                                of horizontal and vertical lines. According to psychology, people pay attention to the intersection of these lines, respectively – they are the most advantageous. This should be taken into account during the
                                                arrangement of the details in the composition.</p>
                                            <p>It is simple to control the user’s view — you need to create a <strong>visual hierarchy.</strong> A lot of psychological research has been done on this subject, and it’s worth remembering that people scan the screen
                                                with the letter Z. This information should be used to arrange the details on the page in the correct order and draw attention to particular elements.</p>
                                            <h2>Let us get this straight</h2>
                                            <p>While designing the site, it is worth remembering the users for whom you create it. Clear text, logical structure, appropriate contrast, minimalism and proper testing are the guarantee to good design and its underlying
                                                principles.
                                                <strong><br /></strong></p>
                                        </div>
                                        <div class="post__writing w-condition-invisible">
                                            <div class="text-size-20 text-weight-medium mod--post-writing">Writing team:</div>
                                            <div class="collection w-dyn-list">
                                                <div class="collection__empty w-dyn-empty">
                                                    <div>No items found.</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="post__share hide-desktop hide-tablet-only">
                                            <div class="text-size-20 text-weight-medium mod--post-writing">Share this article:</div>
                                            <div class="share__links">
                                                <div data-hover="" fs-socialshare-element="LinkedIn" class="post-share__btn">
                                                    <div data-hover-elem="" class="button__icon-anim mod--share active"><img src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/640091a4aa41743c3edc04f5_icon-linkedin.svg" loading="lazy" alt="linkedin icon" class="icon-regular mod--share" /><img src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/640091a4aa41743c3edc04f5_icon-linkedin.svg"
                                                        loading="lazy" data-hover-elem="" alt="linkedin icon" class="icon-regular is-absolute mod--share" /></div>
                                                    <div data-hover-elem="" class="button__bg mod--share-linkedin active"></div>
                                                </div>
                                                <div data-hover="" fs-socialshare-element="Facebook" class="post-share__btn">
                                                    <div data-hover-elem="" class="button__icon-anim mod--share active"><img src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/640091a40bf3aa43634d367c_icon-facebook.svg" loading="lazy" alt="facebook icon" class="icon-regular mod--share" /><img src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/640091a40bf3aa43634d367c_icon-facebook.svg"
                                                        loading="lazy" data-hober-elem="" alt="facebook icon" class="icon-regular is-absolute mod--share" /></div>
                                                    <div data-hover-elem="" class="button__bg mod--share-fb active"></div>
                                                </div>
                                                <div data-hover="" fs-socialshare-element="Twitter" class="post-share__btn">
                                                    <div data-hover-elem="" class="button__icon-anim mod--share active"><img src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6538e77d61b7941def5029df_icon-twitter.svg" loading="lazy" alt="" class="icon-regular mod--share" /><img src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6538e77d61b7941def5029df_icon-twitter.svg"
                                                        loading="lazy" data-hover-elem="" alt="" class="icon-regular is-absolute mod--share" /></div>
                                                    <div data-hover-elem="" class="button__bg mod--share-twitter active"></div>
                                                </div>
                                                <div data-hover="" data-clipboard-url="" class="post-share__btn">
                                                    <div data-hover-elem="" class="button__icon-anim mod--share active"><img src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/640091a4aa41747500dc04f6_icon-link.svg" loading="lazy" alt="link icon" class="icon-regular mod--share" /><img src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/640091a4aa41747500dc04f6_icon-link.svg"
                                                        loading="lazy" alt="link icon" class="icon-regular is-absolute mod--share" /></div>
                                                    <div data-hover-elem="" class="button__bg mod--share-link active"></div>
                                                    <div data-anim="" class="post-share__notice active">
                                                        <div data-anim="" class="post-share__notice-anim active"><img src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6481d9a928737610f9397707_icon-%D1%81keck.svg" loading="eager" alt="" class="icon-regular is-checked" /></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div id="estimation" data-w-id="0b236f01-1abf-3283-9db8-0404a64035c9" class="post__estimation">
                                            <div class="post-estimation__title">Have a project <br />in your mind? <br />Let’s communicate.</div>
                                            <a href="5-principles-of-good-design#discuss" data-hover="" class="button mod--post-estimation w-inline-block">
                                                <div class="button__overflow">
                                                    <div data-hover-elem="" class="button__texts active">
                                                        <div class="button__text">Get expert estimation</div>
                                                        <div class="button__text is-absolute">Get expert estimation</div>
                                                    </div>
                                                </div>
                                                <div data-hover-elem="" class="button__icons is-dark active">
                                                    <div data-hover-elem="" class="button__icon-anim is-diagonal-top">
                                                        <div class="icon-small w-embed"><svg aria-hidden="true" role="img" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="100%" height="100%">
                                                            <path fill-rule="evenodd" d="M12.707 3.293a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414-1.414l8-8a1 1 0 0 1 1.414 0Z" clip-rule="evenodd" />
                                                            <path fill-rule="evenodd" d="M5 4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0V5H6a1 1 0 0 1-1-1Z" clip-rule="evenodd" />
                                                        </svg></div>
                                                        <div class="icon-small is-absolute is-diagonal-top w-embed"><svg aria-hidden="true" role="img" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="100%" height="100%">
                                                            <path fill-rule="evenodd" d="M12.707 3.293a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414-1.414l8-8a1 1 0 0 1 1.414 0Z" clip-rule="evenodd" />
                                                            <path fill-rule="evenodd" d="M5 4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0V5H6a1 1 0 0 1-1-1Z" clip-rule="evenodd" />
                                                        </svg></div>
                                                    </div>
                                                    <div data-hover-elem="" class="button__bg bg-color-white active"></div>
                                                </div>
                                            </a><img src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6481e6fca5e223ab37bbf5c4_card-exeprt.webp" loading="eager" width="520" sizes="(max-width: 479px) 100vw, (max-width: 767px) 81vw, (max-width: 991px) 69vw, 36vw"
                                                alt="expert post" srcset="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6481e6fca5e223ab37bbf5c4_card-exeprt-p-500.webp 500w, https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6481e6fca5e223ab37bbf5c4_card-exeprt-p-800.webp 800w, https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6481e6fca5e223ab37bbf5c4_card-exeprt.webp 1040w"
                                                class="post-estimation__expert" /><img src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6481f10e77ecb95156cb3f6d_icon-card-exeprt.svg" loading="lazy" alt="expert photo" class="post-estimation__icon"
                                            />
                                            <div class="post-estimation__bg"></div>
                                        </div>
                                        <div class="post__faq w-condition-invisible">
                                            <h2 class="heading-6 mod--post">Frequently Asked Questions</h2>
                                            <div class="collection w-dyn-list">
                                                <div class="collection__empty w-dyn-empty">
                                                    <div>No items found.</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="post__faq w-condition-invisible">
                                            <h2 class="heading-6 mod--post">Frequently Asked Questions</h2>
                                            <div data-faq-cms="input" class="post__faq">
                                                <div data-hover="false" data-delay="0" class="dropdown-inter mod--post-faq w-dropdown">
                                                    <div class="dropdown__toggle mod--post-faq w-dropdown-toggle">
                                                        <div class="dropdown__title-wrap mod--post-faq">
                                                            <div data-faq-cms="title"></div>
                                                        </div>
                                                        <div class="dropdown__icon-wrap">
                                                            <div class="dropdown__icons">
                                                                <div class="dropdown__icon is-open w-embed"><svg aria-hidden="true" role="img" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100%" height="100%">
                                                                    <path fill-rule="evenodd" d="M12 4a1 1 0 0 1 1 1v14a1 1 0 1 1-2 0V5a1 1 0 0 1 1-1Z" clip-rule="evenodd" />
                                                                    <path fill-rule="evenodd" d="M4 12a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1Z" clip-rule="evenodd" />
                                                                </svg></div>
                                                                <div class="dropdown__icon is-close w-embed"><svg aria-hidden="true" role="img" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100%" height="100%">
                                                                    <path fill-rule="evenodd" d="M4 12a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1Z" clip-rule="evenodd" />
                                                                </svg></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <nav class="dropdown__list is-inter w-dropdown-list">
                                                        <div class="dropdown__content mod--post-faq">
                                                            <div data-links-underline="blue" class="post__rich-faq w-richtext"></div>
                                                        </div>
                                                    </nav>
                                                </div>
                                            </div>
                                            <div data-faq-cms="output" class="dropdown__rich-faq w-dyn-bind-empty w-richtext"></div>
                                        </div>
                                        <div class="hide">
                                            <div id="btn-copy-code" data-component="copy-code" data-hover="" class="button-copy-code">
                                                <div data-hover-elem="" class="button__icon-anim"><img src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/64883e74a985ecc423d6e362_icon-copy.svg" loading="eager" alt="copy icon" class="icon-regular is-copy-code" /><img src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/64883e74a985ecc423d6e362_icon-copy.svg"
                                                    loading="eager" alt="copy icon" class="icon-regular is-absolute is-copy-code" /></div>
                                                <div data-anim="" class="button-copy-code__notice active">
                                                    <div data-anim="" class="button-copy-code__notice-anim active"><img src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6481d9a928737610f9397707_icon-%D1%81keck.svg" loading="eager" alt="" class="icon-regular is-checked" /></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="columns__col mod--post is-2">
                                        <div class="blog-post__sidebar-wrap">
                                            <div data-sidebar-sticky="" class="post__sidebar is--sidebar-anim">
                                                <div data-toc="" id="w-node-_67e2ae5e-b29c-f891-5531-669bf0ddbfe3-4c4d9bad" class="toc">
                                                    <div class="toc__collar"></div>
                                                    <div class="toc__title">Table of contents</div>
                                                    <div scroll-style-grey="" data-lenis-prevent="" class="toc__list-scroll">
                                                        <ol role="list" class="toc__list">
                                                            <li class="toc__list-item">
                                                                <div data-toc-link="" class="toc__link is-lenis-scroll"></div><a href="5-principles-of-good-design#" fs-toc-element="link" class="toc__link">Tools to use when creating your PoC<br /></a>
                                                                <div data-toc-line="" class="toc__line"></div>
                                                            </li>
                                                        </ol>
                                                    </div>
                                                </div>
                                                <div class="timeread">
                                                    <div class="timeread__line">
                                                        <div class="timeread__line-fill"></div>
                                                    </div>
                                                    <div class="timeread__block"><img src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6400adcaa5e0a3f7a10e01ef_icon-time.svg" loading="lazy" alt="time icon" class="timeread__icon" />
                                                        <div data-timeread=""><span>5</span> min read</div>
                                                    </div>
                                                </div>
                                                <a data-remodal-target="join" data-hover="" id="w-node-_6473dce4-dee5-f952-364f-5fa7c280a806-4c4d9bad" href="5-principles-of-good-design#" class="button mod--post-subs w-inline-block">
                                                    <div class="button__overflow">
                                                        <div data-hover-elem="" class="button__texts">
                                                            <div class="button__text is-absolute">Subscribe to our blog</div>
                                                            <div class="button__text">Subscribe to our blog</div>
                                                        </div>
                                                    </div>
                                                    <div class="hide-tablet">
                                                        <div data-hover-elem="" class="button__icons is-medium is-white active">
                                                            <div data-hover-elem="" class="button__icon-anim is-diagonal-bottom active">
                                                                <div class="icon-regular mod--post-arrow-subs w-embed"><svg aria-hidden="true" role="img" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100%" height="100%">
                                                                    <path d="M18.707 5.293a1 1 0 0 1 0 1.414l-12 12a1 1 0 0 1-1.414-1.414l12-12a1 1 0 0 1 1.414 0Z" />
                                                                    <path d="M6 8a1 1 0 0 1 1 1v8h8a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1Z" />
                                                                </svg></div>
                                                                <div class="icon-regular is-absolute is-diagonal-bottom mod--post-arrow-subs w-embed"><svg aria-hidden="true" role="img" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100%" height="100%">
                                                                    <path d="M18.707 5.293a1 1 0 0 1 0 1.414l-12 12a1 1 0 0 1-1.414-1.414l12-12a1 1 0 0 1 1.414 0Z" />
                                                                    <path d="M6 8a1 1 0 0 1 1 1v8h8a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1Z" />
                                                                </svg></div>
                                                            </div>
                                                            <div data-hover-elem="" class="button__bg active"></div>
                                                        </div>
                                                    </div>
                                                    <div class="hide-desktop">
                                                        <div data-hover-elem="" class="button__icons is-medium is-white active">
                                                            <div data-hover-elem="" class="button__icon-anim is-diagonal-bottom active">
                                                                <div class="icon-regular mod--post-arrow-subs w-embed"><svg aria-hidden="true" role="img" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="100%" height="100%">
                                                                    <path fill-rule="evenodd" d="M12.707 3.293a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414-1.414l8-8a1 1 0 0 1 1.414 0Z" clip-rule="evenodd" />
                                                                    <path fill-rule="evenodd" d="M4 5a1 1 0 0 1 1 1v5h5a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z" clip-rule="evenodd" /></svg></div>
                                                                <div class="icon-regular is-absolute is-diagonal-bottom mod--post-arrow-subs w-embed"><svg aria-hidden="true" role="img" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="100%" height="100%">
                                                                    <path fill-rule="evenodd" d="M12.707 3.293a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414-1.414l8-8a1 1 0 0 1 1.414 0Z" clip-rule="evenodd" />
                                                                    <path fill-rule="evenodd" d="M4 5a1 1 0 0 1 1 1v5h5a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z" clip-rule="evenodd" /></svg></div>
                                                            </div>
                                                            <div data-hover-elem="" class="button__bg active"></div>
                                                        </div>
                                                    </div>
                                                </a>
                                                <div id="w-node-_2288188e-7095-131e-cf55-d947cebc4126-4c4d9bad" class="post__share hide-desktop hide-mobile-portrait">
                                                    <div class="share__links">
                                                        <div data-hover="" fs-socialshare-element="LinkedIn" class="post-share__btn">
                                                            <div data-hover-elem="" class="button__icon-anim mod--share active"><img src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/640091a4aa41743c3edc04f5_icon-linkedin.svg" loading="lazy" alt="linkedin icon" class="icon-regular mod--share" /><img src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/640091a4aa41743c3edc04f5_icon-linkedin.svg"
                                                                loading="lazy" data-hover-elem="" alt="linkedin icon" class="icon-regular is-absolute mod--share" /></div>
                                                            <div data-hover-elem="" class="button__bg mod--share-linkedin active"></div>
                                                        </div>
                                                        <div data-hover="" fs-socialshare-element="Facebook" class="post-share__btn">
                                                            <div data-hover-elem="" class="button__icon-anim mod--share active"><img src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/640091a40bf3aa43634d367c_icon-facebook.svg" loading="lazy" alt="facebook icon" class="icon-regular mod--share" /><img src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/640091a40bf3aa43634d367c_icon-facebook.svg"
                                                                loading="lazy" data-hober-elem="" alt="facebook icon" class="icon-regular is-absolute mod--share" /></div>
                                                            <div data-hover-elem="" class="button__bg mod--share-fb active"></div>
                                                        </div>
                                                        <div data-hover="" fs-socialshare-element="Twitter" class="post-share__btn">
                                                            <div data-hover-elem="" class="button__icon-anim mod--share active"><img src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6538e77d61b7941def5029df_icon-twitter.svg" loading="lazy" alt="" class="icon-regular mod--share" /><img src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6538e77d61b7941def5029df_icon-twitter.svg"
                                                                loading="lazy" data-hover-elem="" alt="" class="icon-regular is-absolute mod--share" /></div>
                                                            <div data-hover-elem="" class="button__bg mod--share-twitter active"></div>
                                                        </div>
                                                        <div data-hover="" data-clipboard-url="" class="post-share__btn">
                                                            <div data-hover-elem="" class="button__icon-anim mod--share active"><img src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/640091a4aa41747500dc04f6_icon-link.svg" loading="lazy" alt="link icon" class="icon-regular mod--share" /><img src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/640091a4aa41747500dc04f6_icon-link.svg"
                                                                loading="lazy" alt="link icon" class="icon-regular is-absolute mod--share" /></div>
                                                            <div data-hover-elem="" class="button__bg mod--share-link active"></div>
                                                            <div data-anim="" class="post-share__notice active">
                                                                <div data-anim="" class="post-share__notice-anim active"><img src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6481d9a928737610f9397707_icon-%D1%81keck.svg" loading="eager" alt="" class="icon-regular is-checked" /></div>
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
                </section>
                <section data-section-white="" class="section mod--posts-related">
                    <div class="container mod--posts-related">
                        <h2 class="heading-4">You may also like</h2>
                        <div class="collection w-dyn-list">
                            <div role="list" class="collection__list is-posts w-dyn-items">
                                <div role="listitem" class="collection__item is-posts mod--posts-related w-dyn-item">
                                    <div data-hover-parent="" class="post-card mod--related">
                                        <a data-hover="" href="mobile-app-design-process" class="post-card__img-link w-inline-block"><img loading="lazy" data-hover-elem="" alt="Mobile app design process" src="https://cdn.prod.website-files.com/63fc977c14aaea404dce4439/668bdf6e77a6dff9b8855e45_Illustration2.webp" sizes="(max-width: 479px) 85vw, (max-width: 767px) 43vw, (max-width: 991px) 27vw, 21vw"
                                            srcset="https://cdn.prod.website-files.com/63fc977c14aaea404dce4439/668bdf6e77a6dff9b8855e45_Illustration2-p-500.webp 500w, https://cdn.prod.website-files.com/63fc977c14aaea404dce4439/668bdf6e77a6dff9b8855e45_Illustration2-p-800.webp 800w, https://cdn.prod.website-files.com/63fc977c14aaea404dce4439/668bdf6e77a6dff9b8855e45_Illustration2.webp 1200w"
                                            class="post-card__img active" /></a>
                                        <a data-hover="" href="mobile-app-design-process" class="post-card__title-link w-inline-block">
                                            <h2 class="post-card__title">Alphabet Technology’s mobile app design process — our workflow and case examples</h2>
                                            <div class="hide">
                                                <div class="post-card__span-icons">
                                                    <div data-post-card-arrow="" class="post-card__icons">
                                                        <div data-hover-elem="" class="button__icon-anim">
                                                            <div class="post-card__icon opacity-0 w-embed"><svg aria-hidden="true" role="img" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 19" width="100%" height="100%">
                                                                <path fill-rule="evenodd" d="M6.25.879 14.871 9.5l-8.62 8.622L4.128 16l6.5-6.5-6.5-6.5L6.25.88Z" clip-rule="evenodd" />
                                                            </svg></div>
                                                            <div class="post-card__icon is-icon-absolute w-embed"><svg aria-hidden="true" role="img" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 19" width="100%" height="100%">
                                                                <path fill-rule="evenodd" d="M6.25.879 14.871 9.5l-8.62 8.622L4.128 16l6.5-6.5-6.5-6.5L6.25.88Z" clip-rule="evenodd" />
                                                            </svg></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div role="listitem" class="collection__item is-posts mod--posts-related w-dyn-item">
                                    <div data-hover-parent="" class="post-card mod--related">
                                        <a data-hover="" href="web-design-for-startups" class="post-card__img-link w-inline-block"><img loading="lazy" data-hover-elem="" alt="Web design for startups" src="https://cdn.prod.website-files.com/63fc977c14aaea404dce4439/668d313c5f86e403c78378f0_Illustration2.webp" sizes="(max-width: 479px) 85vw, (max-width: 767px) 43vw, (max-width: 991px) 27vw, 21vw"
                                            srcset="https://cdn.prod.website-files.com/63fc977c14aaea404dce4439/668d313c5f86e403c78378f0_Illustration2-p-500.webp 500w, https://cdn.prod.website-files.com/63fc977c14aaea404dce4439/668d313c5f86e403c78378f0_Illustration2-p-800.webp 800w, https://cdn.prod.website-files.com/63fc977c14aaea404dce4439/668d313c5f86e403c78378f0_Illustration2.webp 1200w"
                                            class="post-card__img active" /></a>
                                        <a data-hover="" href="web-design-for-startups" class="post-card__title-link w-inline-block">
                                            <h2 class="post-card__title">Effective web design for startups: practical tips &amp; examples</h2>
                                            <div class="hide">
                                                <div class="post-card__span-icons">
                                                    <div data-post-card-arrow="" class="post-card__icons">
                                                        <div data-hover-elem="" class="button__icon-anim">
                                                            <div class="post-card__icon opacity-0 w-embed"><svg aria-hidden="true" role="img" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 19" width="100%" height="100%">
                                                                <path fill-rule="evenodd" d="M6.25.879 14.871 9.5l-8.62 8.622L4.128 16l6.5-6.5-6.5-6.5L6.25.88Z" clip-rule="evenodd" />
                                                            </svg></div>
                                                            <div class="post-card__icon is-icon-absolute w-embed"><svg aria-hidden="true" role="img" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 19" width="100%" height="100%">
                                                                <path fill-rule="evenodd" d="M6.25.879 14.871 9.5l-8.62 8.622L4.128 16l6.5-6.5-6.5-6.5L6.25.88Z" clip-rule="evenodd" />
                                                            </svg></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div role="listitem" class="collection__item is-posts mod--posts-related w-dyn-item">
                                    <div data-hover-parent="" class="post-card mod--related">
                                        <a data-hover="" href="black-and-orange-websites" class="post-card__img-link w-inline-block"><img loading="lazy" data-hover-elem="" alt="Black and orange web design" src="https://cdn.prod.website-files.com/63fc977c14aaea404dce4439/667440d145d50fb01098a03a_Illustration2.webp" sizes="(max-width: 479px) 85vw, (max-width: 767px) 43vw, (max-width: 991px) 27vw, 21vw"
                                            srcset="https://cdn.prod.website-files.com/63fc977c14aaea404dce4439/667440d145d50fb01098a03a_Illustration2-p-500.webp 500w, https://cdn.prod.website-files.com/63fc977c14aaea404dce4439/667440d145d50fb01098a03a_Illustration2-p-800.webp 800w, https://cdn.prod.website-files.com/63fc977c14aaea404dce4439/667440d145d50fb01098a03a_Illustration2.webp 1200w"
                                            class="post-card__img active" /></a>
                                        <a data-hover="" href="black-and-orange-websites" class="post-card__title-link w-inline-block">
                                            <h2 class="post-card__title">Black and orange web designs for inspiration</h2>
                                            <div class="hide">
                                                <div class="post-card__span-icons">
                                                    <div data-post-card-arrow="" class="post-card__icons">
                                                        <div data-hover-elem="" class="button__icon-anim">
                                                            <div class="post-card__icon opacity-0 w-embed"><svg aria-hidden="true" role="img" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 19" width="100%" height="100%">
                                                                <path fill-rule="evenodd" d="M6.25.879 14.871 9.5l-8.62 8.622L4.128 16l6.5-6.5-6.5-6.5L6.25.88Z" clip-rule="evenodd" />
                                                            </svg></div>
                                                            <div class="post-card__icon is-icon-absolute w-embed"><svg aria-hidden="true" role="img" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 19" width="100%" height="100%">
                                                                <path fill-rule="evenodd" d="M6.25.879 14.871 9.5l-8.62 8.622L4.128 16l6.5-6.5-6.5-6.5L6.25.88Z" clip-rule="evenodd" />
                                                            </svg></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="discuss" class="section mod--discuss">
                    <div data-w-id="7092799e-d269-0bf1-02e2-a8316ce8ccd0" class="container">
                        <div class="columns mod--discuss">
                            <div class="columns__col mod--discuss is-1">
                                <div class="form-wrapper mod--discuss w-form">
                                    <form id="wf-form-Discuss" name="wf-form-Discuss" data-name="Discuss" method="get" target="form-order" class="form" data-wf-page-id="65e02e1378aeac8c4c4d9bad" data-wf-element-id="7092799e-d269-0bf1-02e2-a8316ce8ccd2">
                                        <div class="form__content">
                                            <h2 class="heading-4">Ready to discuss <br />your project with us?</h2>
                                            <div class="form__fields">
                                                <div class="form__field is-half">
                                                    <div class="input-wrap is-half"><label for="Discuss-Name" class="form__label active">Full Name</label><input class="input w-input" maxlength="256" name="Full-Name" data-name="Full Name" placeholder="Full Name" data-input-anim="" type="text"
                                                        id="Discuss-Name" /></div>
                                                    <div class="input-wrap is-half"><label for="Discuss-email" class="form__label">Email <span class="text-color-red">*</span></label><input class="input w-input" maxlength="256" name="Email" data-name="Email" placeholder="Email" data-input-anim=""
                                                        type="email" id="Discuss-email" required="" />
                                                        <div class="form__label-invalid anim">Please, enter a valid email</div>
                                                    </div>
                                                </div>
                                                <div id="w-node-_7092799e-d269-0bf1-02e2-a8316ce8cce4-6ce8cccf" class="form__field">
                                                    <div class="input-wrap"><label for="Discuss-About-Project" class="form__label is--textarea active">About Project</label><textarea class="input is-textarea w-input" data-lenis-prevent="" maxlength="5000" name="About-Project" data-name="About Project"
                                                        placeholder="About Project" data-input-anim="" id="Discuss-About-Project"></textarea></div>
                                                </div>
                                                <div id="w-node-_7092799e-d269-0bf1-02e2-a8316ce8cce9-6ce8cccf" class="form__field is-submit">
                                                    <div class="input-wrap is-submit">
                                                        <div class="contact-form__policy">By sending this form I confirm that I have read and accept the <a href="../cookie-policy#halo-lab-privacy-policy" data-link-underline="blue" class="text-color-blue">Privacy Policy</a></div>
                                                        <div data-hover="" class="form-submit-wrap">
                                                            <a href="5-principles-of-good-design#" class="button w-inline-block">
                                                                <div class="button__overflow">
                                                                    <div data-hover-elem="" class="button__texts active">
                                                                        <div class="button__text is-absolute">SEND A MESsage</div>
                                                                        <div class="button__text">SEND A MESsage</div>
                                                                    </div>
                                                                </div>
                                                                <div data-hover-elem="" class="button__icons is-white active">
                                                                    <div data-hover-elem="" class="button__icon-anim">
                                                                        <div class="icon-small w-embed"><svg aria-hidden="true" role="img" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="100%" height="100%">
                                                                            <path fill-rule="evenodd" d="M3.5 8a1 1 0 0 1 1-1h4a1 1 0 0 1 0 2h-4a1 1 0 0 1-1-1Z" clip-rule="evenodd" />
                                                                            <path fill-rule="evenodd" d="M14.216 6.693a1.494 1.494 0 0 1 0 2.615L3.664 15.222a1.5 1.5 0 0 1-2.148-1.823L3.447 8l-1.93-5.398A1.5 1.5 0 0 1 3.662.779l10.553 5.914ZM12.458 8 3.845 3.173l1.545 4.32c.119.328.119.687 0 1.015l-1.545 4.32L12.457 8Z" clip-rule="evenodd" />
                                                                        </svg></div>
                                                                        <div class="icon-small is-absolute w-embed"><svg aria-hidden="true" role="img" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="100%" height="100%">
                                                                            <path fill-rule="evenodd" d="M3.5 8a1 1 0 0 1 1-1h4a1 1 0 0 1 0 2h-4a1 1 0 0 1-1-1Z" clip-rule="evenodd" />
                                                                            <path fill-rule="evenodd" d="M14.216 6.693a1.494 1.494 0 0 1 0 2.615L3.664 15.222a1.5 1.5 0 0 1-2.148-1.823L3.447 8l-1.93-5.398A1.5 1.5 0 0 1 3.662.779l10.553 5.914ZM12.458 8 3.845 3.173l1.545 4.32c.119.328.119.687 0 1.015l-1.545 4.32L12.457 8Z" clip-rule="evenodd" />
                                                                        </svg></div>
                                                                    </div>
                                                                    <div data-hover-elem="" class="button__bg active"></div>
                                                                </div>
                                                            </a><input type="submit" data-wait="Please wait..." class="form-submit is-absolute w-button" value="Submit" /></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                    <div class="form-success w-form-done">
                                        <div class="form__content">
                                            <h2 class="heading-4">Thank you!<br />We will contact you ASAP!</h2>
                                            <div class="success__video mod--discuss w-embed"><video class="success__video" style={{ marginTop: "0rem" }} autoplay loop muted playsinline loading="lazy">
                                                <source src="https://d3vlq52qrgdnc2.cloudfront.net/Form-Success.webm" type="video/webm" />
                                                <source src="https://d3vlq52qrgdnc2.cloudfront.net/Form-Success.mp4" type="video/mp4" />
                                            </video></div>
                                        </div>
                                    </div>
                                    <div class="form-error w-form-fail">
                                        <div class="error-popup-wrap">
                                            <div class="error-popup"><img src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6466312f14415ae38f7bb897_error__img.webp" loading="lazy" alt="error image" class="error__video" /><img src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/642430ed0c544e31ed241358_icon-close.svg"
                                                loading="lazy" alt="close icon" class="error__icon" />
                                                <h6 class="heading-6 text-align-center mod--error">Hmm...something went wrong. Please try again 🙏</h6>
                                                <div data-hover="" class="button mod--case">
                                                    <div class="overflow-hidden is-wide">
                                                        <div class="button__texts active">
                                                            <div class="button__text">SEND AGAIN</div>
                                                            <div class="button__text is-absolute">SEND AGAIN</div>
                                                        </div>
                                                    </div><img src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6466326303de460a821a270a_error__icon.svg" loading="lazy" alt="error icon" class="icon-medium" /></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="columns__col mod--discuss is-2">
                                <div class="discuss__sidebar">
                                    <div class="discuss__sidebar-top"><img width="31" height="31" src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/64ba8960d94f86aae7e77933_icon-clutch.svg" loading="lazy" alt="clutch icon" class="discuss__reviews-icon" />
                                        <h3 class="heading-6">Our clients say</h3>
                                    </div>
                                    <div class="discuss__sidebar-body">
                                        <div data-swiper="reviews-form" class="swiper mod--discuss">
                                            <div class="swiper-wrapper">
                                                <div class="swiper-slide mod--discuss">
                                                    <div class="text-size-20 text-weight-medium">The site developed by Alphabet Technology projected a very premium experience, successfully delivering the client’s messaging to customers. Despite external challenges, the team’s performance was exceptional.</div>
                                                    <div class="author"><img width="56" alt="Aaron Nwabuoku avatar" src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/641c384be46dfd24f8039d6c_form-review-ava-01.webp" loading="lazy" class="author__ava" />
                                                        <div class="author__text-wrap">
                                                            <div class="text-weight-medium">Aaron Nwabuoku</div>
                                                            <div class="text-size-14 opacity-60">Founder, ChatKitty</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="swiper-slide mod--discuss">
                                                    <div class="text-size-20 text-weight-medium">Thanks to Alphabet Technology&#x27;s work, the client scored 95 points on the PageSpeed insights test and increased their CR by 7.5%. They frequently communicated via Slack and Google Meet, ensuring an effective workflow.</div>
                                                    <div class="author"><img width="56" alt="Viktor Rovkach avatar" src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/650d626822cc3e81c79a8aab_form-review-ava-02.webp" loading="lazy" class="author__ava" />
                                                        <div class="author__text-wrap">
                                                            <div class="text-weight-medium">Viktor Rovkach</div>
                                                            <div class="text-size-14 opacity-60">Brand Manager at felyx</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="swiper-slide mod--discuss">
                                                    <div class="text-size-20 text-weight-medium">The client is thrilled with the new site and excited to deploy it soon. Alphabet Technology manages tasks well and communicates regularly to ensure both sides are always on the same page and all of the client’s needs
                                                        are addressed promptly.
                                                    </div>
                                                    <div class="author"><img width="56" alt="Rahil Sachak Patwa avatar" src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/641c3ce08742cc3c0200b362_form-review-ava-03.webp" loading="lazy" class="author__ava" />
                                                        <div class="author__text-wrap">
                                                            <div class="text-weight-medium">Rahil Sachak Patwa</div>
                                                            <div class="text-size-14 opacity-60">Founder, TutorChase</div>
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
                    <div class="discuss__bg-wrap">
                        <div class="discuss__bg w-embed"><video class="discuss__bg" autoplay loop muted playsinline loading="lazy">
                            <source src="https://d3vlq52qrgdnc2.cloudfront.net/bg-discuss.mp4" type="video/mp4" />
                        </video></div>
                    </div>
                </section>
            </main>
            <Footer />
        </>

    )
}

export default blogDetail