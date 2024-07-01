'use client';

import { useInfiniteQuery } from '@tanstack/react-query';
import styled from 'styled-components';
import { getCookie } from 'cookies-next';
import React from 'react';
import { fetchContentReplayList } from '@module/api/content/replay';
import { USER_PURCHASE_HASH_KEY } from '@module/constants/user/hash';
import useAlert from '@module/hooks/common/useAlert';
import List from '@/app/(pc)/contents/replays/components/List';
import { ListTitle } from '@/app/(pc)/components/List/styled';

const Layout = styled.div`
  overflow: hidden;
  width: 1130px;
  margin: 0 auto;
  padding: 35px 0 60px;

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
        <ListTitle>운세 다시보기</ListTitle>
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
