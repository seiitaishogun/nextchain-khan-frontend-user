import styled from 'styled-components';

const ListLayout = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid ${props => props.theme.colors.gray100};
`;

const ListItemLayout = styled.div`
  padding: 15px 0;
  border-top: 1px solid ${props => props.theme.colors.gray100};

  a {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
  }
`;

export { ListLayout, ListItemLayout };
