import styled from 'styled-components';
import {
  HEIGHT,
  WIDTH,
} from '@/app/m/contents/[id]/components/Form/Tarot/Card/constants';

const CardSection = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  overflow: hidden;
  box-sizing: border-box;
  width: 100%;
  min-height: 400px;
  margin-top: 18px;
  padding: 8em 0 3em;
  background: url(${props =>
      `${props.theme.imageUrl}/m/content/tarot/tarot_bg.webp`})
    no-repeat top center;
  background-size: cover;

  .swiper {
    overflow: visible !important;
    width: ${WIDTH}px;
    height: ${HEIGHT}px;
    margin-top: 3em;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);

    .swiper-slide {
      overflow: visible;

      &.swiper-slide-active {
        scale: 1;
      }
    }
  }
`;

export { CardSection };
