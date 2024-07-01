import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';
import { getContentURL } from '@module/utils/url';
import Title from '@/app/(pc)/components/Title';
import { DEFAULT_THUMBNAIL_PATH } from '@/app/(pc)/constants/image';

import 'swiper/css';
import 'swiper/css/navigation';
import { SWIPER_DATA } from '@/app/(pc)/data/main';

interface Props {
  title: string;
}

const Layout = styled.article`
  overflow: hidden;
  width: ${props => props.theme.desktopDeviceWidth};
  margin: 30px auto 0;

  .swiper {
    margin-top: 11px;
  }

  .swiper-slide {
    position: relative;

    min-width: 342px;
    max-width: 342px;
    min-height: 342px;
    max-height: 342px;
  }
`;

const ContentName = styled.h5`
  display: flex;
  align-items: flex-end;
  overflow: hidden;
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: 20;
  box-sizing: border-box;
  width: 100%;
  height: 74px;
  padding: 0 15px 20px;
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.4)
  );
  font-size: 22px;
  font-weight: bold;
  color: ${props => props.theme.colors.white};
  line-height: normal;
  text-shadow: 2px 2px 1px rgba(0, 0, 0, 0.65);
  word-break: break-all;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

function SwiperList({ title }: Props) {
  return (
    <Layout>
      <Title text={title} />

      <Swiper
        freeMode
        slidesPerView="auto"
        spaceBetween={2}
        modules={[FreeMode]}
      >
        {SWIPER_DATA.map((d: any) => (
          <SwiperSlide key={d.id}>
            <Link href={getContentURL(d.id)} prefetch={false}>
              <Image
                src={d.thumbnail || DEFAULT_THUMBNAIL_PATH}
                width={342}
                height={342}
                alt=""
              />
              <ContentName>{d.name}</ContentName>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </Layout>
  );
}

export default SwiperList;
