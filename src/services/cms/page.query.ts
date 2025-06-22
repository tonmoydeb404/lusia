export const fetchPagesQuery = `
query FetchPages {
  pages(stage: PUBLISHED) {
    id
    title
    slug
    isCustomPage
  }
}
`;

export const fetchPageQuery = `
query FetchPage($slug: String) {
  page(where: {slug: $slug}) {
    id
    title
    slug
    isCustomPage
    description
    content {
      html
    }
    metaSeo {
      title
      description
      canonicalUrl
      index
      follow
      image {
        height
        width
        url
      }
    }
  }
}
`;
