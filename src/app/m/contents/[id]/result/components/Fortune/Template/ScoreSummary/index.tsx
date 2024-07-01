import styled from 'styled-components';

interface Props {
  summary: string;
  contents: string;
}

const Layout = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  h5 {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 160px;
    height: 160px;
    margin-right: 20px;
    font-size: 38px;
    font-weight: bold;
    color: ${props => props.theme.colors.black200};

    @media (max-width: ${props => props.theme.maxDeviceWidth}) {
      width: 120px;
      height: 120px;
      margin-right: 15px;
      font-size: 32px;
    }
  }

  p {
    font-size: 22px;
    font-weight: normal;
    line-height: normal;
    color: ${props => props.theme.colors.black200};

    @media (max-width: ${props => props.theme.maxDeviceWidth}) {
      font-size: 18px;
    }
  }
`;

function ScoreSummary({ summary, contents }: Props) {
  return (
    <Layout>
      <h5 dangerouslySetInnerHTML={{ __html: `${summary}점` }} />
      <p dangerouslySetInnerHTML={{ __html: contents }} />
    </Layout>
  );
}

export default ScoreSummary;
