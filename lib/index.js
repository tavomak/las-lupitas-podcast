const server = process.env.NEXT_PUBLIC_CMS_API_URL;

async function fetchAPI(query, { variables } = {}) {
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
    // throw new Error('Failed to fetch API')
  }

  return json.data;
}

export async function getPreviewPostBySlug(slug) {
  const data = await fetchAPI(
    `
  query PostBySlug($where: JSON) {
    posts(where: $where) {
      slug
    }
  }
  `,
    {
      variables: {
        where: {
          slug,
        },
      },
    },
  );
  return data?.posts[0];
}

export async function getAllServicesForHome(preview) {
  const data = await fetchAPI(
    `query homepage {
      homePages(first: 1) {
        bloqueDeTexto
        heroPrimeraLiena
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
