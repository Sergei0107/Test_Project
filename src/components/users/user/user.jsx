import React from 'react';
import style from './user.module.css';

const User = (props) => {
    return (
        <div className={style.user}>
            <div className={style.userImage}><img src={props.pic} alt='userPic'/></div>
            <div className={style.info}>
                <a href='#'>{props.fullName}</a>
                <div className={style.city}>{props.city}</div>
                {props.isOnline && <div className={style.status}>Online</div>}
            </div>
        </div>
    )
};

export default User;