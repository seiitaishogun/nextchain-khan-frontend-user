import Link from 'next/link';
import styled from 'styled-components';
import { useQuery } from '@tanstack/react-query';
import { fetchMainTop } from '@module/api/main';

const RecommendContentLayout = styled.article`
  box-sizing: border-box;
  width: 100%;
`;

const RecommendContentBox = styled.div`
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

function RecommendContent() {
  const { data } = useQuery(['mainTop'], fetchMainTop, {
    select: res => res.data,
    initialData: {
      data: [],
    },
  });

  return (
    <RecommendContentLayout>
      <RecommendContentBox>
        <h4>
          <Link href="/contents" prefetch={false}>
            다른 운세 더 보기
          </Link>
        </h4>

        <ul>
          {data.map(d => (
            <li key={d.id}>
              <Link href={`/contents/${d.id}`} prefetch={false}>
                {d.name}
              </Link>
            </li>
          ))}
        </ul>
      </RecommendContentBox>
    </RecommendContentLayout>
  );
}

export default RecommendContent;
