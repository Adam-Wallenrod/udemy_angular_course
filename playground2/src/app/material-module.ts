import {NgModule} from '@angular/core';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import {
  MatCheckboxModule, MatStepperModule,
} from '@angular/material';

@NgModule({

  exports: [
    MatCheckboxModule,
    DragDropModule,
    ScrollingModule,
    CdkTableModule,
    CdkTreeModule,
    MatStepperModule
  ]
})
export class DemoMaterialModule {}
