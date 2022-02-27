/*global FB*/
import Document, { Html, Head, Main, NextScript } from 'next/document'
import React from 'react'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.cdnfonts.com/css/sofia-pro"
            rel="stylesheet"
          />
          <link
            href="https://fonts.cdnfonts.com/css/helvetica-neue-9"
            rel="stylesheet"
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Antic+Didone&family=Arima+Madurai:wght@100;200;300;400;500;700;800;900&family=Dancing+Script&family=Italiana&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.fbAsyncInit = function() {
              FB.init({
								appId            : '372845027621756',
								autoLogAppEvents : true,
								xfbml            : true,
								version          : 'v13.0'
              });
            };
            (function(d, s, id) {
              var js, fjs = d.getElementsByTagName(s)[0];
              if (d.getElementById(id)) return;
              js = d.createElement(s); js.id = id;
              js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
              fjs.parentNode.insertBefore(js, fjs);
            }(document, 'script', 'facebook-jssdk'));
            `,
            }}
          />
          <script
            async
            defer
            crossOrigin="anonymous"
            src="https://connect.facebook.net/en_US/sdk.js"
          ></script>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
