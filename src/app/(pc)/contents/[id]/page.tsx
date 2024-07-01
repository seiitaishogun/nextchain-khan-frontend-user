'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { useParams } from 'next/navigation';
import useAlert from '@module/hooks/common/useAlert';
import withContentForm from '@module/hoc/content/withContentForm';
import useContentDetailData from '@module/hooks/content/useContentDetailData';
import useMounted from '@module/hooks/common/useMounted';
import useSaveContentInfo from '@module/hooks/content/useSaveContentInfo';
import ContentForm from '@/app/(pc)/contents/[id]/components/Form';
import ContentHeader from '@/app/(pc)/contents/[id]/components/Header';
import ContentPreview from '@/app/(pc)/contents/[id]/components/Preview';
import {
  Layout,
  GridBox,
  LeftBox,
  ContentName,
  RightBox,
} from '@/app/(pc)/contents/[id]/styled';

const Loading = dynamic(
  () => import('@module/components/Common/Popup/Loading'),
  {
    ssr: false,
  }
);

const Form = withContentForm(ContentForm);

function ContentDetailPage() {
  const params = useParams();
  const { renderMessage, setAlertOptions } = useAlert();
  const mounted = useMounted();
  const id = Number(params.id || 0);

  const {
    data: contentData,
    isLoading,
    isFetched,
    isError,
  } = useContentDetailData({
    id,
    setAlertOptions,
  });

  useSaveContentInfo({ content: contentData });

  if (isLoading || !isFetched || !mounted) return <Loading isOpen />;
  if (isError) return renderMessage();

  return (
    <Layout>
      <GridBox>
        <ContentName>{contentData?.name}</ContentName>

        <LeftBox>
          <ContentHeader content={contentData} />
          <Form content={contentData} />
        </LeftBox>
        <RightBox>
          <ContentPreview content={contentData} />
        </RightBox>
      </GridBox>
    </Layout>
  );
}

export default ContentDetailPage;
