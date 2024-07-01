import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { getMobileContentURL } from '@module/utils/url';
import { TODAY_DATA } from '@/app/m/data/main';

const Layout = styled.div`
  padding: 20px 15px;
  border-top: 9px solid #f2f2f2;

  ul {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 8px;
  }
`;

const TodayItem = styled.li<{ icon: string }>`
  border: 2px solid #f0f0f0;
  background: url(${props => `${props.theme.imageUrl}${props.icon}`}) no-repeat
    top 15% center;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    max-height: 100px;
    padding: 40% 0 8%;
    font-size: 18px;
    color: ${props => props.theme.colors.black400};
    text-align: center;

    @media (max-width: ${props => props.theme.maxDeviceWidth}) {
      padding: 45% 0 10%;
      font-size: 15px;
    }

    @media (max-width: 500px) {
      padding: 50% 0 14%;
      font-size: 14px;
    }

    @media (max-width: 400px) {
      padding: 63% 0 18%;
      font-size: 13px;
    }
  }
`;

function TodayList() {
  return (
    <Layout>
      <ul>
        {TODAY_DATA.map((d: any) => (
          <TodayItem key={d.id} icon={d.thumbnail}>
            <Link href={getMobileContentURL(d.id)} prefetch={false}>
              <span>{d.name}</span>
            </Link>
          </TodayItem>
        ))}
      </ul>
    </Layout>
  );
}

export default TodayList;
