import styled from 'styled-components';
// import { ContentResultHeaderLayout } from '@/app/(pc)/contents/[id]/result/components/Saju/Header/styled';

const SampleLayout = styled.div`
  width: 100%;
  max-width: ${props => props.theme.maxDeviceWidth};
  min-width: ${props => props.theme.minDeviceWidth};
`;

const SampleBox = styled.div`
  padding: 15px 0 40px;

  img {
    width: 100% !important;
    height: auto !important;
    position: relative !important;
    object-fit: cover;
  }
`;

export { SampleLayout, SampleBox };
