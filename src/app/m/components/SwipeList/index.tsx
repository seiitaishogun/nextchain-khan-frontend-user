import styled, { css } from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import Medium from '@/app/m/components/SwipeList/Item/Medium';
import { MainProps } from '@/app/m/components/List/types';

import 'swiper/css';
import 'swiper/css/navigation';

interface SwipeListProps extends MainProps {
  size: 'medium' | 'large';
}

const Layout = styled.div<{ size: 'medium' | 'large' }>`
  padding: 0 15px;

  .swiper-slide {
    &:last-child {
      margin-right: 15px !important;
    }

    ${props =>
      props.size === 'medium' &&
      css`
        min-width: 180px;
        max-width: 180px;
        min-height: 180px;
        max-height: 180px;
      `}
  }
`;

function SwiperList({ size, data }: SwipeListProps) {
  const renderListItem = () => {
    switch (size) {
      case 'medium':
        return data.map(d => (
          <SwiperSlide key={d.id}>
            <Medium data={d} />
          </SwiperSlide>
        ));
      default:
        return null;
    }
  };

  const listItem = renderListItem();

  return (
    <Layout size={size}>
      <Swiper
        freeMode
        slidesPerView="auto"
        spaceBetween={10}
        modules={[FreeMode]}
      >
        {listItem}
      </Swiper>
    </Layout>
  );
}

export default SwiperList;
