import React from 'react';
import styled from 'styled-components';

const Layout = styled.div`
  h4 {
    overflow: hidden;
    position: relative;
    font-size: 24px;
    font-weight: 500;
    color: ${props => props.theme.colors.primary};
    line-height: 40px;
    text-align: left;
    text-overflow: ellipsis;
    white-space: nowrap;

    @media (max-width: ${props => props.theme.maxDeviceWidth}) {
      font-size: 22px;
      line-height: 36px;
    }
  }

  p {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 500px;
    margin: 40px auto 0;
    font-size: 38px;
    font-weight: normal;
    color: #20201f;
    line-height: normal;
    text-align: center;
    word-break: keep-all;

    @media (max-width: ${props => props.theme.maxDeviceWidth}) {
      font-size: 34px;
      margin-top: 30px;
    }

    &::before {
      content: '“';
      margin-right: 10px;

      @media (max-width: ${props => props.theme.maxDeviceWidth}) {
        margin-right: 6px;
      }
    }

    &::after {
      content: '”';
      margin-left: 10px;

      @media (max-width: ${props => props.theme.maxDeviceWidth}) {
        margin-right: 6px;
      }
    }
  }
`;

interface Props {
  name: string;
  summary: string;
}

function Summary({ name, summary }: Props) {
  return (
    <Layout>
      <h4 dangerouslySetInnerHTML={{ __html: name }} />
      <p dangerouslySetInnerHTML={{ __html: summary }} />
    </Layout>
  );
}

export default Summary;
