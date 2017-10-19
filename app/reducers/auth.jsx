'use strict';

// import axios from 'axios';

// /* ---------------------------- ACTION TYPES ---------------------------- */

// export const ALL_STUDENTS = 'ALL_STUDENTS';
// export const ADD_STUDENT = 'ADD_STUDENT';
// export const UDPATE_STUDENT = 'UPDATE_STUDENT';
// export const REMOVE_STUDENT = 'REMOVE_STUDENT';

// /* -------------------------- ACTION CREATORS --------------------------- */

// export function allStudents(students) {
//   const action = { type: ALL_STUDENTS, students };
//   return action;
// }

// export function addStudent(student) {
//   const action = { type: ADD_STUDENT, student };
//   return action;
// }

// export function updateStudent(student) {
//   const action = { type: UDPATE_STUDENT, student };
//   return action;
// }

// export function removeStudent(studentId) {
//   const action = { type: REMOVE_STUDENT, studentId };
//   return action;
// }

// /* ------------------------------ REDUCERS ------------------------------ */

export default function studentReducer(auth = [], action) {
  switch (action.type) {

//     case ALL_STUDENTS:
//       return action.students;

//     case ADD_STUDENT:
//       return [...students, action.student];

//     case UDPATE_STUDENT:
//       return students.map(student => (
//         action.student.id === student.id ? action.student : student));

//     case REMOVE_STUDENT:
//       return students.filter(student => student.id !== action.studentId);

    default:
      return auth;
  }
}

// /* ---------------------------- DISPATCHERS ----------------------------- */

// export const showAllStudents = dispatch => {
//   axios.get('/api/students')
//     .then(res => dispatch(allStudents(res.data)))
//     .catch(err => console.error(`Finding all students: ${students} unsuccesful`, err));
// };

// export const createNewStudent = student => dispatch => {
//   axios.post('/api/students', student)
//     .then(res => dispatch(addStudent(res.data)))
//     .catch(err => console.error(`Adding student: ${student} unsuccesful`, err));
// };

// export const updateStudentProfile = (id, student) => dispatch => {
//   axios.post(`/api/students/${id}`, student)
//     .then(res => dispatch(updateStudent(res.data)))
//     .catch(err => console.error(`Updating student: ${student} unsuccesful`, err));
// };

// export const deleteStudent = id => dispatch => {
//   axios.post(`/api/students/${id}`)
//     .then(res => dispatch(removeStudent(res.data)))
//     .catch(err => console.error(`Deleting student: ${id} unsuccesful`, err));
// };
