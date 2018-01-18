import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'inventory-app',
  template: `
  <div class="inventory-app">
  <products-list
    [productList]="products"
    (onProductSelected)="productWasSelected($event)">
  </products-list>
  </div>
  `
})

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'products-list',
  template: `
  <div class="ui items">
    <product-row
      *ngFor="let myProduct of productList"
      [product]="myProduct"
      (click)='clicked(myProduct)'
      [class.selected]="isSelected(myProduct)">
    </product-row>
  </div>
  `
})

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'product-row',
  // tslint:disable-next-line:use-input-property-decorator
  inputs: ['product'],
  // tslint:disable-next-line:use-host-property-decorator
  host: {'class': 'item'},
  template: `
  <product-image [product]="product"></product-image>
  <div class="content">
    <div class="header">{{ product.name }}</div>
    <div class="meta">
      <div class="product-sku">SKU #{{ product.sku }}</div>
    </div>
    <div class="description">
      <product-department [product]="product"></product-department>
    </div>
  </div>
  <price-display [price]="product.price"></price-display>
  `
})

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'product-image',
  // tslint:disable-next-line:use-host-property-decorator
  host: {class: 'ui small image'},
  // tslint:disable-next-line:use-input-property-decorator
  inputs: ['product'],
  template: `
  <img class="product-image" [src]="product.imageUrl">
  `
})

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'product-department',
  // tslint:disable-next-line:use-input-property-decorator
  inputs: ['product'],
  template: `
  <div class="product-department">
    <span *ngFor="let name of product.department; let i=index">
      <a href="#">{{ name }}</a>
      <span>{{i < (product.department.length-1) ? '>' : ''}}</span>
    </span>
  </div>
  `
})


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'price-display',
  // tslint:disable-next-line:use-input-property-decorator
  inputs: ['price'],
  template: `
  <div class="price-display">\${{ price }}</div>
  `
})


export class AppComponent {
  products: Product[];

  constructor() {
    this.products = [
      new Product(
        'MYSHOES',
        'Black Running Shoes',
        '/resources/images/products/black-shoes.jpg',
        ['Men', 'Shoes', 'Running Shoes'],
        109.99),
      new Product(
        'NEATOJACKET',
        'Blue Jacket',
        '/resources/images/products/blue-jacket.jpg',
        ['Women', 'Apparel', 'Jackets & Vests'],
        238.99),
      new Product(
        'NICEHAT',
        'A Nice Black Hat',
        '/resources/images/products/black-hat.jpg',
        ['Men', 'Accessories', 'Hats'],
        29.99)
    ];
  }
}

export class Product {
  constructor(
    public sku: string,
    public name: string,
    public imageUrl: string,
    public department: string[],
    public price: number
  ) {
  }
}

export class ProductsList {
  @Input() productList: Product[];
  onProductSelected: EventEmitter<Product>;
  private currentProduct: Product;

  constructor() {
    this.onProductSelected = new EventEmitter();
  }

  clicked(product: Product): void {
    this.currentProduct = product;
    this.onProductSelected.emit(product);
  }

  isSelected(product: Product): boolean {
    if (!product || !this.currentProduct) {
      return false;
    }
    return product.sku === this.currentProduct.sku;
  }

}

export class ProductRow {
  product: Product;
}

export class ProductImage {
  product: Product;
}

export class ProductDepartment {
  product: Product;
}
class PriceDisplay {
  price: number;
}
