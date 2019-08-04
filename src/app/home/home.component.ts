import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // constructor(private homeService: HomeService) { }
  constructor(private http: HttpClient) { }

  ngOnInit() {
    // this.getGithubUsers();
    this.getGithubUsersUsingFetchMethod();
  }

  getGithubUsers() {
    return this.http.get("https://api.github.com/users");
  }

  getGithubUsersUsingFetchMethod() {
    fetch("https://api.github.com/users")
    .then(function(response){
      console.log(response);
    });
  }

  tbHeaders = ["User name", "URL", "Date"];
  
  users = [{
    name: "Jim",
    url: "localhost:9000",
    date: new Date(),
    dob: "21 Aug 2010",
    course: "Angular"
  },
  {
    name: "Stokes",
    url: "stokes.com",
    date: new Date(),
    dob: "21 Aug 2011",
    course: "Node JS"
  },
  {
    name: "Anderson",
    url: "localhost:8000",
    date: new Date(),
    dob: "21 Aug 2012",
    course: "MEAN stack"
  }];

  user = {
    name: null,
    url: null,
    dob: null,
    course: null,
    date: null
  };

  loadAllData(user){
    this.user = user;
  }

  closeSideBar(){
    this.user = {
      name: null,
      url: null,
      dob: null,
      course: null,
      date: null
    };
  }
  

}
