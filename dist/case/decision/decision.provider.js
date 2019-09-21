"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const providers_1 = require("src/constants/providers");
const decisions_entity_1 = require("./decisions.entity");
exports.decisionProviders = [
    {
        provide: providers_1.default.DECISION,
        useValue: decisions_entity_1.Decision,
    },
];
//# sourceMappingURL=decision.provider.js.map