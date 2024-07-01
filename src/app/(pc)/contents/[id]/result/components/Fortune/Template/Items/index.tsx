import React from 'react';
import styled from 'styled-components';
import { ChildrenDataT } from '@module/types/content/fortune';

interface Props {
  items: ChildrenDataT[];
}

const Layout = styled.div<{ $itemCount: number }>`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: repeat(${props => props.$itemCount}, 1fr);
  width: 100%;
  padding: 0;
  box-sizing: border-box;

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    &:last-child {
      h5:after,
      p:after {
        display: none;
      }
    }
  }

  h5 {
    display: block;
    position: relative;
    width: 100%;
    padding: 25px 0;
    font-size: 22px;
    font-weight: normal;
    line-height: normal;
    color: ${props => props.theme.colors.primary};
    text-align: center;

    &:after {
      content: '';
      position: absolute;
      top: 26px;
      right: 0;
      width: 2px;
      height: 30px;
      background: #e5e5e5;
    }
  }

  p {
    display: block;
    position: relative;
    width: 100%;
    padding: 40px 0;
    font-size: 18px;
    font-weight: normal;
    line-height: normal;
    color: ${props => props.theme.colors.black};
    text-align: center;

    &:after {
      content: '';
      position: absolute;
      top: 41px;
      right: 0;
      width: 2px;
      height: 30px;
      background: #e5e5e5;
    }
  }
`;

function Items({ items }: Props) {
  return (
    <Layout $itemCount={items.length}>
      {items.map(item => (
        <div key={item.id}>
          <h5 dangerouslySetInnerHTML={{ __html: item.name || '' }} />
          <p dangerouslySetInnerHTML={{ __html: item.contents || '' }} />
        </div>
      ))}
    </Layout>
  );
}

export default Items;
