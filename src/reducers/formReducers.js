const defaultState = {
  students: [],
};

export const formReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_STUDENT":
      const allStudents = [...state.students, action.value];
      return {
        ...state,
        students: allStudents,
      };

    case "REMOVE_STUDENT":
      const filteredStudents = state.students.filter((student) => student.id !== action.value);
      return {
        ...state,
        students: filteredStudents,
      };

    default:
      return state;
  }
};

export default formReducer;
