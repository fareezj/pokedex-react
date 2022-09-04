export interface PokeListRes {
  count: number;
  next: string;
  previous: string;
  results: PokeListResults[];
}

export interface PokeListResults {
  name: string;
  url: string;
}
