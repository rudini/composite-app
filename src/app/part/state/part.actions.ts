import { Action } from '@ngrx/store';

export enum PartActionTypes {
  LoadParts = '[Part] Load Parts',
  
  
}

export class LoadParts implements Action {
  readonly type = PartActionTypes.LoadParts;
}


export type PartActions = LoadParts;
