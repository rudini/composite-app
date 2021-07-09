import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { concatMap } from 'rxjs/operators';
import { Observable, EMPTY } from 'rxjs';
import { PartActionTypes, PartActions } from './part.actions';



@Injectable()
export class PartEffects {


  @Effect()
  loadParts$ = this.actions$.pipe(
    ofType(PartActionTypes.LoadParts),
    /** An EMPTY observable only emits completion. Replace with your own observable API request */
    concatMap(() => EMPTY as Observable<{ type: string }>)
  );


  constructor(private actions$: Actions<PartActions>) {}

}
