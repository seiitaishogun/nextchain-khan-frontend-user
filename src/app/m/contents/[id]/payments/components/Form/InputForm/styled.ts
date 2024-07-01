import styled from 'styled-components';

const InputFormLayout = styled.div`
  position: relative;
  overflow-y: auto;
  box-sizing: border-box;
  width: 100%;
  left: -10px;
  max-width: ${props => props.theme.maxDeviceWidth};
  min-width: ${props => props.theme.minDeviceWidth};
  height: 100vh;
  max-height: calc(100vh - 20px);
  margin-top: 10px;
  padding: 0px;
  background-color: ${props => props.theme.colors.white};

  .form-button {
    position: relative;
    margin-top: 20px;
    width: 100%;
    max-width: ${props => props.theme.maxDeviceWidth};
    min-width: ${props => props.theme.minDeviceWidth};
  }
`;

const InfoTitle = styled.div`
  font-size: 28px;
  font-weight: bold;
  margin-top: 20px;
  color: ${props => props.theme.colors.black};
  line-height: 38px;
  text-align: center;
`;

const InfoLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  margin: 10px auto 0;
  background-size: cover;

  span {
    margin-left: 12px;
    font-size: 36px;
    font-weight: bold;
    color: ${props => props.theme.colors.black};
  }
`;

const InfoContentName = styled.div`
  margin-top: 10px;
  font-size: 20px;
  font-weight: bold;
  line-height: 42px;
  color: ${props => props.theme.colors.black};
  text-align: center;
`;

const InfoContentPrice = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  margin-top: 10px;
  background-color: #f8f8f8;
  font-size: 22px;
  font-weight: 500;
  color: ${props => props.theme.colors.black};
`;
const PriceContainer = styled.div`
  background-color: #f8f8f8;
  padding: 15px 0px;
  margin-top: 10px;
`;

const InfoContentOldPrice = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 9px;
  font-size: 21px;
  font-weight: 500;
  color: #545454;
  line-height: 27px;
  text-decoration: line-through;
`;

const InfoContentDiscountPriceWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 7px;
  margin-top: 9px;
`;

const InfoContentDiscountPrice = styled.div`
  font-size: 26px;
  font-weight: 800;
  color: ${props => props.theme.colors.black};
  line-height: 31px;
`;

const InfoContentDiscountPercent = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: ${props => props.theme.colors.primary};
  line-height: 27px;
  height: 27px;
  text-align: center;
  text-decoration: underline;
  padding: 0px 3px;
`;

const InfoDescription = styled.p`
  margin-top: 10px;
  font-size: 18px;
  color: ${props => props.theme.colors.black};
  line-height: 23px;
  text-align: center;
`;

const FormDescription = styled.p`
  margin-top: 8px;
  font-size: 14px;
  color: ${props => props.theme.colors.primary};
  line-height: 19px;
  padding: 0px 30px;
`;

const CloseButton = styled.button`
  display: block;
  position: absolute;
  top: 10px;
  right: -5px;
  overflow: hidden;
  width: 32px;
  height: 32px;
  margin: 0 16px 15px auto;
  border: none;
  background: url(${props => `${props.theme.imageUrl}/m/common/close.svg`})
    no-repeat center center;
  background-size: 16px;
  appearance: none;
  cursor: pointer;
  text-indent: -9999px;
`;

export {
  InputFormLayout,
  InfoTitle,
  InfoLogo,
  InfoContentName,
  InfoContentPrice,
  InfoDescription,
  FormDescription,
  CloseButton,
  PriceContainer,
  InfoContentOldPrice,
  InfoContentDiscountPriceWrap,
  InfoContentDiscountPrice,
  InfoContentDiscountPercent,
};
