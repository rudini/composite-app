import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

export interface ModelResponse {
  title: string;
  description: string;
  image: string;
}

@Injectable({ providedIn: 'root' })
export class PartService {
  loadPartData = (value: number) =>
    of({
      title: 'This is a title',
      description: 'This is a description',
      image: `http://placekitten.com/${value}/300`,
    }).pipe(delay(2000));
}
