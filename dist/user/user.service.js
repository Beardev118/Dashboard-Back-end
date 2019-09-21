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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const providers_1 = require("../constants/providers");
const mailer_1 = require("@nest-modules/mailer");
const bcrypt = require("bcrypt");
let UserService = class UserService {
    constructor(USER_REPOSITORY, mailerService) {
        this.USER_REPOSITORY = USER_REPOSITORY;
        this.mailerService = mailerService;
        this.getAllUsers = async () => {
            return this.USER_REPOSITORY.findAll();
        };
        this.createNewUser = async (data) => {
            return this.USER_REPOSITORY.create(data);
        };
        this.findByEmail = async (email) => {
            return this.USER_REPOSITORY.findOne({
                where: {
                    email: email,
                },
            });
        };
        this.resetToken = (email) => {
            return bcrypt.hashSync(email, 10);
        };
        this.updateResetToken = async (token, email) => {
            const user = await this.findByEmail(email);
            if (user) {
                user.resetToken = token;
                user.save();
                return {
                    message: 'Reset link will be sent to your email',
                    status: 200,
                    resetToken: token,
                };
            }
            return {
                message: 'Email does not exist',
                status: 400,
            };
        };
    }
    async forgotPassword(email) {
        try {
            const resetToken = this.resetToken(email);
            this.mailerService.sendMail({
                to: email,
                from: 'tucakadna@gmail.com',
                subject: 'Reset password ✔',
                text: `Reset your password: http://localhost:3000/reset-password/${resetToken}`,
                html: `<b>Reset your password:</b> <a href="http://localhost:3000/reset-password/${resetToken}" > here </a> `,
            });
            return this.updateResetToken(resetToken, email);
        }
        catch (error) {
            return {
                message: 'Error occurred while sending email',
                status: 500,
            };
        }
    }
    async resetPassword(password, resetToken) {
        try {
            const user = await this.USER_REPOSITORY.findOne({
                where: {
                    resetToken: resetToken,
                },
            });
            user.password = bcrypt.hashSync(password, 10);
            user.resetToken = null;
            user.save();
            return {
                message: 'Password changed',
                status: 200,
            };
        }
        catch (error) {
            return {
                message: 'Error occurred while changing password',
                status: 500,
            };
        }
    }
};
UserService = __decorate([
    common_1.Injectable(),
    __param(0, common_1.Inject(providers_1.default.USER)),
    __metadata("design:paramtypes", [Object, mailer_1.MailerService])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map