import React, { useState } from 'react' //imr shortCut


export default function TextForm(props) {

  // UooerCase Button
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  }

  // LowerCase Button
  const handleLowerClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  }

  // Clear Button
  const handleClear = () => {
    setText("");
  }

  // Copy Button
  const handleCopyClick = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    //text.length > 0 && props.showAlert("Copy to Clipboard", "success");
  }

  // Remove Extra Space Button
  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
  }

  const handleOnChange = (event) => {
    //console.log("On change");
    setText(event.target.value)
  }

  const [text, setText] = useState('Enter text here');
  return (
    <>
      <div className="container">
        <h2>{props.heading}</h2>
        <div className="mb-2">
          <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="5"></textarea>
        </div>
        {/* Buttons  */}
        <button className="btn btn-primary m-2" onClick={handleUpClick} >Convert to Uppercase</button>
        <button className="btn btn-primary m-2" onClick={handleLowerClick}>Convert to Lowercase</button>
        <button className="btn btn-primary m-2" onClick={handleExtraSpace}>Remove Extar Space</button>
        <button className="btn btn-primary m-2" onClick={handleCopyClick}>Copy</button>
        <button className="btn btn-secondary mx-5" onClick={handleClear}>Clear</button>
      </div>
      <div className="container my-2 bg-info bg-opacity-10 border-top border-bottom border-info">
        {/* Text Summary Area */}
        <h2>Your text Summary</h2>
        <p> {text.split(" ").length} Words and {text.length} Characters</p>
        <p> {0.08 * text.split(" ").length} Minutes read</p>

        <h3>Preview : </h3>
        <p> {text.length > 0 ? text : "Enter something in above to preview it."} </p>
      </div>
    </>

  )
}
