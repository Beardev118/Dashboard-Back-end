"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const providers_1 = require("src/constants/providers");
const petitions_entity_1 = require("./petitions.entity");
exports.petitionProviders = [
    {
        provide: providers_1.default.PETITION,
        useValue: petitions_entity_1.Petition,
    },
];
//# sourceMappingURL=petition.provider.js.map