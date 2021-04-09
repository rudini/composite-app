import { createAction, props } from '@ngrx/store';
import { Model } from '../shard.component';

export const loadShardData = createAction(
    '[Source] load shard data',
    props<{
        payload: number;
    }>()
);

export const loadShardDataSuccessfull = createAction(
    '[Source] load shard data successfull',
    props<{ payload: Model }>()
);

export const loadShardDataFailed = createAction('[Source] load shard data failed', props<{ payload: string }>());
