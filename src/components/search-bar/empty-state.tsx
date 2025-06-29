import { LuSearch } from "react-icons/lu";
import { CommandEmpty } from "../ui/command";

type Props = {};

const EmptyState = (props: Props) => {
  return (
    <CommandEmpty>
      <div className="py-6 text-center">
        <LuSearch className="mx-auto h-6 w-6 mb-2 text-gray-300" />
        <p className="text-sm font-medium text-gray-900 mb-1">
          No results found
        </p>
        <p className="text-xs text-gray-500 mb-4">
          Try adjusting your search terms
        </p>
      </div>
    </CommandEmpty>
  );
};

export default EmptyState;
