import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

export interface Model {
    title: string;
    description: string;
    image: string;
}

@Component({
    selector: 'app-shard',
    templateUrl: './shard.component.html',
    styleUrls: ['./shard.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShardComponent {

    @Input() model!: Model;

    @Output('inputChanged') inputChanged$ = new EventEmitter<number>();

    constructor() {

    }
}
