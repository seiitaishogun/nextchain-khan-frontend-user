import styled from 'styled-components';
import Link from 'next/link';

interface Props {
  href: string;
  text: string;
}

const Layout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    padding-right: 32px;
    background: url(${props =>
        `${props.theme.imageUrl}/m/common/more_arrow.svg`})
      no-repeat top 7px right;
    background-size: 24px 24px;
    font-family: ${props => props.theme.fontFamilies.notoSans};
    line-height: 35px;
    font-size: 24px;
    color: #3478f6;
  }
`;

function ListMore({ href, text }: Props) {
  return (
    <Layout className="list-more">
      <Link href={href}>{text}</Link>
    </Layout>
  );
}

export default ListMore;
