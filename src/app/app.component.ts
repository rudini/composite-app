import { Component } from '@angular/core';

import { ShardViewModel } from './shard/shard.viewmodel';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    providers: [ShardViewModel],
})
export class AppComponent {
    title = 'composite-app';

    constructor(public shardvm: ShardViewModel) {
    }
}
