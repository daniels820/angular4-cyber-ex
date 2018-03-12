import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterializeModule } from 'angular2-materialize';
import { AppComponent } from './app.component';

import { DataService } from 'app/_services/data.service';
import { BlackBoxesComponent } from './black-boxes/black-boxes.component';
import { ProtocolsComponent } from './protocols/protocols.component';
import { TimePeriodComponent } from './time-period/time-period.component';
import { SummaryComponent } from './summary/summary.component';

@NgModule({
  declarations: [
    AppComponent,
    BlackBoxesComponent,
    ProtocolsComponent,
    TimePeriodComponent,
    SummaryComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
