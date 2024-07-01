import styled, { css } from 'styled-components';
import { ChildrenDataT } from '@module/types/content/fortune';

interface Props {
  items: ChildrenDataT[];
}

const Layout = styled.div`
  position: relative;
  box-sizing: border-box;
`;

const RightBox = styled.div<{ count: number }>`
  display: grid;
  grid-template-columns: repeat(${props => props.count}, 1fr);
  justify-content: space-between;
  align-items: end;
  position: relative;
  min-height: 164px;
  padding-bottom: 33px;
`;

const GraphScore = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
  font-size: 18px;
  font-weight: bold;
  color: ${props => props.theme.colors.primary};
  line-height: 26px;
`;

const GraphEmptyBar = styled.div<{ height: number }>`
  overflow: hidden;
  width: 22px;
  height: ${props => props.height}px;
  border-radius: 15px;
  background-color: #f2f2f2;
  text-indent: -9999px;

  ${props =>
    props.height === 0 &&
    css`
      display: none;
    `}
`;

const GraphBar = styled.div<{ height: number }>`
  overflow: hidden;
  width: 22px;
  height: ${props => props.height}px;
  border-radius: 15px;
  background-color: ${props => props.theme.colors.primary};
  text-indent: -9999px;
`;

const GraphItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${props => props.theme.colors.placeholder};
  text-align: center;
`;

const GraphName = styled.div`
  margin-top: 30px;
  line-height: 32px;
  font-size: 22px;
  color: ${props => props.theme.colors.placeholder};
`;

function Graph({ items }: Props) {
  const getEmptyBarHeight = (score: number) => {
    const height = 280 - (score / 100) * 280;
    return height < 0 ? 0 : height;
  };

  const getGraphBarHeight = (score: number) => {
    const height = (score / 100) * 280;
    return height > 280 ? 280 : height;
  };

  return (
    <Layout>
      <RightBox count={items.length}>
        {items.map(item => (
          <GraphItem key={item.id}>
            <GraphEmptyBar
              height={getEmptyBarHeight(Number(item.contents) || 0)}
            />
            <GraphBar height={getGraphBarHeight(Number(item.contents) || 0)} />
            <GraphName>{item.name}</GraphName>
            <GraphScore>{item.contents}점</GraphScore>
          </GraphItem>
        ))}
      </RightBox>
    </Layout>
  );
}

export default Graph;
