import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Model } from './shard/shard.component';
import { selectShardLoading, selectShardModel } from './state/app.reducers';
import { filter } from 'rxjs/operators';
import { loadShardData } from './shard/state/shard.actions';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = 'composite-app';

    shardLoading$: Observable<boolean>;
    shardModel$: Observable<Model>;

    constructor(private store: Store) {
        this.shardLoading$ = store.select(selectShardLoading);
        this.shardModel$ = store.select(selectShardModel).pipe(filter(c => !!c)) as Observable<Model>;

        store.dispatch(loadShardData({ payload: 200 }));
    }


    inputChanged = (value: number) => this.store.dispatch(loadShardData({ payload: value }))
}
