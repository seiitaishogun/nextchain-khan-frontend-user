import styled from 'styled-components';

const ContentHeaderLayout = styled.section``;

const ContentCategory = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: #a0a0a0;
  line-height: 21px;
`;

const ContentName = styled.h2`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  max-height: 58px;
  padding: 0 15px;
  font-size: 24px;
  font-weight: bold;
  line-height: 29px;
  text-overflow: ellipsis;
`;

const ContentCount = styled.div`
  display: flex;
  align-items: center;
  margin-top: 15px;
  padding: 0 15px;
`;

const ContentCountItem = styled.button`
  height: 42px;
  margin-right: 12px;
  padding: 10px 7px 10px 35px;
  border: 2px solid #d7d7d7;
  background-repeat: no-repeat;
  background-position: left center;
  background-size: 34px 34px;
  font-size: 17px;
  font-weight: normal;
  color: #000;

  &:last-child {
    margin-right: 0;
  }

  &.btn-view {
    padding-left: 38px;
    background-image: url(${props =>
      `${props.theme.imageUrl}/m/common/reple_icon.svg`});
    background-position-x: 4px;
    background-size: 28px 28px;
  }

  &.btn-share {
    background-image: url(${props =>
      `${props.theme.imageUrl}/m/common/share_icon.svg`});

    &.active {
      background-image: url(${props =>
        `${props.theme.imageUrl}/m/common/share_icon.svg`});
    }
  }

  &.btn-like {
    background-image: url(${props =>
      `${props.theme.imageUrl}/m/common/bookmark_icon.svg`});
  }

  @media (max-width: ${props => props.theme.maxDeviceWidth}) {
    height: 38px;
    margin-right: 10px;
    padding: 0 7px 0 30px;
    background-size: 30px 30px;
    font-size: 15px;

    &.btn-view {
      padding-left: 33px;
      background-size: 24px 24px;
    }
  }
`;

const ContentVariety = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ContentPreviewButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  width: auto;
  height: 32px;
  padding: 0 5px;
  border: 1px solid #dddddd;
  border-radius: 5px;
  background: #fafafa;
  font-size: 14px;
  font-weight: 500;
  color: #a0a0a0;
`;

const ContentBanner = styled.div`
  overflow: hidden;
  width: 100%;
  max-height: 640px;
  margin-top: 30px;

  img {
    width: 100%;
    height: 100%;
    position: relative !important;
    object-fit: fill;
  }
`;

const ContentDescription = styled.div`
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  max-height: 72px;
  margin-top: 12px;
  padding: 0 15px;
  font-size: 18px;
  font-weight: normal;
  line-height: 24px;
  text-overflow: ellipsis;
`;

export {
  ContentHeaderLayout,
  ContentCategory,
  ContentName,
  ContentCount,
  ContentCountItem,
  ContentVariety,
  ContentPreviewButton,
  ContentBanner,
  ContentDescription,
};
