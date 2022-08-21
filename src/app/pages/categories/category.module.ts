import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DropdownMenusModule, WidgetsModule } from '../../_metronic/partials';
import { CategoryComponent } from './category.component';
import { InlineSVGModule } from 'ng-inline-svg-2';
import { NgApexchartsModule } from 'ng-apexcharts';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CategoryComponent],
  imports: [
    CommonModule,
    DropdownMenusModule,
    InlineSVGModule,
    NgApexchartsModule,
    NgbDropdownModule,
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: CategoryComponent,
      },
    ]),
    WidgetsModule,
    FormsModule
  ],
})
export class CategoryModule {}
