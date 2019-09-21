"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const providers_1 = require("src/constants/providers");
const exhibits_entity_1 = require("./exhibits.entity");
exports.exhibitProviders = [
    {
        provide: providers_1.default.EXHIBIT,
        useValue: exhibits_entity_1.Exhibit,
    },
];
//# sourceMappingURL=exhibit.provider.js.map