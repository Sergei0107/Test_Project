const update_info = 'update_info';

let initialState = {
    profileInfo: {
        fullName: 'Виталя Гора',
        city: 'г. Нижние Шахты',
        familyStatus: 'холост',
        phone: '+7 (440) 554-32-12',
        email: 'vitalya@gora.ru'
    },
};

const profileInfoReducer = (state = initialState, action) => {

    switch (action.type) {
        case update_info:
            return {
                ...state,
                ...state.profileInfo,
                ...state.profileInfo[action.key] = action.newValue
            };
        default:
            return state;
    }
};

export const updateInfo = (newValue, key) => ({type: 'update_info', newValue, key});

export default profileInfoReducer;