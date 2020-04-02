import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import noteActions from '../redux/actions/noteAction';
import './InputSection.style.scss';

const InputSection = () => {
const title = useSelector(state => state.inputs.title);
const content = useSelector(state => state.inputs.content);
const dispatch = useDispatch();

    return(
        <div className="InputSection__container">
            <input type="text" placeholder="Note title"/>
            <textarea placeholder="Note content">
            </textarea>
            <button>
                ADD NOTE
            </button>
        </div>
    );
};

export default InputSection;