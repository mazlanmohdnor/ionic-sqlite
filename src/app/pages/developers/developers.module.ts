import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { DatabaseService } from 'src/app/services/database.service';

import { DevelopersPage } from './developers.page';

const routes: Routes = [
  {
    path: '',
    component: DevelopersPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DevelopersPage],
  providers: [
      DatabaseService
  ]
})
export class DevelopersPageModule {}
