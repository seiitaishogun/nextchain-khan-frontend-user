'use client';

import React from 'react';
import styled from 'styled-components';
import TodayList from '@/app/m/components/Main/TodayList';
import TopBanner from '@/app/m/components/Main/TopBanner';
import RankList from '@/app/m/components/Main/RankList';
import LoveList from '@/app/m/components/Main/LoveList';
import MoneyList from '@/app/m/components/Main/MoneyList';
import DiscountModal from './components/Main/Modal';

const Layout = styled.div`
  .wrap_hdline .link_thumb {
    display: block;
    overflow: hidden;
    position: relative;
    line-height: 0;
  }

  .title {
    padding-left: 15px;
    padding-right: 15px;
  }
`;

function Home() {
  return (
    <Layout>
      <DiscountModal />
      <TopBanner />
      <TodayList />
      <LoveList />
      <RankList />
      <MoneyList />
    </Layout>
  );
}

export default Home;
