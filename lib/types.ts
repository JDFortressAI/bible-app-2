export interface BibleVerse {
  book: string;
  chapter: number;
  verse: number;
  text: string;
}

export interface BiblePassage {
  reference: string;
  version: string;
  verses: BibleVerse[];
  highlights: unknown[];
  fetched_at: string;
}

export interface DayReadings {
  format_version: string;
  date: string; // "MM/DD"
  cached_at: string;
  Family: BiblePassage[];
  Secret: BiblePassage[];
}
