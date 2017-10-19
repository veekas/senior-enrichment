

import axios from 'axios';

/* ---------------------------- ACTION TYPES ---------------------------- */

const ALL_CAMPUSES = 'ALL_CAMPUSES';
const ADD_CAMPUS = 'ADD_CAMPUS';
const UPDATE_CAMPUS = 'UPDATE_CAMPUS';
const REMOVE_CAMPUS = 'REMOVE_CAMPUS';

// /* -------------------------- ACTION CREATORS --------------------------- */

export function allCampuses (campuses) {
  const action = { type: ALL_CAMPUSES, campuses };
  return action;
};

export function addCampus (campus) {
  const action = { type: ADD_CAMPUS, campus: campus };
  return action;
};

export function updateCampus (campus) {
  const action = { type: UPDATE_CAMPUS, campus };
  return action;
};

export function removeCampus (id) {
  const action = { type: REMOVE_CAMPUS, id };
  return action;
};

// /* ------------------------------ REDUCERS ------------------------------ */

const campusState = [];

export default function reducer(prevState = campusState, action) {

  let newState = prevState;

  switch (action.type) {

    case ALL_CAMPUSES:
      newState = action.campuses;
      return newState;

    case ADD_CAMPUS:
      newState = [...newState, action.campus];
      return newState;

    case UPDATE_CAMPUS:
    newState = newState.filter(campus =>
      campus.id !== action.campus.id);
    newState = [...newState, action.campus];
    return newState;

    case REMOVE_CAMPUS:
      newState = newState.filter(
        campus => campus.id !== action.id);
      return newState;

    default:
      return newState;
  }
}

// /* ---------------------------- DISPATCHERS ----------------------------- */

export const showAllCampuses = () => {
  return function thunk(dispatch) {
    axios.get('/api/campuses')
      .then((res) => {
        const campuses = res.data;
        dispatch(allCampuses(campuses));
      })
      .catch(err => console.error(`Unable to show all campuses`, err));
  };
};

export const createNewCampus = (campus) => {
  return function thunk(dispatch) {
    axios.post('api/campuses', campus)
      .then(res => {
        dispatch(addCampus(res.data));
      })
      .catch(err => console.error(`Adding campus: ${campus} unsuccesful`, err));
  };
};

export const updateCampusInfo = (campus) => {
  return function thunk(dispatch) {
    axios.put(`api/campuses/${campus.id}`, campus)
    .then(res => {
      dispatch(updateCampus(res.data[1][0]));
    })
      .catch(err => console.error(`Updating campus: ${campus} unsuccesful`, err));
  };
};

export const deleteCampus = (id) => {
  return function thunk(dispatch) {
    dispatch(removeCampus(id));
    axios.delete(`api/campuses/${id}`)
      .catch(err => console.error(`Deleting campus: ${id} unsuccesful`, err));
  };
};
