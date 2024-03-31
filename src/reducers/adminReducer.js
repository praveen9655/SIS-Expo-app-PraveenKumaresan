// reducers/adminReducer.js

import { SET_ADMIN, GET_ALL_STUDENT } from '../actions/adminActions'; // Import the action types
import isEmpty from '../validation/is-empty'

const initialState = {
  isAuthenticated: false,
  admin: null,
  allStudents: [], // Change the state property name to allStudents
};

const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ADMIN:
      return {
          ...state,
          isAuthenticated: !isEmpty(action.payload),
          admin: action.payload
      }
    case GET_ALL_STUDENT: // Change the case to match the action type
      const sortedStudents = action.payload.slice().sort((a, b) => {
          const yearOrder = { I: 1, II: 2, III: 3, IV: 4, PassedOut: 5 };

          const yearA = yearOrder[a.year] || Infinity;
          const yearB = yearOrder[b.year] || Infinity;

          // If the years are the same, then sort by registrationNumber
          if (yearA === yearB) {
              return a.registrationNumber.localeCompare(b.registrationNumber);
          }

          return yearA - yearB;
      });

      return {
          ...state,
          allStudents: sortedStudents // Update the state property with sorted students
      };
    default:
      return state;
  }
};

export default adminReducer;
