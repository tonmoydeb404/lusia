export const fetchWorksQuery = `
query FetchWorks {
  works(stage: PUBLISHED) {
    id
    position
    company
    startYear
    endYear
    companyUrl
  }
}
`;
