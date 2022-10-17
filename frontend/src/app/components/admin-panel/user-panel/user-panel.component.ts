import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.css']
})
export class UserPanelComponent implements OnInit {

  constructor(private userService: UserService,
    private toastrService: ToastrService
  ) { }

  users: User[] = [];

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.userService.getAll().subscribe({
      next: (response) => {
        this.users = response.data
      }
    })
  }

  deleteUser(user: User) {
    this.userService.delete(user).subscribe(response => {
      this.toastrService.error("User deleted.");
      this.getAll();
    })
  }
}
