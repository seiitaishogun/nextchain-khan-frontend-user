import styled, { css } from 'styled-components';

const ContentFooterLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  box-sizing: border-box;
  padding: 20px 14px;
  background: ${props => props.theme.colors.white};
`;

const ContentFooterBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const LikeButton = styled.button<{ $isLike: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  box-sizing: border-box;
  width: 55px;
  height: 55px;
  padding: 0;
  border: 1px solid #e8e8e8;
  background: url(${props =>
      `${props.theme.imageUrl}/m/common/like_off_icon.svg`})
    no-repeat center center #f8f8f8;
  background-size: 30px 30px;
  text-indent: -9999px;

  ${props =>
    props.$isLike &&
    css`
      background-image: url(${`${props.theme.imageUrl}/m/common/like_on_icon.svg`});
    `};
`;

const ShareButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: calc(100% - 55px);
  height: 55px;
  background: ${props => props.theme.colors.primary};
  font-family: ${props => props.theme.fontFamilies.inner};
  font-size: 22px;
  font-weight: 600;
  color: ${props => props.theme.colors.white};
`;

export { ContentFooterLayout, ContentFooterBox, LikeButton, ShareButton };
