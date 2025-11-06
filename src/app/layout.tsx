import envConfig from "@/common/env-config";
import { metaSeoToMetadata } from "@/helpers/metadata";
import AppLayout from "@/layout";
import { ThemeProvider } from "@/lib/next-themes";
import { fetchPage } from "@/services/cms/page";
import { fetchProfile } from "@/services/cms/profile";
import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
});

type Props = {
  children: React.ReactNode;
};

export default async function RootLayout(props: Props) {
  const { children } = props;

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${outfit.variable} antialiased pb-20`}
      >
        <ThemeProvider>
          <AppLayout>{children}</AppLayout>
        </ThemeProvider>
      </body>
      <GoogleAnalytics gaId={envConfig.GA_ID} />
    </html>
  );
}

// ----------------------------------------------------------------------

export const generateMetadata = async (): Promise<Metadata> => {
  const profileRes = await fetchProfile();
  const pageRes = await fetchPage("home");

  return metaSeoToMetadata(pageRes, {
    authors: { name: profileRes?.name },
    category: "Portfolio",
    creator: profileRes?.name,
    title: {
      template: `%s - ${profileRes?.name}`,
      default: profileRes?.name ?? "",
    },
  });
};
