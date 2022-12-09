import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchService } from './services/search.service';
import { SharedModule } from './shared/shared.module';
import { SearchComponent } from './components/search/search.component';
import { IndexComponent } from './components/index/index.component';
import { ResultCardComponent } from './components/result-card/result-card.component';
import { ResultDetailsComponent } from './components/result-details/result-details.component';

@NgModule({
  declarations: [AppComponent, SearchComponent, IndexComponent, ResultCardComponent, ResultDetailsComponent],
  imports: [AppRoutingModule, SharedModule],
  providers: [SearchService],
  bootstrap: [AppComponent],
})
export class AppModule {}
