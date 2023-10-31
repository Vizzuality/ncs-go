import React, { useRef } from 'react';

import { motion, useInView } from 'framer-motion';

import { useModal } from 'hooks/modals';

import Icon from 'components/icon';
import Modal from 'components/modal';

import ARROW_TOP_RIGHT_SVG from 'svgs/ui/arrow-top-right.svg?sprite';

import type { FeatureCardProps } from './types';

export const FeatureCard = ({ index, title, icon, description, tag }: FeatureCardProps) => {
  const { isOpen, open, close } = useModal();

  const ref = useRef();
  const inView = useInView(ref, {
    once: true,
    amount: 0.25,
  });

  const opacity = inView ? 1 : 0;
  const y = inView ? 0 : 20;

  return (
    <>
      <motion.div
        ref={ref}
        className="mb-4 md:mb-0 bg-beige relative group hover:z-10 py-10 px-6 text-base cursor-pointer text-left text-gray-800 transition duration-400 ease-out hover:ease-in hover:bg-white hover:scale-[103%] space-y-6 md:text-lg md:pt-28"
        style={{
          boxShadow: '0 0 0 1px #E1DDD5',
        }}
        whileInView={{
          opacity: 1,
        }}
        transition={{
          delay: index * 0.1,
        }}
        viewport={{
          once: true,
          amount: 0.25,
        }}
        onClick={() => open()}
      >
        <motion.div animate={{ opacity, y }} transition={{ delay: 0.2 + index * 0.1, bounce: 0 }}>
          <Icon
            className="w-12 h-12 md:w-16 md:h-16 group-hover:stroke-black stroke-gray-800"
            icon={icon}
          />
        </motion.div>
        <motion.div
          className="flex flex-row space-x-2 items-center"
          animate={{ opacity, y }}
          transition={{ delay: 0.3 + index * 0.1, bounce: 0 }}
        >
          <h3 className="font-sans group-hover:text-black text-[14px] md:text-base">{title}</h3>
          {tag && (
            <div className="text-white rounded-lg bg-blue-800 px-2 text-[14px] h-6 flex items-center">
              {tag}
            </div>
          )}
        </motion.div>

        <Icon
          className="absolute w-6 h-6 md:w-8 md:h-8 lg:hidden top-0 md:top-5 lg:top-0 stroke-gray-800 right-6 group-hover:block"
          icon={ARROW_TOP_RIGHT_SVG}
        />
      </motion.div>

      <Modal title={title} size="default" open={isOpen} onOpenChange={close} dismissable>
        <div className="p-6 overflow-auto text-gray-900 md:p-16 grow">
          <Icon
            className="w-20 h-20 mt-20 mb-8 md:mt-8 md:w-28 md:h-28 stroke-gray-800"
            icon={icon}
          />
          <h2 className="mb-4 text-lg md:text-xl">{title}</h2>
          <div className="prose">{description}</div>
        </div>
      </Modal>
    </>
  );
};

export default FeatureCard;
