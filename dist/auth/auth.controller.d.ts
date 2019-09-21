import { AuthService } from './auth.service';
import { LoginDto, SignUpDto } from './auth.docs';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(data: LoginDto, res: any): void;
    register(data: SignUpDto, res: any): Promise<void>;
}
