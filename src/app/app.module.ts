import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { IndexComponent } from './index/index.component';
import { SearchService } from './search.service';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent, SearchComponent, IndexComponent],
  imports: [AppRoutingModule, SharedModule],
  providers: [SearchService],
  bootstrap: [AppComponent],
})
export class AppModule {}
