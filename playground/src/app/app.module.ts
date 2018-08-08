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
import { TestChartComponent } from './test-chart/test-chart.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { CustomChartComponent } from './custom-chart/custom-chart.component';


const appRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'memory-a' },
  { path: 'memory-a', component: MemoryAComponent },
  { path: 'memory-b', component: MemoryBComponent },
  { path: 'memory-c', component: MemoryCComponent },
  { path: 'charts', component: TestChartComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    CockpitComponent,
    MemoryAComponent,
    MemoryBComponent,
    MemoryCComponent,
    TestChartComponent,
    CustomChartComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot( appRoutes),
    BrowserAnimationsModule,
    NgxChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
