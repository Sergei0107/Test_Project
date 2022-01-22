import React from 'react';
import style from "./ProfileInfo.module.css";
import EditInfo from "./EditInfo";
import {useMediaQuery} from "react-responsive";

const ProfileInfo = (props) => {

    const state = props.profileInfo.profileInfo,
        {fullName, city, familyStatus, phone, email} = state,
        updateInfo = props.updateInfo;

    const isPortrait = useMediaQuery({query: '(orientation: portrait)'});
    const indent = isPortrait && style.indent;

    return (
        <>
            <div className={isPortrait ? style.generalInfo + " " + style.centerBlock : style.generalInfo}>
                <EditInfo state={state} updateInfo={updateInfo} maxLength={18}>
                    {fullName}
                </EditInfo>
                <p>{city}</p>
            </div>
            <div className={style.personalInfo}>
                <div className={style.personalInfoElem1}>
                    <p className={indent}>Семейное положение</p>
                    <p className={indent}>Телефон</p>
                    <p className={indent}>E-mail</p>
                </div>
                <div className={style.personalInfoElem2}>
                    <p>{familyStatus}</p>
                    <EditInfo state={state} updateInfo={updateInfo} maxLength={18}>
                        {phone}
                    </EditInfo>
                    <a href='#'><EditInfo state={state} updateInfo={updateInfo} maxLength={22}>
                        {email}
                    </EditInfo></a>
                </div>
            </div>
        </>
    )
};

export default ProfileInfo;