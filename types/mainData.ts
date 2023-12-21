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
      readonly text: string;
      list?: never;
    }
);

export type MainSectionListArray = MainSectionList[];

interface MainSectionList {
  readonly date: string;
  readonly listTitle: string;
  readonly listItems?: string[];
}
