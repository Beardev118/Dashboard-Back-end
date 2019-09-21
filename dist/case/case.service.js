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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const providers_1 = require("src/constants/providers");
const exhibits_entity_1 = require("./exhibit/exhibits.entity");
const notices_entity_1 = require("./notice/notices.entity");
const decisions_entity_1 = require("./decision/decisions.entity");
const petitions_entity_1 = require("./petition/petitions.entity");
const verdicts_entity_1 = require("./verdict/verdicts.entity");
const deposit_vouchers_entity_1 = require("./depositVoucher/deposit.vouchers.entity");
const claims_entity_1 = require("./claim/claims.entity");
const paginate_1 = require("src/paginate");
const _ = require("lodash");
const console = require("console");
let CaseService = class CaseService {
    constructor(CASE_REPOSITORY, EXHIBIT_REPOSITORY, NOTICE_REPOSITORY, DECISION_REPOSITORY, PETITION_REPOSITORY, VERDICT_REPOSITORY, DEPOSIT_VOUCHER_REPOSITORY, CLAIM_REPOSITORY, FILE_REPOSITORY) {
        this.CASE_REPOSITORY = CASE_REPOSITORY;
        this.EXHIBIT_REPOSITORY = EXHIBIT_REPOSITORY;
        this.NOTICE_REPOSITORY = NOTICE_REPOSITORY;
        this.DECISION_REPOSITORY = DECISION_REPOSITORY;
        this.PETITION_REPOSITORY = PETITION_REPOSITORY;
        this.VERDICT_REPOSITORY = VERDICT_REPOSITORY;
        this.DEPOSIT_VOUCHER_REPOSITORY = DEPOSIT_VOUCHER_REPOSITORY;
        this.CLAIM_REPOSITORY = CLAIM_REPOSITORY;
        this.FILE_REPOSITORY = FILE_REPOSITORY;
        this.findAll = async (query) => this.CASE_REPOSITORY.findAll(query);
        this.findAndCountAll = async (data) => this.CASE_REPOSITORY.findAndCountAll({});
        this.searchCase = async (query) => {
            return this.CASE_REPOSITORY.findOne({
                where: query,
                include: [
                    exhibits_entity_1.Exhibit,
                    claims_entity_1.Claim,
                    decisions_entity_1.Decision,
                    deposit_vouchers_entity_1.DepositVoucher,
                    notices_entity_1.Notice,
                    petitions_entity_1.Petition,
                    verdicts_entity_1.Verdict,
                ],
            });
        };
        this.casesSearch = async (query, include) => {
            if (query.itemsPerPage && query.currentPage) {
                const paginateProps = {
                    page: Number(query.currentPage),
                    pageSize: Number(query.itemsPerPage),
                };
                return await this.CASE_REPOSITORY.findAndCountAll(Object.assign({ where: _.omit(query, ['itemsPerPage', 'currentPage']) }, paginate_1.default(paginateProps), { include: [exhibits_entity_1.Exhibit,
                        claims_entity_1.Claim,
                        decisions_entity_1.Decision,
                        deposit_vouchers_entity_1.DepositVoucher,
                        notices_entity_1.Notice,
                        petitions_entity_1.Petition,
                        verdicts_entity_1.Verdict] }));
            }
            else {
                return await this.CASE_REPOSITORY.findAll({
                    where: query,
                    include: [include],
                });
            }
        };
    }
    async registerNewCase(caseData) {
        console.log('hehehehe', caseData);
        const newCase = await this.CASE_REPOSITORY.create(caseData);
        return {
            message: 'Case created',
            case: newCase,
            status: 200,
        };
    }
    async registerNewExhibit(exhibit) {
        const newExhibit = await this.EXHIBIT_REPOSITORY.create(exhibit);
        return {
            message: 'Exhibit created',
            exhibit: newExhibit,
            status: 200,
        };
    }
    async registerNewNotice(notice) {
        const newNotice = await this.NOTICE_REPOSITORY.create(notice);
        return {
            message: 'Notice created',
            notice: newNotice,
            status: 200,
        };
    }
    async registerNewDecision(decision) {
        const newDecision = await this.DECISION_REPOSITORY.create(decision);
        return {
            message: 'Decision created',
            decision: newDecision,
            status: 200,
        };
    }
    async registerNewPetition(petition) {
        const newPetition = await this.PETITION_REPOSITORY.create(petition);
        return {
            message: 'Petition created',
            petition: newPetition,
            status: 200,
        };
    }
    async registerNewVerdict(verdict) {
        const newVerdict = await this.VERDICT_REPOSITORY.create(verdict);
        return {
            message: 'Verdict created',
            verdict: newVerdict,
            status: 200,
        };
    }
    async registerNewDepositVoucher(depositVoucher) {
        const newDepositVoucher = await this.DEPOSIT_VOUCHER_REPOSITORY.create(depositVoucher);
        return {
            message: 'Deposit voucher created',
            depositVoucher: newDepositVoucher,
            status: 200,
        };
    }
    async registerNewClaim(claim) {
        const newClaim = await this.CLAIM_REPOSITORY.create(claim);
        return {
            message: 'Claim created',
            claim: newClaim,
            status: 200,
        };
    }
    async registerNewFile(file) {
        const newFile = await this.FILE_REPOSITORY.create(file);
        return {
            message: 'File created',
            file: newFile,
            status: 200,
        };
    }
};
CaseService = __decorate([
    common_1.Injectable(),
    __param(0, common_1.Inject(providers_1.default.CASE)),
    __param(1, common_1.Inject(providers_1.default.EXHIBIT)),
    __param(2, common_1.Inject(providers_1.default.NOTICE)),
    __param(3, common_1.Inject(providers_1.default.DECISION)),
    __param(4, common_1.Inject(providers_1.default.PETITION)),
    __param(5, common_1.Inject(providers_1.default.VERDICT)),
    __param(6, common_1.Inject(providers_1.default.DEPOSIT_VOUCHER)),
    __param(7, common_1.Inject(providers_1.default.CLAIM)),
    __param(8, common_1.Inject(providers_1.default.FILE)),
    __metadata("design:paramtypes", [Object, Object, Object, Object, Object, Object, Object, Object, Object])
], CaseService);
exports.CaseService = CaseService;
//# sourceMappingURL=case.service.js.map