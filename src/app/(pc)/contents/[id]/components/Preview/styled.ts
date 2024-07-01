import styled from 'styled-components';

const ContentPreviewLayout = styled.section`
  margin-top: 20px;
  padding: 15px 0 0 25px;
`;

const PreviewList = styled.ul`
  margin-top: 9px;

  li {
    padding: 25px 0;
    border-bottom: 1px solid #e5e5e5;
    font-size: 18px;
    line-height: normal;
    color: ${props => props.theme.colors.black};

    &:first-child {
      padding-top: 0;
    }
  }
`;

export { ContentPreviewLayout, PreviewList };
