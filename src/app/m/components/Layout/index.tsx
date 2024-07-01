'use client';

import React, { useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Header from '@/app/m/components/Layout/Header';
import Aside from '@/app/m/components/Layout/Aside';
import Footer from '@/app/m/components/Layout/Footer';

interface Props {
  children: React.ReactNode;
}

const RootLayout = styled.div`
  #main {
    padding-bottom: 15px;
  }

  .info {
    text-align: center;
    font-size: 1em;
    color: #707070;
    padding: 20px 0;
  }

  .info a {
    display: inline;
    text-decoration: underline;
    color: #707070;
    font-weight: 700;
  }
`;

function Layout({ children }: Props) {
  const [isAsideOpen, setIsAsideOpen] = useState(false);

  const handleToggleAside = () => {
    setIsAsideOpen(prev => !prev);
  };

  return (
    <RootLayout id="layout">
      <Header handleToggleAside={handleToggleAside} />
      <Aside isOpen={isAsideOpen} setIsOpen={setIsAsideOpen} />
      <main id="main">
        {children}

        <p className="info">
          서비스 오류 발생 시{' '}
          <Link
            href="http://pf.kakao.com/_ymuIC/chat"
            target="_blank"
            prefetch={false}
          >
            고객센터
          </Link>
          로 내용을 접수해주세요.
        </p>
      </main>
      <Footer />
    </RootLayout>
  );
}

export default Layout;
