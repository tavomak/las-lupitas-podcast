import type { NextPage } from 'next';
import { GetStaticProps } from 'next';
import { getEpisodeBySlug, getAllEpisodesAndCategories, markdownToHtml } from 'lib';
import Layout from '@components/Templates/Layout';
import EpisodeImage from '@components/Molecules/EpisodeImage';
import Subscribe from '@components/Molecules/Subscribe';
import NetworkIcons from '@components/Molecules/NetworkIcons';
import NetworkButtons from '@components/Molecules/NetworkButtons';

interface Props {
  episode: any,
  content: any,
  notFound: boolean,
}

const Episode: NextPage<Props> = ({ episode, content }) => (
  <Layout
    title=""
    description=""
  >
    {episode && episode.title && (
      <>
        <section className="container py-5">
          <div className="row justify-content-center py-5">
            <div className="col-8">
              <h1 className="text-uppercase text-center fs-2">{episode.title}</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <EpisodeImage
                image={{ url: episode.image.url, name: episode.title }}
                episodeNumber={episode.episodeNumber}
              />
              <NetworkIcons
                theme="dark"
                ytSlug={episode.youtubeId}
                spSlug={episode.spotifyId}
                isShow
              />
            </div>
            <div className="col-md-6">
              <div
                dangerouslySetInnerHTML={{ __html: content }}
              />
              <NetworkButtons
                ytSlug={episode.youtubeId}
                spSlug={episode.spotifyId}
                isShow
              />
            </div>
          </div>
        </section>

        <section className="container py-5">
          <div className="row justify-content-center py-5">
            <div className="col-md-6">
              <Subscribe />
            </div>
          </div>
        </section>
      </>
    )}

  </Layout>
);

export default Episode;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params) {
    return {
      redirect: {
        destination: '/404',
        permanent: false,
      },
    };
  }

  const data = await getEpisodeBySlug(params.slug);

  if (data.episode.length < 1) {
    return {
      redirect: {
        destination: '/404',
        permanent: false,
      },
    };
  }

  const content = await markdownToHtml(data.episode.content || '');
  return {
    props: {
      episode: data.episode,
      content,
    },
    revalidate: 60,
  };
};

export const getStaticPaths = async () => {
  const allPosts = await getAllEpisodesAndCategories(false);
  const posts = await allPosts.episodes;

  return {
    paths: posts?.map((post: any) => `/episodios/${post.slug}`) || [],
    fallback: true,
  };
};
