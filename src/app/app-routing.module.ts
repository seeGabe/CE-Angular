import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CuContactComponent } from './cu-contact/cu-contact.component';
import { CuMainComponent } from './cu-main/cu-main.component';
import { CuMembersComponent } from './cu-members/cu-members.component';
import { CuStatsComponent } from './cu-stats/cu-stats.component';

const routes: Routes = [
  {
    path: '',
    component: CuMainComponent,
  },
  {
    path: 'contact',
    component: CuContactComponent,
  },
  {
    path: 'users',
    component: CuMembersComponent,
  },
  {
    path: 'stats',
    component: CuStatsComponent,
  },
  // otherwise redirect to home
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
