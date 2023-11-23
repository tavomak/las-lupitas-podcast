import { getAllEpisodesAndCategories } from '@lib/queries';

const { SitemapStream, streamToPromise } = require('sitemap');
const { Readable } = require('stream');

const sitemapBlog = async (req: any, res: any) => {
  const allPosts = await getAllEpisodesAndCategories();

  const baseUrl = 'https://www.las-lupitas.com';

  const staticPages = allPosts.episodes
    .map((item: any) => `${baseUrl}/episodios/${item.slug}`);

  const stream = new SitemapStream({ hostname: `https://${req.headers.host}` });

  res.writeHead(200, {
    'Content-Type': 'application/xml',
  });

  const xmlString = await streamToPromise(
    Readable.from(staticPages).pipe(stream),
  ).then((data: any) => data.toString());

  res.end(xmlString);
};

export default sitemapBlog;
