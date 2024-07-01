import styled from 'styled-components';
import {
  ListDescription,
  ListName,
  ListThumbnail,
} from '@/app/m/components/List/styled';

const ListLayout = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid ${props => props.theme.colors.gray100};
`;

const ListItemLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 16px 0;
  border-top: 1px solid ${props => props.theme.colors.gray100};

  ${ListName} {
    margin-top: 0;
  }

  ${ListDescription} {
    width: 100% !important;
    margin-top: 7px;
    padding: 0 !important;
  }

  ${ListThumbnail} {
    position: relative;

    &:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5);
    }
  }
`;

const ReplayStatus = styled.div<{ $isReplay?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 10;
  width: calc(100% - 28px);
  height: 44px;
  margin-top: -22px;
  margin-left: calc(-50% + 14px);
  background: ${props =>
    props.$isReplay ? props.theme.colors.primary : '#bebebe'};
  font-size: 20px;
  font-weight: normal;
  color: ${props => props.theme.colors.white};

  @media (max-width: ${props => props.theme.maxDeviceWidth}) {
    width: calc(100% - 16px);
    height: 32px;
    margin-top: -16px;
    margin-left: calc(-50% + 8px);
    font-size: 14px;
  }
`;

export { ListLayout, ListItemLayout, ReplayStatus };
