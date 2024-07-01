import styled from 'styled-components';
import { ListItemDetailBox } from '@/app/(pc)/components/List/styled';

const ListLayout = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid ${props => props.theme.colors.gray100};
`;

const ListItemLayout = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 25px 0;
  border-bottom: 1px solid ${props => props.theme.colors.gray100};

  ${ListItemDetailBox} {
    justify-content: space-between;
    width: 756px;
    padding-right: 56px;
  }
`;

const ReplayStatus = styled.button<{
  $isReplay?: boolean;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 160px;
  height: 50px;
  margin-top: 34px;
  background: ${props =>
    props.$isReplay ? props.theme.colors.primary : '#bebebe'};
  font-size: 15px;
  font-weight: normal;
  color: ${props => props.theme.colors.white};
`;

export { ListLayout, ListItemLayout, ReplayStatus };
