import React, { useState } from "react";

export default function Form() {
  const handleOnChange = (event) =>{
    console.log("onchange clicked")
    setText(event.target.value)
  }
 
  const quliti = (q) =>{
    
    setQulification(q.target.value);
  }
  const hobbi = (h) =>{
    console.log("hobbie clicked");
    setHobbies(h.target.value)
  }
  const clear = () =>{
    let newText = " ";
    setText(newText);
    setQulification(newText);
    setHobbies(newText);
  }
  const Uppercase = () =>{
    let newText = text.toLocaleUpperCase();
    setText(newText);
    let qnewText = qulification.toUpperCase();
    setQulification(qnewText);
    let hnewText = hobbies.toLocaleUpperCase();
    setHobbies(hnewText);
    
  }


  const [text, setText] = useState("  ");
  const [qulification, setQulification] = useState("  ");
  const [hobbies, setHobbies] = useState("  ");
  return (
    <>
      <h1>The input element</h1>

      <form action="/action_page.php">
        <label htmlFor="fname">Your name:</label>
        <input type="text" id="fname" name="fname"
         value={text}
         onChange={handleOnChange}/>
        <br />
        <br />
        <label htmlFor="lname">Qualification :
        </label>
        <input type="text" id="lname" onChange={quliti} name="lname"value={qulification} />
        <br />
        <br />
        <label htmlFor="lname">Hobbies :
        </label>
        <input type="text" id="lname" name="lname" onChange={hobbi} value={hobbies}/>
        <br />
        <br />
        {/* <input type="submit" value="Submit" /> */}

      </form>
      <button onClick={Uppercase} >To upper case</button>

      <button onClick={clear} >Clear Form</button>
      <h2>preview</h2>

      <h4>I _____  {text}_____ would like to apply for an internship at your organisation.</h4>

      <h4>My Qualification is _____  {qulification}______ </h4>
      <h4>My Hobbies is _____  {hobbies}______</h4>
    </>
  );
}