import Image from 'next/image';

import Wrapper from 'containers/wrapper';

import Button from 'components/button';

const Join = (): JSX.Element => (
  <div className="bg-brand-700 w-full">
    <Wrapper className="py-20 flex space-x-24">
      <div className="flex flex-col space-y-6 w-1/2">
        <h3 className="font-sans text-xl">
          Join the naturebase community and be among the first to test the tool
        </h3>
        <p className="font-sans text-base">
          By creating a user profile on the naturebase app you get access to exclusive features such
          as mapping and saving your project areas and information for a quick reference check and
          access to the ideas portal.
        </p>
        <div>
          <Button theme="tertiary" size="xs" className="py-3 h-12">
            Launch map
          </Button>
        </div>
      </div>
      <div className="w-1/2">
        <Image
          src={'/images/involved/mock-app.png'}
          alt={'Join the naturebase community and be among the first to test the tool'}
          width={416}
          height={240}
          layout="responsive"
          objectFit="contain"
        />
      </div>
    </Wrapper>
  </div>
);

export default Join;
