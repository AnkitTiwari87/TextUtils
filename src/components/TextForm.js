import React,{useState} from "react";


export default function TextForm(probs) {
    const handleUpClick= ()=>{
        // console.log("Uppercase was clicked"+text)
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLoClick= ()=>{
        // console.log("Lowercase was clicked"+text)
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handleClearClick= ()=>{
        // console.log("Lowercase was clicked"+text)
        let newText = ('');
       setText(newText)
    }
    const handleReverseClick= ()=>{
        // console.log("Lowercase was clicked"+text)
        let newText = "";
        for(let i=text.length-1;i>=0;i--){
            newText+=text[i]
        }
        setText(newText)
    }
    
     const handleOnChange= (e)=>{
        // console.log("On change")
        setText(e.target.value)
     }   
     const [text, setText] = useState('');
     
  return (
    <>
    <div>
        <h1>{probs.heading} </h1>
      <div className="mb-3">
        <textarea
          className="form-control" value={text} onChange={handleOnChange}
           id="myBox"
          rows="8"
        ></textarea>
      </div>
      <button className="btn btn-primary mx-2"onClick={handleUpClick}>Convert to Uppercase</button>
      <button className="btn btn-primary mx-2"onClick={handleLoClick}>Convert to Lowercase</button>
      <button className="btn btn-primary mx-2"onClick={handleClearClick}>Clear Text</button>
      <button className="btn btn-primary mx-2"onClick={handleReverseClick}>Convert to Reverse text</button>
      
      
      </div>
    <div className="container my-3">
        <h2>Your text summary</h2>
        <p>{text.split(" ").length}words ,{text.length}characters</p>
        <p>{0.08*text.split(" ").length} Minutes read</p>
         <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  );
}
