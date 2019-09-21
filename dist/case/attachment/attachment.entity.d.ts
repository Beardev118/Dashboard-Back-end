import { Model } from 'sequelize-typescript';
import { Case } from '../case.entity';
export declare class Attachment extends Model<Attachment> {
    url: string;
    author: string;
    creationDate: Date;
    caseId: number;
    case: Case;
}
