import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { ApiUser } from '../models/api-user.model';
import { UserAdapter } from '../adapters/user.adapter';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private url = "https://dummyjson.com/users"

  constructor() { }

  async getUsers() : Promise<User[]> {
    try {
      const res = await fetch(this.url)
      if(!res.ok)
        throw new Error("Error al realizar la petición")

      const data: {users : ApiUser[]} = await res.json()

      return data.users.map(UserAdapter.adapt)
    } catch (error) {
      throw new Error("Error al cargar la información")
    }
  }
}
