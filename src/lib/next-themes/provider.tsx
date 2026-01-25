import { ThemeProvider as NextThemesProvider } from "next-themes";
import BaseStyle from "./base-style";

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <BaseStyle />
      <NextThemesProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </NextThemesProvider>
    </>
  );
};

export default ThemeProvider;
