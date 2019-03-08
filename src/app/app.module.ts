import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { MDBBootstrapModule } from "angular-bootstrap-md";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "./material";

import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";

//Componentes
import { AppComponent } from "./app.component";
import { InpcComponent } from "./components/inpc/inpc.component";

@NgModule({
  declarations: [AppComponent, InpcComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
