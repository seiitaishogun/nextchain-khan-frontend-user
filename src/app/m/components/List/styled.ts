import styled, { css } from 'styled-components';

const ListName = styled.h4`
  overflow: hidden;
  font-size: 18px;
  font-weight: bold;
  line-height: 22px;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const ListLargeName = styled(ListName)`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-size: 26px;
  font-weight: normal;
  line-height: 1.31;
  color: #444;
  white-space: normal;

  @media (max-width: ${props => props.theme.maxDeviceWidth}) {
    font-size: 22px;
  }
`;

const ListSmallName = styled(ListName)`
  font-size: 17px;
  font-weight: 500;
  line-height: 21px;
`;

const ListDescription = styled.p`
  overflow: hidden;
  font-size: 20px;
  font-weight: 500;
  color: #fff;
  letter-spacing: -0.05em;
  line-height: 1.4em;
  text-shadow: 1px 1px 0 #000;
  word-break: break-all;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const ListLargeDescription = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 22px;
  font-weight: normal;
  line-height: 1.55;
  color: #8d8d8d;
  text-shadow: none;

  @media (max-width: ${props => props.theme.maxDeviceWidth}) {
    font-size: 18px;
  }
`;

const SummaryListLayout = styled.ul<{ $size?: 'medium' | 'large' }>`
  padding-left: 8px;
  list-style: inside disc;

  li {
    margin-top: 15px;
    padding-bottom: 15px;
    border-bottom: 1px solid ${props => props.theme.colors.gray100};
    font-size: 16px;
    font-weight: 500;
    line-height: 22px;

    ${props =>
      props.$size === 'large' &&
      css`
        font-size: 18px;
      `}
    &:first-child {
      margin-top: 0;
    }

    a,
    h4 {
      display: inline;
      color: ${props => props.theme.colors.black};
    }
  }
`;

const ListDateBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 8px;
  font-size: 18px;
  font-weight: normal;
  line-height: normal;
  color: #888888;

  @media (max-width: ${props => props.theme.maxDeviceWidth}) {
    font-size: 15px;
  }

  span {
    font-weight: bold;
  }
`;

const ListItemDetailBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  box-sizing: border-box;
  width: 100%;

  > div:first-child {
    width: calc(100% - 180px);

    @media (max-width: ${props => props.theme.maxDeviceWidth}) {
      width: calc(100% - 130px);
    }
  }

  ${ListLargeDescription} {
    width: 100%;
    margin-top: 7px !important;
    padding: 0;
  }
`;

const ListThumbnail = styled.div`
  overflow: hidden;
  width: 168px;
  height: 106px;

  @media (max-width: ${props => props.theme.maxDeviceWidth}) {
    width: 120px;
    height: 76px;
  }

  img {
    position: relative !important;
    width: 100%;
    height: 100%;
    object-fit: fill;
    object-position: top;
  }
`;

export {
  ListName,
  ListLargeName,
  ListSmallName,
  ListDescription,
  SummaryListLayout,
  ListDateBox,
  ListLargeDescription,
  ListItemDetailBox,
  ListThumbnail,
};
