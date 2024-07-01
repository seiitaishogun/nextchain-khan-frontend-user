import Image from 'next/image';
import Link from 'next/link';
import { getMobileContentURL } from '@module/utils/url';
import { DEFAULT_THUMBNAIL_PATH } from '@/app/m/constants/image';
import { ListItemProps } from '@/app/m/categories/components/List/types';
import { ListItemLayout as Layout } from '@/app/m/categories/components/List/styled';
import {
  ListItemDetailBox,
  ListLargeDescription,
  ListLargeName,
  ListThumbnail,
} from '@/app/m/components/List/styled';

function ListItem({ data }: ListItemProps) {
  const contentPath = getMobileContentURL(data.id);

  return (
    <Layout>
      <Link href={contentPath} prefetch={false}>
        <ListItemDetailBox>
          <div>
            <ListLargeName>{data.name}</ListLargeName>
            <ListLargeDescription>{data.summary}</ListLargeDescription>
          </div>

          <ListThumbnail>
            <Image src={data.thumbnail || DEFAULT_THUMBNAIL_PATH} alt="" fill />
          </ListThumbnail>
        </ListItemDetailBox>
      </Link>
    </Layout>
  );
}

export default ListItem;
