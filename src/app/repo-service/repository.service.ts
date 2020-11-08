import { Injectable } from '@angular/core';
import { Repository } from '../repo-class/repository';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {

  repo: Repository;
  repositories = [];


  constructor(private http: HttpClient) {
    this.repo = new Repository("", "");
   }

   getRepos(username) {
     interface ApiResponse {
       name: string;
       description: string;
     }
     let promise = new Promise((resolve, reject) => {
      this.http.get<ApiResponse[]>(`https://api.github.com/users/${username}/repos?access_token=${environment.myGithubToken}`).toPromise().then(response => {

      for(let data of response) {
        this.repositories.push(new Repository(data.name, data.description));
      }
        resolve();
 
      }, error => {
        reject(error);
      })
     });

     return this.repositories;
   }
}
