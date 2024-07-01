import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';
import { getContentURL } from '@module/utils/url';
import { DEFAULT_THUMBNAIL_PATH } from '@/app/(pc)/constants/image';
import { MAIN_TOP_DATA } from '@/app/(pc)/data/main';

const Layout = styled.article`
  display: flex;
  flex-direction: row;
  overflow: hidden;
  width: ${props => props.theme.desktopDeviceWidth};
  height: 510px;
  margin: 0 auto;
`;

const LargeContent = styled.div`
  position: relative;
  width: 790px;
  height: 100%;

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

const LargeContentName = styled.h5`
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

const ContentList = styled.ul`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  width: calc(100% - 790px);
`;

const ContentItem = styled.li`
  overflow: hidden;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
    width: 285px;
    height: 100%;
    background-image: linear-gradient(to left, rgba(33, 33, 33, 0), #212121);
  }

  a {
    z-index: 10;
  }

  img {
    position: relative !important;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.2);
    object-fit: fill;

    &:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      z-index: 100;
      width: 100%;
      height: 100%;
      border: 1px solid rgba(0, 0, 0, 0.1);
      box-sizing: border-box;
    }
  }
`;

const ContentInfo = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  box-sizing: border-box;
  width: 285px;
  padding: 32px 20px 0 32px;
`;

const ContentName = styled.h5`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  max-height: 58px;
  line-height: normal;
  font-size: 20px;
  font-weight: bold;
  color: ${props => props.theme.colors.white};
  white-space: normal;
  text-shadow: 2px 2px 1px rgba(0, 0, 0, 0.65);
  word-break: keep-all;
`;

const ContentDescription = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin-top: 12px;
  font-size: 14px;
  font-weight: normal;
  color: ${props => props.theme.colors.white};
  line-height: 1.14;
  white-space: normal;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.65);
  word-break: keep-all;
`;

function TopBanner() {
  const firstData = MAIN_TOP_DATA[0];
  const otherData = MAIN_TOP_DATA.slice(1);
  return (
    <Layout>
      <LargeContent>
        <Link href={getContentURL(firstData.id)} prefetch={false}>
          <Image
            src={firstData.thumbnail || DEFAULT_THUMBNAIL_PATH}
            alt=""
            fill
          />
          <LargeContentName>{firstData.name}</LargeContentName>
        </Link>
      </LargeContent>

      <ContentList>
        {otherData.map((d: any) => (
          <ContentItem key={d.id}>
            <Link href={getContentURL(d.id)} prefetch={false}>
              <Image src={d.thumbnail || DEFAULT_THUMBNAIL_PATH} alt="" fill />
              <ContentInfo>
                <ContentName>{d.name}</ContentName>
                <ContentDescription>{d.summary}</ContentDescription>
              </ContentInfo>
            </Link>
          </ContentItem>
        ))}
      </ContentList>
    </Layout>
  );
}

export default TopBanner;
