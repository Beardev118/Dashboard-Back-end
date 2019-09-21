"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const providers_1 = require("../constants/providers");
const settings_entity_1 = require("./settings.entity");
exports.settingsProviders = [
    {
        provide: providers_1.default.SETTINGS,
        useValue: settings_entity_1.Settings,
    },
];
//# sourceMappingURL=settings.provider.js.map