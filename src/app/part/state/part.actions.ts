import { createAction, props } from '@ngrx/store';

import { Model } from '../part.component';

export const loadPartData = createAction(
  '[Source] load part data',
  props<{
    payload: number;
  }>()
);

export const loadPartDataSuccessfull = createAction(
  '[Source] load part data successfull',
  props<{ payload: Model }>()
);

export const loadPartDataFailed = createAction(
  '[Source] load part data failed',
  props<{ payload: string }>()
);
