import { createReducer, on } from '@ngrx/store';

import { ModelResponse } from '../service/part.service';

import {
  loadPartData,
  loadPartDataFailed,
  loadPartDataSuccessfull,
} from './part.actions';

export const partFeatureKey = 'part';

export interface PartState {
  loading: boolean;
  error?: string;
  model?: ModelResponse;
}

export const initialState: PartState = {
  loading: false,
};

// ##################
// This reducer needs to be registered outside the part module
// ##################
export const reducer = createReducer(
  initialState,
  on(loadPartData, (state) => ({
    ...state,
    loading: true,
  })),
  on(loadPartDataSuccessfull, (state, { payload }) => ({
    ...state,
    loading: false,
    model: payload,
  })),
  on(loadPartDataFailed, (state, { payload }) => ({
    ...state,
    loading: false,
    error: payload,
  }))
);

// Note that we do not create selectors here, only the projection functions
export const selectLoading = (state: PartState) => state.loading;
export const selectError = (state: PartState) => state.error;
export const selectModel = (state: PartState) => state.model;
