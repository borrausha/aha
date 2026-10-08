import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LatestreleaseComponent } from './navigatingcomponent/latestrelease/latestrelease.component';
import { MollywoodmodeComponent } from './navigatingcomponent/mollywoodmode/mollywoodmode.component';
import { AhaoriginalsComponent } from './navigatingcomponent/ahaoriginals/ahaoriginals.component';
import { CelebratingloveComponent } from './navigatingcomponent/celebratinglove/celebratinglove.component';
import { WatchforfreeComponent } from './navigatingcomponent/watchforfree/watchforfree.component';
import { TrendingnowComponent } from './navigatingcomponent/trendingnow/trendingnow.component';
import { NavbarComponent } from './commoncomponent/navbar/navbar.component';
import { FooterComponent } from './commoncomponent/footer/footer.component';
import { WatchbylanguageComponent } from './navigatingcomponent/watchbylanguage/watchbylanguage.component';
import { InthespotlightComponent } from './navigatingcomponent/inthespotlight/inthespotlight.component';
import { HandpickedforyouComponent } from './navigatingcomponent/handpickedforyou/handpickedforyou.component';

@NgModule({
  declarations: [
    AppComponent,
    LatestreleaseComponent,
    MollywoodmodeComponent,
    AhaoriginalsComponent,
    CelebratingloveComponent,
    WatchforfreeComponent,
    TrendingnowComponent,
    NavbarComponent,
    FooterComponent,
    WatchbylanguageComponent,
    InthespotlightComponent,
    HandpickedforyouComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
