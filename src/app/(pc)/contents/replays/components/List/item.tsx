import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { getPurchaseURL } from '@module/utils/url';
import { getOriginDateToSplit } from '@module/utils/date';
import { DEFAULT_THUMBNAIL_PATH } from '@/app/(pc)/constants/image';
import {
  ListDateBox,
  ListDescription,
  ListItemDetailBox,
  ListName,
  ListThumbnail,
} from '@/app/(pc)/components/List/styled';
import { ListItemProps } from '@/app/(pc)/contents/replays/components/List/types';
import {
  ListItemLayout as Layout,
  ReplayStatus,
} from '@/app/(pc)/contents/replays/components/List/styled';

function ListItem({ data }: ListItemProps) {
  const router = useRouter();
  const contentPath = getPurchaseURL({
    contentId: data.id,
    purchaseId: data.purchase_id,
  });

  const checkReplay = () => {
    const now = new Date();
    const availableAt = getOriginDateToSplit(data.available_at);
    return now.getTime() < availableAt.getTime();
  };

  const isReplay = checkReplay();

  const handleRedirectContent = () => {
    if (!isReplay) {
      alert('다시보기가 불가능한 콘텐츠입니다.');
      return;
    }
    router.push(contentPath);
  };

  return (
    <Layout>
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

        <ListDateBox>
          <span>
            <strong>조회일시</strong>: {data.created_at}
          </span>
          <span>
            <strong>만료일시</strong>: {data.available_at}
          </span>
        </ListDateBox>
      </ListItemDetailBox>

      <ReplayStatus
        type="button"
        $isReplay={isReplay}
        onClick={handleRedirectContent}
      >
        다시보기
      </ReplayStatus>
    </Layout>
  );
}

export default ListItem;
