import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core.module';
import { SidenavBarComponent } from './components/common/sidenav-bar/sidenav-bar.component';
import { LandingPageComponent } from './module/landing-page/landing-page.component';
import { LoginPageComponent } from './components/core/misc/login-page/login-page.component';
import { SignUpPageComponent } from './components/core/misc/sign-up-page/sign-up-page.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginService } from './components/core/misc/login-page/login.service';
import { HrssInterceptor } from './core/interceptor/hrssInterceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoadingSpinnerService } from './components/common/shared/loading-spinner/loading-spinner.service';
import { LoadingSpinnerComponent } from './components/common/shared/loading-spinner/loading-spinner.component';
import { ValidationDirective } from './validation.directive';
import { LoginGuardService } from './core/services/loginGuard.service';
import { CustomToastSnackbarComponent } from './components/core/misc/custom-toast-snackbar/custom-toast-snackbar.component';
import { BreadcrumbCardComponent } from './components/common/shared/breadcrumb-card/breadcrumb-card.component';
import { NgIdleModule } from '@ng-idle/core';
import { MessageModalComponent } from './components/common/shared/message-modal/message-modal.component';
import { ConfirmationModalComponent } from './components/common/shared/confirmation-modal/confirmation-modal.component';
import { AttachDragDropComponent } from './components/common/shared/attach-drag-drop/attach-drag-drop.component';
import { ClickOutsideModule } from 'ng-click-outside';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import {
  OtelColExporterModule,
  CompositePropagatorModule,
} from '@jufab/opentelemetry-angular-interceptor';
import { HomepageRootComponent } from './module/homepage-root/homepage-root.component';
import { HomepageHeaderComponent } from './components/common/homepage-header/homepage-header.component';
import { SectionOneComponent } from './module/homepage-root/section-one/section-one.component';
import { SectionTwoComponent } from './module/homepage-root/section-two/section-two.component';
import { SectionThreeComponent } from './module/homepage-root/section-three/section-three.component';
import { SectionFiveComponent } from './module/homepage-root/section-five/section-five.component';
import { SectionSixComponent } from './module/homepage-root/section-six/section-six.component';
import { SectionSevenComponent } from './module/homepage-root/section-seven/section-seven.component';
import { HomeFooterComponent } from './components/common/home-footer/home-footer.component';
import { SectionFourComponent } from './module/homepage-root/section-four/section-four.component';
import { SignUpService } from './components/core/misc/sign-up-page/signUp.service';
import { UserHomeComponent } from './module/user-home/user-home.component';
import { CustomElementsModule } from './components/common/shared/custom-elements/custom-elements.module';
import { CompetitionTabComponent } from './module/competition-tab/competition-tab.component';
import { CompetitionListComponent } from './module/competition-tab/competition-list/competition-list.component';
import { AddCompetitionModelComponent } from './module/modals/add-competition-model/add-competition-model.component';
import { TurfTabComponent } from './module/turf-tab/turf-tab.component';
import { SettingsTabComponent } from './module/settings-tab/settings-tab.component';
import { MyListTabComponent } from './module/my-list-tab/my-list-tab.component';
import { AddTurfModalComponent } from './module/modals/add-turf-modal/add-turf-modal.component';

export const interceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: HrssInterceptor, multi: true },
];

@NgModule({
  declarations: [
    AppComponent,
    SidenavBarComponent,
    LandingPageComponent,
    LoginPageComponent,
    SignUpPageComponent,
    LoadingSpinnerComponent,
    ValidationDirective,
    CustomToastSnackbarComponent,
    BreadcrumbCardComponent,
    AttachDragDropComponent,
    MessageModalComponent,
    ConfirmationModalComponent,
    HomepageRootComponent,
    HomepageHeaderComponent,
    SectionOneComponent,
    SectionTwoComponent,
    SectionThreeComponent,
    SectionFiveComponent,
    SectionSixComponent,
    SectionSevenComponent,
    HomeFooterComponent,
    SectionFourComponent,
    UserHomeComponent,
    CompetitionTabComponent,
    CompetitionListComponent,
    AddCompetitionModelComponent,
    TurfTabComponent,
    SettingsTabComponent,
    MyListTabComponent,
    AddTurfModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    HttpClientModule,
    NgIdleModule.forRoot(),
    ClickOutsideModule,
    InfiniteScrollModule,
    OtelColExporterModule,
    CompositePropagatorModule,
    CustomElementsModule,
  ],
  providers: [
    LoginService,
    LoadingSpinnerService,
    LoginGuardService,
    interceptorProviders,
    SignUpService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
