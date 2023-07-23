import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-custom-search',
    templateUrl: './custom-search.component.html',
    styleUrls: ['./custom-search.component.scss'],
})
export class CustomSearchComponent implements OnInit {
    @Input() label: string;
    @Input() IconSrc: string;
    @Input() disabled: boolean = false;
    @Input() iconSize: string = '';
    @Input() kind: string = '';

    constructor() {}

    ngOnInit(): void {}
}
