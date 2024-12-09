import { Component } from '@angular/core';
import { HeaderComponent } from "../../shared/components/header/header.component";
import { FooterComponent } from "../../shared/components/footer/footer.component";
import { LandingPageComponent } from '../../public/components/landing-page/landing-page.component';
import { ExploreComponent } from "../../public/components/explore/explore.component";
import { PlanComponent } from "../../public/components/plan/plan.component";
import { ApplyComponent } from "../../public/components/apply/apply.component";
import { BlogsComponent } from "../../public/components/blogs/blogs.component";
import { ContactusComponent } from "../../public/components/contactus/contactus.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-homelayout',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent, LandingPageComponent, FooterComponent, ExploreComponent, PlanComponent, ApplyComponent, BlogsComponent, ContactusComponent],
  templateUrl: './homelayout.component.html',
  styleUrl: './homelayout.component.scss'
})
export class HomelayoutComponent {

}
