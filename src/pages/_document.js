import { Html, Head, Main, NextScript } from "next/document";

import $ from "jquery";
import Script from "next/script";

export default function Document() {
  return (
    <Html
      lang="en"
      data-wf-page="65e02e1278aeac8c4c4d9b29"
      data-wf-site="63f38a8c92397a024fcb9ae8"
      style={{ scrollBehavior: "smooth" }}
    >
      <Head>
        {/* Meta Tags */}
        <meta charSet="utf-8" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="/" />

        {/* Favicon and Touch Icons */}
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* External CSS Dependencies */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css"
        />
        {/* <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/remodal/1.1.1/remodal.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/remodal/1.1.1/remodal-default-theme.min.css"
        /> */}
        <link
          rel="stylesheet"
          href="https://assets.slater.app/slater/826/3053.css?v=1.2"
        />
        <link rel="stylesheet" href="https://cdn.plyr.io/3.7.8/plyr.css" />
      </Head>

      <body className="antialiased">
        <Main />
        <NextScript />

        {/* External Scripts with optimization */}
        <Script
          id="alert-blocker"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
      window.alert = function() {};
      window.console.warn = function() {};
      window.confirm = function() { return false; };
    `,
          }}
        />
        <Script
          src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js"
          integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />

        <Script
          src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/js/halo-lab.b47d30dd5.js"
          strategy="afterInteractive"
        />
        <Script
          src="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="https://cdn.jsdelivr.net/npm/@finsweet/cookie-consent@1/fs-cc.js"
          strategy="afterInteractive"
          id="fs-cc-script"
          fs-cc-mode="opt-in"
        />

        {/* Dynamic Slater Script Loader */}
        <Script
          id="slater-dynamic-script-loader"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const isStaging = window.location.origin.includes("webflow.io");

                // js main
                const scriptGlobal = document.createElement("script");
                scriptGlobal.src = isStaging
                  ? "https://slater.app/826/1521.js"
                  : "https://assets.slater.app/slater/826/1521.js?v=3.0";
                scriptGlobal.defer = true;
                document.body.appendChild(scriptGlobal);

                // js animation
                const scriptAnim = document.createElement("script");
                scriptAnim.src = isStaging
                  ? "https://slater.app/826/2754.js"
                  : "https://assets.slater.app/slater/826/2754.js?v=1.4";
                scriptAnim.defer = true;
                document.body.appendChild(scriptAnim);
              })();
            `,
          }}
        />
      </body>
    </Html>
  );
}
