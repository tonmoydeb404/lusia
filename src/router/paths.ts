const paths = {
  root: "/",
  about: "/about",
  work: "/work",
  stacks: "/stacks",
  contact: "/contact",
  projects: {
    root: "/projects",
    details: (slug: string) => `/projects/${slug}`,
  },
  blog: {
    root: "/blog",
    details: (slug: string) => `/blog/${slug}`,
  },
};

export default paths;
