import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { AuthGuard } from './auth.guard';

let guard: AuthGuard;

beforeEach(() => {
  TestBed.configureTestingModule({ providers: [AuthGuard], imports: [HttpClientTestingModule] });
});

it('should create', () => {
  guard = TestBed.inject(AuthGuard);
  // @ts-ignore
  expect(guard).toBeTruthy();
});
