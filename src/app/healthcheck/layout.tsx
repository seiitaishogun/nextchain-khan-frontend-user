export async function generateMetadata() {
  return {
    title: '스포츠경향 운세',
    description: '스포츠경향 운세 서비스',
    icons: {
      icon: `${process.env.APP_URL}/images/favicon_sk.ico`,
    },
    openGraph: {
      images: [
        {
          url: `${process.env.APP_IMAGE_URL}/m/common/og_logo_luck.jpg`,
          width: 1200,
          height: 628,
        },
      ],
    },
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
