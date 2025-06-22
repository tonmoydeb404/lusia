export const fetchProfileQuery = `
query FetchProfile($id: ID) {
  profile(where: {id: $id}) {
    id
    name
    socials {
      title
      newTab
      ref
      id
      href
    }
    stackItems(first: 100) {
      logo {
        width
        url
        height
      }
      title
      id
    }
    ongoingProduct {
      id
      title
      description
      sourceLink
      liveLink
      logo {
        width
        url
        height
      }
    }
    avatar {
      width
      url
      height
    }
    contacts {
      title
      ref
      newTab
      href
      id
    }
    callToActions {
      title
      ref
      newTab
      id
      href
    }
  }
}
`;
