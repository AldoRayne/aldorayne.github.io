export type MainData = MainSection[];

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
