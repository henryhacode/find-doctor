import {Component, OnDestroy} from '@angular/core';
import { Subscription } from 'rxjs';
import {Router} from "@angular/router";
import {UserService} from "./login/user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  isLoggedIn: boolean = false;
  sub!: Subscription;
  username: string = '';
  DEFAULT_AVATAR_URL = '../assets/images/person-black-icon.png';
  avatarUrl = '';
  constructor(private userService: UserService, private router: Router) {
    this.sub = this.userService.userState$.subscribe(userState => {
      console.log(userState)
      if (userState.token) {
        this.isLoggedIn = true
        this.username = this.userService.getUserState()?.fullname as string;
        this.avatarUrl = this.userService.getUserState()?.avatarurl as string;
        console.log(this.avatarUrl);  
        if (!this.avatarUrl || this.avatarUrl.trim().length === 0) {
          this.avatarUrl = this.DEFAULT_AVATAR_URL;
        }
      } else {
        this.isLoggedIn = false;
      }
    })

    this.userService.refreshState();

    const userState = this.userService.getUserState();
    if (userState?.username) {
      if (userState?.role === 'PATIENT') {
        this.router.navigate(['/', 'patient']);
      } else {
        this.router.navigate(['/', 'doctor']);
      }
    } else {
      this.router.navigate(['/', 'login']);
    }
  }

  logout() {
    this.userService.logout();
    this.router.navigate(['/', 'login']);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
