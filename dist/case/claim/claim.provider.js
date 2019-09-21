"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const providers_1 = require("src/constants/providers");
const claims_entity_1 = require("./claims.entity");
exports.claimProviders = [
    {
        provide: providers_1.default.CLAIM,
        useValue: claims_entity_1.Claim,
    },
];
//# sourceMappingURL=claim.provider.js.map