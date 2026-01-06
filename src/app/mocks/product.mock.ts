import { Product } from '../models/product.model';

export const MOCK_PRODUCTS: Product[] = [
  { id: 1, name: 'Laptop', price: 1200, stock: 5, imageUrl: 'laptop.jpg', category: 'electronics' },
  { id: 2, name: 'Mouse', price: 25, stock: 50, imageUrl: 'mouse.jpg', category: 'electronics' },
  { id: 3, name: 'Keyboard', price: 75, stock: 0, imageUrl: 'keyboard.jpg', category: 'electronics' }
];