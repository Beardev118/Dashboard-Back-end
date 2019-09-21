"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const user_entity_1 = require("../user/user.entity");
const settings_entity_1 = require("../settings/settings.entity");
const case_entity_1 = require("../case/case.entity");
const claims_entity_1 = require("../case/claim/claims.entity");
const decisions_entity_1 = require("../case/decision/decisions.entity");
const deposit_vouchers_entity_1 = require("../case/depositVoucher/deposit.vouchers.entity");
const exhibits_entity_1 = require("src/case/exhibit/exhibits.entity");
const notices_entity_1 = require("src/case/notice/notices.entity");
const petitions_entity_1 = require("../case/petition/petitions.entity");
const verdicts_entity_1 = require("../case/verdict/verdicts.entity");
const file_entity_1 = require("../case/file/file.entity");
exports.databaseProviders = [
    {
        provide: 'SEQUELIZE',
        useFactory: async () => {
            const sequelize = new sequelize_typescript_1.Sequelize({
                dialect: 'postgres',
                host: 'ec2-46-137-91-216.eu-west-1.compute.amazonaws.com',
                port: 5432,
                username: 'gqekymuziineks',
                password: '0f1d221efcd8a97e98fb6c6cf0e6308cb0888bdf7d8159c9f7fb5abe15bd526b',
                database: 'dcfkartsavpcvd',
                dialectOptions: {
                    ssl: true,
                },
            });
            sequelize.addModels([
                settings_entity_1.Settings,
                user_entity_1.User,
                case_entity_1.Case,
                claims_entity_1.Claim,
                decisions_entity_1.Decision,
                deposit_vouchers_entity_1.DepositVoucher,
                exhibits_entity_1.Exhibit,
                file_entity_1.File,
                notices_entity_1.Notice,
                petitions_entity_1.Petition,
                verdicts_entity_1.Verdict,
            ]);
            await sequelize.sync();
            return sequelize;
        },
    },
];
//# sourceMappingURL=database.providers.js.map