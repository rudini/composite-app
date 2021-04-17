import { InjectionToken, ModuleWithProviders, NgModule } from '@angular/core';
import { ModelResponse } from './services/shard.service';

import { ShardComponent } from './shard.component';
import { ShardState } from './state/shard.reducer';

export var FOR_ROOT_OPTIONS_TOKEN = new InjectionToken<ModuleOptions>(
    'forRoot() MyService configuration.'
);

export interface ModuleOptions {
    selectShardLoading: (state: ShardState) => boolean;
    selectShardModel: (state: ShardState) => ModelResponse | undefined;
}

@NgModule({
    declarations: [ShardComponent],
    exports: [ShardComponent],
})
export class ShardModule {
    static forRoot(options?: ModuleOptions): ModuleWithProviders<ShardModule> {
        return {
            ngModule: ShardModule,
            providers: [
                {
                    provide: FOR_ROOT_OPTIONS_TOKEN,
                    useValue: options,
                },
            ],
        };
    }
}
