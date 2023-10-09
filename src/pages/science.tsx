import React from 'react';

import Join from 'containers/join';
import ScienceDataPage from 'containers/science-page';

import Layout from 'layouts';

const ScienceData = (): JSX.Element => {
  return (
    <Layout>
      Science data
      <ScienceDataPage />
      <Join />
    </Layout>
  );
};

export default ScienceData;
