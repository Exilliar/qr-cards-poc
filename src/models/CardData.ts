export interface Stat {
  id: number;
  name: string;
  value: string | number;
}

export interface CardData {
  id: number;
  title: string;
  stats: Stat[];
  imgurl: string;
}
