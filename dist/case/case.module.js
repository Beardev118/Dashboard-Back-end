"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const database_module_1 = require("src/database/database.module");
const case_controller_1 = require("./case.controller");
const case_service_1 = require("./case.service");
const case_provider_1 = require("./case.provider");
const exhibit_provider_1 = require("./exhibit/exhibit.provider");
const notice_provider_1 = require("./notice/notice.provider");
const decision_provider_1 = require("./decision/decision.provider");
const petition_provider_1 = require("./petition/petition.provider");
const verdict_provider_1 = require("./verdict/verdict.provider");
const deposit_voucher_provider_1 = require("./depositVoucher/deposit.voucher.provider");
const claim_provider_1 = require("./claim/claim.provider");
const file_provider_1 = require("./file/file.provider");
let CaseModule = class CaseModule {
};
CaseModule = __decorate([
    common_1.Module({
        imports: [database_module_1.DatabaseModule],
        controllers: [case_controller_1.CaseController],
        providers: [
            case_service_1.CaseService,
            ...case_provider_1.caseProviders,
            ...exhibit_provider_1.exhibitProviders,
            ...notice_provider_1.noticeProviders,
            ...decision_provider_1.decisionProviders,
            ...petition_provider_1.petitionProviders,
            ...verdict_provider_1.verdictProviders,
            ...deposit_voucher_provider_1.depositVoucherProviders,
            ...claim_provider_1.claimProviders,
            ...file_provider_1.fileProviders,
        ],
        exports: [case_service_1.CaseService],
    })
], CaseModule);
exports.CaseModule = CaseModule;
//# sourceMappingURL=case.module.js.map