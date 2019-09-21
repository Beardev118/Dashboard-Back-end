"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const providers_1 = require("src/constants/providers");
const deposit_vouchers_entity_1 = require("./deposit.vouchers.entity");
exports.depositVoucherProviders = [
    {
        provide: providers_1.default.DEPOSIT_VOUCHER,
        useValue: deposit_vouchers_entity_1.DepositVoucher,
    },
];
//# sourceMappingURL=deposit.voucher.provider.js.map