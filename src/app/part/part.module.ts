import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PartComponent } from './part.component';

@NgModule({
  declarations: [PartComponent],
  exports: [PartComponent],
  imports: [CommonModule],
})
export class PartModule {}
