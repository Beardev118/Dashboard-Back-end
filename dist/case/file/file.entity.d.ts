import { Model } from 'sequelize-typescript';
import { Case } from '../case.entity';
export declare class File extends Model<File> {
    url: string;
    author: string;
    creationDate: Date;
    caseId: number;
    case: Case;
}
