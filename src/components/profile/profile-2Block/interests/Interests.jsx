import React, {useRef} from 'react';
import style from "./interests.module.css";
import Interest from "./Interest";
import {useMediaQuery} from "react-responsive";

const Interests = (props) => {
    let interestsElements = props.interests.interests.map(i => <Interest key={i.id} interest={i.interest}
        index={props.interests.interests.indexOf(i)} removeElement={props.removeElement}/>);

    let inputEl = useRef();

    let onAddInterest = (e) => {
        e.preventDefault();
        props.addInterest(inputEl.current.value);
    };

    const isPortrait = useMediaQuery({query: '(orientation: portrait)'});
    const indent = isPortrait && style.indent;

    return (
        <>
            <div className={style.interests1Block}>
                <div className={indent}>Интересы</div>
                <form className={style.interestsForm} onSubmit={onAddInterest}>
                    <input type='text' placeholder='Добавить интерес'
                           name='newInterest' ref={inputEl}/>
                    <button>&#10148;</button>
                </form>
            </div>
            <div className={style.interests2Block}>
                <div className={indent}>{interestsElements}</div>
            </div>
        </>
    )
};

export default Interests;