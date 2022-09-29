import Head from 'next/head';

import Particles from 'containers/home/particles';
import Navigation from 'containers/navigation';

const Home: React.FC = () => (
  <div>
    <Head>
      <title>NCS - GO</title>
    </Head>

    <Particles />

    <Navigation
      linkLeft={{ label: 'Inspiring stories', url: '#' }}
      linkRight={{ label: 'Inspiring stories', url: '#' }}
    />
  </div>
);

export default Home;
