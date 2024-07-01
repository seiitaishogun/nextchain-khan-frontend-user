import React from 'react';
import styled from 'styled-components';
import Title from '@/app/m/components/Title';
import List from '@/app/m/components/List';
import { RANKING_DATA } from '@/app/m/data/main';

const Layout = styled.div`
  padding-bottom: 20px;
  border-top: 9px solid #f2f2f2;
`;

function RankList() {
  return (
    <Layout>
      <Title boldText="TOP3" text="오늘 많이 봤어요!" />
      <List data={RANKING_DATA} type="order" />
    </Layout>
  );
}

export default RankList;
