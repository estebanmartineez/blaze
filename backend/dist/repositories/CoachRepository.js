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
Object.defineProperty(exports, "__esModule", { value: true });
class CoachRepository {
    constructor(model) {
        this.model = model;
    }
    create(entity) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const createdCoach = yield this.model.create(entity);
                return createdCoach.toJSON();
            }
            catch (error) {
                if (error instanceof Error) {
                    throw new Error(`Error creating a coach: ${error.message}`);
                }
                else {
                    throw new Error('An unknown error occurred');
                }
            }
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const coach = yield this.model.findByPk(id);
                return coach ? coach.toJSON() : null;
            }
            catch (error) {
                if (error instanceof Error) {
                    throw new Error(`Error finding coach by ID: ${error.message}`);
                }
                else {
                    throw new Error('An unknown error occurred');
                }
            }
        });
    }
    update(entity) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!entity.id) {
                    throw new Error('Entity must have an ID for update');
                }
                yield this.model.update(entity, { where: { id: entity.id } });
            }
            catch (error) {
                if (error instanceof Error) {
                    throw new Error(`Error updating coach: ${error.message}`);
                }
                else {
                    throw new Error('An unknown error occurred');
                }
            }
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.model.destroy({ where: { id } });
            }
            catch (error) {
                if (error instanceof Error) {
                    throw new Error(`Error deleting coach: ${error.message}`);
                }
                else {
                    throw new Error('An unknown error occurred');
                }
            }
        });
    }
}
exports.default = CoachRepository;
//# sourceMappingURL=CoachRepository.js.map