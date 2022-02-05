import React from 'react';

const InputField = ({text, handleSubmit, handleInput}) => {
    return (
        <label>
            <input placeholder="new todo..." value={text} onChange={e => handleInput(e.target.value)}/>
            <button onClick={handleSubmit}>Add Todo</button>
        </label>
    );
};

export default InputField;