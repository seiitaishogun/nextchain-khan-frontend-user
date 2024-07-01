'use client';

import React from 'react';
import styled from 'styled-components';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { fetchContentList } from '@module/api/content/list';
import List from '@/app/(pc)/categories/components/List';
import { ListTitle } from '@/app/(pc)/components/List/styled';

const Layout = styled.section`
  overflow: hidden;
  width: 1130px;
  margin: 0 auto;
  padding: 35px 0 60px;
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
          router.replace('/error');
        },
      }
    );

  return (
    <Layout>
      <ListTitle>운세 전체보기</ListTitle>

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
