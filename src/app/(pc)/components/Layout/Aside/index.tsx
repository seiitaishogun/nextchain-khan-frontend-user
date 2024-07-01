import React, { useEffect } from 'react';
import useCategories from '@module/hooks/common/useCategories';
import {
  BgLayer,
  Layout,
} from '@/app/(pc)/components/Layout/Aside/Aside.styled';
import AsideMenu from '@/app/(pc)/components/Layout/Aside/Menu';

interface Props {
  isOpen: boolean;
  setIsOpen: React.Dispatch<boolean>;
}

function Menu({ isOpen, setIsOpen }: Props) {
  const categories = useCategories() || [];
  const categoryMenu = categories.map(category => ({
    text: category.name,
    link: `/categories/${category.id}`,
  }));

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = '15px';
    } else {
      document.body.style.overflow = 'auto';
      document.body.style.paddingRight = '0';
    }
  }, [isOpen]);

  const menu = [
    {
      text: '운세 다시보기',
      link: '/contents/replays',
    },
    {
      text: '운세 전체보기',
      link: '/contents',
    },
    ...categoryMenu,
    {
      text: '카카오톡 문의하기',
      link: 'http://pf.kakao.com/_ymuIC/chat',
    },
  ];

  if (!isOpen) return null;

  return (
    <>
      <Layout>
        <AsideMenu menu={menu} setIsOpen={setIsOpen} />
      </Layout>
      <BgLayer onClick={() => setIsOpen(false)} />
    </>
  );
}

export default Menu;
