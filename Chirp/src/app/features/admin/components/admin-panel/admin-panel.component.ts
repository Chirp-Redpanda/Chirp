import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/core/models/user';
import { AuthService } from 'src/app/core/services/auth.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.sass']
})
export class AdminPanelComponent implements OnInit {

  selectedIndex: number | undefined;
  usersList: User[] = [];
  selectedUser: User | undefined;

  constructor(private users: UserService, private auth: AuthService) { }

  ngOnInit(): void {
    this.users.getAllData().subscribe((res) => {
      this.usersList = [...res];
    });
  }

  onAddNew(){
    console.log('gonna add new');
  }

  onSelectUser(index: number){
    this.selectedIndex = index;
    this.selectedUser = this.usersList[index];
  }

  onDeleteUser(index: number){
    // TODO: find a way to change this deprecated line
    event?.stopPropagation();
    console.log(`gonna delete #${this.usersList[index]._id}`);
  }
}
