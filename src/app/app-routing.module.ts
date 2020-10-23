import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";


const routes: Routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "login", loadChildren: "./login/login.module#LoginModule"},
    { path: "register", loadChildren: "./register/register.module#RegisterModule"},
    { path: "akun", loadChildren: "./akun/akun.module#AkunModule"},
    { path: "home", loadChildren: "./home/home.module#HomeModule"},
    { path: "transaksi", loadChildren: "./transaksi/transaksi.module#TransaksiModule"},
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
