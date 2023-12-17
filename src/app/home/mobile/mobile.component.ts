import { Component } from '@angular/core';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.scss']
})
export class MobileComponent {
  scrollToContact() {
    document.getElementById("contact")?.scrollIntoView({behavior: 'smooth'});
  }
}
