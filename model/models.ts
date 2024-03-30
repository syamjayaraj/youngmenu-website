export interface Header {
  title: string;
  description: string;
}
export interface SearchStore {
  title: string;
  description: string;
  searchInputPlaceholder: string;
}

export interface HomePage {}

export interface SuggestionItem {
  attributes: {
    name: string;
    slug: string;
  };
}
