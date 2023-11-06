import React, { useEffect, useMemo, useState } from 'react';

import useCookie from 'react-use-cookie';

import Script from 'next/script';

import { useModal } from 'hooks/modals';

import Cookies from 'components/cookies';
import { GA_TRACKING_ID, GTM_TRACKING_ID } from 'lib/analytics/ga';

const ThirdParty: React.FC = () => {
  const [consentCookie, setConsentCookie] = useCookie('consent', undefined);
  const [mounted, setMounted] = useState(false);

  const consent = useMemo(() => {
    if (consentCookie === 'true') return true;
    if (consentCookie === 'false') return false;
    return undefined;
  }, [consentCookie]);

  const { isOpen: isOpenCookies, open: openCookies, close: closeCookies } = useModal();

  const handleCookieClick = (c) => {
    setConsentCookie(String(c));
    closeCookies();
  };

  useEffect(() => {
    setMounted(true);

    if (!consentCookie) {
      openCookies();
    }
  }, [consentCookie, openCookies]);

  return (
    <>
      {mounted && consent && (
        <>
          {/* Third Party Script needing cookies */}
          {/* Global site tag (gtag.js) - Google Analytics */}
          <Script
            id="gtm-script"
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <Script id="gtm-config-script" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_TRACKING_ID}');
            `}
          </Script>

          {/* <!-- Google Tag Manager --> */}
          <Script
            id="gtmanager-sript"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${GTM_TRACKING_ID}');`,
            }}
          ></Script>
          <noscript
            dangerouslySetInnerHTML={{
              __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${GTM_TRACKING_ID}"
            height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
            }}
          ></noscript>
          {/* <!-- End Google Tag Manager --> */}
        </>
      )}
      <Cookies
        open={isOpenCookies}
        onAccept={() => handleCookieClick(true)}
        onReject={() => handleCookieClick(false)}
      />
    </>
  );
};

export default ThirdParty;
