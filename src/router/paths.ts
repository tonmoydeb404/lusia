const paths = {
  root: "/",
  about: "/about",
  works: "/works",
  stacks: "/stacks",
  contact: "/contact",
  products: {
    root: "/products",
    details: (slug: string) => `/products/${slug}`,
  },
  blog: {
    root: "/blog",
    details: (slug: string) => `/blog/${slug}`,
  },
};

export default paths;
