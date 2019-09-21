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
const case_status_1 = require("./enum/case.status");
const file_entity_1 = require("./file/file.entity");
const exhibits_entity_1 = require("./exhibit/exhibits.entity");
const notices_entity_1 = require("./notice/notices.entity");
const decisions_entity_1 = require("./decision/decisions.entity");
const petitions_entity_1 = require("./petition/petitions.entity");
const verdicts_entity_1 = require("./verdict/verdicts.entity");
const deposit_vouchers_entity_1 = require("./depositVoucher/deposit.vouchers.entity");
const claims_entity_1 = require("./claim/claims.entity");
let Case = class Case extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Case.prototype, "caseNumber", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Case.prototype, "subject", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Case.prototype, "fileLocation", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Case.prototype, "claimedAmount", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Date)
], Case.prototype, "submitDate", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Date)
], Case.prototype, "registrationDate", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Date)
], Case.prototype, "firstSessionDate", void 0);
__decorate([
    sequelize_typescript_1.Column({
        type: sequelize_typescript_1.DataType.ENUM,
        values: case_status_1.StatusEnum,
    }),
    __metadata("design:type", String)
], Case.prototype, "caseStatus", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Date)
], Case.prototype, "nextSessionDate", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Case.prototype, "hall", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Case.prototype, "secretaryName", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Date)
], Case.prototype, "latestSessionDate", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Case.prototype, "rootCaseNumber", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Date)
], Case.prototype, "dateOfAssignation", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Date)
], Case.prototype, "meetingDate", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Date)
], Case.prototype, "dueDate", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Case.prototype, "managedBy", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Case.prototype, "paymentAmount", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Case.prototype, "paymentStatus", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.ARRAY(sequelize_typescript_1.DataType.STRING)),
    __metadata("design:type", Array)
], Case.prototype, "partiesAddresses", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.ARRAY(sequelize_typescript_1.DataType.STRING)),
    __metadata("design:type", Array)
], Case.prototype, "partiesNames", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.ARRAY(sequelize_typescript_1.DataType.STRING)),
    __metadata("design:type", Array)
], Case.prototype, "notes", void 0);
__decorate([
    sequelize_typescript_1.HasMany(() => file_entity_1.File),
    __metadata("design:type", Array)
], Case.prototype, "attachments", void 0);

__decorate([
    sequelize_typescript_1.HasMany(() => file_entity_1.File),
    __metadata("design:type", Array)
], Case.prototype, "petitionsAttachments", void 0);
__decorate([
    sequelize_typescript_1.HasMany(() => exhibits_entity_1.Exhibit),
    __metadata("design:type", Array)
], Case.prototype, "exhibits", void 0);
__decorate([
    sequelize_typescript_1.HasMany(() => notices_entity_1.Notice),
    __metadata("design:type", Array)
], Case.prototype, "notices", void 0);
__decorate([
    sequelize_typescript_1.HasMany(() => decisions_entity_1.Decision),
    __metadata("design:type", Array)
], Case.prototype, "decisions", void 0);
__decorate([
    sequelize_typescript_1.HasMany(() => petitions_entity_1.Petition),
    __metadata("design:type", Array)
], Case.prototype, "petitions", void 0);
__decorate([
    sequelize_typescript_1.HasMany(() => verdicts_entity_1.Verdict),
    __metadata("design:type", Array)
], Case.prototype, "verdicts", void 0);
__decorate([
    sequelize_typescript_1.HasMany(() => deposit_vouchers_entity_1.DepositVoucher),
    __metadata("design:type", Array)
], Case.prototype, "depositVouchers", void 0);
__decorate([
    sequelize_typescript_1.HasMany(() => claims_entity_1.Claim),
    __metadata("design:type", Array)
], Case.prototype, "claims", void 0);
__decorate([
    sequelize_typescript_1.CreatedAt,
    __metadata("design:type", Date)
], Case.prototype, "creationDate", void 0);
Case = __decorate([
    sequelize_typescript_1.Table
], Case);
exports.Case = Case;
//# sourceMappingURL=case.entity.js.map