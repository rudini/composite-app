import {
    ActionReducerMap,
    createFeatureSelector,
    createSelector,
    MetaReducer,
} from '@ngrx/store';

import { environment } from '../../environments/environment';
import * as fromShard from '../shard/state/shard.reducer';

export interface AppState {
    [fromShard.shardFeatureKey]: fromShard.ShardState;
}

export const reducers: ActionReducerMap<AppState> = {
    [fromShard.shardFeatureKey]: fromShard.reducer,
};

export const appFeatureSelector = createFeatureSelector<AppState>('app');
export const shardFeatureSelector = createSelector(
    appFeatureSelector,
    (state) => state[fromShard.shardFeatureKey]
);

export const metaReducers: MetaReducer<AppState>[] = !environment.production
    ? []
    : [];

export const selectShardLoading = createSelector(
    shardFeatureSelector,
    fromShard.selectLoading
);
export const selectShardError = createSelector(
    shardFeatureSelector,
    fromShard.selectError
);
export const selectShardModel = createSelector(
    shardFeatureSelector,
    fromShard.selectModel
);
