"use client";

import { useTheme } from "next-themes";
import GitHubCalendar from "react-github-calendar";

type Props = {};

const GithubActivity = (props: Props) => {
  const { theme } = useTheme();
  return (
    <GitHubCalendar
      username="tonmoydeb404"
      colorScheme={theme === "dark" ? "dark" : "light"}
      hideColorLegend
      year={new Date().getFullYear()}
      blockSize={6.7}
      hideMonthLabels
    />
  );
};

export default GithubActivity;
