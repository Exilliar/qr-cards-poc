export interface Stat {
  id: number;
  name: string;
  value: string;
}

export interface CardData {
  id: number;
  title: string;
  stats: Stat[];
  imgurl: string;
}
