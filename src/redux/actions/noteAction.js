import actionTypes from '../actionTypes';

export default{
    addNote: (note) => ({
        type: actionTypes.ADD_TODO,
        note
    }),
    updateNote: (index, note) => ({
        type: actionTypes.UPDATE_TODO,
        index,
        note,
    }),
    deleteNote: (index) =>({
        type: actionTypes.REMOVE_TODO,
        index
    })
}