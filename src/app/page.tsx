import PostCard from "@/components/cards/post-card";

export default function Home() {
  return (
    <>
      <div className="container grid grid-cols-5 gap-5 mt-20">
        <div className="col-span-3">
          <PostCard />
        </div>
        <div className="col-span-2 flex flex-col gap-5">
          <PostCard variant="compact" />
          <PostCard variant="compact" />
        </div>
      </div>
    </>
  );
}
