namespace NodeJS {
  interface ProcessEnv {
    NEXT_PUBLIC_BASE_URL: string;
    NEXT_PUBLIC_GITHUB_USERNAME: string;
    NEXT_PUBLIC_FORM_API: string;

    HASHNODE_URL: string;
    HASHNODE_REVALIDATE_SECRET: string;

    CMS_ENDPOINT: string;
    CMS_PROFILE_ID: string;
    CMS_REVALIDATE_SECRET: string;
  }
}
