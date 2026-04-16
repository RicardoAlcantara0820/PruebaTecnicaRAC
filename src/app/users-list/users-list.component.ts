import { Component } from '@angular/core';
import { User } from '../core/models/user.model';
import { UsersService } from '../core/services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent {
  users : User [] = []
  usersFiltered : User [] = []
  busqueda : string = ""

  loading = false
  error : string | null = null

  constructor(private usersService: UsersService, private router: Router) {}

  ngOnInit(){
    this.loadUsers()
  }

  async loadUsers() {
    this.loading = true
    this.error = null
    try {
      const users = await this.usersService.getUsers()

      this.users = users
      this.usersFiltered = users
    } catch (error) {
      this.error = "Error al mostrar información"
    }finally{
      this.loading=false
    }
  }

  selectUser(user: User) {
    this.router.navigate(['/user'],{state:{user}})
  }

  filterUsers(){
    this.usersFiltered = this.users.filter(user => (user.fulName).toLowerCase().includes(this.busqueda.toLowerCase()))
  }



}
