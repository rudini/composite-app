import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
} from '@ngrx/store';

import * as fromPart from '../part/state/part.reducer';
import { environment } from '../../environments/environment';

export interface State {
  [fromPart.partFeatureKey]: fromPart.PartState;
}

export const reducers: ActionReducerMap<State> = {
  [fromPart.partFeatureKey]: fromPart.reducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];

export const partFeatureSelector = createFeatureSelector<fromPart.PartState>(
  fromPart.partFeatureKey
);
export const selectPartLoading = createSelector(
  partFeatureSelector,
  fromPart.selectLoading
);
export const selectPartError = createSelector(
  partFeatureSelector,
  fromPart.selectError
);
export const selectPartModel = createSelector(
  partFeatureSelector,
  fromPart.selectModel
);
