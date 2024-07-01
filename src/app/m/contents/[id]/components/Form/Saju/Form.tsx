import React from 'react';
import styled from 'styled-components';
import SajuInput from '@/app/m/contents/[id]/components/Form/Saju/Input';
import Title from '@/app/m/components/Title';

interface Props {
  isUser: boolean;
  text: string;
  categoryName?: string;
}

const Layout = styled.section`
  margin-top: 20px;
  padding: 0 15px;
  border-top: 9px solid #f2f2f2;
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
