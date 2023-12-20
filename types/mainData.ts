export interface MainData {
  readonly workingHistory: MainListSection;
  readonly education: MainListSection;
  readonly courses: MainListSection;
}

export interface MainListSection extends MainSectionTop {
  readonly list: MainSectionList[];
}

interface MainSectionList {
  readonly date: string;
  readonly listTitle: string;
  readonly listItems?: string[];
}

interface MainSectionTop {
  readonly title: string;
  readonly boldTitle?: boolean;
  readonly icon: string;
}
