import Document, {Head, Main, NextScript} from 'next/document';
import {ServerStyleSheet} from 'styled-components';
import FavIcon from 'common/src/assets/image/favicon-16x16.png';
// import FavIcon from 'common/src/assets/image/favicon.ico';
import FavIcon16 from 'common/src/assets/image/favicon-16x16.png';
import FavIcon32 from 'common/src/assets/image/favicon-32x32.png';
import FavIcon96 from 'common/src/assets/image/favicon-96x96.png';
import FavIcon128 from 'common/src/assets/image/favicon-128.png';
import FavIcon196 from 'common/src/assets/image/favicon-196x196.png';

import AppleIcon57 from 'common/src/assets/image/apple-touch-icon-57x57.png';
import AppleIcon60 from 'common/src/assets/image/apple-touch-icon-60x60.png';
import AppleIcon72 from 'common/src/assets/image/apple-touch-icon-72x72.png';
import AppleIcon76 from 'common/src/assets/image/apple-touch-icon-76x76.png';
import AppleIcon114 from 'common/src/assets/image/apple-touch-icon-114x114.png';
import AppleIcon120 from 'common/src/assets/image/apple-touch-icon-120x120.png';
import AppleIcon144 from 'common/src/assets/image/apple-touch-icon-144x144.png';
import AppleIcon152 from 'common/src/assets/image/apple-touch-icon-152x152.png';

import MsIcon70 from 'common/src/assets/image/mstile-70x70.png';
import MsIcon144 from 'common/src/assets/image/mstile-144x144.png';
import MsIcon150 from 'common/src/assets/image/mstile-150x150.png';
import MsIcon310v from 'common/src/assets/image/mstile-310x150.png';
import MsIcon310h from 'common/src/assets/image/mstile-310x310.png';
import React from "react";

export default class CustomDocument extends Document {
    static async getInitialProps(ctx) {
        const sheet = new ServerStyleSheet();
        const originalRenderPage = ctx.renderPage;

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
                });

            const initialProps = await Document.getInitialProps(ctx);
            return {
                ...initialProps,
                styles: (
                    <>
            {initialProps.styles}
                        {sheet.getStyleElement()}
          </>
                ),
            };
        } finally {
            sheet.seal();
        }
    }

    render() {
        return <html lang="en">
        <Head>
          <link rel="shortcut icon" type="image/x-icon" href={FavIcon} />
          <link rel="apple-touch-icon-precomposed" sizes="57x57" href={AppleIcon57} />
          <link rel="apple-touch-icon-precomposed" sizes="114x114" href={AppleIcon114} />
          <link rel="apple-touch-icon-precomposed" sizes="72x72" href={AppleIcon72} />
          <link rel="apple-touch-icon-precomposed" sizes="144x144" href={AppleIcon144} />
          <link rel="apple-touch-icon-precomposed" sizes="60x60" href={AppleIcon60} />
          <link rel="apple-touch-icon-precomposed" sizes="120x120" href={AppleIcon120} />
          <link rel="apple-touch-icon-precomposed" sizes="76x76" href={AppleIcon76} />
          <link rel="apple-touch-icon-precomposed" sizes="152x152" href={AppleIcon152} />
          <link rel="icon" type="image/png" href={FavIcon196} sizes="196x196" />
          <link rel="icon" type="image/png" href={FavIcon96} sizes="96x96" />
          <link rel="icon" type="image/png" href={FavIcon32} sizes="32x32" />
          <link rel="icon" type="image/png" href={FavIcon16} sizes="16x16" />
          <link rel="icon" type="image/png" href={FavIcon128} sizes="128x128" />
          <meta name="application-name" content="&nbsp;" />
          <meta name="msapplication-TileColor" content="#FFFFFF" />
          <meta name="msapplication-TileImage" content={MsIcon144} />
          <meta name="msapplication-square70x70logo" content={MsIcon70} />
          <meta name="msapplication-square150x150logo" content={MsIcon150} />
          <meta name="msapplication-wide310x150logo" content={MsIcon310v} />
          <meta name="msapplication-square310x310logo" content={MsIcon310h} />

          <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        </Head>
        <body>
          <Main />
          <NextScript />

          <script src="https://static.moonmail.io/mm-embedded-form.js"></script>
          <script dangerouslySetInnerHTML={{__html: `mmOptions = {
            "config": {
                "reCapcha": false,
                "redirectUrl": false
            },
            "translations": {
                "required": "This field is required.",
                "email": "Please enter a valid email address.",
                "emailExists": "Email already exists.",
                "onlyLetters": "Only letters and spaces are allowed.",
                "success": "Please check your email to confirm subscription",
                "error": "Oops! Something went wrong..."
            }
        }`}} />

        </body>
      </html>;
    }
}
