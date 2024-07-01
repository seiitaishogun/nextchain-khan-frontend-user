import styled from 'styled-components';
import React, { useMemo } from 'react';
import Link from 'next/link';
import { ParentT } from '@module/types/content/fortune';

interface Props {
  parents: ParentT[];
}

const TitleNavigationLayout = styled.div`
  box-sizing: border-box;
  width: 100%;
`;

const TitleNavigationList = styled.ul`
  h4 a {
    display: flex;
    align-items: center;
    height: 51px;
    padding: 23px 0;
    font-size: 22px;
    font-weight: normal;
    color: ${props => props.theme.colors.black100};
    line-height: 32px;

    &:after {
      content: '';
      width: 10px;
      height: 17px;
      margin-top: 3px;
      margin-left: 25px;
      background: url(${props =>
          `${props.theme.imageUrl}/pc/common/arrow_right.webp`})
        no-repeat center center;
      background-size: cover;
    }
  }

  ul {
    padding-left: 9px;

    li {
      padding: 20px 0;
      border-bottom: 1px solid ${props => props.theme.colors.gray100};
      line-height: normal;

      &:first-child {
        padding-top: 0;
      }

      a {
        overflow: hidden;
        font-size: 18px;
        line-height: normal;
        color: ${props => props.theme.colors.black};
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
`;

const TitleNavigationItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background: #f8f8f8;

  a {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding: 12px 0;
    font-size: 17px;
    font-weight: 600;
    line-height: 22px;
    color: ${props => props.theme.colors.black100};
  }
`;

function TitleNavigation({ parents }: Props) {
  const parentNames = useMemo(
    () =>
      parents
        .filter(p => !!p.name)
        .map(p => ({
          id: p.id,
          name: p.name,
        })),
    [parents]
  );
  const handleClick = (e: React.MouseEvent<HTMLElement> | any) => {
    e.preventDefault();

    try {
      const id = e.currentTarget.href.split('#')[1];
      const target = document.getElementById(`${id}`) as any;
      const position = (target.scrollTop || target.offsetTop) - 95;
      window.scrollTo({
        top: position,
        behavior: 'smooth',
      });
    } catch {
      // console.info('error');
    }
  };

  if (parentNames.length === 0) return null;

  return (
    <TitleNavigationLayout>
      <TitleNavigationList>
        <h4>
          <Link href="#" prefetch={false}>
            풀이 바로가기
          </Link>
        </h4>

        <ul>
          {parentNames.map(d => (
            <li key={d.id}>
              <Link href={`#parent-title-${d.id}`} onClick={handleClick}>
                {d.name}
              </Link>
            </li>
          ))}
        </ul>

        {parentNames.length % 2 === 1 && <TitleNavigationItem />}
      </TitleNavigationList>
    </TitleNavigationLayout>
  );
}

export default TitleNavigation;
