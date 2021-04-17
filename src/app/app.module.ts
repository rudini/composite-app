import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { ActionReducerMap, StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { ShardModule } from './shard/shard.module';
import { ShardEffects } from './shard/state/shard.effects';
import {
    reducers,
    metaReducers,
    selectShardLoading,
    selectShardModel,
    AppState,
} from './state/app.reducers';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        StoreModule.forRoot({} as ActionReducerMap<AppState>,  { metaReducers }),
        !environment.production ? StoreDevtoolsModule.instrument() : [],
        EffectsModule.forRoot([ShardEffects]),
        StoreModule.forFeature('app', reducers),
        ShardModule.forRoot({ selectShardLoading, selectShardModel }),
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
