import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptHttpClientModule } from 'nativescript-angular/http-client';
import { HomeComponent } from "./Home.component"; // Import all components that will be used in the lazy loaded module
import { HomeRoutingModule } from "./Home.routing"; // import the routing module

@NgModule({
    schemas: [NO_ERRORS_SCHEMA],
    imports: [
        NativeScriptCommonModule,
        HomeRoutingModule,
        NativeScriptHttpClientModule
    ],
    declarations: [HomeComponent], // declare all components that will be used within the module
    providers: [ ] // provide all services that will be used within the module
})
export class HomeModule { }