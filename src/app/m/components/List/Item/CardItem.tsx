import Image from 'next/image';
import Link from 'next/link';
import { getMobileContentURL } from '@module/utils/url';
import { MainDetailProps } from '@/app/m/components/List/types';

function CardItem({ data }: MainDetailProps) {
  const contentPath = getMobileContentURL(data.id);

  return (
    <li className="item">
      <Link className="link_thumb" href={contentPath} title={data.name}>
        <picture>
          <Image
            src={data.thumbnail || ''}
            className="thumb"
            alt={data.name}
            fill
          />
        </picture>
      </Link>
      <Link className="link_caption" href={contentPath} title={data.name}>
        <strong
          className="tit line_clamp2"
          dangerouslySetInnerHTML={{ __html: data.name }}
        />
      </Link>
    </li>
  );
}

export default CardItem;
