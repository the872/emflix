import { TestBed } from '@angular/core/testing';
import { BroadcasterService } from './broadcaster.service';

let service: BroadcasterService;

beforeEach(() => {
  TestBed.configureTestingModule({ providers: [BroadcasterService] });
});

it('should create', () => {
  service = TestBed.inject(BroadcasterService);
  // @ts-ignore
  expect(service).toBeTruthy();
});
