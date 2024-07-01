import React from 'react';
import { getMobileContentURL } from '@module/utils/url';
import Banner from '@/app/m/components/Banner';
import List from '@/app/m/components/List';
import { TOP_DATA } from '@/app/m/data/main';

function TopBanner() {
  const firstData = TOP_DATA[0];
  const otherData = TOP_DATA.slice(1);

  return (
    <div>
      <Banner
        size="large"
        text={firstData.name}
        linkProps={{
          href: getMobileContentURL(firstData.id),
        }}
        image={firstData.thumbnail}
      />
      <List data={otherData} type="card" />
    </div>
  );
}

export default TopBanner;
