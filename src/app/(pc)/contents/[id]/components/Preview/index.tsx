import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import { fetchContentPreview } from '@module/api/content';
import { ContentDetailT } from '@module/types/content/detail';
import BoldTitle from '@/app/(pc)/components/Title/BoldTitle';
import {
  ContentPreviewLayout as Layout,
  PreviewList,
} from '@/app/(pc)/contents/[id]/components/Preview/styled';
import ContentSample from '@/app/(pc)/contents/[id]/components/Sample';

interface Props {
  content: ContentDetailT;
}

function ContentPreview({ content }: Props) {
  const params = useParams();
  const id = Number(params.id || 0);
  const { data } = useQuery(
    ['contentPreview', id],
    () => fetchContentPreview(id),
    {
      initialData: {
        data: [],
      },
      select: res => res.data.filter((r: any) => r.name !== 'null'),
    }
  );

  return (
    <Layout>
      <BoldTitle
        boldText={content.category?.name || '운세'}
        text="이런 내용이 있어요"
      >
        <ContentSample content={content} />
      </BoldTitle>

      <PreviewList>
        {data.map(({ id: cId, name }: any) => (
          <li key={cId}>
            <h4 dangerouslySetInnerHTML={{ __html: name }} />
          </li>
        ))}
      </PreviewList>
    </Layout>
  );
}

export default ContentPreview;
