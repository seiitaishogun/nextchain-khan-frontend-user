import styled from 'styled-components';

const Layout = styled.div`
  width: 300px;
  box-sizing: border-box;
  outline: 0;
  div {
    box-sizing: border-box;
  }
`;

const ModalContent = styled.div`
  width: 100%;
  height: 420px;
  background: #d9d9d9;
  img {
    position: relative !important;
    border-radius: 28px;
  }
`;

const OptionButton = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: space-between;
  background-color: ${props => props.theme.colors.white};
  align-items: center;
  font-size: 14px;
  font-weight: 400;
  line-height: 19.07px;
  font-family: ${({ theme }) => theme.fontFamilies.notoSans};
  color: #20201f;
  text-align: center;
  div {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    height: 100%;
    border-top: 1px solid #707070;
  }
`;

const HideOneDay = styled.div`
  cursor: pointer;
  border-right: 1px solid #707070;
`;

const Close = styled.div`
  cursor: pointer;
`;

export { Layout, ModalContent, OptionButton, HideOneDay, Close };
