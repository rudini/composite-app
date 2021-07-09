import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';

import { PartService } from '../service/part.service';

import {
  loadPartData,
  loadPartDataFailed,
  loadPartDataSuccessfull,
} from './part.actions';

@Injectable()
export class PartEffects {
  constructor(private actions$: Actions, private partService: PartService) {}

  // A simple structure to load and save data in the store
  loadParts$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadPartData),
      mergeMap(({ payload }) =>
        this.partService.loadPartData(payload).pipe(
          map((result) => loadPartDataSuccessfull({ payload: result })),
          catchError((err: Error) =>
            of(loadPartDataFailed({ payload: err.message }))
          )
        )
      )
    );
  });
}
