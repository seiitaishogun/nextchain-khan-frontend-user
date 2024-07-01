import React from 'react';
import styled from 'styled-components';
import TarotInput from '@/app/(pc)/contents/[id]/components/Form/Tarot/Input';
import BoldTitle from '@/app/(pc)/components/Title/BoldTitle';

interface Props {
  isUser: boolean;
  text?: string;
  categoryName?: string;
}

const Layout = styled.section`
  margin-top: 15px;

  .title {
    margin-bottom: 15px;
  }
`;

function TarotForm({ isUser, text, categoryName }: Props) {
  return (
    <Layout>
      {text && <BoldTitle boldText={categoryName || '타로'} text={text} />}
      <TarotInput isUser={isUser} />
    </Layout>
  );
}

export default TarotForm;
