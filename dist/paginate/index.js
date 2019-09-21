"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const paginate = ({ page, pageSize }) => {
    const offset = (page - 1) * pageSize;
    const limit = pageSize;
    return {
        offset,
        limit,
    };
};
exports.default = paginate;
//# sourceMappingURL=index.js.map