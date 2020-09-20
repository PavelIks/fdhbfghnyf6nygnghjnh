import { NgModule }             from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';
import { FormsModule }          from '@angular/forms';
import { AppComponent }        from './app.component';
import { App1Component }        from './app1.component';
import { App2Component }        from './app2.component';
@NgModule
({
    imports: [BrowserModule, FormsModule],
    declarations: [AppComponent, App1Component, App2Component],
    bootstrap: [AppComponent]
})
export class AppModule { }