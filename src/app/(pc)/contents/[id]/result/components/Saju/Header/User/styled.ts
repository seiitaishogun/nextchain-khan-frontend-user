import styled from 'styled-components';

const UserInfoLayout = styled.div`
  margin-top: 20px;
`;

const UserInfoItem = styled.div`
  box-sizing: border-box;
  width: auto;
  min-height: 60px;
  margin: 12px 0 0;
  padding: 12px 15px;
  background: #f2f2f2;
  font-size: 22px;
  font-weight: normal;
  line-height: normal;
  color: ${props => props.theme.colors.placeholder};
  text-align: center;

  &:first-child {
    margin-top: 0;
  }
`;

const SajuInfoButton = styled.button`
  margin-left: 10px;
  vertical-align: bottom;
  font-size: 16px;
  font-weight: 500;
  color: ${props => props.theme.colors.primary};
  line-height: 27px;
`;

const PreviewSajuSectionLayout = styled.div`
  box-sizing: border-box;
  margin: 30px 0 0;
  padding: 12px 15px;
  background: #f8f8f8;
`;

const SajuSectionLayout = styled.div`
  box-sizing: border-box;
  margin-top: 18px;
  padding: 20px 15px;
  background: #f8f8f8;
`;

const GridHeaderBox = styled.div<{ count: number }>`
  display: grid;
  grid-template-columns: repeat(${props => props.count}, 1fr);
  place-items: center;
  padding: 12px 0;
  font-size: 16px;
  font-weight: normal;
  line-height: 27px;
  color: #a0a0a0;
`;

const GridHeaderBgBox = styled(GridHeaderBox)`
  height: 30px;
  border: 2px solid #e5e5e5;
  background-color: #ffffff;
  font-size: 22px;
  font-weight: normal;
  color: ${props => props.theme.colors.black};
`;

const GridBox = styled.div<{ count: number }>`
  display: grid;
  grid-template-columns: repeat(${props => props.count}, 1fr);
  grid-gap: 8px;
  place-items: center;
  margin-top: 20px;
`;

const GridItem = styled.div`
  display: flex;
  flex-direction: column;
  place-items: center;

  span {
    text-align: center;
  }

  span:first-child {
    font-size: 30px;
    line-height: 50px;
    color: ${props => props.theme.colors.black};
  }

  span:last-child {
    font-size: 15px;
    line-height: 17px;
    color: ${props => props.theme.colors.black};
  }
`;

const GridBgItem = styled.div<{
  $color: { text: string; bg: string; borderColor: string };
}>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  height: 122px;
  border: 2px solid ${props => props.$color?.borderColor};
  background-color: ${props => props.$color?.bg};
  color: ${props => props.$color?.text};

  //@media (max-width: 320px) {
  //  width: 45px;
  //  height: 45px;
  //  border-radius: 10px;
  //}

  span:first-child {
    font-size: 40px;
    font-weight: bold;
    line-height: 58px;

    //@media (max-width: 320px) {
    //  font-size: 20px;
    //  line-height: 29px;
    //}
  }

  span:last-child {
    font-size: 15px;
    line-height: 21px;

    //@media (max-width: 320px) {
    //  font-size: 12px;
    //  line-height: 14px;
    //}
  }
`;
const MessageBox = styled.p`
  display: flex;
  flex-direction: column;
  margin-top: 12px;
  padding: 25px 15px;
  font-size: 19px;
  font-weight: normal;
  line-height: normal;
  color: ${props => props.theme.colors.black};

  strong {
    margin-bottom: 30px;
    font-size: 22px;
    font-weight: normal;
  }
`;

const DaeunSection = styled.section`
  margin-top: 25px;
  padding-bottom: 50px;

  .daeun-title {
    margin-bottom: 8px;
  }
`;

export {
  UserInfoLayout,
  UserInfoItem,
  SajuInfoButton,
  SajuSectionLayout,
  DaeunSection,
  PreviewSajuSectionLayout,
  MessageBox,
  GridHeaderBox,
  GridHeaderBgBox,
  GridBox,
  GridItem,
  GridBgItem,
};
