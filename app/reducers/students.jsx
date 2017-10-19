

import axios from 'axios';

/* ---------------------------- ACTION TYPES ---------------------------- */

export const ALL_STUDENTS = 'ALL_STUDENTS';
export const ADD_STUDENT = 'ADD_STUDENT';
export const UDPATE_STUDENT = 'UPDATE_STUDENT';
export const REFRESH_STUDENT = 'REFRESH_STUDENT';
export const REMOVE_STUDENT = 'REMOVE_STUDENT';

/* -------------------------- ACTION CREATORS --------------------------- */

export function allStudents (students) {
  const action = { type: ALL_STUDENTS, students };
  return action;
}

export function addStudent (student) {
  const action = { type: ADD_STUDENT, student };
  return action;
}

export function updateStudent (student) {
  const action = { type: UDPATE_STUDENT, student };
  return action;
}

export const refreshStudent = (campusId) => {
  const action = { type: REFRESH_STUDENT, id: campusId };
  return action;
};

export function removeStudent (id) {
  const action = { type: REMOVE_STUDENT, id };
  return action;
}

/* ------------------------------ REDUCERS ------------------------------ */

const studentState = [];

export default function reducer(prevState = studentState, action) {

  let newState = prevState;

  switch (action.type) {

    case ALL_STUDENTS:
      newState = action.students;
      return newState;

    case ADD_STUDENT:
      newState = [...newState, action.student];
      return newState;

    case UDPATE_STUDENT:
      newState = newState.filter(student =>
        student.id !== action.student.id);
      newState = [...newState, action.student];
      return newState;

    case REFRESH_STUDENT:
      newState = newState.filter(
        student => student.campusId !== action.id);
      return newState;

    case REMOVE_STUDENT:
      newState = newState.filter(
        student => student.id !== action.studentId);
      return newState;

    default:
      return newState;
  }
}

/* ---------------------------- DISPATCHERS ----------------------------- */

export const showAllStudents = () => {
  return function thunk(dispatch) {
    axios.get('/api/students')
      .then(res => {
        dispatch(allStudents(res.data));
      })
      .catch(err => console.error(`Unable to show all students`, err));
  };
};

export const createNewStudent = (student) => {
  return function thunk(dispatch) {
    axios.post('api/students', student)
      .then((res) => {
        dispatch(addStudent(res.data));
      })
      .catch(err => console.error(`Adding student: ${student} unsuccesful`, err));
  };
};

export const updateStudentProfile = (id, student) => dispatch => {
  axios.post(`/api/students/${id}`, student)
    .then(res => dispatch(updateStudent(res.data[1][0])))
    .catch(err => console.error(`Updating student: ${student} unsuccesful`, err));
};

export const refreshStudentState = (campusId) => {
  return function thunk(dispatch) {
    dispatch(refreshStudent(campusId));
  };
};

export const deleteStudent = (id) => {
  return function thunk(dispatch) {
    axios.delete(`api/students/${id}`)
    .then(() => dispatch(removeStudent(id)))
      .catch(err => console.error(`Deleting student: ${id} unsuccesful`, err));
  };
};
