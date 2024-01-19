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
const node_cron_1 = __importDefault(require("node-cron"));
const team_service_1 = __importDefault(require("../services/team.service"));
//'0 0 * * *'
node_cron_1.default.schedule('* * * * *', () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log('Running Cronjob');
        const data = yield team_service_1.default.fetchDataFromExternalAPI();
        console.log('llegue aca');
        yield team_service_1.default.saveDataToDatabase(data);
        console.log('Data fetched and saved successfully!');
    }
    catch (error) {
        console.error('Error fetching or saving data:', error);
    }
}));
//# sourceMappingURL=cronjob.js.map