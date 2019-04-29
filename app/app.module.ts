import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PlistComponent } from './Person/plist.component';
import { PerService } from './pservice.service';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
,PlistComponent  ],
  imports: [
    BrowserModule
  ],
  providers: [PerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
