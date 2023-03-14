import React, { ReactNode } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>
    <Header />
    {children}
    <Footer />
  </div>
);

export default Layout;
