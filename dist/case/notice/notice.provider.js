"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const providers_1 = require("src/constants/providers");
const notices_entity_1 = require("./notices.entity");
exports.noticeProviders = [
    {
        provide: providers_1.default.NOTICE,
        useValue: notices_entity_1.Notice,
    },
];
//# sourceMappingURL=notice.provider.js.map