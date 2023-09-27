import { Injectable } from '@angular/core';
import { Suit, Rank, CardsPerPlayer } from '../enums/cards.enum';
import { Card, PlayerHand } from '../interfaces/paylerHand.interfaces';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  constructor() {}

  public shuffleDeck(): Card[] {
    const deck = this.createDeck();
    for (let i = deck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [deck[i], deck[j]] = [deck[j], deck[i]];
    }
    return deck;
  }

  private createDeck(): Card[] {
    const deck = [];
    const suits = Object.values(Suit);
    const ranks = Object.values(Rank);

    for (const suit of suits) {
      for (const rank of ranks) {
        deck.push({ suit, rank });
      }
    }

    return deck;
  }
}
