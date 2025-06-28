import LabelSection from "@/components/sections/label-section";
import { fetchPostPinned } from "@/services/hashnode/post";
import Link from "next/link";

type Props = {};

const PinnedArticle = async (props: Props) => {
  const pinnedPostRes = await fetchPostPinned();

  return (
    <LabelSection
      label="Pinned Article"
      className="min-h-full"
      wrapperClassname="p-4 grow"
    >
      {pinnedPostRes ? (
        <>
          <h3 className="font-bold mb-1.5 flex items-center gap-x-1 line-clamp-2">
            <Link
              href={pinnedPostRes.url}
              target="_blank"
              className="hover:underline decoration-wavy"
            >
              {pinnedPostRes.title}
            </Link>
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-4">
            {pinnedPostRes.brief}
          </p>
        </>
      ) : (
        <>
          <h3 className="font-bold mb-1.5 flex items-center gap-x-1">
            No pinned article yet
          </h3>
          <p className="text-sm text-muted-foreground">
            Once something insightful is ready, it’ll show up here. Stay
            curious!
          </p>
        </>
      )}
    </LabelSection>
  );
};

export default PinnedArticle;
