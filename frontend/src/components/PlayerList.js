import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchPlayersRequest} from '../redux/actions/playerActions';
import {useParams} from 'react-router-dom';

const Player = ({player}) => {
  return (
    <div className="border p-4 mb-4">
      <img src={player.image} alt={`${player.name} image`} className="w-20 h-20 mb-2 rounded-full" />
      <h3 className="text-lg font-semibold mb-2">{player.name}</h3>
      <p>Number: {player.number}</p>
      <p>Position: {player.type}</p>
      <p>Age: {player.age}</p>
      <p>Captain: {player.isCaptain === '1' ? 'Yes' : 'No'}</p>
      <p>Rating: {player.playerRating}</p>
    </div>
  );
};
const PlayerList = () => {
  const dispatch = useDispatch();
  const {teamId} = useParams();
  const players = useSelector((state) => state.team.players);

  useEffect(() => {
    if (teamId) {
      dispatch(fetchPlayersRequest(teamId));
    }
  }, [dispatch, teamId]);

  return (
    <div>
      <h2>Player List</h2>
      <ul>{players ? players.map((player) => <Player key={player.id} player={player} />) : null}</ul>
    </div>
  );
};

export default PlayerList;
