import { Component } from '@angular/core';
import { User } from '../core/models/user.model';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent {
  user : User | null = null

  ngOnInit(){
    this.user = history.state.user
  }
}
