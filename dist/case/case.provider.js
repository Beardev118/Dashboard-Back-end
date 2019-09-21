"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const providers_1 = require("src/constants/providers");
const case_entity_1 = require("./case.entity");
exports.caseProviders = [
    {
        provide: providers_1.default.CASE,
        useValue: case_entity_1.Case,
    },
];
//# sourceMappingURL=case.provider.js.map