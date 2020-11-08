import { Component, OnInit, ɵConsole } from '@angular/core';
import { User } from '../user-class/user';
import { UserService } from '../user-service/user.service';
import { RepositoryService } from '../repo-service/repository.service';
import { Repository } from '../repo-class/repository';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  user: User;
  repos = [];

  constructor(private userService: UserService, private repoService: RepositoryService) {  }

  ngOnInit(): void {
    this.userService.getUser("bella-amandine");
    this.user = this.userService.user;
    this.repoService.getRepos("bella-amandine");
    this.repos = this.repoService.repositories;
  }

}
