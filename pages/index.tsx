import type { NextPage } from 'next';
import { GetStaticProps } from 'next';
import { getAllServicesForHome, getLastEpisodes } from 'lib';
import Image from 'next/image';
import useTranslation from 'next-translate/useTranslation';
import Layout from '@components/Templates/Layout';
import Subscribe from '@components/Molecules/Subscribe';
import EpisodeCard from '@components/Molecules/EpisodeCard';
import NetworkIcons from '@components/Molecules/NetworkIcons';
import styles from 'styles/pages/Home.module.scss';
import { socialMediaInfo } from '@utils/constants';

interface Props {
  data: {
    bloqueDeTexto: string,
    heroPrimeraLinea: string,
    heroSegundaLinea: string,
    heroTerceraLinea: string,
  },
  posts: any
}

const Home: NextPage<Props> = ({ data, posts }) => {
  const { episodes } = posts;
  const {
    bloqueDeTexto,
    heroPrimeraLinea,
    heroSegundaLinea,
    heroTerceraLinea,
  } = data;
  const { t } = useTranslation('common');
  return (
    <Layout
      description=""
      title=""
    >
      <section className={styles.heading}>
        <article className="container">
          <div className="row">
            <div className="col-md-6 text-white py-5">
              <p className="text-uppercase">{`Andreína Fuentes - ${t('site_subtitle')}`}</p>
              <p className="fs-1 fw-bolder">{heroPrimeraLinea}</p>
              <p className="fs-4">{heroSegundaLinea}</p>
              <p>
                {heroTerceraLinea}
              </p>

              <ul className="d-lg-flex">
                <li className="me-2">
                  <a
                    className="btn btn-primary mt-4 text-uppercase py-2 px-4"
                    href={socialMediaInfo[3].route}
                    target="_blanc"
                  >
                    {t('cta_listen')}
                  </a>
                </li>
                <li>
                  <a
                    className="btn btn-secondary mt-4 text-uppercase py-2 px-4"
                    href={socialMediaInfo[2].route}
                    target="_blanc"
                  >
                    {t('cta_show')}
                  </a>
                </li>
              </ul>

              <NetworkIcons
                theme="white"
                ytSlug={socialMediaInfo[2].route}
                spSlug={socialMediaInfo[3].route}
              />

            </div>
          </div>
        </article>
      </section>

      <section className="container-fluid">
        <article className="container py-5">
          <div className="row d-flex align-items-center">
            <div className="col-md-6 align-self-center">
              <div className="px-md-5 pb-5 mb-lg-0 pb-lg-0">
                <Image src="/hero2-home.png" alt="girl" width={700} height={841} objectFit="contain" layout="responsive" />
              </div>
            </div>
            <div className="col-md-6">
              <p className="text-uppercase fs-4">{t('owner_name')}</p>
              <p className="">
                {bloqueDeTexto}
              </p>
            </div>
          </div>
        </article>
      </section>

      <section className="container py-5">
        <div className="row">
          <div className="col">
            <p className="text-uppercase fs-4">{t('last_episodes')}</p>
          </div>
        </div>
        <div className="row">
          {episodes.length > 0 && episodes.map((item: any) => (
            <div className="col" key={item.id}>
              <EpisodeCard
                slug={item.slug}
                title={item.title}
                description={item.description}
                image={item.image}
                audioDuration={item.audioDuration}
                episodeNumber={item.episodeNumber}
              />
            </div>
          ))}
        </div>
      </section>

      <section className="container py-5">
        <div className="row justify-content-center py-5">
          <div className="col-md-6">
            <Subscribe />
          </div>
        </div>
      </section>

    </Layout>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const data = await getAllServicesForHome(preview);
  const posts = await getLastEpisodes();
  return {
    props: {
      preview,
      data: data.homePages[0],
      posts,
    },
    revalidate: 60,
  };
};
