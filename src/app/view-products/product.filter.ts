import { Injectable, Pipe, PipeTransform } from '@angular/core';
import { product } from 'src/entities/product';

//name - det name man skal bruge, for at kalde den her pipe
@Pipe({name: 'filterProducts'})
@Injectable()
export class FilterProduct implements PipeTransform {

    transform(products: product[], search: any): any {
        if(search === undefined) {
            return products;
        }

        search = search.toLowerCase();
        return products.filter(product => product.Name && product.Name.toLowerCase().includes(search) );
    }
}
