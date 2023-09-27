import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NavigateService } from '../services/navigate.service';
import { Store } from '@ngxs/store';
import { SetNumberOfPlayers } from 'state/config.action';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, ReactiveFormsModule],
})
export class HomePage {
  public form = new FormGroup({
    number_of_players: new FormControl(null, Validators.required),
  });
  constructor(public navigateService: NavigateService, private store: Store) {}

  submit(form: FormGroup) {
    console.log(form);

    if (form.status === 'VALID') {
      this.store.dispatch(new SetNumberOfPlayers(form.value.number_of_players));
      this.navigateService.navigate('/play');
    }
  }
}
