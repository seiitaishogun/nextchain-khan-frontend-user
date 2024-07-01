'use client';

import React from 'react';
import styled from 'styled-components';
import ReplayForm from '@/app/m/contents/replays/components/Form';
import Title from '@/app/m/components/Title';

const Layout = styled.div`
  padding: 0 15px;

  .title {
    padding-bottom: 20px;
    border-bottom: 2px solid ${props => props.theme.colors.primary};
  }
`;

const Description = styled.p`
  margin-top: 20px;
  font-size: 22px;
  font-weight: normal;
  line-height: 1.55;
  color: ${props => props.theme.colors.black};
  text-align: center;

  @media (max-width: ${props => props.theme.maxDeviceWidth}) {
    font-size: 18px;
  }
`;

function ContentReplay() {
  return (
    <Layout>
      <Title boldText="운세" text="다시보기" />
      <Description>
        운세 조회 시 입력한 정보와 동일한 정보를 입력해주세요.
        <br />
        무료 운세는 다시보기가 지원되지 않습니다.
      </Description>
      <ReplayForm />
    </Layout>
  );
}

export default ContentReplay;
