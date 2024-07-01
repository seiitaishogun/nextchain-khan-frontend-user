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
    width: 180px;
    height: 180px;
    margin-right: 20px;
    border-radius: 50%;
    font-size: 40px;
    font-weight: bold;
    color: ${props => props.theme.colors.black200};
    background: #fafafa;
  }

  p {
    font-size: 28px;
    font-weight: normal;
    line-height: normal;
    color: ${props => props.theme.colors.black200};
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
