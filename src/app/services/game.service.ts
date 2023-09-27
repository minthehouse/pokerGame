import { Injectable } from '@angular/core';
import { Card, PlayerHand } from '../interfaces/paylerHand.interfaces';
import { PokerHandHierarchy, Rank } from '../enums/cards.enum';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  constructor() {}

  public selectWinner(playerHands: PlayerHand[]) {
    playerHands.forEach((playerHand: PlayerHand) => {
      playerHand.score = this.getScore(playerHand);
    });

    // Find the highest score
    const highestScore = Math.max(
      ...playerHands.map((playerHand) => playerHand.score!)
    );

    // Filter the players with the highest score
    const winners = playerHands.filter(
      (playerHand) => playerHand.score === highestScore
    );

    winners.forEach((winner) => {
      winner.isWinner = true;
    });

    return winners;
  }

  private getScore(playerHand: PlayerHand) {
    const sortedCards = this.sortCards(playerHand.cards);
    playerHand.cards = sortedCards;

    const isFlush = sortedCards.every(
      (card, index, arr) => card.suit === arr[0].suit
    );
    const isStraight = this.isConsecutive(sortedCards);

    if (isFlush && isStraight) {
      if (
        sortedCards[0].rank === Rank['Ten'] &&
        sortedCards[4].rank === Rank['Ace']
      ) {
        return PokerHandHierarchy['RoyalFlush'];
      }
      return PokerHandHierarchy['StraightFlush'];
    }

    const rankCounts = this.countRanks(sortedCards);

    if (rankCounts.includes(4)) {
      return PokerHandHierarchy['FourOfAKind'];
    }

    if (rankCounts.includes(3) && rankCounts.includes(2)) {
      return PokerHandHierarchy['FullHouse'];
    }

    if (isFlush) {
      return PokerHandHierarchy['Flush'];
    }

    if (isStraight) {
      return PokerHandHierarchy['Straight'];
    }

    if (rankCounts.includes(3)) {
      return PokerHandHierarchy['ThreeOfAKind'];
    }

    if (rankCounts.filter((count) => count === 2).length === 2) {
      return PokerHandHierarchy['TwoPair'];
    }

    if (rankCounts.includes(2)) {
      return PokerHandHierarchy['Pair'];
    }

    return PokerHandHierarchy['HighCard'];
  }

  public countRanks(cards: Card[]): number[] {
    const rankCounts: number[] = [];
    const rankToCount: Record<string, number> = {};

    for (const card of cards) {
      const rank = card.rank;
      rankToCount[rank] = (rankToCount[rank] || 0) + 1;
    }

    for (const rank in rankToCount) {
      rankCounts.push(rankToCount[rank]);
    }

    return rankCounts;
  }

  private isConsecutive(cards: Card[]): boolean {
    for (let i = 1; i < cards.length; i++) {
      if (Number(cards[i].rank) !== Number(cards[i - 1].rank) + 1) {
        return false;
      }
    }
    return true;
  }

  public sortCards(playerCards: Card[]) {
    const sortedCards = playerCards?.slice().sort((a, b) => {
      const rankComparison = Number(a.rank) - Number(b.rank);
      return rankComparison !== 0
        ? rankComparison
        : a.suit.localeCompare(b.suit);
    });

    return sortedCards;
  }
}
