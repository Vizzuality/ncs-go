import Image from 'next/image';

import { motion } from 'framer-motion';

import Wrapper from 'containers/wrapper';

import Button from 'components/button';
import { IN_VIEW_PROPS } from 'constants/motion';

const Join = (): JSX.Element => (
  <motion.div className="bg-brand-700 w-full" {...IN_VIEW_PROPS}>
    <Wrapper className="py-10 md:py-20 flex md:flex-row md:space-x-24 flex-col-reverse">
      <div className="flex flex-col space-y-6 md:w-1/2">
        <h3 className="font-sans leading-8 text-2lg md:text-xl">
          Join the naturebase community and be among the first to test the tool
        </h3>
        <p className="font-sans text-base">
          By creating a user profile on the naturebase app you get access to exclusive features such
          as mapping and saving your project areas and information for a quick reference check and
          access to the ideas portal.
        </p>
        <div>
          <Button
            theme="tertiary"
            size="xs"
            className="py-3 h-12 w-full md:w-auto hover:bg-gray-800"
          >
            <a href="https://app.naturebase.org" target="_blank" rel="noreferrer">
              Launch app
            </a>
          </Button>
        </div>
      </div>

      <div className="md:w-1/2 mb-10 md:mb-0">
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
  </motion.div>
);

export default Join;
