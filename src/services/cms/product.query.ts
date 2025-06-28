export const fetchProductsQuery = `
query FetchProducts {
  products(stage: PUBLISHED) {
    id
    title
    description
    liveLink
    sourceLink
    pricingType
    logo {
      url
      width
      height
    }
  }
}
`;
