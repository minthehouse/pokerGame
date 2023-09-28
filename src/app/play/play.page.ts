import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Select } from '@ngxs/store';
import { CardService } from '../services/card.service';
import { CommonModule } from '@angular/common';
import { CardsPerPlayer } from '../enums/cards.enum';
import { Card, PlayerHand } from '../interfaces/paylerHand.interfaces';
import { GameService } from '../services/game.service';

@Component({
  selector: 'app-play',
  templateUrl: 'play.page.html',
  styleUrls: ['play.page.scss'],
  standalone: true,
  imports: [IonicModule, ReactiveFormsModule, CommonModule],
})
export class PlayPage implements OnInit {
  @Select((state: any) => state.config) config$: any;
  public shuffledDeck: Card[] = [];
  public playerHands: PlayerHand[] = [];

  public form = new FormGroup({});
  constructor(
    private cardService: CardService,
    private cdr: ChangeDetectorRef,
    private gameService: GameService
  ) {}

  ngOnInit() {
    this.config$.subscribe((config: any) => {
      this.startGame(config.number_of_players);
    });
  }

  getCardImageSrc(card: Card): string {
    const sanitizedRank = card.rank.replace(/\s+/g, '_').toLowerCase();
    const sanitizedSuit = card.suit.toLowerCase();

    const fileName = `${sanitizedSuit}_${sanitizedRank}.svg`;

    return `assets/cards/${fileName}`;
  }

  startGame(number_of_players: number) {
    console.log('number_of_players', number_of_players);
    const shuffledDeck = this.cardService.shuffleDeck();

    this.distributeCardsOneByOne(shuffledDeck, number_of_players);
  }

  private distributeCardsOneByOne(deck: any[], number_of_players: number) {
    const distributeCard = (playerIndex: number) => {
      if (playerIndex <= number_of_players) {
        const hand = deck.splice(0, CardsPerPlayer);
        const playerHand = {
          player_id: playerIndex,
          cards: hand,
          score: 0,
          isWinner: false,
        };

        this.playerHands.push(playerHand);
        this.updateUI();

        setTimeout(() => {
          distributeCard(playerIndex + 1);
        }, 1000);
      } else {
        this.gameService.selectWinner(this.playerHands);
        console.log('playerHands at the end of game', this.playerHands);
      }
    };

    distributeCard(1);
  }

  private updateUI() {
    this.cdr.detectChanges();
  }
}
