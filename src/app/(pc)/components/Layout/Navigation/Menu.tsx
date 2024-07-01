import Link from 'next/link';
import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import classNames from 'classnames';
import { useRecoilValue } from 'recoil';
import useCategories from '@module/hooks/common/useCategories';
import { contentInfoAtom } from '@module/store/content/info';

import 'swiper/css';
import 'swiper/css/free-mode';

function NavigationMenu() {
  const router = useRouter();
  const params = useParams();
  const categories = useCategories() || [];
  const categoryId = Number(params.categoryId || 0);
  const contentInfo = useRecoilValue(contentInfoAtom);

  const checkActiveMenu = (id: number) =>
    id === categoryId || id === contentInfo?.category_id;

  const handleClickLink = (e: React.MouseEvent<HTMLElement>, id: number) => {
    e.preventDefault();

    if (id === 10) {
      router.push('/m/contents/14');
    } else {
      router.push(`/m/categories/${id}`);
    }
  };

  return (
    <ul className="list_cate">
      {categories.map(c => (
        <li
          key={c.id}
          className={classNames({
            active: checkActiveMenu(c.id),
          })}
        >
          <Link
            href={`/categories/${c.id}`}
            title={c.name}
            prefetch={false}
            onClick={e => {
              handleClickLink(e, c.id);
            }}
          >
            {c.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default NavigationMenu;
