import React, { useEffect, useRef, useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { useHomeStore } from 'store/home';

import { motion } from 'framer-motion';

import { NAV_OPTIONS } from 'containers/navbar/constants';
import Wrapper from 'containers/wrapper';

import Button from 'components/button';

const Navbar: React.FC = () => {
  const headerRef = useRef(null);
  const [page, setPage] = useState(null);

  const { route } = useRouter();

  useEffect(() => {
    const currPage = NAV_OPTIONS.find((navOption) => navOption.href.startsWith(route));
    if (!currPage) return;
    setPage(currPage);
  }, [route]);

  const section = useHomeStore((state) => state.section);
  const header = useHomeStore((state) => state.header);
  const setHeader = useHomeStore((state) => state.setHeader);

  useEffect(() => {
    setHeader(section !== 'intro');
  }, [section, setHeader]);
  return (
    <motion.nav
      id="header"
      ref={headerRef}
      className="fixed top-0 left-0 z-20 w-full text-white bg-gray-900 border-b border-gray-800 text-base"
      initial={{ y: '-100%' }}
      animate={{
        y: header ? '0%' : '-100%',
      }}
      transition={{
        bounce: 0,
      }}
    >
      <Wrapper>
        <div className="flex items-center justify-between space-x-12 text-lg border-b border-gray-900">
          <button className="w-[180px] h-[40px] shrink-0" onClick={() => {}}>
            <Image
              src="/images/logo-horizontal.svg"
              alt="Logo"
              width={180}
              height={40}
              layout="responsive"
            />
          </button>

          <ul className="flex items-center justify-end w-full p-0 m-0 space-x-12">
            {NAV_OPTIONS.map((opt) => (
              <Link key={opt.label} href={opt.href} passHref>
                <button
                  className="relative flex justify-between m-0 cursor-pointer"
                  onClick={() => setPage(opt)}
                >
                  <p className="hover:text-brand-700 py-5">{opt.label}</p>
                  {route !== '/' && opt === page && (
                    <motion.div
                      className="absolute left-0 right-0 h-[3px] bg-white bottom-0"
                      layoutId="underline"
                    />
                  )}
                </button>
              </Link>
            ))}
          </ul>

          <Button
            className="rounded-[100px] whitespace-nowrap h-12"
            theme="primary"
            size="s"
            onClick={() => {}}
          >
            Launch Map
          </Button>
        </div>
      </Wrapper>
    </motion.nav>
  );
};

export default Navbar;