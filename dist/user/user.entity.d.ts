import { Model } from 'sequelize-typescript';
export declare class User extends Model<User> {
    firstName: string;
    lastName: string;
    email: string;
    static hashPassword(user: User): void;
    password: string;
    resetToken: string;
    role: string;
    creationDate: Date;
}
