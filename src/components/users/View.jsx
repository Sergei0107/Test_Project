import React from "react";
import style from "./users.module.css";
import User from "./user/user";
import {useMediaQuery} from "react-responsive";

const View = (props) => {

    const isPortrait = useMediaQuery({query: '(orientation: portrait)'});

    return <div className={isPortrait ? style.viewPortrait : style.view}>
        {props.users.map(u => <User user={u}
                                          key={u.id}
                                          pic={u.pic}
                                          fullName={u.fullName}
                                          city={u.city}
                                          isOnline={u.isOnline}/>)
        }
    </div>
};

export default View;