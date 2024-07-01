import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import { getContentURL } from '@module/utils/url';
import { TODAY_DATA } from '@/app/(pc)/data/main';

const Layout = styled.article`
  margin-top: 30px;
  padding: 50px 0;
  background: #f4f4f4;
`;

const TodayListBox = styled.div`
  overflow: hidden;
  width: ${props => props.theme.desktopDeviceWidth};
  margin: 0 auto;
`;

const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
`;

const TodayItem = styled.li<{ icon: string }>`
  box-sizing: border-box;
  height: 221px;
  border: 2px solid #f0f0f0;
  background: url(${props => `${props.theme.imageUrl}${props.icon}`})
    ${props => props.theme.colors.white} no-repeat top 32px center;
  background-size: 84px 84px;

  a {
    display: flex;
    justify-content: center;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    padding-top: 138px;
    font-size: 22px;
    color: ${props => props.theme.colors.black400};
    text-align: center;
  }
`;

function TodayList() {
  return (
    <Layout>
      <TodayListBox>
        <List>
          {TODAY_DATA.map((d: any) => (
            <TodayItem key={d.id} icon={d.thumbnail}>
              <Link href={getContentURL(d.id)} prefetch={false}>
                <span>{d.name}</span>
              </Link>
            </TodayItem>
          ))}
        </List>
      </TodayListBox>
    </Layout>
  );
}

export default TodayList;
