"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const providers_1 = require("src/constants/providers");
const verdicts_entity_1 = require("./verdicts.entity");
exports.verdictProviders = [
    {
        provide: providers_1.default.VERDICT,
        useValue: verdicts_entity_1.Verdict,
    },
];
//# sourceMappingURL=verdict.provider.js.map