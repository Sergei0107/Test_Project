const add = 'add';
const remove = 'remove';

let initialState = {
    interests: [
        {interest: 'музыка'},
        {interest: 'компьютеры'},
        {interest: 'радио'}
    ],
};

const interestsReducer = (state = initialState, action) => {
    switch (action.type) {
        case add:
            return action.newValue
                ? {
                    ...state,
                    interests: [{interest: action.newValue}, ...state.interests]
                }
                : state
        case remove:
            let newArr = [...state.interests.slice(0, action.index),
                ...state.interests.slice(action.index + 1, state.interests.length)];
            return {
                ...state,
                interests: newArr
            }
        default:
            return state;
    }
};

export const addInterest = (newValue) => ({type: 'add', newValue});
export const removeElement = (index) => ({type: 'remove', index});

export default interestsReducer;