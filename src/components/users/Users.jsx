import React from 'react';
import style from './users.module.css';
import {Scrollbars} from 'react-custom-scrollbars';
import {useMediaQuery} from "react-responsive";
import View from "./View";

const Users = (props) => {

    const isPortrait = useMediaQuery({query: '(orientation: portrait)'});

    return (
        <div className={isPortrait ? style.usersPortrait : style.users}>
            {!isPortrait
                ? <Scrollbars
                    thumbSize={70}
                    renderTrackHorizontal={() => <div/>}
                    renderTrackVertical={props => <div {...props} className={style.verticalTrack}/>}
                    renderThumbVertical={props => <div {...props} className={style.verticalThumb}
                                                       style={{...style, width: '5px'}}/>}
                ><View users={props.users.users}/>
                </Scrollbars>
                : <View users={props.users.users}/>
            }
        </div>
    )
};

export default Users;