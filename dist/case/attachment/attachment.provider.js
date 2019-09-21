"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const providers_1 = require("src/constants/providers");
const attachment_entity_1 = require("./attachment.entity");
exports.attachmentProviders = [
    {
        provide: providers_1.default.Attachment,
        useValue: attachment_entity_1.Attachment,
    },
];
//# sourceMappingURL=file.provider.js.map