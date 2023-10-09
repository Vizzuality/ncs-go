import React from 'react';

// import ScienceDataPage from 'containers/about-page';

import Join from 'containers/join';

import Layout from 'layouts';

const ScienceData = (): JSX.Element => {
  return (
    <Layout>
      Science data
      {/* <ScienceDataPage /> */}
      <Join />
    </Layout>
  );
};

export default ScienceData;
