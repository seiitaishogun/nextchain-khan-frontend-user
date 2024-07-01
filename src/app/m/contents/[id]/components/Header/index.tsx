import React from 'react';
import Image from 'next/image';
import { DEFAULT_THUMBNAIL_LARGE_PATH } from '@/app/m/constants/image';
import {
  ContentBanner,
  ContentDescription,
  ContentHeaderLayout as Layout,
  ContentName,
} from '@/app/m/contents/[id]/components/Header/styled';
import ContentCount from '@/app/m/contents/[id]/components/Header/Count';
import { ContentHeaderProps } from '@/app/m/contents/[id]/components/Header/types';

function ContentHeader({ content }: ContentHeaderProps) {
  return (
    <Layout>
      <ContentName>{content.name}</ContentName>

      <ContentCount content={content} />

      <ContentBanner>
        <Image
          src={content.banner_mobile || DEFAULT_THUMBNAIL_LARGE_PATH}
          alt=""
          fill
        />
      </ContentBanner>

      <ContentDescription
        dangerouslySetInnerHTML={{ __html: content.contents }}
      />
    </Layout>
  );
}

export default ContentHeader;
