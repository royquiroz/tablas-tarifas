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
import { LoadingComponent } from "./components/shared/loading/loading.component";
import { UdisComponent } from "./components/udis/udis.component";
import { UdisIdComponent } from "./components/udis-id/udis-id.component";
import { RecargosComponent } from "./components/recargos/recargos.component";
import { RecargosIdComponent } from "./components/recargos-id/recargos-id.component";
import { CancelComponent } from "./components/buttons/cancel/cancel.component";
import { AdvanceComponent } from "./components/buttons/advance/advance.component";
import { LinkComponent } from "./components/buttons/link/link.component";
import { EditComponent } from "./components/buttons/edit/edit.component";
import { LinksComponent } from "./components/labels/links/links.component";
import { CancelsComponent } from "./components/labels/cancels/cancels.component";
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    InpcComponent,
    LoginComponent,
    NavbarComponent,
    InpcIdComponent,
    LoadingComponent,
    UdisComponent,
    CancelComponent,
    AdvanceComponent,
    LinkComponent,
    LinksComponent,
    CancelsComponent,
    EditComponent,
    UdisIdComponent,
    RecargosComponent,
    RecargosIdComponent,
    HomeComponent,
    RegisterComponent
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
