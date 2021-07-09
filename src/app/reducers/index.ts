import { ActionReducerMap, MetaReducer } from '@ngrx/store';

import * as fromPart from '../part/state/part.reducer';
import { environment } from '../../environments/environment';

export interface State {}

export const reducers: ActionReducerMap<State> = {
  [fromPart.partFeatureKey]: fromPart.reducer, // Use the
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];
