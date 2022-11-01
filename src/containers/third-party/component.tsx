import React from 'react';

import Script from 'next/script';

const ThirdParty: React.FC = () => {
  return (
    <>
      <Script defer data-domain="naturebase.org" src="https://plausible.io/js/plausible.js" />
    </>
  );
};

export default ThirdParty;
