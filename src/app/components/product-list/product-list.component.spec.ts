import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductListComponent } from './product-list.component';
import { ProductService } from '../../services/product.service';
import { of } from 'rxjs';
import { MOCK_PRODUCTS } from '../../mocks/product.mock';

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;
  let productService: jasmine.SpyObj<ProductService>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('ProductService', ['getProducts']);
    
    TestBed.configureTestingModule({
      declarations: [ProductListComponent],
      providers: [{ provide: ProductService, useValue: spy }]
    });

    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
    productService = TestBed.inject(ProductService) as jasmine.SpyObj<ProductService>;
  });

  it('should load products on init', () => {
    productService.getProducts.and.returnValue(of(MOCK_PRODUCTS));
    component.ngOnInit();
    expect(component.products.length).toBe(3);
  });
});