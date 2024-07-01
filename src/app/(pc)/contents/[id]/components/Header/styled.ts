import styled from 'styled-components';

const ContentHeaderLayout = styled.div`
  padding-top: 30px;
`;

const ContentBanner = styled.div`
  overflow: hidden;
  box-sizing: border-box;
  width: 100%;
  padding-left: 34px;
`;

const ContentDescription = styled.div`
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  max-height: 81px;
  margin-top: 40px;
  font-size: 18px;
  font-weight: normal;
  line-height: 27px;
  text-overflow: ellipsis;
`;

const ContentPreviewButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  width: auto;
  height: 38px;
  padding: 0 8px;
  border: 1px solid #dddddd;
  background: #fafafa;
  font-size: 16px;
  font-weight: bold;
  color: #a0a0a0;
`;

const ContentVariety = styled.div`
  margin-top: 20px;
`;

export {
  ContentHeaderLayout,
  ContentBanner,
  ContentDescription,
  ContentPreviewButton,
  ContentVariety,
};
