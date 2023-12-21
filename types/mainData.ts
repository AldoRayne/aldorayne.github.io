export type MainData = MainSection[];

export type MainSection = MainSectionTop &
  (
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

interface MainSectionTop {
  readonly title: string;
  readonly boldTitle?: boolean;
  readonly icon: string;
}
