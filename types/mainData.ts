export interface Data {
  readonly workingHistory: ListSection;
  readonly education: ListSection;
  readonly courses: ListSection;
}

interface ListSection extends SectionTop {
  readonly list: List[];
}

export interface List {
  readonly date: string;
  readonly listTitle: string;
  readonly listItems?: string[];
}

interface SectionTop {
  readonly title: string;
  readonly boldTitle?: boolean;
  readonly icon: string;
}
