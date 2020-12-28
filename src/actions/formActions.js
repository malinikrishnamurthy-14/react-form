export const addStudent = (value) => {
    return {
        type: 'ADD_STUDENT',
        value
    }
}

export const removeStudent = (value) => {
    return {
        type: 'REMOVE_STUDENT',
        value
    }
}