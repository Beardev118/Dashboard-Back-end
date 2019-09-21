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
const swagger_1 = require("@nestjs/swagger");
const case_docs_1 = require("./case.docs");
const case_service_1 = require("./case.service");
const decision_docs_1 = require("./decision/decision.docs");
const console = require("console");
let CaseController = class CaseController {
    constructor(caseService) {
        this.caseService = caseService;
    }
    async index(res) {
        const cases = await this.caseService.findAll();
        return res.status(common_1.HttpStatus.OK).json(cases);
    }
    async search(query, res) {
        const cases = await this.caseService.casesSearch(query);
        return res.status(common_1.HttpStatus.OK).json(cases);
    }
    createCase(data, res) {
        console.log('hahahahahhahahha');
        this.caseService
            .registerNewCase(data)
            .then((data) => {
            return res.status(common_1.HttpStatus.OK).send(data);
        })
            .catch(e => {
            console.log('error', e);
            return res.status(500).send(e);
        });
    }
    createExhibit(data, res) {
        this.caseService
            .registerNewExhibit(data)
            .then((data) => {
            console.log('Exhibit newwwww');
            return res.send(data);
        })
            .catch(e => console.log('error', e));
    }
    createNotice(data, res) {
        this.caseService
            .registerNewNotice(data)
            .then((data) => {
            console.log('Notice newwwww');
            return res.send(data);
        })
            .catch(e => console.log('error', e));
    }
    createDecision(data, res) {
        this.caseService
            .registerNewDecision(data)
            .then((data) => {
            console.log('Decision newwwww');
            return res.send(data);
        })
            .catch(e => {
            console.log('error', e);
            return res.status(500).send(e);
        });
    }
    createPetition(data, res) {
        this.caseService
            .registerNewPetition(data)
            .then((data) => {
            console.log('Petition newwwww');
            return res.send(data);
        })
            .catch(e => {
            console.log('error', e);
            return res.status(500).send(e);
        });
    }
    createVerdict(data, res) {
        this.caseService
            .registerNewVerdict(data)
            .then((data) => {
            console.log('Verdict newwwww');
            return res.send(data);
        })
            .catch(e => console.log('error', e));
    }
    createDepositVoucher(data, res) {
        this.caseService
            .registerNewDepositVoucher(data)
            .then((data) => {
            console.log('Deposit voucher newwwww');
            return res.send(data);
        })
            .catch(e => console.log('error', e));
    }
    createClaim(data, res) {
        this.caseService
            .registerNewClaim(data)
            .then((data) => {
            console.log('Claim newwwww');
            return res.send(data);
        })
            .catch(e => console.log('error', e));
    }
    createFile(data, res) {
        this.caseService
            .registerNewFile(data)
            .then((data) => {
            console.log('File newwwww');
            return res.send(data);
        })
            .catch(e => console.log('error', e));
    }
    async getCase(query) {
        return this.caseService.searchCase(query);
    }
};
__decorate([
    common_1.Get(),
    __param(0, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CaseController.prototype, "index", null);
__decorate([
    common_1.Get('/resource'),
    __param(0, common_1.Query()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], CaseController.prototype, "search", null);
__decorate([
    common_1.Post('/new'),
    __param(0, common_1.Body()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [case_docs_1.CreateCaseDto, Object]),
    __metadata("design:returntype", void 0)
], CaseController.prototype, "createCase", null);
__decorate([
    common_1.Post('exhibit'),
    __param(0, common_1.Body()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [case_docs_1.ExhibitDto, Object]),
    __metadata("design:returntype", void 0)
], CaseController.prototype, "createExhibit", null);
__decorate([
    common_1.Post('notice'),
    __param(0, common_1.Body()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [case_docs_1.NoticeDto, Object]),
    __metadata("design:returntype", void 0)
], CaseController.prototype, "createNotice", null);
__decorate([
    common_1.Post('decision'),
    __param(0, common_1.Body()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [decision_docs_1.DecisionDto, Object]),
    __metadata("design:returntype", void 0)
], CaseController.prototype, "createDecision", null);
__decorate([
    common_1.Post('petition'),
    __param(0, common_1.Body()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [case_docs_1.PetitionDto, Object]),
    __metadata("design:returntype", void 0)
], CaseController.prototype, "createPetition", null);
__decorate([
    common_1.Post('verdict'),
    __param(0, common_1.Body()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [case_docs_1.VerdictDto, Object]),
    __metadata("design:returntype", void 0)
], CaseController.prototype, "createVerdict", null);
__decorate([
    common_1.Post('deposit-voucher'),
    __param(0, common_1.Body()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [case_docs_1.DepositVoucherDto, Object]),
    __metadata("design:returntype", void 0)
], CaseController.prototype, "createDepositVoucher", null);
__decorate([
    common_1.Post('claim'),
    __param(0, common_1.Body()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [case_docs_1.ClaimDto, Object]),
    __metadata("design:returntype", void 0)
], CaseController.prototype, "createClaim", null);
__decorate([
    common_1.Post('file'),
    __param(0, common_1.Body()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [case_docs_1.FileDto, Object]),
    __metadata("design:returntype", void 0)
], CaseController.prototype, "createFile", null);
__decorate([
    common_1.Get('parties'),
    __param(0, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CaseController.prototype, "getCase", null);
CaseController = __decorate([
    common_1.Controller('api/cases'),
    swagger_1.ApiUseTags('api/cases'),
    __metadata("design:paramtypes", [case_service_1.CaseService])
], CaseController);
exports.CaseController = CaseController;
//# sourceMappingURL=case.controller.js.map