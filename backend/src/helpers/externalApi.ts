interface PlayerExternalApi {
  player_id: string;
  player_image: string;
  player_name: string;
  player_number: string;
  player_country: string;
  player_type: string;
  player_age: string;
  player_is_captain: string;
  player_rating: string;
}

interface CoachExternalApi {
  coach_name: string;
  coach_country: string;
  coach_age: string;
}
export interface TeamExternalApi {
  team_key: string;
  team_name: string;
  team_country: string;
  team_badge: string;
  players: PlayerExternalApi[];
  coaches: CoachExternalApi[];
}

interface GoalScorer {
  time: string;
  score: string;
  home_scorer: string;
  away_scorer: string;
  info_time: string;
}

interface Card {
  time: string;
  home_fault: string;
  card: string;
  away_fault: string;
  info_time: string;
}

interface Substitution {
  time: string;
  substitution: string;
}

interface Substitutions {
  home?: Substitution[];
  away?: Substitution[];
}

export interface MatchExternalApi {
  match_id: string;
  country_id: string;
  country_name: string;
  match_date: string;
  match_time: string;
  match_hometeam_id: string;
  match_hometeam_name: string;
  match_hometeam_score: string;
  match_awayteam_name: string;
  match_awayteam_id: string;
  match_awayteam_score: string;
  match_stadium: string;
  match_referee: string;
  team_home_badge: string;
  team_away_badge: string;
  goalscorer?: GoalScorer[];
  cards?: Card[];
  substitutions?: Substitutions;
}
