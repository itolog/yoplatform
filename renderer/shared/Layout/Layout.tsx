import React, { memo } from 'react';
import Head from 'next/head';
import Header from '../../components/Header/Header';

interface LayoutProps {
  children: JSX.Element[] | JSX.Element;
  title?: string;
}

const Layout: React.FC<LayoutProps> = memo(
  ({ children, title = 'Yo Platforma' }) => {
    return (
      <div>
        <Head>
          <title>{title}</title>
        </Head>
        {/* Header */}
        <Header />
        {/* Main Content */}
        {children}
      </div>
    );
  },
);

export default Layout;
