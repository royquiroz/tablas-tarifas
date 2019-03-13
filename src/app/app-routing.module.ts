import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

//Components
import { LoginComponent } from "./components/login/login.component";
import { InpcComponent } from "./components/inpc/inpc.component";
import { InpcIdComponent } from "./components/inpc-id/inpc-id.component";

//Guards
import { AuthGuard } from "./guards/auth.guard";
import { AlreadyGuard } from "./guards/already.guard";

const routes: Routes = [
  { path: "login", component: LoginComponent, canActivate: [AlreadyGuard] },
  { path: "inpc", component: InpcComponent, canActivate: [AuthGuard] },
  { path: "inpc/:id", component: InpcIdComponent, canActivate: [AuthGuard] },
  { path: "**", pathMatch: "full", redirectTo: "/inpc" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
