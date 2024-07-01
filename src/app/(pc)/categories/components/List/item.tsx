import Image from 'next/image';
import Link from 'next/link';
import { getContentURL } from '@module/utils/url';
import { DEFAULT_THUMBNAIL_PATH } from '@/app/(pc)/constants/image';
import { ListItemProps } from '@/app/(pc)/categories/components/List/types';
import { ListItemLayout as Layout } from '@/app/(pc)/categories/components/List/styled';
import {
  ListDescription,
  ListItemDetailBox,
  ListName,
  ListThumbnail,
} from '@/app/(pc)/components/List/styled';

function ListItem({ data }: ListItemProps) {
  const contentPath = getContentURL(data.id);

  return (
    <Layout>
      <Link href={contentPath} prefetch={false}>
        <ListThumbnail>
          <Image
            src={data.thumbnail || DEFAULT_THUMBNAIL_PATH}
            alt=""
            width={173}
            height={116}
          />
        </ListThumbnail>

        <ListItemDetailBox>
          <div>
            <ListName>{data.name}</ListName>
            <ListDescription>{data.summary}</ListDescription>
          </div>
        </ListItemDetailBox>
      </Link>
    </Layout>
  );
}

export default ListItem;
