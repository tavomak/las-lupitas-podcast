import React, { useState } from 'react';
import type { NextPage } from 'next';
import { GetStaticProps } from 'next';
import { getAllEpisodesAndCategories } from 'lib';
import useTranslation from 'next-translate/useTranslation';
import Layout from '@/components/Templates/Layout';
import EpisodeCard from '@/components/Molecules/EpisodeCard';
import { rateLimit } from '@/utils';

interface Props {
  posts: any;
  categories: any;
}

const Episodios: NextPage<Props> = ({ posts, categories }) => {
  const { t } = useTranslation('common');
  const [episodeList, setEpisodeList] = useState(posts);
  const categoriesList = categories.map((item: { name: string }) => item.name);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;

    const filteredEpisodes =
      value === 'all'
        ? posts
        : posts.filter((item: any) =>
            item.categories.some((category: any) => category.name === value)
          );

    setEpisodeList(filteredEpisodes);
  };
  return (
    <Layout description='' title=''>
      <section className='container py-5'>
        <div className='row'>
          <div className='col'>
            <p className='text-uppercase fs-4'>{t('nav_episodes_title')}</p>
          </div>
          <div className='col d-none'>
            {categoriesList.length > 0 && (
              <select onChange={e => handleChange(e)}>
                <option value='all'>Todas las categorías</option>
                {categoriesList.map((item: string) => (
                  <option value={item} key={item}>
                    {item}
                  </option>
                ))}
              </select>
            )}
          </div>
        </div>
        <div className='row'>
          {episodeList.length > 0 &&
            episodeList.map((item: any) => (
              <div className='col-md-4 mb-5' key={item.id}>
                <EpisodeCard
                  slug={item?.slug}
                  title={item?.title}
                  description={item?.description}
                  image={item?.image}
                  audioDuration={item?.audioDuration}
                  episodeNumber={item?.episodeNumber}
                  episodePart={item?.episodePart}
                />
              </div>
            ))}
        </div>
      </section>
    </Layout>
  );
};

export default Episodios;

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  await rateLimit();
  const data = await getAllEpisodesAndCategories(preview);
  return {
    props: {
      preview,
      posts: data.episodes,
      categories: data.categories,
    },
    revalidate: 60,
  };
};
