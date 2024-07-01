'use client';

import Link from 'next/link';
import styled from 'styled-components';
import React from 'react';
import Image from 'next/image';
import Navigation from '@/app/m/components/Layout/Navigation';

const HeaderLayout = styled.header`
  position: relative;
  padding-top: 48px;
`;

const HeaderGnb = styled.div`
  position: fixed;
  top: 0;
  z-index: 99;
  width: 100%;
  height: 48px;
  background: ${props => props.theme.colors.primary};
  text-align: center;

  a {
    display: inline-block;
  }

  .logo_sportskh {
    display: inline-block;
    height: 100%;
    padding-top: 12px;

    img {
      display: block;
      width: 104px;
      height: 23px;
    }
  }
`;

interface Props {
  handleToggleAside: () => void;
}

function Header({ handleToggleAside }: Props) {
  return (
    <HeaderLayout>
      <HeaderGnb>
        <Link
          href="https://m.sports.khan.co.kr"
          className="logo_sportskh"
          prefetch={false}
        >
          <Image
            src="/m/common/logo.svg"
            alt="스포츠경향"
            width={104}
            height={23}
          />
        </Link>
      </HeaderGnb>

      <Navigation handleToggleAside={handleToggleAside} />
    </HeaderLayout>
  );
}

export default Header;
