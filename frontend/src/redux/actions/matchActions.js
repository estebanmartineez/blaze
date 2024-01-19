import axios from 'axios';

export const FETCH_MATCHES_REQUEST = 'FETCH_MATCHES_REQUEST';
export const FETCH_MATCHES_SUCCESS = 'FETCH_MATCHES_SUCCESS';
export const FETCH_MATCHES_FAILURE = 'FETCH_MATCHES_FAILURE';

export const fetchMatchesRequest = (teamId) => ({
  type: FETCH_MATCHES_REQUEST,
  payload: teamId,
});

export const fetchMatchesSuccess = (matches) => ({
  type: FETCH_MATCHES_SUCCESS,
  payload: matches,
});

export const fetchMatchesFailure = (error) => ({
  type: FETCH_MATCHES_FAILURE,
  payload: error,
});

// Thunk to Fetch Matches
export const fetchMatches = (teamId) => async (dispatch) => {
  dispatch(fetchMatchesRequest(teamId));

  try {
    const response = await axios.get(`http://localhost:4000/matches?teamId=${teamId}`);
    dispatch(fetchMatchesSuccess(response.data));
  } catch (error) {
    dispatch(fetchMatchesFailure(error.message));
  }
};
