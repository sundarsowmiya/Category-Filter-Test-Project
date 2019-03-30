import { Injectable } from '@angular/core';
import { TreeviewItem } from '../../lib';

export class BookService {
    getBooks(): TreeviewItem[] {
        const childrenCategory = new TreeviewItem({
            text: 'Brands and Organizations', value: 1, collapsed: false, children: [
                { text: 'Category-1', value: 'Category-1' },
                { text: 'Category-2', value: 'Category-2' },
                { text: 'Category-3', value: 'Category-3' },
                { text: 'Category-4', value: 'Category-4' },
                { text: 'Category-5', value: 'Category-5' },
                { text: 'Category-6', value: 'Category-6' },
                { text: 'Category-7', value: 'Category-7' },
                { text: 'Category-8', value: 'Category-8' }
            ]
        });
        const itCategory = new TreeviewItem({
            text: 'Media', value: 2, collapsed: true, children: [
                {
                    text: 'Media Programming Header', value: 'Media Programming Header', children: [{
                        text: 'Media Frontend parent', value: 'Media Frontend parent', children: [
                            { text: 'Media Frontend 1', value: 'Media Frontend 1' },
                            { text: 'Media Frontend 2', value: 'Media Frontend 2' },
                            { text: 'Media Frontend 3', value: 'Media Frontend 3' }
                        ]
                    }, {
                        text: 'Media Backend parent', value: 'Media Backend parent', children: [
                            { text: 'Media Backend 1', value: 'Media Backend 1' },
                            { text: 'Media Backend 2', value: 'Media Backend 2' },
                            { text: 'Media Backend 3', value: 'Media Backend 3' }
                        ]
                    }]
                }
              
            ]
        });
        const teenCategory = new TreeviewItem({
            text: 'Influencer', value: 3, collapsed: true, children: [
                { text: 'Influencer-1', value: 'Influencer-1' },
                { text: 'Influencer-2', value: 'Influencer-2' }
            ]
        });
        
        return [childrenCategory, itCategory, teenCategory];
    }
}
