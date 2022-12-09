import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import { ResultDetailsComponent } from './components/result-details/result-details.component';
import { SearchComponent } from './components/search/search.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'search', component: IndexComponent },
  {
    path: 'search/:query',
    component: SearchComponent,
  },
  {
    path: 'result/:id',
    component: ResultDetailsComponent,
  },
  { path: '**', redirectTo: 'search' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
