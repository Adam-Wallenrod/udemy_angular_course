import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';


import { CockpitComponent } from './cockpit/cockpit.component';
import { MemoryAComponent } from './memory-a/memory-a.component';
import { MemoryBComponent } from './memory-b/memory-b.component';
import { MemoryCComponent } from './memory-c/memory-c.component';
import { TestChartComponent } from './test-chart/test-chart.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { CustomChartComponent } from './custom-chart/custom-chart.component';
import { InfiniteScrollerDirective } from './infinite-scroller.directive';
//import { HackerNewsService } from './hacker-news.service';
import { NewsComponent } from './news/news.component';
import { MeanPipe } from './mean.pipe';
import { MeanPipeHostComponent } from './mean-pipe-host/mean-pipe-host.component';
import { MultilangComponent } from './multilang/multilang.component';
import { RestComponent } from './rest/rest.component';
import { RestUserComponent } from './rest/rest-user/rest-user.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ForbiddenValidatorDirective } from './forbidden-name.directive';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AssignmentComponent } from './assignment/assignment.component';
import { UnlessDirective } from './unless.directive';
import { FilterPipe } from './filter.pipe';
import { TagsComponent } from './tags/tags.component';


const appRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'memory-a' },
  { path: 'memory-a', component: MemoryAComponent },
  { path: 'memory-b', component: MemoryBComponent },
  { path: 'memory-c', component: MemoryCComponent },
  { path: 'charts', component: TestChartComponent },
  { path: 'news', component: NewsComponent },
  { path: 'users', component: RestComponent },
  { path: 'users-details/:id', component: RestUserComponent },
  { path: 'login-page', component: LoginPageComponent },
  { path: 'assignment', component: AssignmentComponent }

];

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, '../assets/localization/', '-lang.json');
}


@NgModule({
  declarations: [
    AppComponent,
    CockpitComponent,
    MemoryAComponent,
    MemoryBComponent,
    MemoryCComponent,
    TestChartComponent,
    CustomChartComponent,
    InfiniteScrollerDirective,
    NewsComponent,
    MeanPipe,
    MeanPipeHostComponent,
    MultilangComponent,
    RestComponent,
    RestUserComponent,
    LoginPageComponent,
    ForbiddenValidatorDirective,
    AssignmentComponent,
    UnlessDirective,
    FilterPipe,
    TagsComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    NgxChartsModule,
    HttpClientModule,
    AngularFontAwesomeModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    })
  ],
  //providers: [HackerNewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
