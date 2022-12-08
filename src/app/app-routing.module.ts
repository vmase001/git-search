import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SearchComponent} from "./search/search.component";
import {IndexComponent} from "./index/index.component";

const routes:Routes = [
    { path: '', component: IndexComponent},
    {path: 'search', component: IndexComponent},
    {path: 'search/:query', component: SearchComponent}
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
