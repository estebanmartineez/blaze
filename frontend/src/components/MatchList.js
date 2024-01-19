import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchMatchesRequest} from '../redux/actions/matchActions';
import {useParams} from 'react-router-dom';

const Match = ({match}) => {
  return (
    <div className="border p-4 mb-4">
      <h3 className="text-lg font-semibold mb-2">{`${match.homeTeamName} vs ${match.awayTeamName}`}</h3>
      <p>Date: {match.matchDate}</p>
      <p>Time: {match.matchTime}</p>
      <p>Stadium: {match.stadium}</p>
      <p>Referee: {match.referee}</p>
      <p>Result: {`${match.homeTeamScore} - ${match.awayTeamScore}`}</p>
      <div className="flex">
        <img src={match.homeBadge} alt={`${match.homeTeamName} badge`} className="w-10 h-10 mr-2" />
        <img src={match.awayBadge} alt={`${match.awayTeamName} badge`} className="w-10 h-10" />
      </div>
    </div>
  );
};
const MatchList = () => {
  const dispatch = useDispatch();
  const {teamId} = useParams();
  const matches = useSelector((state) => state.team.matches);

  useEffect(() => {
    if (teamId) {
      dispatch(fetchMatchesRequest(teamId));
    }
  }, [dispatch]);

  return (
    <div>
      <h2>Match List</h2>

      {matches && (
        <ul>
          {matches.map((match) => (
            <Match key={match.id} match={match} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default MatchList;
