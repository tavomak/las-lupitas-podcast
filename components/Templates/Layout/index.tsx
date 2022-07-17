import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import { ToastContainer } from 'react-toastify';
import Navbar from 'components/Molecules/Navbar';
import Footer from 'components/Molecules/Footer';

type Props = {
  children: React.ReactNode,
  className: string,
  description: string,
  title: string,
  container: boolean,
}

export default function Layout({
  children,
  className,
  description,
  title,
  container,
}: Props) {
  const hostname = typeof window !== 'undefined' ? window.location.href : '';
  return (
    <>
      <Head>
        <title>{`${title} | Estela Estudio Digital`}</title>
        <meta
          name="description"
          content={description}
        />
        <link rel="canonical" href={hostname} />
        <meta property="og:locale" content="es_ES" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="hostname" />
        <meta property="og:site_name" content="Estela Estudio Digital" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Navbar />
      <main
        className={`content-wrapper ${container ? 'container' : 'container-fluid'} ${className} p-0`}
        data-testid="main"
      >
        {children}
      </main>
      <ToastContainer />
      <Footer />
    </>
  );
}
Layout.defaultProps = {
  title: 'Bienvenido a Estela Estudio Digital',
  description: 'Estela Estudio Digital',
  className: '',
  container: false,
};
Layout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  className: PropTypes.string,
  description: PropTypes.string,
  container: PropTypes.bool,
};
