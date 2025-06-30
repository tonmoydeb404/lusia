import HeaderSection from "@/components/sections/header-section";
import { Button } from "@/components/ui/button";
import paths from "@/router/paths";
import Link from "next/link";
import { LuBug, LuHouse } from "react-icons/lu";

type Props = {};

const NotFoundView = (props: Props) => {
  return (
    <div className="py-16">
      <div className="container mb-5">
        <LuBug size={45} />
      </div>
      <HeaderSection
        title="404 - Not Found"
        description="The page you've requested is not exist in the galaxy"
      >
        <Button className="mt-16" asChild>
          <Link href={paths.root}>
            Back to home <LuHouse />
          </Link>
        </Button>
      </HeaderSection>
    </div>
  );
};

export default NotFoundView;
