export type MainData = MainSection[];

export type MainSection = {
  readonly title: string;
  readonly boldListTitle?: boolean;
  readonly icon: string;
} & (
  | {
      readonly list: MainSectionListArray;
      text?: never;
    }
  | {
      list?: never;
      readonly text: string;
    }
);

export type MainSectionListArray = MainSectionList[];

interface MainSectionList {
  readonly date: string;
  readonly listTitle: string;
  readonly listItems?: string[];
}
