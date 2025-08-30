const { SitemapStream, streamToPromise } = require('sitemap');
const { Readable } = require('stream');

const sitemapBlog = async (req: any, res: any) => {
  const staticPages = [
    { url: '/' },
    { url: '/about' },
    { url: '/episodios' },
    { url: '/contacto' },
  ];

  const stream = new SitemapStream({ hostname: `https://${req.headers.host}` });

  res.writeHead(200, {
    'Content-Type': 'application/xml',
  });

  const xmlString = await streamToPromise(Readable.from(staticPages).pipe(stream)).then(
    (data: any) => data.toString()
  );

  res.end(xmlString);
};

export default sitemapBlog;
