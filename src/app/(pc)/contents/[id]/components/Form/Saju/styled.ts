import styled from 'styled-components';

const UnknownButton = styled.button<{ $isBirthedTime: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  width: 150px;
  height: 50px;
  border: 0;
  background: ${props =>
    !props.$isBirthedTime
      ? props.theme.colors.primary
      : 'rgba(155, 165, 183, 0.2)'};
  font-size: 18px;
  font-weight: bold;
  color: ${props =>
    !props.$isBirthedTime
      ? props.theme.colors.white
      : props.theme.colors.placeholder};
  letter-spacing: -0.32px;

  i {
    width: 20px;
    height: 20px;
    margin-right: 5px;
    background: url(${props =>
        !props.$isBirthedTime
          ? `${process.env.APP_IMAGE_URL}/pc/common/check_on.svg`
          : `${process.env.APP_IMAGE_URL}/pc/common/check_off.svg`})
      no-repeat center center;
    background-size: cover;
  }
`;

export { UnknownButton };
