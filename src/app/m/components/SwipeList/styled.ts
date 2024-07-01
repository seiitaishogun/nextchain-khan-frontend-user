import styled from 'styled-components';

const SwipeListThumbnail = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const SwipeListLargeThumbnail = styled(SwipeListThumbnail)`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
`;

export { SwipeListThumbnail, SwipeListLargeThumbnail };
