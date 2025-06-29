import { getIcon } from "@/common/icons";
import Link from "next/link";
import { CommandItem } from "../ui/command";
import { SearchItem } from "./types";

type Props = {
  data: SearchItem;
  handleSelect: (value: SearchItem) => void;
};

const SearchBarItem = (props: Props) => {
  const { data, handleSelect } = props;

  const Icon = getIcon(data.type);

  return (
    <CommandItem
      onSelect={() => handleSelect(data)}
      className="flex items-center gap-3 cursor-pointer"
      asChild
    >
      <Link href={data.href} target={data.newTab ? "_blank" : undefined}>
        <Icon />
        <div className="flex-1 min-w-0">
          <h3 className="font-medium truncate">{data.title}</h3>
          {data.description && (
            <p className="text-sm text-muted-foreground line-clamp-1">
              {data.description}
            </p>
          )}
        </div>
      </Link>
    </CommandItem>
  );
};

export default SearchBarItem;
