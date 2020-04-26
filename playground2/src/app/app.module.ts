import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';
import { OrderByPipe } from './order-by.pipe';
import { TemplateTestComponent } from './template-test/template-test.component';
import {ResourceModule} from '@ngx-resource/handler-ngx-http';
import { HttpClientModule } from '@angular/common/http';
import { MyFormComponent } from './my-form/my-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import { DogComponent } from './dog/dog.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    OrderByPipe,
    TemplateTestComponent,
    MyFormComponent,
    DogComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ResourceModule.forRoot(),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
