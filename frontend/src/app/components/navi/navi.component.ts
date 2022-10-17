import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css']
})
export class NaviComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {

  }

  isLogged() {
    if (localStorage.getItem("token")) {
      return true;
    } else {
      return false;
    }
  }

  isAdmin() {
    if (this.authService.admin) {
      return true;
    }
    else {
      return false;
    }
  }

  logOut(){
    localStorage.clear();
  }
}
