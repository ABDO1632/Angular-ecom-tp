import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/interface/User.interface';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  user:User|any;
  constructor(private router:Router) { }

  ngOnInit(): void {
    this.getLocalStorage();
    console.log(this.user);
  }
  goToShopCartPage(id:number){
    this.router.navigate(['/shopCart/'+id])
  }
  public checkLocalStorage(){
    var exist:boolean=false;
    if (localStorage.getItem("currentUser")) {
      exist=true;
    }
    else{
      exist=false;
    }
    return exist;
  }
  public getLocalStorage(){
    if(this.checkLocalStorage()){
      var u:string|any=localStorage.getItem("currentUser");
      this.user=JSON.parse(u);
    }
  }
  public logout(){
    localStorage.removeItem('currentUser');

  }
}
