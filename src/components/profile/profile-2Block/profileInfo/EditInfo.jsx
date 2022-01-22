import React, {useState} from "react";
import style from './ProfileInfo.module.css';

const EditInfo = (props) => {

    const key = Object.keys(props.state).find(key => props.state[key] === props.children);
    const [editMode, setEditMode] = useState(false);
    const [currentInfo, setNewInfo] = useState(props.children);
    const [inputSize, setInputSize] = useState({width: 0, height: 0});
    const [keyCode, setKeyCode] = useState('');

    const activateEditMode = (e) => {
        setEditMode(true);
        setInputSize({
            width: e.target.offsetWidth,
            height: e.target.offsetHeight
        });

    };

    const onChangeValue = (e) => {
        setNewInfo(e.currentTarget.value || '');
        let width = e.target.parentElement.lastElementChild.getBoundingClientRect().width;
        if (Number(keyCode) !== 8 && e.target.value.length <= 18) {
            setInputSize({...inputSize, width: width});
        }
    };

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateInfo(currentInfo, key);
    };

    const onSetKeyCode = (e) => {
        setKeyCode(e.keyCode)
    };

    return (
        <>
            {!editMode
                ? <p onClick={activateEditMode}>{currentInfo || String.fromCharCode(8230)}</p>
                : <p>
                    <input type='text' autoFocus={true} onBlur={deactivateEditMode}
                           onChange={onChangeValue} value={currentInfo}
                           style={{width: inputSize.width + 'px', height: inputSize.height + 'px'}}
                           onKeyDown={onSetKeyCode} maxLength={props.maxLength}/>
                    <div className={style.measuredDiv}>' '' '{currentInfo}</div>
                </p>
            }
        </>
    )
};

export default EditInfo;