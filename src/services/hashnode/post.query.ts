export const fetchPostsQuery = `
  query Publication($host: String) {
    publication(host: $host) {
      id
      posts(first: 20) {
        edges {
          node {
            title
            brief
            slug
            url
            publishedAt
          }
        }
      }
    }
  }
`;

export const fetchPostPinnedQuery = `
query Publication($host: String = "tonmoydeb.hashnode.dev") {
  publication(host: $host) {
    id
    pinnedPost {
      title
      brief
      slug
      url
      publishedAt
    }
  }
}
`;
