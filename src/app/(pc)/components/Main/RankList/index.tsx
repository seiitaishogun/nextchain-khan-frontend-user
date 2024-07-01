import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { getContentURL } from '@module/utils/url';
import Title from '@/app/(pc)/components/Title';
import { RANKING_DATA } from '@/app/(pc)/data/main';

interface Props {
  title: string;
}

const Layout = styled.article`
  overflow: hidden;
  width: ${props => props.theme.desktopDeviceWidth};
  margin: 30px auto 0;
`;

const RankListBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 11px;
  padding: 27px 20px;
  border: solid 1px #dfdfdf;
`;

const List = styled.ul`
  width: 580px;

  li {
    padding: 14px 0;
    border-bottom: 1px solid #e5e5e5;

    &:first-child {
      padding-top: 0;
    }
  }
`;

const FlexBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
`;

const ListCount = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  margin-right: 20px;
  background: #f5f5f5;
  font-size: 24px;
  font-weight: normal;
  color: #a0a0a0;
`;

const ListName = styled.h5`
  overflow: hidden;
  max-width: 400px;
  font-size: 20px;
  line-height: normal;
  letter-spacing: normal;
  color: ${props => props.theme.colors.black};
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const RankThumbnail = styled.div`
  position: relative;
  width: 560px;
  height: 336px;

  img {
    position: relative !important;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.2);

    &:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      z-index: 100;
      width: 100%;
      height: 100%;
      box-sizing: border-box;
    }
  }
`;

const RankThumbnailName = styled.h5`
  display: flex;
  align-items: flex-end;
  overflow: hidden;
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: 20;
  box-sizing: border-box;
  width: 100%;
  height: 100px;
  padding: 0 28px 20px;
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.4)
  );
  font-size: 30px;
  font-weight: bold;
  color: ${props => props.theme.colors.white};
  line-height: 44px;
  text-shadow: 2px 2px 1px rgba(0, 0, 0, 0.65);
  word-break: break-all;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

function RankList({ title }: Props) {
  const [hoverIndex, setHoverIndex] = useState<number>(0);

  const handleMouseEnter = (index: number) => {
    setHoverIndex(index);
  };

  const selectedContent = RANKING_DATA[hoverIndex];

  return (
    <Layout>
      <Title text={title} />

      <RankListBox>
        <List>
          {RANKING_DATA.map((d: any, i: number) => (
            <li key={d.id} onMouseEnter={() => handleMouseEnter(i)}>
              <Link href={getContentURL(d.id)} prefetch={false}>
                <FlexBox>
                  <ListCount>{i + 1}</ListCount>
                  <ListName>{d.name}</ListName>
                </FlexBox>
              </Link>
            </li>
          ))}
        </List>

        <RankThumbnail>
          <Link href={getContentURL(selectedContent.id)} prefetch={false}>
            <Image
              src={selectedContent.thumbnail}
              alt=""
              width={560}
              height={336}
            />
            <RankThumbnailName>{selectedContent.name}</RankThumbnailName>
          </Link>
        </RankThumbnail>
      </RankListBox>
    </Layout>
  );
}

export default RankList;
