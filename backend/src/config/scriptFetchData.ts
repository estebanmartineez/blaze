import axios, {AxiosResponse} from 'axios';
import {sequelize} from './database';
import {TeamExternalApi} from '../helpers/externalApi';
import Match, {MatchAttributes} from '../models/Match';
import Player from '../models/Player';
import Team from '../models/Team';
import {getCurrentDate} from '../helpers/helpers';
import dotenv from 'dotenv';
import Coach from '../models/Coach';
dotenv.config();

async function fetchAndSaveData(teamId: string) {
  const transaction = await sequelize.transaction();

  try {
    const teamResponse = await axios.get<TeamExternalApi[]>(
      `${process.env.EXTERNAL_API_ENDPOINT}/api/?action=get_teams&team_id=${teamId}&APIkey=${process.env.EXTERNAL_API_KEY}`,
    );

    if (teamResponse.data) {
      const {team_key, team_name, team_badge, team_country, players, coaches} = teamResponse.data[0];

      console.log(`Saving Team with teamId: ${teamId}`);
      const savedTeam = await Team.create(
        {
          teamId: team_key,
          name: team_name,
          country: team_country,
          badge: team_badge,
        },
        {transaction},
      );

      console.log(`Saving Players for team with teamId: ${teamId}`);

      for (const {
        player_id,
        player_image,
        player_age,
        player_number,
        player_country,
        player_is_captain,
        player_name,
        player_rating,
        player_type,
      } of players) {
        await Player.create(
          {
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
          },
          {transaction},
        );
      }

      console.log(`Saving Matches for team with teamId: ${teamId} since 2023 up to now`);

      const matchesResponse = await axios.get(
        `${process.env.EXTERNAL_API_ENDPOINT}?action=get_events&from=2023-01-01&to=${getCurrentDate()}&team_id=${teamId}&APIkey=${
          process.env.EXTERNAL_API_KEY
        }`,
      );

      if (matchesResponse.data) {
        const matchesData = [matchesResponse.data];

        for (const matchData of matchesData[0]) {
          console.log('matchData.substitutions', matchData.substitutions);
          const mappedMatch: MatchAttributes = {
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
              ? matchData.goalscorer.map(({time, score, home_scorer, away_scorer, info_time}: any) => ({
                  time,
                  score,
                  homeScorer: home_scorer,
                  awayScorer: away_scorer,
                  infoTime: info_time,
                }))
              : undefined,
            cards: matchData.cards
              ? matchData.cards.map(({time, home_fault, card, away_fault, info_time}: any) => ({
                  time,
                  homeFault: home_fault,
                  cardType: card,
                  awayFault: away_fault,
                  infoTime: info_time,
                }))
              : undefined,
            substitutions: matchData?.substitutions ? matchData.substitutions : undefined,
          };

          await Match.create(mappedMatch, {transaction});
        }
      }

      for (const coach of coaches) {
        const savedCoach = await Coach.create(
          {
            teamId: teamId,
            name: coach.coach_name,
            country: coach.coach_country,
            age: coach.coach_age,
          },
          {transaction},
        );
      }

      console.log('Data fetched from the API and saved to the database successfully.');
    }
  } catch (error) {
    if (error instanceof Error) {
      console.error('Error message:', error.message);
    } else {
      console.error('Unknown error occurred:', error);
    }
  } finally {
    await transaction.commit();
    await sequelize.close();
  }
}

const teamId = process.argv[2];

if (!teamId) {
  console.error('Please provide a teamId as an argument.');
} else {
  fetchAndSaveData(teamId);
}
