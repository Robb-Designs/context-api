import { createContext, useState, ReactNode } from "react";

// Type definition for the filter context
// This defines the shape of the filter value.
type Filter = "all" | "active" | "completed";

// Type definition for the filter context
// This defines the shape of the context value, which includes the current filter and a function to set it.
type FilterContextType = {
  filter: Filter;
  setFilter: (filter: Filter) => void;
};

// Type definition for the filter provider props
// This defines the shape of the props that the FilterProvider component will accept, which includes the children that will be wrapped by the provider.
type FilterProviderProps = {
  children: ReactNode;
};

export const FilterContext = createContext<FilterContextType | undefined>(
  undefined,
);

// FilterProvider component that will wrap the application and provide the filter context to its children.
// Its purpose is to manage the filter state and provide a function to update it.
export default function FilterProvider({ children }: FilterProviderProps) {
  const [filter, setFilter] = useState<Filter>("all");

  return (
    <FilterContext.Provider value={{ filter, setFilter }}>
      {children}
    </FilterContext.Provider>
  );
}
