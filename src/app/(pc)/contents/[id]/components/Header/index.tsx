import React from 'react';
import Image from 'next/image';
import { DEFAULT_THUMBNAIL_LARGE_PATH } from '@/app/(pc)/constants/image';
import {
  ContentBanner,
  ContentDescription,
  ContentHeaderLayout as Layout,
} from '@/app/(pc)/contents/[id]/components/Header/styled';
import { ContentHeaderProps } from '@/app/(pc)/contents/[id]/components/Header/types';

function ContentHeader({ content }: ContentHeaderProps) {
  return (
    <Layout>
      <ContentBanner>
        <Image
          src={content.banner || DEFAULT_THUMBNAIL_LARGE_PATH}
          alt=""
          width={720}
          height={586}
        />
      </ContentBanner>

      <ContentDescription
        dangerouslySetInnerHTML={{ __html: content.contents }}
      />
    </Layout>
  );
}

export default ContentHeader;
