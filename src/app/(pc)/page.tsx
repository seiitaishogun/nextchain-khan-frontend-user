'use client';

import styled from 'styled-components';
import TopBanner from '@/app/(pc)/components/Main/TopBanner';
import RowList from '@/app/(pc)/components/Main/RowList';
import RankList from '@/app/(pc)/components/Main/RankList';
import SwiperList from '@/app/(pc)/components/Main/SwiperList';
import TodayList from '@/app/(pc)/components/Main/TodayList';
import DiscountModal from './components/Main/Modal';

const Layout = styled.section`
  padding: 36px 0 50px;
`;

function Home() {
  return (
    <Layout>
      <DiscountModal />
      <TopBanner />

      <TodayList />

      <RowList title="제일 많이 봤어요!" />

      <RankList title="실시간 인기 운세" />

      <SwiperList title="애정운 상승시키는 법" />
    </Layout>
  );
}

export default Home;
