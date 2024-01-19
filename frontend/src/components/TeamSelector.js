import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {selectTeam, fetchTeamsRequest} from '../redux/actions/teamActions';

const TeamSelector = () => {
  const dispatch = useDispatch();
  const teams = useSelector((state) => state.team);
  const selectedTeam = useSelector((state) => state.selectedTeam);

  useEffect(() => {
    dispatch(fetchTeamsRequest());
  }, [dispatch]);

  const handleTeamChange = (teamId) => {
    dispatch(selectTeam(teamId));
  };

  return (
    <div>
      <label>Select Team:</label>
      <select value={selectedTeam} onChange={(e) => handleTeamChange(e.target.value)}>
        <option value="">Select a team</option>
        {teams
          ? teams.teams.map((team) => (
              <option key={team.id} value={team.id}>
                {team.name}
              </option>
            ))
          : null}
      </select>
    </div>
  );
};

export default TeamSelector;
