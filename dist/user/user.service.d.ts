import { User } from './user.entity';
import { MailerService } from '@nest-modules/mailer';
import { SignUpDto } from '../auth/auth.docs';
import { IResetPassword } from 'src/interfaces/user.interface';
export declare class UserService {
    private readonly USER_REPOSITORY;
    private readonly mailerService;
    constructor(USER_REPOSITORY: typeof User, mailerService: MailerService);
    getAllUsers: () => Promise<User[]>;
    createNewUser: (data: SignUpDto) => Promise<User>;
    findByEmail: (email: string) => Promise<User>;
    resetToken: (email: string) => string;
    forgotPassword(email: string): Promise<IResetPassword>;
    updateResetToken: (token: string, email: string) => Promise<IResetPassword>;
    resetPassword(password: string, resetToken: string): Promise<IResetPassword>;
}
