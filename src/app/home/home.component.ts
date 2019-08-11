import { Component, OnInit } from '@angular/core';
// import { HomeService } from './home.service';
import { HttpClient } from '@angular/common/http';

interface Products {
  id: number,
  name: string,
  displayName: string
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  tbHeaders = [] as any;
  users = [] as any;
  usersDisplay = [] as any;
  constructor(private http: HttpClient) { }
  
  ngOnInit() {
    getDataByName();
    
    // this.getGithubUsersUsingAngular()
    // .subscribe((response: Array<any>)=>{
    //   this.users = response;
    //   this.usersDisplay = response;
    //   this.tbHeaders = this.getHeaders(response[0])
    // });
  }

  getGithubUsersUsingAngular() {
    return this.http.get("https://api.github.com/users");
  }

  query:string;

  findUser(query){
    console.log(query);
    
    this.usersDisplay = this.users.filter(function(el){
      return (new RegExp(query)).test(el.login);
    })
  }

  selectedProduct: Products;

  products = [
    { "id": 1, "name": "one", "displayName": "One here" },
    { "id": 2, "name": "two", "displayName": "Two Here" },
  ]

  public onProductChanged(event): void {
    console.log(this.products.find((product: Products) => product.id == event.target.value))
    this.selectedProduct = this.products.find((product: Products) => product.id == event.target.value);
  }

  getHeaders(obj){
    var headers = [];
    for(let key in obj){
      headers.push(key)
    }

    return headers;
  }

  loadAllData(user){
    // this.user = user;
  }

  closeSideBar(){
    // this.user = {
    //   name: null,
    //   url: null,
    //   dob: null,
    //   course: null,
    //   date: null
    // };
  }
  

}


function getDataByName(){

  var name = "Jim";

  var users = [{
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
  },
  {
    name: "Jim",
    url: "localhost:8000",
    date: new Date(),
    dob: "21 Aug 2012",
    course: "MEAN stack"
  }];

  var filteredUsers = users.filter(function(el){
    return el.name == name
  })

  console.log(filteredUsers);
  console.log(users);
}
