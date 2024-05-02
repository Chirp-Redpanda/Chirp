import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.sass']
})
export class UserInfoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  selectedButton = 'Posts';
  buttonColors = {
    black: 'black',
    grey: '#D3D3D3'
  };

  user = {
    name: 'Felix',
    gender: 'Male',
    birth: new Date("1997-11-06"),
    email: "zixinzhang0519@gmail.com"
  }


  getAge(birth: Date): number {
    const today = new Date();
    const birthDate = new Date(birth);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }

  selectButton(button: string): void {
    this.selectedButton = button;
  }

  onEditButtonClicked() {
    this.router.navigate(['profile-edit']);
  }

}
