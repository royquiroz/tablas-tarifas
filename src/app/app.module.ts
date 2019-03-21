import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

//Componentes Angular Material y MDB Bootstrap Angular
import { MDBBootstrapModule } from "angular-bootstrap-md";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "./material";

import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";

//Componentes
import { AppComponent } from "./app.component";
import { InpcComponent } from "./components/inpc/inpc.component";
import { LoginComponent } from "./components/login/login.component";
import { NavbarComponent } from "./components/shared/navbar/navbar.component";
import { InpcIdComponent } from "./components/inpc-id/inpc-id.component";

@NgModule({
  declarations: [
    AppComponent,
    InpcComponent,
    LoginComponent,
    NavbarComponent,
    InpcIdComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
