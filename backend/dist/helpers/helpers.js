"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleError = exports.getCurrentDate = void 0;
function getCurrentDate() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}
exports.getCurrentDate = getCurrentDate;
function handleError(res, message, error) {
    res.status(500).json({ message, error: error.message });
}
exports.handleError = handleError;
//# sourceMappingURL=helpers.js.map