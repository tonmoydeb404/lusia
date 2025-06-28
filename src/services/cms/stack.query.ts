export const fetchStacksQuery = `
query FetchStacks {
  stacks(stage: PUBLISHED) {
    id
    title
    items {
      id
      title
      level
      description
      logo {
        url
        width
        height
      }
    }
  }
}
`;
