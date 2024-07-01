import styled from 'styled-components';

const Layout = styled.div`
  overflow: hidden;
  width: ${props => props.theme.desktopDeviceWidth};
  margin: 0 auto;
  padding: 35px 0 80px;
`;

const ContentName = styled.h2`
  overflow: hidden;
  margin-bottom: 60px;
  font-size: 40px;
  font-weight: bold;
  line-height: normal;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const GridBox = styled.div`
  display: grid;
  grid-template-columns: 824px 376px;

  ${ContentName} {
    grid-column: 1 / 3;
  }
`;

const LeftBox = styled.div`
  padding-right: 23px;
  border-top: 1px solid #f2f2f2;
  border-right: 1px solid #f2f2f2;
`;

const RightBox = styled.div`
  border-top: 1px solid #f2f2f2;
`;

export { Layout, GridBox, LeftBox, ContentName, RightBox };
