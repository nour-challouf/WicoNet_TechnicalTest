import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ProductService} from "../../services/product.service";

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit{
  product: any = {
    name: '',
    price: 0,
    category: ''
  };

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.productService.getProductById(id).subscribe(
      (data) => (this.product = data),
      (error) => console.error('Error', error)
    );
  }

  updateProduct(): void {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.productService.updateProduit(id, this.product).subscribe(
      () => this.router.navigate(['/products']),
      (error) => console.error('Error', error)
    );
  }
}
