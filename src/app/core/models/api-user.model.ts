export interface ApiUser {
    id: number,
    firstName: string,
    lastName: string,
    email: string,
    company: Company,
    image: string,
    address : Address
}

export interface Company {
    name: string
}

export interface Address {
    address: string,
    city: string,
    state: string,
    postalCode: string
}