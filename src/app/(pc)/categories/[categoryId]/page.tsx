'use client';

import React, { useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import styled from 'styled-components';
import { useInfiniteQuery } from '@tanstack/react-query';
import { fetchCategoryList } from '@module/api/category';
import useCategories from '@module/hooks/common/useCategories';
import List from '@/app/(pc)/categories/components/List';
import { ListTitle } from '@/app/(pc)/components/List/styled';

const Layout = styled.section`
  overflow: hidden;
  width: 1130px;
  margin: 0 auto;
  padding: 35px 0 60px;
`;

function Categories() {
  const router = useRouter();
  const params = useParams();
  const categoryId = Number(params.categoryId || 0);
  const categoryData = useCategories() || [];
  const { data, isLoading, isFetchingNextPage, fetchNextPage, hasNextPage } =
    useInfiniteQuery(
      ['categoryList', categoryId],
      ({ pageParam = 1 }) =>
        fetchCategoryList({
          id: categoryId,
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

  useEffect(() => {
    if (!categoryId) router.push('/error');
  }, [categoryId]);

  /**
  const getCategoryAssets = (curCategoryId: number) => {
    switch (curCategoryId) {
      default:
        return null;
    }
  };
  */

  const title = categoryData.find(item => item.id === categoryId)?.name || '';

  // const assets = getCategoryAssets(categoryId);

  return (
    <Layout>
      {/*
      {assets && (
        <TopBox>
          <Banner
            text={assets.name}
            linkProps={{
              href: getContentURL(assets.id),
            }}
            image={assets.thumbnail}
          />
        </TopBox>
      )}
      */}

      <ListTitle>{title}</ListTitle>
      <List
        data={data}
        isLoading={isLoading || isFetchingNextPage}
        hasNextPage={hasNextPage}
        fetchNextPage={fetchNextPage}
      />
    </Layout>
  );
}

export default Categories;
