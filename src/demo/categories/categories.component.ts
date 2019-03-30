import { Component, OnInit } from '@angular/core';
import { TreeviewItem, TreeviewConfig } from '../../lib';
import { BookService } from './categories.service';

@Component({
    selector: 'Categories',
    templateUrl: './categories.component.html',
    providers: [
        BookService
    ]
})
export class CategoriesComponent implements OnInit {
    dropdownEnabled = true;
    items: TreeviewItem[];
    values: number[];
    config = TreeviewConfig.create({
        hasAllCheckBox: true,
        hasFilter: true,
        hasCollapseExpand: true,
        decoupleChildFromParent: false,
        maxHeight: 400
    });

    constructor(
        private service: BookService
    ) { }

    ngOnInit() {
        this.items = this.service.getBooks();
    }

    onFilterChange(value: string) {
        console.log('filter:', value);
    }
}
