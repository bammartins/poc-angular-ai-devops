import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ProductService } from './product.service';

describe('ProductService', () => {
  let service: ProductService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(ProductService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should get products', () => {
    const mockProducts = [{ id: 1, name: 'Product 1', price: 100, stock: 10, imageUrl: 'img.jpg' }];
    
    service.getProducts().subscribe(products => {
      expect(products.length).toBe(1);
    });

    const req = httpMock.expectOne('https://api.example.com/products');
    req.flush(mockProducts);
  });

});