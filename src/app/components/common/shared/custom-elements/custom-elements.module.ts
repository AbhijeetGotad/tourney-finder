import { CustomModalComponent } from './custom-modal/custom-modal.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './spinner/spinner.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { NumericCodeComponent } from './numeric-code/numeric-code.component';
import { TooltipModule } from './custom-tooltip/tooltip.module';
import { MoveInViewportModule } from './move-in-viewport/move-in-viewport.module';
import { ToastComponent } from './custom-toast/toast/toast.component';
import { CustomMenuBlockComponent } from './custom-menu-block/custom-menu-block.component';
import { CustomSearchComponent } from './custom-search/custom-search.component';
import { CustomAccordionComponent } from './custom-accordion/custom-accordion.component';

@NgModule({
    declarations: [
        SpinnerComponent,
        CustomModalComponent,
        DropdownComponent,
        NumericCodeComponent,
        ToastComponent,
        CustomMenuBlockComponent,
        CustomSearchComponent,
        CustomAccordionComponent, 
    ],
    imports: [CommonModule, TooltipModule, MoveInViewportModule],
    exports: [
        SpinnerComponent,
        CustomModalComponent,
        DropdownComponent,
        NumericCodeComponent,
        TooltipModule,
        MoveInViewportModule,
        CustomMenuBlockComponent,
        CustomSearchComponent,
        CustomAccordionComponent
    ],
})
export class CustomElementsModule {}
