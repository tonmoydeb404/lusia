import paths from "@/router/paths";

export const links: { title: string; path: string }[] = [
  { title: "Home", path: paths.root },
  { title: "About", path: paths.about },
  { title: "Work", path: paths.work },
  { title: "Blog", path: paths.blog.root },
  { title: "Products", path: paths.products.root },
  { title: "Stacks", path: paths.stacks },
  { title: "Contact", path: paths.contact },
];
