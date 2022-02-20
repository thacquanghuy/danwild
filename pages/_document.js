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
          {/* <script
            async
            defer
            src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAPQoNeWrSYOaJsYuuffPT7ubIa9TJmdrw&callback=initMap"
          ></script> */}
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
