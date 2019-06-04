import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { EstacionamientoModule } from './estacionamiento/estacionamiento.module';
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BrowserAnimationsModule, EstacionamientoModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
