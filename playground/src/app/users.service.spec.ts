// import { TestBed, inject } from '@angular/core/testing';
//
// import { UsersService } from './users.service';
//
// describe('UsersService', () => {
//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       providers: [UsersService]
//     });
//   });
//
//   it('should be created', inject([UsersService], (service: UsersService) => {
//     expect(service).toBeTruthy();
//   }));
// });

import { TestBed, async, inject } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import {  Response,
          ResponseOptions,
          XHRBackend} from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { UsersService } from './users.service';


describe('UsersService', () => {

  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [
        UsersService,
        { provide: XHRBackend, useClass: MockBackend },
      ]
    });
  });

  describe('getUsers()', () => {

    it('should return an Observable<Array<Users>>',
        inject([UsersService, XHRBackend], (usersService, mockBackend) => {

        const mockResponse = {
          data: [
            { id: 0, name: 'Users 0' },
            { id: 1, name: 'Users 1' },
            { id: 2, name: 'Users 2' },
            { id: 3, name: 'Users 3' },
          ]
        };

        mockBackend.connections.subscribe((connection) => {
          connection.mockRespond(new Response(new ResponseOptions({
            body: JSON.stringify(mockResponse)
          })));
        });

        usersService.getUsers().subscribe((users) => {
          console.log(users);
          expect(users.length).toBe(4);
          expect(users[0].name).toEqual('Users 0');
          expect(users[1].name).toEqual('Users 1');
          expect(users[2].name).toEqual('Users 2');
          expect(users[3].name).toEqual('Users 3');
        });

    }));
  });
});
