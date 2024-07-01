import React from 'react';
import { ChildrenT } from '@module/types/content/fortune';
import {
  ChildLayout,
  DataLayout,
} from '@/app/(pc)/contents/[id]/result/components/Result.styled';
import ContentTemplate from '@/app/(pc)/contents/[id]/result/components/Fortune/Template';

interface Props {
  data: ChildrenT;
}

function Child({ data }: Props) {
  return (
    <ChildLayout sign={data.sign}>
      {!(data.first_template_id === 2 || data.first_template_id === 10) &&
        data.name && <h4 dangerouslySetInnerHTML={{ __html: data.name }} />}
      <DataLayout>
        <ContentTemplate key={data.id} data={data} isChildren />
      </DataLayout>
    </ChildLayout>
  );
}

export default Child;
