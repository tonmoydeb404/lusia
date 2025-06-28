const envConfig = {
  HASHNODE_URL: process.env.HASHNODE_URL,
  BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
  GITHUB_USERNAME: process.env.NEXT_PUBLIC_GITHUB_USERNAME,
  CMS: {
    ENDPOINT: process.env.CMS_ENDPOINT,
    PROFILE_ID: process.env.CMS_PROFILE_ID,
    REVALIDATE_SECRET: process.env.CMS_REVALIDATE_SECRET,
  },
};

export default envConfig;
