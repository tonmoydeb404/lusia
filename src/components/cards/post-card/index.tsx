import { THNPost } from "@/types/hashnode/db/post.type";
import Link from "next/link";

type Props = {
  data: THNPost;
};

const PostCard = (props: Props) => {
  const { data } = props;

  return (
    <article key={data.slug}>
      <div className="flex flex-col sm:flex-row sm:items-center gap-x-2 gap-y-0.5 mb-2">
        <h4 className="text-base font-medium">
          <Link href={data.url} target="_blank" className="hover:underline">
            {data.title}
          </Link>
        </h4>
        {/* <h5 className="text-muted-foreground">{item.company}</h5> */}
        <div className="flex-1 border-b border-dashed mx-2 max-sm:hidden" />
        <span className="text-sm text-muted-foreground">
          {new Date(data.publishedAt).toLocaleDateString()}
        </span>
      </div>
      <p className="text-sm text-muted-foreground line-clamp-2">{data.brief}</p>
    </article>
  );
};

export default PostCard;
