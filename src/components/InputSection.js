import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import noteActions from '../redux/actions/noteAction';
import inputActions from '../redux/actions/inputActions';
import './InputSection.style.scss';

const InputSection = () => {
const title = useSelector(state => state.inputs.title);
const content = useSelector(state => state.inputs.content);
const dispatch = useDispatch();

const addNote = () => {
    if(title && content){
        dispatch(noteActions.addNote({
            title,
            content
        }))
        dispatch(inputActions.resetInputs())
    }
}

    return(
        <div className="InputSection__container">
            <input type="text" 
            placeholder="Note title"
            value={title}
            onChange={e => 
                dispatch(inputActions.setInputTitle(e.target.value))
            }
            />
            <textarea 
            placeholder="Note content"
            value={content}
            onChange={e => 
                dispatch(inputActions.setInputContent(e.target.value))
            }
            >    
            </textarea>
            <button
                onClick={addNote}
            >
                ADD NOTE
            </button>
        </div>
    );
};

export default InputSection;