import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

//Components
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";
import { HomeComponent } from "./components/home/home.component";
import { InpcComponent } from "./components/inpc/inpc.component";
import { InpcIdComponent } from "./components/inpc-id/inpc-id.component";
import { UdisComponent } from "./components/udis/udis.component";
import { UdisIdComponent } from "./components/udis-id/udis-id.component";
import { RecargosComponent } from "./components/recargos/recargos.component";
import { RecargosIdComponent } from "./components/recargos-id/recargos-id.component";

//Guards
import { AuthGuard } from "./guards/auth.guard";
import { AlreadyGuard } from "./guards/already.guard";

const routes: Routes = [
  { path: "login", component: LoginComponent, canActivate: [AlreadyGuard] },
  {
    path: "register",
    component: RegisterComponent,
    canActivate: [AuthGuard]
  },
  { path: "home", component: HomeComponent, canActivate: [AuthGuard] },
  { path: "inpc", component: InpcComponent, canActivate: [AuthGuard] },
  { path: "inpc/:id", component: InpcIdComponent, canActivate: [AuthGuard] },
  { path: "udis", component: UdisComponent, canActivate: [AuthGuard] },
  { path: "udis/:id", component: UdisIdComponent, canActivate: [AuthGuard] },
  { path: "recargos", component: RecargosComponent, canActivate: [AuthGuard] },
  {
    path: "recargos/:id",
    component: RecargosIdComponent,
    canActivate: [AuthGuard]
  },
  { path: "**", pathMatch: "full", redirectTo: "home" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
