import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms"; // <-- NgModel lives here
// HttpClient
import { HttpClientModule } from "@angular/common/http";

// ag-grid
import { AgGridModule } from "ag-grid-angular";
import { AppComponent } from "./app.component";
import {StorageServiceModule} from 'ngx-webstorage-service'
import { AppRoutingModule, routingComponent } from './app-routing.module';
import { PostsComponent } from './posts/posts.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  imports: [
    StorageServiceModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule, // <-- import the FormsModule before binding with [(ngModel)]
    HttpClientModule,
    AgGridModule.withComponents([])
  ],
  declarations: [AppComponent, PostsComponent, SidebarComponent, routingComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
