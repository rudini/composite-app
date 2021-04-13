import { Action, createReducer, on } from '@ngrx/store';

import { ModelResponse } from '../services/shard.service';

import { loadShardData, loadShardDataFailed, loadShardDataSuccessfull } from './shard.actions';


export const shardFeatureKey = 'shard';

export interface ShardState {
    loading: boolean;
    error?: string;
    model?: ModelResponse
}

export const initialState: ShardState = {
    loading: false
};


export const reducer = createReducer(
  initialState,
    on(loadShardData, (state) => ({
        ...state,
        loading: true
    })),
    on(loadShardDataSuccessfull, (state, { payload }) => ({
        ...state,
        loading: false,
        model: payload
    })),
    on(loadShardDataFailed, (state, { payload }) => ({
        ...state,
        loading: false,
        error: payload
    }))
);

export const selectLoading = (state: ShardState) => state.loading;
export const selectError = (state: ShardState) => state.error;
export const selectModel = (state: ShardState) => state.model;
