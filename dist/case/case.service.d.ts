import { Case } from './case.entity';
import { ExhibitDto, NoticeDto, PetitionDto, VerdictDto, DepositVoucherDto, ClaimDto, FileDto, CreateCaseDto } from './case.docs';
import { ICreateCase, ICreateExhibit, ICreateNotice, ICreateDecision, ICreatePetition, ICreateVerdict, ICreateDepositVoucher, ICreateClaim, ICreateFile } from 'src/interfaces/user.interface';
import { Exhibit } from './exhibit/exhibits.entity';
import { Notice } from './notice/notices.entity';
import { Decision } from './decision/decisions.entity';
import { Petition } from './petition/petitions.entity';
import { Verdict } from './verdict/verdicts.entity';
import { DepositVoucher } from './depositVoucher/deposit.vouchers.entity';
import { Claim } from './claim/claims.entity';
import { DecisionDto } from './decision/decision.docs';
import { File } from './file/file.entity';
import ISearchObject from '../../index';
export declare class CaseService {
    private readonly CASE_REPOSITORY;
    private readonly EXHIBIT_REPOSITORY;
    private readonly NOTICE_REPOSITORY;
    private readonly DECISION_REPOSITORY;
    private readonly PETITION_REPOSITORY;
    private readonly VERDICT_REPOSITORY;
    private readonly DEPOSIT_VOUCHER_REPOSITORY;
    private readonly CLAIM_REPOSITORY;
    private readonly FILE_REPOSITORY;
    constructor(CASE_REPOSITORY: typeof Case, EXHIBIT_REPOSITORY: typeof Exhibit, NOTICE_REPOSITORY: typeof Notice, DECISION_REPOSITORY: typeof Decision, PETITION_REPOSITORY: typeof Petition, VERDICT_REPOSITORY: typeof Verdict, DEPOSIT_VOUCHER_REPOSITORY: typeof DepositVoucher, CLAIM_REPOSITORY: typeof Claim, FILE_REPOSITORY: typeof File);
    findAll: (query?: ISearchObject) => Promise<Case[]>;
    findAndCountAll: (data: CreateCaseDto) => Promise<{
        rows: Case[];
        count: number;
    }>;
    searchCase: (query: any) => Promise<Case>;
    casesSearch: (query: ISearchObject, include?: ISearchObject) => Promise<Case[] | {
        rows: Case[];
        count: number;
    }>;
    registerNewCase(caseData: CreateCaseDto): Promise<ICreateCase>;
    registerNewExhibit(exhibit: ExhibitDto): Promise<ICreateExhibit>;
    registerNewNotice(notice: NoticeDto): Promise<ICreateNotice>;
    registerNewDecision(decision: DecisionDto): Promise<ICreateDecision>;
    registerNewPetition(petition: PetitionDto): Promise<ICreatePetition>;
    registerNewVerdict(verdict: VerdictDto): Promise<ICreateVerdict>;
    registerNewDepositVoucher(depositVoucher: DepositVoucherDto): Promise<ICreateDepositVoucher>;
    registerNewClaim(claim: ClaimDto): Promise<ICreateClaim>;
    registerNewFile(file: FileDto): Promise<ICreateFile>;
}
