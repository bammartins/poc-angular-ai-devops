import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CartComponent } from './cart.component';

describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CartComponent]
    });
    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
  });

  it('should calculate total', () => {
    component.cartItems = [
      { id: 1, name: 'Product 1', price: 100, stock: 10, imageUrl: 'img.jpg' }
    ];
    expect(component.total).toBe(100);
  });
});