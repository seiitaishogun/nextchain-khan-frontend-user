import styled, { css } from 'styled-components';

const ContentFooterLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  box-sizing: border-box;
  margin-top: 40px;
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
  width: 70px;
  height: 70px;
  padding: 0;
  border: 1px solid #e8e8e8;
  background: url(${props =>
      `${props.theme.imageUrl}/pc/common/like_off_icon.svg`})
    no-repeat center center #f8f8f8;
  background-size: 45px 45px;
  text-indent: -9999px;

  ${props =>
    props.$isLike &&
    css`
      background-image: url(${`${props.theme.imageUrl}/pc/common/like_on_icon.svg`});
    `};
`;

const ShareButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: calc(100% - 70px);
  height: 70px;
  background: ${props => props.theme.colors.primary};
  font-family: ${props => props.theme.fontFamilies.inner};
  font-size: 21px;
  font-weight: normal;
  color: ${props => props.theme.colors.white};
`;

export { ContentFooterLayout, ContentFooterBox, LikeButton, ShareButton };
