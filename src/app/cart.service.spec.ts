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
