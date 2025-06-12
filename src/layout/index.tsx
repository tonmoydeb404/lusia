import { ReactNode } from "react";
import Footer from "./footer";
import Navigation from "./navigation";

type Props = {
  children: ReactNode;
};

const AppLayout = (props: Props) => {
  const { children } = props;
  return (
    <>
      <Navigation />
      <main className="py-16">{children}</main>
      <Footer />
    </>
  );
};

export default AppLayout;
