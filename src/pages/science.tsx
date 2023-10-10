import React from 'react';

import Join from 'containers/join';
import ScienceDataPage from 'containers/science-page';

import Layout from 'layouts';

const ScienceData = (): JSX.Element => {
  return (
    <Layout>
      <ScienceDataPage />
      <Join />
    </Layout>
  );
};

export default ScienceData;
