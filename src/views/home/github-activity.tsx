"use client";

import LabelSection from "@/components/sections/label-section";
import { useTheme } from "next-themes";
import GitHubCalendar from "react-github-calendar";

type Props = {};

const GithubActivity = (props: Props) => {
  const { theme } = useTheme();
  return (
    <LabelSection label="Github Activity" wrapperClassname="p-4">
      <GitHubCalendar
        username={process.env.NEXT_PUBLIC_GITHUB_USERNAME!}
        colorScheme={theme === "light" ? "light" : "dark"}
        hideColorLegend
        blockSize={6.7}
        hideMonthLabels
      />
    </LabelSection>
  );
};

export default GithubActivity;
