import { Component, OnInit } from '@angular/core';
import { ChangePasswordWindowComponent } from '../../components/change-password-window/change-password-window.component';
import { ThemeService } from 'src/app/shared/services/theme.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { DialogControlService } from 'src/app/shared/services/dialog-control.service';

@Component({
  selector: 'app-settings-page',
  templateUrl: './settings-page.component.html',
  styleUrls: ['./settings-page.component.sass']
})
export class SettingsPageComponent implements OnInit {

  isDark = false;
  
  private _isLogin: boolean = false;

  constructor(    
    private themeService: ThemeService,
    private router: Router,
    private auth: AuthService,
    private dialogService: DialogControlService,
  ) { }

  ngOnInit(): void {
    this.isDark = this.themeService.getCurrentTheme() === 'lara-dark-indigo';
    this.auth.loginStatus.subscribe(update => {
      this._isLogin = update;
    })
  }

  onToggleTheme() {
    if (this.isDark) {
      this.themeService.setTheme("lara-dark-indigo");
    } else {
      this.themeService.setTheme("lara-light-indigo");
    }
  }

  onClickPassword() {
    if (this._isLogin) {
      this.dialogService.openPopUp(ChangePasswordWindowComponent);
    }
  }

  onClickAdmin() {
    this.router.navigate(['admin']);
  }

  onLogOut() {
    localStorage.setItem("userName", '');
    localStorage.setItem("userRole", '');
    this.auth.changeLoginStatus(false);
    alert('See you later');
  }
}
