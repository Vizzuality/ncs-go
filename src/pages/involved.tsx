import React from 'react';

import Footer from 'containers/home/footer';
import GetInvolvedPage from 'containers/involved-page';
import Layout from 'layouts';

const GetInvolved = (): JSX.Element => {
  return (
    <Layout>
      <GetInvolvedPage />
      <Footer />
    </Layout>
  );
};

export default GetInvolved;
