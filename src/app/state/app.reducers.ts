import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';

import { environment } from '../../environments/environment';
import * as fromShard from '../shard/state/shard.reducer';
import { selectError, selectLoading, selectModel, ShardState } from '../shard/state/shard.reducer';


export interface State {

  [fromShard.shardFeatureKey]: fromShard.ShardState;
}

export const reducers: ActionReducerMap<State> = {

  [fromShard.shardFeatureKey]: fromShard.reducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

export const shardFeatureSelector = createFeatureSelector<ShardState>(fromShard.shardFeatureKey);
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


