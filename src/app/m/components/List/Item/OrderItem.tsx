import styled from 'styled-components';
import Link from 'next/link';
import { getMobileContentURL } from '@module/utils/url';
import { ListSmallName } from '@/app/m/components/List/styled';
import { ListItemSmallProps } from '@/app/m/components/List/types';

const Layout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
  padding-bottom: 15px;
  border-bottom: 1px solid ${props => props.theme.colors.gray100};

  &:first-child {
    margin-top: 0;
  }

  a {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const ListCount = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 28px;
  height: 28px;
  margin-right: 12px;
  background: #f5f5f5;
  font-size: 18px;
  font-weight: bold;
  color: #a0a0a0;
`;

const FlexBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
`;

function OrderItem({ data, order }: ListItemSmallProps) {
  const contentPath = getMobileContentURL(data.id);

  return (
    <Layout>
      <Link href={contentPath} prefetch={false}>
        <FlexBox>
          <ListCount>{order}</ListCount>

          <ListSmallName dangerouslySetInnerHTML={{ __html: data.name }} />
        </FlexBox>
      </Link>
    </Layout>
  );
}

export default OrderItem;
