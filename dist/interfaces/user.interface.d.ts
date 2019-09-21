import { User } from '../user/user.entity';
import { Case } from '../case/case.entity';
import { Exhibit } from '../case/exhibit/exhibits.entity';
import { Claim } from '../case/claim/claims.entity';
import { Decision } from '../case/decision/decisions.entity';
import { Notice } from '../case/notice/notices.entity';
import { Petition } from '../case/petition/petitions.entity';
import { Verdict } from '../case/verdict/verdicts.entity';
import { DepositVoucher } from '../case/depositVoucher/deposit.vouchers.entity';
import { File } from '../case/file/file.entity';
export interface ILogin {
    message: string;
    user?: User;
    token?: string;
    status: number;
}
export interface IRegister {
    message: string;
    user?: User;
    status: number;
}
export interface IResetPassword {
    message: string;
    resetToken?: string;
    status: number;
}
export interface ICreateCase {
    message: string;
    case?: Case;
    status: number;
}
export interface ICreateExhibit {
    message: string;
    exhibit?: Exhibit;
    status: number;
}
export interface ICreateNotice {
    message: string;
    notice?: Notice;
    status: number;
}
export interface ICreateDecision {
    message: string;
    decision?: Decision;
    status: number;
}
export interface ICreatePetition {
    message: string;
    petition?: Petition;
    status: number;
}
export interface ICreateVerdict {
    message: string;
    verdict?: Verdict;
    status: number;
}
export interface ICreateDepositVoucher {
    message: string;
    depositVoucher?: DepositVoucher;
    status: number;
}
export interface ICreateClaim {
    message: string;
    claim?: Claim;
    status: number;
}
export interface ICreateFile {
    message: string;
    file?: File;
    status: number;
}
