export type Data = {
  _id: object;
  title: string;
  name: string;
};
type Item = {
  title: string;
  name: string;
  detail: string;
};
export interface DetailOwnProps {
  item: Item[];
  button: (state: boolean) => void;
}
