import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';

import { RouterModule } from '@angular/router';
import { ContainerComponent } from './container/container.component';
import { AproposComponent } from './apropos/apropos.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { FormationsComponent } from './formations/formations.component';
import { InteretsComponent } from './interets/interets.component';
import { CertificationsComponent } from './certifications/certifications.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { CompetencesComponent } from './competences/competences.component'


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ContainerComponent,
    AproposComponent,
    ExperiencesComponent,
    FormationsComponent,
    InteretsComponent,
    CertificationsComponent,
    NotfoundComponent,
    CompetencesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path :'apropos',component:AproposComponent },
      { path :'experiences',component:ExperiencesComponent },
      { path :'formations',component:FormationsComponent },
      { path :'competences',component:CompetencesComponent },
      { path :'interet',component:InteretsComponent },
      { path :'certification',component:CertificationsComponent },
      { path :'notfound',component:NotfoundComponent },
      { path :'',redirectTo:'apropos' , pathMatch:'full' },
      { path :'**',redirectTo:'notfound' , pathMatch:'full' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
