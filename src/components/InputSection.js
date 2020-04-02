import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import noteActions from '../redux/actions/noteAction';
import inputActions from '../redux/actions/inputActions';
import './InputSection.style.scss';

const InputSection = () => {
const id = useSelector(state => state.inputs.id);
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

const deleteNote = () => {

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
            <div className="InputSection_container_btnWrapper"
            >
                <button
                onClick={addNote}
            >
                {id === -1 ? "ADD NOTE" : "UPDATE NOTE"}
            </button>
            {id !== -1 &&
            <button
            onClick={deleteNote}
            style={{ marginLeft: '1em', backgroundColor: 'red' }}
            >
                DELETE NOTE
            </button> 
            }
            </div>
        </div>
    );
};

export default InputSection;