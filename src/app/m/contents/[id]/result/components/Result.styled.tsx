import styled, { css } from 'styled-components';

const PaddingBox = styled.div`
  padding: 0 15px;
`;

const ResultLayout = styled.section``;

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
  margin-top: 30px;

  &:first-child {
    margin-top: 0;
  }

  > h4 {
    font-size: 28px;
    font-weight: normal;
    line-height: 60px;
    color: ${props => props.theme.colors.primary};
    text-align: left;

    @media (max-width: ${props => props.theme.maxDeviceWidth}) {
      font-size: 26px;
      line-height: 50px;
    }

    ${props =>
      props.sign &&
      css`
        padding-left: 68px;
        background: url('${props.theme
            .imageUrl}/m/content/icon/${props.sign}.svg')
          no-repeat left center;
        background-size: 60px 60px;

        @media (max-width: ${props.theme.maxDeviceWidth}) {
          padding-left: 58px;
          background-size: 50px 50px;
        }
      `}
  }

  p {
    font-size: 20px;
    font-weight: normal;
    line-height: normal;
    word-break: normal;

    @media (max-width: ${props => props.theme.maxDeviceWidth}) {
      font-size: 18px;
    }
  }
`;

const ContentLayout = styled.section`
  display: block;
  box-sizing: border-box;
  margin-top: 12px;
  padding: 25px 15px;
  border-top: 15px solid #f2f2f2;
  background: #ffffff;
  font-size: 20px;
  font-weight: normal;
  line-height: normal;
  color: ${props => props.theme.colors.black};
  text-align: left;
  word-break: break-all;

  @media (max-width: ${props => props.theme.maxDeviceWidth}) {
    font-size: 18px;
  }

  > h3 {
    font-size: 30px;
    font-weight: normal;
    line-height: 29px;
    color: #000000;
    text-align: left;

    @media (max-width: ${props => props.theme.maxDeviceWidth}) {
      font-size: 26px;
    }
  }
`;

const ContentBox = styled.article`
  padding: 0 0 10px;
  background: #ffffff;
`;

export {
  PaddingBox,
  ResultLayout,
  DataLayout,
  ChildLayout,
  ContentLayout,
  ContentBox,
};
