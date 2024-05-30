import React , {useState}from 'react'

export default function TextForm(props) {
    const [text , settext] = useState('');
    
    const handleUpClick = (()=>{
        let newText = text.toUpperCase();
        settext(newText);
        props.showAlert("Converted to UpperCase" , "success");
    })
    const handleLoClick = (()=>{
        let newText = text.toLowerCase();
        settext(newText);
        props.showAlert("Converted to LowerCase" , "success");
    })
    const handleonChange = ((event)=>{
        settext(event.target.value);
    })
    const handleClearText = (()=>{
      settext("");
      props.showAlert("Text Cleared" , "success");
    })
    const handleCopy = (() =>{
      let copyText = text;
      navigator.clipboard.writeText(copyText);
      props.showAlert("Copied to Clipboard", "primary")
    })
  return (
    <>
        <div className="container my-2" style = {{color : props.mode === 'dark' ? 'white' : 'black'}}>
    <h1>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" value={text} style = {{backgroundColor: props.mode === 'dark' ? 'gray' : 'white' , color : props.mode === 'dark' ? 'white' : 'black'}} onChange={handleonChange} id="myBox" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-2 my-2" onClick = {handleUpClick}>Convert to Uppercase</button>
<button className="btn btn-primary mx-2 my-2" onClick = {handleLoClick}>Convert to Lowercase</button>
<button className="btn btn-primary mx-2 my-2" onClick = {handleClearText}>Clear Text</button>
<button className="btn btn-primary mx-2 my-2" onClick = {handleCopy}>Copy Text</button>
</div>
<div className="container my-3" style = {{color : props.mode === 'dark' ? 'white' : 'black'}}>
    <h2>Your Text Summary</h2>
    <p>{text.split(" ").filter((element)=> {return element.length !== 0 }).length} words and {text.length} characters</p>
    <p>{0.008 * text.split(" ").filter((element)=> {return element.length !== 0 }).length} Minutes read</p>
    <h2>Preview</h2>
    <p>{text.length > 0 ? text : "Enter something to preview"}</p>
</div>
</>
  );
}
