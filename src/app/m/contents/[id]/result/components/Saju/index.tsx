import React from 'react';
import Fortune from '@/app/m/contents/[id]/result/components/Fortune';
import { SajuResultProps } from '@/app/m/contents/[id]/result/components/Saju/types';
import ContentHeader from '@/app/m/contents/[id]/result/components/Saju/Header';
import TitleNavigation from '@/app/m/contents/[id]/result/components/TitleNavigation';

function SajuResult({ content, purchase, parents, saju }: SajuResultProps) {
  const isNavigation = content.category?.id === 10;

  return (
    <>
      <ContentHeader content={content} purchase={purchase} saju={saju} />

      {isNavigation && <TitleNavigation parents={parents} />}

      <Fortune parents={parents} isName />
    </>
  );
}

export default SajuResult;
