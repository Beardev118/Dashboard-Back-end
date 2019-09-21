"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const providers_1 = require("../constants/providers");
const user_entity_1 = require("./user.entity");
exports.userProviders = [
    {
        provide: providers_1.default.USER,
        useValue: user_entity_1.User,
    },
];
//# sourceMappingURL=user.provider.js.map