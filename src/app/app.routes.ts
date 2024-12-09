import { Routes } from '@angular/router';
import { HomelayoutComponent } from './layout/homelayout/homelayout.component';
import { AuthlayoutComponent } from './layout/authlayout/authlayout.component';
import { Component } from '@angular/core';
import { LandingPageComponent } from './public/components/landing-page/landing-page.component';
import { PageNotFoundComponent } from './public/components/page-not-found/page-not-found.component';
import { PlanComponent } from './public/components/plan/plan.component';
import { ApplyComponent } from './public/components/apply/apply.component';
import { ExploreComponent } from './public/components/explore/explore.component';
import { SupportComponent } from './public/components/support/support.component';
import { ContactusComponent } from './public/components/contactus/contactus.component';
import { LoginComponent } from './public/auth/login/login.component';
import { SignupComponent } from './public/auth/signup/signup.component';


export const routes: Routes = [
    {
        path: '',
        component:HomelayoutComponent,
        children: [
            {
                path: '',
                component: LandingPageComponent
            },
            {
                path: 'explore',
                component: ExploreComponent,
            },
            {
                path: 'plan',
                component: PlanComponent
            },
            {
                path: 'apply',
                component: ApplyComponent
            },
            {
                path: 'support',
                component: SupportComponent
            },
            {
                path: 'contactus',
                component: ContactusComponent
            },
        ]
    },
            
            {
                path: '',
                component: AuthlayoutComponent,
                children: [
                  { path: 'login', component: LoginComponent },
                  { path: 'signup', component: SignupComponent }
                ]
              },
            
            {
                path: '**',
                component: PageNotFoundComponent
            },
];
