import Head from 'next/head';

import Balls from 'containers/balls';

const Home: React.FC = () => (
  <div>
    <Head>
      <title>NCS - GO</title>
    </Head>

    <Balls />
  </div>
);

export default Home;
