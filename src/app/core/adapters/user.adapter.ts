import { ApiUser } from "../models/api-user.model";
import { User } from "../models/user.model";

export class UserAdapter {
    static adapt (apiUser: ApiUser) : User {
        return {
            id: apiUser.id,
            fulName: `${apiUser.firstName} ${apiUser.lastName}`,
            email: apiUser.email,
            image: apiUser.image,
            address: `${apiUser.address.address}, ${apiUser.address.city}, ${apiUser.address.state}`,
            companyName: apiUser.company.name
        }
    }
}