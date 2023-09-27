export interface PlayerHand {
  player_id: number;
  score: number;
  cards: Card[];
  isWinner?: boolean;
}

export interface Card {
  suit: string;
  rank: string;
}
