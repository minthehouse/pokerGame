import { Injectable } from '@angular/core';
import { Action, State, StateContext } from '@ngxs/store';
import { SetNumberOfPlayers } from './config.action';

export class ConfigStateModel {
  public number_of_players: number | null = null;
}

@State<ConfigStateModel>({
  name: 'config',
})
@Injectable()
export class ConfigState {
  @Action(SetNumberOfPlayers)
  setNumberOfPlayers(
    { getState, setState }: StateContext<ConfigStateModel>,
    { payload }: SetNumberOfPlayers
  ) {
    const state = getState();
    setState({ ...state, number_of_players: payload });
  }
}
