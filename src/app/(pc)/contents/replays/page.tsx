'use client';

import React from 'react';
import styled from 'styled-components';
import ReplayForm from '@/app/(pc)/contents/replays/components/Form';

const Layout = styled.div`
  overflow: hidden;
  width: 600px;
  margin: 0 auto;
  padding: 70px 0;

  .label-group {
    input {
      width: 100%;
    }
  }
`;

const Title = styled.h2`
  font-size: 36px;
  font-weight: bold;
  text-align: center;
  color: ${props => props.theme.colors.black};
  line-height: normal;
`;

const Description = styled.p`
  margin-top: 41px;
  font-size: 18px;
  font-weight: normal;
  line-height: 1.89;
  color: ${props => props.theme.colors.black};
  text-align: center;
`;

function ContentReplay() {
  return (
    <Layout>
      <Title>운세 다시 보기</Title>
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
