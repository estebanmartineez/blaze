"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../config/database"));
class GenericRepository {
    constructor(tableName) {
        this.tableName = tableName;
    }
    create(entity) {
        return __awaiter(this, void 0, void 0, function* () {
            const entityKeys = Object.keys(entity).filter((key) => key !== 'id');
            const values = entityKeys.map((key) => entity[key]);
            const columns = entityKeys.join(', ');
            const placeholders = entityKeys.map((_, i) => `$${i + 1}`).join(', ');
            const insertQuery = `
      INSERT INTO ${this.tableName} (${columns})
      VALUES (${placeholders})
    `;
            yield database_1.default.query(insertQuery, values);
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = `SELECT * FROM ${this.tableName} WHERE id = $1`;
            const result = yield database_1.default.query(query, [id]);
            if (result.rows.length === 0) {
                return null;
            }
            return result.rows[0];
        });
    }
    update(entity) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!entity.id) {
                throw new Error('Entity must have an ID for update');
            }
            const entityKeys = Object.keys(entity).filter((key) => key !== 'id');
            const valuesToUpdate = entityKeys.map((key) => entity[key]);
            if (entityKeys.length === 0) {
                return;
            }
            const setClause = entityKeys.map((key, index) => `${key} = $${index + 2}`).join(', ');
            const updateQuery = `
      UPDATE ${this.tableName}
      SET ${setClause}
      WHERE id = $1
    `;
            yield database_1.default.query(updateQuery, [entity.id, ...valuesToUpdate]);
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const deleteQuery = `DELETE FROM ${this.tableName} WHERE id = $1`;
            yield database_1.default.query(deleteQuery, [id]);
        });
    }
}
exports.default = GenericRepository;
//# sourceMappingURL=GenericRepository.js.map