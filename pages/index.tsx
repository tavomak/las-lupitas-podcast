import type { NextPage } from 'next';
import { GetStaticProps } from 'next';
import { getAllServicesForHome } from 'lib';
import { ToastContainer } from 'react-toastify';
import Head from 'next/head';
import Image from 'next/image';
import FormContact from 'components/Molecules/Forms/Contact';
import styles from 'styles/pages/Home.module.scss';
import {
  FaSpotify,
  FaYoutube,
  FaInstagram,
  FaTiktok,
} from 'react-icons/fa';

type Homepage = {
  bloqueDeTexto: string,
  heroPrimeraLiena: string,
  heroSegundaLinea: string,
  heroTerceraLinea: string,
}
type Props = {
  data: Homepage,
}

const Home: NextPage<Props> = ({ data }) => {
  const {
    bloqueDeTexto,
    heroPrimeraLiena,
    heroSegundaLinea,
    heroTerceraLinea,
  } = data;
  return (
    <>
      <Head>
        <title>Podcast de las lupitas</title>
        <meta name="description" content="Historias creativas de bienestar , innovación y cultura contemporánea para alcanzar la felicidad desde la diversidad , el entusiasmo y la inclusión (DEI)" />
        <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />
      </Head>

      <main className="content-wrapper">
        <section className={styles.heading}>
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className={styles.logoWrapper}>
                  <div className="w-100">
                    <Image src="/primary-logo.svg" alt="girl" width={22} height={13} objectFit="contain" layout="responsive" />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <ul className="h-100 d-flex align-items-center justify-content-around">
                  <li>
                    <h1 className="text-center">
                      <span className={styles.firstElement}>
                        {heroPrimeraLiena}
                      </span>
                      <br />
                      <span className={styles.firstElement}>
                        {heroSegundaLinea}
                      </span>
                      <br />
                      <span className={styles.firstElement}>
                        {heroTerceraLinea}
                      </span>
                    </h1>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <div className={styles.wave}>
          <div className={styles.waveSmall}>
            <Image src="/wave-home-xxl.svg" alt="girl" width={1300} height={91} objectFit="contain" layout="responsive" />
          </div>
          <div className={styles.waveLarge}>
            <Image src="/wave-home.svg" alt="girl" width={1308} height={240} objectFit="contain" layout="responsive" />
          </div>
        </div>
        <section className={`container ${styles.mainContentWrapper}`}>
          <div className="row d-flex">
            <div className="col-md-6 align-self-center">
              <div className="px-md-5 pb-5 mb-lg-0 pb-lg-0">
                <Image src="/avatar.png" alt="girl" width={700} height={841} objectFit="contain" layout="responsive" />
              </div>
            </div>
            <div className="col-md-6 text-center">
              <ul className="d-flex justify-content-around fs-1 w-100 text-white rss-container mb-5">
                <li className="rss-item">
                  <a className={styles.rssLink} href="https://www.youtube.com/channel/UCiF_WDNay1fR9a2hKJ-gJKA" target="_blank" rel="noreferrer">
                    <span className={styles.rssIcon}>
                      <span className={styles.rssIconImage}>
                        <FaSpotify />
                      </span>
                    </span>
                  </a>
                </li>
                <li className="rss-item">
                  <a className={styles.rssLink} href="https://www.youtube.com/channel/UCiF_WDNay1fR9a2hKJ-gJKA" target="_blank" rel="noreferrer">
                    <span className={styles.rssIcon}>
                      <span className={styles.rssIconImage}>
                        <FaYoutube />
                      </span>
                    </span>
                  </a>
                </li>
                <li className="rss-item">
                  <a className={styles.rssLink} href="https://www.instagram.com/laslupitas.podcast/" target="_blank" rel="noreferrer">
                    <span className={styles.rssIcon}>
                      <span className={styles.rssIconImage}>
                        <FaInstagram />
                      </span>
                    </span>
                  </a>
                </li>
                <li className="rss-item">
                  <a className={styles.rssLink} href="https://www.tiktok.com/@las.lupitass?lang=es" target="_blank" rel="noreferrer">
                    <span className={styles.rssIcon}>
                      <span className={styles.rssIconImage}>
                        <FaTiktok />
                      </span>
                    </span>
                  </a>
                </li>
              </ul>
              <p className="text-ascent-color my-4 py-4 fs-4 f-700">
                {bloqueDeTexto}
              </p>
              <div className="form-container">
                <ul className="d-flex align-items-center justify-content-center w-100">
                  <li className="me-2">
                    <Image src="/inbox-icon.png" alt="Estela estudio digital" width={50} height={50} />
                  </li>
                  <li>
                    <h2 className="text-primary-color f-800 fs-5">
                      Suscríbete a nuestro newsletter
                    </h2>
                  </li>
                </ul>
                <FormContact />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="container text-center my-5 pb-5">
        <a
          href="https://estelaestudio.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ul className="d-flex align-items-center justify-content-center my-5">
            <li className="me-2">
              <span>
                Powered by
              </span>
            </li>
            <li>
              <span>
                <Image src="/estela.gif" alt="Estela estudio digital" width={34} height={34} />
              </span>
            </li>
          </ul>
        </a>
      </footer>
      <ToastContainer />
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async ({ preview = null }) => {
  const data = await getAllServicesForHome(preview);
  return {
    props: {
      preview,
      data: data.homePages[0],
    },
  };
};
