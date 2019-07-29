import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreDataService } from './store-data.service';
import { UniquePipe } from './unique.pipe';

@NgModule({
  declarations: [AppComponent, UniquePipe],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy, providers: [StoreDataService] }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
