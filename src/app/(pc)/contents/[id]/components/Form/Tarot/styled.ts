import styled from 'styled-components';
import {
  HEIGHT,
  WIDTH,
} from '@/app/(pc)/contents/[id]/components/Form/Tarot/Card/constants';

const CardSection = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  overflow: hidden;
  box-sizing: border-box;
  width: 100%;
  height: 660px;
  margin-top: 30px;
  padding: 170px 0 60px;
  background: url(${props =>
      `${props.theme.imageUrl}/pc/content/tarot/tarot_bg.webp`})
    no-repeat top center;
  background-size: cover;

  .swiper {
    overflow: visible !important;
    width: ${WIDTH}px;
    height: ${HEIGHT}px;
    margin-top: 3em;

    .swiper-slide {
      overflow: visible;

      &.swiper-slide-active {
        scale: 1;
      }
    }
  }
`;

export { CardSection };
