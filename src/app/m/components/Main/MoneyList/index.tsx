import React from 'react';
import styled from 'styled-components';
import Title from '@/app/m/components/Title';
import SwiperList from '@/app/m/components/SwipeList';
import { MONEY_DATA } from '@/app/m/data/main';

const Layout = styled.div`
  padding-bottom: 20px;
  border-top: 9px solid #f2f2f2;
`;

function MoneyList() {
  return (
    <Layout>
      <Title boldText="재물" text="장래희망은 돈 많은 백수" />
      <SwiperList size="medium" data={MONEY_DATA} />
    </Layout>
  );
}

export default MoneyList;
