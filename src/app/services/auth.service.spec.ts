import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    localStorage.clear();
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(AuthService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should login successfully', () => {
    const mockUser = { id: 1, email: 'test@test.com', name: 'Test', role: 'user', token: 'abc123' };
    
    service.login('test@test.com', '123456').subscribe(user => {
      expect(user).toEqual(mockUser);
    });

    const req = httpMock.expectOne('https://api.example.com/auth/login');
    req.flush(mockUser);
  });
});