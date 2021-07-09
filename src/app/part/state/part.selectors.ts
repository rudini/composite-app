import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromPart from './part.reducer';

export const selectPartState = createFeatureSelector<fromPart.State>(
  fromPart.partFeatureKey
);
