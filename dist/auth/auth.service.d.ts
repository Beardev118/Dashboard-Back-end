import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import { User } from '../user/user.entity';
import { JwtPayload } from '../interfaces/jwt-payload.interface';
import { ILogin, IRegister } from '../interfaces/user.interface';
import { SignUpDto } from './auth.docs';
export declare class AuthService {
    private readonly userService;
    private readonly jwtService;
    constructor(userService: UserService, jwtService: JwtService);
    validate(payload: JwtPayload): Promise<User>;
    login(email: string, password: string): Promise<ILogin>;
    register(user: SignUpDto): Promise<IRegister>;
    static generateRoles: (role: string) => {
        admin: boolean;
        user: boolean;
    };
}
