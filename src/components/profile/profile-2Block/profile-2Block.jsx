import React from 'react';
import style from './profile-2Block.module.css';
import InterestsContainer from "./interests/InterestsContainer";
import ProfileInfoContainer from "./profileInfo/ProfileInfoContainer";

const Profile_2_Block = () => {
    return (
        <div className={style.profile2Block}>
            <ProfileInfoContainer/>
            <InterestsContainer/>
        </div>
    )
};

export default Profile_2_Block;