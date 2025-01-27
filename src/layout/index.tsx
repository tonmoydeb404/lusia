import { ReactNode } from "react";
import Navigation from "./navigation";

type Props = {
  children: ReactNode;
};

const AppLayout = (props: Props) => {
  const { children } = props;
  return (
    <>
      <Navigation />
      {children}
    </>
  );
};

export default AppLayout;
