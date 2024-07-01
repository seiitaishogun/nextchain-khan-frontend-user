import Link from 'next/link';
import Image from 'next/image';
import { getMobilePurchaseURL } from '@module/utils/url';
import { getOriginDateToSplit } from '@module/utils/date';
import { DEFAULT_THUMBNAIL_PATH } from '@/app/m/constants/image';
import {
  ListDateBox,
  ListItemDetailBox,
  ListLargeDescription,
  ListLargeName,
  ListThumbnail,
} from '@/app/m/components/List/styled';
import { ListItemProps } from '@/app/m/contents/replays/components/List/types';
import {
  ListItemLayout as Layout,
  ReplayStatus,
} from '@/app/m/contents/replays/components/List/styled';

function ListItem({ data }: ListItemProps) {
  const contentPath = getMobilePurchaseURL({
    contentId: data.id,
    purchaseId: data.purchase_id,
  });

  const checkReplay = () => {
    const now = new Date();
    const availableAt = getOriginDateToSplit(data.available_at);
    return now.getTime() < availableAt.getTime();
  };

  const isReplay = checkReplay();

  return (
    <Layout>
      <ListItemDetailBox>
        <div>
          <ListLargeName>
            <Link href={contentPath} prefetch={false}>
              {data.name}
            </Link>
          </ListLargeName>
          <ListLargeDescription>
            <Link href={contentPath} prefetch={false}>
              {data.summary}
            </Link>
          </ListLargeDescription>
        </div>

        <ListThumbnail>
          <Image src={data.thumbnail || DEFAULT_THUMBNAIL_PATH} alt="" fill />
          <ReplayStatus $isReplay={isReplay}>다시보기</ReplayStatus>
        </ListThumbnail>
      </ListItemDetailBox>

      <ListDateBox>
        <Link href={contentPath} prefetch={false}>
          <span>조회일시</span>: {data.created_at}
        </Link>
        <Link href={contentPath} prefetch={false}>
          <span>만료일시</span>: {data.available_at}
        </Link>
      </ListDateBox>
    </Layout>
  );
}

export default ListItem;
