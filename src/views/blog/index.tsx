import envConfig from "@/common/env-config";
import PostCard from "@/components/cards/post-card";
import HeaderSection from "@/components/sections/header-section";
import RichTextSection from "@/components/sections/rich-text-section";
import { Button } from "@/components/ui/button";
import { TCMSPage } from "@/types/cms/page";
import { THNPost } from "@/types/hashnode/post.type";
import Link from "next/link";

type Props = {
  pageData: TCMSPage;
  postsData: THNPost[];
};

const BlogView = (props: Props) => {
  const { pageData, postsData } = props;
  return (
    <>
      <HeaderSection title={pageData.title} description={pageData.description}>
        <section className="mt-4">
          <Button asChild>
            <Link href={`https://${envConfig.HASHNODE.URL}`} target="_blank">
              Visit Blog
            </Link>
          </Button>
        </section>
      </HeaderSection>

      <section className="container mb-16 space-y-12">
        {postsData.map((item) => (
          <PostCard key={item.slug} data={item} />
        ))}
      </section>

      <RichTextSection htmlString={pageData?.content?.html ?? null} />
    </>
  );
};

export default BlogView;
