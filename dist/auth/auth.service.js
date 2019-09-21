"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const user_service_1 = require("../user/user.service");
const bcrypt = require("bcrypt");
let AuthService = class AuthService {
    constructor(userService, jwtService) {
        this.userService = userService;
        this.jwtService = jwtService;
    }
    async validate(payload) {
        return await this.userService.findByEmail(payload.email);
    }
    async login(email, password) {
        const user = await this.validate({ email: email });
        if (!user) {
            return { message: 'Wrong credentials', status: 400 };
        }
        if (!bcrypt.compareSync(password, user.password)) {
            return { message: 'Wrong credentials', status: 400 };
        }
        let payload = `${user.email}${user.role}`;
        const accessToken = this.jwtService.sign({
            email: user.email,
            role: user.role,
        });
        return {
            token: 'Bearer ' + accessToken,
            message: 'Login successful',
            user: user,
            status: 200,
        };
    }
    async register(user) {
        const existingUser = await this.validate({ email: user.email });
        if (existingUser) {
            return { message: 'This email is already in use', status: 400 };
        }
        const newUser = await this.userService.createNewUser(user);
        return {
            message: 'Account created',
            user: newUser,
            status: 200,
        };
    }
};
AuthService.generateRoles = (role) => {
    switch (role) {
        case 'admin':
            return {
                admin: true,
                user: true,
            };
        case 'lawyer':
            return {
                admin: false,
                user: true,
            };
    }
};
AuthService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [user_service_1.UserService,
        jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map