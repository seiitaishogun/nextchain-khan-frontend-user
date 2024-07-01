import React from 'react';
import Fortune from '@/app/(pc)/contents/[id]/result/components/Fortune';
import { SajuResultProps } from '@/app/(pc)/contents/[id]/result/components/Saju/types';
import { PreviewSajuSectionLayout } from '@/app/(pc)/contents/[id]/result/components/Saju/Header/User/styled';
import SajuSection from '@/app/(pc)/contents/[id]/result/components/Saju/Header/Detail/SajuSection';

function SajuResult({ parents, saju }: SajuResultProps) {
  return (
    <>
      {saju && (
        <PreviewSajuSectionLayout>
          <SajuSection saju={saju[0]} />
        </PreviewSajuSectionLayout>
      )}

      <Fortune parents={parents} isName />
    </>
  );
}

export default SajuResult;
