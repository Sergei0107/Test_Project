import React from 'react';
import style from './profile-1Block.module.css'
import userPic from './../../../images/UserPic.png';

const Profile_1_Block = () => {
    return (
        <div className={style.profile1Block}>
            <div className={style.profileImage}>
                <img src={userPic} alt="userPic"/>
            </div>
            <button>Добавить в друзья</button>
        </div>
    )
};

export default Profile_1_Block;