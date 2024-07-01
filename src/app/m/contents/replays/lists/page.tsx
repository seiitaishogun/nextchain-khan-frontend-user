'use client';

import { useInfiniteQuery } from '@tanstack/react-query';
import styled from 'styled-components';
import { getCookie } from 'cookies-next';
import React from 'react';
import { fetchContentReplayList } from '@module/api/content/replay';
import { USER_PURCHASE_HASH_KEY } from '@module/constants/user/hash';
import useAlert from '@module/hooks/common/useAlert';
import List from '@/app/m/contents/replays/components/List';
import Title from '@/app/m/components/Title';

const Layout = styled.div`
  padding: 0 14px;

  .title {
    padding-bottom: 20px;
    border-bottom: 2px solid ${props => props.theme.colors.primary};
  }
`;

function ContentReplayList() {
  const { renderMessage } = useAlert();

  const purchaseHash = (getCookie(USER_PURCHASE_HASH_KEY) || '').toString();

  const {
    data,
    isLoading,
    isError,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery(
    ['contentReplayList'],
    ({ pageParam = 1 }) =>
      fetchContentReplayList({
        page: pageParam,
        purchase_hash: purchaseHash,
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
    }
  );

  return (
    <>
      <Layout>
        <Title boldText="운세" text="다시보기" />
        <List
          data={data}
          isLoading={isLoading || isFetchingNextPage}
          isError={isError}
          hasNextPage={hasNextPage}
          fetchNextPage={fetchNextPage}
        />
      </Layout>
      {renderMessage()}
    </>
  );
}

export default ContentReplayList;
