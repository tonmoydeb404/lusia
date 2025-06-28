import { Badge } from "@/components/ui/badge";
import { TCMSStackItem } from "@/types/cms/stack";
import Image from "next/image";

type Props = {
  data: TCMSStackItem;
};

const StackItemCard = (props: Props) => {
  const { data } = props;
  return (
    <article key={data.id} className="flex items-start p-3 gap-x-4 rounded-xl">
      <div className="shrink-0 size-8 md:size-10 inline-flex items-center justify-center bg-accent rounded-md">
        <Image
          src={data.logo.url}
          alt={data.logo?.alt || data.title}
          width={20}
          height={20}
          className="md:!size-7"
        />
      </div>
      <section>
        <div className="flex items-center gap-2 mb-1">
          <h3 className="text-base font-bold">{data.title}</h3>{" "}
          {data.level ? (
            <Badge
              variant={"secondary"}
              className="text-[10px] font-light tracking-wider"
            >
              {data.level}
            </Badge>
          ) : null}
        </div>
        <p className="text-sm text-muted-foreground">{data.description}</p>
      </section>
    </article>
  );
};

export default StackItemCard;
