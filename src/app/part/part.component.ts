import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Model {
  title: string;
  description: string;
  image: string;
}

@Component({
  selector: 'app-part',
  templateUrl: './part.component.html',
  styleUrls: ['./part.component.css'],
})
export class PartComponent implements OnInit {
  @Input() model!: Model;

  @Output('inputChanged') inputChanged$: Observable<number>;

  public inputChange$ = new EventEmitter<Event>();

  constructor() {
    // A simple output, normally handled via @angular/forms
    this.inputChanged$ = this.inputChange$.pipe(
      map((e) => +(e.target as HTMLInputElement).value)
    );
  }

  ngOnInit(): void {}
}
