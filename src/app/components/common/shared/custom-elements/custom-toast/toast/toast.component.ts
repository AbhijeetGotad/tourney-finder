import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-toast',
    templateUrl: './toast.component.html',
    styleUrls: ['./toast.component.scss'],
})
export class ToastComponent implements OnInit {
    @Output() toastDestroy: EventEmitter<any> = new EventEmitter<any>();

    position: string = '';
    kind: string = '';
    title: string = '';
    description: string = '';

    kindIconMap: any = {
        default: 'assets/custom-elements-icons/notification-off.svg',
        info: 'assets/custom-elements-icons/info.svg',
        warning: 'assets/custom-elements-icons/warning.svg',
        error: 'assets/custom-elements-icons/error.svg',
        success: 'assets/custom-elements-icons/success.svg',
    };

    toastStyles: any = {};

    constructor() {}

    ngOnInit(): void {}
}
