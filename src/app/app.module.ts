import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './state/app.reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { ShardComponent } from './shard/shard.component';
import { ShardEffects } from './shard/state/shard.effects';
import * as fromShard from './shard/state/shard.reducer';
import { ShardModule } from './shard/shard.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([ShardEffects]),
    StoreModule.forFeature(fromShard.shardFeatureKey, fromShard.reducer),
    ShardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
