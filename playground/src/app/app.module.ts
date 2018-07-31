import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { CockpitComponent } from './cockpit/cockpit.component';
import { MemoryAComponent } from './memory-a/memory-a.component';
import { MemoryBComponent } from './memory-b/memory-b.component';
import { MemoryCComponent } from './memory-c/memory-c.component';


const appRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'memory-a' },
  { path: 'memory-a', component: MemoryAComponent },
  { path: 'memory-b', component: MemoryBComponent },
  { path: 'memory-c', component: MemoryCComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    CockpitComponent,
    MemoryAComponent,
    MemoryBComponent,
    MemoryCComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot( appRoutes),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
