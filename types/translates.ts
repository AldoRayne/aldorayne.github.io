export interface Translates {
  readonly name: string;
  readonly post: string;
  readonly country: string;
  readonly age: string;
  readonly contactsTitle: string;
  readonly languagesTitle: string;
  readonly skillsTitle: string;
  readonly contentData: MainSection[];
  readonly skills: string[];
  readonly languages: Language[];
}

export type MainSection = {
  readonly title: string;
  readonly boldListTitle?: boolean;
  readonly icon: string;
} & (
  | {
      readonly list: MainSectionListArray;
      text?: never;
      portfolioList?: never;
    }
  | {
      readonly text: string;
      list?: never;
      portfolioList?: never;
    }
  | {
      readonly portfolioList: PortfolioListArray;
      list?: never;
      text?: never;
    }
);

export type MainSectionListArray = MainSectionList[];
export type PortfolioListArray = PortfolioLink[];

interface MainSectionList {
  readonly date: string;
  readonly listTitle: string;
  readonly listItems?: string[];
}

interface PortfolioLink {
  readonly title: string;
  readonly link: string;
  readonly image: string;
}

interface Language {
  language: string;
  level: string;
}
