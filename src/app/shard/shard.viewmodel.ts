import { Inject, Injectable, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

import { ModelResponse } from './services/shard.service';
import { Model } from './shard.component';
import { loadShardData } from './state/shard.actions';
import { ShardState } from './state/shard.reducer';

export const SELECT_SHARD_LOADING = 'selectShardLoading';
export const SELECT_SHARD_MODEL = 'selectShardModel';

@Injectable()
export class ShardViewModel implements OnDestroy {
    shardLoading$: Observable<boolean>;
    shardModel$: Observable<Model>;

    constructor(
        private store: Store<ShardState>,
        @Inject(SELECT_SHARD_LOADING) selectShardLoading: (state: ShardState) => boolean,
        @Inject(SELECT_SHARD_MODEL) selectShardModel: (state: ShardState) => ModelResponse | undefined
    ) {
        this.shardLoading$ = store.select(selectShardLoading);
        this.shardModel$ = store
            .select(selectShardModel)
            .pipe(filter((c) => !!c)) as Observable<Model>;

        store.dispatch(loadShardData({ payload: 200 }));
    }

    ngOnDestroy() {
        console.log('onDestroy from ViewModel');
    }

    inputChanged = (value: number) =>
        this.store.dispatch(loadShardData({ payload: value }));
}
