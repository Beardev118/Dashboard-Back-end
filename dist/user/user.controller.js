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
const swagger_1 = require("@nestjs/swagger");
const user_docs_1 = require("./user.docs");
const user_service_1 = require("./user.service");
const passport_1 = require("@nestjs/passport");
const auth_service_1 = require("src/auth/auth.service");
const _ = require("lodash");
let UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    findAll() {
        return this.userService.getAllUsers();
    }
    forgotPassword(data, res) {
        this.userService
            .forgotPassword(data.email)
            .then((newData) => {
            res.send(newData);
            return res;
        })
            .catch(e => console.log('error', e));
    }
    resetPassword(data, res) {
        this.userService
            .resetPassword(data.password, data.resetToken)
            .then((data) => {
            return res.send(data);
        });
    }
    showMe(req, res) {
        const response = _.omit(req.user.dataValues, ['password', 'role']);
        response['permissions'] = auth_service_1.AuthService.generateRoles(req.user.dataValues.role);
        return res.json(response);
    }
};
__decorate([
    swagger_1.ApiBearerAuth(),
    common_1.Get(),
    common_1.UseGuards(passport_1.AuthGuard('jwt')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UserController.prototype, "findAll", null);
__decorate([
    common_1.Post('/forgot-password'),
    __param(0, common_1.Body()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_docs_1.ForgotPasswordDto, Object]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "forgotPassword", null);
__decorate([
    common_1.Post('/reset-password'),
    __param(0, common_1.Body()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_docs_1.ResetPasswordDto, Object]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "resetPassword", null);
__decorate([
    swagger_1.ApiBearerAuth(),
    common_1.Get('me'),
    common_1.UseGuards(passport_1.AuthGuard('jwt')),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "showMe", null);
UserController = __decorate([
    common_1.Controller('api/users'),
    swagger_1.ApiUseTags('api/users'),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map