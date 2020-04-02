import React from 'react';
import { useSelector } from 'react-redux';
import NoteItem from './NoteItem';
import './NotesSection.style.scss';

const NotesSection = () => {

    const notes = useSelector(state => state.notes.notes)

    if(notes.length === 0) {
        return (
            <div className="NotesSection__container__empty">
                <p>There is no note yet. Please add one.</p>
            </div>
        )
    }

    return(
        <div className="NotesSection__container">
            {notes.map((item, index) => (
                <NoteItem 
                title={item.title}
                content={item.content}
                />
            ))}
        </div>
    );
};

export default NotesSection;