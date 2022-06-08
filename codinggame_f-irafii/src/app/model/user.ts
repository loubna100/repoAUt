export class User {
    id!: number;
    email!: string;
    nom!: string;
    prenom!: string;
    password!: string;
    

}

export class LoginRequest {
    email!: string;
    password!: string;
}