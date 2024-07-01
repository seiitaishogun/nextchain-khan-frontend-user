import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import { getContentURL } from '@module/utils/url';
import Title from '@/app/(pc)/components/Title';
import { DEFAULT_THUMBNAIL_PATH } from '@/app/(pc)/constants/image';
import { LIST_DATA } from '@/app/(pc)/data/main';

interface Props {
  title: string;
}

const Layout = styled.article`
  overflow: hidden;
  width: ${props => props.theme.desktopDeviceWidth};
  margin: 30px auto 0;
`;

const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 19px;
  margin-top: 11px;

  li {
    display: flex;
    flex-direction: column;
    overflow: hidden;
    box-sizing: border-box;
    height: 287px;
    border: 1px solid #d9d9d9;

    p {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      padding: 19px 20px 0;
      line-height: 1.5;
      font-size: 20px;
      font-weight: bold;
      letter-spacing: normal;
      color: #2a2a2a;
      white-space: normal;
    }
  }
`;

function RowList({ title }: Props) {
  return (
    <Layout>
      <Title text={title} />
      <List>
        {LIST_DATA.map((d: any) => (
          <li key={d.id}>
            <Link href={getContentURL(d.id)} prefetch={false}>
              <div>
                <Image
                  src={d.thumbnail || DEFAULT_THUMBNAIL_PATH}
                  alt=""
                  width={225}
                  height={160}
                />
              </div>
              <p dangerouslySetInnerHTML={{ __html: d.name }} />
            </Link>
          </li>
        ))}
      </List>
    </Layout>
  );
}

export default RowList;
