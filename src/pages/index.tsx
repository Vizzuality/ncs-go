import Head from 'next/head';

import Card from 'containers/home/card';
import Particles from 'containers/home/particles';
import Wrapper from 'containers/wrapper';

const Home: React.FC = () => {
  const CARDS = [
    {
      title: 'Naturebase overview',
      description: 'Brief description, lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      title: 'Inspiring stories',
      description: 'Brief description, lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      title: 'NCS pathways',
      description: 'Brief description, lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
  ];

  return (
    <div>
      <Head>
        <title>NCS - GO</title>
      </Head>

      <Particles />

      <div className="w-full overflow-x-hidden bg-gray-900">
        <Wrapper>
          <div className="flex space-x-10">
            {CARDS.map((c) => {
              return <Card key={c.title} title={c.title} description={c.description} />;
            })}
          </div>
        </Wrapper>
      </div>
    </div>
  );
};

export default Home;
