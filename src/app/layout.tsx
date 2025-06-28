import { metaSeoToMetadata } from "@/helpers/metadata";
import AppLayout from "@/layout";
import { fetchPage } from "@/services/cms/page";
import { fetchProfile } from "@/services/cms/profile";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Geist, Geist_Mono } from "next/font/google";
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

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased pb-20`}
      >
        <ThemeProvider attribute="class" defaultTheme="system">
          <AppLayout>{children}</AppLayout>
        </ThemeProvider>
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
