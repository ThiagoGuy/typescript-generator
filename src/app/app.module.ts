import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { EnumToArrayPipe } from './pipe/enumToArray.pipe';
import { UtilService } from './service/utils.service';

@NgModule({
  declarations: [
    AppComponent,
    EnumToArrayPipe
  ],
  imports: [
    BrowserModule, 
    FormsModule
  ],
  providers: [UtilService],
  bootstrap: [AppComponent]
})
export class AppModule { }
