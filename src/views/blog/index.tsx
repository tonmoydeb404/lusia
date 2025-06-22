import PostCard from "@/components/cards/post-card";
import HeaderSection from "@/components/sections/header-section";
import RichTextSection from "@/components/sections/rich-text-section";
import { Button } from "@/components/ui/button";
import { TCMSPage } from "@/types/cms/db/page";
import { THNPost } from "@/types/hashnode/db/post.type";
import Link from "next/link";

type Props = {
  pageData: TCMSPage;
  postsData: THNPost[];
};

const BlogView = (props: Props) => {
  const { pageData, postsData } = props;
  return (
    <>
      <HeaderSection
        title={pageData.title}
        description={pageData.description}
      />

      <section className="container mb-16 space-y-8">
        {postsData.map((item) => (
          <PostCard key={item.slug} data={item} />
        ))}
      </section>

      {!!pageData?.content?.html && (
        <RichTextSection htmlString={pageData.content.html} />
      )}

      <section className="container mt-16">
        <Button asChild>
          <Link
            href={`https://${process.env.NEXT_PUBLIC_HASHNODE_URL}`}
            target="_blank"
          >
            Read More Articles
          </Link>
        </Button>
      </section>
    </>
  );
};

export default BlogView;
