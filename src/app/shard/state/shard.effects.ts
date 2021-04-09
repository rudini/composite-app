import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { ShardService } from '../services/shard.service';
import {
    loadShardData,
    loadShardDataFailed,
    loadShardDataSuccessfull,
} from './shard.actions';

@Injectable()
export class ShardEffects {
    constructor(
        private actions$: Actions,
        private shardService: ShardService
    ) {}

    loadShardData$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(loadShardData),
            mergeMap(({ payload }) =>
                this.shardService.loadShardData(payload).pipe(
                    map((result) =>
                        loadShardDataSuccessfull({ payload: result })
                    ),
                    catchError((err: Error) =>
                        of(loadShardDataFailed({ payload: err.message }))
                    )
                )
            )
        );
    });
}
