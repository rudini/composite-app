import {
    ActionReducerMap,
    createFeatureSelector,
    createSelector,
    MetaReducer,
} from '@ngrx/store';

import { environment } from '../../environments/environment';
import * as fromShard from '../shard/state/shard.reducer';
import {
    selectError,
    selectLoading,
    selectModel,
} from '../shard/state/shard.reducer';

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
    selectLoading
);
export const selectShardError = createSelector(
    shardFeatureSelector,
    selectError
);
export const selectShardModel = createSelector(
    shardFeatureSelector,
    selectModel
);
