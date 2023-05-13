// import { Form } from "react-router-dom";
import { useState } from "react";
import classes from "./Pledge.module.css";

function PledgedForm({onCancel, onMove})  {
  const [getValue, setGetValue] = useState('');

  function inputHandler(event) {
    setGetValue(event.target.value);
  }

  

  function confirmHandler(event){
    event.preventDefault();
    if (getValue.trim() === '') {
      return;
    }
    const postData = {
      package: getValue
    };
    console.log(postData)
    onCancel()
    onMove()

  };





  return (
    <form method="post" onSubmit={confirmHandler}>
      <div className={classes.flex}>
        <p>Enter your pledge</p>

        <div className={classes.price}>
          <input 
            type="text" 
            id="name"
            name="name"
            onChange={inputHandler}
          />

          <button>Continue</button>
        </div>
      </div>
    </form>
  );
};

export default PledgedForm;
