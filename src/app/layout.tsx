import { metaSeoToMetadata } from "@/helpers/metadata";
import {
  generatePersonSchema,
  generateWebSiteSchema,
} from "@/helpers/schema-org";
import AppLayout from "@/layout";
import { fetchPage } from "@/services/cms/page";
import { fetchProfile } from "@/services/cms/profile";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

type Props = {
  children: React.ReactNode;
};

export default async function RootLayout(props: Props) {
  const { children } = props;

  const profileRes = await fetchProfile();
  const pageRes = await fetchPage("home");

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased pb-20`}
      >
        <ThemeProvider attribute="class" defaultTheme="system">
          <AppLayout>{children}</AppLayout>
        </ThemeProvider>
        {profileRes && pageRes && (
          <Script
            id="schema-org-website"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(
                generateWebSiteSchema(profileRes, pageRes)
              ),
            }}
          />
        )}
        {profileRes && pageRes && (
          <Script
            id="schema-org-person"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(generatePersonSchema(profileRes, pageRes)),
            }}
          />
        )}
      </body>
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
