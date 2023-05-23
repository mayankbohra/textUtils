import React, { useState } from 'react';

const TextForm = (props) => {
    const handleUpClicked = () => {
        setText(text.toUpperCase());
    }

    const handleLoClicked = () => {
        setText(text.toLowerCase());
    }
    
    const handleCopy = () => {
        props.showAlert("Text copied successfully", "success");
        const text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    
    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const [text, setText] = useState('');

    return (
        <>
        <div className="container">
            <h1 className={`text-${props.mode==='light'?'dark':'light'}`}>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1 my-1" onClick={handleUpClicked}>Convert to UpperCase</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleLoClicked}>Convert to UpperCase</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
        </div>
        <div className={`container mt-4 text-${props.mode==='light'?'dark':'light'}`}>
            <h2>Your Text Summary</h2>
            <p>{text.trim()==='' ? 0 : text.trim().split(" ").length} words, {text.length} characters</p>
            <p>{0.008 * (text.trim()==='' ? 0 : text.trim().split(" ").length)} minutes read</p>
            <h3>Preview</h3>
            <p>{text}</p>
        </div>
        </>
    )
}

export default TextForm
