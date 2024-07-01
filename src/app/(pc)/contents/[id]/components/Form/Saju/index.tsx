import React from 'react';
import SajuForm from '@/app/(pc)/contents/[id]/components/Form/Saju/Form';

interface Props {
  isPartner: boolean;
  categoryName?: string;
}

function SajuFormContainer({ isPartner, categoryName }: Props) {
  return (
    <>
      <SajuForm isUser text="사주 정보 입력" categoryName={categoryName} />

      {isPartner && (
        <SajuForm
          isUser={false}
          text="상대방 사주 정보 입력"
          categoryName={categoryName}
        />
      )}
    </>
  );
}

export default SajuFormContainer;
