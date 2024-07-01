import React from 'react';
import styled from 'styled-components';
import { ChildrenDataT } from '@module/types/content/fortune';

interface Props {
  items: ChildrenDataT[];
}

const Layout = styled.div<{ $itemCount: number }>`
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: repeat(${props => props.$itemCount}, 1fr);
  gap: 1px;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  margin-top: 15px !important;
  border: 1px solid #eeeeee;
  background: #eeeeee;

  .score-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 150px;
    background: ${props => props.theme.colors.white};

    > div {
      line-height: normal;
    }

    > div:first-child {
      display: flex;
      font-size: 18px;
      font-weight: normal;
      color: ${props => props.theme.colors.placeholder};
    }

    > div:last-child {
      margin-top: 9px;
      font-size: 26px;
      font-weight: bold;
      color: ${props => props.theme.colors.black};
    }
  }
`;

function ScoreItems({ items }: Props) {
  return (
    <Layout $itemCount={items.length}>
      {items.map(item => (
        <div className="score-item" key={item.id}>
          <div dangerouslySetInnerHTML={{ __html: item.name || '' }} />
          <div dangerouslySetInnerHTML={{ __html: `${item.summary}점` }} />
        </div>
      ))}
    </Layout>
  );
}

export default ScoreItems;
