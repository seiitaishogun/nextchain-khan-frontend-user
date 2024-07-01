import React from 'react';
import Layout from '@/app/m/components/Layout';
import Provider from '@/app/m/components/Provider';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider>
      <Layout>{children}</Layout>
    </Provider>
  );
}
