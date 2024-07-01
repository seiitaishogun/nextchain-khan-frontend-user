import React from 'react';
import { PurchaseT, SajuT } from '@module/types/content/result';
import ContentUserInfo from '@/app/(pc)/contents/[id]/result/components/Saju/Header/User';
import { ContentResultHeaderLayout as Layout } from '@/app/(pc)/contents/[id]/result/components/Saju/Header/styled';

interface Props {
  purchase: PurchaseT;
  saju: SajuT[];
}

function ContentHeader({ purchase, saju }: Props) {
  return (
    <Layout>
      <ContentUserInfo purchase={purchase} saju={saju} />
    </Layout>
  );
}

export default ContentHeader;
