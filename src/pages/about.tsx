import React from 'react';

import AboutPage from 'containers/about-page';
import Footer from 'containers/home/footer';
import Layout from 'layouts';

const About = (): JSX.Element => {
  return (
    <Layout>
      <AboutPage />
      <Footer />
    </Layout>
  );
};

export default About;
