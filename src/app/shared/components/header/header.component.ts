import { Component } from '@angular/core';
import { ContactusComponent } from '../../../public/components/contactus/contactus.component';
import { PlanComponent } from '../../../public/components/plan/plan.component';
import { ExploreComponent } from '../../../public/components/explore/explore.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ContactusComponent,PlanComponent,ExploreComponent,],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
