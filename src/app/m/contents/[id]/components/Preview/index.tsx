import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import { fetchContentPreview } from '@module/api/content';
import { ContentDetailT } from '@module/types/content/detail';
import { ContentTypeE } from '@module/types/content';
import Title from '@/app/m/components/Title';
import { ContentPreviewLayout as Layout } from '@/app/m/contents/[id]/components/Preview/styled';
import ContentSample from '@/app/m/contents/[id]/components/Sample';
import { SummaryListLayout } from '@/app/m/components/List/styled';

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

  const getBoldText = () => {
    if (content.category?.name) return content.category?.name;
    if (content.type?.name === ContentTypeE.Saju) return '사주';
    if (content.type?.name === ContentTypeE.Tarot) return '타로';
    return '운세';
  };

  const boldText = getBoldText();
  if (data.length === 0) return null;
  return (
    <Layout>
      <Title boldText={boldText} text="이런 내용이 있어요">
        <ContentSample content={content} />
      </Title>

      <SummaryListLayout>
        {data.map(({ id: cId, name }: any) => (
          <li key={cId}>
            <h4 dangerouslySetInnerHTML={{ __html: name }} />
          </li>
        ))}
      </SummaryListLayout>
    </Layout>
  );
}

export default ContentPreview;
