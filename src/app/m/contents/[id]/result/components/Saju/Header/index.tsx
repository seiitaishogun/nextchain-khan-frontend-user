import React from 'react';
import { PurchaseT, SajuT } from '@module/types/content/result';
import { ContentDetailT } from '@module/types/content/detail';
import { ContentTypeE } from '@module/types/content';
import ContentUserInfo from '@/app/m/contents/[id]/result/components/Saju/Header/User';
import { ContentResultHeaderLayout as Layout } from '@/app/m/contents/[id]/result/components/Saju/Header/styled';
import Title from '@/app/m/components/Title';

interface Props {
  content: ContentDetailT;
  purchase: PurchaseT;
  saju: SajuT[];
}

function ContentHeader({ content, purchase, saju }: Props) {
  const boldText = content.type.name === ContentTypeE.Saju ? '운세' : '타로';
  return (
    <Layout>
      <Title boldText={boldText} text={content.name} />
      <ContentUserInfo purchase={purchase} saju={saju} />
    </Layout>
  );
}

export default ContentHeader;
