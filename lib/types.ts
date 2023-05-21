export interface Post {
  id: string;
  content: {
    html: string;
  };
  title: string;
  slug: string;
  video: string;
  coverImage: {
    url: string;
  };
  categories: {
    name: string
  }
}

export interface MorePost {
  id: string;
  title: string;
  slug: string;
  coverImage: {
    url: string;
  };
}

export interface PostAndMorePostsResult {
  post: Post;
  morePosts: MorePost[];
  episodes: Post[];
  categories: string
}
