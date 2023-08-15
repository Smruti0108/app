import React, { useState } from 'react'
// import { useState } from 'react'

export default function TextForm(props) {
    // const [userData, setUserData] = useState({
    //   fname:'',
    //   lname:'',
    //   dname:true
    // });
    // // setText("Hello, world!")
    ;
    // const handleInput =(e)=>{
    //   const name = e.target.name;
    //   const value = e.target.value;
    //   setUserData((pre)=>{
    //     return {...pre , [name]:value}
    //   })
    //   // console.log(e);
    // }

    // const handleCheckBox =(e)=>{
    //   const name = e.target.name;
    //   const value = e.target.checked;
    //   setUserData((pre)=>{
    //     return {...pre , [name]:value}
    //   })
    // }
    // console.log(userData);

  const[text, setText]= useState('');

  const handleOnChange = (e) =>{
    console.log("On Change");
    setText(e.target.value)
  }

  const handleUpClick = () =>{
    console.log("UpperCase was clicked!!"+text);
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to Upper Case","success");
  }

  const handleLoClick = () =>{
    console.log("UpperCase was clicked!!"+text);
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to Lower Case","success");
  }
  const handleClearClick = () =>{
    console.log("UpperCase was clicked!!"+text);
    let newText = "";
    setText(newText)
    props.showAlert("clear!!","success");
  }
  const handleCopy = () =>{
    var text = document.getElementById("myBox");
    text.select()
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copy clipborad!!","success");
  }
  const handleExtraSpaces = () =>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Extra spaces removed!!","success");
  }

  return (
    <>
    <div className='container' style={{color : props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
        {/* <div className="mb-3"> */}
            {/* <input type="text" name="fname" value={userData?.fname} onChange={handleInput}/>
            <input type="text" name="lname" value={userData?.lname} onChange={handleInput}/>
            <input type="checkBox" name="dname" checked={userData?.dname} onChange={handleCheckBox}/> */}
            <div className="mb-3">
              <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor : props.mode==='dark'?'grey':'white' , 
                color : props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
            </div>
      </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
            <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to UpperCase</button>
            <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
            <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove ExtraSpaces</button>
            <div className="container my-3" style={{color : props.mode==='dark'?'white':'#042743'}}>
              <h2>Your Text Summary</h2>
              <p>{text.split(" ").length} words and {text.length} characters</p>
              <p>{0.008 * text.split(" ").length} Minutes read</p>
              <h2>Preview</h2>
              <p>{text.length>0?text:"Enter Something in the textbox above to preview it here!"}</p>
            </div>
    </>
  )
}
