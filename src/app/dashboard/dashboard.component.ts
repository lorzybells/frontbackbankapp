import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  user: any = null;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
  ) { }

  logout(){

    this.userService.logoutUser();

  }

  ngOnInit(): void {
    this.route.data
      .subscribe((data: { user: any }) => {
        this.user = data.user.data;
      });
  }
  
}