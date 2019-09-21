"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const database_module_1 = require("./database/database.module");
const settings_controller_1 = require("./settings/settings.controller");
const settings_module_1 = require("./settings/settings.module");
const user_controller_1 = require("./user/user.controller");
const user_module_1 = require("./user/user.module");
const auth_module_1 = require("./auth/auth.module");
const auth_controller_1 = require("./auth/auth.controller");
const mailer_1 = require("@nest-modules/mailer");
const case_controller_1 = require("./case/case.controller");
const case_module_1 = require("./case/case.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            settings_module_1.SettingsModule,
            database_module_1.DatabaseModule,
            user_module_1.UserModule,
            auth_module_1.AuthModule,
            mailer_1.MailerModule.forRootAsync({
                useFactory: () => ({
                    transport: {
                        service: 'Gmail',
                        port: 587,
                        secure: false,
                        auth: {
                            user: 'contigoutest@gmail.com',
                            pass: 'K!jali248',
                        },
                    },
                    defaults: {
                        from: '"nest-modules" <modules@nestjs.com>',
                    },
                    template: {
                        dir: __dirname + '/templates',
                        adapter: new mailer_1.HandlebarsAdapter(),
                        options: {
                            strict: true,
                        },
                    },
                }),
            }),
            case_module_1.CaseModule,
        ],
        controllers: [
            app_controller_1.AppController,
            settings_controller_1.SettingsController,
            user_controller_1.UserController,
            auth_controller_1.AuthController,
            case_controller_1.CaseController,
        ],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map