import styled from 'styled-components';

const ContentResultHeaderLayout = styled.div`
  padding-bottom: 28px;

  .title {
    width: calc(100% - 30px);
    margin: 0 auto;
    border-bottom: 2px solid ${props => props.theme.colors.primary};
  }
`;

export { ContentResultHeaderLayout };
