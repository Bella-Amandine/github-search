import { Component, OnInit } from '@angular/core';
import { User } from '../user-class/user';
import { UserService } from '../user-service/user.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  user: User;

  constructor(private userService: UserService) {  }

  ngOnInit(): void {
    this.userService.getUser("bella-amandine");
    this.user = this.userService.user;
  }

}
