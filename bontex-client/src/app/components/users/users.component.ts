import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})

export class UsersComponent {
  constructor(private router :Router, private activatedRoute:ActivatedRoute){

  }

  navigateToProfile(id: string){
    this.router.navigate(['./' + id], {relativeTo: this.activatedRoute})
  }
}
