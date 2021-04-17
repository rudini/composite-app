import { Inject, Injectable, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

import { Model } from './shard.component';
import { FOR_ROOT_OPTIONS_TOKEN, ModuleOptions } from './shard.module';
import { loadShardData } from './state/shard.actions';
import { ShardState } from './state/shard.reducer';

@Injectable()
export class ShardViewModel implements OnDestroy {
    shardLoading$: Observable<boolean>;
    shardModel$: Observable<Model>;

    constructor(
        private store: Store<ShardState>,
        @Inject(FOR_ROOT_OPTIONS_TOKEN) options: ModuleOptions
    ) {
        this.shardLoading$ = store.select(options.selectShardLoading);
        this.shardModel$ = store
            .select(options.selectShardModel)
            .pipe(filter((c) => !!c)) as Observable<Model>;

        store.dispatch(loadShardData({ payload: 200 }));
    }

    ngOnDestroy() {
        console.log('onDestroy from ViewModel');
    }

    inputChanged = (value: number) =>
        this.store.dispatch(loadShardData({ payload: value }));
}
