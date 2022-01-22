import Pic from '../images/Pic.png';
import PicCopy3 from '../images/Pic copy 3.png';
import PicCopy from '../images/Pic copy.png';
import PicCopy4 from '../images/Pic copy 4.png';
import PicCopy2 from '../images/Pic copy 2.png';
import Layer1 from '../images/Layer 1.png';

let initialState = {
    users: [
        {id: 1, pic: Pic, fullName: 'Лев Бронштейн', city: 'г. Ханты-Мансийск', isOnline: true},
        {id: 2, pic: PicCopy3, fullName: 'Находка Капитал', city: 'г. Усть-Бельск', isOnline: false},
        {id: 3, pic: PicCopy, fullName: 'Яндекс Петренко', city: 'г. Пермь', isOnline: false},
        {id: 4, pic: PicCopy4, fullName: 'Успех Возможностей', city: 'г. Радонеж', isOnline: true},
        {id: 5, pic: PicCopy2, fullName: 'Инна Нашлась', city: 'г. Омск', isOnline: true},
        {id: 6, pic: Layer1, fullName: 'Алла Подольская', city: 'г. Петропавловск-Камчатский', isOnline: true},
        {id: 7, pic: '', fullName: '', city: '', isOnline: false},
        {id: 8, pic: '', fullName: '', city: '', isOnline: false},
        {id: 9, pic: '', fullName: '', city: '', isOnline: false},
        {id: 10, pic: '', fullName: '', city: '', isOnline: false},
    ]
};

const usersReducer = (state = initialState, action) => {
    return state;
};

export default usersReducer;