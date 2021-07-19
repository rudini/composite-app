import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PartModule } from './part/part.module';
import { reducers, metaReducers } from './reducers';
import * as fromPart from './part/state/part.reducer';
import { PartEffects } from './part/state/part.effects';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
    }),
    EffectsModule.forRoot([PartEffects]),
    StoreModule.forFeature(fromPart.partFeatureKey, fromPart.reducer),
    PartModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
