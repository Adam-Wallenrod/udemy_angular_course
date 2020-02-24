import { Injectable } from '@angular/core';
import {IResourceMethod, Resource, ResourceAction, ResourceHandler, ResourceParams} from '@ngx-resource/core';

@Injectable({
  providedIn: 'root'
})
@ResourceParams({
  // IResourceParams
  url: 'https://swapi.co/api',
  pathPrefix: '/people'
})
export class SwapiService extends Resource {

  constructor(restHandler: ResourceHandler) {
    super(restHandler);
  }

  @ResourceAction({
    path: '/{!id}'
  })
  getUser: IResourceMethod<{id: string}, any>;

}
