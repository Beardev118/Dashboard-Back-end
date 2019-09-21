import { ExhibitDto, NoticeDto, PetitionDto, VerdictDto, DepositVoucherDto, ClaimDto, FileDto, CreateCaseDto } from './case.docs';
import { CaseService } from './case.service';
import { DecisionDto } from './decision/decision.docs';
export declare class CaseController {
    private readonly caseService;
    constructor(caseService: CaseService);
    index(res: any): Promise<any>;
    search(query: any, res: any): Promise<any>;
    createCase(data: CreateCaseDto, res: any): void;
    createExhibit(data: ExhibitDto, res: any): void;
    createNotice(data: NoticeDto, res: any): void;
    createDecision(data: DecisionDto, res: any): void;
    createPetition(data: PetitionDto, res: any): void;
    createVerdict(data: VerdictDto, res: any): void;
    createDepositVoucher(data: DepositVoucherDto, res: any): void;
    createClaim(data: ClaimDto, res: any): void;
    createFile(data: FileDto, res: any): void;
    getCase(query: any): Promise<import("./case.entity").Case>;
}
