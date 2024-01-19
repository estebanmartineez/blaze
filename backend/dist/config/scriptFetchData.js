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
const axios_1 = __importDefault(require("axios"));
const database_1 = require("./database");
const Match_1 = __importDefault(require("../models/Match"));
const Player_1 = __importDefault(require("../models/Player"));
const Team_1 = __importDefault(require("../models/Team"));
const helpers_1 = require("../helpers/helpers");
const dotenv_1 = __importDefault(require("dotenv"));
const Coach_1 = __importDefault(require("../models/Coach"));
dotenv_1.default.config();
function fetchAndSaveData(teamId) {
    return __awaiter(this, void 0, void 0, function* () {
        const transaction = yield database_1.sequelize.transaction();
        try {
            const teamResponse = yield axios_1.default.get(`${process.env.EXTERNAL_API_ENDPOINT}/api/?action=get_teams&team_id=${teamId}&APIkey=${process.env.EXTERNAL_API_KEY}`);
            if (teamResponse.data) {
                const { team_key, team_name, team_badge, team_country, players, coaches } = teamResponse.data[0];
                console.log(`Saving Team with teamId: ${teamId}`);
                const savedTeam = yield Team_1.default.create({
                    teamId: team_key,
                    name: team_name,
                    country: team_country,
                    badge: team_badge,
                }, { transaction });
                console.log(`Saving Players for team with teamId: ${teamId}`);
                for (const { player_id, player_image, player_age, player_number, player_country, player_is_captain, player_name, player_rating, player_type, } of players) {
                    yield Player_1.default.create({
                        playerId: player_id,
                        image: player_image,
                        name: player_name,
                        number: player_number,
                        country: player_country,
                        type: player_type,
                        age: player_age,
                        isCaptain: player_is_captain,
                        playerRating: player_rating,
                        teamId: savedTeam.teamId,
                    }, { transaction });
                }
                console.log(`Saving Matches for team with teamId: ${teamId} since 2023 up to now`);
                const matchesResponse = yield axios_1.default.get(`${process.env.EXTERNAL_API_ENDPOINT}?action=get_events&from=2023-01-01&to=${(0, helpers_1.getCurrentDate)()}&team_id=${teamId}&APIkey=${process.env.EXTERNAL_API_KEY}`);
                if (matchesResponse.data) {
                    const matchesData = [matchesResponse.data];
                    for (const matchData of matchesData[0]) {
                        console.log('matchData.substitutions', matchData.substitutions);
                        const mappedMatch = {
                            matchId: matchData.match_id,
                            countryId: matchData.country_id,
                            countryName: matchData.country_name,
                            matchDate: matchData.match_date,
                            matchTime: matchData.match_time,
                            homeTeamId: matchData.match_hometeam_id,
                            homeTeamName: matchData.match_hometeam_name,
                            homeTeamScore: matchData.match_hometeam_score,
                            awayTeamId: matchData.match_awayteam_id,
                            awayTeamName: matchData.match_awayteam_name,
                            awayTeamScore: matchData.match_awayteam_score,
                            stadium: matchData.match_stadium,
                            referee: matchData.match_referee,
                            homeBadge: matchData.team_home_badge,
                            awayBadge: matchData.team_away_badge,
                            goalScorer: matchData.goalscorer
                                ? matchData.goalscorer.map(({ time, score, home_scorer, away_scorer, info_time }) => ({
                                    time,
                                    score,
                                    homeScorer: home_scorer,
                                    awayScorer: away_scorer,
                                    infoTime: info_time,
                                }))
                                : undefined,
                            cards: matchData.cards
                                ? matchData.cards.map(({ time, home_fault, card, away_fault, info_time }) => ({
                                    time,
                                    homeFault: home_fault,
                                    cardType: card,
                                    awayFault: away_fault,
                                    infoTime: info_time,
                                }))
                                : undefined,
                            substitutions: (matchData === null || matchData === void 0 ? void 0 : matchData.substitutions) ? matchData.substitutions : undefined,
                        };
                        yield Match_1.default.create(mappedMatch, { transaction });
                    }
                }
                for (const coach of coaches) {
                    const savedCoach = yield Coach_1.default.create({
                        teamId: teamId,
                        name: coach.coach_name,
                        country: coach.coach_country,
                        age: coach.coach_age,
                    }, { transaction });
                }
                console.log('Data fetched from the API and saved to the database successfully.');
            }
        }
        catch (error) {
            if (error instanceof Error) {
                console.error('Error message:', error.message);
            }
            else {
                console.error('Unknown error occurred:', error);
            }
        }
        finally {
            yield transaction.commit();
            yield database_1.sequelize.close();
        }
    });
}
const teamId = process.argv[2];
if (!teamId) {
    console.error('Please provide a teamId as an argument.');
}
else {
    fetchAndSaveData(teamId);
}
//# sourceMappingURL=scriptFetchData.js.map