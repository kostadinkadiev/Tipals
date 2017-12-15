export class User {
    id: number;
    email: string;
    password: string;
    birthdate: Date;
    followUsersId: Array<number>;
}