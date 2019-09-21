import { Model } from 'sequelize-typescript';
import { Case } from '../case.entity';
export declare class Notice extends Model<Notice> {
    noticeNumber: string;
    type: string;
    registrationDate: Date;
    links: string[];
    parties: string[];
    creationDate: Date;
    caseId: number;
    case: Case;
}
