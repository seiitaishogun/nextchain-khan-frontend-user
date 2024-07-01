'use client';

import React from 'react';
import styled from 'styled-components';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { fetchContentList } from '@module/api/content/list';
import List from '@/app/m/categories/components/List';
import Title from '@/app/m/components/Title';

const Layout = styled.section`
  padding: 0 14px;

  .title {
    padding-bottom: 20px;
    border-bottom: 2px solid ${props => props.theme.colors.primary};
  }
`;

function ContentList() {
  const router = useRouter();
  const { data, isLoading, isFetchingNextPage, fetchNextPage, hasNextPage } =
    useInfiniteQuery(
      ['contentList'],
      ({ pageParam = 1 }) =>
        fetchContentList({
          page: pageParam,
        }),
      {
        getNextPageParam: (lastPage, allPages) => {
          const nextPage = allPages.length + 1;
          return lastPage.data.last_page < nextPage ? undefined : nextPage;
        },
        select: res => ({
          pages: res?.pages.flatMap(p => p.data.list),
          pageParams: res.pageParams,
        }),
        onError: () => {
          router.replace('/m/error');
        },
      }
    );

  return (
    <Layout>
      <Title boldText="운세" text="전체보기" />

      <List
        data={data}
        isLoading={isLoading || isFetchingNextPage}
        hasNextPage={hasNextPage}
        fetchNextPage={fetchNextPage}
      />
    </Layout>
  );
}

export default ContentList;
