import React from 'react';
import styled from 'styled-components';
import { getMobileContentURL } from '@module/utils/url';
import Title from '@/app/m/components/Title';
import Banner from '@/app/m/components/Banner';
import List from '@/app/m/components/List';
import { LOVE_DATA } from '@/app/m/data/main';
import ListMore from '@/app/m/components/List/More';

const Layout = styled.div`
  padding-bottom: 20px;
  border-top: 9px solid #f2f2f2;

  .list-more {
    margin-top: 1px;
  }
`;

function LoveList() {
  const firstData = LOVE_DATA[0];
  const otherData = LOVE_DATA.slice(1);

  return (
    <Layout>
      <Title boldText="연애운" text="애정운 상승시키는 법" />
      <Banner
        text={firstData.name}
        linkProps={{
          href: getMobileContentURL(firstData.id),
        }}
        image={firstData.thumbnail}
      />
      <List data={otherData} type="card" />
      <ListMore href="/m/categories/14" text="연애 운세 더보기" />
    </Layout>
  );
}

export default LoveList;
