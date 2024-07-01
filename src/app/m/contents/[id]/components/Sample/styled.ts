import styled from 'styled-components';
import { ContentResultHeaderLayout } from '@/app/m/contents/[id]/result/components/Saju/Header/styled';

const SampleLayout = styled.div`
  width: 100%;
  max-width: ${props => props.theme.maxDeviceWidth};
  min-width: ${props => props.theme.minDeviceWidth};

  ${ContentResultHeaderLayout} {
    .title {
      width: 100%;
    }
  }
`;

const SampleBox = styled.div`
  overflow: hidden;
  width: 100%;
  margin: 0 auto;
  padding: 15px 0 40px;

  img {
    width: 100% !important;
    height: auto !important;
    position: relative !important;
    object-fit: cover;
  }
`;

export { SampleLayout, SampleBox };
