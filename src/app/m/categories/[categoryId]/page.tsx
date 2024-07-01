'use client';

import React, { useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import styled from 'styled-components';
import { useInfiniteQuery } from '@tanstack/react-query';
import { fetchCategoryList } from '@module/api/category';
import useCategories from '@module/hooks/common/useCategories';
import { getMobileContentURL } from '@module/utils/url';
import List from '@/app/m/categories/components/List';
import Banner from '@/app/m/components/Banner';
import Title from '@/app/m/components/Title';

const Layout = styled.section`
  overflow: hidden;
  padding: 0 15px;
`;

const TopBox = styled.div`
  // padding-bottom: 20px;
  // border-bottom: 1px solid ${props => props.theme.colors.gray100};
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
          router.replace('/m/error');
        },
      }
    );

  useEffect(() => {
    if (!categoryId) router.push('/m/error');
  }, [categoryId]);

  const getCategoryAssets = (curCategoryId: number) => {
    switch (curCategoryId) {
      case 10:
        return {
          id: 6,
          name: `2024 신년운세`,
          thumbnail: `/m/main/thumbnail_6.webp`,
        };
      default:
        return null;
    }
  };

  const title = categoryData.find(item => item.id === categoryId)?.name || '';

  const assets = getCategoryAssets(categoryId);

  return (
    <Layout>
      {assets && (
        <TopBox>
          <Banner
            text={assets.name}
            linkProps={{
              href: getMobileContentURL(assets.id),
            }}
            image={assets.thumbnail}
          />
        </TopBox>
      )}

      <Title boldText="운세" text={title} />
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
