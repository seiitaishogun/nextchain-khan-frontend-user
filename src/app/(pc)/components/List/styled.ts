import styled, { css } from 'styled-components';
import Link from 'next/link';

const ListTitle = styled.h3`
  padding: 12px 0 12px 11px;
  border-top: 1px solid #acacac;
  border-bottom: 1px solid #acacac;
  background: url(${props =>
      `${props.theme.imageUrl}/pc/common/title_icon.webp`})
    no-repeat #faf6f5 left center !important;
  font-size: 22px;
  font-weight: bold;
  color: ${props => props.theme.colors.black};
  letter-spacing: normal;
  line-height: 32px;
`;

const ListName = styled.h4`
  overflow: hidden;
  font-size: 18px;
  font-weight: bold;
  line-height: normal;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const ListSmallName = styled(ListName)`
  font-size: 17px;
  font-weight: 500;
  line-height: 21px;
`;

const ListDescription = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-size: 15px;
  font-weight: normal;
  color: #888888;
  line-height: normal;
  word-break: break-all;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const SummaryListLayout = styled.ul<{
  $size?: 'medium' | 'large';
}>`
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
  gap: 30px;
  font-size: 15px;
  font-weight: normal;
  line-height: normal;
  color: #888888;
`;

const ListItemDetailBox = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  margin-left: 20px;

  ${ListDescription} {
    margin-top: 3px;
  }
`;

const ListThumbnail = styled.div`
  overflow: hidden;
  width: 173px;
  height: 116px;
  border: 1px solid rgba(112, 112, 112, 0.5);
`;

const EmptyList = styled.div`
  padding: 70px 0 30px;
  font-size: 24px;
  color: rgba(0, 0, 0, 0.8);
  text-align: center;
  line-height: normal;
  letter-spacing: -0.18px;
`;

const EmptyButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 170px;
  height: 40px;
  margin: 16px auto 0;
  border-radius: 12px;
  background: ${props => props.theme.colors.primary};
  font-size: 16px;
  font-weight: 600;
  letter-spacing: -0.32px;
  color: ${props => props.theme.colors.white};
`;

export {
  ListTitle,
  ListName,
  ListSmallName,
  ListDescription,
  SummaryListLayout,
  ListDateBox,
  ListItemDetailBox,
  ListThumbnail,
  EmptyList,
  EmptyButton,
};
