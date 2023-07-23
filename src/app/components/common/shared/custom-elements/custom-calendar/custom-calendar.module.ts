import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoveInViewportModule } from '../move-in-viewport/move-in-viewport.module';
import { CalendarViewComponent } from './calendar-view/calendar-view.component';
import { DateViewComponent } from './calendar-view/date-view/date-view.component';
import { MonthViewComponent } from './calendar-view/month-view/month-view.component';
import { YearViewComponent } from './calendar-view/year-view/year-view.component';

@NgModule({
    declarations: [
        CalendarViewComponent,
        DateViewComponent,
        MonthViewComponent,
        YearViewComponent,
    ],
    imports: [CommonModule, MoveInViewportModule],
    exports: [CalendarViewComponent],
})
export class CustomCalendarModule {}
