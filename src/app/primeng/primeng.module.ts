import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartModule } from 'primeng/chart';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { CalendarModule } from 'primeng/calendar';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [
    CommonModule,
    ChartModule,
    TableModule,
    ToastModule,
    CalendarModule,
  ],
})
export class PrimengModule {}
