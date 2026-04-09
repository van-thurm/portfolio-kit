export interface Bookmark {
  title: string;
  url: string;
}

export interface FeaturedQuote {
  text: string;
  attribution: string;
}

export const featuredQuote: FeaturedQuote | null = null;
export const bookmarks: Bookmark[] = [];
