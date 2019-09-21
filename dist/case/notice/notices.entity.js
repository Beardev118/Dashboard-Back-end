"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const case_entity_1 = require("../case.entity");
let Notice = class Notice extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Notice.prototype, "noticeNumber", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Notice.prototype, "type", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Date)
], Notice.prototype, "registrationDate", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.ARRAY(sequelize_typescript_1.DataType.STRING)),
    __metadata("design:type", Array)
], Notice.prototype, "links", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.ARRAY(sequelize_typescript_1.DataType.STRING)),
    __metadata("design:type", Array)
], Notice.prototype, "parties", void 0);
__decorate([
    sequelize_typescript_1.CreatedAt,
    __metadata("design:type", Date)
], Notice.prototype, "creationDate", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => case_entity_1.Case),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Notice.prototype, "caseId", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => case_entity_1.Case, 'caseId'),
    __metadata("design:type", case_entity_1.Case)
], Notice.prototype, "case", void 0);
Notice = __decorate([
    sequelize_typescript_1.Table
], Notice);
exports.Notice = Notice;
//# sourceMappingURL=notices.entity.js.map