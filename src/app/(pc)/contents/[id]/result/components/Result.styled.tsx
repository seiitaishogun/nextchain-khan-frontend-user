import styled, { css } from 'styled-components';

const PaddingBox = styled.div`
  padding: 0 15px;
`;

const ResultLayout = styled.section`
  overflow: hidden;
  width: ${props => props.theme.desktopDeviceWidth};
  margin: 0 auto;
`;

const TopBox = styled.div`
  margin-bottom: 30px;
`;

const GridBox = styled.div`
  display: grid;
  grid-template-columns: 824px 376px;

  ${TopBox} {
    grid-column: 1 / 3;
  }
`;

const LeftBox = styled.div`
  padding: 0 23px 50px 0;
  border-top: 1px solid #f2f2f2;
  border-right: 1px solid #f2f2f2;
`;

const RightBox = styled.div`
  border-top: 1px solid #f2f2f2;
  padding-left: 25px;
`;

const DataLayout = styled.div`
  margin-top: 15px;

  &:first-child {
    margin-top: 0;
  }

  > div {
    margin-top: 30px;

    &:first-child {
      margin-top: 0;
    }
  }
`;

const ChildLayout = styled.div<{ sign?: string | null }>`
  margin-top: 25px;

  &:first-child {
    margin-top: 0;
  }

  > h4 {
    padding: 10px 0;
    font-size: 22px;
    font-weight: normal;
    line-height: 60px;
    color: ${props => props.theme.colors.primary};
    text-align: left;

    ${props =>
      props.sign &&
      css`
        padding-left: 68px;
        background: url('${props.theme
            .imageUrl}/pc/content/icon/${props.sign}.svg')
          no-repeat left center;
        background-size: 60px 60px;
      `}
  }

  p {
    font-size: 18px;
    font-weight: normal;
    line-height: normal;
    word-break: normal;
  }
`;

const ContentLayout = styled.section`
  display: block;
  box-sizing: border-box;
  margin-top: 30px;
  padding-top: 30px;
  border-top: 1px solid #ececec;
  background: #ffffff;
  font-size: 18px;
  font-weight: normal;
  line-height: normal;
  color: ${props => props.theme.colors.black};
  text-align: left;
  word-break: break-all;

  > h3 {
    margin-bottom: 30px;
    font-size: 28px;
    font-weight: normal;
    line-height: normal;
    color: ${props => props.theme.colors.primary};
  }
`;

export {
  PaddingBox,
  ResultLayout,
  DataLayout,
  ChildLayout,
  ContentLayout,
  GridBox,
  LeftBox,
  RightBox,
  TopBox,
};
