import React from 'react';

const Interest = (props) => {

    const onRemove = () => {
        props.removeElement(props.index);
    };

    return <button onClick={onRemove}>{props.interest}</button>
};

export default Interest;