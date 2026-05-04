import { createContext, useState, ReactNode } from "react";

// Type definition for the filter context
// This defines the shape of the filter value.
type Filter = "all" | "active" | "completed";

// Type definition for the filter context
// This defines the shape of the context value, which includes the current filter and a function to set it.
type FilterContextType = {
    filter: Filter;
    setFilter: (filter: Filter) => void;
}



