import { ForgotPasswordDto, ResetPasswordDto } from './user.docs';
import { UserService } from './user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    findAll(): Promise<import("./user.entity").User[]>;
    forgotPassword(data: ForgotPasswordDto, res: any): void;
    resetPassword(data: ResetPasswordDto, res: any): void;
    showMe(req: any, res: any): any;
}
