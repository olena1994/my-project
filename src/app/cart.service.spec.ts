// import { HttpClient, HttpErrorResponse } from '@angular/common/http';
// import { CartService } from './cart.service';
// import { Phone } from './models/phone';
//
// let httpClientSpy: jasmine.SpyObj<HttpClient>;
// let cartService: CartService;
//
// beforeEach(() => {
//   httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
//   cartService = new CartService(httpClientSpy);
// });
//
// it('should return expected carts (HttpClient called once)', (done: DoneFn) => {
//   const expectedHeroes: Phone[] =
//     [
//       { id: '1', age: 1, snippet: 'dfb', imageUrl: 'drfgsb', name: 'zdrvs', price: 34 },
//       { id: '2', age: 3, snippet: 'dfbfb', imageUrl: 'drfgxfbsb', name: 'zdrxfgbvs', price: 334 },
//     ];
//
//   httpClientSpy.get.and.returnValue(asyncData(expectedHeroes));
//
//   cartService.getAll().subscribe({
//     next: carts => {
//       expect(carts)
//         .withContext('expected heroes')
//         .toEqual(expectedHeroes);
//       done();
//     },
//     error: done.fail
//   });
//   expect(httpClientSpy.get.calls.count())
//     .withContext('one call')
//     .toBe(1);
// });
//
// it('should return an error when the server returns a 404', (done: DoneFn) => {
//   const errorResponse = new HttpErrorResponse({
//     error: 'test 404 error',
//     status: 404, statusText: 'Not Found'
//   });
//
//   httpClientSpy.get.and.returnValue(asyncError(errorResponse));
//
//   cartService.getAll().subscribe({
//     next: carts => done.fail('expected an error, not heroes'),
//     error: error  => {
//       expect(error.message).toContain('test 404 error');
//       done();
//     }
//   });
// });

import { CartService } from './cart.service';
import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { environment } from '../environments/environment';

describe('CartService', () => {

  beforeEach( () => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CartService]
    });
  })

  it('should get oll phone', inject([CartService, HttpTestingController], (cartService: CartService, backend: HttpTestingController) => {

    let mockPhones = [
      {
        id: '2',
        age: 4,
        snippet: 'dfxv',
        imageUrl: 'dfxv',
        name: 'dfxv',
        price: 347,
      },
      {
        id: '3',
        age: 32,
        snippet: 'dfxv',
        imageUrl: 'dfxv',
        name: 'dfxv',
        price: 34,
      }
    ]
    cartService.getAll().subscribe(Phone => {
      return expect(Phone).toEqual(mockPhones);
    });

    backend.expectOne({
      method: 'GET',
      url: `${environment.apiURL}/products.json`
    }).flush(mockPhones)
  }))

  it('should get phone details by id', inject([CartService, HttpTestingController], (cartService: CartService, backend: HttpTestingController) => {

    let mockPhoneDetails = {
      additionalFeatures: 'kjbknj',
      android: 'xdfb',
      battery: 'xdfb',
      camera: 'xdfb',
      connectivity: 'xdfb',
      description: 'xdfb',
      display: 'xdfb',
      hardware: 'xdfb',
      id: 'xdfb',
      images: ['xdfb', 'xdfb'],
      name: 'xdfb',
      sizeAndWeight: 'xdfb',
      storage: 'xdfb',
      price: 12,
    }
    cartService.getById('1').subscribe(PhoneDetails => {
      expect(PhoneDetails).toEqual(mockPhoneDetails);
    });

    backend.expectOne({
      method: 'GET',
      url: `${environment.apiURL}/products/1.json`
    }).flush(mockPhoneDetails)
  }))
})
