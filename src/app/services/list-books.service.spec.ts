import { TestBed, inject } from '@angular/core/testing';

import { ListBooksService } from './list-books.service';

describe('ListBooksService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListBooksService]
    });
  });

  it('should be created', inject([ListBooksService], (service: ListBooksService) => {
    expect(service).toBeTruthy();
  }));
});
