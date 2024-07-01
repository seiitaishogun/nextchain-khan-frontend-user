import React from 'react';
import styled from 'styled-components';
import SajuInput from '@/app/(pc)/contents/[id]/components/Form/Saju/Input';
import Title from '@/app/(pc)/components/Title/BoldTitle';

interface Props {
  isUser: boolean;
  text: string;
  categoryName?: string;
}

const Layout = styled.section`
  margin-top: 40px;
`;

function SajuForm({ isUser, text, categoryName }: Props) {
  return (
    <Layout>
      <Title boldText={categoryName || '사주'} text={text} />
      <SajuInput isUser={isUser} />
    </Layout>
  );
}

export default SajuForm;
