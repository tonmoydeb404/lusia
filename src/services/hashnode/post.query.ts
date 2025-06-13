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
