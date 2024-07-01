import React from 'react';
import styled from 'styled-components';

const Layout = styled.div`
  h4 {
    overflow: hidden;
    position: relative;
    font-size: 22px;
    font-weight: normal;
    color: ${props => props.theme.colors.primary};
    line-height: 40px;
    text-align: left;
    text-overflow: ellipsis;
  }

  p {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 700px;
    margin: 40px auto 0;
    font-size: 40px;
    font-weight: normal;
    color: #20201f;
    line-height: normal;
    text-align: center;
    word-break: keep-all;

    &::before {
      content: '“';
      margin-right: 30px;
    }

    &::after {
      content: '”';
      margin-left: 30px;
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
