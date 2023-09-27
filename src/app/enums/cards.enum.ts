export enum Suit {
  Spade = 'spades',
  Heart = 'hearts',
  Diamond = 'diamonds',
  Club = 'clubs',
}

export enum Rank {
  Ace = '14',
  King = '13',
  Queen = '12',
  Jack = '11',
  Ten = '10',
  Nine = '9',
  Eight = '8',
  Seven = '7',
  Six = '6',
  Five = '5',
  Four = '4',
  Three = '3',
  Two = '2',
}

export enum PokerHandHierarchy {
  HighCard = 0,
  Pair = 1,
  TwoPair = 2,
  ThreeOfAKind = 3,
  Straight = 4,
  Flush = 5,
  FullHouse = 6,
  FourOfAKind = 7,
  StraightFlush = 8,
  RoyalFlush = 9,
}

export const CardsPerPlayer = 5;
