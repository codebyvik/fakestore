import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { Checkbox } from "@/components/ui/checkbox";
import { CategoryType } from "@/types/products/category.type";

type Props = {
  categories: CategoryType[];
  selectedCategories: string[];
  handleCategorySelection: (name: string) => void;
};

const Filter = ({ categories, selectedCategories, handleCategorySelection }: Props) => {
  return (
    <Command>
      <CommandInput placeholder="search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Categories">
          {categories?.map((item) => (
            <CommandItem key={item.name} className="cursor-pointer">
              <div
                onClick={() => handleCategorySelection(item.name)}
                className="flex items-center space-x-2"
              >
                <Checkbox
                  checked={!!selectedCategories?.some((selectedItem) => selectedItem === item.name)}
                  className="!w-5 !h-5 rounded-sm cursor-pointer"
                  id={item.name}
                />
                <label
                  htmlFor={item.name}
                  className="cursor-pointer text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {item.name}
                </label>
              </div>
            </CommandItem>
          ))}
        </CommandGroup>
        <CommandSeparator />
      </CommandList>
    </Command>
  );
};

export default Filter;
