export type Contacts = ContactItem[];

interface ContactItem {
  readonly icon: string;
  readonly link: string;
  readonly text: string;
  readonly newTab?: boolean;
}
