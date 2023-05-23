import React, { useState } from 'react';

const TextForm = (props) => {
    const handleClicked = () => {
        setText(text.toUpperCase());
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const [text, setText] = useState('Enter your text here...');

    return (
        <>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleClicked}>Convert to UpperCase</button>
        </>
    )
}

export default TextForm
