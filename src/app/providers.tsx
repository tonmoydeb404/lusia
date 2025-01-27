"use client";

import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Providers = (props: Props) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {props.children}
    </ThemeProvider>
  );
};

export default Providers;
