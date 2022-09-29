import Head from 'next/head';

import ContactForm from 'containers/contact-form';
import Particles from 'containers/home/particles';

const Home: React.FC = () => (
  <div>
    <Head>
      <title>NCS - GO</title>
    </Head>

    <Particles />
    <ContactForm />
  </div>
);

export default Home;
