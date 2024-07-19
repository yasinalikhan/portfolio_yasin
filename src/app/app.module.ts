import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//for routing = navigation in angular
import{RouterModule, Routes} from '@angular/router';  // generate the navigation menu of angular project


import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { SkillComponent } from './skill/skill.component';
import { ProjectComponent } from './project/project.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';


//generate the path
const mypage : Routes = [
                            {path:"home",component:HomeComponent,
                            children:[
                              {path:"aboutme",component:AboutComponent}
                            ]
                          },
                            {path:"aboutme",component:AboutComponent},
                            {path:"skill",component:SkillComponent},
                            {path:"project",component:ProjectComponent},
                            {path:"contact",component:ContactComponent},
                            {path:"", redirectTo:"/home", pathMatch:"full"}

                        ]

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    SkillComponent,
    ProjectComponent,
    ContactComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(mypage, {useHash:true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
