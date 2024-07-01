import React from 'react';
import styled from 'styled-components';
import { ContentDetailT } from '@module/types/content/detail';
import TarotInput from '@/app/m/contents/[id]/components/Form/Tarot/Input';
import Title from '@/app/m/components/Title';
import ContentSample from '@/app/m/contents/[id]/components/Sample';

interface Props {
  isUser: boolean;
  text?: string;
  content?: ContentDetailT;
  categoryName?: string;
}

const Layout = styled.section`
  margin-top: 15px;
  padding: 0 15px;

  .title {
    margin-bottom: 15px;
  }
`;

function TarotForm({ isUser, text, content, categoryName }: Props) {
  return (
    <Layout>
      {text && (
        <Title boldText={categoryName || '타로'} text={text}>
          {content && <ContentSample content={content} />}
        </Title>
      )}
      <TarotInput isUser={isUser} />
    </Layout>
  );
}

export default TarotForm;
