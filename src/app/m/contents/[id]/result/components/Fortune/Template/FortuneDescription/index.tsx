import React from 'react';
import styled from 'styled-components';

const Layout = styled.div`
  p {
    margin-top: 12px;

    @media (max-width: ${props => props.theme.maxDeviceWidth}) {
      margin-top: 10px;
    }
  }

  p:first-child {
    margin-top: 0;
  }
`;

interface Props {
  contents: string;
}

function FortuneDescription({ contents }: Props) {
  return (
    <Layout>
      <p dangerouslySetInnerHTML={{ __html: contents }} />
    </Layout>
  );
}

export default FortuneDescription;
