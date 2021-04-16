import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { ShardModule } from './shard/shard.module';
import { SELECT_SHARD_LOADING, SELECT_SHARD_MODEL } from './shard/shard.viewmodel';
import { ShardEffects } from './shard/state/shard.effects';
import * as fromShard from './shard/state/shard.reducer';
import {
    reducers,
    metaReducers,
    selectShardLoading,
    selectShardModel,
} from './state/app.reducers';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        StoreModule.forRoot(reducers, { metaReducers }),
        !environment.production ? StoreDevtoolsModule.instrument() : [],
        EffectsModule.forRoot([ShardEffects]),
        StoreModule.forFeature(fromShard.shardFeatureKey, fromShard.reducer),
        ShardModule,
    ],
    providers: [
        { provide: SELECT_SHARD_LOADING, useValue: selectShardLoading },
        { provide: SELECT_SHARD_MODEL, useValue: selectShardModel },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
