import PostCard from "@/components/cards/post-card";
import { Button } from "@/components/ui/button";
import { LucideCode } from "lucide-react";

export default function BlogPage() {
  return (
    <>
      <div className="container grid grid-cols-5 gap-4">
        <div className="col-span-3">
          <PostCard />
        </div>
        <div className="col-span-2 flex flex-col gap-4">
          <PostCard variant="compact" />
          <PostCard variant="compact" />
        </div>
      </div>
      <div className="container grid grid-cols-2 gap-4 mt-40">
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </div>

      <div className="container mt-40">
        <h2 className="text-3xl font-bold text-center mb-10">Article Tags</h2>

        <div className="flex items-center justify-center flex-wrap gap-2 max-w-lg mx-auto">
          {[
            "Coding",
            "Developer",
            "Journey",
            "Javascript",
            "React JS",
            "HTML",
            "TailwindCSS",
          ].map((item) => (
            <Button key={item} variant={"outline"}>
              <LucideCode /> {item}
            </Button>
          ))}
        </div>
      </div>
    </>
  );
}
