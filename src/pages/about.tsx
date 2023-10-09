import React from 'react';

import AboutPage from 'containers/about-page';
import Join from 'containers/join';

import Layout from 'layouts';

const About = (): JSX.Element => {
  return (
    <Layout>
      <AboutPage />
      <Join />
    </Layout>
  );
};

export default About;
