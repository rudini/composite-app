import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

import { Model } from './part/part.component';
import { loadPartData } from './part/state/part.actions';
import { selectPartLoading, selectPartModel } from './reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'composite-app';

  partLoading$: Observable<boolean>;
  partModel$: Observable<Model>;

  constructor(private store: Store) {
    this.partLoading$ = store.select(selectPartLoading);
    this.partModel$ = store
      .select(selectPartModel)
      .pipe(filter((c) => !!c)) as Observable<Model>;

    store.dispatch(loadPartData({ payload: 200 }));
  }

  inputChanged = (value: number) =>
    this.store.dispatch(loadPartData({ payload: value }));
}
