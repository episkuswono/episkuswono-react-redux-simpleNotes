import React from 'react';
import './NoteItem.styles.scss';

const NoteItem = ({title, content}) => {
    return(
        <div className="NoteItem__container">
            <h2>{title}</h2>
            <p>{content}</p>
        </div>
    );
};

export default NoteItem;