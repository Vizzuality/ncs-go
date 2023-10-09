import React from 'react';

import Join from 'containers/join';
import NewsPage from 'containers/news-page';

import Layout from 'layouts';

const News = (): JSX.Element => {
  return (
    <Layout>
      <NewsPage />
      <Join />
    </Layout>
  );
};

export default News;
