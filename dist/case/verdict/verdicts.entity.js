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
let Verdict = class Verdict extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Verdict.prototype, "verdict", void 0);
__decorate([
    sequelize_typescript_1.CreatedAt,
    __metadata("design:type", Date)
], Verdict.prototype, "creationDate", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => case_entity_1.Case),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Verdict.prototype, "caseId", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => case_entity_1.Case, 'caseId'),
    __metadata("design:type", case_entity_1.Case)
], Verdict.prototype, "case", void 0);
Verdict = __decorate([
    sequelize_typescript_1.Table
], Verdict);
exports.Verdict = Verdict;
//# sourceMappingURL=verdicts.entity.js.map