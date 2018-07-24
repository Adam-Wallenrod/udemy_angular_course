import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  appStatus = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('stable');
    },2000);
  });

   basicArray = ['ccc', 'ddd', 'zzz', 'bbb', 'aaa'];

  servers = [
    {
      instanceType: 'medium',
      name: 'Production',
      status: 'z_stable',
      started: new Date(15, 1, 2017)
    },
    {
      instanceType: 'large',
      name: 'User Database',
      status: 'b_stable',
      started: new Date(15, 1, 2017)
    },
    {
      instanceType: 'small',
      name: 'Development Server',
      status: 'a_offline',
      started: new Date(15, 1, 2017)
    },
    {
      instanceType: 'small',
      name: 'Testing Environment Server',
      status: 'p_stable',
      started: new Date(15, 1, 2017)
    }
  ];

  constructor() {
    console.log( this.simpleSortMethod(this.basicArray));
  }


  filteredStatus = '';
  getStatusClasses(server: {instanceType: string, name: string, status: string, started: Date}) {
    return {
      'list-group-item-success': server.status === 'stable',
      'list-group-item-warning': server.status === 'offline',
      'list-group-item-danger': server.status === 'critical'
    };
  }

  onAddServer() {
    this.servers.push({
      instanceType: 'small',
      name: 'My New Server',
      status: 'stable',
      started: new Date(15, 1, 2017)
    });
  }


  simpleSortMethod(value: any): any {
    return value.sort( (a, b) => {
      if ( a > b ) {
        return 1;
      } else {
        return -1;
      }
    } );
  }


}
