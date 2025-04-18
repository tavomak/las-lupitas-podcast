import { PostAndMorePostsResult } from './types';

const server = process.env.NEXT_PUBLIC_CMS_API_URL;

async function fetchAPI(query: string, { variables }: { variables?: any } = {}) {
  const res = await fetch(`${server}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });
  const json = await res.json();
  if (json.errors) {
    console.error(json.errors);
  }

  return json.data;
}

export async function getEpisodeBySlug(slug: string[] | string | undefined) {
  const data = await fetchAPI(
    `
    query Episode($slug: String!) {
      episode(where: {slug: $slug}) {
        content
        id
        title
        slug
        audioDuration
        image {
          url
        }
        episodeNumber
        youtubeId
        spotifyId
        resources {
          description
          id
          label
          url
        }
      }
    }
  `,
    {
      variables: {
        slug,
      },
    },
  );
  return data;
}

export async function getAllServicesForHome(preview?: boolean) {
  const data = await fetchAPI(
    `query homepage {
      homePages(first: 1) {
        bloqueDeTexto
        heroPrimeraLinea
        heroSegundaLinea
        heroTerceraLinea
      }
    }`,
    {
      variables: {
        where: {
          ...(preview ? {} : { status: 'published' }),
        },
      },
    },
  );
  return data;
}

export async function getAllEpisodesAndCategories(
  preview?: boolean,
): Promise<PostAndMorePostsResult> {
  const data = await fetchAPI(
    `
    query Episodes {
      episodes(orderBy: createdAt_DESC) {
        title
        slug
        image {
          url
        }
        categories {
          name
        }
        content
        createdAt
        description
        episodeNumber
        id
        audioDuration
      }
      categories {
        name
      }
    }
    `,
    {
      variables: {
        preview,
      },
    },
  );

  return data;
}

export async function getLastEpisodes(): Promise<PostAndMorePostsResult> {
  const data = await fetchAPI(
    `
    query LastEpisodes {
      episodes(first: 3, orderBy: createdAt_DESC) {
        title
        slug
        image {
          url
        }
        createdAt
        description
        episodeNumber
        id
        audioDuration
      }
    }
    `,
  );

  return data;
}
