"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const providers_1 = require("src/constants/providers");
const file_entity_1 = require("./file.entity");
exports.fileProviders = [
    {
        provide: providers_1.default.FILE,
        useValue: file_entity_1.File,
    },
];
//# sourceMappingURL=file.provider.js.map