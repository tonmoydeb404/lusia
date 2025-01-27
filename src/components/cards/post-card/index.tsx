import { cn } from "@/lib/utils";
import { LucideBook, LucideChartNoAxesCombined } from "lucide-react";
import Image from "next/image";

export type Variant = "default" | "compact";

type Props = {
  variant?: Variant;
};

const PostCard = (props: Props) => {
  const { variant = "default" } = props;

  return (
    <article>
      <div className="aspect-video relative border rounded-lg overflow-hidden">
        <Image
          alt="Post"
          src={
            "https://cdn.hashnode.com/res/hashnode/image/upload/v1737906448215/20864f37-2892-40c8-8dec-649357106b4c.webp?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp"
          }
          fill
        />
      </div>

      <div
        className={cn(
          "px-4 py-4",
          variant === "compact" ? "hidden" : undefined
        )}
      >
        <h3 className="text-2xl font-black mb-1">
          The Art of Adaptation in a Developer’s Life
        </h3>
        <p className="text-lg mb-4 text-muted-foreground">
          Find out how developers can keep up with changing technology and
          enhance their skills.
        </p>

        <div className="flex items-center gap-3">
          <div className="inline-flex items-center gap-1 text-sm">
            <LucideBook size={16} />
            <span>3 min read</span>
          </div>

          <div className="inline-flex items-center gap-1 text-sm">
            <LucideChartNoAxesCombined size={16} />
            <span>5 views</span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default PostCard;
