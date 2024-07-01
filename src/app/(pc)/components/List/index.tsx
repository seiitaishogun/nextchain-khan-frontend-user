import styled from 'styled-components';
import CardItem from '@/app/(pc)/components/List/Item/CardItem';
import { MainProps } from '@/app/(pc)/components/List/types';

const ListLayout = styled.div`
  padding: 15px;

  .list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 8px;

    @media (max-width: 640px) {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  .list:after {
    content: '';
    display: block;
    visibility: hidden;
    clear: both;
    height: 0;
    font-size: 0;
  }

  .list .item {
    width: 100%;
    border: 1px solid #e0e0e0;
    background: #fff;
  }

  .list .link_thumb {
    display: block;
    overflow: hidden;
    position: relative;
    /*border-top:1px solid #e0e0e0;border-right:1px solid #e0e0e0;border-left:1px solid #e0e0e0;*/
    line-height: 0;
  }

  .list .link_thumb:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    z-index: 100;
    width: 100%;
    height: 100%;
    border: 1px solid #d9d9d9 \\0 / IE8 + 9;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    box-sizing: border-box;
  }

  .list .link_thumb .thumb {
    display: block;
    position: relative !important;
    width: 100%;
    height: auto !important;
  }

  .list .link_caption {
    display: block;
    padding: 1em;
    font-size: 15px;
    font-family: ${props => props.theme.fontFamilies.notoSans};
    color: #20201f;
    letter-spacing: -0.05em;
    line-height: 1.3em;
    word-break: break-all;
    /*border-bottom:1px solid #e0e0e0;border-right:1px solid #e0e0e0;border-left:1px solid #e0e0e0;*/
    box-sizing: border-box;
  }

  .list .link_caption .tit {
    display: -webkit-box !important;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    font-weight: 400;
  }

  @media (max-width: 320px) {
    padding: 9px;
  }

  @media (min-width: 640px) {
    .list .link_caption {
      font-size: 1.125em;
      /*border-bottom:0*/
    }
  }
`;

function List({ data }: MainProps) {
  return (
    <ListLayout className="list-layout">
      <ul className="list">
        {data.map(d => (
          <CardItem key={d.id} data={d} />
        ))}
      </ul>
    </ListLayout>
  );
}

export default List;
