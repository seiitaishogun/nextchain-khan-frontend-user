import React from 'react';
import Head from 'next/head';
import Script from 'next/script';

export async function generateMetadata() {
  return {
    title: '스포츠경향 운세',
    description: '스포츠경향 운세 서비스',
    icons: {
      icon: `${process.env.APP_URL}/images/favicon_sk.ico`,
    },
    openGraph: {
      images: [
        {
          url: `${process.env.APP_IMAGE_URL}/m/common/og_logo_luck.jpg`,
          width: 1200,
          height: 628,
        },
      ],
    },
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isProduction = process.env.APP_ENV === 'production';

  return (
    <html lang="ko">
      <Head>
        <meta charSet="utf-8" />
      </Head>

      {isProduction && (
        <Script id="google-tag-manager-fles" strategy="lazyOnload">
          {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${process.env.GOOGLE_GTM_ID_FLES}');
          `}
        </Script>
      )}

      {isProduction && (
        // eslint-disable-next-line react/self-closing-comp
        <Script
          id="google-tag-manager-khan"
          src="https://static.khan.co.kr/GA/GA4/GoldenPlanet/WEB_GoogleAnalyticsBuilder.js"
        ></Script>
      )}
      {isProduction && (
        <Script id="google-tag-manager-khan-call" strategy="lazyOnload">
          {` 
          let pageviewObj = {}; sendGAPage(pageviewObj);
          `}
        </Script>
      )}

      <body>
        {isProduction && (
          <noscript
            dangerouslySetInnerHTML={{
              __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${process.env.GOOGLE_GTM_ID_FLES}"
                        height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
            }}
          />
        )}
        {children}
        <div className="is-stuckToBottom" />
      </body>
    </html>
  );
}
